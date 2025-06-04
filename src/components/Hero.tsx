"use client"

import {Github, Linkedin, Mail } from "lucide-react"
import ParticleBackground from "./ParticleBackground"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation()

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
            <div className="relative mb-8 flex justify-center">
              <div className="relative">
                <img
                  src="/files/Abdullah.jpeg"
                  alt="Profile"
                  className="w-64 h-64 rounded-full border-4 border-white shadow-2xl hover:scale-110 transition-transform duration-300 relative z-10"
                />
                {/* Fixed animated ring to match image size */}
                <div className="absolute inset-0 w-64 h-64 rounded-full border-4 border-blue-400 animate-ping opacity-20"></div>
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
            className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              <span className="inline-block animate-typewriter">Junior at University of Pennsylvania</span>
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
              Studying Computer Information Science. <br/>
              Passionate about Software Development, machine learning, and creating impact through technology.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex justify-center space-x-6 mb-12">
              {[
                { icon: Github, href: "https://github.com/Abdullah3245", delay: "0ms" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/abdullah-goher-801ba227b/", delay: "100ms" },
                { icon: Mail, href: "mailto:mgoher@seas.upenn.edu", delay: "200ms" },
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
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="cursor-pointer px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              <a href="/files/Abdullah_resume.docx" download="Abdullah_resume" target="_blank" rel="noreferrer">
                <button className="cursor-pointer px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-gray-400" />
        </div> */}
      </div>
    </section>
  )
}
