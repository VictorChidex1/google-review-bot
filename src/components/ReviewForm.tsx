import { Briefcase, Smile, HeartHandshake } from "lucide-react";

interface ReviewFormProps {
  reviewText: string;
  setReviewText: (text: string) => void;
  businessType: string;
  setBusinessType: (type: string) => void;
  tone: string;
  setTone: (tone: string) => void;
  onSubmit: () => void;
  loading: boolean;
  error: string;
}

export default function ReviewForm({
  reviewText,
  setReviewText,
  businessType,
  setBusinessType,
  tone,
  setTone,
  onSubmit,
  loading,
  error,
}: ReviewFormProps) {
  const tones = [
    {
      id: "Professional",
      label: "Professional",
      icon: Briefcase,
      color: "bg-blue-100 text-blue-700 border-blue-200",
    },
    {
      id: "Friendly",
      label: "Friendly",
      icon: Smile,
      color: "bg-amber-100 text-amber-700 border-amber-200",
    },
    {
      id: "Empathetic",
      label: "Empathetic",
      icon: HeartHandshake,
      color: "bg-rose-100 text-rose-700 border-rose-200",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-slate-200">
      <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
        <span className="bg-emerald-100 text-emerald-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold border border-emerald-200">
          1
        </span>
        Paste the Review
      </h2>

      <div className="space-y-6">
        {/* Tone Selector */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Select Tone
          </label>
          <div className="grid grid-cols-3 gap-2">
            {tones.map((t) => {
              const Icon = t.icon;
              const isSelected = tone === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTone(t.id)}
                  className={`flex flex-col items-center justify-center py-3 px-2 rounded-xl border transition-all duration-200 ${
                    isSelected
                      ? `${t.color} border-current ring-2 ring-offset-1 ring-emerald-500/20 shadow-sm`
                      : "bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 mb-1 ${isSelected ? "" : "opacity-50"}`}
                  />
                  <span className="text-xs font-bold">{t.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          {/* Business Type */}
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
          onClick={onSubmit}
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
            `Generate ${tone} Reply`
          )}
        </button>
        {error && (
          <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm text-center font-medium border border-red-100">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
