import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Navbar from "../components/Navbar";
import HistoryList from "../components/HistoryList";
import ReviewForm from "../components/ReviewForm";
import ReviewResult from "../components/ReviewResult";
import Footer from "../components/Footer";
import { useReviewGenerator } from "../hooks/useReviewGenerator";

export default function Dashboard() {
  const navigate = useNavigate();
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      } else {
        setLoadingAuth(false);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

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

  if (loadingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />

      {/* Added pt-24 to account for fixed navbar */}
      <div className="max-w-3xl mx-auto px-4 py-12 pt-24 flex flex-col min-h-screen">
        {/* Main Content Grid */}
        <div className="grid gap-8 flex-grow">
          {/* Scroll Anchor ID */}
          <div id="review-form">
            <ReviewForm
              reviewText={reviewText}
              setReviewText={setReviewText}
              businessType={businessType}
              setBusinessType={setBusinessType}
              onSubmit={generateReply}
              loading={loading}
              error={error}
            />
          </div>

          <ReviewResult reply={generatedReply} />

          {/* Scroll Anchor ID */}
          <div id="history-list">
            <HistoryList />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
