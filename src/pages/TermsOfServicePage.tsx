import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, type Variants } from "framer-motion";
import {
  FileCheck,
  UserCheck,
  Gavel,
  ShieldAlert,
  Bot,
  Ban,
  CreditCard,
  ChevronRight,
  Terminal,
} from "lucide-react";
import SEO from "../components/SEO";

export default function TermsOfServicePage() {
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
        title="Terms of Service"
        description="The rules of the road. Understand your rights and responsibilities when using VeraVox."
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
              Legal Agreements
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Terms of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Service
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
            >
              The rules of the road. By using VeraVox, you agree to these terms,
              which act as a binding contract.
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
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-50/50 via-transparent to-transparent opacity-50 pointer-events-none" />

            {/* Section 1: Acceptance */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  1. Acceptance of Terms
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                By accessing or using VeraVox, you agree to be bound by these
                Terms of Service and all applicable laws and regulations. If you
                do not agree with any of these terms, you are prohibited from
                using or accessing this site.
              </p>
            </motion.section>

            <div className="h-px bg-slate-100 w-full" />

            {/* Section 2: Account Terms */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  2. Account Requirements
                </h2>
              </div>
              <ul className="space-y-3 text-slate-600 list-disc pl-5">
                <li>
                  <span className="font-semibold text-slate-800">
                    Eligibility:
                  </span>{" "}
                  You must be at least 13 years old to use this Service.
                </li>
                <li>
                  <span className="font-semibold text-slate-800">
                    Security:
                  </span>{" "}
                  You are responsible for maintaining the security of your
                  account and password. VeraVox cannot and will not be liable
                  for any loss or damage from your failure to comply with this
                  security obligation.
                </li>
                <li>
                  <span className="font-semibold text-slate-800">
                    Human Use:
                  </span>{" "}
                  Accounts registered by "bots" or other automated methods are
                  not permitted.
                </li>
              </ul>
            </motion.section>

            <div className="h-px bg-slate-100 w-full" />

            {/* Section 3: Payment & Subscription */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  3. Payment & Subscriptions
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                For paid plans (Pro & Enterprise), the following terms apply:
              </p>
              <ul className="space-y-3 text-slate-600 list-disc pl-5">
                <li>
                  <span className="font-semibold text-slate-800">
                    Auto-Renewal:
                  </span>{" "}
                  Subscriptions automatically renew at the end of each billing
                  cycle unless cancelled materially before the renewal date.
                </li>
                <li>
                  <span className="font-semibold text-slate-800">Refunds:</span>{" "}
                  We offer a 7-day money-back guarantee for new subscriptions.
                  After this period, refunds are at the sole discretion of the
                  company.
                </li>
                <li>
                  <span className="font-semibold text-slate-800">
                    Price Changes:
                  </span>{" "}
                  We reserve the right to modify pricing with at least 30 days
                  notice to current subscribers.
                </li>
              </ul>
            </motion.section>

            <div className="h-px bg-slate-100 w-full" />

            {/* Section 4: AI Disclaimer */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                  <Bot className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  4. AI Content Disclaimer
                </h2>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                <p className="text-slate-700 leading-relaxed font-medium">
                  VeraVox uses advanced Artificial Intelligence to generate
                  content. You acknowledge that:
                </p>
                <ul className="space-y-2 text-slate-600 list-disc pl-5 mt-3 text-sm">
                  <li>
                    AI models can occasionally generate incorrect or misleading
                    information ("hallucinations").
                  </li>
                  <li>
                    You are solely responsible for reviewing, editing, and
                    approving all generated content before publishing it.
                  </li>
                  <li>
                    VeraVox is not liable for any reputational damage caused by
                    posting unreviewed AI content.
                  </li>
                </ul>
              </div>
            </motion.section>

            <div className="h-px bg-slate-100 w-full" />

            {/* Section 5: User Conduct */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center text-rose-600">
                  <Ban className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  5. Prohibited Conduct
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                You agree not to misuse the VeraVox services. Prohibited actions
                include:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-1">
                    No Reverse Engineering
                  </h3>
                  <p className="text-xs text-slate-500">
                    You may not decipher, decompile, or reverse engineer any of
                    the software.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-1">No Scraping</h3>
                  <p className="text-xs text-slate-500">
                    You may not use bots or scrapers to access the service or
                    extract data.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-1">
                    No Illegal Use
                  </h3>
                  <p className="text-xs text-slate-500">
                    You may not use the service for any unlawful purpose or to
                    solicit illegal acts.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-1">No Resale</h3>
                  <p className="text-xs text-slate-500">
                    You may not reproduce, duplicate, or resell any portion of
                    the service.
                  </p>
                </div>
              </div>
            </motion.section>

            <div className="h-px bg-slate-100 w-full" />

            {/* Section 6: Termination */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  6. Termination
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                We may terminate or suspend your account and bar access to the
                Service immediately, without prior notice or liability, under
                our sole discretion, for any reason whatsoever and without
                limitation, including but not limited to a breach of the Terms.
              </p>
            </motion.section>

            <div className="h-px bg-slate-100 w-full" />

            {/* Section 7: Governing Law */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600">
                  <Gavel className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  7. Governing Law
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                These Terms shall be governed and construed in accordance with
                the laws of the State of California, United States, without
                regard to its conflict of law provisions.
              </p>
            </motion.section>

            <div className="h-px bg-slate-100 w-full" />

            {/* Section 8: Changes */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600">
                  <Terminal className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  8. Changes
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material we
                will provide at least 30 days' notice prior to any new terms
                taking effect.
              </p>
            </motion.section>

            {/* Contact Support */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-900 rounded-2xl p-8 text-center text-white mt-12 shadow-2xl relative overflow-hidden group"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/20 transition-colors" />

              <h3 className="font-bold text-2xl mb-3 relative z-10">
                Have legal concerns?
              </h3>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto relative z-10">
                We believe in transparency. If you have questions about our
                terms, please contact us.
              </p>
              <a
                href="mailto:legal@veravox.ai"
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors relative z-10"
              >
                Contact Legal Team <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
