import { useScrollAnimation } from "../hooks/useScrollAnimation"
import AnimatedCounter from "./AnimatedCounter"

export default function About() {
  const { ref, isVisible } = useScrollAnimation()

  const stats = [
    { number: 5, suffix: "+", label: "Years Experience" },
    { number: 50, suffix: "+", label: "Projects Completed" },
    { number: 100, suffix: "%", label: "Client Satisfaction" },
    { number: 24, suffix: "/7", label: "Support Available" },
  ]

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-20 h-20 bg-blue-100 rounded-full opacity-50 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-purple-100 rounded-full opacity-50 animate-float-delayed"></div>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about my background, experience, and what drives me
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="relative group">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="About me"
                className="rounded-lg shadow-lg w-full transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <div
            className={`space-y-6 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <h3 className="text-2xl font-bold text-gray-900">Passionate Developer & Designer</h3>

            <p className="text-gray-700 leading-relaxed">
              With over 5 years of experience in web development, I specialize in creating modern, responsive
              applications using the latest technologies. My journey started with a curiosity about how websites work,
              and it has evolved into a passion for crafting exceptional digital experiences.
            </p>

            <p className="text-gray-700 leading-relaxed">
              I believe in writing clean, maintainable code and creating intuitive user interfaces. When I'm not coding,
              you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor
              activities.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { title: "Frontend", tech: "React, Vue, TypeScript" },
                { title: "Backend", tech: "Node.js, Python, PostgreSQL" },
                { title: "Design", tech: "Figma, Adobe Creative Suite" },
                { title: "Tools", tech: "Git, Docker, AWS" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-105"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-blue-600 mb-2">
                {isVisible && <AnimatedCounter end={stat.number} suffix={stat.suffix} />}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
