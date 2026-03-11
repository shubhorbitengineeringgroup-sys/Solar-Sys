import { Zap, Shield, TrendingUp, Target, Sun } from "lucide-react";

const stats = [
  { icon: Zap, value: "500+", label: "Installations" },
  { icon: Shield, value: "15+", label: "Years Experience" },
  { icon: TrendingUp, value: "98%", label: "Client Satisfaction" },
  { icon: Target, value: "50MW+", label: "Capacity Deployed" },
];

const missionPoints = [
  "To pioneer energy transformation by developing and deploying accessible, reliable and scalable renewable energy solutions.",
  "To innovate, harness, commercialise and accelerate the use of renewable energy across India, including the remotest corners.",
  "To be the most trusted partner for all stakeholders and beneficiaries, creating long-term value through responsible and sustainable practices.",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-4 space-y-24 relative z-10">

        {/* ── Existing About + Stats ── */}
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

        {/* ── Our Mission Section ── */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsl(200 33% 97%), hsl(200 40% 95%))",
            border: "1px solid hsl(var(--border))",
          }}
        >
          <div className="grid lg:grid-cols-2 gap-0 items-stretch">

            {/* Left — Text */}
            <div className="p-10 lg:p-14 flex flex-col justify-center space-y-6">
              {/* Title */}
              <div>
                <h3
                  className="text-3xl sm:text-4xl font-heading font-bold mb-3"
                  style={{ color: "hsl(130 45% 28%)" }}
                >
                  Our Mission
                </h3>
                {/* Decorative divider with icon */}
                <div className="flex items-center gap-2">
                  <div
                    className="h-0.5 w-8 rounded-full"
                    style={{ background: "hsl(var(--accent))" }}
                  />
                  <Sun
                    className="w-4 h-4"
                    style={{ color: "hsl(var(--accent))" }}
                  />
                  <div
                    className="h-0.5 w-8 rounded-full"
                    style={{ background: "hsl(var(--accent))" }}
                  />
                </div>
              </div>

              {/* Mission Statement label + intro */}
              <div>
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-2"
                  style={{ color: "hsl(130 45% 28%)" }}
                >
                  Mission Statement
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(210 20% 35%)" }}>
                  We believe that renewable energy is the key to building a better future, and
                  we are passionate about making it a reality for everyone.
                </p>
              </div>

              {/* Our mission is */}
              <div>
                <p
                  className="text-sm font-bold mb-3"
                  style={{ color: "hsl(210 80% 15%)" }}
                >
                  Our mission is:
                </p>
                <ul className="space-y-3">
                  {missionPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span
                        className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{
                          background: "linear-gradient(135deg, hsl(33 100% 50%), hsl(48 100% 50%))",
                          color: "#fff",
                        }}
                      >
                        •
                      </span>
                      <span className="text-sm leading-relaxed" style={{ color: "hsl(210 20% 35%)" }}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right — Illustration */}
            <div
              className="flex items-end justify-center p-8 lg:p-10"
              style={{
                background: "linear-gradient(160deg, hsl(200 70% 92% / 0.6), hsl(140 40% 88% / 0.4))",
              }}
            >
              <img
                src="/about-first.png"
                alt="Solar energy illustration with wind turbines and solar panels"
                className="w-full object-contain drop-shadow-lg"
                style={{ maxHeight: "320px", borderRadius: "8px" }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
