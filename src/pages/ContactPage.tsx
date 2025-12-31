import { useState, type FormEvent, type ChangeEvent } from "react";
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
  Send,
  Loader2,
  Check,
} from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields.");
      setIsLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, "contact_messages"), {
        ...formData,
        createdAt: serverTimestamp(),
        status: "unread",
      });
      setIsSuccess(true);
      setError(null);
      setFormData({ name: "", email: "", message: "" }); // Clear form

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      console.error("Error sending message:", err);
      setError("Failed to send message. Please try again.");
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />

      <main>
        {/* Dark Hero Section */}
        <div className="bg-slate-900 pt-32 pb-24 relative overflow-hidden">
          {/* Ambient Background Effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[128px]" />
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-[128px]" />
          </div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              We're here to help
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Touch
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Have a question or want to learn more about VeraVox? We'd love to
              hear from you.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 -mt-12 relative z-20">
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
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative">
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isLoading || isSuccess}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all disabled:opacity-60 disabled:cursor-not-allowed"
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading || isSuccess}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all disabled:opacity-60 disabled:cursor-not-allowed"
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
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    disabled={isLoading || isSuccess}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none disabled:opacity-60 disabled:cursor-not-allowed"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                {error && !isSuccess && (
                  <div className="text-red-500 text-sm font-medium bg-red-50 p-3 rounded-lg border border-red-100">
                    {error}
                  </div>
                )}

                {isSuccess && (
                  <div className="text-emerald-600 text-sm font-medium bg-emerald-50 p-3 rounded-lg border border-emerald-100 flex items-center gap-2">
                    <Check className="w-4 h-4" /> Message sent successfully!
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading || isSuccess}
                  className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : isSuccess ? (
                    <>
                      <Check className="w-5 h-5" />
                      Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
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
