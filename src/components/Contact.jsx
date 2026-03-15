import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, Send, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [status, setStatus] = useState("idle") // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")
    
    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch("https://formspree.io/f/chiranjeevig552005@gmail.com", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      })
      
      if (res.ok) {
        setStatus("success")
        form.reset()
        setTimeout(() => setStatus("idle"), 5000)
      } else {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 4000)
      }
    } catch {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 4000)
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="section-title mb-3">Get in Touch</h2>
          <p className="section-subtitle max-w-xl">
            I'm open to new opportunities in AI, ML, and software engineering. Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="card p-6 space-y-5">
              <a href="mailto:chiranjeevig552005@gmail.com" className="flex items-center gap-4 text-text-secondary hover:text-text-primary transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors">
                  <Mail size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-text-muted mb-0.5">Email</p>
                  <p className="text-sm">chiranjeevig552005@gmail.com</p>
                </div>
              </a>

              <a href="tel:+918121649318" className="flex items-center gap-4 text-text-secondary hover:text-text-primary transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors">
                  <Phone size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-text-muted mb-0.5">Mobile</p>
                  <p className="text-sm">+91-8121649318</p>
                </div>
              </a>
            </div>

            <div className="card p-6">
              <p className="text-xs text-text-muted uppercase tracking-wider mb-4">Socials</p>
              <div className="flex gap-3">
                <a href="https://github.com/chiru5190" target="_blank" rel="noreferrer"
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-text-muted hover:text-text-primary hover:border-accent/30 transition-all">
                  <Github size={18} />
                </a>
                <a href="http://www.linkedin.com/in/gedelachiranjeevi" target="_blank" rel="noreferrer"
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-text-muted hover:text-[#0a66c2] hover:border-[#0a66c2]/30 transition-all">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="card p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-text-muted uppercase tracking-wider mb-2">Name</label>
                  <input 
                    type="text" id="name" name="name" required
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-text-muted uppercase tracking-wider mb-2">Email</label>
                  <input 
                    type="email" id="email" name="email" required
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-text-muted uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  id="message" name="message" rows="5" required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              {status === "success" ? (
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium py-3">
                  <CheckCircle size={18} />
                  Message sent successfully! I'll get back to you soon.
                </div>
              ) : status === "error" ? (
                <div className="text-red-400 text-sm py-3">
                  Something went wrong. Please try emailing directly.
                </div>
              ) : (
                <button type="submit" disabled={status === "sending"}
                  className="btn-primary flex items-center gap-2 text-sm disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                  <Send size={14} />
                </button>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
