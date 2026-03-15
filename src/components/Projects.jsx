import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, ChevronRight, CheckCircle2 } from "lucide-react"
import Modal from "./ui/Modal"

const projects = [
  {
    title: "NSE Stock Data Pipeline",
    shortDesc: "End-to-End Data Engineering & Analytics Dashboard",
    fullDesc: "Built a modular ETL data pipeline to collect, transform, and analyze Indian stock market data. The pipeline runs securely and visualizes findings on a modern web dashboard.",
    features: [
      "Automated stock data collection using Yahoo Finance API",
      "Feature engineering including daily price change and volatility metrics",
      "Structured storage using SQLite",
      "Interactive Streamlit dashboard with Plotly visualizations"
    ],
    stack: ["Python", "Pandas", "SQLite", "Streamlit", "Plotly", "yfinance"],
    github: "https://github.com/chiru5190",
  },
  {
    title: "Sentiment Analysis",
    shortDesc: "ML-Based Text Sentiment Classification",
    fullDesc: "Developed a machine learning sentiment analysis system using TF-IDF features and supervised ML algorithms. The system classifies textual reviews and opinions into distinct sentiment categories in real-time.",
    features: [
      "Robust NLP preprocessing pipeline",
      "Sentiment classification (Positive/Negative/Neutral)",
      "Real-time text prediction engine",
      "Interactive Streamlit dashboard for end-users"
    ],
    stack: ["Python", "Scikit-learn", "Streamlit", "Pandas", "NumPy"],
    github: "https://github.com/chiru5190",
  },
  {
    title: "Email Classifier",
    shortDesc: "ML-based Email Categorization System",
    fullDesc: "Developed a neural network model that classifies incoming emails into Work, Personal, and Spam categories using modern deep learning techniques layered inside a microservice architecture.",
    features: [
      "TensorFlow neural network architecture",
      "Flask backend API for inference serving",
      "Responsive frontend interface",
      "Real-time prediction visualization using Chart.js"
    ],
    stack: ["Python", "TensorFlow", "Flask", "JavaScript", "Bootstrap", "Chart.js"],
    github: "https://github.com/chiru5190"
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-24 relative">
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            A selection of my recent engineering work, highlighting skills in machine learning algorithms, data engineering pipelines, and full-stack development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="glass-card group cursor-pointer flex flex-col h-full overflow-hidden"
            >
              {/* Card Header area to simulate an image placeholder or tech banner */}
              <div className="h-48 bg-white/5 border-b border-white/5 flex items-center justify-center p-6 relative overflow-hidden group-hover:bg-primary/5 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-2xl font-bold text-white/40 group-hover:text-white/80 transition-colors text-center relative z-10 font-mono tracking-tighter">
                  {project.stack[0].toUpperCase()}
                </h3>
              </div>
              
              <div className="p-8 flex-1 flex flex-col justify-between relative z-10 bg-surface/50">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>
                
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.slice(0, 3).map(tech => (
                      <span key={tech} className="text-xs font-medium text-secondary bg-secondary/10 px-2.5 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="text-xs font-medium text-gray-400 bg-white/5 px-2.5 py-1 rounded-md">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform">
                    View Project Details <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 pr-10">
              {selectedProject.title}
            </h2>
            <p className="text-xl text-primary mb-8 font-medium">
              {selectedProject.shortDesc}
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Overview</h4>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {selectedProject.fullDesc}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {selectedProject.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                      <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map(tech => (
                    <span key={tech} className="px-3 py-1.5 rounded-lg bg-surface border border-white/10 text-sm text-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                <a 
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-background font-semibold hover:bg-gray-200 transition-colors"
                >
                  <Github size={20} />
                  View Source Code
                </a>
                {/* Placeholder for live demo if available */}
                <button disabled className="flex items-center gap-2 px-6 py-3 rounded-lg glass-card text-gray-400 cursor-not-allowed border-white/5">
                  <ExternalLink size={20} />
                  Live Demo (Coming Soon)
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>

    </section>
  )
}
