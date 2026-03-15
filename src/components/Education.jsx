import { motion } from "framer-motion"

const timeline = [
  {
    degree: "B.Tech – Computer Science & Engineering",
    school: "Lovely Professional University",
    score: "CGPA: 7.94",
    year: "2022 – 2026"
  },
  {
    degree: "Intermediate",
    school: "Sri Chaitanya Junior College",
    score: "94.3%",
    year: "Completed"
  },
  {
    degree: "Secondary School",
    school: "ZP High School",
    score: "90.5%",
    year: "Completed"
  }
]

export default function Education() {
  return (
    <section id="education" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="section-title mb-10">Education</h2>
        </motion.div>

        <div className="space-y-4">
          {timeline.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
            >
              <div className="sm:w-28 shrink-0 text-xs font-medium text-text-muted uppercase tracking-wider">
                {edu.year}
              </div>
              <div className="flex-1">
                <h3 className="text-text-primary font-semibold mb-1">{edu.degree}</h3>
                <p className="text-sm text-text-secondary">{edu.school}</p>
              </div>
              <div className="text-sm font-semibold text-accent">{edu.score}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
