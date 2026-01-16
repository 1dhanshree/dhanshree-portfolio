"use client"

import { GraduationCap, Calendar } from "lucide-react"

const education = [
  {
    degree: "B.E. in Artificial Intelligence & Data Science",
    institution: "Dr. D.Y. Patil College of Engineering and Innovation, Varale",
    period: "2023 - 2026",
    current: true,
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Dr. D.Y. Patil Pratishtan's Y.B. Patil Polytechnic, Akurdi Pune",
    period: "2020 - 2023",
    current: false,
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent flex-1 max-w-16" />
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Education</h2>
          <div className="h-px bg-gradient-to-r from-border via-border to-transparent flex-1" />
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <GraduationCap size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground md:text-right">
                  <Calendar size={16} />
                  <span>{edu.period}</span>
                  {edu.current && (
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs ml-2 font-medium">
                      Current
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
