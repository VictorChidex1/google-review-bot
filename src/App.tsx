import "./App.css";
import Navbar from "./components/Navbar";
import HistoryList from "./components/HistoryList";
import ReviewForm from "./components/ReviewForm";
import ReviewResult from "./components/ReviewResult";
import Footer from "./components/Footer";
import { useReviewGenerator } from "./hooks/useReviewGenerator";

function App() {
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

export default App;
