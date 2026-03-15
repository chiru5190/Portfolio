import { motion } from "framer-motion"
import { Code2, Database, BrainCircuit } from "lucide-react"

export default function About() {
  const focuses = [
    {
      icon: <BrainCircuit className="text-primary" size={24} />,
      title: "Machine Learning",
      desc: "Developing and deploying predictive models, NLP pipelines, and deep learning architectures."
    },
    {
      icon: <Database className="text-secondary" size={24} />,
      title: "Data Engineering",
      desc: "Architecting robust ETL pipelines to collect, transform, and store large-scale datasets."
    },
    {
      icon: <Code2 className="text-accent" size={24} />,
      title: "Software Development",
      desc: "Building intuitive, responsive full-stack applications to serve AI models directly to users."
    }
  ]

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                I am a Computer Science student at Lovely Professional University with a deep passion for Machine Learning, Natural Language Processing, and Data Engineering.
              </p>
              <p>
                My focus lies at the intersection of understanding complex data and building applications that make that data actionable. I build AI-powered applications, data pipelines, and interactive analytics dashboards that solve real-world problems.
              </p>
              <p>
                Whether I'm training neural networks with TensorFlow, structuring financial data with Pandas and SQLite, or building rich UI dashboards with React, my goal is to deliver performant, intelligent software.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {focuses.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className="glass-card p-6 flex gap-6 items-start"
              >
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
