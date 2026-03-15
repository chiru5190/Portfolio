import { Github, Linkedin, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" }
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-navbar py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
            GC
          </div>
          <span className="text-xl font-bold font-sans tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all">
            Chiranjeevi
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-6 text-sm font-medium text-gray-300">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="hover:text-white hover:-translate-y-0.5 transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 pl-6 border-l border-white/10">
            <a href="https://github.com/chiru5190" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20}/>
            </a>
            <a href="http://www.linkedin.com/in/gedelachiranjeevi" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0a66c2] transition-colors">
              <Linkedin size={20}/>
            </a>
            <a 
              href="/resume.pdf" 
              className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium text-white backdrop-blur-sm transition-all hover:scale-105"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white text-lg font-medium py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-6 mt-4">
                <a href="https://github.com/chiru5190" className="text-gray-400 hover:text-white">
                  <Github size={24}/>
                </a>
                <a href="http://www.linkedin.com/in/gedelachiranjeevi" className="text-gray-400 hover:text-[#0a66c2]">
                  <Linkedin size={24}/>
                </a>
                <a 
                  href="/resume.pdf" 
                  className="px-6 py-2 ml-auto rounded-lg bg-gradient-to-r from-primary to-secondary text-sm font-medium text-white"
                >
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  )
}
