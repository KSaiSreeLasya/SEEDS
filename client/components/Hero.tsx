export default function Hero() {
  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent rounded-full">
              <span className="text-accent-foreground font-semibold text-sm">
                ✨ New
              </span>
              <span className="text-accent-foreground text-sm">
                Launching this season
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Digital design for the modern age
            </h1>

            <p className="text-lg md:text-xl opacity-90 max-w-lg leading-relaxed">
              We create beautiful, functional digital experiences that help
              brands grow and connect with their audience in meaningful ways.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-accent text-accent-foreground font-heading font-semibold rounded-lg hover:opacity-90 transition-opacity text-center">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-accent text-accent font-heading font-semibold rounded-lg hover:bg-accent hover:text-accent-foreground transition-all text-center">
                Learn More
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4 text-sm opacity-80">
              <div>
                <p className="font-heading font-bold text-lg text-accent">
                  150+
                </p>
                <p>Projects Completed</p>
              </div>
              <div>
                <p className="font-heading font-bold text-lg text-accent">
                  98%
                </p>
                <p>Client Satisfaction</p>
              </div>
              <div>
                <p className="font-heading font-bold text-lg text-accent">5+</p>
                <p>Years Experience</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div
            className="relative h-96 md:h-full min-h-96 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-transparent rounded-3xl opacity-20"></div>
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute top-10 right-10 w-32 h-32 bg-accent rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent rounded-full opacity-10 animate-pulse"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌱</div>
                  <p className="font-heading font-bold text-2xl">Seed Studio</p>
                  <p className="opacity-70 mt-2">Design & Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
