import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Pricing from "@/components/pricing";
import {
  ArrowUpRight,
  Laptop,
  Wand2,
  Camera,
  Share2,
  MousePointer,
  Layers,
  Maximize,
} from "lucide-react";
import { createClient } from "../../supabase/server";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const supabase = await createClient();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-perfume/20">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Screenshow combines powerful recording capabilities with intuitive
              editing tools to help you create professional demos in minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Laptop className="w-6 h-6" />,
                title: "Simple macOS Recording",
                description:
                  "Capture your entire screen, a specific window, or a custom area with just a few clicks.",
              },
              {
                icon: <Wand2 className="w-6 h-6" />,
                title: "Magic Editing Suite",
                description:
                  "Add stunning animations, transitions, and dynamic zooms without complex software.",
              },
              {
                icon: <Camera className="w-6 h-6" />,
                title: "Camera Integration",
                description:
                  "Seamlessly overlay your webcam for a personal touch that connects with your audience.",
              },
              {
                icon: <Share2 className="w-6 h-6" />,
                title: "One-Click Sharing",
                description:
                  "Distribute your polished demos instantly with shareable links or export as video files.",
              },
              {
                icon: <MousePointer className="w-6 h-6" />,
                title: "Mouse Emphasis",
                description:
                  "Highlight your cursor movements with customizable effects to guide viewer attention.",
              },

              {
                icon: <Layers className="w-6 h-6" />,
                title: "Multi-Layer Editing",
                description:
                  "Combine multiple recordings, add text overlays, and insert graphics with ease.",
              },
              {
                icon: <Maximize className="w-6 h-6" />,
                title: "Smart Zoom",
                description:
                  "Automatically focus on important areas of your screen during playback.",
              },
              {
                icon: <ArrowUpRight className="w-6 h-6" />,
                title: "Cloud Storage",
                description:
                  "Access your recordings from anywhere and never worry about losing your work.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-perfume"
              >
                <div className="text-electric-violet mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-governor-bay">
                  {feature.title}
                </h3>
                <p className="text-kimberly">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-perfume/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How Screenshow Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Create professional screen recordings in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-perfume rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-governor-bay text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-governor-bay">
                Record
              </h3>
              <p className="text-kimberly">
                Capture your screen with a single click. Choose to include your
                camera and audio.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-perfume rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-governor-bay text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-governor-bay">
                Edit
              </h3>
              <p className="text-kimberly">
                Use our intuitive editing tools to enhance your recording with
                effects and transitions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-perfume rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-governor-bay text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-governor-bay">
                Share
              </h3>
              <p className="text-kimberly">
                Instantly share your polished demo with a link or export as a
                video file.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-governor-bay">
              Frequently Asked Questions
            </h2>
            <p className="text-kimberly max-w-2xl mx-auto">
              Everything you need to know about Screenshow
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "When will Screenshow be available?",
                answer:
                  "We're currently in private beta and plan to launch publicly in Q3 2023. Join our waitlist to be notified when we launch.",
              },
              {
                question: "Will Screenshow be available for Windows?",
                answer:
                  "We're focusing on macOS for our initial release, but we plan to support Windows in the future.",
              },
              {
                question: "How much will Screenshow cost?",
                answer:
                  "We'll offer both free and premium plans. Waitlist members will receive special launch pricing.",
              },
              {
                question: "Can I use Screenshow for commercial purposes?",
                answer:
                  "Yes, Screenshow is perfect for creating product demos, tutorials, and other commercial content.",
              },
              {
                question:
                  "How is Screenshow different from other screen recording tools?",
                answer:
                  "Screenshow combines recording and advanced editing in one intuitive package, eliminating the need for separate video editing software.",
              },
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-perfume/20 rounded-xl">
                <h3 className="text-xl font-semibold mb-2 text-governor-bay">
                  {faq.question}
                </h3>
                <p className="text-kimberly">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing />

      <footer className="py-6 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-kimberly text-sm">
            © 2025 Screenshow. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
