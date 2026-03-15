import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useEffect } from "react"

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
    return () => { document.body.style.overflow = "unset" }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose} className="fixed inset-0 bg-heading/20 backdrop-blur-sm" />
          <motion.div initial={{ opacity: 0, scale: 0.96, y: 8 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0.15 }}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-surface border border-border rounded-xl p-6 shadow-xl">
            <button onClick={onClose} className="absolute top-4 right-4 p-1.5 rounded-lg text-muted hover:text-heading hover:bg-bg transition-colors"><X size={16} /></button>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
