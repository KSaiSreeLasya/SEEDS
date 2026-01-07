import { useState } from "react";
import ContactForm from "./ContactForm";

export default function Hero() {
  const [openForm, setOpenForm] = useState<"project" | "call" | "plan" | null>(null);

  const handleGetStarted = () => {
    setOpenForm("plan");
  };

  const handleSpecialist = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <span className="text-accent-foreground font-semibold text-sm">
                ✨ New
              </span>
              <span className="text-accent-foreground text-sm font-medium">
                90-Day Acquisition Program
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              90-Day Lead Engine for US <span className="whitespace-nowrap">Real Estate & Fintech</span>
            </h1>

            <p className="text-lg md:text-xl opacity-90 max-w-lg leading-relaxed">
              Performance-driven Google, Meta, and outbound campaigns to
              generate qualified leads, demos, and deals for your sales team.
            </p>

            <p className="text-base opacity-80 max-w-lg leading-relaxed">
              From high-intent property buyer searches to compliant fintech demo
              funnels, Axisphere builds and runs AI-powered campaigns that
              deliver consistent, measurable results. Your goal is closing more
              deals. Ours is giving you the steady pipeline you need.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={handleGetStarted}
                className="px-8 py-3 bg-accent-foreground text-white font-heading font-semibold rounded-lg hover:opacity-90 shadow-lg hover:shadow-xl transition-all text-center"
              >
                Get My 90-Day Plan
              </button>
              <button
                onClick={handleSpecialist}
                className="px-8 py-3 border-2 border-accent-foreground text-accent-foreground font-heading font-semibold rounded-lg hover:bg-accent-foreground hover:text-white hover:shadow-lg transition-all text-center"
              >
                Talk to a Specialist
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 pt-6 text-sm opacity-90">
              <div className="flex-1 p-4 rounded-lg bg-accent/5 border border-accent/20">
                <p className="font-heading font-bold text-lg text-accent-foreground">
                  150+
                </p>
                <p className="whitespace-nowrap"><span className="whitespace-nowrap">Real Estate & Fintech</span> Campaigns</p>
              </div>
              <div className="flex-1 p-4 rounded-lg bg-accent/5 border border-accent/20">
                <p className="font-heading font-bold text-lg text-accent-foreground">
                  98%
                </p>
                <p>Active Client Retention</p>
              </div>
              <div className="flex-1 p-4 rounded-lg bg-accent/5 border border-accent/20">
                <p className="font-heading font-bold text-lg text-accent-foreground">
                  2,000+
                </p>
                <p>Leads Generated Monthly</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div
            className="relative h-96 md:h-full min-h-96 animate-slide-up flex items-center justify-center"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-transparent rounded-3xl opacity-20"></div>
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute top-10 right-10 w-32 h-32 bg-secondary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent rounded-full opacity-10 animate-pulse"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-4 flex items-center justify-center">
                    <svg
                      className="w-full h-full text-accent-foreground opacity-80"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 7H5v12h12V9m0-2h4v4m0 0l-4-4m4 4l-8 8"
                      />
                    </svg>
                  </div>
                  <p className="font-heading font-bold text-2xl">
                    Lead Growth Engine
                  </p>
                  <p className="opacity-70 mt-2">
                    Performance Marketing for Real Estate & Fintech
                  </p>
                </div>
              </div>
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
