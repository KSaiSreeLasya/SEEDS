export default function Performance() {
  const specialists = [
    {
      metric: "2.5x",
      label: "Average ROI Increase",
      description: "Our data-driven strategies deliver measurable results that impact your bottom line.",
    },
    {
      metric: "150+",
      label: "Campaigns Optimized",
      description: "From PPC to content marketing, we've refined strategies across all digital channels.",
    },
    {
      metric: "98%",
      label: "Client Retention",
      description: "We build partnerships that last, delivering consistent growth year after year.",
    },
    {
      metric: "48h",
      label: "Campaign Launch Time",
      description: "Our agile process gets your campaigns live faster without compromising quality.",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary bg-opacity-10 rounded-full">
              <span className="text-primary font-semibold text-sm">⚡ Performance</span>
              <span className="text-sm text-primary opacity-80">Marketing Excellence</span>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6">
                Performance Marketing Specialists
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                We don't believe in vanity metrics. Every strategy, every campaign,
                and every tactic is laser-focused on driving measurable results for
                your business.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From acquisition to retention, we optimize every touchpoint in your
                customer journey to maximize revenue, reduce costs, and accelerate
                growth.
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
                className="p-6 bg-muted rounded-2xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-4xl font-heading font-bold text-primary mb-2">
                  {item.metric}
                </p>
                <h3 className="text-lg font-heading font-semibold text-primary mb-3">
                  {item.label}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Pillars */}
        <div className="mt-16 md:mt-24">
          <div className="text-center mb-16 animate-slide-up">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              Our Performance Approach
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine strategy, technology, and continuous optimization to
              deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Data-Driven Strategy",
                description:
                  "We start with deep analysis of your market, competitors, and audience to build strategies backed by data.",
                icon: "📊",
              },
              {
                title: "Continuous Optimization",
                description:
                  "Every campaign is constantly tested, monitored, and refined. We improve results week over week.",
                icon: "🔄",
              },
              {
                title: "Transparent Reporting",
                description:
                  "You'll always know exactly how your budget is spent and what results it's delivering. Full transparency, always.",
                icon: "📈",
              },
            ].map((pillar, index) => (
              <div
                key={index}
                className="p-8 bg-white border border-border rounded-2xl hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h4 className="text-xl font-heading font-semibold text-primary mb-3">
                  {pillar.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
