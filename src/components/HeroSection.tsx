import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative bg-white pt-28 pb-20 px-4">
      {/* 
        THE HERO CARD 
        Container is constrained (max-w-7xl) so it's not full-screen.
        Text is INSIDE this card, on top of the image.
      */}
      <div className="relative max-w-[1400px] mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[600px] flex items-center justify-center text-center group">
        {/* 1. BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <img
            src="/veravox-hero.jpg"
            alt="VeraVox Dashboard"
            className="w-full h-full object-cover transform transition-transform duration-[2000ms] group-hover:scale-105"
          />
          {/* 2. OVERLAY (The Blend) */}
          {/* Heavy gradient + Blur to make text readable over the dashboard screenshot */}
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>

        {/* 3. CONTENT (On Top) */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20
           text-emerald-300 text-sm font-medium mb-8 backdrop-blur-md animate-fade-in-up"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>The #1 AI Tool for Small Businesses</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1] drop-shadow-2xl animate-fade-in-up animation-delay-100">
            Turn Google Reviews into <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Loyal Customers
            </span>
          </h1>

          {/* Subhead */}
          <p className="text-lg md:text-2xl text-slate-200 max-w-2xl mx-auto mb-12 leading-relaxed font-light drop-shadow-lg animate-fade-in-up animation-delay-200">
            The AI-powered assistant that writes professional, empathetic, and
            SEO-friendly replies for busy business owners in seconds.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <Link
              to="/login"
              className="w-full sm:w-auto px-10 py-5 bg-emerald-500 text-white font-bold rounded-2xl text-lg hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-900/30 hover:scale-105 active:scale-95 border-t border-emerald-400/20"
            >
              Start Generating Free
            </Link>
            <a
              href="#features"
              className="w-full sm:w-auto px-10 py-5 bg-white/10 text-white border border-white/20 font-bold rounded-2xl text-lg hover:bg-white/20 transition-all backdrop-blur-md hover:scale-105 active:scale-95"
            >
              How it Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
