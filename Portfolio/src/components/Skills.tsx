import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["C++", "JavaScript", "Python", "React.js", "Next.js", "Node.js", "React Native"]
  },
  {
    title: "Databases & Cloud",
    skills: ["MySQL", "MongoDB", "Firebase", "Prisma"]
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "VS Code", "Three.js", "GSAP", "Tailwind CSS", "ShadCN"]
  },
  {
    title: "Core Concepts",
    skills: ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Computer Networks", "OOP"]
  },
  {
    title: "AI & ML",
    skills: ["Gemini API", "Machine Learning", "AI Integration", "VAPI"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies I work with
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-card border-border p-6 hover:border-secondary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-4 text-secondary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    className="bg-muted text-foreground hover:bg-muted/80"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="mt-8 bg-card border-border p-8 text-center">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">
              <span className="gradient-text">650+</span> Problems Solved
            </h3>
            <p className="text-muted-foreground">
              Active problem solver on LeetCode
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
