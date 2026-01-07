import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-12 md:py-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-secondary/30 rounded-lg flex items-center justify-center">
                <span className="font-heading font-bold text-lg">A</span>
              </div>
              <span className="font-heading font-bold text-xl">Axisphere</span>
            </Link>
            <p className="text-sm opacity-80">
              Performance marketing and lead generation for USA{" "}
              <span className="whitespace-nowrap">real estate</span> & fintech
              growth.
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
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="mb-6">
            <p className="text-sm opacity-90 mb-2">
              <span className="font-semibold">Contact:</span>{" "}
              hello@axisphere.media | +1 (US Number) |{" "}
              <a
                href="#contact"
                className="hover:opacity-100 transition-opacity font-medium"
              >
                Schedule a Call
              </a>
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-80">
            <p>© {currentYear} Axisphere. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="hover:opacity-100 transition-opacity font-medium"
              >
                Twitter
              </a>
              <a
                href="#"
                className="hover:opacity-100 transition-opacity font-medium"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="hover:opacity-100 transition-opacity font-medium"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
