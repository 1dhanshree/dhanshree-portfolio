"use client"

import { Award } from "lucide-react"

const certifications = [
  {
    title: "Introduction to Frontend Development",
    issuer: "Meta (Coursera)",
    icon: Award,
  },
  {
    title: "Introduction to Machine Learning",
    issuer: "Kaggle",
    icon: Award,
  },
  {
    title: "Introduction to Deep Learning",
    issuer: "Kaggle",
    icon: Award,
  },
]

export default function Certifications() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent flex-1 max-w-16" />
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Certifications</h2>
          <div className="h-px bg-gradient-to-r from-border via-border to-transparent flex-1" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <cert.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
              <p className="text-muted-foreground text-sm flex items-center gap-2">
                <span>{cert.issuer}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
