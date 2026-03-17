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
    <section id="contact" className="py-32 bg-bg">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <h2 className="section-title mb-3">Get in Touch</h2>
          <p className="section-subtitle max-w-xl">Open to opportunities in AI, ML, and software engineering.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">

          <motion.div initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-5">
            <a href="mailto:chiranjeevig552005@gmail.com" className="flex items-center gap-3 text-body hover:text-heading transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors"><Mail size={16} className="text-accent" /></div>
              <div><p className="text-xs text-muted">Email</p><p className="text-sm font-medium">chiranjeevig552005@gmail.com</p></div>
            </a>
            <a href="https://github.com/chiru5190" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-body hover:text-heading transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors"><Github size={16} className="text-accent" /></div>
              <div><p className="text-xs text-muted">GitHub</p><p className="text-sm font-medium">chiru5190</p></div>
            </a>
            <a href="http://www.linkedin.com/in/gedelachiranjeevi" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-body hover:text-heading transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors"><Linkedin size={16} className="text-accent" /></div>
              <div><p className="text-xs text-muted">LinkedIn</p><p className="text-sm font-medium">gedelachiranjeevi</p></div>
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
            <form ref={formRef} onSubmit={handleSubmit} className="card p-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-1.5">Name</label>
                  <input type="text" name="name" required className="w-full bg-bg border border-border rounded-lg px-4 py-2.5 text-sm text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-1.5">Email</label>
                  <input type="email" name="email" required className="w-full bg-bg border border-border rounded-lg px-4 py-2.5 text-sm text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-1.5">Message</label>
                <textarea name="message" rows="4" required className="w-full bg-bg border border-border rounded-lg px-4 py-2.5 text-sm text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors resize-none" placeholder="How can I help?" />
              </div>
              {status === "success" ? (
                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium py-2"><CheckCircle size={16} /> Sent successfully!</div>
              ) : status === "error" ? (
                <div className="text-red-500 text-sm py-2">Something went wrong. Try emailing directly.</div>
              ) : (
                <button type="submit" disabled={status === "sending"} className="btn-primary flex items-center gap-2 disabled:opacity-50">
                  {status === "sending" ? "Sending..." : "Send Message"} <Send size={14} />
                </button>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
