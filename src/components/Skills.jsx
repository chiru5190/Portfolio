import { motion } from "framer-motion"
import { 
  Database, Server, Layout, PenTool, GitBranch, Github as GitIcon, 
  Cloud, Terminal, LineChart, Code2, Cpu, CheckCircle2 
} from "lucide-react"

/* ── Core Stack ── */
const coreStack = [
  { name: "Python", context: "Data Analysis & ML", icon: "devicon-python-plain" },
  { name: "SQL", context: "Data Extraction", icon: "devicon-azuresqldatabase-plain" },
  { name: "TensorFlow", context: "Deep Learning", icon: "devicon-tensorflow-original" },
  { name: "Scikit-learn", context: "Machine Learning", icon: "devicon-scikitlearn-plain" },
  { name: "NLP", context: "Text Processing", icon: "devicon-google-plain" }, // Using a generic or related icon since NLP isn't standard in devicon
]

/* ── Technical Proficiencies ── */
const techGroups = [
  {
    title: "Machine Learning & Data",
    icon: <LineChart size={18} className="text-accent" />,
    skills: [
      { name: "NumPy", icon: "devicon-numpy-plain" },
      { name: "Pandas", icon: "devicon-pandas-plain" },
      { name: "Matplotlib", icon: "devicon-matplotlib-plain" },
      { name: "Seaborn", icon: "devicon-python-plain" },
    ],
  },
  {
    title: "Development",
    icon: <Layout size={18} className="text-accent" />,
    skills: [
      { name: "Streamlit", icon: "devicon-streamlit-plain" },
      { name: "Flask", icon: "devicon-flask-original" },
      { name: "React", icon: "devicon-react-original" },
      { name: "HTML5", icon: "devicon-html5-plain" },
      { name: "CSS3", icon: "devicon-css3-plain" },
    ],
  },
  {
    title: "Databases",
    icon: <Database size={18} className="text-accent" />,
    skills: [
      { name: "MySQL", icon: "devicon-mysql-plain" },
      { name: "SQLite", icon: "devicon-sqlite-plain" },
    ],
  },
  {
    title: "Tools & Cloud",
    icon: <Cloud size={18} className="text-accent" />,
    skills: [
      { name: "Git", icon: "devicon-git-plain" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
      { name: "Google Colab", icon: "devicon-google-plain" },
    ],
  },
]

/* ── Proof-Based Soft Skills ── */
const softSkills = [
  {
    title: "Problem Solving",
    proof: "Engineered scalable data pipelines handling thousands of daily stock records.",
    icon: <Cpu size={16} className="text-muted group-hover:text-accent transition-colors" />
  },
  {
    title: "Leadership & Teamwork",
    proof: "Led a team of 3 in developing an ML-based sentiment analysis integration.",
    icon: <CheckCircle2 size={16} className="text-muted group-hover:text-accent transition-colors" />
  },
  {
    title: "Cross-functional Communication",
    proof: "Translated complex ML models into interactive, easy-to-understand Streamlit dashboards.",
    icon: <PenTool size={16} className="text-muted group-hover:text-accent transition-colors" />
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-surface relative z-10">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="section-title mb-3">Skills & Expertise</h2>
          <p className="section-subtitle max-w-2xl">
            I work across the full machine learning pipeline — from data processing to model training and deployment.
          </p>
        </motion.div>

        {/* Core Stack - High Visual Priority */}
        <div className="mb-20">
          <h3 className="text-xs font-bold text-muted uppercase tracking-widest mb-6">Core Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {coreStack.map((s, i) => (
              <motion.div 
                key={s.name} 
                initial={{ opacity: 0, y: 15 }} 
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} 
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="card p-5 flex flex-col items-center text-center justify-center cursor-default border-accent/20 bg-accent/[0.02]"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-accent/10 flex items-center justify-center mb-4 shadow-sm">
                  <i className={`${s.icon} text-2xl text-accent`} />
                </div>
                <h4 className="text-base font-bold text-heading mb-1">{s.name}</h4>
                <p className="text-xs font-medium text-muted">{s.context}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Proficiencies - Card Layout */}
        <div className="mb-20">
          <h3 className="text-xs font-bold text-muted uppercase tracking-widest mb-6">Technical Proficiencies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {techGroups.map((group, i) => (
              <motion.div 
                key={group.title} 
                initial={{ opacity: 0, y: 15 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
                  <div className="p-2 rounded-lg bg-accent/10">
                    {group.icon}
                  </div>
                  <h4 className="text-sm font-bold text-heading uppercase tracking-wider">{group.title}</h4>
                </div>
                
                <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-3 text-sm text-body group hover:text-heading transition-colors cursor-default">
                      <i className={`${skill.icon} text-lg text-muted/70 group-hover:text-accent transition-colors`} />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Applied Engineering (Soft Skills translated to Proof) */}
        <div>
          <h3 className="text-xs font-bold text-muted uppercase tracking-widest mb-6">Applied Engineering</h3>
          <div className="grid md:grid-cols-3 gap-5">
            {softSkills.map((s, i) => (
              <motion.div 
                key={s.title} 
                initial={{ opacity: 0, y: 15 }} 
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} 
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -2 }}
                className="card p-5 group flex items-start gap-4"
              >
                <div className="mt-0.5 shrink-0">
                  {s.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-heading mb-1.5 group-hover:text-accent transition-colors">{s.title}</h4>
                  <p className="text-xs text-body leading-relaxed">{s.proof}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
