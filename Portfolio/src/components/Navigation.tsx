import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold">
          <span className="gradient-text">MS</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
            Skills
          </a>
          <Button 
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            asChild
          >
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
