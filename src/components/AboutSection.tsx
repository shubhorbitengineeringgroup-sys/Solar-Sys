import { Zap, Shield, TrendingUp, Target, Sun } from "lucide-react";
import { Counter } from "@/components/ui/counter";
import coreValuesImg from "@/assets/core-values-neighborhood.png";

const stats = [
  { icon: Zap, value: "500+", label: "Installations" },
  { icon: Shield, value: "15+", label: "Years Experience" },
  { icon: TrendingUp, value: "98%", label: "Client Satisfaction" },
  { icon: Target, value: "50MW+", label: "Capacity Deployed" },
];

const valuePoints = [
  { title: "Innovation", text: "To pioneer energy transformation by developing and deploying accessible, reliable and scalable renewable energy solutions." },
  { title: "Accessibility", text: "To innovate, harness, commercialise and accelerate the use of renewable energy across India, including the remotest corners." },
  { title: "Integrity", text: "To be the most trusted partner for all stakeholders and beneficiaries, creating long-term value through responsible and sustainable practices." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden bg-background">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)`, backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-4 space-y-16 sm:space-y-24 lg:space-y-32 relative z-10">
        {/* About + Stats */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-[10px] tracking-widest uppercase">
              Who We Are
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-foreground leading-tight">
              Leading the <br />
              <span className="photon-gradient-text">Energy Evolution</span>
            </h2>
            <div className="space-y-4 sm:space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed font-light">
              <p>
                SOLARSYS LLP is a premier solar energy company dedicated to accelerating the
                transition to clean, renewable power. We specialize in the design, engineering,
                installation, and maintenance of advanced photovoltaic systems for residential,
                commercial, and industrial clients.
              </p>
              <p>
                <strong className="text-foreground font-bold">Our Mission:</strong> To make solar energy
                accessible, affordable, and reliable for everyone — empowering communities to
                reduce their carbon footprint and achieve energy independence.
              </p>
              <p>
                <strong className="text-foreground font-bold">Our Vision:</strong> A future where every
                rooftop generates clean energy, and sustainable power is the standard — not the
                exception.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="group relative bg-card/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 overflow-hidden text-center sm:text-left"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full -mr-10 -mt-10 blur-2xl group-hover:bg-accent/10 transition-colors pointer-events-none" />
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-6 text-accent group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0" />
                <div className="text-2xl sm:text-3xl font-heading font-black text-foreground mb-1 sm:mb-2">
                  <Counter target={stat.value} />
                </div>
                <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider sm:tracking-widest font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Our Core Values Section ── */}
        <div className="relative group">
          <div className="absolute inset-0 bg-accent/5 rounded-2xl sm:rounded-[2.5rem] blur-3xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <div className="rounded-2xl sm:rounded-[2.5rem] overflow-hidden border border-border/50 bg-card shadow-xl">
            <div className="grid lg:grid-cols-2 gap-0 items-stretch">
              {/* Left — Text */}
              <div className="p-6 sm:p-10 lg:p-16 flex flex-col justify-center space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-black text-foreground mb-3 sm:mb-4">
                    Our <span className="photon-gradient-text">Core Values</span>
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-12 rounded-full bg-accent" />
                    <Sun className="w-5 h-5 text-accent animate-spin-slow" />
                    <div className="h-1 w-12 rounded-full bg-accent/30" />
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <p className="text-xs font-black tracking-[.2em] uppercase text-accent">
                    Our Philosophy
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                    Our philosophy is rooted in sustainability, engineering excellence, and
                    a deep-seated commitment to making India energy-independent.
                  </p>
                </div>

                <ul className="space-y-4 sm:space-y-6">
                  {valuePoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 sm:gap-4 group/item">
                      <div className="mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover/item:bg-accent group-hover/item:text-white transition-all duration-300 flex-shrink-0">
                        <Zap size={12} />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-sm sm:text-base text-foreground group-hover/item:text-accent transition-colors">
                          {point.title}
                        </h4>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          {point.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — Illustration */}
              <div className="relative flex items-center justify-center p-6 sm:p-10 lg:p-16 bg-gradient-to-br from-accent/5 to-primary/5">
                <div className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{ backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--accent)) 1px, transparent 0)`, backgroundSize: '16px 16px' }} />
                <img
                  src={coreValuesImg}
                  alt="Solar energy illustration"
                  className="w-full h-auto object-contain drop-shadow-2xl z-10 hover:scale-105 transition-transform duration-700"
                  style={{ maxHeight: "380px" }}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
