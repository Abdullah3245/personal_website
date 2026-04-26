import { useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Experience from "./components/Experience"
import SplineBackground from "./components/SplineBackground"

function App() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <div
      className="min-h-screen relative"
      style={{ background: "var(--c-hero-bg)" }}
    >
      {/* Fixed Spline 3D scene behind everything */}
      <SplineBackground />

      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="relative">
        <Hero />
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
