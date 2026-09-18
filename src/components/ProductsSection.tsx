import { useState } from "react";
import { Link } from "react-router-dom";
import { productsData } from "@/lib/products-data";
import { Sun, Wind, Cpu, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

const allProducts = Object.values(productsData);

const systemPillars = [
  {
    id: "solar",
    title: "High-Efficiency Solar Systems",
    subtitle: "Pillar 1 • Photovoltaic EPC",
    description: "Customized residential & commercial rooftop solar arrays, Tier-1 Monocrystalline PERC modules (450W–550W+), and high-efficiency dual-MPPT inverters engineered for peak lifetime yield.",
    tags: ["Monocrystalline PERC", "Rooftop & Ground EPC", "PM Surya Ghar"],
    icon: Sun,
    productIds: ["solar-panel", "solar-inverter", "solar-energy-solutions", "solar-street-light", "portable-solar-kits"]
  },
  {
    id: "hybrid",
    title: "Integrated Renewable Power Systems",
    subtitle: "Pillar 2 • Multi-Source Generation",
    description: "Hybrid microgrid architectures synthesizing solar photovoltaics, natural wind kinetic turbines, hydro, and biomass waste energy for round-the-clock power independence.",
    tags: ["Solar + Wind Hybrid", "Agricultural Solar Pumps", "Off-Grid Microgrids"],
    icon: Wind,
    productIds: ["solar-energy-solutions", "solar-water-pump", "solar-charge-controller", "portable-solar-kits"]
  },
  {
    id: "storage",
    title: "Energy Storage & Automation Solutions",
    subtitle: "Pillar 3 • BESS & Smart Telemetry",
    description: "Deep-cycle Lithium Iron Phosphate (LiFePO4) battery energy storage systems (BESS) paired with intelligent cloud IoT telemetry, auto-load balancing, and zero-flicker backup.",
    tags: ["LiFePO4 6000+ Cycles", "Smart IoT Telemetry", "Peak Load Shaving"],
    icon: Cpu,
    productIds: ["solar-battery", "smart-solar-monitoring", "solar-inverter", "solar-charge-controller"]
  },
];

const ProductsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredProducts = selectedFilter === "all"
    ? allProducts
    : allProducts.filter((product) => {
        const pillar = systemPillars.find((p) => p.id === selectedFilter);
        return pillar ? pillar.productIds.includes(product.id) : true;
      });

  return (
    <section id="products" className="py-16 sm:py-24 bg-background relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-[10px] sm:text-xs tracking-[.2em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Official Systems & Hardware Range</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-foreground tracking-tight leading-tight">
            Comprehensive <span className="photon-gradient-text">Clean Energy Systems</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg font-light leading-relaxed">
            From precision rooftop solar hardware to integrated multi-source hybrid microgrids and automated LiFePO4 battery storage, SOLARSYS LLP delivers future-ready engineering.
          </p>
        </div>

        {/* ── 3 Official Products / Systems from Company Profile ── */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-14 sm:mb-20">
          {systemPillars.map((pillar) => {
            const isSelected = selectedFilter === pillar.id;
            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedFilter(isSelected ? "all" : pillar.id)}
                className={`group cursor-pointer rounded-2xl sm:rounded-3xl p-6 sm:p-8 border transition-all duration-500 flex flex-col justify-between relative overflow-hidden ${
                  isSelected
                    ? "bg-accent/10 border-accent shadow-xl shadow-accent/10 -translate-y-1"
                    : "bg-card/70 backdrop-blur-md border-border/60 hover:border-accent/40 hover:-translate-y-1 hover:shadow-xl"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-slate-950 transition-colors">
                      <pillar.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-accent/80">
                      {pillar.subtitle}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-heading font-black text-foreground group-hover:text-accent transition-colors leading-snug mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-background border border-border/60 text-[10px] font-semibold text-foreground/80"
                      >
                        <CheckCircle2 className="w-3 h-3 text-accent shrink-0" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border/40 mt-6 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-accent">
                  <span>{isSelected ? "Showing Products" : "Filter Products"}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isSelected ? "rotate-90 text-accent" : "group-hover:translate-x-1"}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Filter Badges Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          <button
            onClick={() => setSelectedFilter("all")}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              selectedFilter === "all"
                ? "bg-accent text-slate-950 shadow-md shadow-accent/20"
                : "bg-card border border-border/60 text-muted-foreground hover:text-foreground hover:border-accent/40"
            }`}
          >
            All Hardware & Solutions ({allProducts.length})
          </button>
          {systemPillars.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedFilter(p.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedFilter === p.id
                  ? "bg-accent text-slate-950 shadow-md shadow-accent/20"
                  : "bg-card border border-border/60 text-muted-foreground hover:text-foreground hover:border-accent/40"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product, idx) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl sm:rounded-3xl overflow-hidden border border-border/50 hover:border-accent/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(247,166,2,0.1)] hover:-translate-y-2 flex flex-col"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <Link to={`/product-info/${product.id}`} className="aspect-[4/3] overflow-hidden relative block bg-slate-950/20">
                <img
                  src={product.image}
                  alt={`${product.title} - SOLARSYS LLP Bhopal`}
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                   <div className="px-5 py-2.5 bg-accent/90 backdrop-blur-md rounded-full text-white text-[10px] font-black uppercase tracking-[.2em] shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-accent">
                     Explore technology
                   </div>
                </div>
              </Link>
              
              <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  {product.technical && (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2 block">
                      {product.technical}
                    </span>
                  )}
                  <h3 className="font-heading font-bold text-foreground mb-2 text-lg sm:text-xl group-hover:text-accent transition-colors duration-300">
                    <Link to={`/product/${product.id}`}>
                      {product.title}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 font-light">
                    {product.overview}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                  <Link 
                    to={`/product/${product.id}`}
                    className="text-xs font-bold text-accent uppercase tracking-wider flex items-center gap-1.5 hover:gap-2.5 transition-all py-1"
                  >
                    <span>Learn More</span>
                    <span className="text-base leading-none">→</span>
                  </Link>
                  <Link
                    to={`/product-info/${product.id}`}
                    className="text-[10px] font-semibold text-muted-foreground hover:text-foreground uppercase tracking-wider py-1"
                  >
                    Tech Info
                  </Link>
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
