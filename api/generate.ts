import { GoogleGenerativeAI } from "@google/generative-ai";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import dotenv from "dotenv";
import admin from "firebase-admin";
import path from "path";
import fs from "fs";

// Load environment variables manually for local development
dotenv.config({ path: ".env.local" });

// Initialize Firebase Admin (Singleton)
function getAdminAuth() {
  if (!admin.apps?.length) {
    console.log("Initializing Firebase Admin...");
    try {
      // 1. Try to load from local file (Local Development)
      const serviceAccountPath = path.join(
        process.cwd(),
        "serviceAccountKey.json"
      );

      if (fs.existsSync(serviceAccountPath)) {
        console.log("Found serviceAccountKey.json locally.");
        const serviceAccount = JSON.parse(
          fs.readFileSync(serviceAccountPath, "utf8")
        );
        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
        });
      } else {
        // 2. Production: Use Environment Variables (Recommended for Vercel)
        console.log("Checking FIREBASE_SERVICE_ACCOUNT_KEY env var...");
        const serviceAccountEnv = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
        if (serviceAccountEnv) {
          admin.initializeApp({
            credential: admin.credential.cert(JSON.parse(serviceAccountEnv)),
          });
        } else {
          console.error(
            "CRITICAL: Missing serviceAccountKey.json AND FIREBASE_SERVICE_ACCOUNT_KEY env var"
          );
          return null;
        }
      }
    } catch (error) {
      console.error("Firebase Admin Init Error:", error);
      return null;
    }
  } else {
    // console.log("Firebase Admin already initialized.");
  }
  return admin.firestore();
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 1. CORS Setup
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        error: "Server Configuration Error: GEMINI_API_KEY is missing",
      });
    }

    const {
      reviewText,
      businessType,
      tone = "Professional",
      userId,
    } = req.body || {};

    if (!reviewText || !businessType) {
      return res
        .status(400)
        .json({ error: "Missing reviewText or businessType" });
    }

    // --- SECURITY & RATE LIMITING LOGIC (The "Bouncer") ---
    let validatedUserId = userId; // Default to body (unsafe) for backward compat, or null

    // 1. Try to verify the ID Token (The secure way)
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      const idToken = authHeader.split("Bearer ")[1];
      try {
        const db = getAdminAuth(); // Determine admin app
        // We need the Auth service, not just Firestore.
        // Note: getAdminAuth() currently returns firestore(). We need to fix that helper or access auth() differently.
        // Let's assume standard admin.auth() is available if initialized.

        if (admin.apps.length) {
          const decodedToken = await admin.auth().verifyIdToken(idToken);
          validatedUserId = decodedToken.uid; // ✅ TRUSTED IDENTITY
        } else {
          console.error("Firebase Admin not initialized, cannot verify token.");
          // Fail open or closed? If config is broken, better to fail closed for security, or open for dev?
          // Let's fail with specific error
          return res.status(500).json({
            error: "Server Configuration Error: Admin SDK not initialized.",
          });
        }
      } catch (e: any) {
        console.error("Token Verification Failed:", e.message);
        return res.status(401).json({
          error:
            "Invalid or expired session. Please login again. Details: " +
            e.message,
        });
      }
    }

    if (validatedUserId) {
      const db = getAdminAuth();
      if (db) {
        const userRef = db.collection("user_limits").doc(validatedUserId);
        const userDoc = await userRef.get();

        const now = new Date();
        const today = now.toISOString().split("T")[0]; // YYYY-MM-DD

        let dailyCount = 0;
        let lastResetDate = "";

        if (userDoc.exists) {
          const data = userDoc.data();
          dailyCount = data?.dailyCount || 0;
          const lastResetTimestamp = data?.lastReset;
          if (lastResetTimestamp) {
            lastResetDate = lastResetTimestamp
              .toDate()
              .toISOString()
              .split("T")[0];
          }
        }

        // Reset if new day
        if (lastResetDate !== today) {
          dailyCount = 0;
          await userRef.set(
            {
              dailyCount: 0,
              lastReset: admin.firestore.FieldValue.serverTimestamp(),
            },
            { merge: true }
          );
        }

        // Check Admin Status (Securely)
        try {
          const userProfileDoc = await db
            .collection("users")
            .doc(validatedUserId)
            .get();
          const isAdmin =
            userProfileDoc.exists && userProfileDoc.data()?.isAdmin === true;

          if (!isAdmin && dailyCount >= 10) {
            return res.status(429).json({
              error:
                "Daily limit reached (10/10). Upgrade to Premium for unlimited reviews.",
            });
          }

          // Increment
          if (!isAdmin) {
            await userRef.set(
              {
                dailyCount: admin.firestore.FieldValue.increment(1),
                lastReset: admin.firestore.FieldValue.serverTimestamp(), // Keep updating this ensuring we track last activity
              },
              { merge: true }
            );
          }
        } catch (e) {
          console.error("Admin Check/Write Error", e);
        }
      }
    }
    // ---------------------------

    // 3. Setup Gemini
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // 4. Construct Prompt based on Tone
    const toneInstructions = {
      Professional: "Write a polished, concise, and business-like reply.",
      Friendly:
        "Write a warm, casual, and enthusiastic reply with a personal touch.",
      Empathetic:
        "Write a deeply caring, understanding, and apologetic reply (if needed). Focus on their feelings.",
    };

    const selectedInstruction =
      toneInstructions[tone as keyof typeof toneInstructions] ||
      toneInstructions["Professional"];

    const prompt = `
      You are the owner of a ${businessType}. 
      ${selectedInstruction}
      
      RULES:
      - Be polite but not robotic.
      - Do not use "Dear Valued Customer".
      - Keep it under 50 words.
      - If they are angry, apologize and ask them to email support.

      CUSTOMER REVIEW: "${reviewText}"
    `;

    // 6. Generate Response
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({ reply: text });
  } catch (error: any) {
    console.error("Backend Error:", error);
    return res
      .status(500)
      .json({ error: error.message || "Failed to generate reply" });
  }
}
