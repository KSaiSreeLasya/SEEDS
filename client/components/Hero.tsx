import { useState } from "react";
import ContactForm from "./ContactForm";

export default function Hero() {
  const [openForm, setOpenForm] = useState<"project" | "call" | "plan" | null>(
    null,
  );

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
              <span className="text-white font-semibold text-sm">
                ✨ New
              </span>
              <span className="text-white text-sm font-medium">
                90-Day Acquisition Program
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              90-Day Lead Engine for US{" "}
              <span className="whitespace-nowrap">Real Estate & Fintech</span>
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
                className="px-8 py-3 bg-accent-foreground text-white font-heading font-semibold rounded-lg hover:opacity-90 shadow-lg hover:shadow-xl transition-all text-center"
              >
                Talk to a Specialist
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 pt-6 text-sm opacity-90">
              <div className="flex-1 p-4 rounded-lg bg-accent/5 border border-accent/20">
                <p className="font-heading font-bold text-lg text-[#ded0f6]">
                  150+
                </p>
                <p className="whitespace-nowrap">
                  <span className="whitespace-nowrap">
                    Real Estate & Fintech
                  </span>{" "}
                  Campaigns
                </p>
              </div>
              <div className="flex-1 p-4 rounded-lg bg-accent/5 border border-accent/20">
                <p className="font-heading font-bold text-lg text-[#ded0f6]">
                  98%
                </p>
                <p>Active Client Retention</p>
              </div>
              <div className="flex-1 p-4 rounded-lg bg-accent/5 border border-accent/20">
                <p className="font-heading font-bold text-lg text-[#ded0f6]">
                  2,000+
                </p>
                <p>Leads Generated Monthly</p>
              </div>
            </div>
          </div>

          {/* Visual - Growth Chart & Funnel */}
          <div
            className="relative h-96 md:h-full min-h-96 animate-slide-up flex items-center justify-center"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-purple-500/10 to-transparent rounded-3xl"></div>
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-secondary rounded-full opacity-15 animate-pulse blur-xl"></div>
              <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent rounded-full opacity-10 animate-pulse blur-2xl"></div>
              <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-accent-foreground rounded-full opacity-5 animate-pulse"></div>

              <div className="relative h-full flex items-center justify-center p-6">
                <div className="space-y-6">
                  {/* Growth Chart */}
                  <div className="flex items-end justify-center gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-16 bg-gradient-to-t from-secondary to-secondary/50 rounded-t-lg shadow-lg"></div>
                      <span className="text-xs text-accent-foreground mt-2 font-semibold">
                        Week 1
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-24 bg-gradient-to-t from-secondary to-secondary/50 rounded-t-lg shadow-lg"></div>
                      <span className="text-xs text-accent-foreground mt-2 font-semibold">
                        Week 2
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-32 bg-gradient-to-t from-accent-foreground to-secondary rounded-t-lg shadow-lg"></div>
                      <span className="text-xs text-accent-foreground mt-2 font-semibold">
                        Week 3
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-40 bg-gradient-to-t from-accent-foreground to-accent-foreground/70 rounded-t-lg shadow-lg animate-pulse"></div>
                      <span className="text-xs text-accent-foreground mt-2 font-semibold">
                        Week 4
                      </span>
                    </div>
                  </div>

                  {/* Label */}
                  <div className="text-center">
                    <p className="font-heading font-bold text-2xl text-accent-foreground">
                      Lead Growth Engine
                    </p>
                    <p className="opacity-70 mt-2 text-sm">
                      Predictable, Measurable Growth
                    </p>
                  </div>
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
