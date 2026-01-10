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
        "Engineering a comprehensive human mobility research platform under Post Doc student Pacco Barreras, combining full-stack development with advanced AI technologies to revolutionize mobility data analysis.",
      achievements: [
        "Engineered a full-stack 'human-mobility hub' using ReactJS + Vite, Node.js, and MongoDB with 90% end-to-end Cypress test coverage, ensuring reliable data ingestion and search functionality",
        "Designed a custom Retrieval-Augmented Generation (RAG) pipeline, fine-tuning domain-specific LLMs and crafting optimized prompts to deliver fast, context-aware answers to research queries",
        "Hosted large datasets of human mobility on AWS S3, generated dense vector embeddings, and deployed on Qdrant for low-latency semantic search across the research archive",
        "Implemented version control systems and extensive testing protocols to maintain code quality and research reproducibility",
      ],
      technologies: ["React", "Vite", "Node.js", "MongoDB", "AWS S3", "Qdrant", "Cypress", "RAG", "LLMs"],
      website: "https://css.seas.upenn.edu/",
      color: "from-blue-500 to-indigo-600",
      icon: "research",
    },
    {
      title: "Full Stack Developer",
      company: "Children's Hospital of Philadelphia",
      location: "Philadelphia, PA",
      period: "11/2024 - Present",
      type: "Part-time",
      description:
        "Co-developing a comprehensive web platform with UX/UI designers and backend developers for autism research data management, serving 25+ clinicians and researchers with secure, efficient data handling and intuitive user experiences.",
      achievements: [
        "Co-developed a web platform for autism-research data management using ReactJS (Vite), Django, and FastAPI, improving data accessibility for 25+ clinicians and researchers",
        "Designed and optimized user interfaces using React-Redux and Tailwind CSS, including responsive dashboards and comprehensive data entry forms (editing, deleting, and new entries) to streamline workflows",
        "Implemented secure, stateless authentication using JWT tokens in HTTP-only cookies and context-based data fetching for personalized researcher views",
      ],
      technologies: ["Vite + React", "Django", "FastAPI", "React-Redux", "Tailwind CSS", "JWT", "MongoDB", "Figma"],
      website: "https://www.research.chop.edu/people/birkan-tunc",
      color: "from-green-500 to-teal-600",
      icon: "frontend",
    },
    {
      title: "Machine Learning Engineer",
      company: "Penn Assistive Devices and Prosthetic Technologies",
      location: "Philadelphia, PA",
      period: "09/2024 - Present",
      type: "Student Organization",
      description:
        "Leading the development of cutting-edge computer vision solutions for surgical precision, collaborating with Penn Medicine surgeons to create real-time tool tracking systems that enhance surgical safety and accuracy.",
      achievements: [
        "Collaborated in a 6-person team to develop computer vision models for real-time surgical tool detection and identification during procedures, enhancing surgical precision and safety",
        "Curated custom datasets working directly with Penn Medicine surgeons and trained deep CNN and Vision Transformer models using PyTorch on combined Kaggle and custom datasets with 10,000+ images",
        "Implemented YOLOv11 and Segment Anything models to accurately distinguish between different surgical instruments in real-time video feeds",
        "Fine-tuned model weights through iterative training and optimization techniques, achieving 90% accuracy in detecting and classifying surgical tools across varying angles and lighting conditions",
      ],
      technologies: ["YOLOv11", "Vision Transformers", "PyTorch", "Computer Vision", "CUDA", "Custom Dataset Curation"],
      website: "https://pennadapt.wixsite.com/pennadapt",
      color: "from-purple-500 to-pink-600",
      icon: "ml",
    },
    {
      title: "Machine Learning Engineer Intern",
      company: "Clab AI",
      location: "Hybrid (Nashville & Remote)",
      period: "05/2024 - 08/2024",
      type: "Full-time",
      description:
        "Built an AI-powered admissions assistant platform now serving 100+ students, leveraging advanced machine learning techniques and data analysis to democratize college admissions guidance.",
      achievements: [
        "Built an AI-powered admissions assistant now used by 100+ students; performed comprehensive exploratory data analysis on 100+ university common datasets to uncover trends in financial aid awards",
        "Developed Random Forest and Linear Regression models with hyperparameter tuning that predict individual aid eligibility with 82% R² accuracy on validation data",
        "Automated data pipeline ETL scripts using Pandas and NumPy, reducing preprocessing time from hours to minutes and improving data workflow efficiency",
        "Assisted in training the AI co-pilot using reinforcement learning through human feedback (RLHF) to improve response quality and user satisfaction",
      ],
      technologies: [
        "Machine Learning",
        "Random Forest",
        "Linear Regression",
        "Pandas",
        "NumPy",
        "RLHF",
        "ETL Pipelines",
      ],
      website: "https://clabapp.ai/signin",
      color: "from-orange-500 to-red-600",
      icon: "intern",
    },
    {
      title: "Developer",
      company: "UPenn Game Development and Research Club",
      location: "Philadelphia, PA",
      period: "08/2023 - 10/2024",
      type: "Student Organization",
      description:
        "Contributed to collaborative game development projects, creating engaging 2D and 3D experiences while honing technical skills in Unity and C# programming within a team-based environment.",
      achievements: [
        "Designed team collaborative 2D and 3D games in Unity Game Engine using C#, publishing them on itch.io for public access and community engagement",
        "Crafted more than 50 interactive UIs including main menus, HUD elements, and real-time statistics tracking systems for performance analysis and user experience optimization",
        "Implemented comprehensive 3D physics and mechanics including gravity simulations, object collisions, instantiation systems, and dynamic lighting to create immersive gameplay experiences",
        "Collaborated with fellow developers in an agile team environment, contributing to multiple published game projects and learning industry-standard development practices",
      ],
      technologies: ["Unity", "C#", "Game Development", "3D Physics", "UI/UX Design", "itch.io"],
      website: "https://pennupgrade.com/",
      color: "from-indigo-500 to-cyan-600",
      icon: "gamedev",
    },
  ]

  // Updated stats to reflect your actual experience
  const stats = [
    { number: "1.5+", label: "Years Experience" },
    { number: "4", label: "Organizations" },
    { number: "100+", label: "Students Impacted" },
    { number: "15+", label: "Technologies Used" },
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
                className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Timeline dot with pulse effect */}
                <div
                  className={`absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full border-4 border-white shadow-lg z-10 ${hoveredIndex === index ? "animate-pulse" : ""
                    }`}
                ></div>

                {/* Content card */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-8"}`}>
                  <div
                    className={`bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group border-l-4 ${exp.color.includes("blue")
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
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
