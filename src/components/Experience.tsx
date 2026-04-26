"use client"

import { Calendar, MapPin, ExternalLink, Briefcase, Cpu, Code2, FlaskConical } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface ExperienceItem {
  title: string
  company: string
  /** Optional fuller name shown in smaller type beneath the company. */
  subCompany?: string
  location: string
  period: string
  type: string
  description: string
  achievements: string[]
  technologies: string[]
  website: string
  icon: "research" | "frontend" | "ml" | "intern"
}

const EXPERIENCES: ExperienceItem[] = [
  {
    title: "Machine Learning Engineer",
    company: "PennAdapt",
    subCompany: "Penn Assistive Devices and Prosthetic Technologies",
    location: "Philadelphia, PA",
    period: "09/2024 — Present",
    type: "Student Org",
    description:
      "Collaborated in a team of 10 engineers to develop a computer vision model for counting and identifying surgical tools in real-time during procedures, enhancing surgical precision and safety.",
    achievements: [
      "Curated and annotated a custom 1500+ image dataset in collaboration with surgeons and nurses at Penn Medicine",
      "Trained deep CNN and Vision Transformer models, fine-tuned through iterative optimization to 90%+ accuracy across varying tool angles",
    ],
    technologies: ["PyTorch", "Computer Vision", "CNN", "ViT", "Deep Learning"],
    website: "https://pennadapt.wixsite.com/pennadapt",
    icon: "ml",
  },
  {
    title: "Data Science Research Assistant",
    company: "Computational Social Science Lab",
    location: "Philadelphia, PA",
    period: "05/2025 — 12/2025",
    type: "Full-time",
    description:
      "Collaborate with the Disaster Management team to derive key mobility and infrastructure metrics for disaster and tourist management during the 2026 FIFA World Cup.",
    achievements: [
      "Analyze multi-terabyte GPS mobility geospatial datasets (Meta Crisis Population, Factori, SafeGraph) using Apache PySpark on AWS EMR to compute high-resolution crowd-density and movement trends",
      "Visualized insights through heat maps and geospatial plots of GPS pings and POI polygons using Matplotlib and GeoPandas",
      "Developed a Generative AI (RAG) extraction pipeline to identify quantitative mobility metrics from 100s of scholarly papers",
    ],
    technologies: ["Apache PySpark", "AWS EMR", "Matplotlib", "GeoPandas", "RAG", "Geospatial"],
    website: "https://css.seas.upenn.edu/",
    icon: "research",
  },
  {
    title: "Full Stack Web Developer",
    company: "Children's Hospital of Philadelphia",
    location: "Philadelphia, PA",
    period: "11/2024 — 08/2025",
    type: "Part-time",
    description:
      "Assisted in development of Compsy full stack web app used by researchers to design behavioral and clinical experiments.",
    achievements: [
      "Designed responsive dashboard and 15+ data-entry forms (create / edit / delete) using React + Vite + Tailwind, integrated via REST API to a NoSQL MongoDB",
      "Implemented secure stateless authentication (JWT in HTTP-only cookies) and context-based user data fetching",
      "Added responsive design through media queries and component-level breakpoints across desktop, tablet, and mobile",
    ],
    technologies: ["React", "Vite", "Tailwind", "MongoDB", "REST", "JWT"],
    website: "https://www.research.chop.edu/people/birkan-tunc",
    icon: "frontend",
  },
  {
    title: "Data Analyst Intern",
    company: "Clab AI",
    location: "Hybrid · Nashville",
    period: "05/2024 — 08/2024",
    type: "Full-time",
    description:
      "Assisted in development of an AI-powered college application assistant used by 100+ students to improve admission outcomes.",
    achievements: [
      "Performed extensive EDA, data cleaning, and visualization on a dataset of 100+ universities, surfacing trends in financial-aid awards and admissions patterns",
      "Built Random-Forest and Linear-Regression models with hyper-parameter tuning that predicted aid eligibility with 82% R² on validation",
      "Fine-tuned LLMs on accepted Common App essays with RLHF to improve personalization and writing guidance",
    ],
    technologies: ["Python", "Random Forest", "Pandas", "EDA", "RLHF", "LLMs"],
    website: "https://clabapp.ai/signin",
    icon: "intern",
  },
]

