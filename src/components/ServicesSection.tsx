import { SunMedium, Home, Building2, Wrench, MessageSquare } from "lucide-react";

const services = [
  {
    icon: SunMedium,
    title: "Solar Panel Installation",
    description:
      "Professional installation of high-efficiency solar panels tailored to your property's layout, orientation, and energy needs. We handle everything from site assessment to grid connection.",
  },
  {
    icon: Home,
    title: "Rooftop Solar Solutions",
    description:
      "Custom-designed rooftop systems for homes and apartments. Maximize your roof space with optimized panel placement and seamless integration with your existing electrical setup.",
  },
  {
    icon: Building2,
    title: "Commercial Solar Systems",
    description:
      "Large-scale solar solutions for offices, factories, warehouses, and commercial complexes. Reduce operational costs and meet sustainability goals with scalable solar infrastructure.",
  },
  {
    icon: Wrench,
    title: "Solar Maintenance & Support",
    description:
      "Comprehensive maintenance programs including panel cleaning, performance monitoring, inverter servicing, and warranty support to keep your system running at peak efficiency.",
  },
  {
    icon: MessageSquare,
    title: "Solar Consultancy",
    description:
      "Expert guidance on system sizing, energy audits, feasibility studies, government subsidies, and ROI analysis. Make informed decisions with data-driven solar recommendations.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-xs tracking-wider uppercase mb-4">
            Our Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Comprehensive <span className="photon-gradient-text">Energy</span> Services
          </h2>
          <p className="text-muted-foreground text-lg">
            End-to-end solar energy solutions — from initial consultation and system
            design to installation, maintenance, and long-term performance optimization.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card p-10 rounded-3xl border border-border/50 hover:border-accent/40 shadow-sm hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent group-hover:rotate-[360deg] transition-all duration-700">
                <service.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-accent font-bold text-sm flex items-center justify-center gap-2">
                  Learn about this service <span>→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
