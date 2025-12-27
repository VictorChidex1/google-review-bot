import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import type { HistoryItem } from "../types";

export default function HistoryList() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "history"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items: HistoryItem[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate(), // Convert Firestore Timestamp to Date
      })) as HistoryItem[];
      setHistory(items);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

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
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Recent Activity
      </h2>
      <div className="grid gap-4">
        {history.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-2">
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
          </div>
        ))}
      </div>
    </div>
  );
}
