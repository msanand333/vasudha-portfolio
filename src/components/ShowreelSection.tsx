
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ShowreelSectionProps {
  className?: string;
}

export default function ShowreelSection({ className }: ShowreelSectionProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  return (
    <section 
      id="showreel" 
      className={cn(
        "section-padding py-24 bg-secondary",
        className
      )}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 font-serif reveal">Showreel</h2>
        
        <div className="max-w-4xl mx-auto bg-muted rounded-sm overflow-hidden reveal">
          <div className="aspect-video relative group cursor-pointer" onClick={() => setIsVideoOpen(true)}>
            <img 
              src="/placeholder.svg" 
              alt="Showreel thumbnail" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="outline" className="rounded-full size-16">
                <Play className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
        
        <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
          <DialogContent className="max-w-5xl p-0 bg-background">
            <div className="aspect-video w-full">
              {/* Replace with actual video embed when available */}
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Video placeholder - embed actual showreel here</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
