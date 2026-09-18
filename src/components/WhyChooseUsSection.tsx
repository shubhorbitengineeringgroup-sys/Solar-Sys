import { Gauge, Users, PiggyBank, Leaf, ShieldCheck, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Experienced Team",
    description: "Our certified engineers and project managers bring 15+ years of hands-on expertise in solar energy design, installation, and optimization.",
  },
  {
    icon: Gauge,
    title: "High Efficiency Panels",
    description: "We use only Tier-1 monocrystalline panels with 22%+ conversion efficiency — delivering maximum power output per square meter of your roof.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Installation",
    description: "Every installation follows strict engineering standards with quality-checked components, proper mounting, and thorough post-installation testing.",
  },
  {
    icon: PiggyBank,
    title: "Cost Effective Solutions",
    description: "We design systems that maximize your ROI. Most clients recover their investment within 4–6 years and enjoy decades of virtually free power.",
  },
  {
    icon: Leaf,
    title: "Eco Friendly Technology",
    description: "Each installation offsets an average of 50 tons of CO₂ annually. Choose clean energy and contribute to a sustainable future for the planet.",
  },
  {
    icon: Headphones,
    title: "Dedicated After-Sales Support",
    description: "Our relationship doesn't end at installation. We provide ongoing monitoring, maintenance, and responsive customer support throughout the system's lifetime.",
  },
];

import solarBgImg from "@/assets/industrial-solar-facility.png";

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="relative py-16 sm:py-24 overflow-hidden bg-primary text-primary-foreground">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${solarBgImg})` }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 sm:mb-16 max-w-2xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent font-medium text-xs tracking-wider uppercase mb-4">
            The SOLARSYS Advantage
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 sm:mb-6">
            Leading the <span className="photon-gradient-text">Solar</span> Revolution
          </h2>
          <p className="text-primary-foreground/70 text-base sm:text-lg">
            We don't just install panels; we deliver peace of mind and long-term energy independence through superior engineering.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-accent/40 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl photon-gradient flex items-center justify-center mb-4 sm:mb-6 rotate-3 group-hover:rotate-0 transition-transform duration-300">
                <reason.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl mb-3 group-hover:text-accent transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-xs sm:text-sm text-primary-foreground/60 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
