import { SunMedium, Wind, Flame, Zap, BatteryCharging, CheckSquare, ArrowRight } from "lucide-react";
import serviceInstallation from "@/assets/service-installation.png";
import windEnergyImg from "@/assets/wind-energy.jpg";
import geothermalEnergyImg from "@/assets/geothermal-energy.jpg";
import biomassEnergyImg from "@/assets/biomass-energy.jpg";
import batteryStorageImg from "@/assets/battery-storage.png";
import industrialSolarFacilityImg from "@/assets/industrial-solar-facility.png";
import servicesBg from "@/assets/factory-rooftop-project.jpg";

const services = [
  {
    icon: SunMedium,
    title: "Solar Energy Solutions",
    subtitle: "Rooftop & Ground-Mounted EPC",
    image: serviceInstallation,
    description:
      "Customized rooftop and ground-mounted solar photovoltaic systems engineered for industrial factories, commercial complexes, residential bungalows, and utility infrastructure in Bhopal, MP, and globally.",
    badge: "Most Popular in Bhopal"
  },
  {
    icon: Wind,
    title: "Wind Energy Systems",
    subtitle: "Clean Kinetic Power Generation",
    image: windEnergyImg,
    description:
      "Harnessing natural wind power for clean electricity and utility applications. We provide resource assessment, turbine engineering, and hybrid wind-solar grid-synchronized solutions.",
    badge: "Utility Scale"
  },
  {
    icon: Flame,
    title: "Geothermal Energy",
    subtitle: "Subterranean Baseload Heat Power",
    image: geothermalEnergyImg,
    description:
      "Utilizing Earth's natural heat for stable, year-round continuous renewable baseload power, district heating, and zero-emission industrial thermodynamic processes.",
    badge: "24/7 Baseload"
  },
  {
    icon: Zap,
    title: "Biomass & Biogas Energy",
    subtitle: "Organic Waste to Clean Electricity",
    image: biomassEnergyImg,
    description:
      "Converting agricultural residue, organic waste, and biomass into clean renewable electricity and high-calorific bio-CNG for agricultural farms and industrial facilities.",
    badge: "Waste-to-Energy"
  },
  {
    icon: BatteryCharging,
    title: "Energy Storage & Automation (BESS)",
    subtitle: "Lithium LiFePO4 & Microgrids",
    image: batteryStorageImg,
    description:
      "High-cycle LiFePO4 battery energy storage systems (BESS), smart load-balancing, and IoT monitoring for 24/7 power autonomy, peak-shaving, and seamless backup.",
    badge: "Smart Storage"
  },
  {
    icon: CheckSquare,
    title: "Turnkey EPC & Commissioning",
    subtitle: "End-to-End Project Execution",
    image: industrialSolarFacilityImg,
    description:
      "Complete project lifecycles from feasibility audits and structural design to MPMKVVCL net-metering liaison, PM Surya Ghar subsidy disbursal, and 25-year O&M support.",
    badge: "Discom Approved"
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 sm:py-24 relative overflow-hidden bg-background">
      {/* Background Image Layer with subtle overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-scroll sm:bg-fixed bg-center opacity-[0.08] pointer-events-none"
        style={{ backgroundImage: `url(${servicesBg})` }}
      />

      {/* Background Overlays & Accents */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-20 space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-black text-[10px] tracking-[.25em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Comprehensive Clean Energy Portfolio
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black text-foreground tracking-tight leading-tight">
            Green Energy–Based <br />
            <span className="photon-gradient-text">Engineering Solutions</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg lg:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Integrating advanced renewable technologies with precision engineering to reduce conventional energy reliance in Bhopal, Madhya Pradesh, and globally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative min-h-[380px] sm:min-h-[460px] rounded-2xl sm:rounded-[2.5rem] overflow-hidden bg-card/60 backdrop-blur-md border border-border/60 hover:border-accent/50 transition-all duration-700 hover:-translate-y-2 shadow-xl flex flex-col justify-end"
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent z-10 opacity-90 group-hover:opacity-80 transition-opacity duration-700" />
                <img
                  src={service.image}
                  alt={`${service.title} by SOLARSYS LLP Bhopal`}
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transform transition-transform duration-1000 ease-out"
                />
              </div>

              {/* Top badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 rounded-full bg-accent/90 backdrop-blur-md text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-950 shadow-md">
                  {service.badge}
                </span>
              </div>

              {/* Content Layer */}
              <div className="relative z-20 h-full p-5 sm:p-8 flex flex-col justify-end items-start text-left space-y-3 sm:space-y-4">
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent group-hover:text-slate-950 transition-colors" />
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">
                    {service.subtitle}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-heading font-bold text-white group-hover:text-accent transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-light line-clamp-3 sm:line-clamp-4">
                    {service.description}
                  </p>
                </div>

                <div className="pt-2 w-full">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.15em] text-accent hover:text-white transition-colors py-1 group/btn"
                  >
                    <span>Consult Our Engineers</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Decorative accent bar */}
              <div className="absolute top-0 left-0 w-1.5 h-0 bg-accent group-hover:h-full transition-all duration-700 shadow-[0_0_15px_rgba(247,166,2,0.5)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


