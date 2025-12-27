import "./App.css";
import HistoryList from "./components/HistoryList";
import ReviewForm from "./components/ReviewForm";
import ReviewResult from "./components/ReviewResult";
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
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            VeraVox AI
          </h1>
          <p className="text-slate-600 text-lg font-medium">
            Turn customer feedback into professional responses in seconds.
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="grid gap-8">
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

          <HistoryList />
        </div>
      </div>
    </div>
  );
}

export default App;
