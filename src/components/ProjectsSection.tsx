import project1Img from "@/assets/project-1.jpg";
import project2Img from "@/assets/project-2.jpg";
import project3Img from "@/assets/project-3.jpg";
import project4Img from "@/assets/project-4.jpg";

const projects = [
  { img: project1Img, title: "Residential Rooftop System", location: "Suburban Home", kw: "10 kW", type: "Home" },
  { img: project2Img, title: "Commercial Solar Farm", location: "Industrial Park", kw: "2.5 MW", type: "Commercial" },
  { img: project3Img, title: "Factory Rooftop Installation", location: "Manufacturing Unit", kw: "500 kW", type: "Industrial" },
  { img: project4Img, title: "Office Complex Array", location: "Corporate Campus", kw: "800 kW", type: "Commercial" },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 section-divider">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Our <span className="photon-gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground">
            From residential rooftops to large-scale commercial solar farms, we have
            successfully delivered hundreds of solar installations. Each project is
            engineered for maximum energy output, structural integrity, and long-term
            performance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden bg-white border border-border/40 hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider z-10 shadow-lg shadow-accent/20">
                  {project.type}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="p-6">
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading font-bold text-foreground text-lg group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {project.location}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-bold font-heading text-accent/80 uppercase">Capacity</span>
                    <span className="text-sm font-bold text-foreground">{project.kw}</span>
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
