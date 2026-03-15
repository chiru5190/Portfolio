import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Animated Gradient Background */}
      <div className="hero-gradient-bg" />
      
      {/* Floating Glow Blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      {/* Grid pattern overlay for depth */}
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm font-medium text-gray-300">Available for Opportunities</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
        >
          Hi, I'm <span className="text-gradient">Gedela Chiranjeevi</span>
          <br />
          <span className="text-4xl md:text-6xl text-gray-400 mt-2 block">AI / Machine Learning Engineer</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          I build intelligent systems, data pipelines, and AI-powered applications using machine learning and modern web technologies.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a href="#projects" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-sky-500 text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2 group">
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a href="/Portfolio/resume.pdf" download className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card font-semibold text-white flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-white/5">
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>

        {/* Social Links Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex items-center justify-center gap-4"
        >
          {[
            { href: "https://github.com/chiru5190", icon: <Github size={22} />, hoverColor: "hover:text-white hover:shadow-white/20" },
            { href: "http://www.linkedin.com/in/gedelachiranjeevi", icon: <Linkedin size={22} />, hoverColor: "hover:text-[#0a66c2] hover:shadow-[#0a66c2]/20" },
            { href: "mailto:chiranjeevig552005@gmail.com", icon: <Mail size={22} />, hoverColor: "hover:text-white hover:shadow-white/20" }
          ].map((link, i) => (
            <a key={i} href={link.href} target="_blank" rel="noreferrer"
              className={`p-3.5 rounded-full border border-white/10 bg-white/5 text-gray-400 ${link.hoverColor} hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              {link.icon}
            </a>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
