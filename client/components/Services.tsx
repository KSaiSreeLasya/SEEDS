"use client";

import { useState } from "react";

export default function Services() {
  const [expandedSolution, setExpandedSolution] = useState<string | null>(null);

  const solutions = [
    {
      icon: "🏘️",
      title: "Real Estate Channel Partners & Brokers",
      description:
        "Get a steady flow of buyer and seller enquiries for the properties you represent. Hyper-local Google and Meta ads bring serious prospects into your funnel, ready for calls, site visits, and closings.",
      details: [
        "Hyper-local Google Search campaigns targeting property searches",
        "Meta Lead Gen campaigns for buyer and seller enquiries",
        "Location-based conversion tracking and ROI reporting",
        "Integration with CRM and follow-up workflows",
      ],
    },
    {
      icon: "🏗️",
      title: "Real Estate Investors & Wholesalers",
      description:
        "Capture motivated seller leads through 'sell my house fast', 'cash for homes', and investor-focused campaigns. High-intent funnels designed to identify and nurture distressed property opportunities.",
      details: [
        "High-intent keyword targeting for distressed properties",
        "Lead scoring for motivated seller identification",
        "Email and SMS nurture sequences for warm leads",
        "Deal analysis and profitability dashboards",
      ],
    },
    {
      icon: "🏢",
      title: "Real Estate Developers & Teams",
      description:
        "Fill your projects faster. Targeted campaigns for specific developments, towers, and inventory segments. From launch to closure, we keep demand active and qualified.",
      details: [
        "Project-specific landing pages and lead funnels",
        "Demographic targeting for ideal buyer profiles",
        "Retargeting campaigns for site visitors",
        "Conversion optimization for multi-unit sales",
      ],
    },
    {
      icon: "💳",
      title: "B2B Fintech & SaaS Platforms",
      description:
        "Generate qualified demos, trials, and sales-qualified opportunities. Account-based and intent-driven funnels designed for fintech decision-makers and ideal customer profiles.",
      details: [
        "Account-based marketing for enterprise prospects",
        "Intent-driven targeting for decision-makers",
        "Demo request and trial signup funnels",
        "Sales-qualified lead scoring and handoff workflows",
      ],
    },
    {
      icon: "🔐",
      title: "Compliance-First Fintech",
      description:
        "Navigate regulated fintech environments with campaigns built for trust, compliance, and quality leads. Educational funnels that qualify before pitching.",
      details: [
        "Compliance-focused ad copy and landing pages",
        "Regulatory disclosure integration in campaigns",
        "Educational content marketing for trust-building",
        "Audit trail documentation for regulatory compliance",
      ],
    },
    {
      icon: "📈",
      title: "Payment & Lending Platforms",
      description:
        "Drive merchant signups, borrower applications, and integration partnerships. Multi-touch nurture sequences that move prospects through longer B2B2B sales cycles.",
      details: [
        "Merchant acquisition and partner onboarding campaigns",
        "Borrower application funnel optimization",
        "Partnership development and integration marketing",
        "Multi-touch attribution across longer sales cycles",
      ],
    },
  ];

  const toggleSolution = (title: string) => {
    setExpandedSolution(expandedSolution === title ? null : title);
  };

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-accent-foreground mb-4">
            Industry Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Specialized lead generation for US real estate and fintech
            businesses that depend on predictable, high-quality buyer enquiries
            and qualified demos.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((solution, index) => {
            const isExpanded = expandedSolution === solution.title;
            return (
              <div
                key={index}
                className="group p-8 bg-card rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-lg font-heading font-semibold text-accent-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {solution.description}
                </p>

                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-border space-y-3 animate-slide-up">
                    <h4 className="font-semibold text-accent-foreground text-sm">
                      Our Approach:
                    </h4>
                    <ul className="space-y-2">
                      {solution.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-accent/10 flex-shrink-0 mt-0.5">
                            <span className="text-xs font-semibold text-accent-foreground">
                              ✓
                            </span>
                          </span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button
                  onClick={() => toggleSolution(solution.title)}
                  className="mt-4 inline-flex items-center gap-2 text-accent-foreground font-semibold hover:opacity-70 transition-opacity cursor-pointer"
                >
                  {isExpanded ? "Show less" : "Learn more"}
                  <svg
                    className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
