"use client"

import { Calendar, MapPin, ExternalLink, Award, Briefcase } from "lucide-react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { useState } from "react"

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const experiences = [
    {
      title: "Research Assistant",
      company: "Computational Social Science Lab",
      location: "Philadelphia, PA",
      period: "05/2025 - Present",
      type: "Full-time",
      description:
        "Working under Post Doc student Pacco Barreras to assist them with their research on human mobility data.",
      achievements: [
        "Developing a full stack React app which serves as the hub of human mobility data using version control",
        "Implemented extensive testing with 90% code coverage using Cypress",
        "Set up a backend with a MongoDB NoSQL database to store literature related to human mobility data",
        "Assisted in the development of algorithms related to human mobility data",
      ],
      technologies: ["React", "Node.js", "NoSQL", "Cypress", "Git"],
      website: "https://css.seas.upenn.edu/",
      color: "from-blue-500 to-indigo-600",
      icon: "research",
    },
    {
      title: "Frontend Developer",
      company: "Children's Hospital of Philadelphia",
      location: "Philadelphia, PA",
      period: "11/2024 - Present",
      type: "Part-time",
      description:
        "Assisted the development of a full stack application working under a Professor at CHOP. Collaborated with a team of 8 people including backend developers and UX/UI designers to create intuitive user experiences.",
      achievements: [
        "Implemented a secure login using JWT with HttpOnly cookie to protect user info and prevent script attacks",
        "Designed and optimized user interfaces using React-Redux and Tailwind, including a responsive dashboard and data entry forms (editing, deleting, and new entries) to streamline workflows for researchers and clinicians",
      ],
      technologies: ["Vite + React", "JavaScript", "MongoDB", "Django", "Figma", "Git"],
      website: "https://www.research.chop.edu/people/birkan-tunc",
      color: "from-green-500 to-teal-600",
      icon: "frontend",
    },
    {
      title: "Machine Learning Engineer",
      company: "Penn Assistive Devices and Prosthetic Technologies",
      location: "Philadelphia, PA",
      period: "09/2024 - Present",
      type: "Full-time",
      description:
        "Addressing surgical precision challenges by developing automated tool tracking systems to replace manual counting by nurses during procedures.",
      achievements: [
        "Developing YOLOv11 and Segment Anything computer vision models to accurately distinguish between surgical tools",
        "Worked with surgeons at Penn Medicine to curate a custom dataset for extensive model training",
        "Trained YOLOv11 deep CNN model on 10,000+ images using custom + Kaggle datasets, achieving 90% accuracy in detecting and classifying surgical tools across varying angles",
      ],
      technologies: ["YOLOv11", "Computer Vision", "PyTorch", "TensorFlow", "CUDA"],
      website: "https://pennadapt.wixsite.com/pennadapt",
      color: "from-purple-500 to-pink-600",
      icon: "ml",
    },
    {
      title: "Machine Learning Engineer Intern",
      company: "Clab AI",
      location: "Nashville, TN",
      period: "05/2024 - 08/2024",
      type: "Full-time",
      description:
        "Contributed to the development of an AI platform aimed at assisting students with their university applications, currently used by hundreds of students.",
      achievements: [
        "Performed exploratory data analysis on data from over 100 universities using Pandas, NumPy, and Matplotlib to identify trends in financial aid distribution and accessibility",
        "Trained Random Forest and Linear Regression models to predict financial aid eligibility for incoming students, with hyperparameter tuning and optimization",
        "Assisted in training the AI co-pilot using reinforcement learning through human feedback",
      ],
      technologies: ["Machine Learning", "Data Engineering", "Data Analysis", "Reinforcement Learning"],
      website: "https://clabapp.ai/signin",
      color: "from-orange-500 to-red-600",
      icon: "intern",
    },
  ]

  // Updated stats to match your experience
  const stats = [
    { number: "1+", label: "Years Experience" },
    { number: "4", label: "Organizations" },
    { number: "5+", label: "Projects Delivered" },
    { number: "10+", label: "Technologies Used" },
  ]

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "research":
        return (
          <div className="p-2 rounded-full bg-blue-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-600"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
          </div>
        )
      case "frontend":
        return (
          <div className="p-2 rounded-full bg-green-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-600"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
          </div>
        )
      case "ml":
        return (
          <div className="p-2 rounded-full bg-purple-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-purple-600"
            >
              <path d="M12 2v8"></path>
              <path d="m4.93 10.93 1.41 1.41"></path>
              <path d="M2 18h2"></path>
              <path d="M20 18h2"></path>
              <path d="m19.07 10.93-1.41 1.41"></path>
              <path d="M22 22H2"></path>
              <path d="m16 6-4 4-4-4"></path>
              <path d="M16 18a4 4 0 0 0-8 0"></path>
            </svg>
          </div>
        )
      case "intern":
        return (
          <div className="p-2 rounded-full bg-orange-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-orange-600"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
          </div>
        )
      default:
        return <Briefcase className="text-blue-600" />
    }
  }

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-indigo-200/30 to-pink-200/30 rounded-full blur-2xl animate-float-delayed"></div>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My journey through research, development, and machine learning
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Timeline dot with pulse effect */}
                <div
                  className={`absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full border-4 border-white shadow-lg z-10 ${
                    hoveredIndex === index ? "animate-pulse" : ""
                  }`}
                ></div>

                {/* Content card - REVERTED TO ORIGINAL ALTERNATING LAYOUT */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-8"}`}>
                  <div
                    className={`bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group border-l-4 ${
                      exp.color.includes("blue")
                        ? "border-blue-500"
                        : exp.color.includes("green")
                          ? "border-green-500"
                          : exp.color.includes("purple")
                            ? "border-purple-500"
                            : "border-orange-500"
                    }`}
                  >
                    {/* Header with icon */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {getIcon(exp.icon)}
                        <div>
                          <h3 className="text-xl text-left font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {exp.title}
                          </h3>
                          <div className="flex items-center space-x-2 text-gray-600 mt-1">
                            <span className="font-semibold">{exp.company}</span>
                            <span>•</span>
                            <span className="text-sm">{exp.type}</span>
                          </div>
                        </div>
                      </div>
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-left hover:text-blue-800 transition-colors mt-2 md:mt-0 flex items-center gap-1 group-hover:underline"
                      >
                        <span className="text-sm">Visit</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4 bg-gray-50 p-2 rounded-md">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} className="text-blue-500" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} className="text-blue-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-left text-gray-700 mb-4 leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Award size={16} className="mr-2 text-blue-500" />
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-left text-gray-700 text-sm flex items-start bg-gray-50 p-2 rounded-md hover:bg-gray-100 transition-colors"
                          >
                            <span className="text-left text-blue-500 mr-2 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 bg-gradient-to-r ${exp.color} text-white text-xs rounded-full opacity-80 hover:opacity-100 transition-all transform hover:scale-105 hover:shadow-md`}
                          style={{ transitionDelay: `${techIndex * 50}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary stats */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg border border-gray-100"
            >
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
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
