import project1Img from "@/assets/residential-rooftop-project.png";
import commercialImg from "@/assets/commercial-solar-project.jpg";
import factoryImg from "@/assets/factory-rooftop-project.jpg";
import officeImg from "@/assets/office-complex-project.jpg";

const projects = [
  { img: project1Img, title: "Residential Rooftop System", location: "Suburban Home", kw: "10 kW", type: "Home" },
  { img: commercialImg, title: "Commercial Solar Farm", location: "Industrial Park", kw: "2.5 MW", type: "Commercial" },
  { img: factoryImg, title: "Factory Rooftop Installation", location: "Manufacturing Unit", kw: "500 kW", type: "Industrial" },
  { img: officeImg, title: "Office Complex Array", location: "Corporate Campus", kw: "800 kW", type: "Commercial" },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 section-divider">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-foreground mb-3 sm:mb-4">
            Our <span className="photon-gradient-text">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            From residential rooftops to large-scale commercial solar farms, we have
            successfully delivered hundreds of solar installations. Each project is
            engineered for maximum energy output, structural integrity, and long-term
            performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-accent text-white px-2.5 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider z-10 shadow-lg shadow-accent/20">
                  {project.type}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="p-5 sm:p-6">
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading font-bold text-foreground text-base sm:text-lg group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {project.location}
                  </div>
                  <div className="mt-3 sm:mt-4 flex items-center justify-between pt-2 border-t border-border/30">
                    <span className="text-[10px] sm:text-xs font-bold font-heading text-accent uppercase tracking-wider">Capacity</span>
                    <span className="text-xs sm:text-sm font-bold text-foreground">{project.kw}</span>
                  </div>
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
