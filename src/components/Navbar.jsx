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
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.nav 
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/90 backdrop-blur-md border-b border-border/50 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        <a href="#" className="text-lg font-semibold text-text-primary tracking-tight">
          GC<span className="text-accent">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="/Portfolio/resume.pdf" download
            className="flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover transition-colors"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        {/* Socials */}
        <div className="hidden md:flex items-center gap-3">
          <a href="https://github.com/chiru5190" target="_blank" rel="noreferrer"
            className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-card transition-all">
            <Github size={18} />
          </a>
          <a href="http://www.linkedin.com/in/gedelachiranjeevi" target="_blank" rel="noreferrer"
            className="p-2 rounded-lg text-text-muted hover:text-[#0a66c2] hover:bg-card transition-all">
            <Linkedin size={18} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-text-secondary" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map(link => (
                <a key={link.name} href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-text-secondary hover:text-text-primary py-2 text-lg"
                >
                  {link.name}
                </a>
              ))}
              <a href="/Portfolio/resume.pdf" download
                className="flex items-center gap-2 text-accent py-2 text-lg"
              >
                <Download size={16} /> Resume
              </a>
              <div className="flex gap-4 pt-4 border-t border-border">
                <a href="https://github.com/chiru5190" className="text-text-muted hover:text-text-primary">
                  <Github size={22} />
                </a>
                <a href="http://www.linkedin.com/in/gedelachiranjeevi" className="text-text-muted hover:text-[#0a66c2]">
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
