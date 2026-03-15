import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, CheckCircle2 } from "lucide-react"
import Modal from "./ui/Modal"

const projects = [
  {
    title: "NSE Stock Data Pipeline",
    shortDesc: "ETL pipeline for collecting and analyzing stock market data.",
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
    shortDesc: "ML model that classifies text sentiment using TF-IDF and supervised learning.",
    fullDesc: "Developed a sentiment analysis system using TF-IDF features and supervised ML algorithms. Classifies textual reviews into distinct sentiment categories in real-time.",
    features: [
      "NLP preprocessing pipeline",
      "Sentiment classification with multiple algorithms",
      "Real-time text prediction",
      "Interactive Streamlit dashboard"
    ],
    stack: ["Python", "Scikit-learn", "Streamlit"],
    github: "https://github.com/chiru5190",
    live: null
  },
  {
    title: "Email Classifier",
    shortDesc: "Neural network that categorizes emails using TensorFlow and Flask.",
    fullDesc: "Developed a neural network model that classifies incoming emails into Work, Personal, and Spam categories using deep learning, served through a Flask API.",
    features: [
      "TensorFlow neural network",
      "Flask backend API",
      "Responsive frontend",
      "Chart.js visualizations"
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
          <p className="section-subtitle max-w-xl">Selected work in ML, data engineering, and full-stack development.</p>
        </motion.div>

        <div className="space-y-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => setSelected(p)}
              className="card p-6 cursor-pointer group"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors mb-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-text-secondary mb-3">
                    {p.shortDesc}
                  </p>
                  <span className="text-xs text-text-muted">
                    {p.stack.join(" · ")}
                  </span>
                </div>

                <div className="flex items-center gap-3 shrink-0" onClick={(e) => e.stopPropagation()}>
                  <a href={p.github} target="_blank" rel="noreferrer"
                    className="btn-outline flex items-center gap-1.5 text-xs !px-3 !py-2">
                    <Github size={14} /> GitHub
                  </a>
                  {p.live ? (
                    <a href={p.live} target="_blank" rel="noreferrer"
                      className="btn-primary flex items-center gap-1.5 text-xs !px-3 !py-2">
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  ) : (
                    <span className="text-xs text-text-muted border border-border/50 rounded-md px-3 py-2">
                      Demo Soon
                    </span>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div className="text-left">
            <h2 className="text-2xl font-bold text-text-primary mb-1 pr-8">{selected.title}</h2>
            <p className="text-accent text-sm mb-6">{selected.shortDesc}</p>

            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Overview</h4>
                <p className="text-text-secondary leading-relaxed">{selected.fullDesc}</p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Features</h4>
                <div className="space-y-2">
                  {selected.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-text-secondary">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Stack</h4>
                <p className="text-sm text-text-secondary">{selected.stack.join(" · ")}</p>
              </div>

              <div className="flex gap-3 pt-4 border-t border-border">
                <a href={selected.github} target="_blank" rel="noreferrer" className="btn-primary flex items-center gap-2 text-sm">
                  <Github size={16} /> Source Code
                </a>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
