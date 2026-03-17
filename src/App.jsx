import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import FeaturedProject from "./components/FeaturedProject"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import GitHubActivity from "./components/GitHubActivity"
import EducationAchievements from "./components/EducationAchievements"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div className="bg-bg min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProject />
      <Projects />
      <Skills />
      <GitHubActivity />
      <EducationAchievements />
      <Contact />
      <footer className="py-8 text-center text-sm text-muted border-t border-border bg-surface">
        <div className="max-w-6xl mx-auto px-6">© {new Date().getFullYear()} Gedela Chiranjeevi</div>
      </footer>
    </div>
  )
}
