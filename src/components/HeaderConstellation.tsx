"use client"

import { useEffect, useRef, useState } from "react"

interface HeaderConstellationProps {
  /** Horizontal center (px, relative to header) the cluster drifts toward. */
  focusX: number | null
  /** Vertical center (px) the cluster drifts toward. */
  focusY: number | null
}

/**
 * Live constellation across the header band. Nodes drift freely and randomly
 * (wrapping at the edges) like the showcase Constellation mode — but feel a
 * GENTLE gravitational bias toward the active section's nav label, so density
 * is only slightly higher there, never a tight glued cluster. The bias point
 * glides smoothly as the active section changes on scroll.
 *
 * The cursor is an extra node that weaves brighter links and tugs nearby
 * points. Blue/purple, desktop-only, reduced-motion safe.
 */
export default function HeaderConstellation({ focusX, focusY }: HeaderConstellationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const focusRef = useRef<{ x: number; y: number } | null>(null)
  const [enabled] = useState(() => {
    if (typeof window === "undefined") return true
    return !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  })

  // keep the live focus target in a ref so prop changes don't reinit the scene
  useEffect(() => {
    if (focusX == null || focusY == null) return
    focusRef.current = { x: focusX, y: focusY }
  }, [focusX, focusY])

  useEffect(() => {
    if (!enabled) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const DPR = Math.min(2, window.devicePixelRatio || 1)
    let W = 0
    let H = 0
    const parent = canvas.parentElement as HTMLElement

    const resize = () => {
      const r = parent.getBoundingClientRect()
      W = Math.max(1, r.width)
      H = Math.max(1, r.height)
      canvas.width = Math.round(W * DPR)
      canvas.height = Math.round(H * DPR)
      canvas.style.width = W + "px"
      canvas.style.height = H + "px"
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
    }
    resize()

    // smoothed bias point the field leans toward (lerps to focusRef target)
    const focus = { x: W * 0.16, y: H / 2 }

    const COUNT = Math.max(34, Math.min(70, Math.round(W / 22)))
    type Node = { x: number; y: number; vx: number; vy: number; r: number }
    const nodes: Node[] = []
    for (let i = 0; i < COUNT; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.26,
        vy: (Math.random() - 0.5) * 0.26,
        r: Math.random() * 1.5 + 0.8,
      })
    }

    const mouse = { x: -9999, y: -9999, on: false }
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
      mouse.on = mouse.x >= 0 && mouse.x <= W && mouse.y >= 0 && mouse.y <= H
    }
    const onLeave = () => {
      mouse.on = false
      mouse.x = -9999
      mouse.y = -9999
    }
    window.addEventListener("mousemove", onMove, { passive: true })
    window.addEventListener("mouseleave", onLeave)
    window.addEventListener("resize", resize)

    const LINK = 124 // px link distance
    const BIAS = 0.1 // weak pull toward focus (accel units/sec) — keeps it loose
    const MAX_SPEED = 0.4
    let raf = 0
    let lastT = performance.now()

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame)
      const dt = Math.min(0.05, (now - lastT) / 1000)
      lastT = now
      ctx.clearRect(0, 0, W, H)

      // glide the bias point toward the active section
      const target = focusRef.current ?? { x: W * 0.16, y: H / 2 }
      focus.x += (target.x - focus.x) * 0.05
      focus.y += (target.y - focus.y) * 0.05

      for (const n of nodes) {
        // gentle gravitational bias toward focus — stronger the farther out,
        // so nodes wander everywhere but linger a bit more near the section.
        const dx = focus.x - n.x
        const dy = focus.y - n.y
        const dist = Math.hypot(dx, dy) || 1
        const pull = BIAS * dt
        n.vx += (dx / dist) * pull
        n.vy += (dy / dist) * pull * 0.7

        // perpetual tiny random wander so motion stays organic
        n.vx += (Math.random() - 0.5) * 0.03
        n.vy += (Math.random() - 0.5) * 0.03

        // clamp speed
        const sp = Math.hypot(n.vx, n.vy)
        if (sp > MAX_SPEED) {
          n.vx = (n.vx / sp) * MAX_SPEED
          n.vy = (n.vy / sp) * MAX_SPEED
        }

        n.x += n.vx
        n.y += n.vy

        // wrap at the edges (free-roaming field)
        if (n.x < -20) n.x = W + 20
        if (n.x > W + 20) n.x = -20
        if (n.y < -20) n.y = H + 20
        if (n.y > H + 20) n.y = -20
      }

      // node-to-node links
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < LINK) {
            const alpha = (1 - d / LINK) * 0.4
            const hue = 232 + (a.y / Math.max(1, H)) * 40 // blue→purple
            ctx.strokeStyle = `hsla(${hue}, 90%, 72%, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // cursor as an extra node: weave links + tug nearby nodes
      if (mouse.on) {
        const MR = LINK * 1.6
        for (const n of nodes) {
          const dx = n.x - mouse.x
          const dy = n.y - mouse.y
          const d = Math.hypot(dx, dy)
          if (d < MR) {
            const alpha = (1 - d / MR) * 0.7
            ctx.strokeStyle = `hsla(268, 92%, 76%, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(mouse.x, mouse.y)
            ctx.lineTo(n.x, n.y)
            ctx.stroke()
            n.vx -= (dx / (d || 1)) * 0.02
            n.vy -= (dy / (d || 1)) * 0.02
          }
        }
      }

      // draw nodes
      for (const n of nodes) {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(180, 192, 255, 0.85)"
        ctx.fill()
      }
    }
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseleave", onLeave)
      window.removeEventListener("resize", resize)
    }
  }, [enabled])

  if (!enabled) return null
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
