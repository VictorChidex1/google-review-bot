import { GoogleGenerativeAI } from "@google/generative-ai";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import dotenv from "dotenv";

// Load environment variables manually for local development
dotenv.config({ path: ".env.local" });

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 1. CORS Setup (Allows your frontend to talk to this backend)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle the "Preflight" check (Browser asking "Can I talk to you?")
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    console.log("Debug: API Key present?", !!apiKey);
    if (!apiKey) {
      console.error("Error: GEMINI_API_KEY is missing");
      return res.status(500).json({
        error: "Server Configuration Error: GEMINI_API_KEY is missing",
      });
    }

    // 3. Setup Gemini
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // 4. Parse the Incoming Data
    const { reviewText, businessType } = req.body || {};

    if (!reviewText || !businessType) {
      return res
        .status(400)
        .json({ error: "Missing reviewText or businessType" });
    }

    const prompt = `
      You are the owner of a ${businessType}. 
      Write a warm, professional, short reply to this customer review.
      
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

    // 7. Send Back to Frontend
    return res.status(200).json({ reply: text });
  } catch (error: any) {
    console.error("Backend Error:", error);
    return res
      .status(500)
      .json({ error: error.message || "Failed to generate reply" });
  }
}
