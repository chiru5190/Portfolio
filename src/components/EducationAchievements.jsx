import { motion } from "framer-motion"
import { GraduationCap, Code2, Brain, Award } from "lucide-react"

const items = [
  {
    Icon: GraduationCap,
    title: "B.Tech — Computer Science & Engineering",
    sub: "Lovely Professional University · CGPA 7.94 · 2022–2026",
  },
  {
    Icon: Code2,
    title: "250+ Coding Problems Solved",
    sub: "LeetCode · NxtWave",
  },
  {
    Icon: Brain,
    title: "Multiple ML Applications Built",
    sub: "NLP · Deep Learning · Data Pipelines",
  },
  {
    Icon: Award,
    title: "Certifications in AI & Programming",
    sub: "Machine Learning · Python · Web Development",
  },
]

export default function EducationAchievements() {
  return (
    <section id="education" className="py-24 bg-bg border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-xs font-semibold text-muted uppercase tracking-widest mb-8">Education & Achievements</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map(({ Icon, title, sub }) => (
              <div key={title} className="flex items-start gap-3">
                <Icon size={18} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-heading">{title}</p>
                  <p className="text-xs text-muted mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
