import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Get to know me</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My journey in tech, achievements, and continuous learning
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card/50 backdrop-blur-sm border-border p-8 space-y-4 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full ring-4 ring-background" />
                <h4 className="font-semibold text-lg text-primary mb-1">
                  The LNM Institute Of Information And Technology
                </h4>
                <p className="text-muted-foreground mb-1">B.Tech in Electronics And Communication Engineering</p>
                <p className="text-sm text-muted-foreground">2022 - Present | Jaipur</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Coursework: Data Structures, Algorithms, Operating Systems, DBMS, Computer Networks
                </p>
              </div>
              
              <div className="relative pl-6 border-l-2 border-secondary/30 hover:border-secondary transition-colors duration-300">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-secondary rounded-full ring-4 ring-background" />
                <h4 className="font-semibold text-lg text-secondary mb-1">
                  St. Anselm's Pink City Sr. Sec. School
                </h4>
                <p className="text-muted-foreground mb-1">12th Grade - 92.2%</p>
                <p className="text-sm text-muted-foreground">2022 | Jaipur</p>
              </div>
            </div>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur-sm border-border p-8 space-y-4 hover:border-secondary/50 hover:shadow-xl hover:shadow-secondary/10 transition-all duration-500 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-secondary/10 rounded-lg group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-300">
                <Award className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">Achievements</h3>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <span className="text-2xl">🏆</span>
                  LeetCode Champion
                </h4>
                            <p className="text-muted-foreground">
              Solved <span className="text-primary font-bold text-xl">650+</span> problems demonstrating strong problem-solving and algorithmic thinking.{" "}
              <a
                href="https://leetcode.com/u/22uec077/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:text-primary/80 transition"
              >
                View Profile →
              </a>
            </p>

              </div>
              
              <div className="p-4 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg border border-secondary/20 hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300 hover:-translate-y-1">
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  Postman API Fundamentals
                </h4>
                <p className="text-muted-foreground">
                Certified Student Expert in API development and testing.{" "}
                <a
                  href="https://badges.parchment.com/public/assertions/EWaXJ9h-Tg2y_FDvIRc78Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary underline underline-offset-4 hover:text-secondary/80 transition"
                >
                  View Certificate →
                </a>
              </p>
                
              </div>
                            

              <div className="p-4 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border border-accent/20 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-1">
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <span className="text-2xl">💡</span>
                  Leadership & Soft Skills
                </h4>
                <p className="text-muted-foreground">
                  Critical Thinking, Communication, Team Management
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;