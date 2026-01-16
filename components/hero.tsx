"use client"

import { Github, Linkedin, Mail, ChevronDown, Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 px-6 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-2 h-2 bg-foreground/60 rounded-full" />
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-foreground/50 rounded-full" />
      <div className="absolute top-40 left-40 w-1 h-1 bg-foreground/40 rounded-full" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="text-primary animate-pulse" size={18} />
              <p className="text-primary font-mono text-sm">Hello, I'm</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance animate-slide-up animation-delay-100">
              Dhanshree Gaikwad
            </h1>
            <p className="text-xl md:text-2xl text-primary mb-2 animate-slide-up animation-delay-200">
              Software Engineer | Web & Machine Learning
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg animate-slide-up animation-delay-300">
              Software Engineer focused on building reliable software across web, data, and machine learning domains.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8 animate-slide-up animation-delay-400">
              <a
                href="https://github.com/1dhanshree"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-card hover:bg-secondary text-foreground px-6 py-3 rounded-lg transition-all duration-300 border border-border hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/dhanshree-gaikwad-52137b245/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/40"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="flex justify-center animate-slide-in-right">
            <div className="relative group">
              {/* Outer cosmic glow */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-40 blur-2xl group-hover:opacity-60 transition-opacity duration-500 animate-pulse-glow" />

              {/* Photo container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/60 group-hover:border-primary transition-colors duration-300">
                <img
                  src="/dhanshree-photo.jpeg"
                  alt="Dhanshree Gaikwad"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Cosmic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="absolute -top-4 -right-4 w-2 h-2 bg-foreground/70 rounded-full" />
              <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-foreground/60 rounded-full" />
              <div className="absolute top-1/2 -right-8 w-1 h-1 bg-foreground/50 rounded-full" />
              <div className="absolute -top-2 left-1/4 w-1 h-1 bg-foreground/40 rounded-full" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  )
}
