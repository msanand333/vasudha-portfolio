import { cn } from "@/lib/utils";
import { Award, Trophy } from "lucide-react";

interface Award {
  title: string;
  category: string;
  event: string;
  year: string;
}

const awards: Award[] = [
  {
    title: "Best Horror Feature Film",
    category: "Feature Film",
    event: "FICIMAD Film Festival, Madrid",
    year: "2021",
  },
  {
    title: "Best Actress",
    category: "Acting",
    event: "FICIMAD Film Festival, Madrid",
    year: "2021",
  },
];

interface AwardsSectionProps {
  className?: string;
}

export default function AwardsSection({ className }: AwardsSectionProps) {
  return (
    <section
      id="awards"
      className={cn("section-padding py-24 bg-secondary", className)}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl mb-6 font-serif">
              Awards & Recognition
            </h2>

            <div className="space-y-6">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-background p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    {index === 0 ? (
                      <Trophy className="h-8 w-8 text-primary shrink-0" />
                    ) : (
                      <Award className="h-8 w-8 text-primary shrink-0" />
                    )}
                    <div>
                      <h3 className="font-medium mb-2">{award.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {award.category}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {award.event}
                      </p>
                      <p className="text-sm text-primary mt-1">{award.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal order-1 md:order-2">
            <div className="aspect-[3/4] bg-muted rounded-sm overflow-hidden">
              <img
                src="/assets/images/portraits/banner-2.JPG"
                alt="Awards and Recognition"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
