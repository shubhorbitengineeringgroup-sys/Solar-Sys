import project1Img from "@/assets/residential-rooftop-project.png";
import commercialImg from "@/assets/commercial-solar-project.jpg";
import factoryImg from "@/assets/factory-rooftop-project.jpg";
import officeImg from "@/assets/office-complex-project.jpg";
import { MapPin, Zap } from "lucide-react";

const projects = [
  {
    img: project1Img,
    title: "Arera Colony Luxury Residence",
    location: "Arera Colony, Bhopal MP",
    kw: "15 kW On-Grid",
    type: "Residential Rooftop",
    savings: "92% Bill Reduction"
  },
  {
    img: factoryImg,
    title: "Mandideep Industrial Solar Plant",
    location: "Mandideep Industrial Area, MP",
    kw: "1.2 MW Captive EPC",
    type: "Industrial Rooftop",
    savings: "₹85L/Yr Saved"
  },
  {
    img: commercialImg,
    title: "Govindpura Commercial Complex",
    location: "Govindpura, Bhopal",
    kw: "350 kW Array",
    type: "Commercial EPC",
    savings: "40% Tax Depr."
  },
  {
    img: officeImg,
    title: "Institutional Campus Solar Grid",
    location: "Hoshangabad Road Corridor, MP",
    kw: "500 kW Hybrid",
    type: "Hybrid & Storage",
    savings: "Zero Outage"
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-card/30 section-divider relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto space-y-3">
          <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-[10px] sm:text-xs tracking-widest uppercase">
            Proven Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-foreground tracking-tight">
            Featured Projects in <br className="sm:hidden" />
            <span className="photon-gradient-text">Bhopal & Central India</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light">
            Delivering precision-engineered solar and hybrid installations across Bhopal, Mandideep, and nationwide. Every system is built to maximize energy harvest and guarantee long-term asset value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border/60 hover:border-accent/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={project.img}
                  alt={`${project.title} - Solar Panel Installation Bhopal MP by SOLARSYS LLP`}
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-accent border border-accent/30 px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider z-10 shadow-lg">
                  {project.type}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-accent" /> {project.savings}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <h3 className="font-heading font-bold text-foreground text-base sm:text-lg group-hover:text-accent transition-colors duration-300 leading-snug">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border/40 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-muted-foreground">Capacity</span>
                  <span className="text-xs sm:text-sm font-bold text-accent bg-accent/10 px-2.5 py-0.5 rounded-full border border-accent/20">
                    {project.kw}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
