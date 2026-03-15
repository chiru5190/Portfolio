import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full relative py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 md:p-16 relative overflow-hidden text-center"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0 pointer-events-none"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          
          <p className="max-w-xl mx-auto text-gray-400 mb-12 text-lg">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, feel free to drop a message!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="mailto:chiranjeevig552005@gmail.com" 
              className="flex items-center gap-3 px-6 py-4 glass hover:bg-white/10 transition-colors rounded-2xl group border border-white/10"
            >
              <div className="p-3 bg-red-500/10 text-red-400 rounded-xl group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-400">Email Me</div>
                <div className="text-white font-medium">chiranjeevig552005@gmail.com</div>
              </div>
            </a>
            
            <a 
              href="tel:+918121649318" 
              className="flex items-center gap-3 px-6 py-4 glass hover:bg-white/10 transition-colors rounded-2xl group border border-white/10"
            >
              <div className="p-3 bg-green-500/10 text-green-400 rounded-xl group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-400">Call Me</div>
                <div className="text-white font-medium">+91-8121649318</div>
              </div>
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-12">
            <a href="https://github.com/chiru5190" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full glass border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all text-gray-300 hover:text-white">
              <Github className="w-6 h-6" />
            </a>
            <a href="http://www.linkedin.com/in/gedelachiranjeevi" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full glass border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all text-gray-300 hover:text-white">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
