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
    <section id="services" className="py-24 section-divider">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Our <span className="photon-gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground">
            End-to-end solar energy solutions — from initial consultation and system
            design to installation, maintenance, and long-term performance optimization.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-card p-8 photon-border-hover transition-all duration-300"
            >
              <div className="w-14 h-14 diamond-clip photon-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-accent-foreground rotate-0" style={{ transform: "rotate(0deg)" }} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
