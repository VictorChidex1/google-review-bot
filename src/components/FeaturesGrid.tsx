import { Brain, MessageSquareText, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger effect
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
          >
            Everything you need to master reviews.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-slate-500"
          >
            Powerful tools designed to save you time, boost your SEO, and make
            every customer feel heard.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Feature 1: Sentiment (Blue) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="p-8 bg-gradient-to-br from-white to-blue-50 border-t-4 border-t-blue-500 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 group border border-slate-100"
          >
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 transition-colors duration-300">
              <Brain className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">
              Smart Sentiment
            </h3>
            <p className="text-slate-500 leading-relaxed">
              Our AI instantly detects if a customer is happy, angry, or
              neutral, and crafts the perfect psychological response.
            </p>
          </motion.div>

          {/* Feature 2: Tones (Purple) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="p-8 bg-gradient-to-br from-white to-purple-50 border-t-4 border-t-purple-500 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 group border border-slate-100"
          >
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-purple-600 transition-colors duration-300">
              <MessageSquareText className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">
              Custom Tones
            </h3>
            <p className="text-slate-500 leading-relaxed">
              Choose between "Professional CEO", "Friendly Neighbor", or
              "Empathetic Support" styles to match your brand.
            </p>
          </motion.div>

          {/* Feature 3: Instant Copy (Emerald) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="p-8 bg-gradient-to-br from-white to-emerald-50 border-t-4 border-t-emerald-500 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 group border border-slate-100"
          >
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-emerald-600 transition-colors duration-300">
              <Zap className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">
              Instant Copy
            </h3>
            <p className="text-slate-500 leading-relaxed">
              Generate, review, and copy to clipboard in under 5 seconds. Get
              back to running your business.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
