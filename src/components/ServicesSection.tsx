import { SunMedium, Home, Building2, Wrench, MessageSquare, Cpu, ArrowRight } from "lucide-react";
import serviceInstallation from "@/assets/service-installation.png";
import residentialRooftop from "@/assets/residential-rooftop-project.png";
import commercialSolar from "@/assets/commercial-solar-project.jpg";
import solarMonitoring from "@/assets/solar-monitoring.png";
import industrialConsultancy from "@/assets/industrial-solar.png";
import solarConsultancyImg from "@/assets/solar-consultancy.jpg";
import iotRenewable from "@/assets/iot-solar-smart.png";
import servicesBg from "@/assets/factory-rooftop-project.jpg";


const services = [
  {
    icon: SunMedium,
    title: "Solar Panel Installation",
    image: serviceInstallation,
    description:
      "Professional installation of high-efficiency solar panels tailored to your property's layout, orientation, and energy needs. We handle everything from site assessment to grid connection.",
  },
  {
    icon: Home,
    title: "Rooftop Solar Solutions",
    image: residentialRooftop,
    description:
      "Custom-designed rooftop systems for homes and apartments. Maximize your roof space with optimized panel placement and seamless integration with your existing electrical setup.",
  },
  {
    icon: Building2,
    title: "Commercial Solar Systems",
    image: commercialSolar,
    description:
      "Large-scale solar solutions for offices, factories, warehouses, and commercial complexes. Reduce operational costs and meet sustainability goals with scalable solar infrastructure.",
  },
  {
    icon: Wrench,
    title: "Solar Maintenance & Support",
    image: solarMonitoring,
    description:
      "Comprehensive maintenance programs including panel cleaning, performance monitoring, inverter servicing, and warranty support to keep your system running at peak efficiency.",
  },
  {
    icon: MessageSquare,
    title: "Solar Consultancy",
    image: solarConsultancyImg,
    description:
      "Expert guidance on system sizing, energy audits, feasibility studies, government subsidies, and ROI analysis. Make informed decisions with data-driven solar recommendations.",
  },
  {
    icon: Cpu,
    title: "IoT Application in Solar",
    image: iotRenewable,
    description:
      "Harness the power of IoT to transform your solar infrastructure into a smart, connected ecosystem. Our IoT-enabled solar solutions provide real-time performance monitoring and predictive fault detection.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 sm:py-24 relative overflow-hidden bg-[#effaff]/5">
      {/* Background Image Layer with faint overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-scroll sm:bg-fixed bg-center opacity-[0.3]"
        style={{ backgroundImage: `url(${servicesBg})` }}
      />

      {/* Background Overlays & Accents */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#effaff]/40 via-transparent to-[#effaff]/40" />
      <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-sky-400/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-sky-500/10 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-20 space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-black text-[10px] tracking-[.25em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Our Expertise
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black text-slate-900 tracking-tight leading-tight">
            Comprehensive <br />
            <span className="photon-gradient-text">Energy Ecosystem</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Revolutionizing the solar landscape through specialized engineering
            and cutting-edge maintenance frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative min-h-[420px] sm:h-[480px] rounded-2xl sm:rounded-[2.5rem] overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-accent/50 transition-all duration-700 hover:-translate-y-2 shadow-2xl flex flex-col justify-end"
            >
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10 opacity-80 group-hover:opacity-85 transition-opacity duration-700" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transform transition-transform duration-1000 ease-out"
                />
              </div>

              {/* Content Layer */}
              <div className="relative z-20 h-full p-6 sm:p-10 flex flex-col justify-end items-center text-center space-y-4 sm:space-y-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent group-hover:text-white transition-colors" />
                </div>

                <div className="space-y-3 sm:space-y-4 translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl sm:text-2xl font-heading font-black text-white group-hover:text-accent transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/75 text-xs sm:text-sm leading-relaxed font-light line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                    {service.description}
                  </p>
                </div>

                <div className="pt-2 sm:pt-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-all duration-500">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[.2em] text-accent hover:text-white transition-colors py-1 px-3 rounded-full bg-white/5 sm:bg-transparent"
                  >
                    Consult Our Team <ArrowRight size={14} />
                  </a>
                </div>
              </div>

              {/* Decorative side accent */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-700 shadow-[0_0_15px_rgba(247,166,2,0.5)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


