import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <HeroSection />

        {/* TRUST BAR */}
        <section className="border-y border-slate-100 bg-slate-50 py-10">
          <p className="text-center text-slate-400 font-medium text-sm uppercase tracking-widest mb-6">
            Trusted by Forward-Thinking Businesses
          </p>
          <div className="flex justify-center flex-wrap gap-8 opacity-40 grayscale">
            {/* Placeholders for logos */}
            <span className="text-xl font-bold">Resteraunt</span>
            <span className="text-xl font-bold">CafeOne</span>
            <span className="text-xl font-bold">BistroX</span>
            <span className="text-xl font-bold">HotelPro</span>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section id="features" className="max-w-6xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Sentiment</h3>
              <p className="text-slate-500 leading-relaxed">
                Our AI instantly detects if a customer is happy, angry, or
                neutral, and crafts the perfect psychological response.
              </p>
            </div>
            <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎭</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Tones</h3>
              <p className="text-slate-500 leading-relaxed">
                Choose between "Professional CEO", "Friendly Neighbor", or
                "Empathetic Support" styles to match your brand.
              </p>
            </div>
            <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Copy</h3>
              <p className="text-slate-500 leading-relaxed">
                Generate, review, and copy to clipboard in under 5 seconds. Get
                back to running your business.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 text-white py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to reclaim your time?
            </h2>
            <p className="text-slate-400 text-xl mb-10 max-w-2xl mx-auto">
              Join hundreds of business owners using VeraVox to automate their
              customer service.
            </p>
            <Link
              to="/login"
              className="inline-block px-10 py-5 bg-emerald-500 text-white font-bold rounded-xl text-xl hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-900/50"
            >
              Get Started Now - It's Free
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
