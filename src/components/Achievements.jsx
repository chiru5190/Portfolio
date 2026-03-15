import { motion } from "framer-motion"
import { Trophy, Code, Brain } from "lucide-react"

export default function Achievements() {
  const achievements = [
    {
      icon: <Code size={32} className="text-primary" />,
      title: "250+ Coding Problems",
      desc: "Solved over 250 complex algorithmic and data structure problems across LeetCode and NxtWave platforms.",
      stat: "250+"
    },
    {
      icon: <Brain size={32} className="text-secondary" />,
      title: "Generative AI Application",
      desc: "Built and deployed a functional Generative AI application during the highly competitive NxtWave Generative AI Workshop.",
      stat: "AI App"
    }
  ]

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Key <span className="text-gradient">Achievements</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full bg-surface/80 backdrop-blur-xl p-8 rounded-2xl flex flex-col items-center text-center">
                <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10">
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div className="mt-auto px-6 py-2 rounded-full bg-white/5 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold text-lg border border-white/10">
                  {item.stat}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
