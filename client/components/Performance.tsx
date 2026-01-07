"use client";

import { useState } from "react";

export default function Performance() {
  const [expandedSpecialists, setExpandedSpecialists] = useState<
    Record<string, boolean>
  >({});

  const metrics = [
    {
      metric: "2.5x",
      label: "Average Lead Efficiency Improvement",
      description:
        "Better targeting and landing pages reduce waste and improve qualified lead ratios.",
    },
    {
      metric: "150+",
      label: "Real Estate & Fintech Campaigns",
      description:
        "Proven experience across launches, ongoing sales, remarketing, and account-based funnels.",
    },
    {
      metric: "98%",
      label: "Active Client Retention",
      description:
        "Clients stay because they see consistent pipeline and measurable results.",
    },
    {
      metric: "48h",
      label: "Campaign Launch Window",
      description:
        "From strategy approval to live campaigns, we move fast while maintaining quality.",
    },
  ];

  const specialists = [
    {
      title: "Google Search & Performance Max",
      description:
        "Capture high-intent searches from property buyers and fintech decision-makers at the exact moment they're evaluating options. Hyper-local keywords for real estate, pain-point targeting for fintech. Strong negative filtering removes junk traffic.",
      icon: "🔎",
    },
    {
      title: "Meta Lead Generation",
      description:
        "Use Facebook and Instagram to create interest, run time-sensitive offers (for real estate), and capture leads at scale. Visual storytelling, carousel ads, reels, and lead forms optimized for conversion.",
      icon: "🎯",
    },
    {
      title: "Landing Pages & CRO",
      description:
        "Convert clicks into enquiries with clean, mobile-first landing pages built for decision-makers. Clear USPs, trust signals, compliance badges (for fintech), live chat, and easy forms that don't ask for too much.",
      icon: "🧪",
    },
    {
      title: "Retargeting & Nurturing",
      description:
        "Stay top-of-mind with people who clicked but didn't enquire, or enquired but went silent. Email sequences, WhatsApp flows, and dynamic ads that remind prospects why your offer matters.",
      icon: "🔁",
    },
    {
      title: "Analytics, Scoring & Reporting",
      description:
        "Understand exactly which campaigns, creatives, and segments are working. AI-powered lead scoring prioritizes warm accounts for sales. Channel-wise dashboards and weekly performance summaries.",
      icon: "📊",
    },
    {
      title: "Multi-Market Expansion",
      description:
        "Add new cities (for real estate), new ICP segments (for fintech), or new product lines without rebuilding everything. Your lead engine scales with you.",
      icon: "🌍",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <span className="text-primary-foreground font-semibold text-sm">
                ⚡ Performance
              </span>
              <span className="text-sm text-primary-foreground font-medium">
                Lead Generation Excellence
              </span>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-accent-foreground mb-6">
                Performance Marketing for Serious Buyers & Decision-Makers
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                No vanity metrics. Every dollar is tracked from click to enquiry
                to closed deal. The focus is simple: more qualified
                conversations for your sales team.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Axisphere combines Google Search, Performance Max, and Meta
                campaigns with conversion-optimized landing pages to attract
                decision-makers who are actively searching or evaluating
                solutions. Every touchpoint—from ad copy to forms and
                follow-ups—is designed to reduce waste, improve cost per lead,
                and increase the percentage of leads that actually talk to your
                team and move toward a decision.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-accent-foreground text-white font-heading font-semibold rounded-lg hover:opacity-90 shadow-lg hover:shadow-xl transition-all text-center">
                View Sample Funnels
              </button>
              <button className="px-8 py-3 border-2 border-accent-foreground text-accent-foreground font-heading font-semibold rounded-lg hover:bg-accent-foreground hover:text-white hover:shadow-lg transition-all text-center">
                Get Free Account Audit
              </button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {metrics.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-muted rounded-2xl border border-border hover:border-accent-foreground hover:shadow-lg shadow-md transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-4xl font-heading font-bold text-accent-foreground mb-2">
                  {item.metric}
                </p>
                <h3 className="text-lg font-heading font-semibold text-accent-foreground mb-3">
                  {item.label}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Specialties */}
        <div className="mt-16 md:mt-24 pt-16 md:pt-24 border-t border-border">
          <div className="mb-12 animate-slide-up">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-accent-foreground mb-4">
              What We Specialize In
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl">
              We focus on the core levers that move numbers for <span className="whitespace-nowrap">real estate</span> and
              <span className="whitespace-nowrap">fintech</span> businesses in the USA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {specialists.map((specialty, index) => {
              const isExpanded = expandedSpecialists[specialty.title];
              return (
                <div
                  key={index}
                  className="p-6 md:p-8 bg-muted rounded-2xl border border-border hover:shadow-lg hover:border-primary shadow-md transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 text-4xl mt-1">
                      {specialty.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg md:text-xl font-heading font-semibold text-accent-foreground mb-2">
                        {specialty.title}
                      </h4>
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                        {specialty.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
