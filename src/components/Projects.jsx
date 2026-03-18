import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, CheckCircle2, TrendingUp, Image as ImageIcon } from "lucide-react"
import Modal from "./ui/Modal"

const projects = [
  {
    title: "Sentiment Analysis",
    subtitle: "ML-Based Text Classification",
    image: "/projects/sentiment-analysis.jpg",
    problem: "Manual sentiment analysis is inefficient and doesn't scale for large volumes of text data.",
    solution: "Built an ML model using TF-IDF and supervised learning to classify sentiments automatically with real-time prediction.",
    impact: "Automated analysis of thousands of text records instantly, reducing manual effort significantly.",
    features: [
      "NLP preprocessing (tokenization, stopword removal)",
      "Real-time prediction using Streamlit",
      "Batch text processing",
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
    github: "https://github.com/chiru5190", live: null
  },
  {
    title: "Email Classifier",
    subtitle: "ML-based Email Categorization",
    image: "/projects/email-classifier.jpg",
    problem: "Manual email categorization is time-consuming and error-prone for large inboxes.",
    solution: "Built a neural network model using TensorFlow to classify emails into categories with a Flask backend for real-time inference.",
    impact: "Enabled real-time, high-accuracy categorization, improving overall usability and inbox management.",
    features: [
      "Flask backend for real-time inference",
      "Interactive frontend with HTML/CSS/JS",
      "Visualization of prediction confidence",
    ],
    stack: ["TensorFlow", "Flask", "JS", "Chart.js"],
    github: "https://github.com/chiru5190", live: null
  }
]

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="py-32 bg-surface relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <h2 className="section-title mb-3">What I Have Built</h2>
          <p className="section-subtitle max-w-xl">A selection of end-to-end machine learning systems and full-stack applications.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              onClick={() => setSelected(p)}
              className="card flex flex-col h-full group cursor-pointer overflow-hidden border-border/80">
              
              {/* Project Image Preview */}
              <div className="h-48 bg-surface border-b border-border/60 relative overflow-hidden flex items-center justify-center">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 flex-col items-center justify-center bg-bg/50 text-muted">
                  <ImageIcon size={32} className="opacity-40 mb-2" />
                  <span className="text-[10px] uppercase font-semibold tracking-wider">Image Placeholder</span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-heading mb-1 group-hover:text-accent transition-colors">{p.title}</h3>
                  <p className="text-sm font-medium text-accent mb-5">{p.subtitle}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-body leading-relaxed line-clamp-3">{p.solution}</p>
                  </div>
                  
                  <div className="mb-6 flex items-start gap-2 bg-emerald-50/50 p-3 rounded-lg border border-emerald-100/50">
                    <TrendingUp size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[11px] font-bold text-emerald-700/80 uppercase tracking-wider mb-0.5">Impact</h4>
                      <p className="text-[13px] text-emerald-800/90 leading-snug">{p.impact}</p>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.stack.map(tech => (
                    <span key={tech} className="px-2.5 py-1 text-[11px] font-semibold tracking-wide text-muted bg-surface border border-border/50 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-border/60" onClick={e => e.stopPropagation()}>
                  <a href={p.github} target="_blank" rel="noreferrer" className="btn-outline flex items-center justify-center gap-1.5 flex-1 !text-sm !py-2 hover:bg-accent/5"><Github size={14} /> Code</a>
                  {p.live ? (
                    <a href={p.live} target="_blank" rel="noreferrer" className="btn-primary flex items-center justify-center gap-1.5 flex-1 !text-sm !py-2"><ExternalLink size={14} /> Live</a>
                  ) : (
                    <span className="text-sm text-muted/60 border border-border/50 rounded-lg px-4 py-2 flex-1 text-center bg-surface w-full">Demo Soon</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div className="flex flex-col h-full max-h-[85vh] overflow-y-auto pr-2 custom-scrollbar">
             {/* Modal Header Image */}
             <div className="h-48 md:h-64 rounded-xl overflow-hidden mb-6 relative bg-surface border border-border flex items-center justify-center shrink-0">
                <img 
                  src={selected.image} 
                  alt={selected.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 flex-col items-center justify-center bg-surface/50 text-muted">
                  <ImageIcon size={40} className="opacity-30 mb-3" />
                  <span className="text-xs uppercase font-semibold tracking-wider">Placeholder: /public{selected.image}</span>
                </div>
              </div>

            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-heading mb-1.5 pr-8">{selected.title}</h2>
              <p className="text-accent text-sm md:text-base font-semibold">{selected.subtitle}</p>
            </div>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-[11px] font-bold text-muted uppercase tracking-wider mb-2">Problem</h4>
                  <p className="text-body text-[15px] leading-relaxed">{selected.problem}</p>
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-muted uppercase tracking-wider mb-2">Solution</h4>
                  <p className="text-body text-[15px] leading-relaxed">{selected.solution}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-emerald-50/70 p-4 rounded-xl border border-emerald-100/60">
                <div className="p-2 bg-white rounded-lg shadow-sm shrink-0">
                  <TrendingUp size={18} className="text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-emerald-700/80 uppercase tracking-wider mb-1">Impact</h4>
                  <p className="text-sm md:text-[15px] text-emerald-800/90 leading-relaxed font-medium">{selected.impact}</p>
                </div>
              </div>

              <div>
                <h4 className="text-[11px] font-bold text-muted uppercase tracking-wider mb-3">Key Features</h4>
                <div className="grid sm:grid-cols-2 gap-y-2.5 gap-x-4">
                  {selected.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-[15px] text-body">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[11px] font-bold text-muted uppercase tracking-wider mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selected.stack.map(tech => (
                    <span key={tech} className="px-3 py-1.5 text-xs font-semibold tracking-wide text-heading bg-surface border border-border rounded-lg shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-2 border-t border-border flex justify-between items-center pb-2">
                <a href={selected.github} target="_blank" rel="noreferrer" className="btn-primary inline-flex items-center gap-2 text-sm px-6">
                  <Github size={16} /> View Source Code
                </a>
                <button onClick={() => setSelected(null)} className="text-sm font-semibold text-muted hover:text-heading transition-colors">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
