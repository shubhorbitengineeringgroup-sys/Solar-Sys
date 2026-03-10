import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  { img: project1, title: "Residential Rooftop System", location: "Suburban Home", kw: "10 kW" },
  { img: project2, title: "Commercial Solar Farm", location: "Industrial Park", kw: "2.5 MW" },
  { img: project3, title: "Factory Rooftop Installation", location: "Manufacturing Unit", kw: "500 kW" },
  { img: project4, title: "Office Complex Array", location: "Corporate Campus", kw: "800 kW" },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-card overflow-hidden photon-border-hover transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden bg-card flex items-center justify-center p-6">
                <div className="diamond-clip w-full h-full overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover scale-150"
                  />
                </div>
              </div>
              <div className="p-5 bg-card">
                <h3 className="font-heading font-semibold text-foreground text-sm">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {project.location} · {project.kw}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
