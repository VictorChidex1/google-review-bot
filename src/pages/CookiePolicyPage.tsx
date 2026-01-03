import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, type Variants } from "framer-motion";
import {
  Cookie,
  Info,
  Settings,
  ShieldCheck,
  Globe,
  Database,
  BarChart,
  ChevronRight,
  MousePointerClick,
  RefreshCw,
} from "lucide-react";
import SEO from "../components/SEO";

export default function CookiePolicyPage() {
  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <SEO
        title="Cookie Policy"
        description="Transparent information about how we use cookies and tracking technologies."
      />
      <Navbar darkHero={true} />

      <main>
        {/* 1. DARK HERO SECTION */}
        <div className="bg-slate-900 pt-32 pb-48 relative overflow-hidden">
          {/* Ambient Background Effects (Amber Theme) */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(245,158,11,0.15),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_rgba(217,119,6,0.15),transparent_60%)]" />
          </div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            {/* Pill Badge */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              Transparency
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Cookie{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                Policy
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
            >
              We believe in being clear about how we use your data. This policy
              explains what cookies are and how we use them.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm text-slate-500 mt-6 font-medium uppercase tracking-wider"
            >
              Last Updated: January 3, 2026
            </motion.p>
          </div>
        </div>

        {/* 2. OVERLAPPING CONTENT CARD */}
        <div className="max-w-4xl mx-auto px-4 -mt-24 relative z-20 mb-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-12 space-y-12 relative overflow-hidden"
          >
            {/* Subtle Spotlight Gradient */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-50/50 via-transparent to-transparent opacity-50 pointer-events-none" />

            {/* Section 1: What are Cookies? */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600">
                  <Info className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  1. What Are Cookies?
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Cookies are small text files that are placed on your computer or
                mobile device when you visit a website. They are widely used to
                make websites work more efficiently and provide information to
                the owners of the site. Think of them as a "memory" for the
                website, allowing it to recognize you when you come back.
              </p>
            </motion.section>

            <div className="h-px bg-slate-100 w-full" />

            {/* Section 2: How We Use Them */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                  <Cookie className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  2. Types of Cookies We Use
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Essential</h3>
                  <p className="text-sm text-slate-500">
                    Strictly necessary for the website to function (e.g.,
                    logging in, security). You cannot switch these off.
                  </p>
                </div>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                    <BarChart className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Analytics</h3>
                  <p className="text-sm text-slate-500">
                    Help us understand how visitors interact with our website by
                    collecting anonymous information (e.g., Google Analytics).
                  </p>
                </div>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-3">
                    <Database className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    Functionality
                  </h3>
                  <p className="text-sm text-slate-500">
                    Remember your choices (like language or region) to provide
                    enhanced features.
                  </p>
                </div>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mb-3">
                    <MousePointerClick className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Marketing</h3>
                  <p className="text-sm text-slate-500">
                    Used to track visitors across websites to display relevant
                    ads. We currently <span className="font-bold">do not</span>{" "}
                    use these.
                  </p>
                </div>
              </div>
            </motion.section>

            <div className="h-px bg-slate-100 w-full" />

            {/* Section 3: Third Party Cookies */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                  <Globe className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  3. Third-Party Providers
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Some cookies are set by third-party services that appear on our
                pages. We do not control the dissemination of these cookies.
              </p>
              <ul className="space-y-3 text-slate-600 list-disc pl-5">
                <li>
                  <span className="font-semibold text-slate-800">
                    Google Analytics:
                  </span>{" "}
                  Used for performance tracking.
                </li>
                <li>
                  <span className="font-semibold text-slate-800">
                    Firebase Auth:
                  </span>{" "}
                  Used to manage user sessions securely.
                </li>
                <li>
                  <span className="font-semibold text-slate-800">
                    Stripe/LemonSqueezy:
                  </span>{" "}
                  Used for processing secure payments.
                </li>
              </ul>
            </motion.section>

            <div className="h-px bg-slate-100 w-full" />

            {/* Section 4: Managing Cookies */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600">
                  <Settings className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  4. How to Manage Cookies
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                You can control and/or delete cookies as you wish. You can
                delete all cookies that are already on your computer and you can
                set most browsers to prevent them from being placed.
              </p>
              <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-600">
                <p className="font-semibold mb-2">Browser Instructions:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Safari
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Microsoft Edge
                    </a>
                  </li>
                </ul>
              </div>
            </motion.section>

            <div className="h-px bg-slate-100 w-full" />

            {/* Section 5: Updates */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  5. Updates to this Policy
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                We may update this Cookie Policy from time to time in order to
                reflect, for example, changes to the cookies we use or for other
                operational, legal or regulatory reasons. Please therefore
                re-visit this Cookie Policy regularly to stay informed about our
                use of cookies and related technologies.
              </p>
            </motion.section>

            {/* Contact Support */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-900 rounded-2xl p-8 text-center text-white mt-12 shadow-2xl relative overflow-hidden group"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-500/20 transition-colors" />

              <h3 className="font-bold text-2xl mb-3 relative z-10">
                Privacy Questions?
              </h3>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto relative z-10">
                If you have any questions about our use of cookies or other
                technologies, please email us.
              </p>
              <a
                href="mailto:privacy@veravox.ai"
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-amber-50 transition-colors relative z-10"
              >
                Contact Privacy Team <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
