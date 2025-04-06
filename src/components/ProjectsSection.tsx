
import { useState } from 'react';
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Monochrome Series",
    category: "Photography",
    image: "/placeholder.svg",
    description: "A collection of black and white photographs exploring the interplay of light and shadow in urban environments.",
    year: "2024"
  },
  {
    id: 2,
    title: "Minimalist Design",
    category: "Graphic Design",
    image: "/placeholder.svg",
    description: "A series of minimalist designs focusing on essential elements and negative space.",
    year: "2023"
  },
  {
    id: 3,
    title: "Abstract Forms",
    category: "Art",
    image: "/placeholder.svg",
    description: "Exploration of abstract forms and textures through various mediums.",
    year: "2023"
  },
  {
    id: 4,
    title: "Architectural Lines",
    category: "Photography",
    image: "/placeholder.svg",
    description: "Documenting architectural details with an emphasis on lines, patterns, and geometry.",
    year: "2022"
  },
  {
    id: 5,
    title: "Portrait Collection",
    category: "Photography",
    image: "/placeholder.svg",
    description: "A series of intimate portrait photographs capturing emotional moments.",
    year: "2022"
  },
  {
    id: 6,
    title: "Brand Identity",
    category: "Design",
    image: "/placeholder.svg",
    description: "Complete brand identity design for a boutique fashion label.",
    year: "2021"
  }
];

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div 
      className="group cursor-pointer reveal" 
      onClick={onClick}
    >
      <div className="aspect-[4/5] overflow-hidden bg-muted relative rounded-sm">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div>
            <h3 className="font-serif text-lg text-primary-foreground">{project.title}</h3>
            <p className="text-sm text-primary-foreground/80">{project.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProjectsViewProps {
  className?: string;
}

export default function ProjectsSection({ className }: ProjectsViewProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return (
    <section 
      id="projects" 
      className={cn(
        "section-padding bg-secondary py-16 md:py-20",
        className
      )}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl mb-4 text-center reveal">Selected Projects</h2>
        <p className="text-center text-foreground/80 mb-8 md:mb-12 max-w-2xl mx-auto px-4 reveal">
          A curated collection of my most significant work across various disciplines and media.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </div>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background sm:rounded-lg">
          {selectedProject && (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-square bg-muted">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 md:p-6 flex flex-col">
                <h2 className="text-xl md:text-2xl font-serif mb-2">{selectedProject.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  {selectedProject.category} | {selectedProject.year}
                </p>
                <p className="text-foreground/80 mb-auto">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
