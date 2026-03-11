import { Factory, SunMedium, Settings, Zap } from "lucide-react";

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
  {
    icon: Zap,
    title: "Industrial Solar Panels",
    technical: "Industrial Solar Panels",
    description:
      "Industrial solar panels are a powerful and cost-effective energy solution designed to meet the high electricity demands of factories, manufacturing units, warehouses, and large-scale industrial facilities. By utilizing renewable solar energy, industries can significantly reduce operational costs, improve energy efficiency, and achieve long-term sustainability goals.\n\nOur industrial solar systems are engineered using high-efficiency solar modules, robust inverters, and heavy-duty mounting structures to withstand harsh environmental conditions and continuous power loads. These systems can be installed on rooftops or open land and are customized according to energy consumption patterns and available space.",
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

        <div className="grid sm:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="group bg-card rounded-card p-8 photon-border-hover transition-all duration-300 h-full flex flex-col"
            >
              <div className="w-16 h-16 diamond-clip photon-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
                <product.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              
              <div className="flex-grow">
                <h3 className="font-heading font-semibold text-foreground mb-1 text-xl">
                  {product.title}
                </h3>
                {product.technical && (
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                    Technical: {product.technical}
                  </p>
                )}
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;




