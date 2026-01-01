import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import HistoryList from "../components/HistoryList";
import ReviewForm from "../components/ReviewForm";
import ReviewResult from "../components/ReviewResult";
import { useReviewGenerator } from "../hooks/useReviewGenerator";

export default function GeneratorPage() {
  // Authentication is now handled by DashboardLayout, but we can keep a local check or just rely on the layout
  // We'll keep the hook usage but remove the redirect logic since the Layout does it.

  const {
    reviewText,
    setReviewText,
    businessType,
    setBusinessType,
    generatedReply,
    loading,
    error,
    generateReply,
  } = useReviewGenerator();

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
          Review Generator
        </h1>
        <p className="text-slate-500">
          Paste a Google Review below to generate a professional response.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column: Generator */}
        <div className="space-y-8">
          <ReviewForm
            reviewText={reviewText}
            setReviewText={setReviewText}
            businessType={businessType}
            setBusinessType={setBusinessType}
            onSubmit={generateReply}
            loading={loading}
            error={error}
          />
          <ReviewResult reply={generatedReply} />
        </div>

        {/* Right Column: History (Sticky) */}
        <div className="space-y-4">
          <h3 className="font-bold text-slate-900 flex items-center gap-2">
            Recent History
          </h3>
          <div className="bg-white rounded-2xl border border-slate-200 p-4 h-[calc(100vh-12rem)] overflow-y-auto">
            <HistoryList />
          </div>
        </div>
      </div>
    </div>
  );
}
