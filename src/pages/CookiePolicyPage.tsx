import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Cookie, Info, Settings, ShieldCheck } from "lucide-react";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar darkHero={false} />

      <main className="pt-32 pb-24">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto px-4 text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-2xl mb-6 text-amber-600">
            <Cookie className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            How we use cookies to improve your experience and keep our services
            secure.
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
                  <Info className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  1. What Are Cookies?
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Cookies are small text files that are placed on your computer or
                mobile device when you visit a website. They are widely used to
                make websites work more efficiently and provide information to
                the owners of the site.
              </p>
            </section>

            <hr className="border-slate-100" />

            {/* Section 2 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  2. How We Use Cookies
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                We use cookies for the following purposes:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-800">
                      Essential Cookies
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Required for the website to function (e.g., logging in,
                      saving your preferences).
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-800">
                      Analytics Cookies
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Help us understand how visitors interact with our website
                      so we can improve it.
                    </p>
                  </div>
                </li>
              </ul>
            </section>

            <hr className="border-slate-100" />

            {/* Section 3 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600">
                  <Settings className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  3. Managing Cookies
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their
                settings preferences. However, if you limit the ability of
                websites to set cookies, you may worsen your overall user
                experience.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
