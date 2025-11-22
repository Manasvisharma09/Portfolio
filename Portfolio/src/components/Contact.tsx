import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Open to opportunities and collaborations
          </p>
        </div>
        
        <Card className="bg-card border-border p-8 md:p-12 text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Get In Touch</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm currently looking for new opportunities and interesting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <a 
              href="mailto:manasvisharma0908@gmail.com"
              className="flex items-center gap-3 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
            >
              <Mail className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium text-sm">manasvisharma0908@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="tel:+917878177413"
              className="flex items-center gap-3 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
            >
              <Phone className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium text-sm">+91 7878177413</p>
              </div>
            </a>
          </div>
          
          <div className="flex gap-4 justify-center pt-4">
            <a
              href="mailto:manasvisharma0908@gmail.com"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Say Hello
            </a>
          </div>
          
          <div className="flex gap-6 justify-center pt-8 border-t border-border">
            <a 
              href="https://github.com/Manasvisharma09" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/manasvi-sharma" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
