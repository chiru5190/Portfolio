import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left – Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-text-secondary">Open to opportunities</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight leading-[1.1] mb-4">
              Gedela<br />Chiranjeevi
            </h1>
            
            <p className="text-xl text-accent font-medium mb-6">
              AI / Machine Learning Engineer
            </p>

            <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-lg">
              I build machine learning systems, data pipelines, and AI-powered applications using Python and modern web technologies.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary flex items-center gap-2 group">
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href="/Portfolio/resume.pdf" download className="btn-outline flex items-center gap-2">
                <Download size={16} />
                Resume
              </a>
            </div>

            <div className="flex items-center gap-3 mt-8">
              <a href="https://github.com/chiru5190" target="_blank" rel="noreferrer"
                className="p-2.5 rounded-lg border border-border text-text-muted hover:text-text-primary hover:border-accent/30 transition-all">
                <Github size={18} />
              </a>
              <a href="http://www.linkedin.com/in/gedelachiranjeevi" target="_blank" rel="noreferrer"
                className="p-2.5 rounded-lg border border-border text-text-muted hover:text-[#0a66c2] hover:border-[#0a66c2]/30 transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right – Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Soft ambient glow behind image */}
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl scale-75" />
              <img 
                src="/Portfolio/profile.png"
                alt="Gedela Chiranjeevi"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-2 border-border shadow-2xl shadow-black/30"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
