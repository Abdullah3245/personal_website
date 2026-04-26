"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, Zap, ArrowUpRight } from "lucide-react"

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  category: string
  status: string
  highlights: string[]
}

const PROJECTS: Project[] = [
  {
    title: "Nomad",
    description:
      "Full-stack human-mobility research platform making mobility datasets, algorithms, and resources accessible to Computational Social Science researchers.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-02-12%20at%205.50.44%E2%80%AFPM-zCmAflXehiF8X4bwQJTX4IYmHMZVx6.png",
    technologies: ["React", "Vite", "Express", "MongoDB", "AWS S3", "Cypress", "Vitest", "LLMs"],
    liveUrl: "https://nomad.seas.upenn.edu",
    githubUrl: "#",
    category: "Full Stack",
    status: "Live",
    highlights: [
      "Custom MVC architecture with Express + MongoDB REST APIs",
      "AWS S3 cloud storage for mobility literature",
      "High test coverage with Cypress + Vitest",
      "Automated LLM pipeline extracts JSON from 100+ scholarly papers",
    ],
  },
  {
    title: "Penn Muslim Alumni Data",
    description:
      "Full-stack alumni-networking platform with a custom database connecting 200+ community members. Profile pages with structured fields, search, filter, and job-posting features.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop",
    technologies: ["TypeScript", "PostgreSQL", "React", "Node.js", "Heroku"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
    status: "Live",
    highlights: [
      "Connects 200+ alumni with custom PostgreSQL schema",
      "Search, filter, and job-posting features",
    ],
  },
  {
    title: "Steam Dataset EDA",
    description:
      "Data cleaning, preprocessing, and visualisation of a 110k+ games dataset. Predictive models analyzing factors influencing game success.",
    image: "./files/SteamDataSet.png",
    technologies: ["Python", "pandas", "scikit-learn", "SciPy", "matplotlib"],
    liveUrl: "https://colab.research.google.com/drive/1hapeUwkCeNfUn-uXfLU99tli3u7seR_M?usp=sharing",
    githubUrl: "https://github.com/Abdullah3245/Steam_Data_Analysis",
    category: "Data Science",
    status: "Completed",
    highlights: [
      "Processed 110k+ games with cleaning + visualization",
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
    highlights: [
      "Normalized relational DB with 100k+ rows",
      "Materialized views for optimized queries",
      "APIs for zip-code EV lookups + nearest-charger search",
    ],
  },
  {
    title: "AlumniConnectAI",
    description:
      "Scrape alumni information and connect through an intelligent matching system. Chrome extension for seamless LinkedIn integration with Stripe payments.",
    image: "./files/AlumniConnectAI.png",
    technologies: ["Vite + React", "Web Scraping", "Chrome Extension", "Stripe"],
    liveUrl: "https://alumniconnectai.lovable.app/",
    githubUrl: "https://github.com/Abdullah3245/AlumniConnectAI?tab=readme-ov-file",
    category: "Full Stack",
    status: "Live",
    highlights: [
      "Chrome extension for LinkedIn integration",
      "Stripe payment processing for premium features",
      "AI-powered alumni matching algorithm",
    ],
  },
  {
    title: "J → RISC-V Compiler",
    description:
      "Compiler (jc) translating programs in a stack-oriented language (J) into RISC-V assembly with full Clang interoperability and standard calling conventions.",
    image: "/files/image.png",
    technologies: ["C", "RISC-V Assembly", "Compiler Design", "Token Parsing"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Systems",
    status: "Completed",
    highlights: [
      "Token parsing system with modular design",
      "RISC-V assembly generation for arithmetic / logical ops",
      "Standard calling conventions for Clang interop",
    ],
  },
  {
    title: "Twitter Bot · Markov Chains",
    description:
      "ML model generating tweets via Markov-chain word-sequence calculation, ensuring coherent and contextually relevant content.",
    image: "/files/twitterbot.jpeg",
    technologies: ["Java", "Markov Chains", "JUnit", "Machine Learning"],
    liveUrl: "#",
    githubUrl: "https://github.com/Abdullah3245/TwitterBot",
    category: "ML",
    status: "Completed",
    highlights: [
      "Markov chain algorithm for word-sequence calculation",
      "90% code coverage with JUnit testing",
    ],
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const tiltRaf = useRef<number | null>(null)
  const tilt = useRef({ rx: 0, ry: 0, mx: 50, my: 50 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true)
            io.disconnect()
            break
          }
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Apply tilt directly on the inner div (avoids React state thrash on
  // every mousemove). The outer wrapper still owns the fade-up state.
  const applyTilt = () => {
    const inner = innerRef.current
    if (!inner) return
    inner.style.transform = `perspective(900px) rotateX(${tilt.current.rx}deg) rotateY(${tilt.current.ry}deg) translateZ(0)`
    inner.style.setProperty("--mx", `${tilt.current.mx}%`)
    inner.style.setProperty("--my", `${tilt.current.my}%`)
  }

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = ref.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    // tilt range: ±9°, inverted Y feels right
    tilt.current.ry = (px - 0.5) * 18
    tilt.current.rx = -(py - 0.5) * 14
    tilt.current.mx = px * 100
    tilt.current.my = py * 100
    if (tiltRaf.current == null) {
      tiltRaf.current = requestAnimationFrame(() => {
        tiltRaf.current = null
        applyTilt()
      })
    }
  }
  const onEnter = () => setHovered(true)
  const onLeave = () => {
    setHovered(false)
    tilt.current.rx = 0
    tilt.current.ry = 0
    applyTilt()
  }

  const isLive = project.status === "Live"

  return (
    <div
      ref={ref}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseMove={onMove}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(28px)",
        transition:
          "opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${(index % 3) * 90}ms`,
        perspective: "900px",
      }}
    >
    <div
      ref={innerRef}
      className="journey-card flex flex-col overflow-hidden cursor-pointer relative"
      style={{
        transformStyle: "preserve-3d",
        transition:
          "transform 220ms cubic-bezier(0.16, 1, 0.3, 1), border-color 220ms ease, box-shadow 220ms ease",
        borderColor: hovered ? "var(--c-primary)" : undefined,
        boxShadow: hovered
          ? "0 12px 40px -10px hsl(var(--primary) / 0.35), 0 4px 18px -6px rgba(0,0,0,0.4)"
          : "0 1px 4px 0 rgba(0,0,0,0.2)",
        willChange: "transform",
      }}
    >
      {/* cursor-following highlight (only visible on hover via opacity) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at var(--mx, 50%) var(--my, 50%), hsl(var(--primary) / 0.18), transparent 40%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 240ms ease",
          mixBlendMode: "screen",
          zIndex: 2,
          borderRadius: "inherit",
        }}
      />
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover"
          style={{
            transition: "transform 700ms ease, filter 400ms ease",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            filter: hovered ? "brightness(0.85)" : "brightness(0.7) saturate(0.9)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--hero-bg) / 0.0) 35%, hsl(var(--hero-bg) / 0.85) 100%)",
          }}
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span
            className="px-2 py-0.5 text-[10px] uppercase tracking-[0.16em]"
            style={{
              background: "hsl(var(--background) / 0.7)",
              color: "var(--c-fg)",
              border: "1px solid hsl(var(--border))",
              borderRadius: "0.125rem",
            }}
          >
            {project.category}
          </span>
          <span
            className="px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] flex items-center gap-1"
            style={{
              background: isLive
                ? "hsl(var(--primary) / 0.18)"
                : "hsl(var(--muted) / 0.5)",
              color: isLive ? "var(--c-primary)" : "hsl(var(--muted-foreground))",
              border: `1px solid ${
                isLive ? "hsl(var(--primary) / 0.4)" : "hsl(var(--border))"
              }`,
              borderRadius: "0.125rem",
            }}
          >
            {isLive && (
              <span
                className="inline-block w-1.5 h-1.5"
                style={{
                  background: "var(--c-primary)",
                  borderRadius: "50%",
                  boxShadow: "0 0 6px hsl(var(--primary))",
                }}
              />
            )}
            {project.status}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3
            className="text-lg font-semibold tracking-tight"
            style={{ color: "var(--c-fg)" }}
          >
            {project.title}
          </h3>
          <ArrowUpRight
            size={18}
            style={{
              color: hovered
                ? "var(--c-primary)"
                : "hsl(var(--muted-foreground))",
              transform: hovered ? "translate(2px,-2px)" : "none",
              transition: "transform 240ms ease, color 240ms ease",
            }}
          />
        </div>

        <p
          className="text-sm leading-relaxed line-clamp-3"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          {project.description}
        </p>

        <ul
          className="flex flex-col gap-1.5 overflow-hidden"
          style={{
            maxHeight: hovered ? "8rem" : "0px",
            opacity: hovered ? 1 : 0,
            transition: "max-height 400ms ease, opacity 240ms ease",
          }}
        >
          {project.highlights.slice(0, 3).map((h, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-xs leading-relaxed"
              style={{ color: "hsl(var(--foreground) / 0.78)" }}
            >
              <Zap
                size={11}
                className="flex-shrink-0 mt-0.5"
                style={{ color: "var(--c-primary)" }}
              />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {project.technologies.slice(0, 5).map((tech, i) => (
            <span
              key={i}
              className="px-2 py-0.5 text-[10px]"
              style={{
                border: "1px solid hsl(var(--border))",
                color: "hsl(var(--foreground) / 0.85)",
                borderRadius: "0.125rem",
              }}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span
              className="px-2 py-0.5 text-[10px]"
              style={{
                border: "1px solid hsl(var(--border))",
                color: "hsl(var(--muted-foreground))",
                borderRadius: "0.125rem",
              }}
            >
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        <div className="flex gap-3 pt-2">
          {project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-xs uppercase tracking-[0.14em] transition-colors"
              style={{ color: "var(--c-primary)" }}
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
              className="flex items-center gap-1 text-xs uppercase tracking-[0.14em]"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              <Github size={12} /> Code
            </a>
          )}
        </div>
      </div>
    </div>
    </div>
  )
}

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative z-10 px-6 md:px-10 lg:px-16 py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-14">
          <p className="micro-label-accent mb-3">§02 / Projects</p>
          <h2
            className="text-3xl md:text-5xl font-semibold tracking-tight"
            style={{ color: "var(--c-fg)", lineHeight: 1.05 }}
          >
            Selected work.
          </h2>
          <p
            className="mt-4 max-w-xl"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Full-stack apps, ML systems, data pipelines, and a compiler.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
