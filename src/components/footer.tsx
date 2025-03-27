import Link from "next/link";
import { Twitter, Linkedin, Github, Heart, Coffee } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-electric-violet/5 via-cornflower-blue/5 to-perfume/5 backdrop-blur-sm border-t border-gray-200/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Product Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#features"
                  className="text-gray-600 hover:text-electric-violet transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#join-waitlist"
                  className="text-gray-600 hover:text-electric-violet transition-colors"
                >
                  Join Waitlist
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-600 hover:text-electric-violet transition-colors"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-electric-violet transition-colors">
                  Mac App
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-electric-violet transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-electric-violet transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-electric-violet transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-electric-violet transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-electric-violet transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-electric-violet transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-electric-violet transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-electric-violet transition-colors">
                  Tutorials
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-electric-violet transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-electric-violet transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-electric-violet transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-electric-violet transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200/50">
          <div className="text-gray-600 mb-4 md:mb-0 text-center md:text-left">
            <div className="mb-2">
              © {currentYear} Screenshow. All rights reserved.
            </div>
            <div className="font-medium">
              Contact us:{" "}
              <a
                href="mailto:ali@showces.com"
                className="text-electric-violet hover:underline font-semibold"
              >
                ali@showces.com
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex items-center text-gray-500 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-electric-violet fill-current" />
              <span>and a few shots of</span>
              <Coffee className="w-4 h-4 mx-1 text-cornflower-blue" />
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-electric-violet transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-violet transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-violet transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
