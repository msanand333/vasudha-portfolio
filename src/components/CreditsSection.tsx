
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Credit {
  title: string;
  role: string;
  director?: string;
  production?: string;
  year: string;
  type: "film" | "series" | "short" | "theater";
}

const credits: Credit[] = [
  {
    title: "The Silent Room",
    role: "Detective Sarah Miller",
    director: "Michael Chen",
    production: "Paramount Pictures",
    year: "2023",
    type: "film"
  },
  {
    title: "Echoes of Tomorrow",
    role: "Dr. Emily Nakamura",
    director: "Sophia Williams",
    production: "Netflix",
    year: "2022",
    type: "series"
  },
  {
    title: "Fragments",
    role: "Claire",
    director: "Robert Davis",
    year: "2022",
    type: "short"
  },
  {
    title: "The Last Letter",
    role: "Anna Thompson",
    director: "James Wilson",
    production: "Amazon Studios",
    year: "2021",
    type: "film"
  },
  {
    title: "Midnight Chronicles",
    role: "Detective Jane Porter",
    director: "Elena Rodriguez",
    production: "HBO",
    year: "2021",
    type: "series"
  },
  {
    title: "Whispers in the Dark",
    role: "Grace",
    director: "Thomas Brown",
    year: "2020",
    type: "short"
  },
  {
    title: "A Streetcar Named Desire",
    role: "Stella Kowalski",
    director: "Martha Johnson",
    production: "City Theater Company",
    year: "2019",
    type: "theater"
  }
];

interface CreditsSectionProps {
  className?: string;
}

export default function CreditsSection({ className }: CreditsSectionProps) {
  const categories = ["all", "film", "series", "short", "theater"];
  const [activeTab, setActiveTab] = useState("all");
  const isMobile = useIsMobile();

  const handlePrevTab = () => {
    const currentIndex = categories.indexOf(activeTab);
    const prevIndex = currentIndex <= 0 ? categories.length - 1 : currentIndex - 1;
    setActiveTab(categories[prevIndex]);
  };

  const handleNextTab = () => {
    const currentIndex = categories.indexOf(activeTab);
    const nextIndex = currentIndex >= categories.length - 1 ? 0 : currentIndex + 1;
    setActiveTab(categories[nextIndex]);
  };

  // Format the tab name for display
  const formatTabName = (tab: string) => {
    if (tab === "all") return "All";
    if (tab === "series") return "TV/Web Series";
    if (tab === "short") return "Short Film";
    return tab.charAt(0).toUpperCase() + tab.slice(1);
  };

  return (
    <section 
      id="credits" 
      className={cn(
        "section-padding py-24 bg-background",
        className
      )}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 font-serif reveal">Credits</h2>
        
        {isMobile ? (
          <div className="w-full max-w-4xl mx-auto reveal">
            <div className="flex items-center justify-between mb-8">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handlePrevTab}
                className="h-8 w-8"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <span className="text-center font-medium">
                {formatTabName(activeTab)}
              </span>
              
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleNextTab}
                className="h-8 w-8"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {credits
                  .filter((credit) => activeTab === "all" || credit.type === activeTab)
                  .map((credit, index) => (
                    <div 
                      key={index} 
                      className="border-b border-border py-4 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4"
                    >
                      <div>
                        <h3 className="font-medium text-lg">{credit.title}</h3>
                        <p className="text-muted-foreground">{credit.role}</p>
                      </div>
                      <div>
                        {credit.director && <p className="text-sm">Dir: {credit.director}</p>}
                        {credit.production && <p className="text-sm text-muted-foreground">{credit.production}</p>}
                      </div>
                      <div className="text-right">
                        <span className="text-sm">{credit.year}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ) : (
          <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto reveal">
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="film">Film</TabsTrigger>
              <TabsTrigger value="series">TV/Web Series</TabsTrigger>
              <TabsTrigger value="short">Short Film</TabsTrigger>
              <TabsTrigger value="theater">Theater</TabsTrigger>
            </TabsList>
            
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  {credits
                    .filter((credit) => category === "all" || credit.type === category)
                    .map((credit, index) => (
                      <div 
                        key={index} 
                        className="border-b border-border py-4 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4"
                      >
                        <div>
                          <h3 className="font-medium text-lg">{credit.title}</h3>
                          <p className="text-muted-foreground">{credit.role}</p>
                        </div>
                        <div>
                          {credit.director && <p className="text-sm">Dir: {credit.director}</p>}
                          {credit.production && <p className="text-sm text-muted-foreground">{credit.production}</p>}
                        </div>
                        <div className="text-right">
                          <span className="text-sm">{credit.year}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>
    </section>
  );
}
