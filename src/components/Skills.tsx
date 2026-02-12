import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { Code, Database, Brain, Wrench, Palette, Cloud } from "lucide-react"

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation()

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-blue-500 to-blue-600",
      skills: ["Python", "JavaScript", "SQL", "C", "R"],
    },
    {
      title: "Frameworks & Libraries",
      icon: Palette,
      color: "from-purple-500 to-purple-600",
      skills: ["Pandas", "NumPy", "Scikit-learn", "PySpark", "Apache Spark", "Matplotlib", "PyTorch", "GeoPandas", "R studio", "Excel"],
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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

        {/* Highlighted Specializations */}
        <div
          className={`mt-12 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Current Focus Areas</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Data Science",
              "Machine Learning",
              "Full-Stack Development",
              "Big Data Analytics",
              "Computer Vision",
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
