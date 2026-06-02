"use client"

import { motion, useScroll, useSpring } from "motion/react"

/**
 * Thin neon progress bar pinned to the top of the viewport. Tracks whole-page
 * scroll via motion's useScroll, smoothed with a spring so it glides rather
 * than snaps. Purely decorative (aria-hidden).
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      aria-hidden="true"
      style={{
        scaleX,
        transformOrigin: "0%",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 60,
        background:
          "linear-gradient(90deg, #4f7cff 0%, #6d6bff 50%, #a855f7 100%)",
        boxShadow: "0 0 12px rgba(109,107,255,0.7)",
      }}
    />
  )
}
