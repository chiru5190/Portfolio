import { motion } from "framer-motion"
import { Award } from "lucide-react"

const certs = [
  "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
  "JavaScript Essentials – NxtWave",
  "Programming Foundations with Python – NxtWave",
  "Introduction to Databases (SQL) – NxtWave",
  "AWS Solution Architect Micro Degree"
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="section-title mb-10">Certificates</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card p-5 flex items-start gap-3"
            >
              <Award size={18} className="text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-text-secondary leading-relaxed">{cert}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
