import { useState, lazy, Suspense } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Experience from "./components/Experience"
import ScrollProgress from "./components/ScrollProgress"
import MotionSection from "./components/MotionSection"

// Lazy-load the Three.js particle field so the ~600kB of WebGL code doesn't
// block first paint. A static gradient (its own fallback) shows meanwhile.
const ParticleField = lazy(() => import("./components/ParticleField"))

function App() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <div
      className="min-h-screen relative"
      style={{ background: "var(--c-hero-bg)" }}
    >
      {/* Fixed scroll-driven 3D particle field behind everything.
          Suspense fallback is a static gradient matching the field's base. */}
      <Suspense
        fallback={
          <div
            aria-hidden="true"
            className="fixed inset-0 pointer-events-none"
            style={{
              zIndex: 0,
              background:
                "radial-gradient(ellipse at 50% 30%, hsl(222 40% 11%) 0%, hsl(0 0% 6%) 55%, #04060c 100%)",
            }}
          />
        }
      >
        <ParticleField />
      </Suspense>

      {/* Neon scroll progress bar */}
      <ScrollProgress />

      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="relative">
        <Hero />
        <MotionSection id="experience" parallax={70}>
          <Experience />
        </MotionSection>
        <MotionSection id="projects" parallax={80}>
          <Projects />
        </MotionSection>
        <MotionSection id="skills" parallax={70}>
          <Skills />
        </MotionSection>
        <MotionSection id="contact" parallax={60}>
          <Contact />
        </MotionSection>
      </main>

      <Footer />
    </div>
  )
}

export default App
