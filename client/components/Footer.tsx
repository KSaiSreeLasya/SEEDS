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
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fdf131029371243a6bdd4cd7752a9db95%2F4fd56084edeb4b5e849c2c5dd9a552d1?format=webp&width=800"
                alt="Axisphere Logo"
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-sm opacity-80">
              Performance marketing and lead generation for USA{" "}
              <span className="whitespace-nowrap">real estate</span> & fintech
              growth.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-[#ded0f6] hover:text-[#ded0f6]/80 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-[#ded0f6] hover:text-[#ded0f6]/80 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="text-[#ded0f6] hover:text-[#ded0f6]/80 transition-colors"
                >
                  Solutions
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-[#ded0f6] hover:text-[#ded0f6]/80 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[#ded0f6] hover:text-[#ded0f6]/80 transition-colors"
                >
                  Contact
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
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ded0f6] hover:text-[#ded0f6]/80 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ded0f6] hover:text-[#ded0f6]/80 transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ded0f6] hover:text-[#ded0f6]/80 transition-colors"
                >
                  Twitter
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
                <Link
                  to="/privacy-policy"
                  className="text-[#ded0f6] hover:text-[#ded0f6]/80 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-conditions"
                  className="text-[#ded0f6] hover:text-[#ded0f6]/80 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#ded0f6] hover:text-[#ded0f6]/80 transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="mb-6 space-y-2">
            <p className="text-sm opacity-100">
              <span className="font-semibold">Contact:</span>{" "}
              hello@axisphere.media
            </p>
            <p className="text-sm opacity-100">
              <span className="font-semibold">USA:</span>{" "}
              <a
                href="tel:16095361441"
                className="text-[#ded0f6] hover:text-[#ded0f6]/80 transition-colors"
              >
                +1 (609) 536-1441
              </a>
            </p>
            <p className="text-sm opacity-100">
              <span className="font-semibold">UK:</span>{" "}
              <a
                href="tel:+441134036718"
                className="text-[#ded0f6] hover:text-[#ded0f6]/80 transition-colors"
              >
                +44 (113) 403-6718
              </a>
            </p>
            <p className="text-sm">
              <a
                href="#contact"
                className="text-[#ded0f6] hover:text-[#ded0f6]/80 transition-colors"
              >
                Schedule a Call
              </a>
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-100">
            <p>© {currentYear} Axisphere. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ded0f6] hover:text-[#ded0f6]/80 transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ded0f6] hover:text-[#ded0f6]/80 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ded0f6] hover:text-[#ded0f6]/80 transition-colors"
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
