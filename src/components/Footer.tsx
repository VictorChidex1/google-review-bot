export default function Footer() {
  return (
    <footer className="mt-20 py-8 border-t border-slate-200 text-center">
      <p className="text-slate-500 text-sm font-medium">
        &copy; {new Date().getFullYear()} VeraVox AI. All rights reserved.
      </p>
      <div className="mt-2 flex justify-center gap-4 text-xs text-slate-400 font-medium">
        <a href="#" className="hover:text-emerald-600 transition-colors">
          Privacy Policy
        </a>
        <span>•</span>
        <a href="#" className="hover:text-emerald-600 transition-colors">
          Terms of Service
        </a>
        <span>•</span>
        <a href="#" className="hover:text-emerald-600 transition-colors">
          Support
        </a>
      </div>
    </footer>
  );
}
