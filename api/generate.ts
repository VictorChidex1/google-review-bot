import { GoogleGenerativeAI } from "@google/generative-ai";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import dotenv from "dotenv";
import * as admin from "firebase-admin";
import path from "path";
import fs from "fs";

// Load environment variables manually for local development
dotenv.config({ path: ".env.local" });

// Initialize Firebase Admin (Singleton)
function getAdminAuth() {
  if (!admin.apps?.length) {
    try {
      // 1. Try to load from local file (Local Development)
      const serviceAccountPath = path.join(
        process.cwd(),
        "serviceAccountKey.json"
      );

      if (fs.existsSync(serviceAccountPath)) {
        const serviceAccount = JSON.parse(
          fs.readFileSync(serviceAccountPath, "utf8")
        );
        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
        });
      } else {
        // 2. Production: Use Environment Variables (Recommended for Vercel)
        // You would typically set FIREBASE_SERVICE_ACCOUNT_KEY env var with the JSON string
        const serviceAccountEnv = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
        if (serviceAccountEnv) {
          admin.initializeApp({
            credential: admin.credential.cert(JSON.parse(serviceAccountEnv)),
          });
        } else {
          console.error(
            "Missing serviceAccountKey.json AND FIREBASE_SERVICE_ACCOUNT_KEY env var"
          );
          // Fallback for build phase or incomplete setup
          return null;
        }
      }
    } catch (error) {
      console.error("Firebase Admin Init Error:", error);
      return null;
    }
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

    // --- RATE LIMITING LOGIC (ADMIN SDK) ---
    if (userId) {
      const db = getAdminAuth();
      if (db) {
        const userRef = db.collection("user_limits").doc(userId);
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
          const userProfileDoc = await db.collection("users").doc(userId).get();
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
          // Proceed if admin check fails? Better to fail open or closed?
          // For now, fail open for user experience but log error.
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
      - Be polite.
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
