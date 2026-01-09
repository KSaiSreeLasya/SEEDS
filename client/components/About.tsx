export default function About() {
  const valuePillars = [
    {
      icon: "🎯",
      title: "Results-First",
      description:
        "Campaigns, creatives, and funnels are tested, tracked, and improved—not just launched and forgotten.",
    },
    {
      icon: "🧠",
      title: "Buyer/Decision-Maker Focused",
      description:
        "Every journey is mapped from the prospect's perspective: search, scroll, enquire, nurture, respond, and convert.",
    },
    {
      icon: "⚡",
      title: "Innovation Driven",
      description:
        "AI-powered tools, automation, and continuous experimentation make your campaigns smarter and cheaper over time.",
    },
    {
      icon: "🤝",
      title: "Collaborative",
      description:
        "We work closely with your team on feedback, lead quality, and actual sales outcomes—not just CTR and CPC.",
    },
  ];

  const stats = [
    {
      number: "25+",
      label: "Specialists",
      sublabel: "Media buying, automation, creative, analytics",
    },
    {
      number: "40+",
      label: "Businesses Served",
      sublabel: "Real estate, fintech, B2B SaaS, and other sectors",
    },
    {
      number: "2,000+",
      label: "Leads Generated Monthly",
      sublabel: "Across all active client campaigns and channels",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 lg:py-32 bg-background text-foreground relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                About Axisphere
              </h2>
              <p className="text-lg opacity-90 leading-relaxed mb-4">
                Axisphere is a performance marketing and lead generation partner
                for US <span className="whitespace-nowrap">real estate</span>{" "}
                and <span className="whitespace-nowrap">fintech</span>{" "}
                businesses that want predictable, trackable growth. Since 2022,
                our team has been running data-driven campaigns that focus on
                one thing: delivering qualified leads and conversations for your
                sales team.
              </p>
              <p className="text-lg opacity-90 leading-relaxed">
                With specialists across media buying, automation, design, and
                analytics, Axisphere combines creativity with rigor. Campaigns
                are built to be transparent, measurable, and tightly aligned
                with your business outcomes—not vanity metrics.
              </p>
            </div>

            {/* Stats */}
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="animate-slide-up p-4 rounded-lg bg-accent/5 border border-accent/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="font-heading font-bold text-3xl text-accent-foreground mb-1">
                    {stat.number}
                  </p>
                  <p className="font-semibold text-lg opacity-90 mb-1">
                    {stat.label}
                  </p>
                  <p className="opacity-75 text-sm">{stat.sublabel}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Value Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {valuePillars.map((pillar, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl border border-border shadow-md hover:shadow-lg hover:bg-muted transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-secondary/20 rounded-xl text-2xl mb-3">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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
