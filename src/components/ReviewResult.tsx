interface ReviewResultProps {
  reply: string;
}

export default function ReviewResult({ reply }: ReviewResultProps) {
  if (!reply) return null;

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-slate-200 animate-fade-in-up">
      <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
        <span className="bg-emerald-100 text-emerald-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold border border-emerald-200">
          2
        </span>
        Suggested Reply
      </h2>
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-slate-800 leading-relaxed font-medium">
        "{reply}"
      </div>
      <div className="mt-4 flex justify-end">
        <button
          onClick={() => navigator.clipboard.writeText(reply)}
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
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          Copy to Clipboard
        </button>
      </div>
    </div>
  );
}
