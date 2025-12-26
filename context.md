# 🧠 Project Context: Google Reviews AI Auto-Responder

## 📌 Project Overview

We are building a **Micro-SaaS** that helps local businesses automatically generate professional responses to customer reviews using AI.

- **Goal:** User inputs a review -> AI generates a human-like reply -> User copies it -> App saves history.
- **Target Audience:** Local business owners (Restaurants, Real Estate, etc.).
- **Constraint:** Must run entirely on **Free Tier** infrastructure (Vercel + Firebase Spark Plan).

---

## 🛠 Tech Stack (Strict)

- **Frontend:** React (Vite) + TypeScript.
- **Styling:** Tailwind CSS (use standard utility classes).
- **Backend:** Vercel Serverless Functions (Node.js / TypeScript).
  - _Note:_ We are NOT using Firebase Cloud Functions (too expensive).
- **Database:** Firebase Firestore (Web SDK).
- **AI Engine:** Google Gemini Pro API (`@google/generative-ai`).

---

## 🏗 Architecture & Data Flow

**The "Hybrid" Serverless Model:**

1.  **Frontend (React):** Catches user input (Review Text, Business Type).
2.  **Backend (Vercel):**
    - Receives POST request at `/api/generate`.
    - Securely holds `GEMINI_API_KEY`.
    - Constructs the "Persona Prompt" (Anti-robot logic).
    - Returns generated text to Frontend.
3.  **Database (Firestore):**
    - Frontend receives AI reply.
    - Frontend _immediately_ writes the interaction to Firestore collection `history`.

---

## 📝 Coding Guidelines

1.  **TypeScript:** strictly typed. Avoid `any`. Use interfaces for all data models (e.g., `Review`, `HistoryItem`).
2.  **API Calls:**
    - Frontend must call `/api/...` (Vercel), NEVER call Google Gemini directly.
    - Use `fetch` or `axios` for API calls.
3.  **Environment Variables:**
    - Backend: Uses `process.env.GEMINI_API_KEY`.
    - Frontend: Uses `import.meta.env` for Firebase config (if needed).
4.  **Styling:** Mobile-first. Use Tailwind for layout.

---

## 📂 Folder Structure

- `/src`: Frontend React code.
  - `/src/firebase.ts`: Database connection logic.
- `/api`: Backend Vercel Functions (Serverless).
  - `/api/generate.ts`: Main AI logic.

## 📍 Current Phase: Phase 3 (Frontend Construction)

- [x] Backend API is built and tested.
- [x] Database connection is configured.
- [ ] **Current Task:** Building the React UI (Forms, Buttons, Display Area).
