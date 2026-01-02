import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import TrustBar from "../components/TrustBar";
import FeaturesGrid from "../components/FeaturesGrid";
import PricingSection from "../components/PricingSection";
import FAQ from "../components/FAQ";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <HeroSection />

        {/* TRUST BAR */}
        <TrustBar />

        {/* FEATURES GRID */}
        <FeaturesGrid />

        {/* PRICING SECTION */}
        <PricingSection />

        {/* FAQ SECTION */}
        <FAQ />

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
