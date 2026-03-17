import { motion } from "framer-motion"

const timeline = [
  { degree: "B.Tech – Computer Science & Engineering", school: "Lovely Professional University", score: "CGPA: 7.94", year: "2022 – 2026" },
  { degree: "Intermediate", school: "Sri Chaitanya Junior College", score: "94.3%", year: "Completed" },
  { degree: "Secondary School", school: "ZP High School", score: "90.5%", year: "Completed" }
]

export default function Education() {
  return (
    <section id="education" className="py-32 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="section-title mb-8">Education</h2>
        </motion.div>
        <div className="space-y-3">
          {timeline.map((edu, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="card p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <div className="sm:w-28 shrink-0 text-xs font-medium text-muted uppercase tracking-wider">{edu.year}</div>
              <div className="flex-1"><h3 className="text-heading font-semibold text-sm mb-0.5">{edu.degree}</h3><p className="text-xs text-muted">{edu.school}</p></div>
              <div className="text-sm font-semibold text-accent">{edu.score}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
