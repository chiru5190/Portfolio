import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="w-full relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 md:p-12 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-8 relative z-10">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed relative z-10">
          <p>
            I am a Computer Science student at Lovely Professional University passionate about Machine Learning, NLP, and Data Engineering.
          </p>
          <p>
            Experienced in building end-to-end machine learning systems, ETL pipelines, and interactive analytics dashboards using Python and modern web technologies. My goal is to build intelligent systems that solve real-world problems.
          </p>
        </div>

        {/* Highlight Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 relative z-10 border-t border-white/10 pt-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">250+</div>
            <div className="text-sm text-gray-400">Coding Problems Solved</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">7.94</div>
            <div className="text-sm text-gray-400">CGPA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">5+</div>
            <div className="text-sm text-gray-400">Major Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">3+</div>
            <div className="text-sm text-gray-400">Certifications</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
