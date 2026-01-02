import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Shield,
  Users,
  Globe,
  Award,
  Zap,
  Lock,
  Cpu,
  ArrowRight,
  Sparkles,
  Quote,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const stats = [
    { label: "Reviews Generated", value: "10k+", icon: Sparkles },
    { label: "Hours Saved", value: "500+", icon: Zap },
    { label: "Business Growth", value: "3x", icon: ArrowRight },
    { label: "Uptime", value: "99.9%", icon: Cpu },
  ];

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const slideLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar darkHero={true} />

      <main>
        {/* Dark Hero Section */}
        <div className="bg-slate-900 pt-32 pb-48 relative overflow-hidden">
          {/* Ambient Background Effects - Optimized for Safari */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(59,130,246,0.15),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(16,185,129,0.15),transparent_60%)]" />
          </div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            {/* Pill Badge */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Our Mission
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Empowering Owners{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                to be Heard
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
            >
              At VeraVox, we believe that every customer review is an
              opportunity. We help you build stronger relationships, one
              response at a time.
            </motion.p>
          </div>
        </div>

        {/* Content Container (Overlapping Hero) */}
        <div className="max-w-5xl mx-auto px-4 -mt-24 relative z-20 mb-24">
          {/* 1. STORY SECTION (Staggered Reveal) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl mb-12 relative overflow-hidden"
          >
            {/* Subtle Spotlight Gradient */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent opacity-50 pointer-events-none" />

            <div className="max-w-3xl mx-auto relative z-10">
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-bold mb-6 text-slate-900"
              >
                Our Story
              </motion.h2>
              <div className="prose prose-lg text-slate-600">
                <motion.p variants={itemVariants} className="mb-6">
                  It started with a simple observation: Small business owners
                  are *busy*. They pour their hearts into their work, but when
                  it comes to managing online reputation, they simply don't have
                  the time to craft thoughtful responses to every review.
                </motion.p>
                <motion.p variants={itemVariants} className="mb-6">
                  We realized that "generic" AI responses sounded robotic and
                  impersonal. Owners needed a tool that could mimic their
                  *unique voice*—whether that's professional, friendly, or
                  empathetic.
                </motion.p>
                <motion.p variants={itemVariants}>
                  Thus, **VeraVox** was born. Used by diverse businesses from
                  local cafes to tech startups, we are the bridge between
                  data-driven AI and human connection.
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* 2. STATS BAR (Slide Up) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-slate-900 p-6 rounded-2xl text-center border border-slate-800 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <stat.icon className="w-6 h-6 text-emerald-400 mx-auto mb-3 transform group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* 3. VALUES GRID (Card Lift) */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
              }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Privacy First
              </h3>
              <p className="text-slate-500 leading-relaxed">
                We never post on your behalf. You always have full control,
                copying and pasting only what you approve.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
              }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Human-Centric AI
              </h3>
              <p className="text-slate-500 leading-relaxed">
                Our models are fine-tuned to sound like *people*, prioritizing
                empathy and context over generic pleasantries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
              }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Accessible to All
              </h3>
              <p className="text-slate-500 leading-relaxed">
                Great tools shouldn't be complicated. We build for non-technical
                users first.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
              }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Excellence
              </h3>
              <p className="text-slate-500 leading-relaxed">
                We sweat the details. From our UI design to our prompt
                engineering, we aim for the highest quality standard.
              </p>
            </motion.div>
          </div>
        </div>

        {/* 4. THE TECHNOLOGY SECTION (Border Glows) */}
        <section className="bg-slate-50 py-24 border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-slate-900 mb-6"
              >
                Engineered for Excellence
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-slate-600"
              >
                See what powers the most intelligent review assistant on the
                web.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 group hover:border-indigo-500 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-indigo-600 transition-colors">
                  Advanced LLMs
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We use state-of-the-art language models (GPT-4 class) to
                  understand nuance, sarcasm, and sentiment better than any
                  human-coded script.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 group hover:border-rose-500 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-6 text-rose-600 group-hover:scale-110 transition-transform duration-300">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-rose-600 transition-colors">
                  Bank-Grade Privacy
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Your data is encrypted in transit and at rest. We never sell
                  client data, and our business model is strictly
                  subscription-based.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 group hover:border-cyan-500 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-6 text-cyan-600 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-cyan-600 transition-colors">
                  Real-Time Processing
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Our edge-optimized architecture delivers responses in
                  milliseconds, not seconds. Speed matters when you have 50
                  reviews to reply to.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. MEET THE CREATOR (Parallax Slide) */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              {/* Avatar Image */}
              <motion.div
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex-shrink-0 relative group"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0 0px rgba(16, 185, 129, 0)",
                      "0 0 0 10px rgba(16, 185, 129, 0.1)",
                      "0 0 0 20px rgba(16, 185, 129, 0)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-blue-500 to-emerald-500 p-1 relative"
                >
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden relative">
                    <img
                      src="/victor-chidera.webp"
                      alt="Victor Chidera"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full border-4 border-slate-800">
                  FOUNDER
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                variants={slideRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 text-center md:text-left"
              >
                <Quote className="w-8 h-8 text-slate-500 mb-6 mx-auto md:mx-0" />
                <h2 className="text-2xl font-bold mb-4">Meet the Builder</h2>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  "I built VeraVox because I saw too many great businesses
                  struggling to find their voice online. Technology should
                  amplify your personality, not replace it. My goal is to give
                  every founder the tools to compete with the giants, one review
                  at a time."
                </p>
                <div>
                  <div className="font-bold text-lg">Victor Chidera</div>
                  <div className="text-emerald-400 text-sm">
                    Lead Engineer & Founder
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 6. CTA SECTION - Join the Revolution */}
        <section className="py-24 relative overflow-hidden bg-slate-900">
          {/* Animated Stars/Particles */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-slate-800 opacity-90" />
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full opacity-20"
                initial={{
                  x: Math.random() * 1000,
                  y: Math.random() * 500,
                  scale: Math.random() * 0.5 + 0.5,
                }}
                animate={{
                  y: [null, Math.random() * -100],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  width: Math.random() * 4 + 1 + "px",
                  height: Math.random() * 4 + 1 + "px",
                }}
              />
            ))}
          </div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
            >
              Ready to master your reputation?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
            >
              Join thousands of businesses who are saving time and delighting
              customers with VeraVox.
            </motion.p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/signup"
                  className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-xl hover:bg-blue-50 transition-colors block"
                >
                  Get Started Free
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-colors block"
                >
                  Contact Sales
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
