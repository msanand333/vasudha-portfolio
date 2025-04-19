import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Credit {
  title: string;
  role: string;
  character?: string;
  director?: string;
  production?: string;
  year: string;
  type: "film" | "series" | "short";
  streaming?: string;
}

const credits: Credit[] = [
  {
    title: "The Return Arrow",
    role: "Lead Role",
    character: "Archery Player Radha",
    director: "Vasudha Krishnamoorthy",
    production: "Vkay Productions",
    year: "Upcoming",
    type: "film",
  },
  {
    title: "Project C - Chapter 2",
    role: "Lead Role",
    character: "Housemaid Panchavarnam",
    director: "Vino",
    production: "Sharkfin Studios",
    year: "2023",
    type: "film",
    streaming: "Raj Digital Plus",
  },
  {
    title: "Aura",
    role: "Lead Role",
    character: "Youtube Channel CEO ",
    director: "S.Sriram",
    production: "Thangam Cinemas",
    year: "Upcoming",
    type: "film",
  },
  {
    title: "Sister",
    role: "Lead Role ",
    character: "Sister Jowi",
    director: "Collin Denhart",
    production: "Knightly Pictures",
    year: "2021",
    type: "film",
    streaming: "In Film Festivals",
  },
  {
    title: "Auto Shankar",
    role: "Supporting Lead",
    character: "Sex Worker Lalitha",
    director: "Ranga",
    production: "Trident Arts",
    year: "2019",
    type: "series",
    streaming: "Zee5",
  },
  {
    title: "Iru Dhuruvam",
    role: "Supporting Actress",
    character: "Nivedha",
    director: "M.Kumaran",
    production: "Applause Entertainment",
    year: "2019",
    type: "series",
    streaming: "SonyLIV",
  },
  {
    title: "Real Autism",
    role: "Supporting Actress",
    character: "Meera",
    director: "Christopher",
    year: "Upcoming",
    type: "short",
    production: "Visionary Studios",
    streaming: "YouTube",
  },
  {
    title: "Finding Indigo",
    role: "Lead Role",
    character: "Maya - Mom",
    production: "Zaahi Studios",
    director: "Michael",
    year: "2024",
    type: "short",
    streaming: "YouTube",
  },
];

interface CreditsSectionProps {
  className?: string;
}

export default function CreditsSection({ className }: CreditsSectionProps) {
  const categories = ["all", "film", "series", "short"];
  const [activeTab, setActiveTab] = useState("all");
  const isMobile = useIsMobile();

  const handlePrevTab = () => {
    const currentIndex = categories.indexOf(activeTab);
    const prevIndex =
      currentIndex <= 0 ? categories.length - 1 : currentIndex - 1;
    setActiveTab(categories[prevIndex]);
  };

  const handleNextTab = () => {
    const currentIndex = categories.indexOf(activeTab);
    const nextIndex =
      currentIndex >= categories.length - 1 ? 0 : currentIndex + 1;
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
      className={cn("section-padding py-24 bg-background", className)}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 font-serif reveal">
          Credits
        </h2>

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
                  .filter(
                    (credit) => activeTab === "all" || credit.type === activeTab
                  )
                  .map((credit, index) => (
                    <div
                      key={index}
                      className="border-b border-border py-4 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4"
                    >
                      <div>
                        <h3 className="font-medium text-lg">{credit.title}</h3>
                        <p className="text-muted-foreground">{credit.role}</p>
                        <p className="text-sm text-muted-foreground">
                          {credit.character}
                        </p>
                      </div>
                      <div>
                        {credit.director && (
                          <p className="text-sm">Dir: {credit.director}</p>
                        )}
                        {credit.streaming && (
                          <p className="text-sm text-muted-foreground">
                            Streaming in - <i>{credit.streaming}</i>
                          </p>
                        )}
                        {credit.production && (
                          <p className="text-sm text-muted-foreground">
                            {credit.production}
                          </p>
                        )}
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
          <div className="w-full max-w-4xl mx-auto reveal">
            <div className="flex justify-center mb-6 md:mb-8 overflow-x-auto py-2">
              <div className="inline-flex rounded-md bg-muted p-1">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-3 py-1.5 text-sm font-medium rounded-sm ${
                      activeTab === category ? "bg-background shadow" : ""
                    } whitespace-nowrap`}
                    onClick={() => setActiveTab(category)}
                  >
                    {formatTabName(category)}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {credits
                  .filter(
                    (credit) => activeTab === "all" || credit.type === activeTab
                  )
                  .map((credit, index) => (
                    <div
                      key={index}
                      className="border-b border-border py-4 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4"
                    >
                      <div>
                        <h3 className="font-medium text-lg">{credit.title}</h3>
                        <p className="text-muted-foreground">{credit.role}</p>
                        <p className="text-sm text-muted-foreground">
                          {credit.character}
                        </p>
                      </div>
                      <div>
                        {credit.director && (
                          <p className="text-sm">Dir: {credit.director}</p>
                        )}
                        {credit.streaming && (
                          <p className="text-sm text-muted-foreground">
                            Streaming in - <i>{credit.streaming}</i>
                          </p>
                        )}
                        {credit.production && (
                          <p className="text-sm text-muted-foreground">
                            {credit.production}
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        <span className="text-sm">{credit.year}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
