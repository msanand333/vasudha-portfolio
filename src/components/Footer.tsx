
import { cn } from "@/lib/utils";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={cn(
      "py-12 bg-secondary border-t",
      className
    )}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-serif">Vasudha Krishnamoorthy</a>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="#" 
              className="text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Youtube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-foreground/80 hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          
          <div className="text-sm text-foreground/70">
            &copy; {currentYear} Vasudha Krishnamoorthy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
