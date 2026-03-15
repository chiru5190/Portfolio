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
    <div className="bg-bg min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Achievements />
      <Contact />
      <footer className="py-8 text-center text-sm text-muted border-t border-border bg-surface">
        <div className="max-w-6xl mx-auto px-6">© {new Date().getFullYear()} Gedela Chiranjeevi</div>
      </footer>
    </div>
  )
}
