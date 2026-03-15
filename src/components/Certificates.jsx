import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"

const certificates = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    date: "2025"
  },
  {
    title: "JavaScript Essentials",
    issuer: "NxtWave",
    date: ""
  },
  {
    title: "Programming Foundations with Python",
    issuer: "NxtWave",
    date: ""
  },
  {
    title: "Introduction to Databases (SQL)",
    issuer: "NxtWave",
    date: ""
  },
  {
    title: "AWS Solution Architect Micro Degree",
    issuer: "AWS",
    date: ""
  }
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 relative bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Licenses & <span className="text-gradient">Certifications</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Professional certifications and specialized training courses that validate my technical expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 group flex flex-col h-full"
            >
              <div className="mb-6 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                <Award size={24} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-400 font-medium">{cert.issuer}</p>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-sm text-gray-500">{cert.date || "Completed"}</span>
                <button className="text-sm font-medium text-white flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  View <ExternalLink size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
