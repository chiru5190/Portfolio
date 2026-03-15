import { motion } from "framer-motion"

const achievements = [
  { stat: "250+", label: "Coding problems solved across LeetCode and NxtWave" },
  { stat: "Gen AI", label: "Built a Generative AI application at NxtWave Workshop" }
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="section-title mb-10">Achievements</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card p-6 text-center"
            >
              <p className="text-3xl font-bold text-accent mb-2">{a.stat}</p>
              <p className="text-sm text-text-secondary">{a.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
