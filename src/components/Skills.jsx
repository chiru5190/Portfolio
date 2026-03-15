import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C++", "JavaScript"]
  },
  {
    title: "Machine Learning & Data Science",
    skills: ["Scikit-learn", "TensorFlow", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Natural Language Processing"]
  },
  {
    title: "Web Development",
    skills: ["ReactJS", "Flask", "Streamlit", "HTML", "CSS", "Bootstrap"]
  },
  {
    title: "Databases",
    skills: ["SQL", "MySQL", "SQLite"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "AWS", "Google Colab"]
  },
  {
    title: "Core Computer Science",
    skills: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "Object-Oriented Programming"]
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Leadership", "Teamwork", "Time Management", "Problem Solving", "Adaptability"]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none" />

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={category.title}
              className="glass-card p-8 group border border-white/5 hover:border-primary/30"
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                  0{index + 1}
                </span>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 group-hover:border-primary/20 group-hover:text-white transition-colors"
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
