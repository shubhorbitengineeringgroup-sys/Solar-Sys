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

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-24 section-divider bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Why Choose <span className="photon-gradient-text">SOLARSYS</span>
          </h2>
          <p className="text-primary-foreground/70">
            Trusted by hundreds of clients. Built on quality, transparency, and results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-card p-8 border border-primary-foreground/10 hover:border-accent/50 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full photon-gradient flex items-center justify-center mb-5">
                <reason.icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-semibold mb-3">
                {reason.title}
              </h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">
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
