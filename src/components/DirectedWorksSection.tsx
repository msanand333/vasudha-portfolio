import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ExternalLink, Youtube } from "lucide-react";

interface DirectedWork {
  title: string;
  description: string;
  thumbnail: string;
  youtubeLink: string;
  year: string;
}

const directedWorks: DirectedWork[] = [
  {
    title: "Echoes of the Heart",
    description:
      "The script revolves around a poignant narrative of love, loss, remembrance, and the ethereal connection between two individuals. It explores the depth of their relationship through a series of intimate moments, both joyful and sorrowful, capturing the essence of their bond that transcends physical presence.",
    thumbnail: "/placeholder.svg",
    youtubeLink: "https://youtube.com/watch?v=example1",
    year: "2025",
  },
  {
    title: "The Forgotten Path",
    description:
      "A young woman discovers an old diary that leads her on a journey of self-discovery.",
    thumbnail: "/placeholder.svg",
    youtubeLink: "https://youtube.com/watch?v=example2",
    year: "2022",
  },
  {
    title: "Whispers in the Wind",
    description:
      "A poetic short film about memories and the traces they leave behind.",
    thumbnail: "/placeholder.svg",
    youtubeLink: "https://youtube.com/watch?v=example3",
    year: "2021",
  },
  {
    title: "Reflections",
    description:
      "An experimental short exploring identity and self-perception.",
    thumbnail: "/placeholder.svg",
    youtubeLink: "https://youtube.com/watch?v=example4",
    year: "2020",
  },
];

interface DirectedWorksSectionProps {
  className?: string;
}

export default function DirectedWorksSection({
  className,
}: DirectedWorksSectionProps) {
  return (
    <section
      id="directed-works"
      className={cn("section-padding py-24 bg-secondary", className)}
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12 gap-4 text-center">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl mb-2 font-serif">
              Directed Works
            </h2>
            <p className="text-foreground/80 max-w-2xl">
              Short films and projects I've directed, now available on my
              YouTube channel.
            </p>
          </div>

          <Button variant="outline" className="reveal" asChild>
            <a
              href="https://www.youtube.com/@vkayproductions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="mr-2 h-4 w-4" />
              YouTube Channel
            </a>
          </Button>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {directedWorks.map((work, index) => (
            <div key={index} className="bg-background rounded-sm overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={work.thumbnail}
                  alt={work.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{work.title}</h3>
                  <span className="text-sm text-muted-foreground">
                    {work.year}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {work.description}
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a
                    href={work.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-3 w-3" />
                    Watch on YouTube
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
