"use client"

import { Code, Brain, Wrench, Globe, Zap } from "lucide-react"

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "C++", "Java", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "ML & AI",
    icon: Brain,
    skills: ["Scikit-learn", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    title: "Frontend",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript", "Flutter", "WordPress", "React"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "Google Colab", "Jupyter Notebook", "SQL"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent flex-1 max-w-16" />
          <div className="flex items-center gap-2">
            <Zap className="text-primary" size={18} />
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Skills</h2>
          </div>
          <div className="h-px bg-gradient-to-r from-primary/50 via-border to-transparent flex-1" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-500 group hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/15 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer pointer-events-none" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/15 rounded-lg group-hover:bg-primary/25 transition-colors">
                    <category.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-secondary/80 text-secondary-foreground px-3 py-1 rounded-full text-sm hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-muted-foreground text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full" />
            Core Concepts
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Data Structures & Algorithms",
              "Object-Oriented Programming",
              "Machine Learning",
              "Data Analysis",
              "Statistical Modeling",
              "Responsive Design",
            ].map((concept, index) => (
              <span
                key={concept}
                className="border border-primary/40 text-primary px-4 py-2 rounded-lg text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover:-translate-y-0.5"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {concept}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
