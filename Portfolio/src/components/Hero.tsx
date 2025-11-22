import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { IridescentBlob } from "@/components/IridescentBlob";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden px-6 md:px-12 pt-28 flex items-center">
      {/* Dark gradient bg + noise feel (you can tweak) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#02010a] via-[#050819] to-black pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(circle_at_top,_#ffffff22,_transparent_60%),radial-gradient(circle_at_bottom,_#8b5cf611,_transparent_55%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* LEFT: TEXT */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
            Hi, I&apos;m
          </p>

          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight text-white">
              Manasvi{" "}
              <span className="bg-gradient-to-r from-violet-400 via-sky-400 to-pink-400 bg-clip-text text-transparent">
                Sharma
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              Full Stack{" "}
              <span className="text-secondary font-bold">Software Developer</span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl lg:max-w-md leading-relaxed">
            I build scalable web apps with React, Next.js, and Node.js —
            blending clean architecture with playful, interactive UI and AI-powered
            experiences.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <Button
              className="px-7 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl shadow-[0_0_25px_rgba(129,140,248,0.5)] hover:shadow-[0_0_35px_rgba(129,140,248,0.7)] transition-transform duration-300 hover:scale-110"
              asChild
            >
              <a href="#projects">🚀 View Projects</a>
            </Button>

            <Button
              variant="outline"
              className="px-7 py-4 border-white/25 bg-white/5 text-white hover:bg-white/10 rounded-xl font-semibold backdrop-blur-xl transition-transform duration-300 hover:scale-110 shadow-lg"
              asChild
            >
              <a href="#contact">📩 Contact Me</a>
            </Button>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 justify-center lg:justify-start pt-6">
            <a
              href="https://github.com/Manasvisharma09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-transform duration-300 hover:scale-125"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/manasvi-sharma-7a8a20251/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-transform duration-300 hover:scale-125"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:manasvisharma0908@gmail.com"
              className="text-muted-foreground hover:text-primary transition-transform duration-300 hover:scale-125"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* RIGHT: 3D BLOB */}
        <div className="flex-1 w-full max-w-md h-[320px] md:h-[420px] lg:h-[460px]">
          <div className="w-full h-full rounded-[2.5rem] border border-white/10 bg-black/40 overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)]">
            <IridescentBlob />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
