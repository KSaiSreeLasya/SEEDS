export default function Services() {
  const services = [
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces designed with your users in mind. We create experiences that delight.",
    },
    {
      icon: "⚡",
      title: "Web Development",
      description:
        "Fast, responsive, and scalable web applications built with modern technologies and best practices.",
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications that engage users and drive business growth.",
    },
    {
      icon: "🔍",
      title: "Brand Strategy",
      description:
        "Comprehensive brand development from concept to execution. We help you stand out in the market.",
    },
    {
      icon: "📊",
      title: "Analytics & Growth",
      description:
        "Data-driven strategies to measure, optimize, and scale your digital presence effectively.",
    },
    {
      icon: "🤝",
      title: "Consulting",
      description:
        "Expert guidance on digital transformation, technology selection, and strategic planning.",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-24 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer a comprehensive range of services to help your business
            thrive in the digital world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border border-border animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <svg
                  className="w-4 h-4 group-hover:translate-x-2 transition-transform"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
