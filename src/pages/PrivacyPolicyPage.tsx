import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Shield, Lock, Eye, FileText, Server } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar darkHero={false} />

      <main className="pt-32 pb-24">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto px-4 text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-6 text-emerald-600">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            We value your trust. Here is a clear breakdown of how we handle your
            data.
          </p>
          <p className="text-sm text-slate-400 mt-4 font-medium uppercase tracking-wider">
            Last Updated: January 3, 2026
          </p>
        </div>

        {/* Content Container */}
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12 space-y-12">
            {/* Section 1 */}
            <section>
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
                  Your email address and name (if you create an account).
                </li>
                <li>
                  <span className="font-semibold text-slate-800">
                    Usage Data:
                  </span>{" "}
                  Anonymous metrics on how you use the app to help us improve.
                </li>
              </ul>
            </section>

            <hr className="border-slate-100" />

            {/* Section 2 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                  <Server className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  2. How We Use Information
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                We use your data solely to operate and improve VeraVox:
              </p>
              <ul className="space-y-3 text-slate-600 list-disc pl-5">
                <li>
                  <span className="font-semibold text-slate-800">
                    AI Processing:
                  </span>{" "}
                  Review text is sent to our AI providers (like Google Gemini)
                  to generate responses. We do <strong>not</strong> use your
                  data to train public AI models.
                </li>
                <li>
                  <span className="font-semibold text-slate-800">
                    Service Improvement:
                  </span>{" "}
                  Taking feedback to fine-tune our response tones.
                </li>
              </ul>
            </section>

            <hr className="border-slate-100" />

            {/* Section 3 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center text-rose-600">
                  <Lock className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  3. Data Security
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                We implement bank-grade security measures. Your data is
                encrypted in transit (SSL/TLS) and at rest. We strictly limit
                access to personal information to employees who need it to do
                their jobs.
              </p>
            </section>

            <hr className="border-slate-100" />

            {/* Section 4 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  4. Your Rights
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                You have full control over your data. You can request to:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-1">Export Data</h4>
                  <p className="text-sm text-slate-500">
                    Download a copy of your history.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-1">
                    Delete Account
                  </h4>
                  <p className="text-sm text-slate-500">
                    Permanently remove all your info.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Support */}
            <div className="bg-slate-900 rounded-2xl p-6 text-center text-white mt-8">
              <h3 className="font-bold text-lg mb-2">Have questions?</h3>
              <p className="text-slate-400 text-sm mb-4">
                Our Data Protection Officer is here to help.
              </p>
              <a
                href="mailto:privacy@veravox.ai"
                className="inline-block bg-white text-slate-900 px-6 py-2 rounded-lg font-bold text-sm hover:bg-slate-200 transition-colors"
              >
                Contact Privacy Team
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
