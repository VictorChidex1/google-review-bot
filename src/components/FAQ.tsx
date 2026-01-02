import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How does the AI know what to say?",
    answer:
      "VeraVox uses advanced Large Language Models (LLMs) trained on millions of high-performing customer interactions. It analyzes the sentiment of the customer's review and crafts a response that mirrors their tone while addressing their specific points.",
  },
  {
    question: "Is it safe to use on my Google Business Profile?",
    answer:
      "Absolutely. VeraVox generates the text for you, but YOU explicitly copy and paste it. We do not automatically post anything to your account, so you always strictly maintain full control over what gets published.",
  },
  {
    question: "Can I customize the writing style?",
    answer:
      "Yes! You can choose between multiple personas like 'Professional CEO', 'Friendly Neighbor', or 'Empathetic Support'. You can also edit the generated response manually before using it.",
  },
  {
    question: "Do I need to download any software?",
    answer:
      "No. VeraVox is 100% web-based. You can access it from any browser on your phone, tablet, or computer without installing anything.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "VeraVox is currently in Beta and is completely free to use. We will be introducing premium tiers for power users in the future, but our core features will always have a free option.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle Dot Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm mb-6 border border-slate-100"
          >
            <HelpCircle className="w-8 h-8 text-blue-600" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-500"
          >
            Everything you need to know about VeraVox and how it works.
          </motion.p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`border rounded-2xl transition-all duration-300 group ${
                openIndex === index
                  ? "bg-white shadow-lg border-blue-100 border-l-4 border-l-blue-500 scale-[1.02]"
                  : "bg-white border-slate-200 hover:shadow-md hover:-translate-y-1 hover:border-blue-100"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span
                  className={`text-lg font-semibold transition-colors ${
                    openIndex === index ? "text-blue-700" : "text-slate-900"
                  }`}
                >
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 ${
                      openIndex === index
                        ? "text-blue-600"
                        : "group-hover:text-blue-500"
                    }`}
                  />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
