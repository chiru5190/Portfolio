import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"

const certs = [
  { title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional", issuer: "Oracle" },
  { title: "JavaScript Essentials", issuer: "NxtWave" },
  { title: "Programming Foundations with Python", issuer: "NxtWave" },
  { title: "Introduction to Databases (SQL)", issuer: "NxtWave" },
  { title: "AWS Solution Architect Micro Degree", issuer: "AWS" }
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="section-title mb-10">Certificates</h2>
        </motion.div>

        <div className="space-y-3">
          {certs.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="card p-5 flex items-center gap-4"
            >
              <Award size={18} className="text-accent shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-text-primary font-medium truncate">{c.title}</p>
                <p className="text-xs text-text-muted">{c.issuer}</p>
              </div>
              <button className="text-xs text-text-muted hover:text-accent flex items-center gap-1 shrink-0 transition-colors">
                View <ExternalLink size={12} />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
