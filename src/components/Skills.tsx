import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { Code, Database, Brain, Wrench, Palette, Cloud } from "lucide-react"

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation()

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-blue-500 to-blue-600",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "SQL"],
    },
    {
      title: "Frontend Development",
      icon: Palette,
      color: "from-purple-500 to-purple-600",
      skills: ["React", "Vite", "HTML/CSS", "Tailwind CSS", "Redux", "Figma"],
    },
    {
      title: "Backend & Databases",
      icon: Database,
      color: "from-green-500 to-green-600",
      skills: ["Node.js", "Express", "Django", "MongoDB", "PostgreSQL", "DuckDB"],
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      color: "from-orange-500 to-red-600",
      skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "XGBoost", "Computer Vision", "NLP"],
    },
    {
      title: "Data Science & Analytics",
      icon: Database,
      color: "from-teal-500 to-cyan-600",
      skills: ["Pandas", "NumPy", "Matplotlib", "Data Analysis", "Statistical Modeling", "Feature Engineering"],
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "from-gray-600 to-gray-700",
      skills: ["Git", "Docker", "AWS", "Cypress", "JUnit", "Chrome Extensions", "Web Scraping"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-indigo-200/30 to-pink-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to build impactful solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg shadow-lg mr-4`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`px-3 py-2 bg-gradient-to-r ${category.color} text-white text-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 cursor-default ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${categoryIndex * 150 + skillIndex * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div
          className={`mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Expertise</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              My technical stack spans across full-stack development, machine learning, and data science, enabling me to
              build end-to-end solutions from research to production.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "7+", label: "Programming Languages", icon: Code },
              { number: "15+", label: "Frameworks & Libraries", icon: Wrench },
              { number: "5+", label: "ML/AI Technologies", icon: Brain },
              { number: "10+", label: "Development Tools", icon: Cloud },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex justify-center mb-2">
                  <stat.icon className="text-blue-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlighted Specializations */}
        <div
          className={`mt-12 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Current Focus Areas</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Computer Vision",
              "Full-Stack Development",
              "Data Science",
              "Research & Development",
              "Machine Learning Engineering",
              "Web Scraping & Automation",
            ].map((focus, index) => (
              <span
                key={focus}
                className={`px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${1000 + index * 100}ms` }}
              >
                {focus}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
