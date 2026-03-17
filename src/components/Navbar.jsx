import { Github, Linkedin, Menu, X, Download } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.4 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-border py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-lg font-bold text-heading">GC<span className="text-accent">.</span></a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <a key={l.name} href={l.href} className="text-sm text-muted hover:text-heading transition-colors">{l.name}</a>
          ))}
          <a href="/Portfolio/resume.pdf" download className="flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover transition-colors font-medium">
            <Download size={14} /> Resume
          </a>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <a href="https://github.com/chiru5190" target="_blank" rel="noreferrer" className="p-2 rounded-lg text-muted hover:text-heading hover:bg-bg transition-all"><Github size={18} /></a>
          <a href="http://www.linkedin.com/in/gedelachiranjeevi" target="_blank" rel="noreferrer" className="p-2 rounded-lg text-muted hover:text-accent hover:bg-bg transition-all"><Linkedin size={18} /></a>
        </div>

        <button className="md:hidden text-muted" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border overflow-hidden">
            <div className="px-6 py-6 space-y-3">
              {navLinks.map(l => (
                <a key={l.name} href={l.href} onClick={() => setOpen(false)} className="block text-body hover:text-heading py-2">{l.name}</a>
              ))}
              <a href="/Portfolio/resume.pdf" download className="flex items-center gap-2 text-accent py-2 font-medium"><Download size={16} /> Resume</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
