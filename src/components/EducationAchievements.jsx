import { motion } from "framer-motion"
import { GraduationCap, Code2, Brain } from "lucide-react"

export default function EducationAchievements() {
  return (
    <section id="education" className="py-24 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>

          <div className="flex flex-wrap items-start gap-x-16 gap-y-8">

            {/* Education */}
            <div className="flex items-start gap-3">
              <GraduationCap size={18} className="text-accent mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-heading">B.Tech — Computer Science & Engineering</p>
                <p className="text-xs text-muted">Lovely Professional University · CGPA 7.94 · 2022–2026</p>
              </div>
            </div>

            {/* Achievement 1 */}
            <div className="flex items-start gap-3">
              <Code2 size={18} className="text-accent mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-heading">250+ Coding Problems Solved</p>
                <p className="text-xs text-muted">LeetCode · NxtWave</p>
              </div>
            </div>

            {/* Achievement 2 */}
            <div className="flex items-start gap-3">
              <Brain size={18} className="text-accent mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-heading">Multiple ML Applications Built</p>
                <p className="text-xs text-muted">NLP · Deep Learning · Data Pipelines</p>
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  )
}
