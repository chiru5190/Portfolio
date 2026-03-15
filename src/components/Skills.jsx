import { motion } from "framer-motion"
import { 
  Code2, BrainCircuit, Globe, Database, GitBranch, Cpu,
  Users, MessageSquare
} from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 size={20} />,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "C++", icon: "⚡" },
      { name: "JavaScript", icon: "🟨" }
    ]
  },
  {
    title: "ML & Data Science",
    icon: <BrainCircuit size={20} />,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    skills: [
      { name: "Scikit-learn", icon: "🔬" },
      { name: "TensorFlow", icon: "🧠" },
      { name: "NumPy", icon: "🔢" },
      { name: "Pandas", icon: "🐼" },
      { name: "Matplotlib", icon: "📊" },
      { name: "Seaborn", icon: "📈" },
      { name: "NLP", icon: "💬" }
    ]
  },
  {
    title: "Web Development",
    icon: <Globe size={20} />,
    color: "text-sky-400",
    bgColor: "bg-sky-500/10",
    skills: [
      { name: "ReactJS", icon: "⚛️" },
      { name: "Flask", icon: "🌶️" },
      { name: "Streamlit", icon: "🚀" },
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "Bootstrap", icon: "🅱️" }
    ]
  },
  {
    title: "Databases",
    icon: <Database size={20} />,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    skills: [
      { name: "SQL", icon: "🗄️" },
      { name: "MySQL", icon: "🐬" },
      { name: "SQLite", icon: "📦" }
    ]
  },
  {
    title: "Tools & Platforms",
    icon: <GitBranch size={20} />,
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    skills: [
      { name: "Git", icon: "🔀" },
      { name: "GitHub", icon: "🐙" },
      { name: "AWS", icon: "☁️" },
      { name: "Google Colab", icon: "📓" }
    ]
  },
  {
    title: "Core CS",
    icon: <Cpu size={20} />,
    color: "text-rose-400",
    bgColor: "bg-rose-500/10",
    skills: [
      { name: "DSA", icon: "🌲" },
      { name: "DBMS", icon: "🗃️" },
      { name: "OS", icon: "💻" },
      { name: "Networks", icon: "🌐" },
      { name: "OOP", icon: "🧱" }
    ]
  },
  {
    title: "Soft Skills",
    icon: <Users size={20} />,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    skills: [
      { name: "Communication", icon: "🗣️" },
      { name: "Leadership", icon: "👑" },
      { name: "Teamwork", icon: "🤝" },
      { name: "Time Mgmt", icon: "⏰" },
      { name: "Problem Solving", icon: "🧩" },
      { name: "Adaptability", icon: "🔄" }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none" style={{
        background: 'radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.04), transparent 50%)'
      }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Technical & Soft <span className="text-gradient">Skills</span></h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            A comprehensive overview of my technological toolkit and core competencies, built through academic rigor and hands-on project engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              key={category.title}
              className="glass-card glow-card p-6 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2.5 rounded-xl ${category.bgColor} ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              
              {/* Skill Chips */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-sm text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/15 transition-all duration-200 cursor-default"
                  >
                    <span className="text-sm">{skill.icon}</span>
                    {skill.name}
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
