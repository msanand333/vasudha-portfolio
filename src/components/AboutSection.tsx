
import { cn } from "@/lib/utils";

interface AboutSectionProps {
  className?: string;
}

export default function AboutSection({ className }: AboutSectionProps) {
  return (
    <section 
      id="about" 
      className={cn(
        "section-padding bg-background",
        className
      )}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square bg-muted rounded-md overflow-hidden reveal">
            <img 
              src="/placeholder.svg" 
              alt="Portrait" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl mb-6">About Me</h2>
            <p className="text-foreground/80 mb-4">
              I am a passionate creative professional with expertise in design, photography, and digital media. With years of experience in the industry, I've developed a keen eye for detail and a unique perspective that informs all of my work.
            </p>
            <p className="text-foreground/80 mb-8">
              My approach combines technical precision with artistic vision, allowing me to create compelling visual narratives that resonate with audiences. I believe in the power of simplicity and letting the work speak for itself.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-serif text-xl mb-3">Skills</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li>Photography</li>
                  <li>Graphic Design</li>
                  <li>Web Development</li>
                  <li>Visual Storytelling</li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-3">Education</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li>MFA in Design</li>
                  <li>BA in Fine Arts</li>
                  <li>Certificate in Digital Media</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
