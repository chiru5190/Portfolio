import { motion } from "framer-motion"
import { Github, ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react"

const archSteps = [
  { label: "Yahoo Finance API", sub: "Data Source" },
  { label: "Data Extraction", sub: "Python · yfinance" },
  { label: "Data Processing", sub: "Pandas · Feature Eng." },
  { label: "SQLite Database", sub: "Structured Storage" },
  { label: "Streamlit Dashboard", sub: "Plotly Visualizations" },
]

const keyFeatures = [
  "Integrated yfinance API to fetch historical stock data",
  "Implemented feature engineering (price change, volatility metrics)",
  "Built interactive dashboard with Plotly visualizations",
]

const results = [
  "Enabled real-time stock analysis",
  "Improved accessibility of financial insights",
  "Built scalable data pipeline architecture",
]

export default function FeaturedProject() {
  return (
    <section id="projects" className="py-32 bg-bg">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">Featured Project</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight mb-2">NSE Stock Data Pipeline</h2>
          <p className="text-muted text-lg max-w-3xl mb-14">
            End-to-End Data Engineering & Analytics Dashboard
          </p>
        </motion.div>

        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-3">Problem</h3>
            <p className="text-body leading-relaxed">
              Stock market data is fragmented and difficult to analyze manually. Tracking price patterns, calculating volatility metrics, and gaining actionable insights requires significant manual effort.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}>
            <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-3">Solution</h3>
            <p className="text-body leading-relaxed">
              Built a modular ETL pipeline to extract, transform, and store NSE stock data using Python and SQLite. The pipeline collects daily data via Yahoo Finance API, engineers features, and delivers insights through an interactive Streamlit dashboard.
            </p>
          </motion.div>
        </div>

        {/* Architecture */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-6">System Architecture</h3>
          <div className="bg-surface border border-border rounded-xl p-6 md:p-8 overflow-x-auto">
            <div className="flex items-center gap-0 min-w-[680px]">
              {archSteps.map((step, i) => (
                <div key={step.label} className="flex items-center">
                  <div className="flex flex-col items-center text-center w-32">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-lg font-bold mb-2 ${
                      i === 0 ? "bg-accent/10 text-accent border border-accent/20" :
                      i === archSteps.length - 1 ? "bg-emerald-50 text-emerald-600 border border-emerald-200" :
                      "bg-bg border border-border text-heading"
                    }`}>
                      {i + 1}
                    </div>
                    <span className="text-xs font-semibold text-heading leading-tight">{step.label}</span>
                    <span className="text-[10px] text-muted mt-0.5">{step.sub}</span>
                  </div>
                  {i < archSteps.length - 1 && (
                    <ArrowRight size={16} className="text-border mx-1 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Design Decisions */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">Design Decisions</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-surface border border-border rounded-xl p-5">
              <h4 className="text-sm font-semibold text-heading mb-2">SQLite</h4>
              <p className="text-xs text-body leading-relaxed">Chosen for lightweight, serverless local storage, eliminating the need for complex database setups while handling tabular data efficiently.</p>
            </div>
            <div className="bg-surface border border-border rounded-xl p-5">
              <h4 className="text-sm font-semibold text-heading mb-2">Streamlit</h4>
              <p className="text-xs text-body leading-relaxed">Used for rapid UI development, allowing fast iteration of interactive financial dashboards entirely in Python.</p>
            </div>
            <div className="bg-surface border border-border rounded-xl p-5">
              <h4 className="text-sm font-semibold text-heading mb-2">Pandas</h4>
              <p className="text-xs text-body leading-relaxed">Leveraged for efficient data transformation, handling missing values, and engineering financial volatility metrics at scale.</p>
            </div>
          </div>
        </motion.div>

        {/* Key Features & Results */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">Key Features</h3>
            <ul className="space-y-2.5">
              {keyFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-body">
                  <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}>
            <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">Results</h3>
            <ul className="space-y-2.5">
              {results.map((r, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-body">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  {r}
                </li>
              ))}
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
