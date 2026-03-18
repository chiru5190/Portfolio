import { useState } from "react"
import { motion } from "framer-motion"
import { Award, Calendar, ExternalLink, Cloud, Code, Database, FileBadge } from "lucide-react"
import Modal from "./ui/Modal"

const certs = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    issuerIcon: <Cloud size={14} />,
    date: "September 2025",
    highlight: true,
    image: "/certs/oracle-genai.jpg", 
  },
  {
    title: "AWS Solution Architect Micro Degree",
    issuer: "Edyoda",
    issuerIcon: <Cloud size={14} />,
    date: "April 2024",
    highlight: true,
    image: "/certs/aws-edyoda.jpg",
  },
  {
    title: "JavaScript Essentials",
    issuer: "NxtWave",
    issuerIcon: <Code size={14} />,
    date: "September 2025",
    highlight: false,
    image: "/certs/javascript.jpg",
  },
  {
    title: "Programming Foundations with Python",
    issuer: "NxtWave",
    issuerIcon: <Code size={14} />,
    date: "July 2024",
    highlight: false,
    image: "/certs/python.jpg",
  },
  {
    title: "Introduction to Databases (SQL)",
    issuer: "NxtWave",
    issuerIcon: <Database size={14} />,
    date: "May 2024",
    highlight: false,
    image: "/certs/sql.jpg",
  },
]

export default function Certificates() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="certificates" className="py-32 bg-bg relative z-10">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="section-title mb-3">Certificates</h2>
          <p className="section-subtitle max-w-xl">Professional certifications and Micro-degrees verifying technical capabilities.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`card flex flex-col h-full group overflow-hidden cursor-pointer ${
                c.highlight 
                  ? "border-accent/40 shadow-[0_8px_30px_-12px_rgba(99,102,241,0.2)]" 
                  : ""
              }`}
              onClick={() => setSelected(c)}
            >
              {/* Thumbnail Area */}
              <div className="h-40 bg-surface border-b border-border/60 relative overflow-hidden flex items-center justify-center">
                <img 
                  src={c.image} 
                  alt={c.title} 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 flex-col items-center justify-center bg-surface/50 text-muted">
                  <FileBadge size={32} className="opacity-40 mb-2" />
                  <span className="text-[10px] uppercase font-semibold tracking-wider">Preview Unavailable</span>
                </div>
                
                {c.highlight && (
                  <div className="absolute top-3 right-3 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
                    Top Cert
                  </div>
                )}
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex-1 mb-6">
                  <h3 className="text-base font-bold text-heading leading-tight mb-2 group-hover:text-accent transition-colors">{c.title}</h3>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-muted uppercase tracking-wider">
                    {c.issuerIcon}
                    <span>{c.issuer}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border/60">
                  <span className="text-xs font-medium text-muted flex items-center gap-1.5">
                    <Calendar size={12} className="opacity-70" /> {c.date}
                  </span>
                  <span className="text-xs font-semibold text-accent flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                    View <ExternalLink size={12} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div className="flex flex-col h-full max-h-[85vh]">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-heading mb-1.5 pr-8 leading-tight">{selected.title}</h2>
              <div className="flex items-center gap-2 text-accent text-sm font-semibold">
                {selected.issuerIcon}
                <span>{selected.issuer}</span>
                <span className="text-muted/40">•</span>
                <span className="text-muted">{selected.date}</span>
              </div>
            </div>
            
            <div className="flex-1 overflow-auto rounded-xl border border-border bg-surface flex items-center justify-center p-2 min-h-[300px]">
              <div className="relative w-full h-full min-h-[300px] flex items-center justify-center bg-white rounded-lg shadow-inner overflow-hidden">
                <img 
                  src={selected.image} 
                  alt={`${selected.title} Certificate`}
                  className="max-w-full max-h-[60vh] object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 flex-col items-center justify-center text-center p-8 text-muted bg-surface/50">
                  <Award size={56} className="mb-4 opacity-20" />
                  <p className="text-sm font-medium">Image placeholder for</p>
                  <p className="text-xs font-bold mt-1 uppercase tracking-wider text-heading">{selected.title}</p>
                  <p className="text-[11px] font-medium mt-6 text-muted/60 bg-white px-3 py-1.5 border border-border rounded-md">Save image to <code>/public{selected.image}</code></p>
                </div>
              </div>
            </div>
            
            <div className="pt-5 mt-5 border-t border-border flex justify-end">
              <button onClick={() => setSelected(null)} className="btn-primary text-sm py-2 px-6">Close Preview</button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
