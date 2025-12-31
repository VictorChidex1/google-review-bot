import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  CheckCircle2,
  Users,
  HelpCircle,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-slate-900 text-slate-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-500">
              Have questions, feedback, or need support? We'd love to hear from
              you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-600">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">
                        Email Us
                      </p>
                      <a
                        href="mailto:support@veravox.ai"
                        className="text-slate-900 font-semibold hover:text-blue-600 transition-colors"
                      >
                        support@veravox.ai
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-purple-600">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">
                        Live Chat
                      </p>
                      <p className="text-slate-900 font-semibold">
                        Available Mon-Fri, 9am - 5pm EST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-emerald-600">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">
                        Headquarters
                      </p>
                      <p className="text-slate-900 font-semibold">
                        40A Thompson Ave, Ikoyi, Lagos 106104
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-slate-900">
                  What to expect
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-slate-600">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <span>Response within 24 hours</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <span>Dedicated support team</span>
                  </li>
                </ul>
              </div>

              {/* Social Proof Card */}
              <div className="p-6 bg-slate-900 rounded-2xl text-white">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-blue-400">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      Trusted by 10,000+ Owners
                    </h4>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Join the community building the future of reputation
                  management with VeraVox.
                </p>
              </div>

              {/* Mini FAQ */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-slate-900">
                  Common Questions
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <HelpCircle className="w-5 h-5 text-blue-600" />
                      <h4 className="font-semibold text-slate-900">
                        Do you offer demos?
                      </h4>
                    </div>
                    <p className="text-slate-500 text-sm pl-7">
                      Yes! Just mention it in your message and we'll schedule
                      one.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <HelpCircle className="w-5 h-5 text-blue-600" />
                      <h4 className="font-semibold text-slate-900">
                        Is there a free trial?
                      </h4>
                    </div>
                    <p className="text-slate-500 text-sm pl-7">
                      Absolutely. You can try VeraVox free forever on our basic
                      plan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple Form */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
