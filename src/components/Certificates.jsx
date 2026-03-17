import { motion } from "framer-motion"
import { Award, Calendar } from "lucide-react"

const certs = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    date: "September 2025",
  },
  {
    title: "JavaScript Essentials",
    issuer: "NxtWave",
    date: "September 2025",
  },
  {
    title: "Programming Foundations with Python",
    issuer: "NxtWave",
    date: "July 2024",
  },
  {
    title: "Introduction to Databases (SQL)",
    issuer: "NxtWave",
    date: "May 2024",
  },
  {
    title: "AWS Solution Architect Micro Degree",
    issuer: "AWS",
    date: "April 2024",
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-28 bg-bg">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="section-title mb-3">Certificates</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="p-5 rounded-xl border border-border hover:border-accent/20 transition-colors group"
            >
              <div className="flex items-start gap-3">
                <Award size={16} className="text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-heading group-hover:text-accent transition-colors leading-snug">{c.title}</h3>
                  <p className="text-xs text-muted mt-1.5">{c.issuer}</p>
                  <p className="text-xs text-muted flex items-center gap-1 mt-1">
                    <Calendar size={10} /> {c.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
