import { motion } from "framer-motion"
import { Code2, Brain } from "lucide-react"

const achievements = [
  {
    Icon: Code2,
    text: "Solved 250+ coding problems across NxtWave and LeetCode",
  },
  {
    Icon: Brain,
    text: "Built a Generative AI application in NxtWave's Generative AI Mega Workshop",
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <h2 className="section-title mb-3">Achievements</h2>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-3 p-5 rounded-xl border border-border flex-1"
            >
              <a.Icon size={18} className="text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-body leading-relaxed">{a.text}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
