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
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F07ba826074254d3191a55ee32e800a58%2F9a5617e61447487cab49264f51c9bfde?format=webp&width=800"
                alt="Holographic Sphere Logo"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <span className="font-heading font-bold text-lg">Seed</span>
            </Link>
            <p className="text-sm opacity-90">
              Building beautiful, modern digital experiences.
            </p>
          </div>

          {/* Quick Links */}
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
                  href="#about"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  About
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
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Documentation
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
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Terms
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
        <div className="border-t border-opacity-20 border-accent pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-80">
          <p>© {currentYear} Seed. All rights reserved.</p>
          <div className="flex items-center gap-4">
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
    </footer>
  );
}
