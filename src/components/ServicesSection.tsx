import { SunMedium, Wrench, MessageSquare, Building2 } from "lucide-react";

const services = [
  {
    icon: SunMedium,
    title: "Solar Panel Installation",
    description:
      "Precision-engineered installations for maximum energy capture. Custom designs for every roof geometry and orientation.",
  },
  {
    icon: Wrench,
    title: "Solar Maintenance",
    description:
      "Proactive monitoring and maintenance programs to ensure your system operates at peak efficiency year-round.",
  },
  {
    icon: MessageSquare,
    title: "Solar Consultancy",
    description:
      "Expert energy audits and feasibility studies. Data-driven recommendations for optimal system sizing and ROI.",
  },
  {
    icon: Building2,
    title: "Commercial & Residential",
    description:
      "Scalable solutions from single-home installations to multi-megawatt commercial arrays. One partner, every scale.",
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
            Comprehensive solar energy solutions from initial consultation
            through long-term system optimization.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-card p-8 photon-border-hover transition-all duration-300"
            >
              {/* Diamond icon container */}
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
