import { useState } from "react";
import ContactForm from "./ContactForm";

export default function CTA() {
  const [openForm, setOpenForm] = useState<"project" | "call" | "plan" | null>(
    null,
  );

  return (
    <section
      id="contact"
      className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <div className="bg-gradient-to-br from-primary via-primary to-primary/80 rounded-3xl p-8 md:p-16 text-center text-primary-foreground animate-slide-up shadow-2xl hover:shadow-3xl transition-shadow relative overflow-hidden">
            {/* Subtle pattern overlay */}
            <div
              className="absolute inset-0 opacity-5 rounded-3xl"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            ></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                Ready to Launch Your 90-Day Lead Engine?
              </h2>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8 leading-relaxed">
                If you're a US{" "}
                <span className="whitespace-nowrap">real estate</span> or{" "}
                <span className="whitespace-nowrap">fintech</span> business that
                wants consistent, measurable buyer and prospect enquiries, let's
                design the right funnel for your market and business model.
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
                  className="px-8 py-4 bg-accent-foreground text-white font-heading font-bold rounded-lg hover:opacity-90 shadow-lg hover:shadow-xl transition-all text-lg"
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
          <div className="mt-20 pt-20">
            <div className="text-center mb-16 animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full border border-secondary/30 mb-6 backdrop-blur-sm">
                <span className="text-2xl">⭐</span>
                <span className="text-secondary-foreground font-bold text-sm tracking-wide">
                  TRUSTED BY INDUSTRY LEADERS
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Powering{" "}
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Real Estate & Fintech
                </span>{" "}
                Success
              </h3>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Join market leaders who've transformed their lead generation
                strategy
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  name: "Real Estate Partner 1",
                  icon: "🏢",
                  type: "Enterprise",
                },
                { name: "Fintech SaaS 1", icon: "💳", type: "Platform" },
                {
                  name: "Real Estate Developer 1",
                  icon: "🏗️",
                  type: "Developer",
                },
                { name: "Fintech Platform 1", icon: "📊", type: "Analytics" },
              ].map((company, index) => (
                <div
                  key={index}
                  className="group relative h-full animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

                  <div className="relative h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-card to-muted/30 rounded-2xl border border-border/50 group-hover:border-secondary/50 shadow-sm group-hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
                    {/* Icon */}
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {company.icon}
                    </div>

                    {/* Company name */}
                    <p className="font-bold text-foreground text-center text-lg mb-3">
                      {company.name}
                    </p>

                    {/* Type badge */}
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-secondary/20 to-accent/20 text-secondary-foreground text-xs font-semibold rounded-full border border-secondary/20">
                      {company.type}
                    </span>

                    {/* Hover indicator */}
                    <div className="mt-4 h-1 w-0 bg-gradient-to-r from-secondary to-accent rounded-full group-hover:w-8 transition-all duration-300"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-16 pt-16 border-t border-border/50">
              {[
                { stat: "100+", label: "Active Clients" },
                { stat: "500M+", label: "Leads Generated" },
                { stat: "95%", label: "Success Rate" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">
                    {item.stat}
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {item.label}
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
