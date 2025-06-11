import { useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Experience from "./components/Experience"
import Resume from "./components/Resume"


function App() {
  const [activeSection, setActiveSection] = useState("home")
  const [showResume, setShowResume] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onResumeClick={() => setShowResume(true)}
      />

      {/* Resume Overlay */}
      {showResume && <Resume onClose={() => setShowResume(false)} />}
      <main>
        <Hero />
        {/* <About /> */}
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
