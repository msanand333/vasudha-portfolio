
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const images: GalleryImage[] = [
  { src: "/placeholder.svg", alt: "Headshot 1", category: "headshots" },
  { src: "/placeholder.svg", alt: "Headshot 2", category: "headshots" },
  { src: "/placeholder.svg", alt: "Headshot 3", category: "headshots" },
  { src: "/placeholder.svg", alt: "Behind the scenes 1", category: "behind-the-scenes" },
  { src: "/placeholder.svg", alt: "Behind the scenes 2", category: "behind-the-scenes" },
  { src: "/placeholder.svg", alt: "Film still 1", category: "stills" },
  { src: "/placeholder.svg", alt: "Film still 2", category: "stills" },
  { src: "/placeholder.svg", alt: "Film still 3", category: "stills" }
];

interface GallerySectionProps {
  className?: string;
}

export default function GallerySection({ className }: GallerySectionProps) {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  const filteredImages = images.filter(img => 
    filter === "all" || img.category === filter
  );
  
  return (
    <section 
      id="gallery" 
      className={cn(
        "section-padding py-24 bg-background",
        className
      )}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 font-serif reveal">Gallery</h2>
        
        <div className="flex justify-center mb-8 reveal">
          <div className="inline-flex rounded-md bg-muted p-1">
            <button
              className={`px-3 py-1.5 text-sm font-medium rounded-sm ${filter === "all" ? "bg-background shadow" : ""}`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`px-3 py-1.5 text-sm font-medium rounded-sm ${filter === "headshots" ? "bg-background shadow" : ""}`}
              onClick={() => setFilter("headshots")}
            >
              Headshots
            </button>
            <button
              className={`px-3 py-1.5 text-sm font-medium rounded-sm ${filter === "stills" ? "bg-background shadow" : ""}`}
              onClick={() => setFilter("stills")}
            >
              Stills
            </button>
            <button
              className={`px-3 py-1.5 text-sm font-medium rounded-sm ${filter === "behind-the-scenes" ? "bg-background shadow" : ""}`}
              onClick={() => setFilter("behind-the-scenes")}
            >
              Behind the Scenes
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 reveal">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square bg-muted overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-background">
            {selectedImage && (
              <div>
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <p className="text-lg">{selectedImage.alt}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
