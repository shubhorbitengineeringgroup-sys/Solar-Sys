import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  { img: project1, title: "Residential Array", location: "Silicon Valley, CA", kw: "12 kW" },
  { img: project2, title: "Commercial Solar Farm", location: "Austin, TX", kw: "2.5 MW" },
  { img: project3, title: "Warehouse Installation", location: "Portland, OR", kw: "450 kW" },
  { img: project4, title: "Urban Office Complex", location: "Chicago, IL", kw: "800 kW" },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 section-divider">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Featured <span className="photon-gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground">
            A selection of our precision solar installations across commercial
            and residential sectors.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-card overflow-hidden photon-border-hover transition-all duration-300"
            >
              {/* Diamond frame inside rounded card */}
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
