import { useState } from "react";
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
    title: "The Return Arrow",
    category: "Feature Film",
    image: "/assets/images/projects/the-return-arrow.jpeg",
    description:
      "The Return Arrow traces the journey of Radha, a gifted archer grappling with the weight of her past and the pressure of an uncertain future. As she steps back onto the field, guided by an unexpected ally, old wounds resurface and new questions emerge. Set against the backdrop of quiet rivalries and unspoken emotions, the film explores love, loss, and the strength it takes to aim again. Will she reclaim her shot, or let it slip away?",
    year: "Upcoming",
  },
  {
    id: 2,
    title: "Echoes of the heart",
    category: "Short Film",
    image: "/assets/images/projects/echoes-of-the-heart.jpeg",
    description:
      "The script revolves around a poignant narrative of love, loss, remembrance, and the ethereal connection between two individuals. It explores the depth of their relationship through a series of intimate moments, both joyful and sorrowful, capturing the essence of their bond that transcends physical presence.",
    year: "2025",
  },
  {
    id: 3,
    title: "Finding Indigo",
    category: "Pilot Film",
    image: "/assets/images/projects/finding-indigo.jpeg",
    description: `"Finding Indigo" immerses audiences in a spellbinding world where fantasy, drama, and mystique collide. Set against the backdrop of the nostalgic 2000s in a quaint Indiana town, this television series unfolds a cinematic journey of epic proportions.`,
    year: "2024",
  },
  {
    id: 4,
    title: "Unnara Vaithai",
    category: "Dance Cover",
    image: "/assets/images/projects/unnara-vaithai.jpeg",
    description:
      "Experience the emotional journey of a newlywed woman as she joyfully embarks on the adventure of married life, surrounded by the warmth of her husband and in-laws. However, her world takes a painful turn when societal pressures and family expectations unfairly place the blame on her for not conceiving quickly. Watch as she battles the misery within the confines of her home, ultimately finding the strength to break free and breathe in the refreshing air of newfound freedom. This poignant story explores the resilience of the human spirit and the pursuit of happiness against societal norms.",
    year: "2024",
  },
  {
    id: 5,
    title: "Love We Had",
    category: "Album Song",
    image: "/assets/images/projects/love-we-had.jpeg",
    description: "A song by Anza",
    year: "2023",
  },
  {
    id: 6,
    title: "Sister",
    category: "Feature Film",
    image: "/assets/images/projects/sister.jpeg",
    description:
      "Winner of the Award for Best Horror Feature Film & Best Actress at the 2021 FICIMAD Film Festival in Madrid, Spain.",
    year: "2021",
  },
];

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div className="group cursor-pointer reveal" onClick={onClick}>
      <div className="aspect-[4/5] overflow-hidden bg-muted relative rounded-sm">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div>
            <h3 className="font-serif text-lg text-primary-background">
              {project.title}
            </h3>
            <p className="text-sm text-primary-background/80">
              {project.category}
            </p>
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
      className={cn("section-padding bg-secondary py-16 md:py-20", className)}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl mb-4 text-center reveal">
          Projects
        </h2>
        <p className="text-center text-foreground/80 mb-8 md:mb-12 max-w-2xl mx-auto px-4 reveal">
          A curated collection of my most significant work across various
          disciplines and media.
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
                <h2 className="text-xl md:text-2xl font-serif mb-2">
                  {selectedProject.title}
                </h2>
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
