export default function About() {
  const values = [
    {
      title: "Quality First",
      description: "We never compromise on quality. Every pixel matters.",
    },
    {
      title: "User Focused",
      description:
        "We design with the user in mind, creating intuitive experiences.",
    },
    {
      title: "Innovation Driven",
      description: "We stay ahead of trends and use cutting-edge technologies.",
    },
    {
      title: "Collaborative",
      description: "We work closely with our clients to ensure success.",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 lg:py-32 bg-primary text-primary-foreground"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                About Our Studio
              </h2>
              <p className="text-lg opacity-90 leading-relaxed mb-4">
                Founded in 2019, Seed Studio has been helping businesses
                transform their digital presence through thoughtful design and
                robust development.
              </p>
              <p className="text-lg opacity-90 leading-relaxed">
                We believe in creating digital experiences that not only look
                beautiful but also drive real business results. Our team of
                designers, developers, and strategists work collaboratively to
                bring your vision to life.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4 text-sm">
              <div>
                <p className="font-heading font-bold text-3xl text-accent-foreground">
                  50+
                </p>
                <p className="opacity-80">Team Members</p>
              </div>
              <div>
                <p className="font-heading font-bold text-3xl text-accent-foreground">
                  12
                </p>
                <p className="opacity-80">Awards Won</p>
              </div>
              <div>
                <p className="font-heading font-bold text-3xl text-accent-foreground">
                  40+
                </p>
                <p className="opacity-80">Global Clients</p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-accent rounded-2xl border border-accent animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-primary opacity-90 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
