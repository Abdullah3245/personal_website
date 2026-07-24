"use client"

import ExperienceGraph from "./ExperienceGraph"

export default function Experience() {
  return (
    <section
      className="relative z-10 px-6 md:px-10 lg:px-16 py-24 md:py-32"
    >
      <div className="max-w-5xl mx-auto">
        <header className="mb-12">
          <p className="micro-label-accent mb-3">§01 / Experience</p>
          <h2
            className="text-3xl md:text-5xl font-semibold tracking-tight"
            style={{ color: "var(--c-fg)", lineHeight: 1.05 }}
          >
            A network of roles.
          </h2>
          <p
            className="mt-4 max-w-xl"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            ML at AeternalLabs and PennAdapt, research at Penn's CSS Lab,
            full-stack engineering at CHOP, and analytics at Clab AI. Hover any
            node to explore the role.
          </p>
        </header>

        <ExperienceGraph />
      </div>
    </section>
  )
}
