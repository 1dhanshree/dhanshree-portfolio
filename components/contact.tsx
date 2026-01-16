"use client"

import { Mail, MapPin, Phone, Github, Linkedin, Send, Orbit } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-card/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent flex-1 max-w-16" />
          <div className="flex items-center gap-2">
            <Orbit className="text-primary" size={18} />
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Contact</h2>
          </div>
          <div className="h-px bg-gradient-to-r from-primary/50 via-border to-transparent flex-1" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-balance">Let's work together</h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I'm currently looking for <span className="text-primary font-medium">internship opportunities</span> in
              Web Development and AI/ML. If you have a project or opportunity you'd like to discuss, feel free to reach
              out!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:gaikwadhanshree2112004@gmail.com"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-all duration-300 group"
              >
                <div className="bg-card/80 border border-border p-3 rounded-lg group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                  <Mail size={20} />
                </div>
                <span>gaikwadhanshree2112004@gmail.com</span>
              </a>

              <a
                href="tel:9322542913"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-all duration-300 group"
              >
                <div className="bg-card/80 border border-border p-3 rounded-lg group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                  <Phone size={20} />
                </div>
                <span>+91 9322542913</span>
              </a>

              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="bg-card/80 border border-border p-3 rounded-lg">
                  <MapPin size={20} />
                </div>
                <span>Maharashtra, India</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://github.com/1dhanshree"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card/80 border border-border p-3 rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/dhanshree-gaikwad-52137b245/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card/80 border border-border p-3 rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer pointer-events-none" />

            <div className="relative">
              <h4 className="text-xl font-semibold mb-6">Send a message</h4>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-background/80 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-background/80 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-background/80 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300 resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 font-medium hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
