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
    <nav className="w-full border-b border-gray-200 bg-white py-3">
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
        <div className="hidden md:flex gap-6 items-center">
          <Link
            href="#pricing"
            className="text-governor-bay hover:text-electric-violet transition-colors font-medium px-2 py-1"
          >
            Pricing
          </Link>
          <Button
            onClick={() => {
              alert(
                "Screenshow is coming in May 2025! Join our waitlist to be notified when we launch.",
              );
            }}
            className="px-6 py-2 bg-electric-violet text-white rounded-md hover:bg-cornflower-blue transition-colors font-medium"
          >
            Download
          </Button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-t border-gray-100 flex flex-col space-y-4 animate-in slide-in-from-top">
          <Link
            href="#pricing"
            className="text-governor-bay hover:text-electric-violet transition-colors font-medium py-2 px-2 rounded-md hover:bg-perfume/20"
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
            className="px-6 py-2 bg-electric-violet text-white rounded-md hover:bg-cornflower-blue transition-colors font-medium w-full"
          >
            Download
          </Button>
        </div>
      )}
    </nav>
  );
}
