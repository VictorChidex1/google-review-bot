import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-20 py-8 border-t border-slate-200 text-center">
      <p className="text-slate-500 text-sm font-medium">
        &copy; {new Date().getFullYear()} VeraVox AI. All rights reserved.
      </p>
      <div className="mt-2 flex flex-wrap justify-center gap-4 text-xs text-slate-400 font-medium">
        <Link to="/about" className="hover:text-emerald-600 transition-colors">
          About Us
        </Link>
        <span>•</span>
        <Link
          to="/contact"
          className="hover:text-emerald-600 transition-colors"
        >
          Contact
        </Link>
        <span>•</span>
        <Link
          to="/privacy"
          className="hover:text-emerald-600 transition-colors"
        >
          Privacy Policy
        </Link>
        <span>•</span>
        <Link to="/terms" className="hover:text-emerald-600 transition-colors">
          Terms of Service
        </Link>
        <span>•</span>
        <Link
          to="/cookies"
          className="hover:text-emerald-600 transition-colors"
        >
          Cookie Policy
        </Link>
      </div>
    </footer>
  );
}
