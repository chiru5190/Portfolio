import { motion } from "framer-motion"
import { Github, ExternalLink, ArrowRight } from "lucide-react"

const steps = [
  { label: "Yahoo Finance API", sub: "Data Source" },
  { label: "Data Ingestion", sub: "Python Scripts" },
  { label: "Processing", sub: "Pandas · Feature Eng." },
  { label: "SQLite DB", sub: "Structured Storage" },
  { label: "Dashboard", sub: "Streamlit · Plotly" },
]

export default function FeaturedProject() {
  return (
    <section id="featured" className="py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">Case Study</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight mb-4">NSE Stock Data Pipeline</h2>
          <p className="text-muted text-lg max-w-2xl mb-14">
            An end-to-end ETL pipeline for automated stock market data collection, processing, and visualization.
          </p>
        </motion.div>

        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-3">Problem</h3>
            <p className="text-body leading-relaxed">
              Stock market data from Indian exchanges is fragmented across multiple sources, making it difficult to track price patterns, calculate volatility metrics, and gain actionable insights without manual effort.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}>
            <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-3">Solution</h3>
            <p className="text-body leading-relaxed">
              Built a modular ETL pipeline that automatically collects daily stock data via the Yahoo Finance API, engineers features like daily returns and rolling volatility, stores everything in a structured SQLite database, and delivers real-time insights through an interactive Streamlit dashboard.
            </p>
          </motion.div>
        </div>

        {/* Architecture Diagram */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-6">System Architecture</h3>
          <div className="bg-bg border border-border rounded-xl p-6 md:p-8 overflow-x-auto">
            <div className="flex items-center gap-0 min-w-[640px]">
              {steps.map((step, i) => (
                <div key={step.label} className="flex items-center">
                  <div className="flex flex-col items-center text-center w-28">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-lg font-bold mb-2 ${
                      i === 0 ? "bg-accent/10 text-accent border border-accent/20" :
                      i === steps.length - 1 ? "bg-emerald-50 text-emerald-600 border border-emerald-200" :
                      "bg-surface border border-border text-heading"
                    }`}>
                      {i + 1}
                    </div>
                    <span className="text-xs font-semibold text-heading leading-tight">{step.label}</span>
                    <span className="text-[10px] text-muted mt-0.5">{step.sub}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <ArrowRight size={16} className="text-border mx-1 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Challenges & Results */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-3">Key Challenges</h3>
            <ul className="space-y-2 text-body text-sm">
              <li className="flex items-start gap-2"><span className="text-accent mt-1">—</span> Handling inconsistent API responses and missing data points</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1">—</span> Designing a schema flexible enough for multiple stock symbols</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1">—</span> Balancing dashboard load performance with data granularity</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}>
            <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-3">Results</h3>
            <ul className="space-y-2 text-body text-sm">
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">—</span> Automated daily data collection with zero manual intervention</li>
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">—</span> Calculated daily returns, volatility, and moving averages</li>
              <li className="flex items-start gap-2"><span className="text-emerald-500 mt-1">—</span> Interactive Plotly charts with multi-stock comparison</li>
            </ul>
          </motion.div>
        </div>

        {/* Tech Stack & Buttons */}
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-center gap-6 pt-6 border-t border-border">
          <p className="text-xs text-muted">Python · Pandas · SQLite · Streamlit · Plotly · yfinance</p>
          <div className="flex gap-3">
            <a href="https://github.com/chiru5190" target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-1.5 text-sm"><Github size={14} /> GitHub</a>
            <span className="text-xs text-muted border border-border rounded-md px-3 py-2 flex items-center gap-1.5"><ExternalLink size={12} /> Demo Soon</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
