import { Zap, Shield, TrendingUp, Target, Sun, CheckCircle2, Compass, Award } from "lucide-react";
import { Counter } from "@/components/ui/counter";
import coreValuesImg from "@/assets/core-values-neighborhood.png";

const stats = [
  { icon: Zap, value: "500+", label: "Installations Completed" },
  { icon: Shield, value: "15+", label: "Years Engineering Exp" },
  { icon: TrendingUp, value: "99%", label: "System Reliability" },
  { icon: Target, value: "50MW+", label: "Clean Capacity Deployed" },
];

const missionPillars = [
  {
    num: "01",
    title: "Promote Renewable & Green Energy",
    desc: "Accelerating the adoption of solar, wind, biomass, and geothermal energy across residential, industrial, and rural sectors."
  },
  {
    num: "02",
    title: "Deliver High-Quality & Efficient Solutions",
    desc: "Deploying Tier-1 components, advanced Monocrystalline PERC modules, and precision-calibrated inverters for peak lifetime energy yield."
  },
  {
    num: "03",
    title: "Integrate Sustainability into Every Project",
    desc: "Designing eco-conscious electrical and civil engineering frameworks that minimize carbon footprint and maximize long-term ROI."
  },
  {
    num: "04",
    title: "Contribute to Environmental & Community Growth",
    desc: "Empowering communities in Bhopal, Madhya Pradesh, and across the globe with energy self-reliance and clean air dividends."
  }
];

const expertiseAreas = [
  "Renewable & green energy systems engineering",
  "Solar, wind, biomass & biogas, and geothermal energy integration",
  "Energy-efficient electrical and automation systems",
  "End-to-end project execution, DISCOM liaison & commissioning",
  "Sustainable infrastructure, BESS & utility-scale microgrid solutions",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden bg-background">
      {/* Background patterns */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 space-y-16 sm:space-y-24 lg:space-y-32 relative z-10">
        {/* About + Stats */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 animate-fade-in text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-[10px] sm:text-xs tracking-widest uppercase">
              <Compass className="w-3.5 h-3.5 text-accent" />
              <span>About SOLARSYS (LLP)</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-foreground leading-tight tracking-tight">
              Engineering Clean Energy For <br />
              <span className="photon-gradient-text">A Sustainable Future</span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed font-light">
              <p>
                <strong className="text-foreground font-semibold">SOLARSYS (LLP)</strong> specializes in green energy–based engineering and infrastructure solutions. By integrating renewable energy technologies with modern engineering practices, we help businesses, institutions, and homeowners reduce dependency on conventional energy sources and promote sustainable growth.
              </p>
              <div className="p-4 sm:p-5 rounded-2xl bg-card border border-accent/20 space-y-2 text-left shadow-sm">
                <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-wider">
                  <Award className="w-4 h-4" /> Our Vision
                </div>
                <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed italic">
                  &ldquo;To build a cleaner, greener, and more sustainable future through innovative green energy and environmentally responsible engineering solutions. We strive to be a trusted name in renewable energy by delivering reliable, efficient, and future-ready infrastructure that supports long-term growth while protecting the environment.&rdquo;
                </p>
              </div>
            </div>

            {/* Core Expertise Checklist */}
            <div className="space-y-2.5 pt-2 text-left">
              <div className="text-xs font-bold uppercase tracking-wider text-foreground">
                Core Areas of Expertise:
              </div>
              <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                {expertiseAreas.map((exp, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{exp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group relative bg-card/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-border/50 hover:border-accent/40 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 overflow-hidden text-center sm:text-left flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -mr-12 -mt-12 blur-2xl group-hover:bg-accent/15 transition-colors pointer-events-none" />
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-5 text-accent group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0" />
                <div>
                  <div className="text-2xl sm:text-4xl font-heading font-black text-foreground mb-1">
                    <Counter target={stat.value} />
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-bold leading-snug">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Our Mission & Values Section (4 Pillars) ── */}
        <div className="relative group">
          <div className="absolute inset-0 bg-accent/5 rounded-2xl sm:rounded-[2.5rem] blur-3xl -z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <div className="rounded-2xl sm:rounded-[2.5rem] overflow-hidden border border-border/60 bg-card shadow-xl">
            <div className="grid lg:grid-cols-12 gap-0 items-stretch">
              
              {/* Left — Mission 4 Pillars (cols 7) */}
              <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 flex flex-col justify-center space-y-6 sm:space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-1 w-10 rounded-full bg-accent" />
                    <Sun className="w-4 h-4 text-accent animate-spin-slow" />
                    <span className="text-[10px] sm:text-xs font-bold tracking-[.2em] uppercase text-accent">Our Guiding Mission</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-foreground">
                    Four Pillars of <span className="photon-gradient-text">Solarsys Excellence</span>
                  </h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {missionPillars.map((pillar) => (
                    <div
                      key={pillar.num}
                      className="p-4 sm:p-5 rounded-2xl bg-background/50 border border-border/50 hover:border-accent/40 transition-all group/pillar flex flex-col space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-heading font-black text-accent/50 group-hover/pillar:text-accent transition-colors">
                          {pillar.num}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-accent/30 group-hover/pillar:bg-accent transition-colors" />
                      </div>
                      <h4 className="font-heading font-bold text-sm sm:text-base text-foreground group-hover/pillar:text-accent transition-colors leading-snug">
                        {pillar.title}
                      </h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Clean Energy Neighborhood / Smart City Graphic (cols 5) */}
              <div className="lg:col-span-5 relative flex flex-col items-center justify-center p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-accent/10 via-primary/5 to-background border-t lg:border-t-0 lg:border-l border-border/40">
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--accent)) 1px, transparent 0)`,
                    backgroundSize: '16px 16px'
                  }}
                />
                <img
                  src={coreValuesImg}
                  alt="Sustainable clean energy neighborhood designed by SOLARSYS LLP in Bhopal"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={300}
                  className="w-full max-w-[340px] sm:max-w-[400px] h-auto object-contain drop-shadow-2xl z-10 hover:scale-105 transition-transform duration-700"
                />
                <div className="relative z-10 mt-4 text-center">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Bhopal & Worldwide Sustainable Engineering
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-1">
                    Flat 2, Block 12, Shalimar Enclave, Arera Colony E-2, Bhopal MP
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
