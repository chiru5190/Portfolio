import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="max-w-3xl">
          <h2 className="section-title mb-6">About</h2>
          <div className="space-y-4 text-body text-lg leading-relaxed">
            <p>
              I am a Computer Science student focused on building real-world machine learning systems and data-driven applications. My work involves designing ETL pipelines, training ML models, and developing interactive dashboards.
            </p>
            <p>
              I am particularly interested in <span className="text-heading font-medium">NLP</span>, <span className="text-heading font-medium">data engineering</span>, and <span className="text-heading font-medium">scalable AI systems</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
