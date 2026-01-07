import { useState } from "react";
import ContactForm from "./ContactForm";

export default function CTA() {
  const [openForm, setOpenForm] = useState<"project" | "call" | "plan" | null>(null);

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <div className="bg-gradient-to-br from-primary via-primary to-primary/80 rounded-3xl p-8 md:p-16 text-center text-primary-foreground animate-slide-up shadow-2xl hover:shadow-3xl transition-shadow relative overflow-hidden">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5 rounded-3xl" style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)",
              backgroundSize: "50px 50px"
            }}></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                Ready to Launch Your 90-Day Lead Engine?
              </h2>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8 leading-relaxed">
                If you're a US <span className="whitespace-nowrap">real estate</span> or <span className="whitespace-nowrap">fintech</span> business that wants
                consistent, measurable buyer and prospect enquiries, let's design
                the right funnel for your market and business model.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button
                  onClick={() => setOpenForm("plan")}
                  className="px-8 py-4 bg-accent-foreground text-white font-heading font-bold rounded-lg hover:opacity-90 shadow-lg hover:shadow-xl transition-all text-lg"
                >
                  Start a 90-Day Program
                </button>
                <button
                  onClick={() => setOpenForm("call")}
                  className="px-8 py-4 border-2 border-accent-foreground bg-transparent text-accent-foreground font-heading font-bold rounded-lg hover:bg-accent-foreground hover:text-white hover:shadow-lg transition-all text-lg"
                >
                  Schedule a Discovery Call
                </button>
              </div>
              <p className="text-sm opacity-80">
                No long-term lock-in. Month-to-month engagement starting
                immediately after strategy phase.
              </p>
            </div>
          </div>

          {/* Trust Section */}
          <div className="mt-16 pt-16 border-t border-border">
            <div className="text-center mb-12 animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20 mb-4">
                <span className="text-secondary font-semibold text-sm">⭐ Trusted</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground">
                Leading <span className="whitespace-nowrap">Real Estate & Fintech</span> Companies
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                "Real Estate Partner 1",
                "Fintech SaaS 1",
                "Real Estate Developer 1",
                "Fintech Platform 1",
              ].map((company, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-6 bg-gradient-to-br from-muted to-muted/50 rounded-xl border border-border hover:border-secondary hover:shadow-lg hover:from-muted hover:to-secondary/5 shadow-sm transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="font-semibold text-muted-foreground">
                    {company}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ContactForm
        isOpen={openForm !== null}
        onOpenChange={(open) => setOpenForm(open ? openForm : null)}
        type={(openForm || "project") as "project" | "call" | "plan"}
      />
    </section>
  );
}
