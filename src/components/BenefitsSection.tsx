import { IndianRupee, Leaf, Settings, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: IndianRupee,
    title: "Reduced Electricity Bills",
    description:
      "Generate your own power and cut electricity costs by up to 80%. Solar energy provides predictable, low-cost energy for decades — protecting you from rising utility rates.",
  },
  {
    icon: Leaf,
    title: "Clean Renewable Energy",
    description:
      "Solar power produces zero emissions during operation. Every kilowatt-hour generated offsets fossil fuel consumption and contributes to a healthier planet for future generations.",
  },
  {
    icon: Settings,
    title: "Low Maintenance",
    description:
      "Solar panels have no moving parts and require minimal upkeep. With occasional cleaning and periodic inspections, your system will perform reliably for 25+ years.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Investment",
    description:
      "Solar installations typically achieve full return on investment within 4–6 years. After that, you enjoy decades of virtually free electricity — a smart financial decision.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 sm:py-24 section-divider bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16 max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-foreground mb-3 sm:mb-4">
            Benefits of{" "}
            <span className="photon-gradient-text">Solar Energy</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Switching to solar isn't just good for the environment — it's a smart
            financial and strategic decision for homes and businesses alike.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-card rounded-2xl sm:rounded-card p-6 sm:p-8 photon-border-hover transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full photon-gradient flex items-center justify-center mx-auto mb-4 sm:mb-5">
                <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-base sm:text-lg text-foreground mb-2 sm:mb-3">
                {benefit.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
