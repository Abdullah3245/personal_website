"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-300 z-50 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white/70 backdrop-blur-sm"
      } border-b border-gray-200`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Abdullah
          </div>

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
