import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="font-heading font-bold text-2xl">Axisphere</span>
            </Link>
            <p className="text-sm opacity-90">
              Performance marketing and lead generation for USA real estate &
              fintech growth.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#services"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  90-Day Program
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Blog & Insights
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Guides & Playbooks
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-opacity-20 border-accent pt-8">
          <div className="mb-6">
            <p className="text-sm opacity-90 mb-2">
              <span className="font-semibold">Contact:</span>{" "}
              hello@axisphere.media | +1 (US Number) |{" "}
              <a
                href="#contact"
                className="hover:opacity-100 transition-opacity"
              >
                Schedule a Call
              </a>
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-80">
            <p>© {currentYear} Axisphere. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:opacity-100 transition-opacity">
                Twitter
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity">
                LinkedIn
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
