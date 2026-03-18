import { useState } from "react"
import { motion } from "framer-motion"
import { Award, Calendar, ExternalLink } from "lucide-react"
import Modal from "./ui/Modal"

const certs = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    date: "September 2025",
    highlight: true,
    image: "/certs/oracle-genai.jpg", // Placeholder path
  },
  {
    title: "AWS Solution Architect Micro Degree",
    issuer: "Edyoda",
    date: "April 2024",
    highlight: true,
    image: "/certs/aws-edyoda.jpg",
  },
  {
    title: "JavaScript Essentials",
    issuer: "NxtWave",
    date: "September 2025",
    highlight: false,
    image: "/certs/javascript.jpg",
  },
  {
    title: "Programming Foundations with Python",
    issuer: "NxtWave",
    date: "July 2024",
    highlight: false,
    image: "/certs/python.jpg",
  },
  {
    title: "Introduction to Databases (SQL)",
    issuer: "NxtWave",
    date: "May 2024",
    highlight: false,
    image: "/certs/sql.jpg",
  },
]

export default function Certificates() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="certificates" className="py-32 bg-bg">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <h2 className="section-title mb-3">Certificates</h2>
          <p className="section-subtitle max-w-xl">Professional certifications and micro-degrees in AI, Cloud, and Software Development.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`p-6 rounded-2xl border flex flex-col h-full group ${
                c.highlight 
                  ? "border-accent/30 bg-accent/[0.02] shadow-[0_4px_24px_-12px_rgba(99,102,241,0.15)]" 
                  : "border-border bg-white"
              }`}
            >
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${c.highlight ? "bg-accent/10 text-accent" : "bg-surface text-muted"}`}>
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-heading leading-snug mb-1.5">{c.title}</h3>
                    <p className="text-sm font-medium text-muted">{c.issuer}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-5 mt-4 border-t border-border/60">
                <span className="text-xs text-muted flex items-center gap-1.5">
                  <Calendar size={12} /> {c.date}
                </span>
                <button 
                  onClick={() => setSelected(c)}
                  className="text-xs font-semibold text-accent flex items-center gap-1.5 hover:text-accent-hover transition-colors"
                >
                  <ExternalLink size={12} /> View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div className="flex flex-col h-full max-h-[80vh]">
            <div className="mb-5">
              <h2 className="text-xl font-bold text-heading mb-1 pr-8 leading-tight">{selected.title}</h2>
              <p className="text-accent text-sm font-medium">{selected.issuer} · {selected.date}</p>
            </div>
            
            <div className="flex-1 overflow-auto rounded-xl border border-border bg-surface flex items-center justify-center p-4 min-h-[300px]">
              {/* Fallback styling for when image is missing / placeholder */}
              <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
                <img 
                  src={selected.image} 
                  alt={`${selected.title} Certificate`}
                  className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-sm"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 flex-col items-center justify-center text-center p-6 text-muted">
                  <Award size={48} className="mb-4 opacity-20" />
                  <p className="text-sm">Image placeholder for</p>
                  <p className="text-xs font-medium mt-1 uppercase tracking-wider">{selected.title}</p>
                  <p className="text-[10px] mt-4 opacity-60">Add image to /public{selected.image}</p>
                </div>
              </div>
            </div>
            
            <div className="pt-5 mt-5 border-t border-border flex justify-end">
              <button onClick={() => setSelected(null)} className="btn-outline text-sm py-2 px-5">Close</button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
