import { useState } from "react";
import ContactForm from "./ContactForm";

export default function CTA() {
  const [openForm, setOpenForm] = useState<"project" | "call" | null>(null);

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-16 text-center text-primary-foreground animate-slide-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Ready to Launch Your 90-Day Lead Engine?
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
              If you're a US real estate or fintech business that wants consistent, measurable buyer and prospect enquiries, let's design the right funnel for your market and business model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button
                onClick={() => setOpenForm("project")}
                className="px-8 py-4 bg-accent-foreground text-white font-heading font-bold rounded-lg hover:opacity-90 transition-opacity text-lg"
              >
                Start a 90-Day Program
              </button>
              <button
                onClick={() => setOpenForm("call")}
                className="px-8 py-4 border-2 border-accent-foreground bg-transparent text-accent-foreground font-heading font-bold rounded-lg hover:bg-accent-foreground hover:text-white transition-all text-lg"
              >
                Schedule a Discovery Call
              </button>
            </div>
            <p className="text-sm opacity-80">
              No long-term lock-in. Month-to-month engagement starting immediately after strategy phase.
            </p>
          </div>

          {/* Trust Section */}
          <div className="mt-16 pt-16 border-t border-border">
            <div className="text-center mb-12 animate-slide-up">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                Trusted by leading brands
              </p>
              <h3 className="text-2xl font-heading font-bold text-foreground">
                Leading Real Estate & Fintech Companies
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {["Real Estate Partner 1", "Fintech SaaS 1", "Real Estate Developer 1", "Fintech Platform 1"].map(
                (company, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-6 bg-muted rounded-xl border border-border hover:border-primary/30 transition-colors animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <p className="font-semibold text-muted-foreground">
                      {company}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      <ContactForm
        isOpen={openForm !== null}
        onOpenChange={(open) => setOpenForm(open ? openForm : null)}
        type={openForm || "project"}
      />
    </section>
  );
}
