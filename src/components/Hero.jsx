import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative w-full flex items-center justify-center min-h-[90vh]">
      {/* Animated Background Orbs */}
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/3 -right-10 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="flex flex-col items-center text-center z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 glass bg-white/5"
        >
          <span className="text-sm font-medium tracking-wide">Machine Learning & NLP Developer</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Hi, I'm <span className="text-gradient">Gedela Chiranjeevi</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed"
        >
          I design and build AI-powered applications, data pipelines, and intelligent systems using Python, Machine Learning, and modern web technologies.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#projects" className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all group">
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 glass border border-white/10 hover:bg-white/10 text-white px-6 py-3 rounded-full font-medium transition-all">
            <Download className="w-4 h-4" />
            Resume
          </a>

          <div className="flex gap-4 sm:ml-4">
            <a href="https://github.com/chiru5190" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass border border-white/10 hover:bg-white/10 hover:text-primary transition-all text-gray-300">
              <Github className="w-5 h-5" />
            </a>
            <a href="http://www.linkedin.com/in/gedelachiranjeevi" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass border border-white/10 hover:bg-white/10 hover:text-primary transition-all text-gray-300">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
