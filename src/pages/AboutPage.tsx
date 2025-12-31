import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Shield, Users, Globe, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Header */}
        <div className="max-w-4xl mx-auto px-4 text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            Empowering Business Owners to Be Heard.
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            At VeraVox, we believe that every customer review is an opportunity.
            Our mission is to help you build stronger relationships, one
            response at a time.
          </p>
        </div>

        {/* Story Section */}
        <section className="max-w-3xl mx-auto px-4 mb-24">
          <h2 className="text-2xl font-bold mb-6">Our Story</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-6">
              It started with a simple observation: Small business owners are
              *busy*. They pour their hearts into their work, but when it comes
              to managing online reputation, they simply don't have the time to
              craft thoughtful responses to every review.
            </p>
            <p className="mb-6">
              We realized that "generic" AI responses sounded robotic and
              impersonal. Owners needed a tool that could mimic their *unique
              voice*—whether that's professional, friendly, or empathetic.
            </p>
            <p>
              Thus, **VeraVox** was born. Used by diverse businesses from local
              cafes to tech startups, we are the bridge between data-driven AI
              and human connection.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-slate-50 py-20 mb-20">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">
              Our Core Values
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Privacy First</h3>
                  <p className="text-slate-500">
                    We never post on your behalf. You always have full control,
                    copying and pasting only what you approve.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Human-Centric AI</h3>
                  <p className="text-slate-500">
                    Our models are fine-tuned to sound like *people*,
                    prioritizing empathy and context over generic pleasantries.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Accessible to All</h3>
                  <p className="text-slate-500">
                    Great tools shouldn't be complicated. We build for
                    non-technical users first.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Excellence</h3>
                  <p className="text-slate-500">
                    We sweat the details. From our UI design to our prompt
                    engineering, we aim for the highest quality standard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
