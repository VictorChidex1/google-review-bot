# 🧠 Project Context: Google Reviews AI Auto-Responder

## 📌 Project Overview

We are building a **Micro-SaaS** that helps local businesses automatically generate professional responses to customer reviews using AI.

- **Goal:** User inputs a review -> AI generates a human-like reply -> User copies it -> App saves history.
- **Target Audience:** Local business owners (Restaurants, Real Estate, etc.).
- **Constraint:** Must run entirely on **Free Tier** infrastructure (Vercel + Firebase Spark Plan).

---

## 🤝 AI Collaboration Protocol (Strict)

**1. PERMISSION FIRST:** You (the AI) must **always** ask for explicit permission before implementing any new feature, refactoring code, or changing architecture. Do not generate full implementation code until the user says "Yes" or "Proceed."

**2. THE "WHY" RULE:** Before suggesting any change, you must provide a detailed explanation of:

- **The Risk:** What happens if we don't do it? (e.g., Security vulnerability, Crash risk).
- **The Value:** What do we gain? (e.g., Scalability, Lower cost, Better UX).
- **The Plan:** Briefly explain how you will build it.

---

## 🛠 Tech Stack (Strict)

- **Frontend:** React (Vite) + TypeScript.
- **Styling:** Tailwind CSS (Version 3.4 - Stable).
- **Backend:** Vercel Serverless Functions (Node.js / TypeScript).
  - _Note:_ We are NOT using Firebase Cloud Functions (too expensive).
- **Database:** Firebase Firestore (Web SDK).
- **AI Engine:** Google Gemini Pro API (`@google/generative-ai`).

---

## 🎨 Design System (Strict)

**Theme:** "Growth & Profit" (Trustworthy, Expensive, Professional).
**NO** generic AI purple/neon colors.

- **Primary Color:** Emerald Green (`emerald-600` / `#059669`)
  - _Usage:_ CTA Buttons, Active States, Success Messages.
  - _Hover:_ `emerald-700` (`#047857`).
- **Secondary/Dark:** Deep Slate (`slate-900` / `#0f172a`)
  - _Usage:_ Headings, Heavy Text, Dark Backgrounds.
- **Light/Background:** Slate 50 (`slate-50` / `#f8fafc`)
  - _Usage:_ Main App Background.
- **Card Background:** White (`#ffffff`).

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
4.  **Styling:** \* Mobile-first.
    - Use Semantic names if configured (e.g., `bg-primary`) or strict utility classes (`bg-emerald-600`).

---

## 📂 Folder Structure

- `/src`: Frontend React code.
  - `/src/firebase.ts`: Database connection logic.
- `/api`: Backend Vercel Functions (Serverless).
  - `/api/generate.ts`: Main AI logic.

## 📍 Current Phase: Phase 3 (Frontend Construction)

- [x] Backend API is built and tested.
- [x] Database connection is configured.
- [x] **Design System Defined:** Emerald Green + Deep Slate.
- [ ] **Current Task:** Building the React UI (Forms, Buttons, Display Area).
