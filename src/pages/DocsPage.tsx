import {
  Zap,
  Shield,
  Sparkles,
  MessageSquare,
  Search,
  BookOpen,
  ArrowRight,
  Star,
} from "lucide-react";

export default function DocsPage() {
  return (
    <div className="bg-slate-50 font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Hero Section */}
      <div className="pb-12 border-b border-slate-200 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6 border border-emerald-200/50">
            <BookOpen className="w-3 h-3" />
            Knowledge Base
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            How can we help you?
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto mb-8">
            Everything you need to master VeraVox AI.
          </p>

          {/* Search Mock */}
          <div className="max-w-lg mx-auto relative group text-left">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search for guides..."
              className="block w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-sm"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <kbd className="hidden md:inline-block px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-[10px] text-slate-500 font-sans">
                ⌘K
              </kbd>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Sidebar / Table of Contents */}
        <div className="hidden lg:block lg:col-span-3">
          <div className="sticky top-8 space-y-6">
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                On this page
              </h3>
              <nav className="space-y-1 relative border-l border-slate-200 ml-2">
                {[
                  { name: "Getting Started", href: "#getting-started" },
                  { name: "Generating Replies", href: "#generating-replies" },
                  { name: "Pro Features", href: "#pro-features" },
                  { name: "Support", href: "#support" },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block pl-4 py-1 text-sm text-slate-600 hover:text-emerald-600 hover:border-l-2 hover:border-emerald-600 -ml-px transition-all"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Promo Card */}
            <div className="bg-slate-900 rounded-xl p-4 text-white">
              <Star className="w-5 h-5 text-yellow-400 mb-2 fill-yellow-400" />
              <h4 className="font-bold text-sm mb-1">Go Pro</h4>
              <p className="text-slate-400 text-xs mb-3">
                Unlock unlimited generations.
              </p>
              <a
                href="/dashboard/settings"
                className="flex items-center gap-1 text-xs font-bold text-emerald-400 hover:text-emerald-300"
              >
                Upgrade Now <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-9 space-y-12">
          {/* Quick Start Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="p-5 bg-emerald-50/50 border border-emerald-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer group">
              <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">
                Quick Start Guide
              </h3>
              <p className="text-xs text-slate-500">Setting up your account.</p>
            </div>
            <div className="p-5 bg-purple-50/50 border border-purple-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer group">
              <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-3 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">
                AI Best Practices
              </h3>
              <p className="text-xs text-slate-500">
                Tips for human-like responses.
              </p>
            </div>
          </div>

          <div className="prose prose-slate prose-lg max-w-none">
            <section id="getting-started" className="scroll-mt-32">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-4">
                Getting Started
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Welcome to VeraVox AI! We help you respond to Google Reviews 10x
                faster.
              </p>

              <div className="not-prose mt-6 mb-8">
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 text-xs">
                      1
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">
                        Create an Account
                      </h3>
                      <p className="text-slate-600 text-sm">
                        Sign up using Google or email.
                      </p>
                    </div>
                  </div>
                  <div className="w-px h-6 bg-slate-200 ml-3 my-2"></div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-700 text-xs">
                      2
                    </div>
                    <div className="p-1">
                      <h3 className="text-base font-bold text-slate-900 mb-1">
                        Navigate to Generator
                      </h3>
                      <p className="text-slate-600 text-sm">
                        Start generating replies immediately.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="generating-replies"
              className="scroll-mt-32 pt-6 border-t border-slate-100"
            >
              <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-4">
                Generating Replies
              </h2>
              <p>
                Our AI analyzes sentiment and context to craft the perfect
                response.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 not-prose my-4">
                <li className="bg-white p-3 rounded-lg border border-slate-200 text-sm">
                  <span className="font-bold block mb-1">1. Paste Review</span>
                  Copy text from Google Maps.
                </li>
                <li className="bg-white p-3 rounded-lg border border-slate-200 text-sm">
                  <span className="font-bold block mb-1">2. Select Tone</span>
                  Professional, Friendly, or Empathetic.
                </li>
                <li className="bg-white p-3 rounded-lg border border-slate-200 text-sm">
                  <span className="font-bold block mb-1">3. Generate</span>Get 3
                  unique options.
                </li>
                <li className="bg-white p-3 rounded-lg border border-slate-200 text-sm">
                  <span className="font-bold block mb-1">4. Refine</span>Edit
                  details before posting.
                </li>
              </ul>
            </section>

            <section
              id="pro-features"
              className="scroll-mt-32 pt-6 border-t border-slate-100"
            >
              <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-4">
                Pro Features
              </h2>
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white not-prose relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-emerald-400" /> Pro Plan
                    capabilities
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-emerald-400 text-sm">
                        Unlimited Usage
                      </h4>
                      <p className="text-xs text-slate-300">No daily caps.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-400 text-sm">
                        Priority Support
                      </h4>
                      <p className="text-xs text-slate-300">Skip the line.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="support"
              className="scroll-mt-32 pt-6 border-t border-slate-100"
            >
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 not-prose">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-full shadow-sm text-blue-600">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">
                      Still need help?
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Support is available 24/7.
                    </p>
                  </div>
                </div>
                <a
                  href="/dashboard/support"
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm shadow-md"
                >
                  Contact Support
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
