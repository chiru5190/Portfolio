import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, CheckCircle2 } from "lucide-react"
import Modal from "./ui/Modal"

const projects = [
  {
    title: "Sentiment Analysis Engine",
    problem: "Businesses need to understand customer sentiment at scale, but manually reading reviews is impractical.",
    solution: "Built an NLP pipeline using TF-IDF vectorization and supervised ML classifiers to automatically categorize text sentiments in real-time via a Streamlit dashboard.",
    features: ["NLP preprocessing pipeline", "Multi-class sentiment classification", "Real-time prediction", "Streamlit dashboard"],
    stack: ["Python", "Scikit-learn", "NLTK", "Streamlit"],
    github: "https://github.com/chiru5190", live: null
  },
  {
    title: "Email Classifier",
    problem: "Enterprise inboxes are cluttered with mixed email types, creating delays in responding to critical messages.",
    solution: "Designed a TensorFlow neural network that classifies emails into Work, Personal, and Spam categories, served through a Flask REST API with a responsive frontend.",
    features: ["TensorFlow neural network", "Flask REST API", "Responsive frontend", "Chart.js visualizations"],
    stack: ["Python", "TensorFlow", "Flask", "JavaScript"],
    github: "https://github.com/chiru5190", live: null
  }
]

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="py-32 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <h2 className="section-title mb-3">More Projects</h2>
          <p className="section-subtitle max-w-xl">Other selected work in machine learning and full-stack development.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              onClick={() => setSelected(p)}
              className="card p-6 flex flex-col h-full group cursor-pointer">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-heading mb-3 group-hover:text-accent transition-colors">{p.title}</h3>
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-1.5">Problem</h4>
                  <p className="text-sm text-body leading-relaxed">{p.problem}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-1.5">Solution</h4>
                  <p className="text-sm text-body leading-relaxed">{p.solution}</p>
                </div>
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
            <div className="space-y-4 mt-4">
              <div>
                <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Problem</h4>
                <p className="text-body text-sm leading-relaxed">{selected.problem}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Solution</h4>
                <p className="text-body text-sm leading-relaxed">{selected.solution}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Features</h4>
                {selected.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 mb-1.5">
                    <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
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
