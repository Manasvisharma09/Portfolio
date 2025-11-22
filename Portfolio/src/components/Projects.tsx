import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "SafeShe",
    description: "AI-powered warehouse returns management system that classifies return items using real product images. Features seamless admin workflows and reduces manual effort in return categorization.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "AI/ML"],
    date: "July 2025",
    link: "https://drive.google.com/file/d/1bixD7omqO6WL8P_ZgqMEck495B4MCbah/view?usp=drive_link"
  },

  {
    title: "Reloop",
    description: "AI-powered warehouse returns management system that classifies return items using real product images. Features seamless admin workflows and reduces manual effort in return categorization.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "AI/ML"],
    date: "July 2025",
    link: "https://www.youtube.com/watch?v=dgcZ0jY6pBM"
  },
  {
    title: "AI Interview Platform",
    description: "Real-time AI interview assistant that conducts personalized mock interviews. Features role-based questions, real-time responses, and instant AI-generated feedback using Gemini and Vapi.",
    tech: ["Next.js", "Tailwind CSS", "ShadCN", "VAPI", "Gemini", "Firebase"],
    date: "June 2025",
    link: "https://interview-platform-omega-lemon.vercel.app/sign-in"
  },
  {
    title: "Real-Time Trading Simulator",
    description: "Built with Level-2 orderbook data from OKX exchange via WebSocket. Features slippage modeling, market impact calculations using Almgren-Chriss model, and ML-based trading cost prediction.",
    tech: ["Python", "WebSocket", "Streamlit", "Machine Learning"],
    date: "May 2025",
    link: "https://drive.google.com/drive/folders/1T-C3MBxHXr-PUYYeFBiLVU9EdIpf-pNl?usp=sharing"
  },
  {
    title: "Taskify - Trello Clone",
    description: "Full-featured task management tool supporting daily to-do lists, project planning, and real-time collaboration. Includes Stripe integration for premium features.",
    tech: ["Next.js 14", "Server Actions", "Prisma", "Stripe", "MySQL", "ShadCN"],
    date: "April 2024",
    link: "https://trello-clone-seven-ebon.vercel.app/"
  },
  {
    title: "Apple iPhone 15 Clone",
    description: "Pixel-perfect recreation of Apple's iPhone 15 website featuring smooth animations, 3D interactions, and responsive design optimized for performance.",
    tech: ["React.js", "Three.js", "GSAP", "Tailwind CSS"],
    date: "July 2024",
    link: "https://apple-hazel-delta.vercel.app/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building innovative solutions with modern technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card border-border p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.date}</p>
                  </div>
                  <a 
                    href={project.link}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-muted text-foreground hover:bg-muted/80"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
