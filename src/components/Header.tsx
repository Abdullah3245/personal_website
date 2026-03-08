"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

function AGLogo() {
  const [expanded, setExpanded] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const firstRef = useRef<HTMLSpanElement>(null)
  const lastRef = useRef<HTMLSpanElement>(null)
  const [firstW, setFirstW] = useState(0)
  const [lastW, setLastW] = useState(0)

  // Measure the hidden text widths once on mount
  useEffect(() => {
    if (firstRef.current) setFirstW(firstRef.current.scrollWidth)
    if (lastRef.current) setLastW(lastRef.current.scrollWidth)
  }, [])

  // Auto-expand after 600ms on mount
  useEffect(() => {
    timerRef.current = setTimeout(() => setExpanded(true), 600)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setExpanded(false)
  }

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setExpanded(true), 120)
  }

  const sharedTextStyle: React.CSSProperties = {
    fontWeight: 700,
    fontSize: "1.5rem",
    lineHeight: 1,
    letterSpacing: "-0.02em",
    background: "linear-gradient(to right, #2563eb, #9333ea)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    whiteSpace: "nowrap",
  }

  const collapseStyle = (w: number): React.CSSProperties => ({
    display: "inline-block",
    overflow: "hidden",
    width: expanded ? `${w}px` : "0px",
    opacity: expanded ? 1 : 0,
    transition: "width 420ms cubic-bezier(0.4,0,0.2,1), opacity 350ms cubic-bezier(0.4,0,0.2,1)",
    verticalAlign: "bottom",
  })

  return (
    <a
      href="#home"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Abdullah Goher – home"
      className="select-none cursor-pointer inline-flex items-baseline"
      style={{ textDecoration: "none" }}
    >
      {/* A – always visible */}
      <span style={sharedTextStyle}>A</span>

      {/* bdullah – animates width */}
      <span style={collapseStyle(firstW)}>
        <span ref={firstRef} style={sharedTextStyle}>bdullah</span>
      </span>

      {/* space between first and last name */}
      <span style={collapseStyle(expanded ? 8 : 0)}>
        <span style={{ display: "inline-block", width: "8px" }} />
      </span>

      {/* G – always visible */}
      <span style={sharedTextStyle}>G</span>

      {/* oher – animates width */}
      <span style={collapseStyle(lastW)}>
        <span ref={lastRef} style={sharedTextStyle}>oher</span>
      </span>
    </a>
  )
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ]

  // Handle scrolling to update active section
  useEffect(() => {
    const handleScroll = () => {
      // Update header background opacity based on scroll position
      setScrolled(window.scrollY > 50)

      // Get all sections and their positions
      const sections = navItems.map((item) => {
        const element = document.getElementById(item.id)
        if (!element) return { id: item.id, top: 0, bottom: 0 }

        const rect = element.getBoundingClientRect()
        return {
          id: item.id,
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
          height: rect.height,
        }
      })

      // Get current scroll position with a small offset for better UX
      const scrollPosition = window.scrollY + 100

      // Find the current section
      for (const section of sections) {
        if (scrollPosition >= section.top && scrollPosition < section.bottom) {
          if (activeSection !== section.id) {
            setActiveSection(section.id)
          }
          break
        }
      }

      // Special case for when we're at the bottom of the page
      const windowHeight = window.innerHeight
      const documentHeight = document.body.scrollHeight
      if (window.scrollY + windowHeight >= documentHeight - 50) {
        // We're at the bottom, highlight the last section
        const lastSection = navItems[navItems.length - 1].id
        if (activeSection !== lastSection) {
          setActiveSection(lastSection)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [activeSection, setActiveSection, navItems])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // const openResume = () => {
  //   window.open("/files/resume.pdf", "_blank")
  // }

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-300 z-50 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white/70 backdrop-blur-sm"
      } border-b border-gray-200`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <AGLogo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 cursor-pointer rounded-lg text-base font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-600 shadow-sm"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fadeIn">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-3 rounded-lg text-left text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
