import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"
import { useState, useRef } from "react"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  const [status, setStatus] = useState("idle")
  const formRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")

    const data = new FormData(formRef.current)

    try {
      // Replace xyzabcde with your Formspree form ID from https://formspree.io
      const res = await fetch("https://formspree.io/f/xyzabcde", {
        method: "POST", body: data, headers: { Accept: "application/json" }
      })
      if (res.ok) {
        setStatus("success")
        formRef.current.reset()
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
    <section id="contact" className="py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <h2 className="section-title mb-3">Get in Touch</h2>
          <p className="section-subtitle max-w-xl mx-auto">Open to opportunities in AI, ML, and software engineering.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-5xl mx-auto items-stretch">
          
          {/* Left: Contact Info */}
          <motion.div initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1 space-y-8 py-4">
            <div>
              <h3 className="text-xl font-bold text-heading mb-6">Let's build something.</h3>
              <p className="text-body leading-relaxed mb-8">
                Whether you have a question, a project idea, or just want to connect, feel free to drop a message.
              </p>
            </div>
            
            <div className="space-y-6">
              <a href="mailto:chiranjeevig552005@gmail.com" className="flex items-center gap-4 text-body hover:text-heading transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center group-hover:border-accent/40 group-hover:shadow-sm transition-all"><Mail size={18} className="text-accent" /></div>
                <div><p className="text-xs text-muted uppercase tracking-wider font-semibold mb-0.5">Email</p><p className="text-sm font-medium">chiranjeevig552005@gmail.com</p></div>
              </a>
              <a href="https://github.com/chiru5190" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-body hover:text-heading transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center group-hover:border-accent/40 group-hover:shadow-sm transition-all"><Github size={18} className="text-accent" /></div>
                <div><p className="text-xs text-muted uppercase tracking-wider font-semibold mb-0.5">GitHub</p><p className="text-sm font-medium">chiru5190</p></div>
              </a>
              <a href="http://www.linkedin.com/in/gedelachiranjeevi" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-body hover:text-heading transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center group-hover:border-accent/40 group-hover:shadow-sm transition-all"><Linkedin size={18} className="text-accent" /></div>
                <div><p className="text-xs text-muted uppercase tracking-wider font-semibold mb-0.5">LinkedIn</p><p className="text-sm font-medium">gedelachiranjeevi</p></div>
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-[1.2] flex">
            <form ref={formRef} onSubmit={handleSubmit} className="bg-white border border-border rounded-2xl p-8 shadow-sm flex flex-col justify-between w-full">
              <div className="space-y-5 mb-8">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-heading ml-1">Name</label>
                    <input type="text" name="name" required className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-heading ml-1">Email</label>
                    <input type="email" name="email" required className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-heading ml-1">Message</label>
                  <textarea name="message" rows="5" required className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none" placeholder="What's on your mind?" />
                </div>
              </div>

              <div className="flex flex-col items-center mt-auto">
                {status === "success" ? (
                  <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium py-3"><CheckCircle size={18} /> Message sent successfully!</div>
                ) : status === "error" ? (
                  <div className="text-red-500 text-sm py-3">Something went wrong. Try emailing directly.</div>
                ) : (
                  <button type="submit" disabled={status === "sending"} className="btn-primary w-full max-w-[240px] flex items-center justify-center gap-2 py-3 disabled:opacity-50 shadow-sm border border-transparent hover:border-accent">
                    {status === "sending" ? "Sending..." : "Send Message"} <Send size={16} />
                  </button>
                )}
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
