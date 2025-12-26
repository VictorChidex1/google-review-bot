# 🤖 Google Reviews AI Auto-Responder

> **A Serverless Micro-SaaS that helps local businesses respond to customer reviews instantly using AI.**

![Project Status](https://img.shields.io/badge/Status-In%20Development-yellow)
![Stack](https://img.shields.io/badge/Stack-React%20%7C%20TypeScript%20%7C%20Vercel%20%7C%20Firebase-blue)

## 📖 About The Project

This application solves a critical problem for small business owners: **reputation management**.

Google ranks businesses higher when they respond to reviews, but owners are often too busy or don't know what to write. This tool allows them to paste a customer review and instantly generates a warm, professional, and human-sounding response using the **Gemini Pro LLM**.

It uses a **Hybrid Serverless Architecture**: Vercel handles the AI logic (Backend), while Firebase stores the review history (Database).

### ✨ Key Features

- **AI-Powered Responses:** Generates context-aware replies (Positive, Negative, or Neutral).
- **Anti-Robot Logic:** Custom prompt engineering ensures responses sound human, not generated.
- **Review History:** Automatically saves all generated replies to Firestore for future reference.
- **Serverless Architecture:** Zero server maintenance using Vercel & Firebase.
- **Secure API Handling:** API keys are never exposed to the client side.

---

## 🛠 Tech Stack

**Frontend:**

- React (Vite)
- TypeScript
- Tailwind CSS (Planned)

**Backend (Serverless):**

- Vercel Serverless Functions (Node.js)
- Google Gemini API (Generative AI)

**Database:**

- **Firebase Firestore** (NoSQL Database for storing review history)

---

## 🚀 How It Works (Architecture)

1.  **Frontend:** User inputs the "Review Text" and "Business Type" in the React UI.
2.  **API Call:** React sends a secure POST request to the Vercel Backend (`/api/generate`).
3.  **The Brain:** The Vercel Function injects the data into a specialized "Persona Prompt."
4.  **AI Generation:** Google Gemini processes the prompt and returns a human-like reply.
5.  **The Memory:** React receives the reply and **saves it to Firebase Firestore** so the user doesn't lose it.
6.  **Result:** The user sees the reply instantly and can copy it to their clipboard.

---

## 💻 Getting Started Locally

If you want to run this project on your machine:

### 1. Clone the repository

```bash
git clone [https://github.com/your-username/google-review-bot.git](https://github.com/your-username/google-review-bot.git)
cd google-review-bot
```
