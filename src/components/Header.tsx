
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Showreel", href: "/showreel" },
  { title: "Credits", href: "/credits" },
  { title: "Directed", href: "/directed-works" },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact", href: "/contact" },
];

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "dark"
  );
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 64) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ",
        isScrolled ? "bg-black" : "bg-background",
        className
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 h-16">
        <Link
          to="/"
          className={cn(
            "text-xl font-serif font-medium lg:text-2xl",
            isScrolled
              ? "text-white hover:text-white/70"
              : "hover:text-foreground/70"
          )}
        >
          Vasudha Krishnamoorthy
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "font-sans text-sm tracking-wide transition-colors",
                isScrolled
                  ? "text-white hover:text-white/70"
                  : "hover:text-foreground/70",
                location.pathname === link.href ? "font-medium border-b border-current" : ""
              )}
            >
              {link.title}
            </Link>
          ))}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === "light" ? (
              <Moon
                className={cn(
                  "h-5 w-5",
                  isScrolled
                    ? "stroke-white hover:stroke-white/70"
                    : "hover:stroke-foreground/70"
                )}
              />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden space-x-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === "light" ? (
              <Moon
                className={cn(
                  "h-5 w-5",
                  isScrolled
                    ? "stroke-white hover:stroke-white/70"
                    : "hover:stroke-foreground/70"
                )}
              />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-full "
          >
            {isMenuOpen ? (
              <X
                className={cn(
                  "h-5 w-5",
                  isScrolled
                    ? "stroke-white hover:stroke-white/70"
                    : "hover:stroke-foreground/70"
                )}
              />
            ) : (
              <Menu
                className={cn(
                  "h-5 w-5",
                  isScrolled
                    ? "stroke-white hover:stroke-white/70"
                    : "hover:stroke-foreground/70"
                )}
              />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 h-screen",
            "bg-background",
            className,
            "animate-fade-in"
          )}
        >
          <div className="container mx-auto py-4 px-6 flex flex-col space-y-4 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "py-2 font-sans text-sm hover:underline underline-offset-4 transition-colors",
                  location.pathname === link.href ? "font-medium underline" : ""
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
