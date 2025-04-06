
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const images: GalleryImage[] = [
  { src: "/placeholder.svg", alt: "Headshot 1", category: "headshots" },
  { src: "/placeholder.svg", alt: "Headshot 2", category: "headshots" },
  { src: "/placeholder.svg", alt: "Headshot 3", category: "headshots" },
  {
    src: "/placeholder.svg",
    alt: "Behind the scenes 1",
    category: "behind-the-scenes",
  },
  {
    src: "/placeholder.svg",
    alt: "Behind the scenes 2",
    category: "behind-the-scenes",
  },
  { src: "/placeholder.svg", alt: "Film still 1", category: "stills" },
  { src: "/placeholder.svg", alt: "Film still 2", category: "stills" },
  { src: "/placeholder.svg", alt: "Film still 3", category: "stills" },
];

interface GallerySectionProps {
  className?: string;
}

export default function GallerySection({ className }: GallerySectionProps) {
  const categories = ["all", "headshots", "stills", "behind-the-scenes"];
  const [filter, setFilter] = useState("all");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isMobile = useIsMobile();

  const filteredImages = images.filter(
    (img) => filter === "all" || img.category === filter
  );
  
  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsDialogOpen(true);
  };
  
  const handlePrevCategory = () => {
    const currentIndex = categories.indexOf(filter);
    const prevIndex = currentIndex <= 0 ? categories.length - 1 : currentIndex - 1;
    setFilter(categories[prevIndex]);
  };

  const handleNextCategory = () => {
    const currentIndex = categories.indexOf(filter);
    const nextIndex = currentIndex >= categories.length - 1 ? 0 : currentIndex + 1;
    setFilter(categories[nextIndex]);
  };
  
  // Format category name for display
  const formatCategoryName = (category: string) => {
    if (category === "all") return "All";
    if (category === "behind-the-scenes") return "Behind the Scenes";
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <section
      id="gallery"
      className={cn("section-padding py-16 md:py-24 bg-background", className)}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-8 md:mb-12 font-serif reveal">
          Gallery
        </h2>

        {isMobile ? (
          <div className="flex justify-between items-center mb-6 md:mb-8 reveal">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handlePrevCategory}
              className="h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <span className="text-center font-medium">
              {formatCategoryName(filter)}
            </span>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleNextCategory}
              className="h-8 w-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div className="flex justify-center mb-6 md:mb-8 reveal overflow-x-auto py-2">
            <div className="inline-flex rounded-md bg-muted p-1">
              <button
                className={`px-3 py-1.5 text-sm font-medium rounded-sm ${
                  filter === "all" ? "bg-background shadow" : ""
                }`}
                onClick={() => setFilter("all")}
              >
                All
              </button>
              <button
                className={`px-3 py-1.5 text-sm font-medium rounded-sm ${
                  filter === "headshots" ? "bg-background shadow" : ""
                }`}
                onClick={() => setFilter("headshots")}
              >
                Headshots
              </button>
              <button
                className={`px-3 py-1.5 text-sm font-medium rounded-sm ${
                  filter === "stills" ? "bg-background shadow" : ""
                }`}
                onClick={() => setFilter("stills")}
              >
                Stills
              </button>
              <button
                className={`px-3 py-1.5 text-sm font-medium rounded-sm whitespace-nowrap ${
                  filter === "behind-the-scenes" ? "bg-background shadow" : ""
                }`}
                onClick={() => setFilter("behind-the-scenes")}
              >
                Behind the Scenes
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 reveal px-4 justify-items-center">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square bg-muted overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-5xl p-0 bg-background sm:rounded-lg">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDialogOpen(false)}
              className="absolute right-2 top-2 z-10 rounded-full bg-background/80 hover:bg-background/60"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
            
            <Carousel className="w-full">
              <CarouselContent>
                {filteredImages.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className={index === currentImageIndex ? "block" : "hidden"}
                  >
                    <div className="flex flex-col rounded-md">
                      <div className="relative aspect-[16/9] w-full overflow-hidden p-3">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="p-4 text-center">
                        <p className="text-md">{image.alt}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full bg-background/80 hover:bg-background/60"
                  onClick={() =>
                    setCurrentImageIndex((prev) =>
                      prev === 0 ? filteredImages.length - 1 : prev - 1
                    )
                  }
                >
                  <ChevronLeft className="h-5 w-5" />
                  <span className="sr-only">Previous slide</span>
                </Button>
              </div>

              <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full bg-background/80 hover:bg-background/60"
                  onClick={() =>
                    setCurrentImageIndex((prev) =>
                      prev === filteredImages.length - 1 ? 0 : prev + 1
                    )
                  }
                >
                  <ChevronRight className="h-5 w-5" />
                  <span className="sr-only">Next slide</span>
                </Button>
              </div>
            </Carousel>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
