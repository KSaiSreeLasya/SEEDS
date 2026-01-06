import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleGetStarted = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="container mx-auto px-4 py-4 lg:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F07ba826074254d3191a55ee32e800a58%2F9a5617e61447487cab49264f51c9bfde?format=webp&width=800"
              alt="Holographic Sphere Logo"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className="font-heading font-bold text-xl text-primary hidden sm:block">
              Seed
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-foreground font-medium hover:text-secondary transition-colors"
            >
              Home
            </Link>
            <a
              href="#services"
              className="text-foreground font-medium hover:text-secondary transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-foreground font-medium hover:text-secondary transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-foreground font-medium hover:text-secondary transition-colors"
            >
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={handleGetStarted}
              className="px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-md hover:opacity-90 transition-opacity font-heading"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-slide-up">
            <Link
              to="/"
              className="block px-4 py-2 text-foreground hover:bg-muted hover:text-secondary rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <a
              href="#services"
              className="block px-4 py-2 text-foreground hover:bg-muted hover:text-secondary rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="block px-4 py-2 text-foreground hover:bg-muted hover:text-secondary rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-foreground hover:bg-muted hover:text-secondary rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <button
              onClick={() => {
                handleGetStarted();
                setIsMobileMenuOpen(false);
              }}
              className="w-full px-4 py-2.5 bg-primary text-primary-foreground font-semibold rounded-md hover:opacity-90 transition-opacity font-heading"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
