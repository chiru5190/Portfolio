import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, LineChart, Server } from 'lucide-react';

const projects = [
  {
    title: "NSE Stock Data Pipeline",
    description: "Built a modular ETL pipeline to collect, process, and analyze Indian stock market data.",
    features: [
      "Automated stock data collection using Yahoo Finance API",
      "Feature engineering including daily price change and volatility metrics",
      "Structured data storage using SQLite",
      "Interactive Streamlit dashboard with Plotly visualizations",
      "Dynamic stock performance analytics"
    ],
    tech: ["Python", "Pandas", "SQLite", "Streamlit", "Plotly", "yfinance"],
    github: "https://github.com/chiru5190",
    demo: "#",
    featured: true
  },
  {
    title: "Sentiment Analysis",
    description: "Built an NLP sentiment analysis model using TF-IDF feature extraction and supervised machine learning algorithms.",
    features: [
      "NLP preprocessing",
      "Real-time sentiment prediction",
      "Streamlit web interface",
      "Sentiment visualization dashboard"
    ],
    tech: ["Python", "Scikit-learn", "Streamlit", "Pandas", "NumPy"],
    github: "https://github.com/chiru5190",
    demo: "#",
    featured: false
  }
];

const ProjectCard = ({ project, index }) => {
  if (project.featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass-card overflow-hidden group mb-12"
      >
        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-8 md:p-12 flex flex-col justify-center relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <span className="text-primary font-medium tracking-wider text-sm mb-2 block">Featured Project</span>
              <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-6 text-lg">{project.description}</p>
              
              <ul className="space-y-2 mb-8 text-gray-300">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 -ml-2 text-gray-400 hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-white transition-colors">
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative h-64 md:h-auto bg-surface/50 border-l border-white/5 flex items-center justify-center p-8 group-hover:bg-surface/30 transition-colors duration-500">
            {/* Abstract UI Representation */}
            <div className="w-full max-w-sm aspect-video rounded-xl bg-background/80 border border-white/10 shadow-2xl overflow-hidden flex flex-col relative group-hover:scale-105 transition-transform duration-500">
              <div className="h-8 border-b border-white/10 flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex-1 p-4 flex flex-col gap-4">
                <div className="flex gap-4 h-1/2">
                  <div className="flex-1 rounded border border-primary/20 bg-primary/5 flex items-center justify-center text-primary/40"><LineChart className="w-8 h-8" /></div>
                  <div className="w-1/3 rounded border border-secondary/20 bg-secondary/5 flex items-center justify-center text-secondary/40"><Database className="w-8 h-8" /></div>
                </div>
                <div className="flex-1 rounded border border-white/5 bg-white/5 flex items-center justify-center text-white/20"><Server className="w-8 h-8" /></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-8 flex flex-col h-full group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
        <Server className="w-24 h-24" />
      </div>
      
      <div className="flex justify-between items-center mb-6 relative z-10">
        <div className="p-3 bg-primary/10 text-primary rounded-lg border border-primary/20">
          <Database className="w-6 h-6" />
        </div>
        <div className="flex gap-4">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors relative z-10">{project.title}</h3>
      <p className="text-gray-400 mb-6 flex-grow relative z-10">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mt-auto relative z-10">
        {project.tech.map((tech, i) => (
          <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
      </motion.div>

      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          project.featured ? 
            <ProjectCard key={index} project={project} index={index} /> : null
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          !project.featured ? 
            <ProjectCard key={index} project={project} index={index} /> : null
        ))}
      </div>
    </div>
  );
};

export default Projects;