function ExpIcon({ icon }: { icon: ExperienceItem["icon"] }) {
  const Icon =
    icon === "research"
      ? FlaskConical
      : icon === "frontend"
      ? Code2
      : icon === "ml"
      ? Cpu
      : Briefcase
  return <Icon size={18} style={{ color: "var(--c-primary)" }} />
}

function ExperienceRow({ exp, index }: { exp: ExperienceItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

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
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="journey-card p-7 md:p-9"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(28px)",
        transition:
          "opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${Math.min(index * 90, 270)}ms`,
      }}
    >
      <div className="flex items-baseline justify-between gap-4 mb-3">
        <span className="micro-label-accent">
          {String(index + 1).padStart(2, "0")} · {exp.type}
        </span>
        <span className="micro-label">{exp.period}</span>
      </div>

      <div className="flex items-start gap-4 mb-2">
        <ExpIcon icon={exp.icon} />
        <div className="flex-1">
          <h3
            className="text-xl md:text-2xl font-semibold tracking-tight"
            style={{ color: "var(--c-fg)" }}
          >
            {exp.title}
          </h3>
          <div
            className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            <span style={{ color: "var(--c-fg)", fontWeight: 500 }}>
              {exp.company}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1 text-sm">
              <MapPin size={13} /> {exp.location}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1 text-sm">
              <Calendar size={13} /> {exp.period}
            </span>
          </div>
          {exp.subCompany && (
            <p
              className="mt-1 text-xs"
              style={{
                color: "hsl(var(--muted-foreground))",
                letterSpacing: "0.02em",
              }}
            >
              {exp.subCompany}
            </p>
          )}
        </div>
        <a
          href={exp.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs uppercase tracking-[0.16em] flex items-center gap-1 transition-colors"
          style={{ color: "hsl(var(--muted-foreground))" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--c-primary)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "hsl(var(--muted-foreground))")
          }
        >
          Visit <ExternalLink size={12} />
        </a>
      </div>

      <p
        className="mt-4 text-sm md:text-base leading-relaxed"
        style={{ color: "hsl(var(--foreground) / 0.82)" }}
      >
        {exp.description}
      </p>

      <ul className="mt-5 space-y-2">
        {exp.achievements.map((a, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-sm md:text-[0.95rem] leading-relaxed"
            style={{ color: "hsl(var(--foreground) / 0.78)" }}
          >
            <span
              className="mt-2 inline-block w-2 h-2 flex-shrink-0"
              style={{ background: "var(--c-primary)" }}
            />
            <span>{a}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {exp.technologies.map((t) => (
          <span
            key={t}
            className="px-3 py-1 text-xs"
            style={{
              border: "1px solid hsl(var(--border))",
              color: "hsl(var(--foreground) / 0.85)",
              borderRadius: "0.125rem",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 px-6 md:px-10 lg:px-16 py-24 md:py-32"
    >
      <div className="max-w-5xl mx-auto">
        <header className="mb-14">
          <p className="micro-label-accent mb-3">§01 / Experience</p>
          <h2
            className="text-3xl md:text-5xl font-semibold tracking-tight"
            style={{ color: "var(--c-fg)", lineHeight: 1.05 }}
          >
            Where I've shipped.
          </h2>
          <p
            className="mt-4 max-w-xl"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Research at Penn, full-stack engineering at CHOP, applied ML at
            PennAdapt, and analytics at Clab AI.
          </p>
        </header>

        <div className="space-y-6 md:space-y-8">
          {EXPERIENCES.map((exp, i) => (
            <ExperienceRow key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
