import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
        <Link to="/" className="text-primary hover:text-secondary mb-6 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-heading font-bold mb-8">Terms & Conditions</h1>

        <div className="prose prose-invert max-w-none space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold">1. Acceptance of Terms</h2>
            <p className="text-foreground/90">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold">2. Use License</h2>
            <p className="text-foreground/90">
              Permission is granted to temporarily download one copy of the materials (information or software) on Axisphere's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/90">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on Axisphere's website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold">3. Disclaimer</h2>
            <p className="text-foreground/90">
              The materials on Axisphere's website are provided on an 'as is' basis. Axisphere makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold">4. Limitations</h2>
            <p className="text-foreground/90">
              In no event shall Axisphere or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Axisphere's website, even if Axisphere or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold">5. Accuracy of Materials</h2>
            <p className="text-foreground/90">
              The materials appearing on Axisphere's website could include technical, typographical, or photographic errors. Axisphere does not warrant that any of the materials on its website are accurate, complete, or current. Axisphere may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold">6. Links</h2>
            <p className="text-foreground/90">
              Axisphere has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Axisphere of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold">7. Modifications</h2>
            <p className="text-foreground/90">
              Axisphere may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold">8. Governing Law</h2>
            <p className="text-foreground/90">
              These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold">9. Contact Information</h2>
            <p className="text-foreground/90">
              If you have any questions about these Terms & Conditions, please contact us at:
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
    </div>
  );
}
