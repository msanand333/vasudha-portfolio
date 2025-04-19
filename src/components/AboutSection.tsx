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
                src="/assets/images/portraits/banner-3.JPG"
                alt="Vasudha Krishnamoorthy"
                className="w-full h-full object-cover bg-cover"
              />
            </div>
          </div>

          <div className="reveal">
            <h2 className="text-3xl md:text-4xl mb-6 font-serif">About Me</h2>
            <p className="text-foreground/80 mb-6">
              Hi, I’m vasudha krishnamoorthy—an actor drawn to stories that
              carry emotional depth, cultural authenticity, and quiet power. My
              work spans feature films, indie projects, short films, and web
              series across Tamil, Telugu, and English—each role offering a new
              lens into the human experience.
            </p>
            <p className="text-foreground/80 mb-6">
              I’m passionate about bringing grounded, emotionally honest
              characters to life, especially in narratives that reflect the
              complexities of everyday life. With a background in
              writing/directing/project management, I approach each project with
              intention, professionalism, and a collaborative spirit.
            </p>
            <p className="text-foreground/80 mb-6">
              Beyond acting, I have an insatiable appetite for travel—it fuels
              my curiosity and shapes the way I see the world. I’m also
              continuously learning, currently training in Taekwondo (Black
              belt) and continue to practice Indian classical dance form
              Bharatanatyam —both of which have deepened my connection to body,
              discipline, and expression.
            </p>
            <p className="text-foreground/80 mb-8">
              Let’s create something meaningful together.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="border-primary/20" asChild>
                <a href="/contact">Contact Me</a>
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
