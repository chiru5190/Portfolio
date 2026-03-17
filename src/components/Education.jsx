import { motion } from "framer-motion"
import { GraduationCap, MapPin, Calendar } from "lucide-react"

const schools = [
  {
    degree: "B.Tech — Computer Science and Engineering",
    school: "Lovely Professional University, Punjab",
    score: "CGPA: 7.94",
    period: "August 2023 – Present",
  },
  {
    degree: "Intermediate",
    school: "Sri Chaitanya Junior College, Vijayawada",
    score: "Percentage: 94.3%",
    period: "June 2022 – May 2023",
  },
  {
    degree: "Secondary School",
    school: "ZP High School, Vakatippa",
    score: "Percentage: 90.5%",
    period: "August 2020 – May 2021",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="section-title mb-3">Education</h2>
        </motion.div>

        <div className="space-y-0">
          {schools.map((s, i) => (
            <motion.div
              key={s.degree}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative pl-8 pb-8 last:pb-0 border-l-2 border-border last:border-transparent"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent/20 border-2 border-accent" />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                <div>
                  <h3 className="text-base font-semibold text-heading">{s.degree}</h3>
                  <p className="text-sm text-body flex items-center gap-1.5 mt-0.5">
                    <MapPin size={12} className="text-muted" /> {s.school}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-accent">{s.score}</p>
                  <p className="text-xs text-muted flex items-center gap-1 sm:justify-end mt-0.5">
                    <Calendar size={11} /> {s.period}
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
