import { Brain, MessageSquareText, Zap } from "lucide-react";

export default function FeaturesGrid() {
  return (
    <section
      id="features"
      className="relative py-24 bg-slate-50 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/80 via-white to-white"
    >
      {/* Ambient Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Everything you need to master reviews.
          </h2>
          <p className="text-xl text-slate-500">
            Powerful tools designed to save you time, boost your SEO, and make
            every customer feel heard.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1: Sentiment (Blue) */}
          <div className="p-8 bg-gradient-to-br from-white to-blue-50 border-t-4 border-t-blue-500 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-slate-100">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 transition-colors">
              <Brain className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">
              Smart Sentiment
            </h3>
            <p className="text-slate-500 leading-relaxed">
              Our AI instantly detects if a customer is happy, angry, or
              neutral, and crafts the perfect psychological response.
            </p>
          </div>

          {/* Feature 2: Tones (Purple) */}
          <div className="p-8 bg-gradient-to-br from-white to-purple-50 border-t-4 border-t-purple-500 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-slate-100">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-purple-600 transition-colors">
              <MessageSquareText className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">
              Custom Tones
            </h3>
            <p className="text-slate-500 leading-relaxed">
              Choose between "Professional CEO", "Friendly Neighbor", or
              "Empathetic Support" styles to match your brand.
            </p>
          </div>

          {/* Feature 3: Instant Copy (Emerald) */}
          <div className="p-8 bg-gradient-to-br from-white to-emerald-50 border-t-4 border-t-emerald-500 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-slate-100">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-emerald-600 transition-colors">
              <Zap className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">
              Instant Copy
            </h3>
            <p className="text-slate-500 leading-relaxed">
              Generate, review, and copy to clipboard in under 5 seconds. Get
              back to running your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
