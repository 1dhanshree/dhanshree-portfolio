import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import StarField from "@/components/star-field"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <StarField />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <footer className="border-t border-border py-8 text-center text-muted-foreground relative z-10">
        <p>© 2026 Dhanshree Gaikwad. All rights reserved.</p>
      </footer>
    </main>
  )
}
