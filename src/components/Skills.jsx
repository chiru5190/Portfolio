import { motion } from "framer-motion"

const skillGroups = [
  { label: "Programming", skills: ["Python", "C++", "JavaScript"] },
  { label: "Machine Learning", skills: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "NLP"] },
  { label: "Web Development", skills: ["React", "Flask", "Streamlit", "HTML", "CSS"] },
  { label: "Databases", skills: ["SQL", "MySQL", "SQLite"] },
  { label: "Tools", skills: ["Git", "GitHub", "AWS", "Google Colab"] }
]

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="section-title mb-3">Skills</h2>
          <p className="section-subtitle max-w-xl">Technologies and tools I work with.</p>
        </motion.div>

        <div className="space-y-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6"
            >
              <span className="text-sm font-medium text-accent w-40 shrink-0">
                {group.label}
              </span>
              <span className="text-text-secondary">
                {group.skills.join(" · ")}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
