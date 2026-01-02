import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore"; // Import needed for Admin check
import { auth, db } from "../firebase"; // Import db
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  LogOut,
  Settings,
  LayoutDashboard,
  Coffee,
  ShieldAlert,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface NavbarProps {
  darkHero?: boolean;
}

export default function Navbar({ darkHero = false }: NavbarProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Check Admin Status
        try {
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          if (userDoc.exists() && userDoc.data().isAdmin === true) {
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
          }
        } catch (e) {
          console.error("Error checking admin status", e);
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      unsubscribe();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSignOut = async () => {
    await signOut(auth);
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    setIsAdmin(false);
  };

  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Docs", href: "/docs" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Logic: If we are at the top AND it's a dark hero, use light text.
  // Otherwise (scrolled down OR not a dark hero), use standard dark text.
  const useLightText = darkHero && !isScrolled;

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b",
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-slate-200/50 py-3 shadow-sm"
            : "bg-white/0 border-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity" />
                <img
                  src="/veravox-logo.webp"
                  alt="VeraVox Logo"
                  className="w-9 h-9 rounded-lg relative z-10 shadow-sm"
                />
              </div>
              <span
                className={cn(
                  "font-bold text-xl tracking-tight transition-colors",
                  useLightText ? "text-white" : "text-slate-900"
                )}
              >
                VeraVox
                <span
                  className={
                    useLightText ? "text-emerald-400" : "text-emerald-600"
                  }
                >
                  .AI
                </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    useLightText
                      ? "text-slate-300 hover:text-white"
                      : "text-slate-600 hover:text-emerald-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Actions (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
              {/* Buy Me A Coffee */}
              <a
                href="https://www.buymeacoffee.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-full transition-all",
                  useLightText
                    ? "text-slate-400 hover:text-yellow-400 hover:bg-white/10"
                    : "text-slate-400 hover:text-yellow-500 hover:bg-yellow-50"
                )}
                title="Buy me a coffee"
              >
                <Coffee className="w-5 h-5" />
              </a>

              <div
                className={cn(
                  "h-5 w-px",
                  useLightText ? "bg-white/20" : "bg-slate-200"
                )}
              />

              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={cn(
                      "flex items-center gap-2 p-1 pr-3 rounded-full border transition-all group",
                      useLightText
                        ? "border-white/20 hover:border-white/50 hover:bg-white/10"
                        : "border-slate-200 hover:border-emerald-200 hover:bg-slate-50"
                    )}
                  >
                    <img
                      src={
                        user.photoURL ||
                        `https://ui-avatars.com/api/?name=${user.email}&background=059669&color=fff`
                      }
                      alt="Profile"
                      className="w-8 h-8 rounded-full object-cover ring-2 ring-white"
                    />
                    <span
                      className={cn(
                        "text-sm font-medium max-w-[100px] truncate",
                        useLightText
                          ? "text-slate-200 group-hover:text-white"
                          : "text-slate-700 group-hover:text-slate-900"
                      )}
                    >
                      {user.displayName?.split(" ")[0] || "Account"}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
                      >
                        <div className="p-4 border-b border-slate-50 bg-slate-50/50">
                          <p className="text-sm font-bold text-slate-900 truncate">
                            {user.displayName || "User"}
                          </p>
                          <p className="text-xs text-slate-500 truncate">
                            {user.email}
                          </p>
                        </div>
                        <div className="p-2">
                          <Link
                            to="/app"
                            className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-xl transition-colors"
                          >
                            <LayoutDashboard className="w-4 h-4 text-emerald-600" />
                            Dashboard
                          </Link>

                          {/* ADMIN LINK */}
                          {isAdmin && (
                            <Link
                              to="/admin"
                              className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-xl transition-colors"
                            >
                              <ShieldAlert className="w-4 h-4 text-purple-600" />
                              Admin Panel
                            </Link>
                          )}

                          <Link
                            to="/settings"
                            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-xl transition-colors text-left"
                          >
                            <Settings className="w-4 h-4 text-slate-400" />
                            Settings
                          </Link>
                          <div className="h-px bg-slate-100 my-1" />
                          <button
                            onClick={handleSignOut}
                            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-xl transition-colors text-left"
                          >
                            <LogOut className="w-4 h-4" />
                            Sign Out
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Link
                    to="/login"
                    className={cn(
                      "text-sm font-semibold transition-colors",
                      useLightText
                        ? "text-slate-300 hover:text-white"
                        : "text-slate-600 hover:text-slate-900"
                    )}
                  >
                    Log in
                  </Link>
                  <Link
                    to="/signup"
                    className={cn(
                      "text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5",
                      useLightText
                        ? "bg-white text-slate-900 hover:bg-slate-100 shadow-white/10"
                        : "bg-slate-900 text-white hover:bg-slate-800 shadow-slate-200/50"
                    )}
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "md:hidden p-2 rounded-xl transition-colors",
                useLightText
                  ? "text-slate-300 hover:bg-white/10"
                  : "text-slate-600 hover:bg-slate-100"
              )}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 top-0 left-0 z-40 bg-white md:hidden pt-24 px-6 overflow-hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-slate-900 hover:text-emerald-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <div className="h-px bg-slate-100 w-full my-2" />

              {user ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl">
                    <img
                      src={
                        user.photoURL ||
                        `https://ui-avatars.com/api/?name=${user.email}`
                      }
                      alt="Profile"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-bold text-slate-900">
                        {user.displayName}
                      </p>
                      <p className="text-sm text-slate-500">{user.email}</p>
                    </div>
                  </div>
                  <Link
                    to="/app"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-200"
                  >
                    <LayoutDashboard className="w-5 h-5" />
                    Launch Dashboard
                  </Link>

                  {/* ADMIN MOBILE LINK */}
                  {isAdmin && (
                    <Link
                      to="/admin"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-center gap-2 w-full bg-purple-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-200"
                    >
                      <ShieldAlert className="w-5 h-5" />
                      Admin Panel
                    </Link>
                  )}

                  <button
                    onClick={handleSignOut}
                    className="flex items-center justify-center gap-2 w-full bg-slate-100 text-slate-600 font-bold py-4 rounded-xl hover:bg-red-50 hover:text-red-600 transition-colors"
                  >
                    <LogOut className="w-5 h-5" />
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full bg-slate-100 text-slate-900 font-bold py-4 rounded-xl text-center"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl text-center shadow-lg shadow-slate-200"
                  >
                    Get Started Free
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
