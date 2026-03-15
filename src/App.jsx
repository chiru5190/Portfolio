import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Certificates from "./components/Certificates"
import Achievements from "./components/Achievements"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div className="bg-background min-h-screen text-gray-200 selection:bg-primary/30 selection:text-white pb-12">
      <Navbar />
      
      <main className="flex flex-col gap-8 md:gap-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Achievements />
        <Contact />
      </main>
      
      <footer className="mt-24 border-t border-white/10 py-8 text-center text-gray-500 max-w-7xl mx-auto w-full px-6">
        <p>© {new Date().getFullYear()} Gedela Chiranjeevi. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  )
}
