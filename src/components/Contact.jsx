import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4 tracking-tight"
          >
            Let's <span className="text-gradient">Connect</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl text-lg"
          >
            I'm currently looking for new opportunities in AI, Machine Learning, and Software Engineering. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a href="mailto:chiranjeevig552005@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-white mb-1">Email</p>
                    <p className="text-sm">chiranjeevig552005<br/>@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+918121649318" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-white mb-1">Mobile</p>
                    <p className="text-sm">+91-8121649318</p>
                  </div>
                </a>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <h3 className="text-lg font-medium text-white mb-6">Social Profiles</h3>
                <div className="flex gap-4">
                  <a href="https://github.com/chiru5190" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all hover:-translate-y-1">
                    <Github size={20} />
                  </a>
                  <a href="http://www.linkedin.com/in/gedelachiranjeevi" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#0a66c2]/20 hover:text-[#0a66c2] hover:border-[#0a66c2]/50 transition-all hover:-translate-y-1">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form className="glass-card p-8 sm:p-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="6"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
