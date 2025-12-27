import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import "./App.css";
import type { ReviewResponse } from "./types";
import HistoryList from "./components/HistoryList";

function App() {
  const [reviewText, setReviewText] = useState("");
  const [businessType, setBusinessType] = useState("Restaurant");
  const [generatedReply, setGeneratedReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!reviewText) return;

    setLoading(true);
    setError("");
    setGeneratedReply("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reviewText, businessType }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate reply");
      }

      const data: ReviewResponse = await response.json();
      setGeneratedReply(data.reply);

      // Save to Firestore
      try {
        await addDoc(collection(db, "history"), {
          originalReview: reviewText,
          businessType,
          generatedReply: data.reply,
          createdAt: new Date(),
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Google Review Bot
          </h1>
          <p className="text-slate-600 text-lg font-medium">
            Turn customer feedback into professional responses in seconds.
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="grid gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="bg-emerald-100 text-emerald-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold border border-emerald-200">
                1
              </span>
              Paste the Review
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Business Type
                </label>
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-all outline-none bg-slate-50 text-slate-900 font-medium"
                >
                  <option value="Restaurant">Restaurant</option>
                  <option value="Coffee Shop">Coffee Shop</option>
                  <option value="Retail Store">Retail Store</option>
                  <option value="Hotel">Hotel</option>
                  <option value="Service Provider">
                    Service Provider (Plumber, Electrician)
                  </option>
                  <option value="Medical Practice">Medical Practice</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Customer Review
                </label>
                <textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Paste the customer's review here..."
                  className="w-full h-32 px-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-all outline-none resize-none bg-slate-50 text-slate-900 font-medium placeholder:text-slate-400"
                />
              </div>

              <button
                onClick={handleGenerate}
                disabled={loading || !reviewText}
                className={`w-full py-4 px-6 rounded-xl text-white font-bold text-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0
                  ${
                    loading || !reviewText
                      ? "bg-slate-300 cursor-not-allowed shadow-none"
                      : "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200"
                  }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Generating Reply...
                  </span>
                ) : (
                  "Generate Professional Reply"
                )}
              </button>

              {error && (
                <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm text-center font-medium border border-red-100">
                  {error}
                </div>
              )}
            </div>
          </div>

          {/* Result Section */}
          {generatedReply && (
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-slate-200 animate-fade-in-up">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="bg-emerald-100 text-emerald-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold border border-emerald-200">
                  2
                </span>
                Suggested Reply
              </h2>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-slate-800 leading-relaxed font-medium">
                "{generatedReply}"
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => navigator.clipboard.writeText(generatedReply)}
                  className="text-sm font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 px-4 py-2 rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="9"
                      y="9"
                      width="13"
                      height="13"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  Copy to Clipboard
                </button>
              </div>
            </div>
          )}

          {/* History Section */}
          <HistoryList />
        </div>
      </div>
    </div>
  );
}

export default App;
