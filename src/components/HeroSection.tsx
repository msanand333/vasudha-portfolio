
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      id="home"
      className={cn(
        "hero-section flex items-start justify-center min-h-[80vh] bg-muted",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent bg-no-repeat bg-cover bg-top bg-[url(/assets/images/banners/lights-camera.jpeg)] "></div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto reveal mt-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 animate-slide-down">
          Vasudha Krishnamoorthy
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-8 animate-slide-up">
          Actor • Director • Storyteller
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Link to="/gallery">
              View Gallery <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button
            variant="outline"
            asChild
            className="animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Link to="/showreel">
              <Play className="mr-2 h-4 w-4" /> Showreel
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
