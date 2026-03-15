import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-full h-96 bg-accent/10 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-4000" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm font-medium text-gray-300">Available for Opportunities</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
        >
          Hi, I'm <span className="text-gradient">Gedela Chiranjeevi</span>
          <br />
          <span className="text-4xl md:text-6xl text-gray-400 mt-2 block">AI / Machine Learning Engineer</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          I build intelligent systems, data pipelines, and AI-powered applications using machine learning and modern web technologies.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a href="#projects" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-background font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2 group">
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a href="/resume.pdf" className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card font-semibold text-white hover:border-white/20 flex items-center justify-center gap-2">
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>

        {/* Social Links Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex items-center justify-center gap-6"
        >
          <a href="https://github.com/chiru5190" className="p-3 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-all">
            <Github size={24} />
          </a>
          <a href="http://www.linkedin.com/in/gedelachiranjeevi" className="p-3 rounded-full hover:bg-white/10 text-gray-400 hover:text-[#0a66c2] transition-all">
            <Linkedin size={24} />
          </a>
          <a href="mailto:chiranjeevig552005@gmail.com" className="p-3 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-all">
            <Mail size={24} />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
