"use client";

import { Check } from "lucide-react";
import { Button } from "./ui/button";

export default function Pricing() {
  const handleGetStarted = () => {
    alert(
      "Thank you for your interest in Screenshow! Please join our waitlist and we'll send you the pricing checkout page once we launch the app."
    );
  };

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-governor-bay">
            Pricing Plans
          </h2>
          <p className="text-kimberly max-w-2xl mx-auto">
            Choose the perfect plan for your screen recording needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Monthly Plan */}
          <div className="border border-perfume rounded-xl p-8 bg-white hover:shadow-md transition-shadow">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-governor-bay mb-2">
                Monthly
              </h3>
              <div className="flex items-center justify-center">
                <span className="text-4xl font-bold text-electric-violet">
                  $26
                </span>
                <span className="text-kimberly ml-2">/month</span>
              </div>
              <p className="text-kimberly mt-2">Billed monthly</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-electric-violet mt-0.5 flex-shrink-0" />
                <span className="text-kimberly">
                  Full recording capabilities
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-electric-violet mt-0.5 flex-shrink-0" />
                <span className="text-kimberly">Basic editing tools</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-electric-violet mt-0.5 flex-shrink-0" />
                <span className="text-kimberly">Cloud storage (5GB)</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-electric-violet mt-0.5 flex-shrink-0" />
                <span className="text-kimberly">Email support</span>
              </div>
            </div>

            <Button 
              onClick={handleGetStarted}
              className="w-full bg-electric-violet hover:bg-cornflower-blue text-white"
            >
              Get Started
            </Button>
          </div>

          {/* Yearly Plan */}
          <div className="border-2 border-electric-violet rounded-xl p-8 bg-white shadow-md relative">
            <div className="absolute top-0 right-0 bg-electric-violet text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              BEST VALUE
            </div>
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-governor-bay mb-2">
                Yearly
              </h3>
              <div className="flex items-center justify-center">
                <span className="text-4xl font-bold text-electric-violet">
                  $110
                </span>
                <span className="text-kimberly ml-2">/year</span>
              </div>
              <p className="text-kimberly mt-2">Save $202 annually</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-electric-violet mt-0.5 flex-shrink-0" />
                <span className="text-kimberly">Everything in Monthly</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-electric-violet mt-0.5 flex-shrink-0" />
                <span className="text-kimberly">Advanced editing features</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-electric-violet mt-0.5 flex-shrink-0" />
                <span className="text-kimberly">Cloud storage (20GB)</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-electric-violet mt-0.5 flex-shrink-0" />
                <span className="text-kimberly">Priority support</span>
              </div>
            </div>

            <Button 
              onClick={handleGetStarted}
              className="w-full bg-electric-violet hover:bg-cornflower-blue text-white"
            >
              Get Started
            </Button>
          </div>

          {/* Lifetime Plan */}
          <div className="border border-perfume rounded-xl p-8 bg-white hover:shadow-md transition-shadow">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-governor-bay mb-2">
                Lifetime
              </h3>
              <div className="flex items-center justify-center">
                <span className="text-4xl font-bold text-electric-violet">
                  $200
                </span>
                <span className="text-kimberly ml-2">/once</span>
              </div>
              <p className="text-kimberly mt-2">One-time payment</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-electric-violet mt-0.5 flex-shrink-0" />
                <span className="text-kimberly">Everything in Yearly</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-electric-violet mt-0.5 flex-shrink-0" />
                <span className="text-kimberly">All future updates</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-electric-violet mt-0.5 flex-shrink-0" />
                <span className="text-kimberly">Cloud storage (50GB)</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-electric-violet mt-0.5 flex-shrink-0" />
                <span className="text-kimberly">VIP support</span>
              </div>
            </div>

            <Button 
              onClick={handleGetStarted}
              className="w-full bg-electric-violet hover:bg-cornflower-blue text-white"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
