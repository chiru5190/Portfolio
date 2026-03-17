import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, CheckCircle2, Star } from "lucide-react"
import Modal from "./ui/Modal"

const projects = [
  {
    title: "NSE Stock Data Pipeline",
    shortDesc: "ETL pipeline for collecting and analyzing stock market data.",
    fullDesc: "Built a modular ETL data pipeline to collect, transform, and analyze Indian stock market data with automated collection, feature engineering, and a Streamlit dashboard.",
    features: ["Yahoo Finance API data collection", "Daily price change & volatility metrics", "SQLite structured storage", "Plotly dashboard visualizations"],
    stack: ["Python", "Pandas", "SQLite", "Streamlit", "Plotly"],
    github: "https://github.com/chiru5190", live: null,
    featured: true
  },
  {
    title: "Sentiment Analysis",
    shortDesc: "ML model that classifies text sentiment using TF-IDF and supervised learning.",
    fullDesc: "Sentiment analysis system using TF-IDF features and supervised ML algorithms. Classifies text into sentiment categories in real-time.",
    features: ["NLP preprocessing pipeline", "Multi-class sentiment classification", "Real-time prediction", "Streamlit dashboard"],
    stack: ["Python", "Scikit-learn", "Streamlit"],
    github: "https://github.com/chiru5190", live: null
  },
  {
    title: "Email Classifier",
    shortDesc: "Neural network that categorizes emails using TensorFlow and Flask.",
    fullDesc: "Deep learning model classifying emails into Work, Personal, and Spam categories, served through a Flask API with a responsive frontend.",
    features: ["TensorFlow neural network", "Flask API", "Responsive frontend", "Chart.js visualizations"],
    stack: ["Python", "TensorFlow", "Flask", "JavaScript"],
    github: "https://github.com/chiru5190", live: null
  }
]

const featured = projects.find(p => p.featured)
const otherProjects = projects.filter(p => !p.featured)

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="section-title mb-3">Projects</h2>
          <p className="section-subtitle max-w-xl">Selected work in ML, data engineering, and full-stack development.</p>
        </motion.div>

        {/* Featured Project */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => setSelected(featured)}
            className="card p-8 mb-10 cursor-pointer group bg-bg relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/40" />
            <div className="flex items-center gap-2 mb-4">
              <Star size={14} className="text-accent fill-accent" />
              <span className="text-xs font-semibold text-accent uppercase tracking-widest">Featured Project</span>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-heading mb-3 group-hover:text-accent transition-colors">{featured.title}</h3>
                <p className="text-body leading-relaxed mb-6">{featured.fullDesc}</p>
                <div className="flex flex-wrap gap-2" onClick={e => e.stopPropagation()}>
                  <a href={featured.github} target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-1.5 !text-xs !px-3 !py-1.5"><Github size={13} /> GitHub</a>
                  {featured.live ? (
                    <a href={featured.live} target="_blank" rel="noreferrer" className="btn-primary flex items-center gap-1.5 !text-xs !px-3 !py-1.5"><ExternalLink size={13} /> Live Demo</a>
                  ) : (
                    <span className="text-xs text-muted border border-border rounded-md px-3 py-1.5">Demo Soon</span>
                  )}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Key Features</h4>
                <div className="space-y-2">
                  {featured.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-body">{f}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-border">
                  <p className="text-xs text-muted">{featured.stack.join(" · ")}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              onClick={() => setSelected(p)} className="card p-6 flex flex-col h-full group cursor-pointer bg-bg">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-heading mb-2 group-hover:text-accent transition-colors">{p.title}</h3>
                <p className="text-sm text-muted mb-4 leading-relaxed">{p.shortDesc}</p>
                <p className="text-xs text-muted">{p.stack.join(" · ")}</p>
              </div>
              <div className="flex items-center gap-2 pt-4 mt-4 border-t border-border" onClick={e => e.stopPropagation()}>
                <a href={p.github} target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-1.5 !text-xs !px-3 !py-1.5"><Github size={13} /> GitHub</a>
                {p.live ? (
                  <a href={p.live} target="_blank" rel="noreferrer" className="btn-primary flex items-center gap-1.5 !text-xs !px-3 !py-1.5"><ExternalLink size={13} /> Live Demo</a>
                ) : (
                  <span className="text-xs text-muted border border-border rounded-md px-3 py-1.5">Demo Soon</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div>
            <h2 className="text-xl font-bold text-heading mb-1 pr-8">{selected.title}</h2>
            <p className="text-accent text-sm mb-5">{selected.shortDesc}</p>
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Overview</h4>
                <p className="text-body text-sm leading-relaxed">{selected.fullDesc}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Features</h4>
                {selected.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 mb-1.5">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-body">{f}</span>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Stack</h4>
                <p className="text-sm text-body">{selected.stack.join(" · ")}</p>
              </div>
              <div className="pt-3 border-t border-border">
                <a href={selected.github} target="_blank" rel="noreferrer" className="btn-primary inline-flex items-center gap-2 text-sm"><Github size={16} /> Source Code</a>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
