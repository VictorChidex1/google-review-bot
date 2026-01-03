import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import {
  Lock,
  Eye,
  FileText,
  Server,
  Globe,
  Clock,
  Baby,
  RefreshCw,
  ChevronRight,
} from "lucide-react";
import SEO from "../components/SEO";

export default function PrivacyPolicyPage() {
  // Animation Variants (Matching AboutPage)
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
        title="Privacy Policy"
        description="We value your privacy. Read how VeraVox collects, uses, and protects your data."
      />
      <Navbar darkHero={true} />

      <main>
        {/* 1. DARK HERO SECTION */}
        <div className="bg-slate-900 pt-32 pb-48 relative overflow-hidden">
          {/* Ambient Background Effects */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(59,130,246,0.1),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(16,185,129,0.1),transparent_60%)]" />
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
              Legal Center
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Privacy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Policy
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
            >
              We value your trust. Here is a comprehensive breakdown of how we
              handle, store, and protect your data.
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
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent opacity-50 pointer-events-none" />

            {/* Section 1: Information Collection */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  <Eye className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  1. Information We Collect
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                To provide our AI review generation service, we collect limited
                information:
              </p>
              <ul className="space-y-3 text-slate-600 list-disc pl-5">
                <li>
                  <span className="font-semibold text-slate-800">
                    Review Content:
                  </span>{" "}
                  The text of the reviews you paste into our tool.
                </li>
                <li>
                  <span className="font-semibold text-slate-800">
                    Account Info:
                  </span>{" "}
                  Your email address, name, and profile picture (if you create
                  an account).
                </li>
                <li>
                  <span className="font-semibold text-slate-800">
                    Usage Data:
                  </span>{" "}
                  Anonymous metrics on how you use the app (e.g., number of
                  reviews generated).
                </li>
              </ul>
            </motion.section>

            <div className="h-px bg-slate-100 w-full" />

            {/* Section 2: Third-Party Processors */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                  <Server className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  2. Third-Party Service Providers
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                We share data with trusted third-party service providers
                (sub-processors) solely to operate our service.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 shadow-sm border border-slate-100 shrink-0">
                    <span className="font-bold text-xs">AI</span>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">
                      Google Vertex AI
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      AI Text Generation
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 shadow-sm border border-slate-100 shrink-0">
                    <span className="font-bold text-xs">DB</span>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">
                      Google Firebase
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      Database & Auth
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 shadow-sm border border-slate-100 shrink-0">
                    <span className="font-bold text-xs">H</span>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Vercel</div>
                    <div className="text-xs text-slate-500 mt-1">
                      Hosting & Edge
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            <div className="h-px bg-slate-100 w-full" />

            {/* Section 3: Data Retention */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                  <Clock className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  3. Data Retention
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                We retain your account information and generated review history
                for as long as your account is active. You may delete individual
                history items at any time via the dashboard. If you choose to
                delete your account, all associated personal data is permanently
                removed from our servers within 30 days.
              </p>
            </motion.section>

            <div className="h-px bg-slate-100 w-full" />

            {/* Section 4: International Transfers */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                  <Globe className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  4. International Data Transfers
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                VeraVox operates globally. Your data may be transferred to,
                stored, and processed in countries (such as the United States)
                that may have data protection laws different from those of your
                country of residence.
              </p>
            </motion.section>

            <div className="h-px bg-slate-100 w-full" />

            {/* Section 5: Security */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center text-rose-600">
                  <Lock className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  5. Data Security
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                We implement bank-grade security measures. Your data is
                encrypted in transit (SSL/TLS) and at rest. We strictly limit
                access to personal information to employees who need it to do
                their jobs.
              </p>
            </motion.section>

            <div className="h-px bg-slate-100 w-full" />

            {/* Section 6: User Rights */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  6. Your Rights
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                You have full control over your data.
              </p>
              <ul className="space-y-2 text-slate-600 list-disc pl-5 mb-4">
                <li>Access and update your personal information.</li>
                <li>Request deletion of your account and data.</li>
                <li>Opt-out of non-essential communications.</li>
              </ul>
              <p className="text-slate-600 leading-relaxed">
                For detailed information on how we handle cookies, please refer
                to our{" "}
                <Link
                  to="/cookies"
                  className="text-emerald-600 hover:underline font-bold inline-flex items-center gap-1"
                >
                  Cookie Policy <ChevronRight className="w-3 h-3" />
                </Link>
                .
              </p>
            </motion.section>

            <div className="h-px bg-slate-100 w-full" />

            {/* Section 7: Updates */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  7. Changes to This Policy
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify you of any significant changes by posting the new policy
                on this page and updating the "Last Updated" date.
              </p>
            </motion.section>

            <div className="h-px bg-slate-100 w-full" />

            {/* Section 8: Children */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600">
                  <Baby className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  8. Children's Privacy
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Our Service does not address anyone under the age of 13. We do
                not knowingly collect personally identifiable information from
                anyone under the age of 13.
              </p>
            </motion.section>

            {/* Contact Support */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-900 rounded-2xl p-8 text-center text-white mt-12 shadow-2xl relative overflow-hidden group"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/20 transition-colors" />

              <h3 className="font-bold text-2xl mb-3 relative z-10">
                Have questions?
              </h3>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto relative z-10">
                Data privacy can be complex, but we're here to make it simple.
                Our Data Protection Officer is ready to answer any specific
                questions you have.
              </p>
              <a
                href="mailto:privacy@veravox.ai"
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-colors relative z-10"
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
