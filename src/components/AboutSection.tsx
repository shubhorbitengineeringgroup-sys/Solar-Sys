import { Zap, Shield, TrendingUp, Target } from "lucide-react";

const stats = [
  { icon: Zap, value: "500+", label: "Installations" },
  { icon: Shield, value: "15+", label: "Years Experience" },
  { icon: TrendingUp, value: "98%", label: "Client Satisfaction" },
  { icon: Target, value: "50MW+", label: "Capacity Deployed" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 section-divider">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
              About{" "}
              <span className="photon-gradient-text">SOLARSYS LLP</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              SOLARSYS LLP is a premier solar energy company dedicated to accelerating the
              transition to clean, renewable power. We specialize in the design, engineering,
              installation, and maintenance of advanced photovoltaic systems for residential,
              commercial, and industrial clients.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Our Mission:</strong> To make solar energy
              accessible, affordable, and reliable for everyone — empowering communities to
              reduce their carbon footprint and achieve energy independence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Our Vision:</strong> A future where every
              rooftop generates clean energy, and sustainable power is the standard — not the
              exception. We are committed to building solar infrastructure that lasts decades
              and delivers measurable environmental and financial returns.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-card p-6 text-center photon-border-hover transition-all duration-300"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-3 text-accent" />
                <div className="text-2xl font-heading font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
