"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface JourneyCardProps {
  /** Two-digit step index, e.g. "01". */
  index: string
  /** Short technical kicker shown above the title in green mono. */
  kicker?: string
  /** Section title — kept tight. */
  title: ReactNode
  /** Optional one-line description below the title. */
  description?: ReactNode
  /** Card body. */
  children?: ReactNode
  /** Right-aligned meta in the kicker row (e.g. "2024 — present"). */
  meta?: ReactNode
  /** className for the outer section wrapper. */
  className?: string
  /** Pull the card to a different alignment. Default: left. */
  align?: "left" | "right" | "center"
  /** id for nav anchor. */
  id?: string
}

/**
 * One panel in the scroll journey. Fades up from below when scrolled into
 * view. Sits on top of the fixed Spline background.
 */
export default function JourneyCard({
  index,
  kicker,
  title,
  description,
  children,
  meta,
  className = "",
  align = "left",
  id,
}: JourneyCardProps) {
  const ref = useRef<HTMLElement>(null)
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

  const alignClass =
    align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""

  return (
    <section
      id={id}
      ref={ref}
      className={`relative z-10 px-6 md:px-10 lg:px-16 py-24 md:py-32 ${className}`}
    >
      <div
        className={`journey-card max-w-3xl w-full p-8 md:p-12 ${alignClass}`}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(28px)",
          transition:
            "opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="flex items-baseline justify-between gap-6 mb-3">
          <span className="micro-label-accent">
            {`§${index}`}
            {kicker && (
              <span
                className="ml-3"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                / {kicker}
              </span>
            )}
          </span>
          {meta && <span className="micro-label">{meta}</span>}
        </div>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight"
          style={{ color: "var(--c-fg)", lineHeight: 1.05 }}
        >
          {title}
        </h2>

        {description && (
          <p
            className="mt-4 text-base md:text-lg max-w-2xl"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            {description}
          </p>
        )}

        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}
