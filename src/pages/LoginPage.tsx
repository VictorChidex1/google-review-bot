import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Redirect if already logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/app");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, googleProvider);
      // Auth state change will trigger redirect
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Auth state change will trigger redirect
    } catch (err: any) {
      // Improve error messages
      if (err.code === "auth/invalid-credential") {
        setError("Invalid email or password.");
      } else {
        setError(err.message);
      }
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden animate-fade-in-up relative">
        <div className="p-8">
          <Link
            to="/"
            className="absolute top-4 left-4 text-slate-400 hover:text-emerald-600 transition-colors p-2 rounded-full hover:bg-slate-50"
            title="Back to Home"
          >
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
              <path d="M19 12H5"></path>
              <path d="M12 19l-7-7 7-7"></path>
            </svg>
          </Link>
          <div className="text-center mb-8">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/veravox-logo.webp"
                alt="VeraVox AI"
                className="w-12 h-12 rounded-xl mx-auto"
              />
            </Link>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Welcome Back
            </h2>
            <p className="text-slate-500 text-sm">
              Sign in to access your business reviews.
            </p>
          </div>

          {/* Google Button */}
          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-700 
            font-bold py-3 px-4 rounded-xl hover:bg-slate-50 transition-colors mb-6"
          >
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-5 h-5"
            />
            Sign in with Google
          </button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-slate-500">
                Or continue with
              </span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 
                focus:border-transparent outline-none transition-all placeholder:text-slate-300"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-slate-700">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-xs font-medium text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all placeholder:text-slate-300 pr-10"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                >
                  {showPassword ? (
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
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  ) : (
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
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center bg-red-50 p-2 rounded-lg border border-red-100">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-200"
            >
              {loading ? "Logging In..." : "Login"}
            </button>
          </form>

          {/* Link to Signup */}
          <div className="mt-6 text-center text-sm text-slate-500">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-emerald-600 font-bold hover:underline"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
