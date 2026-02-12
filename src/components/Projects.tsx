import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Penn Muslim Alumni Data",
    description:
      "Developed a full stack alumni-networking platform with a custom database connecting 200+ community members. Built user-friendly alumni profile pages with structured fields, and implemented search, filter, and job-posting features.",
    image: "./files/AlumniConnectAI.png",
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
    image: "/files/image.png",
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
