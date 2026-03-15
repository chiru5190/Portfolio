import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Globe, Database, PenTool } from 'lucide-react';

const skillCategories = [
  {
    title: "Machine Learning & Data Science",
    icon: <Brain className="w-6 h-6" />,
    skills: ["Scikit-learn", "TensorFlow", "NLP", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/20"
  },
  {
    title: "Programming Languages",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["Python", "C++", "JavaScript"],
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/20"
  },
  {
    title: "Web Development",
    icon: <Globe className="w-6 h-6" />,
    skills: ["ReactJS", "Flask", "Streamlit", "HTML", "CSS", "Bootstrap"],
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/20"
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6" />,
    skills: ["SQL", "MySQL", "SQLite"],
    color: "from-orange-500/20 to-amber-500/20",
    border: "border-orange-500/20"
  },
  {
    title: "Tools & Platforms",
    icon: <PenTool className="w-6 h-6" />,
    skills: ["Git", "GitHub", "AWS", "Google Colab"],
    color: "from-slate-500/20 to-gray-500/20",
    border: "border-slate-500/20"
  }
];

const Skills = () => {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Technical <span className="text-gradient">Arsenal</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`glass-card p-6 border ${category.border} hover:bg-white/5 transition-colors group`}
          >
            <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} inline-flex mb-4 text-white group-hover:scale-110 transition-transform`}>
              {category.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-200">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-surface/80 rounded-lg text-sm text-gray-400 border border-white/5 group-hover:border-white/10 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
