import { motion } from "framer-motion"
import { Brain, MessageSquare, Users, Clock, Target, RefreshCw } from "lucide-react"

/* ── Core Stack: the tools that define me ── */
const coreStack = [
  { name: "Python", icon: "devicon-python-plain" },
  { name: "TensorFlow", icon: "devicon-tensorflow-original" },
  { name: "Scikit-learn", icon: "devicon-scikitlearn-plain" },
  { name: "NLP", emoji: "🗣️" },
  { name: "SQL", icon: "devicon-azuresqldatabase-plain" },
]

/* ── Technical Skills grouped into 3 categories ── */
const techGroups = [
  {
    title: "Machine Learning",
    skills: [
      { name: "TensorFlow", icon: "devicon-tensorflow-original" },
      { name: "Scikit-learn", icon: "devicon-scikitlearn-plain" },
      { name: "Pandas", icon: "devicon-pandas-plain" },
      { name: "NumPy", icon: "devicon-numpy-plain" },
      { name: "NLP", emoji: "🗣️" },
    ],
  },
  {
    title: "Development & Tools",
    skills: [
      { name: "React", icon: "devicon-react-original" },
      { name: "Flask", icon: "devicon-flask-original" },
      { name: "Streamlit", icon: "devicon-streamlit-plain" },
      { name: "Git", icon: "devicon-git-plain" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
      { name: "Google Colab", icon: "devicon-google-plain" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "SQL", icon: "devicon-azuresqldatabase-plain" },
      { name: "MySQL", icon: "devicon-mysql-plain" },
      { name: "SQLite", icon: "devicon-sqlite-plain" },
    ],
  },
]

/* ── Soft Skills ── */
const softSkills = [
  { name: "Communication", Icon: MessageSquare },
  { name: "Teamwork", Icon: Users },
  { name: "Problem Solving", Icon: Brain },
  { name: "Leadership", Icon: Target },
  { name: "Time Management", Icon: Clock },
  { name: "Adaptability", Icon: RefreshCw },
]

/* ── Skill grid item ── */
function SkillCell({ skill, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-surface transition-colors duration-150 cursor-default group"
    >
      {skill.icon ? (
        <i className={`${skill.icon} text-lg text-muted group-hover:text-accent transition-colors`} />
      ) : (
        <span className="text-lg leading-none">{skill.emoji}</span>
      )}
      <span className="text-sm text-body group-hover:text-heading transition-colors">{skill.name}</span>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-bg">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <h2 className="section-title mb-3">Skills</h2>
          <p className="section-subtitle max-w-2xl">
            I work across the full machine learning pipeline — from data processing to model training and deployment.
          </p>
        </motion.div>

        {/* ── 1. Core Stack ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-5">Core Stack</h3>
          <div className="flex flex-wrap gap-3">
            {coreStack.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-accent/[0.07] border border-accent/20 text-accent cursor-default hover:bg-accent/[0.12] transition-colors duration-150"
              >
                {s.icon ? (
                  <i className={`${s.icon} text-base`} />
                ) : (
                  <span className="text-base leading-none">{s.emoji}</span>
                )}
                <span className="text-sm font-semibold">{s.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── 2. Technical Skills ── */}
        <div className="mb-14">
          <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-6">Technical Skills</h3>
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-8">
            {techGroups.map((group) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-xs font-medium text-heading/60 uppercase tracking-wider mb-3 pl-4">{group.title}</p>
                <div className="space-y-0.5">
                  {group.skills.map((skill, j) => (
                    <SkillCell key={skill.name} skill={skill} delay={j * 0.03} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── 3. Soft Skills ── */}
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((s, i) => (
              <motion.span
                key={s.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs font-medium text-muted hover:text-body hover:border-border-hover transition-colors cursor-default"
              >
                <s.Icon size={12} />
                {s.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
