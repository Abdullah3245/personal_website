"use client"

import { useRef, type ReactNode } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"

interface MotionSectionProps {
  children: ReactNode
  id?: string
  className?: string
  /** Vertical parallax travel in px across the section's scroll range. */
  parallax?: number
}

/**
 * Wraps a section in two motion behaviours tied to vertical scroll:
 *   1. Reveal  — fades + lifts + de-blurs as it enters the viewport.
 *   2. Parallax — drifts slightly slower than the page for depth.
 *
 * Honors prefers-reduced-motion (renders a plain section, no transforms).
 */
export default function MotionSection({
  children,
  id,
  className = "",
  parallax = 60,
}: MotionSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // drift the content up as the section scrolls through the viewport
  const y = useTransform(scrollYProgress, [0, 1], [parallax, -parallax])
  // a gentle reveal envelope — soft dim at the edges only, so it never fights
  // the per-card fade-ups inside each section (CSS opacity multiplies).
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.16, 0.88, 1],
    [0.6, 1, 1, 0.7],
  )

  if (reduced) {
    return (
      <section id={id} ref={ref} className={className}>
        {children}
      </section>
    )
  }

  return (
    <section id={id} className={className}>
      {/* inner motion wrapper so the section's scroll anchor (id) stays put
          while only the content drifts */}
      <motion.div ref={ref} style={{ y, opacity }}>
        {children}
      </motion.div>
    </section>
  )
}
