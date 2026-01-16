"use client"

import { FileText, Star, ExternalLink } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent flex-1 max-w-16" />
          <div className="flex items-center gap-2">
            <Star className="text-primary" size={18} />
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground">About</h2>
          </div>
          <div className="h-px bg-gradient-to-r from-primary/50 via-border to-transparent flex-1" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate <span className="text-primary font-medium">Software Engineer</span> and AI & Data Science
              student at Dr. D.Y. Patil College of Engineering and Innovation, Varale. With hands-on experience from
              internships at <span className="text-primary font-medium">Elite Software</span> and <span className="font-medium text-slate-500">MRND Lab</span>, I specialize in building responsive web
              applications and intelligent solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              My expertise spans frontend development with HTML, CSS, JavaScript, and Flutter, combined with backend
              knowledge in Python and SQL. I've also explored the exciting world of Machine Learning, working with
              frameworks like Scikit-learn to build predictive models.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I've published research on EEG Motor Imagery Classification and continue to explore the intersection of AI
              and real-world applications. My latest project, an AI WhatsApp Chat Analyzer, showcases my ability to
              combine web development with AI capabilities.
            </p>
          </div>
         
          <div className="space-y-6">
            <a
              href="https://www.irjmets.com/paperdetail.php?paperId=5ab9f6aebc9b093c61ae79385b8767b6"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-500 group hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer pointer-events-none" />

              <div className="relative">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText size={20} className="text-primary" />
                  Publication
                  <ExternalLink
                    size={16}
                    className="text-muted-foreground group-hover:text-primary transition-colors ml-auto"
                  />
                </h3>
                <p className="text-primary font-medium mb-2 group-hover:text-accent transition-colors">
                  NeuroSense: Enhanced EEG Motor Imagery Classification
                </p>
                <p className="text-muted-foreground text-sm mb-2">IRJMETS, Vol 7, Issue 10</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Authored a research paper on a BCI platform achieving high classification accuracy using SVM and GANs
                  for data augmentation. Developed a real-time visualization interface using Streamlit.
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-primary mt-3 group-hover:underline">
                  View Paper <ExternalLink size={12} />
                </span>
              </div>
            </a>

            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { value: "7+", label: "Projects" },
                { value: "2", label: "Internships" },
                { value: "4+", label: "Certifications" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
