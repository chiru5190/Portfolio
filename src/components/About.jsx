import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="section-title mb-4">About Me</h2>
          <div className="max-w-3xl space-y-4 text-body text-lg leading-relaxed">
            <p>I am a Computer Science student at Lovely Professional University passionate about Machine Learning, Natural Language Processing, and Data Engineering.</p>
            <p>I build AI-powered applications, data pipelines, and interactive analytics dashboards. My work spans from training neural networks with TensorFlow to building web dashboards with React and Streamlit.</p>
            <p>I'm driven by solving real-world problems with clean, performant, and intelligent software.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
