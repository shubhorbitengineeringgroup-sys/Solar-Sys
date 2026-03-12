import { Link } from "react-router-dom";
import { productsData } from "@/lib/products-data";
import solarSolutionImg from "@/assets/project-new.png";
import solarProductsImg from "@/assets/green-city-solar.png";
import solarMonitoringImg from "@/assets/solar-monitoring.png";
import portableSolarImg from "@/assets/portable-solar.png";

const products = [
  ...Object.values(productsData),
  {
    id: "solar-energy-solutions",
    image: solarSolutionImg,
    title: "Solar Energy Solutions",
    description:
      "High-efficiency solar systems for clean, reliable, and cost-effective power generation across industrial, commercial, and infrastructure projects.",
  },
  {
    id: "smart-solar-monitoring",
    image: solarMonitoringImg,
    title: "Smart Solar Monitoring",
    technical: "Real-time Analytics",
    description:
      "Cloud-based monitoring systems that give you full visibility into your energy production and savings in real-time.",
  },
  {
    id: "portable-solar-kits",
    image: portableSolarImg,
    title: "Portable Solar Kits",
    technical: "Foldable & Compact",
    description:
      "Reliable solar power on the go. Perfect for remote sites, camping, and emergency backup power needs.",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-xs tracking-wider uppercase mb-4">
            Our Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Advanced <span className="photon-gradient-text">Solar</span> Products
          </h2>
          <p className="text-muted-foreground text-lg">
            Harness the power of the sun with our cutting-edge solar technologies and integrated energy systems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="mb-4">
                  {(product as any).technical && (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2 block">
                      {(product as any).technical}
                    </span>
                  )}
                  <h3 className="font-heading font-bold text-foreground mb-2 text-xl group-hover:text-accent transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {(product as any).description || (product as any).overview}
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-border/50">
                  {productsData[product.id] ? (
                    <Link 
                      to={`/product/${product.id}`}
                      className="text-xs font-bold text-accent uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all"
                    >
                      Learn More 
                      <span className="text-lg">→</span>
                    </Link>
                  ) : (
                    <button className="text-xs font-bold text-accent/50 cursor-not-allowed uppercase tracking-wider flex items-center gap-2">
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;




