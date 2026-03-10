import { Factory, SunMedium, Settings } from "lucide-react";

const products = [
  {
    icon: Factory,
    title: "Solar Energy Solutions",
    description:
      "High-efficiency solar systems for clean, reliable, and cost-effective power generation across industrial, commercial, and infrastructure projects.",
  },
  {
    icon: SunMedium,
    title: "Solar Products & Systems",
    description:
      "Solar panels, rooftop solar systems, and solar street lights designed for sustainable and long-term energy use.",
  },
  {
    icon: Settings,
    title: "Solar Control System",
    description:
      "Switchgears, MCC/PCC panels, and control & protection systems ensuring safe and efficient power distribution.",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 section-divider">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Our <span className="photon-gradient-text">Products</span>
          </h2>
          <p className="text-muted-foreground">
            Explore our comprehensive range of solar products and control systems designed for efficiency and reliability.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="group bg-card rounded-card p-8 photon-border-hover transition-all duration-300"
            >
              <div className="w-14 h-14 diamond-clip photon-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <product.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-3">
                {product.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
