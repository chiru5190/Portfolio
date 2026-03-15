import { motion } from "framer-motion"

const techSkills = [
  {
    title: "Programming Languages",
    skills: [
      { icon: "🐍", name: "Python" },
      { icon: "💻", name: "C++" },
      { icon: "🟨", name: "JavaScript" }
    ]
  },
  {
    title: "Machine Learning",
    skills: [
      { icon: "🧠", name: "TensorFlow" },
      { icon: "📊", name: "Scikit-learn" },
      { icon: "📈", name: "Pandas" },
      { icon: "🔢", name: "NumPy" },
      { icon: "🗣️", name: "NLP" }
    ]
  },
  {
    title: "Web Development",
    skills: [
      { icon: "⚛️", name: "React" },
      { icon: "🌐", name: "Flask" },
      { icon: "🚀", name: "Streamlit" },
      { icon: "🧾", name: "HTML" },
      { icon: "🎨", name: "CSS" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { icon: "🗄️", name: "SQL" },
      { icon: "🗃️", name: "MySQL" },
      { icon: "💾", name: "SQLite" }
    ]
  },
  {
    title: "Tools",
    skills: [
      { icon: "🔧", name: "Git" },
      { icon: "🐙", name: "GitHub" },
      { icon: "☁️", name: "AWS" },
      { icon: "📓", name: "Google Colab" }
    ]
  }
]

const softSkills = [
  { icon: "💬", name: "Communication" },
  { icon: "👥", name: "Teamwork" },
  { icon: "🧠", name: "Problem Solving" },
  { icon: "⏱️", name: "Time Management" },
  { icon: "🎯", name: "Leadership" },
  { icon: "🔄", name: "Adaptability" }
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <h2 className="section-title mb-3">Skills</h2>
          <p className="section-subtitle max-w-xl">Technologies and tools I use to build intelligent systems.</p>
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {techSkills.map((cat, i) => (
            <motion.div key={cat.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="card p-5">
              <h3 className="text-xs font-semibold text-muted uppercase tracking-wider mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(s => (
                  <span key={s.name} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg border border-border text-sm text-body hover:border-accent/30 hover:text-heading transition-colors cursor-default">
                    <span>{s.icon}</span> {s.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-xs font-semibold text-muted uppercase tracking-wider mb-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map(s => (
              <span key={s.name} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border text-sm text-body">
                <span>{s.icon}</span> {s.name}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
