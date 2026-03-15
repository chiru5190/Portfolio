import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, ChevronRight, CheckCircle2 } from "lucide-react"
import Modal from "./ui/Modal"

const projects = [
  {
    title: "NSE Stock Data Pipeline",
    shortDesc: "Built an ETL pipeline to collect, process, and analyze Indian stock market data with a Streamlit dashboard.",
    fullDesc: "Built a modular ETL data pipeline to collect, transform, and analyze Indian stock market data. The pipeline automates data collection, performs feature engineering, and visualizes findings on a modern web dashboard.",
    features: [
      "Automated stock data collection using Yahoo Finance API",
      "Feature engineering including daily price change and volatility metrics",
      "Structured storage using SQLite",
      "Interactive Streamlit dashboard with Plotly visualizations"
    ],
    stack: ["Python", "Pandas", "SQLite", "Streamlit", "Plotly"],
    github: "https://github.com/chiru5190",
    live: null
  },
  {
    title: "Sentiment Analysis",
    shortDesc: "Machine learning model that classifies text sentiment using TF-IDF and supervised learning algorithms.",
    fullDesc: "Developed a sentiment analysis system using TF-IDF features and supervised ML algorithms. The system classifies textual reviews into distinct sentiment categories in real-time with an interactive web interface.",
    features: [
      "NLP preprocessing pipeline",
      "Sentiment classification with multiple algorithms",
      "Real-time text prediction engine",
      "Interactive Streamlit dashboard"
    ],
    stack: ["Python", "Scikit-learn", "Streamlit"],
    github: "https://github.com/chiru5190",
    live: null
  },
  {
    title: "Email Classifier",
    shortDesc: "Neural network model that categorizes emails using TensorFlow and Flask.",
    fullDesc: "Developed a neural network model that classifies incoming emails into Work, Personal, and Spam categories using modern deep learning, served through a Flask API with a responsive frontend.",
    features: [
      "TensorFlow neural network architecture",
      "Flask backend API for inference",
      "Responsive frontend interface",
      "Prediction visualization using Chart.js"
    ],
    stack: ["Python", "TensorFlow", "Flask", "JavaScript"],
    github: "https://github.com/chiru5190",
    live: null
  }
]

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="section-title mb-3">Projects</h2>
          <p className="section-subtitle max-w-xl">Selected work in machine learning, data engineering, and full-stack development.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card p-6 flex flex-col h-full group cursor-pointer"
              onClick={() => setSelected(p)}
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-text-secondary mb-5 leading-relaxed">
                  {p.shortDesc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.stack.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-background border border-border/50 text-text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons visible on card */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <a href={p.github} target="_blank" rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-text-primary transition-colors"
                >
                  <Github size={14} /> GitHub
                </a>
                {p.live ? (
                  <a href={p.live} target="_blank" rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-accent transition-colors"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                ) : (
                  <span className="flex items-center gap-1.5 text-xs text-text-muted">
                    <ExternalLink size={14} /> Coming Soon
                  </span>
                )}
                <span className="ml-auto flex items-center gap-1 text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  Details <ChevronRight size={12} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div className="text-left">
            <h2 className="text-2xl font-bold text-text-primary mb-1 pr-8">{selected.title}</h2>
            <p className="text-accent mb-6">{selected.shortDesc}</p>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-2">Overview</h4>
                <p className="text-text-secondary leading-relaxed">{selected.fullDesc}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">Features</h4>
                <div className="space-y-2">
                  {selected.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-text-secondary">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selected.stack.map(t => (
                    <span key={t} className="px-3 py-1 rounded-md bg-background border border-border text-sm text-text-secondary">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-border">
                <a href={selected.github} target="_blank" rel="noreferrer"
                  className="btn-primary flex items-center gap-2 text-sm">
                  <Github size={16} /> Source Code
                </a>
                {selected.live && (
                  <a href={selected.live} target="_blank" rel="noreferrer"
                    className="btn-outline flex items-center gap-2 text-sm">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
