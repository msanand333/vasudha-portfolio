
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className }: HeroSectionProps) {
  return (
    <section 
      id="home"
      className={cn(
        "hero-section flex items-center justify-center bg-muted",
        className
      )}
      style={{
        backgroundImage: "url('/placeholder.svg')"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 animate-slide-down">
          Creative Portfolio
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-8 animate-slide-up">
          Showcasing work with passion and purpose
        </p>
        <a 
          href="#about" 
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
