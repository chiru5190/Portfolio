import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export default function Education() {
  const educationTimeline = [
    {
      degree: "Bachelor of Technology - Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Punjab, India",
      date: "Expected 2026",
      score: "CGPA: 7.94"
    },
    {
      degree: "Intermediate",
      institution: "Sri Chaitanya Junior College",
      location: "India",
      date: "Completed",
      score: "94.3%"
    },
    {
      degree: "Secondary School",
      institution: "ZP High School",
      location: "India",
      date: "Completed",
      score: "90.5%"
    }
  ]

  return (
    <section id="education" className="py-24 relative bg-surface/30">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Education <span className="text-gradient">Journey</span></h2>
        </motion.div>

        <div className="relative border-l border-white/10 pl-8 ml-4 md:ml-0 md:pl-0 md:border-none space-y-12">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          {educationTimeline.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              
              {/* Timeline dot */}
              <div className="absolute left-[-41px] md:relative md:left-auto md:mx-4 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 z-10 shrink-0" />

              <div className={`flex-1 w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                <div className="glass-card p-6 md:p-8 hover:-translate-y-1 hover:border-primary/30 transition-all text-left">
                  
                  <div className="flex items-center gap-2 text-primary font-medium text-sm mb-4">
                    <Calendar size={16} />
                    {edu.date}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  
                  <div className="flex items-center gap-2 text-gray-300 font-medium mb-4">
                    <GraduationCap size={18} className="text-secondary" />
                    {edu.institution}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 border-t border-white/10 pt-4 mt-4 text-left">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {edu.location}
                    </span>
                    <span className="font-bold text-white bg-white/10 px-3 py-1 rounded-full border border-white/5">
                      {edu.score}
                    </span>
                  </div>
                  
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
