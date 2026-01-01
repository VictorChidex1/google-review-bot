import { useState, useEffect } from "react";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Zap,
  BookOpen,
  Settings,
  LifeBuoy,
  LogOut,
  Menu,
  X,
  CreditCard,
  User,
} from "lucide-react";
import { auth, db } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default function DashboardLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(auth.currentUser);
  const [isPro, setIsPro] = useState(false); // Mock pro check
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        navigate("/login");
      } else {
        setUser(currentUser);
        // Check if user is pro (mock or real)
        // const docRef = doc(db, "users", currentUser.uid);
        // const snap = await getDoc(docRef);
        // setIsPro(snap.data()?.isPro || false);
        setIsPro(true); // Default to true for now as per "Pro" styling
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  const navItems = [
    {
      name: "Overview",
      path: "/dashboard",
      icon: LayoutDashboard,
      exact: true,
    },
    { name: "Generator", path: "/dashboard/generate", icon: Zap },
    { name: "Documentation", path: "/dashboard/docs", icon: BookOpen },
    { name: "Settings", path: "/dashboard/settings", icon: Settings },
    { name: "Support", path: "/dashboard/support", icon: LifeBuoy },
  ];

  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out flex flex-col
        ${
          mobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }
      `}
      >
        {/* Logo Section */}
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-white">
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <span>
              VeraVox<span className="text-emerald-400">AI</span>
            </span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="ml-auto lg:hidden text-slate-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.exact}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `
                flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all
                ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-900/20"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }
              `}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* User Profile Snippet */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/50">
          <NavLink
            to="/dashboard/settings"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 overflow-hidden flex-shrink-0">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold">
                  {user.displayName?.[0] || "U"}
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0 text-left">
              <p className="text-sm font-bold text-white truncate group-hover:text-emerald-400 transition-colors">
                {user.displayName || "User"}
              </p>
              <p className="text-xs text-slate-500 truncate">{user.email}</p>
            </div>
          </NavLink>

          <button
            onClick={handleSignOut}
            className="mt-3 w-full flex items-center justify-center gap-2 py-2 text-xs font-bold text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
          >
            <LogOut className="w-3 h-3" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile Header */}
        <header className="lg:hidden h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>
            <span className="font-bold text-slate-900">Dashboard</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm border border-emerald-200">
            {user.displayName?.[0] || "U"}
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-auto bg-slate-50 p-4 lg:p-8">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
