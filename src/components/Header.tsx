"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
]

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = NAV_ITEMS.map((item) => {
        const element = document.getElementById(item.id)
        if (!element) return { id: item.id, top: 0, bottom: 0 }
        const rect = element.getBoundingClientRect()
        return {
          id: item.id,
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
        }
      })

      const scrollPosition = window.scrollY + 120
      for (const section of sections) {
        if (scrollPosition >= section.top && scrollPosition < section.bottom) {
          if (activeSection !== section.id) setActiveSection(section.id)
          break
        }
      }

      const windowHeight = window.innerHeight
      const documentHeight = document.body.scrollHeight
      if (window.scrollY + windowHeight >= documentHeight - 50) {
        const lastSection = NAV_ITEMS[NAV_ITEMS.length - 1].id
        if (activeSection !== lastSection) setActiveSection(lastSection)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection, setActiveSection])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md"
          : ""
      }`}
      style={{
        background: scrolled ? "hsl(var(--hero-bg) / 0.7)" : "transparent",
        borderBottom: scrolled
          ? "1px solid hsl(var(--border) / 0.6)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center py-5">
          {/* Logo / monogram */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("home")
            }}
            className="text-xl font-semibold tracking-tight"
            style={{ color: "var(--c-fg)" }}
          >
            ABDULLAH<span style={{ color: "var(--c-primary)" }}>.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-8">
            {NAV_ITEMS.map((item) => {
              const active = activeSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-xs uppercase tracking-[0.18em] transition-colors cursor-pointer"
                  style={{
                    color: active
                      ? "var(--c-fg)"
                      : "hsl(var(--muted-foreground))",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--c-fg)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = active
                      ? "var(--c-fg)"
                      : "hsl(var(--muted-foreground))")
                  }
                >
                  {item.label}
                </button>
              )
            })}
          </nav>

          {/* CTA */}
          <a
            href="/files/Abdullah_resume.docx"
            download="Abdullah_resume"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost hidden md:inline-flex"
          >
            Resume
          </a>

          {/* Mobile menu */}
          <button
            className="md:hidden p-2 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            style={{ color: "var(--c-fg)" }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div
            className="md:hidden py-4 animate-fade-in"
            style={{
              borderTop: "1px solid hsl(var(--border) / 0.5)",
            }}
          >
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const active = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="px-3 py-3 text-left text-sm uppercase tracking-[0.18em] transition-colors"
                    style={{
                      color: active
                        ? "var(--c-fg)"
                        : "hsl(var(--muted-foreground))",
                    }}
                  >
                    {item.label}
                  </button>
                )
              })}
              <a
                href="/files/Abdullah_resume.docx"
                download="Abdullah_resume"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost mt-3 w-fit"
              >
                Resume
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
