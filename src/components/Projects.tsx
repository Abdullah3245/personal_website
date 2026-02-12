import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Penn Muslim Alumni Data",
    description:
      "Developed a full stack alumni-networking platform with a custom database connecting 200+ community members. Built user-friendly alumni profile pages with structured fields, and implemented search, filter, and job-posting features.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop",
    technologies: ["TypeScript", "PostgreSQL", "React", "Node.js", "Heroku"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-blue-500 to-purple-600",
    category: "Full Stack",
    status: "Live",
    highlights: [
      "Full stack platform connecting 200+ alumni",
      "Custom PostgreSQL database schema",
      "Search, filter, and job-posting features",
    ],
  },
  {
    title: "Steam Dataset EDA and Modeling",
    description:
      "Conducted data cleaning, preprocessing, and data visualisation to prepare dataset with 110k+ games for analysis. Built predictive models (Random Forest, XGBoost, LightGBM) to analyze factors influencing game success.",
    image: "./files/SteamDataSet.png",
    technologies: ["Python", "pandas", "scikit-learn", "SciPy", "matplotlib"],
    liveUrl: "https://colab.research.google.com/drive/1hapeUwkCeNfUn-uXfLU99tli3u7seR_M?usp=sharing",
    githubUrl: "https://github.com/Abdullah3245/Steam_Data_Analysis",
    gradient: "from-green-500 to-teal-600",
    category: "Data Science",
    status: "Completed",
    highlights: [
      "Processed 110k+ games with data cleaning and visualization",
      "Built predictive models with Random Forest, XGBoost, LightGBM",
      "EDA with Matplotlib, Seaborn, Plotly to visualize feature importance",
    ],
  },
  {
    title: "West Coast EV Explorer Platform",
    description:
      "Designed and implemented a normalized relational database schema about EVs and charging stations across the west coast. Developed materialized views and optimized SQL queries to support fast data fetching from the database of 100k+ rows.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format&fit=crop",
    technologies: ["PostgreSQL", "PostGIS", "Node.js", "Express", "React"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-purple-500 to-indigo-600",
    category: "Full Stack",
    status: "Completed",
    highlights: [
      "Normalized relational database with 100k+ rows",
      "Materialized views for optimized queries",
      "Backend APIs for zip-code EV lookups and nearest charger search",
    ],
  },
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
    title: "J to RISC-V Compiler",
    description:
      "Designed and implemented a compiler (jc) to translate programs written in a stack-oriented language (J) into RISC-V assembly code with full interoperability support.",
    image: "/files/image.png",
    technologies: ["C", "RISC-V Assembly", "Compiler Design", "Token Parsing"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-purple-500 to-indigo-600",
    category: "Systems Programming",
    status: "Completed",
    highlights: [
      "Token parsing system with modular design (token.h/token.c)",
      "RISC-V assembly generation for arithmetic and logical operations",
      "Standard calling conventions for Clang interoperability",
    ],
  },
  {
    title: "Twitter Bot with Markov Chains",
    description:
      "Developed a machine learning model to generate tweets using Markov chain algorithms for statistical word sequence calculation, ensuring coherent and contextually relevant content generation.",
    image: "/files/twitterbot.jpeg",
    technologies: ["Java", "Markov Chains", "JUnit", "Machine Learning"],
    liveUrl: "#",
    githubUrl: "https://github.com/Abdullah3245/TwitterBot",
    gradient: "from-orange-500 to-red-600",
    category: "Machine Learning",
    status: "Completed",
    highlights: [
      "Markov chain algorithm for statistical word sequence calculation",
      "Comprehensive testing and fine-tuning with 90% code coverage",
      "Enhanced engagement through coherent tweet generation",
    ],
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Featured Projects</h2>
        <p className="text-gray-600 mb-8">Here are some of the projects I've worked on:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
