"use client"

import { ExternalLink, Github, Sparkles, Puzzle } from "lucide-react"

const projects = [
  {
    title: "AI WhatsApp Chat Analyzer",
    description:
      "An intelligent chat analysis tool that uses AI to analyze WhatsApp conversations. Features sentiment analysis, chat statistics, message patterns, and visual insights through interactive charts.",
    tech: ["Python", "Streamlit", "NLP", "Pandas", "Matplotlib"],
    github: "https://github.com/1dhanshree",
    featured: true,
    highlight: true,
    icon: Puzzle,
  },
  {
    title: "Roamizz",
    description:
      "A travel buddy finder mobile application built with Flutter. MVP featuring user matching based on travel preferences and destinations.",
    tech: ["Flutter", "Dart", "Mobile Development"],
    github: "https://github.com/1dhanshree",
    featured: true,
    icon: Puzzle,
  },
  {
    title: "Luxeaura Cosmetics Website",
    description:
      "A modern, responsive e-commerce website for a cosmetics brand featuring product showcases and elegant UI design.",
    tech: ["HTML", "CSS", "JavaScript", "Web Development"],
    github: "https://github.com/1dhanshree",
    featured: true,
    icon: Puzzle,
  },
  {
    title: "NeuroSense: EEG Motor Imagery Classification",
    description:
      "BCI platform achieving high classification accuracy using SVM and GANs for data augmentation. Includes real-time visualization interface built with Streamlit.",
    tech: ["Python", "Scikit-learn", "Streamlit", "SVM", "GANs"],
    github: "https://github.com/1dhanshree",
    featured: true,
    icon: Puzzle,
  },
  {
    title: "E-commerce Sales Analysis",
    description:
      "Analyzed sales data to identify revenue trends and seasonal patterns. Delivered insights that could improve revenue forecasting accuracy.",
    tech: ["Python", "Pandas", "Seaborn", "Data Analysis"],
    github: "https://github.com/1dhanshree",
    icon: Puzzle,
  },
  {
    title: "Housing Price Prediction Model",
    description:
      "Designed and implemented ML regression models to predict housing prices using feature engineering and model optimization.",
    tech: ["Python", "Scikit-learn", "Machine Learning"],
    github: "https://github.com/1dhanshree",
    icon: Puzzle,
  },
  {
    title: "Customer Segmentation",
    description:
      "Implemented K-Means clustering to segment customers based on spending patterns and income, enabling targeted marketing insights.",
    tech: ["Python", "K-Means", "Clustering", "Marketing Analytics"],
    github: "https://github.com/1dhanshree",
    icon: Puzzle,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent flex-1 max-w-16" />
          <div className="flex items-center gap-2">
            <Sparkles className="text-primary" size={18} />
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Projects</h2>
          </div>
          <div className="h-px bg-gradient-to-r from-primary/50 via-border to-transparent flex-1" />
        </div>

        {projects
          .filter((p) => p.highlight)
          .map((project) => (
            <div key={project.title} className="mb-12 relative group">
              {/* Cosmic glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500" />

              <div className="relative bg-card/90 backdrop-blur-sm border border-primary/40 rounded-2xl p-8 hover:border-primary/70 transition-all duration-500 overflow-hidden">
                {/* Animated shimmer */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer pointer-events-none" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-colors">
                      <project.icon className="text-primary" size={28} />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-primary bg-primary/15 px-4 py-1.5 rounded-full border border-primary/30">
                      Latest Project
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg max-w-3xl">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="bg-primary/15 text-primary px-4 py-1.5 rounded-full text-sm font-mono border border-primary/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/40"
                    >
                      <Github size={18} />
                      View on GitHub
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {projects
            .filter((p) => p.featured && !p.highlight)
            .map((project, index) => (
              <div
                key={project.title}
                className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-500 group hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/15 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer pointer-events-none" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <project.icon size={20} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline text-sm group-hover:gap-3 transition-all"
                  >
                    View on GitHub
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-muted-foreground text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-accent rounded-full" />
          Other Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <div
                key={project.title}
                className="bg-card/60 backdrop-blur-sm border border-border rounded-lg p-4 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <project.icon size={16} className="text-primary" />
                    <h4 className="font-medium text-sm group-hover:text-primary transition-colors">{project.title}</h4>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={16} />
                  </a>
                </div>
                <p className="text-muted-foreground text-xs mb-3 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 2).map((t) => (
                    <span key={t} className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
