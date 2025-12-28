import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import type { User } from "firebase/auth";
import { auth } from "../firebase";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await signOut(auth);
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-40 border-b border-slate-200 px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/veravox-logo.webp"
              alt="Logo"
              className="w-8 h-8 rounded-lg"
            />
            <span className="font-bold text-slate-900 block">VeraVox AI</span>
          </Link>

          {/* Right: Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/app"
              className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
            >
              App
            </Link>

            <div className="h-4 w-px bg-slate-200"></div>

            <a
              href="https://www.buymeacoffee.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-yellow-500 transition-colors"
              title="Buy me a coffee"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
            </a>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-9 h-9 rounded-full overflow-hidden border-2 border-emerald-100 focus:outline-none focus:border-emerald-500 transition-colors"
                >
                  <img
                    src={
                      user.photoURL ||
                      `https://ui-avatars.com/api/?name=${user.email}&background=059669&color=fff`
                    }
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-100 py-1 animate-fade-in-up">
                    <div className="px-4 py-2 border-b border-slate-50">
                      <p className="text-xs font-bold text-slate-900 truncate">
                        {user.displayName || "User"}
                      </p>
                      <p className="text-xs text-slate-500 truncate">
                        {user.email}
                      </p>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors font-medium"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-emerald-600 text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm shadow-emerald-200"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl animate-fade-in-up p-4 flex flex-col gap-4">
            <Link
              to="/app"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 hover:text-emerald-600"
            >
              Launch App
            </Link>
            <div className="h-px bg-slate-100 w-full"></div>
            {user ? (
              <>
                <div className="flex items-center gap-3">
                  <img
                    src={
                      user.photoURL ||
                      `https://ui-avatars.com/api/?name=${user.email}&background=059669&color=fff`
                    }
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      {user.displayName || "User"}
                    </p>
                    <p className="text-xs text-slate-500">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={handleSignOut}
                  className="w-full text-left text-sm font-bold text-red-600"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-emerald-600 text-white text-center font-bold py-3 rounded-xl shadow-lg shadow-emerald-200"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </nav>
    </>
  );
}
