"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

interface ThreeNameParticlesProps {
  text?: string
  className?: string
  /** Single solid color for both crisp text and particles. */
  color?: string
  /** Gradient start color (used if `color` is not set). */
  colorFrom?: string
  /** Gradient end color (used if `color` is not set). */
  colorTo?: string
}

/**
 * Inline particle text. Default state: crisp HTML text (solid or gradient).
 * On mount, runs an intro where particles assemble into the letters, then
 * fades to the crisp text. Hovering the text breaks it back into particles;
 * leaving the area lets them settle and the crisp text fades back in.
 *
 * Renders as an inline-block span — drop it inside an h1 next to other text.
 */
export default function ThreeNameParticles({
  text = "Abdullah Goher",
  className = "",
  color,
  colorFrom = "#2563eb",
  colorTo = "#9333ea",
}: ThreeNameParticlesProps) {
  const wrapperRef = useRef<HTMLSpanElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const canvasMountRef = useRef<HTMLSpanElement>(null)

  // Visual state controlled by React (drives CSS opacity transitions on
  // both the crisp <span> and the canvas wrapper).
  // "intro"      → canvas shown, text hidden
  // "settled"    → text shown, canvas hidden
  // "scattered"  → canvas shown, text hidden, mouse-repel active
  const [mode, setMode] = useState<"intro" | "settled" | "scattered">("intro")

  // refs for cross-effect communication
  const modeRef = useRef(mode)
  modeRef.current = mode

  useEffect(() => {
    const mount = canvasMountRef.current
    const textEl = textRef.current
    const wrapper = wrapperRef.current
    if (!mount || !textEl || !wrapper) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // ---------- size canvas to match the rendered text ----------
    let width = Math.max(1, textEl.offsetWidth)
    let height = Math.max(1, textEl.offsetHeight)
    // measured font size for the offscreen text canvas (matches CSS line-height)
    const computedStyle = window.getComputedStyle(textEl)
    let fontSize = parseFloat(computedStyle.fontSize) || 64
    let fontFamily = computedStyle.fontFamily || "Inter, sans-serif"
    let fontWeight = computedStyle.fontWeight || "700"

    // ---------- renderer / scene / camera ----------
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width, height)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)
    renderer.domElement.style.display = "block"
    renderer.domElement.style.width = "100%"
    renderer.domElement.style.height = "100%"

    const scene = new THREE.Scene()
    // Use orthographic so 1 world unit ~= 1 pixel — easy to align with text
    let camera = new THREE.OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, -1000, 1000)
    camera.position.z = 10

    // ---------- sample text into target points ----------
    const sampleText = (): { x: number; y: number }[] => {
      const off = document.createElement("canvas")
      const ctx = off.getContext("2d")!
      // Render at higher DPR for sharp sampling
      const dpr = Math.min(window.devicePixelRatio, 2)
      off.width = Math.ceil(width * dpr)
      off.height = Math.ceil(height * dpr)
      ctx.scale(dpr, dpr)
      ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`
      ctx.textBaseline = "middle"
      ctx.textAlign = "center"
      ctx.fillStyle = "#ffffff"
      ctx.fillText(text, width / 2, height / 2)

      const data = ctx.getImageData(0, 0, off.width, off.height).data
      const stride = Math.max(2, Math.round(fontSize / 28))
      const pts: { x: number; y: number }[] = []
      for (let y = 0; y < off.height; y += stride) {
        for (let x = 0; x < off.width; x += stride) {
          const alpha = data[(y * off.width + x) * 4 + 3]
          if (alpha > 128) {
            // Center & flip Y. Convert pixel coords → world coords matching
            // the orthographic camera.
            pts.push({
              x: x / dpr - width / 2,
              y: -(y / dpr - height / 2),
            })
          }
        }
      }
      return pts
    }

    let targets = sampleText()
    let particleCount = targets.length

    // ---------- particle buffers ----------
    const colorA = new THREE.Color(color || colorFrom)
    const colorB = new THREE.Color(color || colorTo)
    const tmp = new THREE.Color()

    const buildBuffers = (pts: { x: number; y: number }[]) => {
      const n = pts.length
      const positions = new Float32Array(n * 3)
      const tgts = new Float32Array(n * 3)
      const colors = new Float32Array(n * 3)
      const offsets = new Float32Array(n)

      let minX = Infinity, maxX = -Infinity
      for (const p of pts) {
        if (p.x < minX) minX = p.x
        if (p.x > maxX) maxX = p.x
      }
      const range = Math.max(1, maxX - minX)

      for (let i = 0; i < n; i++) {
        const p = pts[i]
        const i3 = i * 3
        // start: scattered around in a wider area
        const r = Math.max(width, height) * 0.6 + Math.random() * Math.max(width, height) * 0.5
        const a = Math.random() * Math.PI * 2
        positions[i3 + 0] = Math.cos(a) * r
        positions[i3 + 1] = Math.sin(a) * r
        positions[i3 + 2] = (Math.random() - 0.5) * 60
        tgts[i3 + 0] = p.x
        tgts[i3 + 1] = p.y
        tgts[i3 + 2] = (Math.random() - 0.5) * 6
        tmp.copy(colorA).lerp(colorB, (p.x - minX) / range)
        colors[i3 + 0] = tmp.r
        colors[i3 + 1] = tmp.g
        colors[i3 + 2] = tmp.b
        offsets[i] = Math.random() * Math.PI * 2
      }
      return { positions, tgts, colors, offsets }
    }

    let { positions, tgts, colors, offsets } = buildBuffers(targets)
    let velocities = new Float32Array(particleCount * 3)

    let geometry = new THREE.BufferGeometry()
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

    // soft point sprite
    const makeSprite = () => {
      const c = document.createElement("canvas")
      c.width = c.height = 64
      const g = c.getContext("2d")!
      const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32)
      grad.addColorStop(0, "rgba(255,255,255,1)")
      grad.addColorStop(0.45, "rgba(255,255,255,0.5)")
      grad.addColorStop(1, "rgba(255,255,255,0)")
      g.fillStyle = grad
      g.fillRect(0, 0, 64, 64)
      const tex = new THREE.CanvasTexture(c)
      return tex
    }
    const sprite = makeSprite()

    const material = new THREE.PointsMaterial({
      size: Math.max(2, fontSize * 0.045),
      map: sprite,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: false,
      opacity: 0.95,
    })

    let points = new THREE.Points(geometry, material)
    scene.add(points)

    // ---------- mouse (in this canvas's local coords) ----------
    const mouseLocal = new THREE.Vector3(99999, 99999, 0)
    const onMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect()
      // skip when not over our canvas (we still listen window-wide so the
      // particle scatter feels seamless when crossing into the area)
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      mouseLocal.x = x - width / 2
      mouseLocal.y = -(y - height / 2)
    }
    const onLeaveWindow = () => {
      mouseLocal.set(99999, 99999, 0)
    }
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseleave", onLeaveWindow)

    // ---------- animation ----------
    const clock = new THREE.Clock()
    let assembled = 0      // 0→1 over intro
    let scatterMode = 1    // 1 during intro/scattered, 0 when settled
    let raf = 0
    let introTimeout: ReturnType<typeof setTimeout> | null = null

    // After intro animation completes, switch to settled mode
    introTimeout = setTimeout(() => {
      setMode("settled")
    }, reducedMotion ? 200 : 1500)

    const animate = () => {
      raf = requestAnimationFrame(animate)
      const dt = Math.min(clock.getDelta(), 0.05)
      const t = clock.elapsedTime

      // intro assembly
      if (assembled < 1) assembled = Math.min(1, assembled + dt * 0.9)

      const m = modeRef.current
      // settled means: skip simulating — saves CPU. When user re-hovers we
      // resume. We still render once-per-frame so opacity transitions show.
      if (m === "settled") {
        // particles are at the targets but invisible; nothing to update
        renderer.render(scene, camera)
        return
      }

      const repelRadius = Math.max(60, fontSize * 0.9)
      const repelStrength = fontSize * 22
      const returnStrength = 18
      const damping = 0.78

      const posAttr = geometry.getAttribute("position") as THREE.BufferAttribute
      const pos = posAttr.array as Float32Array

      const isHover = m === "scattered"

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        // gentle target wobble
        const wob = isHover ? 2.5 : 1.0
        const tx = tgts[i3] + Math.sin(t * 1.3 + offsets[i]) * wob
        const ty = tgts[i3 + 1] + Math.cos(t * 1.5 + offsets[i]) * wob
        const tz = tgts[i3 + 2]

        // scale target by intro assembled (so particles fly in)
        const aTx = tx * assembled
        const aTy = ty * assembled
        const aTz = tz * assembled

        const dx = aTx - pos[i3]
        const dy = aTy - pos[i3 + 1]
        const dz = aTz - pos[i3 + 2]

        velocities[i3] += dx * returnStrength * dt
        velocities[i3 + 1] += dy * returnStrength * dt
        velocities[i3 + 2] += dz * returnStrength * dt

        // mouse repel only when we're in hover/scattered mode AND mouse is
        // actually near the canvas
        if (isHover && mouseLocal.x < 90000) {
          const mdx = pos[i3] - mouseLocal.x
          const mdy = pos[i3 + 1] - mouseLocal.y
          const dSq = mdx * mdx + mdy * mdy
          if (dSq < repelRadius * repelRadius) {
            const d = Math.sqrt(dSq) || 0.0001
            const force = (1 - d / repelRadius) * repelStrength
            velocities[i3] += (mdx / d) * force * dt
            velocities[i3 + 1] += (mdy / d) * force * dt
          }
        }

        // damping + integrate
        velocities[i3] *= damping
        velocities[i3 + 1] *= damping
        velocities[i3 + 2] *= damping
        pos[i3] += velocities[i3] * dt
        pos[i3 + 1] += velocities[i3 + 1] * dt
        pos[i3 + 2] += velocities[i3 + 2] * dt
      }

      posAttr.needsUpdate = true
      renderer.render(scene, camera)
      void scatterMode
    }
    animate()

    // ---------- resize: re-measure text & re-sample ----------
    const recomputeForSize = () => {
      const newWidth = Math.max(1, textEl.offsetWidth)
      const newHeight = Math.max(1, textEl.offsetHeight)
      if (newWidth === width && newHeight === height) return
      width = newWidth
      height = newHeight
      const cs = window.getComputedStyle(textEl)
      fontSize = parseFloat(cs.fontSize) || fontSize
      fontFamily = cs.fontFamily || fontFamily
      fontWeight = cs.fontWeight || fontWeight

      renderer.setSize(width, height)
      camera.left = -width / 2
      camera.right = width / 2
      camera.top = height / 2
      camera.bottom = -height / 2
      camera.updateProjectionMatrix()

      // re-sample text
      targets = sampleText()
      const built = buildBuffers(targets)
      particleCount = targets.length
      positions = built.positions
      tgts = built.tgts
      colors = built.colors
      offsets = built.offsets
      velocities = new Float32Array(particleCount * 3)

      scene.remove(points)
      geometry.dispose()
      geometry = new THREE.BufferGeometry()
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))
      material.size = Math.max(2, fontSize * 0.045)
      points = new THREE.Points(geometry, material)
      scene.add(points)
    }

    const ro = new ResizeObserver(recomputeForSize)
    ro.observe(textEl)
    window.addEventListener("resize", recomputeForSize)

    return () => {
      cancelAnimationFrame(raf)
      if (introTimeout) clearTimeout(introTimeout)
      ro.disconnect()
      window.removeEventListener("resize", recomputeForSize)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseleave", onLeaveWindow)
      geometry.dispose()
      material.dispose()
      sprite.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [text, color, colorFrom, colorTo])

  // Hover handlers — only meaningful once we're past the intro
  const handleEnter = () => {
    if (modeRef.current === "settled") setMode("scattered")
  }
  const handleLeave = () => {
    if (modeRef.current === "scattered") setMode("settled")
  }

  return (
    <span
      ref={wrapperRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onTouchStart={handleEnter}
      onTouchEnd={handleLeave}
      className={`relative inline-block align-baseline cursor-pointer ${className}`}
      style={{ lineHeight: 1 }}
    >
      {/* Crisp HTML text — visible default. Either solid color or gradient. */}
      <span
        ref={textRef}
        style={{
          opacity: mode === "settled" ? 1 : 0,
          transition: "opacity 350ms ease-in-out",
          display: "inline-block",
          ...(color
            ? { color }
            : {
                background: `linear-gradient(90deg, ${colorFrom}, ${colorTo})`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }),
        }}
      >
        {text}
      </span>
      {/* Canvas overlay — exact size of the text */}
      <span
        ref={canvasMountRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          opacity: mode === "settled" ? 0 : 1,
          transition: "opacity 350ms ease-in-out",
          pointerEvents: "none",
        }}
      />
    </span>
  )
}
