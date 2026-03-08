import { useState } from "react"
import { ExternalLink, Github, ChevronRight, Zap } from "lucide-react"

const projects = [
  {
    title: "Nomad",
    description:
      "Designed and built Nomad, a full-stack human-mobility research platform to make human mobility datasets, algorithms, and resources more accessible to Computational Social Science researchers.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-12%20at%205.50.44%E2%80%AFPM-zCmAflXehiF8X4bwQJTX4IYmHMZVx6.png",
    technologies: ["React", "Vite", "Express", "MongoDB", "AWS S3", "Cypress", "Vitest", "LLMs"],
    liveUrl: "https://nomad.seas.upenn.edu",
    githubUrl: "#",
    category: "Full Stack",
    status: "Live",
    accentFrom: "#3b82f6",
    accentTo: "#8b5cf6",
    highlights: [
      "Custom MVC architecture with Express and MongoDB RESTful APIs",
      "AWS S3 cloud storage for mobility literature scalability",
      "High test coverage with Cypress (frontend) and Vitest (backend)",
      "Automated LLM pipeline to extract JSON from 100+ scholarly papers",
    ],
  },
  {
    title: "Penn Muslim Alumni Data",
    description:
      "Full-stack alumni-networking platform with a custom database connecting 200+ community members. Built profile pages with structured fields, search, filter, and job-posting features.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop",
    technologies: ["TypeScript", "PostgreSQL", "React", "Node.js", "Heroku"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
    status: "Live",
    accentFrom: "#2563eb",
    accentTo: "#7c3aed",
    highlights: [
      "Full-stack platform connecting 200+ alumni",
      "Custom PostgreSQL database schema",
      "Search, filter, and job-posting features",
    ],
  },
  {
    title: "Steam Dataset EDA",
    description:
      "Data cleaning, preprocessing, and visualisation of 110k+ games dataset. Built predictive models (Random Forest, XGBoost, LightGBM) to analyze factors influencing game success.",
    image: "./files/SteamDataSet.png",
    technologies: ["Python", "pandas", "scikit-learn", "SciPy", "matplotlib"],
    liveUrl: "https://colab.research.google.com/drive/1hapeUwkCeNfUn-uXfLU99tli3u7seR_M?usp=sharing",
    githubUrl: "https://github.com/Abdullah3245/Steam_Data_Analysis",
    category: "Data Science",
    status: "Completed",
    accentFrom: "#10b981",
    accentTo: "#0d9488",
    highlights: [
      "Processed 110k+ games with data cleaning and visualization",
      "Random Forest, XGBoost, LightGBM predictive models",
      "EDA with Matplotlib, Seaborn, Plotly",
    ],
  },
  {
    title: "West Coast EV Explorer",
    description:
      "Normalized relational database schema for EVs and charging stations across the west coast. Materialized views and optimized SQL queries over 100k+ rows.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format&fit=crop",
    technologies: ["PostgreSQL", "PostGIS", "Node.js", "Express", "React"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
    status: "Completed",
    accentFrom: "#8b5cf6",
    accentTo: "#6366f1",
    highlights: [
      "Normalized relational DB with 100k+ rows",
      "Materialized views for optimized queries",
      "Backend APIs for zip-code EV lookups and nearest charger search",
    ],
  },
  {
    title: "AlumniConnectAI",
    description:
      "Scrape alumni information and connect with them through an intelligent matching system. Chrome extension for seamless LinkedIn integration with Stripe payment processing.",
    image: "./files/AlumniConnectAI.png",
    technologies: ["Vite + React", "Web Scraping", "Chrome Extension", "Stripe"],
    liveUrl: "https://alumniconnectai.lovable.app/",
    githubUrl: "https://github.com/Abdullah3245/AlumniConnectAI?tab=readme-ov-file",
    category: "Full Stack",
    status: "Live",
    accentFrom: "#3b82f6",
    accentTo: "#8b5cf6",
    highlights: [
      "Chrome extension for seamless LinkedIn integration",
      "Stripe payment processing for premium features",
      "AI-powered alumni matching algorithm",
    ],
  },
  {
    title: "J to RISC-V Compiler",
    description:
      "Compiler (jc) to translate programs in a stack-oriented language (J) into RISC-V assembly with full interoperability support and standard calling conventions.",
    image: "/files/image.png",
    technologies: ["C", "RISC-V Assembly", "Compiler Design", "Token Parsing"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Systems",
    status: "Completed",
    accentFrom: "#f59e0b",
    accentTo: "#ef4444",
    highlights: [
      "Token parsing system with modular design",
      "RISC-V assembly generation for arithmetic/logical ops",
      "Standard calling conventions for Clang interoperability",
    ],
  },
  {
    title: "Twitter Bot · Markov Chains",
    description:
      "Machine learning model generating tweets using Markov chain algorithms for statistical word sequence calculation ensuring coherent, contextually relevant content.",
    image: "/files/twitterbot.jpeg",
    technologies: ["Java", "Markov Chains", "JUnit", "Machine Learning"],
    liveUrl: "#",
    githubUrl: "https://github.com/Abdullah3245/TwitterBot",
    category: "ML",
    status: "Completed",
    accentFrom: "#f97316",
    accentTo: "#ef4444",
    highlights: [
      "Markov chain algorithm for word-sequence calculation",
      "90% code coverage with comprehensive JUnit testing",
      "Coherent tweet generation with fine-tuned model",
    ],
  },
]

const categoryColors: Record<string, string> = {
  "Full Stack": "bg-blue-100 text-blue-700",
  "Data Science": "bg-emerald-100 text-emerald-700",
  "Systems": "bg-amber-100 text-amber-700",
  "ML": "bg-orange-100 text-orange-700",
}

const statusColors: Record<string, string> = {
  Live: "bg-green-100 text-green-700",
  Completed: "bg-gray-100 text-gray-600",
}

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  category: string
  status: string
  accentFrom: string
  accentTo: string
  highlights: string[]
}

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col transition-all duration-500 cursor-pointer"
      style={{
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 20px 40px -8px ${project.accentFrom}30, 0 4px 12px -2px rgba(0,0,0,0.08)`
          : "0 1px 4px 0 rgba(0,0,0,0.06)",
        transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hovered ? "scale(1.07)" : "scale(1)" }}
        />
        {/* Gradient overlay – stronger on hover */}
        <div
          className="absolute inset-0 transition-opacity duration-400"
          style={{
            background: `linear-gradient(160deg, ${project.accentFrom}60, ${project.accentTo}80)`,
            opacity: hovered ? 0.55 : 0.2,
          }}
        />
        {/* Top chips */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[project.category] ?? "bg-gray-100 text-gray-600"}`}>
            {project.category}
          </span>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColors[project.status] ?? "bg-gray-100 text-gray-600"}`}>
            {project.status === "Live" && <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-1 align-middle" />}
            {project.status}
          </span>
        </div>
        {/* Action buttons – slide in on hover */}
        <div
          className="absolute bottom-3 right-3 flex gap-2 transition-all duration-300"
          style={{ opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)" : "translateY(8px)" }}
        >
          {project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow hover:bg-white transition-colors"
            >
              <ExternalLink size={12} /> Live
            </a>
          )}
          {project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow hover:bg-white transition-colors"
            >
              <Github size={12} /> Code
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Title + arrow */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold text-gray-900 leading-tight">{project.title}</h3>
          <ChevronRight
            size={18}
            className="flex-shrink-0 mt-0.5 text-gray-300 transition-all duration-300"
            style={{
              color: hovered ? project.accentFrom : undefined,
              transform: hovered ? "translateX(3px)" : "translateX(0)",
            }}
          />
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{project.description}</p>

        {/* Highlights */}
        <ul
          className="flex flex-col gap-1.5 overflow-hidden transition-all duration-500"
          style={{
            maxHeight: hovered ? "8rem" : "0px",
            opacity: hovered ? 1 : 0,
          }}
        >
          {project.highlights.slice(0, 3).map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
              <Zap size={11} className="flex-shrink-0 mt-0.5" style={{ color: project.accentFrom }} />
              {h}
            </li>
          ))}
        </ul>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
          {project.technologies.slice(0, 5).map((tech, i) => (
            <span
              key={i}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100 text-gray-600 transition-colors duration-300"
              style={hovered ? { borderColor: `${project.accentFrom}40`, color: project.accentFrom } : {}}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100 text-gray-400">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Bottom accent bar */}
      <div
        className="h-0.5 w-full transition-all duration-500"
        style={{
          background: `linear-gradient(to right, ${project.accentFrom}, ${project.accentTo})`,
          opacity: hovered ? 1 : 0,
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
        }}
      />
    </div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Projects
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto text-pretty">
            A selection of work spanning full-stack development, data science, and systems programming.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
