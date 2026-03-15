import { motion } from "framer-motion"

const achievements = [
  "Solved 250+ coding problems across NxtWave and LeetCode.",
  "Built a Generative AI application during a NxtWave workshop."
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="section-title mb-6">Achievements</h2>
        </motion.div>
        <div className="space-y-3">
          {achievements.map((a, i) => (
            <motion.p key={i} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-body text-lg pl-5 border-l-2 border-accent/30 leading-relaxed">{a}</motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
