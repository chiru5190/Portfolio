import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

export default function GitHubActivity() {
  return (
    <section id="github" className="py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <h2 className="section-title mb-3">GitHub Activity</h2>
          <p className="section-subtitle max-w-xl">Open source contributions and project activity.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-bg border border-border rounded-xl p-6 md:p-8 mb-6 overflow-x-auto">
          <img
            src="https://ghchart.rshah.org/6366f1/chiru5190"
            alt="GitHub Contributions"
            className="w-full max-w-3xl mx-auto"
            loading="lazy"
          />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="flex items-center gap-4">
          <a href="https://github.com/chiru5190" target="_blank" rel="noreferrer"
            className="btn-outline flex items-center gap-2 text-sm">
            <Github size={16} /> View GitHub Profile
          </a>
          <a href="https://github.com/chiru5190?tab=repositories" target="_blank" rel="noreferrer"
            className="text-sm text-muted hover:text-heading transition-colors flex items-center gap-1.5">
            All Repositories <ExternalLink size={13} />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
