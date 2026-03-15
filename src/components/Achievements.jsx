import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Trophy } from 'lucide-react';

const certifications = [
  "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
  "JavaScript Essentials – NxtWave",
  "Programming Foundations with Python – NxtWave",
  "Introduction to Databases (SQL) – NxtWave",
  "AWS Solution Architect Micro Degree"
];

const Achievements = () => {
  return (
    <div className="w-full">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Education & Achievements Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <GraduationCap className="text-primary w-8 h-8" />
              Education
            </h2>
            <div className="glass-card p-6 border-l-4 border-l-primary relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <GraduationCap className="w-24 h-24" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">Bachelor of Technology</h3>
              <p className="text-primary font-medium mb-1 relative z-10">Computer Science and Engineering</p>
              <p className="text-gray-400 mb-4 relative z-10">Lovely Professional University</p>
              <div className="inline-flex px-3 py-1 bg-white/5 rounded-full text-sm font-medium border border-white/10 relative z-10">
                CGPA: <span className="text-white ml-1">7.94</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Trophy className="text-secondary w-8 h-8" />
              Achievements
            </h2>
            <div className="space-y-4">
              <div className="glass-card p-5 flex items-start gap-4 group hover:bg-white/5 transition-colors">
                <div className="p-2 bg-secondary/10 rounded-lg text-secondary mt-1">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-200 mb-1">Algorithmic Problem Solving</h4>
                  <p className="text-gray-400 text-sm">Solved 250+ coding problems across NxtWave and LeetCode.</p>
                </div>
              </div>
              <div className="glass-card p-5 flex items-start gap-4 group hover:bg-white/5 transition-colors">
                <div className="p-2 bg-secondary/10 rounded-lg text-secondary mt-1">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-200 mb-1">Generative AI Workshop</h4>
                  <p className="text-gray-400 text-sm">Built a Generative AI application during NxtWave Generative AI workshop.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Award className="text-primary w-8 h-8" />
            Certifications
          </h2>
          <div className="space-y-4 relative">
            <div className="absolute left-6 top-10 bottom-10 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent"></div>
            
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative pl-16 py-3 group"
              >
                <div className="absolute left-[20px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary group-hover:scale-125 transition-all z-10"></div>
                <div className="glass-card p-4 hover:-translate-y-1 hover:bg-white/5 transition-all cursor-default">
                  <p className="text-gray-300 font-medium">{cert}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;
