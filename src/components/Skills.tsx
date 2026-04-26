"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Database, Brain, Wrench, Palette } from "lucide-react"

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Python", "JavaScript", "TypeScript", "Java", "SQL", "C"],
  },
  {
    title: "Frontend",
    icon: Palette,
    skills: ["React", "Vite", "HTML/CSS", "Tailwind", "Redux", "Figma"],
  },
  {
    title: "Backend / Data",
    icon: Database,
    skills: ["Node.js", "Express", "Django", "MongoDB", "PostgreSQL", "DuckDB"],
  },
  {
    title: "ML / AI",
    icon: Brain,
    skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "XGBoost", "CV", "NLP"],
  },
  {
    title: "Data Science",
    icon: Database,
    skills: ["Pandas", "NumPy", "Matplotlib", "Stats", "Feature Engineering"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "Docker", "AWS", "Cypress", "JUnit", "Web Scraping"],
  },
]

const FOCUS = [
  "Data Science",
  "Machine Learning",
  "Full-Stack",
  "Big Data Analytics",
  "Computer Vision",
]

function CategoryCard({
  category,
  index,
}: {
  category: (typeof SKILL_CATEGORIES)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const Icon = category.icon

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

  return (
    <div
      ref={ref}
      className="journey-card p-6"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
        transition:
          "opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${(index % 3) * 80}ms`,
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="p-2 flex items-center justify-center"
          style={{
            border: "1px solid hsl(var(--primary) / 0.4)",
            background: "hsl(var(--primary) / 0.12)",
            borderRadius: "0.125rem",
          }}
        >
          <Icon size={16} style={{ color: "var(--c-primary)" }} />
        </div>
        <h3
          className="text-base md:text-lg font-semibold tracking-tight"
          style={{ color: "var(--c-fg)" }}
        >
          {category.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-1 text-xs"
            style={{
              border: "1px solid hsl(var(--border))",
              color: "hsl(var(--foreground) / 0.85)",
              borderRadius: "0.125rem",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 px-6 md:px-10 lg:px-16 py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        <header className="mb-14">
          <p className="micro-label-accent mb-3">§03 / Skills</p>
          <h2
            className="text-3xl md:text-5xl font-semibold tracking-tight"
            style={{ color: "var(--c-fg)", lineHeight: 1.05 }}
          >
            The stack.
          </h2>
          <p
            className="mt-4 max-w-xl"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Languages, frameworks, and tools I reach for to build impactful
            solutions.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SKILL_CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.title} category={cat} index={i} />
          ))}
        </div>

        <div className="mt-14">
          <p className="micro-label mb-4">Current focus</p>
          <div className="flex flex-wrap gap-2">
            {FOCUS.map((f) => (
              <span
                key={f}
                className="px-4 py-2 text-sm"
                style={{
                  border: "1px solid hsl(var(--primary) / 0.5)",
                  background: "hsl(var(--primary) / 0.10)",
                  color: "var(--c-primary)",
                  borderRadius: "0.125rem",
                }}
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
