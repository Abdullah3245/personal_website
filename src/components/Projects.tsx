import { ExternalLink, Github, Star, Calendar, Users } from "lucide-react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation()

  const projects = [
    {
      title: "AlumniConnectAI",
      description:
        "Alumni can be a great help for current students. AlumniConnectAI allows you to effectively scrape alumni information and connect with them through an intelligent matching system.",
      image: "./files/AlumniConnectAI.png",
      technologies: ["Vite + React", "Web Scraping", "Chrome Extension", "Stripe"],
      liveUrl: "https://alumniconnectai.lovable.app/",
      githubUrl: "https://github.com/Abdullah3245/AlumniConnectAI?tab=readme-ov-file",
      gradient: "from-blue-500 to-purple-600",
      category: "Full Stack",
      status: "Live",
      highlights: [
        "Chrome extension for seamless LinkedIn integration",
        "Stripe payment processing for premium features",
        "AI-powered alumni matching algorithm",
      ],
    },
    {
      title: "Steam Data Analysis",
      description:
        "Collaborated on a comprehensive analysis of Steam dataset with 12M+ records and 90,000+ games to predict game success rates before release using advanced machine learning techniques.",
      image: "./files/SteamDataSet.png",
      technologies: ["Pandas", "Scikit-Learn", "Matplotlib", "DuckDB", "XGBoost"],
      liveUrl: "https://colab.research.google.com/drive/1hapeUwkCeNfUn-uXfLU99tli3u7seR_M?usp=sharing",
      githubUrl: "https://github.com/Abdullah3245/Steam_Data_Analysis",
      gradient: "from-green-500 to-teal-600",
      category: "Data Science",
      status: "Completed",
      highlights: [
        "Processed 12M+ records with advanced data cleaning",
        "Achieved 85%+ accuracy with XGBoost and Random Forest",
        "Comprehensive feature engineering and hyperparameter tuning",
      ],
    },
    {
      title: "Twitter Bot with Markov Chains",
      description:
        "Built a machine learning model that generates realistic tweets using Markov Chain fundamentals. Implemented comprehensive testing with JUnit for robust performance.",
      image: "/files/twitterbot.jpeg",
      technologies: ["Java", "Markov Chains", "JUnit", "Natural Language Processing"],
      liveUrl: "#",
      githubUrl: "https://github.com/Abdullah3245/TwitterBot",
      gradient: "from-orange-500 to-red-600",
      category: "Machine Learning",
      status: "Completed",
      highlights: [
        "Custom Markov Chain implementation for text generation",
        "Extensive JUnit test coverage for reliability",
        "Natural language processing for realistic output",
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-1/4 w-40 h-40 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 left-1/4 w-32 h-32 bg-gradient-to-br from-indigo-100/50 to-pink-100/50 rounded-full blur-2xl animate-float-delayed"></div>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, data science, and
            machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>

                {/* Status badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Live" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{project.description}</p>

                {/* Key highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                    <Star size={14} className="mr-1 text-yellow-500" />
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-xs text-gray-600 flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies
                    .filter((tech) => tech.trim() !== "")
                    .map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs rounded-full opacity-80 hover:opacity-100 transition-all transform hover:scale-105 shadow-sm`}
                        style={{ transitionDelay: `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                </div>

                {/* Action buttons */}
                <div className="flex space-x-4 pt-2 border-t border-gray-100">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors group/link text-sm font-medium"
                  >
                    <ExternalLink size={14} className="group-hover/link:scale-110 transition-transform" />
                    <span>{project.status === "Live" ? "Live Demo" : "View Project"}</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors group/link text-sm font-medium"
                  >
                    <Github size={14} className="group-hover/link:scale-110 transition-transform" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project stats */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { number: "3+", label: "Featured Projects", icon: Star },
            { number: "2", label: "Live Applications", icon: ExternalLink },
            { number: "85%+", label: "ML Model Accuracy", icon: Users },
            { number: "12M+", label: "Records Processed", icon: Calendar },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100"
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
    </section>
  )
}
