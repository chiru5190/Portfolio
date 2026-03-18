import { motion } from "framer-motion"

/* ── Core Stack ── */
const coreStack = [
  { name: "Python", icon: "devicon-python-plain" },
  { name: "SQL", icon: "devicon-azuresqldatabase-plain" },
  { name: "TensorFlow", icon: "devicon-tensorflow-original" },
  { name: "Scikit-learn", icon: "devicon-scikitlearn-plain" },
  { name: "NLP", emoji: "🗣️" },
]

/* ── Technical Skills ── */
const techGroups = [
  {
    title: "Machine Learning & Data",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    title: "Development",
    skills: ["Streamlit", "Flask", "React", "HTML", "CSS"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "SQLite"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "AWS", "Google Colab"],
  },
]

/* ── Soft Skills ── */
const softSkills = [
  "Problem Solving",
  "Adaptability",
  "Leadership",
  "Communication",
  "Time Management",
  "Teamwork"
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-bg">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <h2 className="section-title mb-3">Skills</h2>
          <p className="section-subtitle max-w-2xl">
            I work across the full machine learning pipeline — from data processing to model training and deployment.
          </p>
        </motion.div>

        {/* Core Stack - Visually Strongest */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-5">Core Stack</h3>
          <div className="flex flex-wrap gap-3">
            {coreStack.map((s, i) => (
              <motion.div key={s.name} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-accent/[0.05] border border-accent/20 text-accent cursor-default shadow-sm hover:bg-accent/[0.08] transition-colors duration-150">
                {s.icon ? <i className={`${s.icon} text-lg`} /> : <span className="text-lg leading-none">{s.emoji}</span>}
                <span className="text-sm font-bold tracking-wide">{s.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills - Cleaner, text-based with subtle bullets */}
        <div className="mb-16">
          <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-8">Technical Proficiencies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {techGroups.map((group, i) => (
              <motion.div key={group.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <p className="text-xs font-bold text-heading mb-4 uppercase tracking-wider">{group.title}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="text-sm text-body flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-border-hover"></span>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills - Visually lighter pills */}
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="pt-8 border-t border-border/50">
          <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-5">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((s, i) => (
              <motion.span key={s} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="inline-flex px-3 py-1 bg-surface rounded-full text-[11px] font-medium text-muted uppercase tracking-widest border border-border/50 cursor-default">
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
