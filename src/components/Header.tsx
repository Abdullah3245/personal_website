"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import HeaderConstellation from "./HeaderConstellation"

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

  // Measure the active nav item's center so the header constellation can
  // gravitate (cluster) around it and glide there as the section changes.
  const headerRef = useRef<HTMLElement>(null)
  const navRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const [focus, setFocus] = useState<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const measure = () => {
      const header = headerRef.current
      const btn = navRefs.current[activeSection]
      if (!header || !btn) return
      const hr = header.getBoundingClientRect()
      const br = btn.getBoundingClientRect()
      setFocus({
        x: br.left - hr.left + br.width / 2,
        y: br.top - hr.top + br.height / 2,
      })
    }
    measure()
    window.addEventListener("resize", measure)
    // re-measure shortly after mount/font-load so positions are accurate
    const t = setTimeout(measure, 300)
    return () => {
      window.removeEventListener("resize", measure)
      clearTimeout(t)
    }
  }, [activeSection])

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
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${
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
      {/* live constellation across the whole header band — clusters on the
          active section's nav label and glides there as you scroll */}
      <HeaderConstellation focusX={focus?.x ?? null} focusY={focus?.y ?? null} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
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

          {/* Desktop nav — clean labels over the live constellation. The
              active section gets a glowing dot + bright label. */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const active = activeSection === item.id
              return (
                <button
                  key={item.id}
                  ref={(el) => {
                    navRefs.current[item.id] = el
                  }}
                  onClick={() => scrollToSection(item.id)}
                  aria-current={active ? "page" : undefined}
                  className="relative flex items-center gap-2 text-xs uppercase tracking-[0.18em] transition-colors cursor-pointer"
                  style={{
                    color: active ? "var(--c-fg)" : "hsl(var(--muted-foreground))",
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
                  <span
                    aria-hidden="true"
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: active ? 7 : 0,
                      height: active ? 7 : 0,
                      background: "hsl(var(--primary))",
                      boxShadow: active
                        ? "0 0 10px 2px hsl(var(--primary) / 0.9)"
                        : "none",
                    }}
                  />
                  {item.label}
                </button>
              )
            })}
          </nav>

          {/* CTA */}
          <a
            href="/files/Abdullah_AI_resume.pdf"
            download="Abdullah_Goher_Resume.pdf"
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
                href="/files/Abdullah_AI_resume.pdf"
                download="Abdullah_Goher_Resume.pdf"
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
