'use client';

import { useState } from 'react';

export default function Services() {
  const [expandedServices, setExpandedServices] = useState<Record<string, boolean>>({});

  const services = [
    {
      icon: "🛍️",
      title: "Ecommerce",
      description:
        "Powerful online stores that convert browsers into buyers. Seamless shopping experiences with secure payments and inventory management.",
      details: [
        "Multi-channel sales integration across all major platforms",
        "Advanced inventory management and real-time stock sync",
        "Conversion rate optimization and A/B testing",
        "Payment gateway integration with fraud protection",
        "Customer analytics and behavior tracking"
      ]
    },
    {
      icon: "🏨",
      title: "Hospitality",
      description:
        "Booking systems and guest experiences that drive revenue. From resorts to boutique hotels, we deliver digital solutions that welcome guests.",
      details: [
        "Reservation management systems with real-time availability",
        "Guest experience personalization and loyalty programs",
        "Channel manager integration for multi-property management",
        "In-room digital concierge services",
        "Revenue management optimization tools"
      ]
    },
    {
      icon: "✈️",
      title: "Travel",
      description:
        "Inspire wanderlust and simplify journeys. Dynamic booking platforms and immersive experiences for travel companies worldwide.",
      details: [
        "Dynamic packaging and itinerary builders",
        "Real-time flight and hotel comparison engines",
        "Global distribution system integration",
        "Visa and documentation tracking",
        "Travel insurance integration and claims management"
      ]
    },
    {
      icon: "🤝",
      title: "B2B",
      description:
        "Complex solutions for business relationships. Streamlined operations, partner portals, and enterprise integrations that scale.",
      details: [
        "Custom partner portal development",
        "B2B marketplace solutions with vendor management",
        "Supply chain visibility and tracking",
        "Quote and order management automation",
        "Enterprise API integrations and data synchronization"
      ]
    },
    {
      icon: "💼",
      title: "Financial & Professional",
      description:
        "Secure, compliant digital solutions for finance and professional services. Build trust through elegant, regulated platforms.",
      details: [
        "Regulatory compliance management (GDPR, PCI-DSS, etc.)",
        "Client portal with secure document sharing",
        "Portfolio management and reporting dashboards",
        "KYC/AML workflow automation",
        "Audit trails and transaction monitoring"
      ]
    },
    {
      icon: "🚀",
      title: "SaaS",
      description:
        "Subscription platforms built for growth. User-centric interfaces, analytics, and scalable infrastructure for modern SaaS companies.",
      details: [
        "Subscription billing and recurring payment management",
        "Usage-based pricing and metering",
        "Customer onboarding and activation flows",
        "Advanced analytics and cohort analysis",
        "API-first architecture for seamless integrations"
      ]
    },
    {
      icon: "💳",
      title: "Fintech",
      description:
        "Innovative financial technology that disrupts the industry. Payment systems, lending platforms, and digital wallets reimagined.",
      details: [
        "Open banking API integration and financial data aggregation",
        "Real-time payment processing and settlement",
        "Lending platform automation and credit decisioning",
        "Digital wallet and payment instrument management",
        "Fraud detection and anti-money laundering systems"
      ]
    },
  ];

  const toggleService = (title: string) => {
    setExpandedServices((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-24 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            Industry Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Specialized digital solutions for the industries that matter. We bring
            deep expertise and innovative thinking to your sector.
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
