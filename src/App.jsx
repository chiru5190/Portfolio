import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-primary/30">
      {/* Dynamic Background Gradients */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-surface via-background to-background -z-10" />
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 hover:opacity-10 mix-blend-overlay pointer-events-none -z-10 transition-opacity duration-1000"></div>
      
      <Navbar />

      <main className="overflow-x-hidden">
        <section id="hero" className="w-full">
          <Hero />
        </section>
        
        <section id="about" className="py-24 pt-32 max-w-7xl mx-auto px-6 w-full">
          <About />
        </section>
        
        <section id="projects" className="py-24 max-w-7xl mx-auto px-6 w-full">
          <Projects />
        </section>
        
        <section id="skills" className="py-24 max-w-7xl mx-auto px-6 w-full">
          <Skills />
        </section>

        <section id="achievements" className="py-24 max-w-7xl mx-auto px-6 w-full bg-surface/20">
          <Achievements />
        </section>

        <section id="contact" className="py-24 max-w-7xl mx-auto px-6 w-full">
          <Contact />
        </section>
      </main>

      <footer className="py-8 border-t border-white/5 text-center text-sm text-gray-400 z-10 relative bg-background/50 backdrop-blur-sm">
        <p>© 2026 Gedela Chiranjeevi. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;
