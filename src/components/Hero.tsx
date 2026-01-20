"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { useState, useEffect } from "react"

import ParticleBackground from "./ParticleBackground"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation()
  const [displayedText, setDisplayedText] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  const fullText = "Junior at University of Pennsylvania"

  useEffect(() => {
    if (!isVisible) return

    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        setIsTypingComplete(true)
        clearInterval(typingInterval)
      }
    }, 80) // Adjust speed here (lower = faster)

    return () => clearInterval(typingInterval)
  }, [isVisible])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-16 relative overflow-hidden"
    >
      <ParticleBackground />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 2 }}>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative mt-10 mb-8 flex justify-center">
              <div className="relative">
                <img
                  src="/files/Abdullah_2.jpg"
                  alt="Profile"
                  className="w-72 h-72 rounded-full border-4 border-white shadow-2xl hover:scale-110 transition-transform duration-300 relative z-10 object-cover object-[center_25%]"
                />
                {/* Fixed animated ring to match image size */}
                <div className="absolute inset-0 w-72 h-72 rounded-full border-4 border-blue-400 animate-ping opacity-20"></div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient">
                Abdullah Goher
              </span>
            </h1>
          </div>

          <div
            className={`transition-all mb-6 duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center justify-center gap-3">
              <img
                src="/files/penn_logo.png"
                alt="University of Pennsylvania Logo"
                className="w-24 h-24 md:w-24 md:h-24 object-contain"
              />
              <p className="text-xl md:text-2xl font-bold text-gray-800 min-h-[2rem]">
                <span className="inline-block">
                  {displayedText}
                  {!isTypingComplete && <span className="animate-pulse text-blue-600 ml-1">|</span>}
                </span>
              </p>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="mb-12 max-w-4xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                <p className="text-2xl md:text-3xl font-light text-gray-800 mb-2 leading-relaxed">
                  B.S.E. & M.S.E. in <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Computer & Information Science</span>
                </p>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Passionate about <span className="font-medium text-blue-600">Software Development</span>,
                  <span className="font-medium text-blue-600"> Machine Learning</span>,
                  <span className="font-medium text-blue-600"> Data Science</span>
                  , and 
                  <span className="font-medium text-blue-600"> impact through technology</span>
                </p>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex justify-center space-x-6 mb-8">
              {[
                { icon: Github, href: "https://github.com/Abdullah3245", delay: "0ms" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/abdullah-goher-801ba227b/", delay: "100ms" },
              ].map(({ icon: Icon, href, delay }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 group"
                  style={{ animationDelay: delay }}
                >
                  <Icon size={24} className="text-gray-700 group-hover:text-blue-600 transition-colors" />
                </a>
              ))}
              <div onClick={() =>
                window.open("https://mail.google.com/mail/?view=cm&fs=1&to=mgoher@seas.upenn.edu", "_blank")
              } className="p-3 bg-white/80 backdrop-blur-sm rounded-full group-hover:text-blue-600 cursor-pointer hover:scale-110 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <Mail size={24} className="text-gray-700 group-hover:text-blue-600 transition-colors" />
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="cursor-pointer px-8 py-3 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              <a href="/files/Abdullah_resume.docx" download="Abdullah_resume" target="_blank" rel="noreferrer">
                {/* <button className="cursor-pointer px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300">
                  Download CV
                </button> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
