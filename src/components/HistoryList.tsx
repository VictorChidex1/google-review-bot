import { useEffect, useState } from "react";
import {
  collection,
  query,
  onSnapshot,
  limit,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../firebase";
import type { HistoryItem } from "../types";

export default function HistoryList() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        const q = query(
          collection(db, "history"),
          where("userId", "==", user.uid),
          limit(50)
        );

        const unsubscribeSnapshot = onSnapshot(
          q,
          (snapshot) => {
            const items: HistoryItem[] = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
              createdAt: doc.data().createdAt?.toDate(),
            })) as HistoryItem[];

            // Client-side sort locally to avoid needing a composite index
            items.sort((a, b) => {
              const timeA = a.createdAt ? a.createdAt.getTime() : 0;
              const timeB = b.createdAt ? b.createdAt.getTime() : 0;
              return timeB - timeA;
            });

            setHistory(items);
            setLoading(false);
          },
          (error) => {
            console.error("Error fetching history:", error);
            setLoading(false);
          }
        );

        return () => unsubscribeSnapshot();
      } else {
        setHistory([]);
        setLoading(false);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDelete = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (!confirm("Are you sure you want to delete this response?")) return;

    try {
      await deleteDoc(doc(db, "history", id));
      // Optimistic update: Remove from UI immediately
      setHistory((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting document: ", error);
      alert("Failed to delete. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="text-center py-4 text-slate-500">Loading history...</div>
    );
  }

  if (history.length === 0) {
    return (
      <div className="text-center py-4 text-slate-500">No history yet.</div>
    );
  }

  return (
    <div className="space-y-4 relative">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Recent Activity
      </h2>
      <div className="grid gap-4">
        {history.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group relative"
          >
            {/* Delete Button (Visible on Hover) */}
            <button
              onClick={(e) => handleDelete(e, item.id || "")}
              className="absolute top-4 right-4 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all p-1"
              title="Delete Response"
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
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
              </svg>
            </button>

            <div className="flex justify-between items-start mb-2 pr-8">
              <span className="inline-block px-2 py-1 text-xs font-bold bg-slate-100 text-slate-700 rounded-md border border-slate-200">
                {item.businessType}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {item.createdAt?.toLocaleDateString()}
              </span>
            </div>
            <p className="text-slate-600 italic text-sm mb-3 border-l-4 border-emerald-500 pl-3">
              "
              {item.originalReview.length > 80
                ? item.originalReview.substring(0, 80) + "..."
                : item.originalReview}
              "
            </p>
            <div className="bg-slate-50 p-3 rounded-lg text-slate-800 text-sm font-medium border border-slate-100">
              {item.generatedReply}
            </div>
            <div className="mt-2 flex justify-end">
              <button
                onClick={() => handleCopy(item.generatedReply, item.id || "")}
                className={`text-xs font-bold flex items-center gap-1 px-3 py-1.5 rounded-md transition-all ${
                  copiedId === item.id
                    ? "bg-emerald-100 text-emerald-700"
                    : "text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                }`}
              >
                {copiedId === item.id ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
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
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Success Popup (Toast) */}
      {copiedId && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 animate-bounce z-50">
          <div className="bg-emerald-500 rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <span className="font-semibold text-sm">
            Response copied to clipboard!
          </span>
        </div>
      )}
    </div>
  );
}
