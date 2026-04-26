import { useEffect, useRef, useState } from "react"

/**
 * Returns the page scroll progress as a 0..1 number, recomputed on every
 * scroll/resize. Also writes the value to `document.documentElement` as a
 * CSS custom property `--scroll-progress` so widgets (e.g. the Spline
 * container) can consume it without re-rendering.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const compute = () => {
      const scrollHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
      )
      const viewport = window.innerHeight
      const max = Math.max(1, scrollHeight - viewport)
      const p = Math.min(1, Math.max(0, window.scrollY / max))
      setProgress(p)
      document.documentElement.style.setProperty("--scroll-progress", String(p))
    }

    const onScroll = () => {
      if (rafRef.current != null) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        compute()
      })
    }

    compute()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", compute)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", compute)
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return progress
}
