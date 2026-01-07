"use client";

import { useState } from "react";

export default function Performance() {
  const [expandedSpecialists, setExpandedSpecialists] = useState<
    Record<string, boolean>
  >({});

  const specialists = [
    {
      metric: "2.5x",
      label: "Average ROI Increase",
      description:
        "Our data-driven strategies deliver measurable results that impact your bottom line.",
    },
    {
      metric: "150+",
      label: "Campaigns Optimized",
      description:
        "From PPC to content marketing, we've refined strategies across all digital channels.",
    },
    {
      metric: "98%",
      label: "Client Retention",
      description:
        "We build partnerships that last, delivering consistent growth year after year.",
    },
    {
      metric: "48h",
      label: "Campaign Launch Time",
      description:
        "Our agile process gets your campaigns live faster without compromising quality.",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary rounded-full">
              <span className="text-primary-foreground font-semibold text-sm">
                ⚡ Performance
              </span>
              <span className="text-sm text-primary-foreground">
                Marketing Excellence
              </span>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-accent-foreground mb-6">
                Performance Marketing Specialists
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                We don't believe in vanity metrics. Every strategy, every
                campaign, and every tactic is laser-focused on driving
                measurable results for your business.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From acquisition to retention, we optimize every touchpoint in
                your customer journey to maximize revenue, reduce costs, and
                accelerate growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground font-heading font-semibold rounded-lg hover:opacity-90 transition-opacity text-center">
                View Case Studies
              </button>
              <button className="px-8 py-3 border-2 border-primary text-primary font-heading font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all text-center">
                Get Performance Audit
              </button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {specialists.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-muted rounded-2xl border border-border hover:border-accent-foreground hover:shadow-lg transition-all duration-300 animate-slide-up"
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
              Performance Specialists
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl">
              We're not everything to everyone. Instead, we deliver our core
              specialities where we know we can have the biggest impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "Organic Search",
                description:
                  "Get found by your customers at the right time across search engines, marketplaces and app stores.",
                icon: "🔍",
                details: [
                  "Comprehensive keyword research and strategy",
                  "On-page and technical SEO optimization",
                  "Content creation and link building",
                  "Local SEO and Google Business optimization",
                  "Performance tracking and monthly reporting",
                ],
              },
              {
                title: "Paid Search",
                description:
                  "We develop innovative media campaigns that drive qualified leads from search engines.",
                icon: "🎯",
                details: [
                  "Google Ads account setup and optimization",
                  "Keyword bidding strategy and budget allocation",
                  "Ad copy testing and conversion rate optimization",
                  "Landing page design and A/B testing",
                  "ROAS tracking and performance analysis",
                ],
              },
              {
                title: "Social Media",
                description:
                  "We pair creativity with insight to deliver a data driven blend of awareness, engagement, and performance.",
                icon: "📢",
                details: [
                  "Social media strategy and content calendar",
                  "Community management and engagement",
                  "Paid social campaigns across all major platforms",
                  "Influencer partnership identification",
                  "Social listening and sentiment analysis",
                ],
              },
              {
                title: "PR",
                description:
                  "Strategic brand positioning with search intelligence to build trust, boost brand visibility, and secure the right press coverage to grow your business.",
                icon: "📣",
                details: [
                  "Media relations and press outreach",
                  "Press release distribution and syndication",
                  "Crisis communication management",
                  "Brand reputation monitoring",
                  "Media coverage tracking and analysis",
                ],
              },
              {
                title: "Design",
                description:
                  "Where creativity and strategy combine to create innovative, impactful visuals that drive tangible, measurable results.",
                icon: "🎨",
                details: [
                  "Brand identity and logo design",
                  "UI/UX design for web and mobile",
                  "Marketing collateral and advertising design",
                  "Design system development",
                  "Creative direction and art direction",
                ],
              },
              {
                title: "International Expansion",
                description:
                  "Launch and scale your digital marketing into new markets with strategies tailored for global success and seamless localization.",
                icon: "🌍",
                details: [
                  "Market research and localization strategy",
                  "Multi-language campaign management",
                  "Cultural adaptation and messaging",
                  "Local partnership and vendor coordination",
                  "Regional compliance and regulatory guidance",
                ],
              },
            ].map((specialty, index) => {
              const isExpanded = expandedSpecialists[specialty.title];
              return (
                <div
                  key={index}
                  className="p-6 md:p-8 bg-muted rounded-2xl border border-border hover:shadow-lg hover:border-primary transition-all duration-300 animate-slide-up"
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

                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-border space-y-3 animate-slide-up">
                      <h5 className="font-semibold text-accent-foreground text-sm">
                        Our Approach:
                      </h5>
                      <ul className="space-y-2">
                        {specialty.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-accent/10 flex-shrink-0 mt-0.5">
                              <span className="text-xs font-semibold text-accent-foreground">
                                •
                              </span>
                            </span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex items-start justify-end pt-4">
                    <button
                      onClick={() =>
                        setExpandedSpecialists((prev) => ({
                          ...prev,
                          [specialty.title]: !prev[specialty.title],
                        }))
                      }
                      className="w-8 h-8 rounded bg-accent flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                    >
                      <svg
                        className={`w-5 h-5 text-accent-foreground transition-transform ${isExpanded ? "rotate-45" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </button>
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
