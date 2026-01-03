import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FileCheck, Users, AlertCircle, Ban, Scale } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar darkHero={false} />

      <main className="pt-32 pb-24">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto px-4 text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 text-blue-600">
            <FileCheck className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            The rules of the road. Please read these terms carefully before
            using VeraVox.
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
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                  <Users className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  1. Acceptance of Terms
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                By accessing or using VeraVox, you agree to be bound by these
                Terms. If you disagree with any part of the terms, you may not
                access the service.
              </p>
            </section>

            <hr className="border-slate-100" />

            {/* Section 2 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                  <Scale className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  2. Use License
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the
                materials (information or software) on VeraVox's website for
                personal, non-commercial transitory viewing only.
              </p>
              <ul className="space-y-3 text-slate-600 list-disc pl-5">
                <li>You use the generated responses at your own discretion.</li>
                <li>
                  You are responsible for reviewing AI content before posting.
                </li>
                <li>You must not use the service for any illegal purposes.</li>
              </ul>
            </section>

            <hr className="border-slate-100" />

            {/* Section 3 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center text-rose-600">
                  <Ban className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  3. Limitations
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                In no event shall VeraVox or its suppliers be liable for any
                damages (including, without limitation, damages for loss of data
                or profit, or due to business interruption) arising out of the
                use or inability to use the materials on VeraVox's website.
              </p>
            </section>

            <hr className="border-slate-100" />

            {/* Section 4 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  4. Disclaimer
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                The materials on VeraVox's website are provided on an 'as is'
                basis. VeraVox makes no warranties, expressed or implied, and
                hereby disclaims and negates all other warranties including,
                without limitation, implied warranties or conditions of
                merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of
                rights.
              </p>
            </section>

            {/* Contact Support */}
            <div className="bg-slate-900 rounded-2xl p-6 text-center text-white mt-8">
              <h3 className="font-bold text-lg mb-2">Need clarification?</h3>
              <p className="text-slate-400 text-sm mb-4">
                Our legal team is happy to answer your questions.
              </p>
              <a
                href="mailto:legal@veravox.ai"
                className="inline-block bg-white text-slate-900 px-6 py-2 rounded-lg font-bold text-sm hover:bg-slate-200 transition-colors"
              >
                Contact Legal Team
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
