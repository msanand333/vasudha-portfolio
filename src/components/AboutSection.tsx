import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface AboutSectionProps {
  className?: string;
}

export default function AboutSection({ className }: AboutSectionProps) {
  return (
    <section
      id="about"
      className={cn("section-padding py-24 bg-background", className)}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="aspect-[3/4] bg-muted rounded-sm overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Vasudha Krishnamoorthy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="reveal">
            <h2 className="text-3xl md:text-4xl mb-6 font-serif">About Me</h2>
            <p className="text-foreground/80 mb-6">
              I'm Vasudha Krishnamoorthy, an actor and director with a passion
              for authentic storytelling. With experience in films, web series,
              and short films, I bring characters to life with depth and nuance.
            </p>
            <p className="text-foreground/80 mb-6">
              My journey began in theater, which gave me a strong foundation in
              the craft of acting. I've since transitioned to screen work, where
              I've had the opportunity to work with talented filmmakers on
              projects spanning various genres.
            </p>
            <p className="text-foreground/80 mb-8">
              When I'm not in front of the camera, I'm often behind it,
              directing short films that explore human connections and personal
              journeys. My work has been featured at several film festivals and
              can be found on my YouTube channel.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="border-primary/20" asChild>
                <a href="#contact">Contact Me</a>
              </Button>

              <Button variant="ghost" className="border-primary/20" asChild>
                <a href="#showreel">View Resume</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
