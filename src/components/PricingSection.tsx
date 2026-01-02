import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Zap, Shield, Rocket } from "lucide-react";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  // Data for Pricing Tiers
  const tiers = [
    {
      name: "Starter",
      icon: Zap,
      monthlyPrice: "$0",
      yearlyPrice: "$0",
      description: "Perfect for small businesses just getting started.",
      features: [
        "10 Review Responses / month",
        "Basic Response Tones",
        "Manual Copy-Paste",
        "Community Support",
      ],
      ctaText: "Get Started Free",
      ctaLink: "/signup",
      popular: false,
    },
    {
      name: "Pro",
      icon: Rocket,
      monthlyPrice: "$29",
      yearlyPrice: "$24",
      description: "Power up your productivity with unlimited responses.",
      features: [
        "Unlimited Responses",
        "All 10+ Response Tones",
        "Priority Email Support",
        "Review History (Archive)",
        "Advanced Analytics (Coming Soon)",
      ],
      ctaText: "Start Free Trial",
      ctaLink: "/signup?plan=pro",
      popular: true, // Highlights this card
    },
    {
      name: "Business",
      icon: Shield,
      monthlyPrice: "$99",
      yearlyPrice: "$79",
      description: "For agencies and multi-location businesses.",
      features: [
        "Everything in Pro",
        "Manage Multiple Locations",
        "Team Members (Up to 5)",
        "API Access Management",
        "Dedicated Success Manager",
      ],
      ctaText: "Contact Sales",
      ctaLink: "/contact",
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      {/* Decorative Background Elements (Mesh Gradient) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400 rounded-full blur-[100px] opacity-20 animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-[100px] opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -top-32 -right-32 w-128 h-128 bg-emerald-100/50 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/0 via-white/50 to-white/80 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500"
          >
            Choose the plan that fits your business needs. No hidden fees.
          </motion.p>

          {/* Monthly/Yearly Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <span
              className={`text-sm font-semibold transition-colors ${
                !isYearly ? "text-slate-900" : "text-slate-400"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-16 h-8 rounded-full p-1 flex items-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                isYearly ? "bg-emerald-500 shadow-inner" : "bg-slate-200"
              }`}
            >
              <motion.div
                className="w-6 h-6 rounded-full bg-white shadow-lg"
                animate={{ x: isYearly ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span
              className={`text-sm font-semibold transition-colors flex items-center gap-2 ${
                isYearly ? "text-slate-900" : "text-slate-400"
              }`}
            >
              Yearly
              <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 rounded-full font-bold">
                Save 20%
              </span>
            </span>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className={`relative rounded-3xl p-8 border backdrop-blur-sm transition-all duration-500 flex flex-col ${
                tier.popular
                  ? "bg-white/80 border-emerald-500/50 shadow-2xl shadow-emerald-900/10 scale-105 z-10"
                  : "bg-white/60 border-white/50 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:bg-white/90 hover:-translate-y-2 hover:border-emerald-200"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-emerald-500/30 tracking-wide">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                    tier.popular
                      ? "bg-emerald-100 text-emerald-600"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  <tier.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {tier.name}
                </h3>
                <p className="text-slate-500 text-sm h-10">
                  {tier.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">
                    {isYearly ? tier.yearlyPrice : tier.monthlyPrice}
                  </span>
                  <span className="text-slate-400 font-medium">/month</span>
                </div>
                {isYearly && tier.monthlyPrice !== "$0" && (
                  <p className="text-xs text-emerald-600 font-medium mt-2">
                    Billed ${parseInt(tier.yearlyPrice.replace("$", "")) * 12}{" "}
                    yearly
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={tier.ctaLink}
                className={`w-full py-4 px-6 rounded-xl font-bold text-center transition-all duration-300 ${
                  tier.popular
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-[1.02]"
                    : "bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5"
                }`}
              >
                {tier.ctaText}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
