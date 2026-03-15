import { motion } from "framer-motion"
import { Code2, BrainCircuit, Globe, Database, GitBranch } from "lucide-react"

const skillCategories = [
  {
    title: "Programming",
    icon: <Code2 size={18} />,
    skills: ["Python", "C++", "JavaScript"]
  },
  {
    title: "Machine Learning",
    icon: <BrainCircuit size={18} />,
    skills: ["TensorFlow", "Scikit-learn", "NumPy", "Pandas", "NLP"]
  },
  {
    title: "Web Development",
    icon: <Globe size={18} />,
    skills: ["ReactJS", "Flask", "Streamlit", "HTML", "CSS", "Bootstrap"]
  },
  {
    title: "Databases",
    icon: <Database size={18} />,
    skills: ["SQL", "MySQL", "SQLite"]
  },
  {
    title: "Tools",
    icon: <GitBranch size={18} />,
    skills: ["Git", "GitHub", "AWS", "Google Colab"]
  }
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
          <p className="section-subtitle max-w-xl">Technologies and tools I work with regularly.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card p-6"
            >
              <div className="flex items-center gap-2.5 mb-5">
                <span className="text-accent">{category.icon}</span>
                <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span key={skill}
                    className="px-3 py-1.5 text-sm text-text-secondary bg-background rounded-md border border-border/50 hover:text-text-primary hover:border-accent/30 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
