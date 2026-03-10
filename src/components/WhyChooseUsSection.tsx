import { Gauge, Users, PiggyBank, Leaf } from "lucide-react";

const reasons = [
  {
    icon: Gauge,
    title: "High Efficiency Panels",
    description: "Tier-1 monocrystalline panels with 22%+ conversion efficiency for maximum power output per square meter.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Our certified engineers bring 15+ years of solar infrastructure expertise to every project.",
  },
  {
    icon: PiggyBank,
    title: "Cost Saving Solutions",
    description: "Reduce energy bills by up to 80%. Most installations achieve full ROI within 4–6 years.",
  },
  {
    icon: Leaf,
    title: "Eco Friendly Energy",
    description: "Each installation offsets an average of 50 tons of CO₂ annually — clean power at scale.",
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
            Engineered reliability. Measurable performance. Lasting infrastructure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
