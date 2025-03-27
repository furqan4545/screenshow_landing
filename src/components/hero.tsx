import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Video,
  Wand2,
  Camera,
  Share2,
} from "lucide-react";
import EmailCapture from "./email-capture";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-perfume via-white to-sail opacity-70" />

      <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-governor-bay mb-8 tracking-tight">
              Transform Screen Recordings into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-violet to-cornflower-blue">
                Magical
              </span>{" "}
              Demos
            </h1>

            <p className="text-xl text-kimberly mb-8 max-w-2xl mx-auto leading-relaxed">
              The upcoming macOS app that combines Loom-like sharing with
              powerful built-in editing features including animations,
              transitions, and zooms - all in one intuitive package.
            </p>

            <div className="max-w-md mx-auto mb-12">
              <EmailCapture />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#features"
                className="inline-flex items-center px-8 py-4 text-white bg-cornflower-blue rounded-lg hover:bg-electric-violet transition-colors text-lg font-medium"
              >
                See Features
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <Video className="w-6 h-6 text-electric-violet mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-governor-bay">
                    Simple Recording
                  </h3>
                  <p className="text-sm text-kimberly">
                    Capture your screen with just a click on macOS
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Wand2 className="w-6 h-6 text-electric-violet mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-governor-bay">
                    Magic Editing
                  </h3>
                  <p className="text-sm text-kimberly">
                    Add stunning animations without complex software
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Camera className="w-6 h-6 text-electric-violet mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-governor-bay">
                    Camera Integration
                  </h3>
                  <p className="text-sm text-kimberly">
                    Seamlessly overlay your webcam for a personal touch
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Share2 className="w-6 h-6 text-electric-violet mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-governor-bay">
                    One-Click Sharing
                  </h3>
                  <p className="text-sm text-kimberly">
                    Distribute your polished demos instantly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
