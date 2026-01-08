import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
        <Link
          to="/"
          className="text-primary hover:text-secondary mb-6 inline-block"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-heading font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-invert max-w-none space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold">
              1. Introduction
            </h2>
            <p className="text-foreground/90">
              Axisphere ("we," "our," or "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website and use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold">
              2. Information We Collect
            </h2>
            <p className="text-foreground/90">
              We may collect information about you in a variety of ways. The
              information we may collect on the site includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90">
              <li>Name and email address</li>
              <li>Phone number</li>
              <li>Company information</li>
              <li>Industry details</li>
              <li>Budget information</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold">
              3. Use of Your Information
            </h2>
            <p className="text-foreground/90">
              Having accurate information about you permits us to provide you
              with a smooth, efficient, and customized experience. Specifically,
              we may use information collected about you via the site to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90">
              <li>Generate leads and contact you regarding your inquiry</li>
              <li>Improve and optimize our services</li>
              <li>
                Send you marketing and promotional communications (with your
                consent)
              </li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Create and manage your account</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold">
              4. Disclosure of Your Information
            </h2>
            <p className="text-foreground/90">
              We may share your information with third parties in the following
              situations:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90">
              <li>
                With service providers who assist us in operating our website
                and providing services
              </li>
              <li>As required by law or legal process</li>
              <li>To protect our rights, privacy, safety, or property</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold">
              5. Security of Your Information
            </h2>
            <p className="text-foreground/90">
              We use administrative, technical, and physical security measures
              to protect your personal information. However, no method of
              transmission over the Internet or electronic storage is 100%
              secure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold">
              6. Contact Us
            </h2>
            <p className="text-foreground/90">
              If you have questions or comments about this Privacy Policy,
              please contact us at:
            </p>
            <p className="text-foreground/90">
              <strong>Email:</strong> hello@axisphere.media
            </p>
          </section>

          <section className="space-y-4 pt-4 border-t border-border">
            <p className="text-sm text-foreground/70">
              Last updated: {new Date().getFullYear()}
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
