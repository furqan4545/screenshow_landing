"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-gradient-to-r from-electric-violet/10 via-cornflower-blue/10 to-perfume/10 backdrop-blur-sm border-b border-gray-200/50 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" prefetch className="text-xl font-bold text-governor-bay">
          SCREENSHOW
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-governor-bay hover:text-electric-violet"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#pricing"
            className="text-governor-bay hover:text-electric-violet transition-colors font-medium px-3 py-2 rounded-md hover:bg-electric-violet/10"
          >
            Pricing
          </Link>
          <Button
            onClick={() => {
              alert(
                "Screenshow is coming in May 2025! Join our waitlist to be notified when we launch.",
              );
            }}
            className="px-8 py-2 bg-gradient-to-r from-electric-violet to-cornflower-blue text-white rounded-md hover:opacity-90 transition-all font-medium shadow-lg shadow-electric-violet/20"
          >
            Download
          </Button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white/80 backdrop-blur-sm border-t border-gray-100 flex flex-col space-y-4 animate-in slide-in-from-top">
          <Link
            href="#pricing"
            className="text-governor-bay hover:text-electric-violet transition-colors font-medium py-3 px-4 rounded-md hover:bg-electric-violet/10"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <Button
            onClick={() => {
              setIsMenuOpen(false);
              alert(
                "Screenshow is coming in May 2025! Join our waitlist to be notified when we launch.",
              );
            }}
            className="px-8 py-3 bg-gradient-to-r from-electric-violet to-cornflower-blue text-white rounded-md hover:opacity-90 transition-all font-medium shadow-lg shadow-electric-violet/20 w-full"
          >
            Download
          </Button>
        </div>
      )}
    </nav>
  );
}
