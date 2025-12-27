const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config({ path: ".env.local" });

async function listModels() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("Error: GEMINI_API_KEY is missing in .env.local");
    return;
  }

  const genAI = new GoogleGenerativeAI(apiKey);

  try {
    console.log("Fetching available models...");
    // For listing models, we don't need a specific model instance,
    // but the SDK structure usually involves getting a model or using the raw manager if exposed.
    // Actually, in the JS SDK, listing models isn't always directly exposed on the client efficiently without using the model manager/admins.
    // However, we can try to just use a known "latest" model.
    // But to strictly follow the user's request (Call ListModels), let's try to see if the SDK supports it easily or if we should just curl.

    // Attempting to access the 'modelManager' or equivalent if available,
    // but standard usage is usually just checking documentation.
    // Let's use a simpler approach: Try 'gemini-1.5-flash' which is the current standard.

    // Wait, the error message literally says: "Call ListModels to see the list..."
    // Note: The node SDK might not expose `listModels` on `GoogleGenerativeAI` class directly in older versions?
    // Let's use the REST API via fetch for absolute certainty.

    // Models to check specifically as requested by user
    const targetModels = [
      "gemini-2.0-flash",
      "gemini-2.0-pro-exp",
      "gemini-2.0-flash-exp",
      "gemini-flash-latest",
      "gemini-2.0-flash-001", // Adding this as it was seen earlier
    ];

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`
    );
    const data = await response.json();

    if (data.models) {
      console.log("\n=== COMPATIBILITY CHECK ===");
      const availableNames = data.models.map((m) =>
        m.name.replace("models/", "")
      );

      targetModels.forEach((target) => {
        const isAvailable = availableNames.includes(target);
        console.log(
          `Model: ${target} -> ${isAvailable ? "AVAILABLE ✅" : "NOT FOUND ❌"}`
        );
      });

      console.log("\n=== ALL AVAILABLE GENERATE_CONTENT MODELS ===");
      data.models.forEach((m) => {
        if (
          m.supportedGenerationMethods &&
          m.supportedGenerationMethods.includes("generateContent")
        ) {
          console.log(m.name);
        }
      });
    } else {
      console.log("Check Output:", JSON.stringify(data, null, 2));
    }
  } catch (error) {
    console.error("Error listing models:", error);
  }
}

listModels();
