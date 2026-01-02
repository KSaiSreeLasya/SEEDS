export default function CTA() {
  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-16 text-center text-primary-foreground animate-slide-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Ready to transform your digital presence?
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Let's work together to create something amazing. Get in touch
              today and let's discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-accent text-accent-foreground font-heading font-bold rounded-lg hover:opacity-90 transition-opacity text-lg">
                Start a Project
              </button>
              <button className="px-8 py-4 border-2 border-accent bg-transparent text-accent font-heading font-bold rounded-lg hover:bg-accent hover:text-accent-foreground transition-all text-lg">
                Schedule a Call
              </button>
            </div>
          </div>

          {/* Trust Section */}
          <div className="mt-16 pt-16 border-t border-border">
            <div className="text-center mb-12 animate-slide-up">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                Trusted by leading brands
              </p>
              <h3 className="text-2xl font-heading font-bold text-primary">
                Companies we've worked with
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {["TechStart", "Design Co", "Growth Labs", "Digital Hub"].map(
                (company, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-6 bg-muted rounded-xl border border-border hover:border-primary/30 transition-colors animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <p className="font-semibold text-muted-foreground">
                      {company}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
