import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  collection,
  query,
  orderBy,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { db, auth } from "../firebase";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ShieldAlert, Mail, Calendar, Loader2 } from "lucide-react";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: any;
  status: "unread" | "read";
}

export default function AdminPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthAndFetch = async () => {
      const user = auth.currentUser;
      if (!user) {
        navigate("/login");
        return;
      }

      // 1. Verify Admin Status
      try {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists() && userDoc.data().isAdmin === true) {
          setIsAuthorized(true);

          // 2. Fetch Messages
          const q = query(
            collection(db, "contact_messages"),
            orderBy("createdAt", "desc")
          );
          const querySnapshot = await getDocs(q);
          const msgs: ContactMessage[] = [];
          querySnapshot.forEach((doc) => {
            msgs.push({ id: doc.id, ...doc.data() } as ContactMessage);
          });
          setMessages(msgs);
        } else {
          navigate("/"); // Kick out non-admins
        }
      } catch (error) {
        console.error("Error fetching admin data:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuthAndFetch();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-emerald-600 animate-spin" />
      </div>
    );
  }

  if (!isAuthorized) return null;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />

      <main className="pt-32 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-emerald-400 shadow-lg">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Admin Dashboard
              </h1>
              <p className="text-slate-500">
                Manage contact submissions and system alerts.
              </p>
            </div>
          </div>

          {/* Messages List */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <Mail className="w-5 h-5 text-slate-400" />
                Inbox
                <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full font-medium">
                  {messages.length}
                </span>
              </h2>
            </div>

            {messages.length === 0 ? (
              <div className="p-12 text-center text-slate-400">
                No messages found. It's quiet... too quiet. 🦗
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className="p-6 hover:bg-slate-50 transition-colors group"
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-lg">
                          {msg.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900">
                            {msg.name}
                          </h3>
                          <p className="text-sm text-slate-500">{msg.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                        <Calendar className="w-3 h-3" />
                        {msg.createdAt?.toDate
                          ? msg.createdAt.toDate().toLocaleDateString()
                          : "Just now"}
                      </div>
                    </div>
                    <div className="pl-0 md:pl-14">
                      <p className="text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100 group-hover:bg-white group-hover:border-emerald-100 transition-all">
                        {msg.message}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
