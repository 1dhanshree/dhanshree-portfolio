"use client"

import { Briefcase, Calendar, MapPin, Rocket } from "lucide-react"

const experiences = [
  {
    title: "Web Developer Intern",
    company: "Elite Software",
    location: "Pune",
    period: "May 2024 - July 2024",
    description: [
      "Developed responsive web applications using HTML, CSS, and JavaScript",
      "Collaborated with senior developers on client projects",
      "Implemented UI/UX improvements based on user feedback",
      "Gained hands-on experience with modern web development practices",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "MRND Lab",
    location: "Akurdi",
    period: "Jan 2024 - Mar 2024",
    description: [
      "Built and maintained web interfaces for lab projects",
      "Worked with WordPress for content management solutions",
      "Assisted in frontend development using modern frameworks",
      "Participated in code reviews and team meetings",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent flex-1 max-w-16" />
          <div className="flex items-center gap-2">
            <Rocket className="text-primary" size={18} />
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Experience</h2>
          </div>
          <div className="h-px bg-gradient-to-r from-primary/50 via-border to-transparent flex-1" />
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent hidden md:block">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full animate-pulse-glow" />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.company} className="relative group" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Timeline dot with glow */}
                <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-background border-2 border-primary hidden md:flex items-center justify-center group-hover:scale-125 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-primary/50">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                </div>

                <div className="md:ml-20 bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/60 transition-all duration-500 group-hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden">
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer pointer-events-none" />

                  <div className="relative">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase size={20} className="text-primary" />
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                            {exp.title}
                          </h3>
                        </div>
                        <p className="text-lg text-foreground font-medium">{exp.company}</p>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">
                          <Calendar size={14} className="text-primary" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1 bg-accent/10 px-3 py-1 rounded-full">
                          <MapPin size={14} className="text-accent" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground/80 transition-colors"
                        >
                          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
