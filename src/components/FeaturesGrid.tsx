import { Brain, MessageSquareText, Zap } from "lucide-react";

export default function FeaturesGrid() {
  return (
    <section id="features" className="max-w-6xl mx-auto px-4 py-24">
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
        {/* Feature 1: Sentiment */}
        <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
          <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
            <Brain className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-slate-900">
            Smart Sentiment
          </h3>
          <p className="text-slate-500 leading-relaxed">
            Our AI instantly detects if a customer is happy, angry, or neutral,
            and crafts the perfect psychological response.
          </p>
        </div>

        {/* Feature 2: Tones */}
        <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
          <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
            <MessageSquareText className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-slate-900">
            Custom Tones
          </h3>
          <p className="text-slate-500 leading-relaxed">
            Choose between "Professional CEO", "Friendly Neighbor", or
            "Empathetic Support" styles to match your brand.
          </p>
        </div>

        {/* Feature 3: Instant Copy */}
        <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
          <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
            <Zap className="w-8 h-8 text-emerald-600" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-slate-900">
            Instant Copy
          </h3>
          <p className="text-slate-500 leading-relaxed">
            Generate, review, and copy to clipboard in under 5 seconds. Get back
            to running your business.
          </p>
        </div>
      </div>
    </section>
  );
}
