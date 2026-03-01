"use client"

import { useEffect, useRef } from "react"

interface Ball {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  opacity: number
}

const COLORS = [
  "59, 130, 246",   // blue-500
  "99, 102, 241",   // indigo-500
  "139, 92, 246",   // violet-500
  "168, 85, 247",   // purple-500
  "96, 165, 250",   // blue-400
]

const MOUSE_RADIUS = 130
const REPEL_STRENGTH = 7
const DAMPING = 0.995
const BASE_SPEED = 1.2
const NUM_BALLS = 70

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const animFrameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Track mouse position
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 }
    }
    window.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("mouseleave", onMouseLeave)

    // Touch support
    const onTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect()
      const t = e.touches[0]
      mouseRef.current = { x: t.clientX - rect.left, y: t.clientY - rect.top }
    }
    window.addEventListener("touchmove", onTouchMove, { passive: true })
    window.addEventListener("touchend", onMouseLeave)

    // Create balls
    const balls: Ball[] = []
    for (let i = 0; i < NUM_BALLS; i++) {
      const radius = Math.random() * 10 + 5
      balls.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * BASE_SPEED * 2,
        vy: (Math.random() - 0.5) * BASE_SPEED * 2,
        radius,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        opacity: Math.random() * 0.35 + 0.25,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const mouse = mouseRef.current

      balls.forEach((ball) => {
        // Mouse repulsion
        const dx = ball.x - mouse.x
        const dy = ball.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS
          const angle = Math.atan2(dy, dx)
          ball.vx += Math.cos(angle) * force * REPEL_STRENGTH
          ball.vy += Math.sin(angle) * force * REPEL_STRENGTH
        }

        // Wander: small random nudge each frame to keep balls moving
        ball.vx += (Math.random() - 0.5) * 0.08
        ball.vy += (Math.random() - 0.5) * 0.08

        // Damping
        ball.vx *= DAMPING
        ball.vy *= DAMPING

        // Clamp speed between min and max
        const speed = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy)
        const maxSpeed = 9
        if (speed > maxSpeed) {
          ball.vx = (ball.vx / speed) * maxSpeed
          ball.vy = (ball.vy / speed) * maxSpeed
        } else if (speed < BASE_SPEED && speed > 0) {
          ball.vx = (ball.vx / speed) * BASE_SPEED
          ball.vy = (ball.vy / speed) * BASE_SPEED
        }

        // Update position
        ball.x += ball.vx
        ball.y += ball.vy

        // Bounce off edges
        if (ball.x - ball.radius < 0) {
          ball.x = ball.radius
          ball.vx = Math.abs(ball.vx)
        } else if (ball.x + ball.radius > canvas.width) {
          ball.x = canvas.width - ball.radius
          ball.vx = -Math.abs(ball.vx)
        }
        if (ball.y - ball.radius < 0) {
          ball.y = ball.radius
          ball.vy = Math.abs(ball.vy)
        } else if (ball.y + ball.radius > canvas.height) {
          ball.y = canvas.height - ball.radius
          ball.vy = -Math.abs(ball.vy)
        }

        // Draw ball with soft glow
        const gradient = ctx.createRadialGradient(
          ball.x - ball.radius * 0.3,
          ball.y - ball.radius * 0.3,
          ball.radius * 0.1,
          ball.x,
          ball.y,
          ball.radius
        )
        gradient.addColorStop(0, `rgba(${ball.color}, ${ball.opacity + 0.2})`)
        gradient.addColorStop(1, `rgba(${ball.color}, ${ball.opacity * 0.3})`)

        ctx.beginPath()
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Subtle border
        ctx.beginPath()
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(${ball.color}, ${ball.opacity * 0.6})`
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // Draw connecting lines between nearby balls
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          const dx = balls[i].x - balls[j].x
          const dy = balls[i].y - balls[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(balls[i].x, balls[i].y)
            ctx.lineTo(balls[j].x, balls[j].y)
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.12 * (1 - dist / 120)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", onMouseMove)
      canvas.removeEventListener("mouseleave", onMouseLeave)
      window.removeEventListener("touchmove", onTouchMove)
      window.removeEventListener("touchend", onMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      style={{ zIndex: 1, cursor: "none" }}
    />
  )
}
