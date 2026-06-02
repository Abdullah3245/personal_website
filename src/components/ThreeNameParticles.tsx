"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

interface ThreeNameParticlesProps {
  text?: string
  className?: string
  /** Single solid color for the particles. */
  color?: string
  /** Gradient start color (used if `color` is not set). */
  colorFrom?: string
  /** Gradient end color (used if `color` is not set). */
  colorTo?: string
  /** Approx number of particles to render the word with (~1600 across a name). */
  particleCount?: number
}

/**
 * Headline text permanently *dissolved into particles*. The word is sampled
 * into pixels, then downsampled to ~`particleCount` points that spring into
 * the letter shapes on mount and hold there as a glowing cloud. Sweeping the
 * cursor through the letters scatters the particles; they reassemble when the
 * cursor leaves. There is no crisp-text state on desktop — the particles ARE
 * the headline.
 *
 * On mobile / reduced-motion we skip WebGL entirely and render crisp text.
 *
 * Renders as an inline-block span — drop it inside an h1 next to other text.
 */
export default function ThreeNameParticles({
  text = "Abdullah Goher",
  className = "",
  color,
  colorFrom = "#4f7cff",
  colorTo = "#a855f7",
  particleCount = 1000,
}: ThreeNameParticlesProps) {
  const wrapperRef = useRef<HTMLSpanElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const canvasMountRef = useRef<HTMLSpanElement>(null)

  // Detect mobile / reduced-motion once on mount. On mobile we never spin up a
  // WebGL context — instead we render the crisp HTML text.
  const [skipWebGL] = useState<boolean>(() => {
    if (typeof window === "undefined") return false
    return (
      window.matchMedia("(max-width: 768px)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
  })

  useEffect(() => {
    if (skipWebGL) return
    const mount = canvasMountRef.current
    const textEl = textRef.current
    const wrapper = wrapperRef.current
    if (!mount || !textEl || !wrapper) return

    // ---------- size canvas to match the rendered text ----------
    let width = Math.max(1, textEl.offsetWidth)
    let height = Math.max(1, textEl.offsetHeight)
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
    const camera = new THREE.OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, -1000, 1000)
    camera.position.z = 10

    // ---------- sample text → downsample to ~particleCount target points ----------
    // world-px spacing between sampled grid points — drives the point size so
    // dots tile the strokes cleanly without piling into blobs.
    let pointSpacing = 4
    const sampleText = (): { x: number; y: number }[] => {
      const off = document.createElement("canvas")
      const ctx = off.getContext("2d")!
      const dpr = Math.min(window.devicePixelRatio, 2)
      off.width = Math.ceil(width * dpr)
      off.height = Math.ceil(height * dpr)
      ctx.scale(dpr, dpr)
      ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`
      ctx.textBaseline = "middle"
      ctx.textAlign = "center"
      ctx.fillStyle = "#ffffff"
      ctx.fillText(text, width / 2, height / 2)

      const W = off.width
      const H = off.height
      const data = ctx.getImageData(0, 0, W, H).data

      // pass 1: count filled pixels so we can pick an EVEN grid step that lands
      // ~particleCount points. An even grid reads as clean letterforms; the old
      // random downsample produced uneven density that looked blobby.
      let filled = 0
      for (let i = 3; i < data.length; i += 4) if (data[i] > 128) filled++
      const step = Math.max(2, Math.round(Math.sqrt(filled / Math.max(1, particleCount))))
      pointSpacing = step / dpr

      // pass 2: one point per filled grid cell
      const pts: { x: number; y: number }[] = []
      for (let y = 0; y < H; y += step) {
        for (let x = 0; x < W; x += step) {
          if (data[(y * W + x) * 4 + 3] > 128) {
            pts.push({ x: x / dpr - width / 2, y: -(y / dpr - height / 2) })
          }
        }
      }
      return pts
    }

    let targets = sampleText()
    let count = targets.length

    // ---------- particle buffers ----------
    const colorA = new THREE.Color(color || colorFrom)
    const colorB = new THREE.Color(color || colorTo)
    const tmp = new THREE.Color()

    const buildBuffers = (pts: { x: number; y: number }[]) => {
      const n = pts.length
      const positions = new Float32Array(n * 3)
      const tgts = new Float32Array(n * 3)
      const cols = new Float32Array(n * 3)
      const offs = new Float32Array(n)

      let minX = Infinity, maxX = -Infinity
      for (const p of pts) {
        if (p.x < minX) minX = p.x
        if (p.x > maxX) maxX = p.x
      }
      const range = Math.max(1, maxX - minX)

      for (let i = 0; i < n; i++) {
        const p = pts[i]
        const i3 = i * 3
        // start: scattered in a ring so they fly inward on mount
        const r = Math.max(width, height) * 0.6 + Math.random() * Math.max(width, height) * 0.5
        const a = Math.random() * Math.PI * 2
        positions[i3 + 0] = Math.cos(a) * r
        positions[i3 + 1] = Math.sin(a) * r
        positions[i3 + 2] = 0
        tgts[i3 + 0] = p.x
        tgts[i3 + 1] = p.y
        tgts[i3 + 2] = 0 // keep dots in-plane so they stay crisp
        tmp.copy(colorA).lerp(colorB, (p.x - minX) / range)
        cols[i3 + 0] = tmp.r
        cols[i3 + 1] = tmp.g
        cols[i3 + 2] = tmp.b
        offs[i] = Math.random() * Math.PI * 2
      }
      return { positions, tgts, colors: cols, offsets: offs }
    }

    let { positions, tgts, colors, offsets } = buildBuffers(targets)
    let velocities = new Float32Array(count * 3)

    let geometry = new THREE.BufferGeometry()
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

    // crisp point sprite — solid bright core, tight falloff (no big soft halo
    // that smears neighbouring dots into blobs)
    const makeSprite = () => {
      const c = document.createElement("canvas")
      c.width = c.height = 64
      const g = c.getContext("2d")!
      const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32)
      grad.addColorStop(0, "rgba(255,255,255,1)")
      grad.addColorStop(0.32, "rgba(255,255,255,0.95)")
      grad.addColorStop(0.55, "rgba(255,255,255,0.35)")
      grad.addColorStop(1, "rgba(255,255,255,0)")
      g.fillStyle = grad
      g.fillRect(0, 0, 64, 64)
      return new THREE.CanvasTexture(c)
    }
    const sprite = makeSprite()

    // size ~= grid spacing so dots sit edge-to-edge, distinct, not overlapping
    const dotSize = () => Math.max(2, Math.min(5, pointSpacing * 1.15))
    const material = new THREE.PointsMaterial({
      size: dotSize(),
      map: sprite,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
      sizeAttenuation: false,
      opacity: 1,
    })

    let points = new THREE.Points(geometry, material)
    scene.add(points)

    // ---------- mouse (in this canvas's local coords) ----------
    const mouseLocal = new THREE.Vector3(99999, 99999, 0)
    const onMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect()
      mouseLocal.x = e.clientX - rect.left - width / 2
      mouseLocal.y = -(e.clientY - rect.top - height / 2)
    }
    const onLeaveWindow = () => mouseLocal.set(99999, 99999, 0)
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseleave", onLeaveWindow)

    // ---------- animation ----------
    const clock = new THREE.Clock()
    let assembled = 0 // 0→1 fly-in on mount
    let raf = 0

    const repelRadius = Math.max(48, fontSize * 0.7)
    const repelStrength = fontSize * 20
    const returnStrength = 38 // snappier spring → dots form / reform faster
    const damping = 0.72

    const animate = () => {
      raf = requestAnimationFrame(animate)
      const dt = Math.min(clock.getDelta(), 0.05)
      const t = clock.elapsedTime
      if (assembled < 1) assembled = Math.min(1, assembled + dt * 1.6)

      const posAttr = geometry.getAttribute("position") as THREE.BufferAttribute
      const pos = posAttr.array as Float32Array
      const mouseNear = mouseLocal.x < 90000

      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        // barely-there shimmer so the word reads as crisp text, not a cloud
        const tx = tgts[i3] + Math.sin(t * 0.8 + offsets[i]) * 0.35
        const ty = tgts[i3 + 1] + Math.cos(t * 0.9 + offsets[i]) * 0.35

        const aTx = tx * assembled
        const aTy = ty * assembled

        velocities[i3] += (aTx - pos[i3]) * returnStrength * dt
        velocities[i3 + 1] += (aTy - pos[i3 + 1]) * returnStrength * dt

        // cursor scatter — always on (no hover gate)
        if (mouseNear) {
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

        velocities[i3] *= damping
        velocities[i3 + 1] *= damping
        pos[i3] += velocities[i3] * dt
        pos[i3 + 1] += velocities[i3 + 1] * dt
      }

      posAttr.needsUpdate = true
      renderer.render(scene, camera)
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

      targets = sampleText()
      const built = buildBuffers(targets)
      count = targets.length
      positions = built.positions
      tgts = built.tgts
      colors = built.colors
      offsets = built.offsets
      velocities = new Float32Array(count * 3)

      scene.remove(points)
      geometry.dispose()
      geometry = new THREE.BufferGeometry()
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))
      material.size = dotSize()
      points = new THREE.Points(geometry, material)
      scene.add(points)
    }

    const ro = new ResizeObserver(recomputeForSize)
    ro.observe(textEl)
    window.addEventListener("resize", recomputeForSize)

    return () => {
      cancelAnimationFrame(raf)
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
  }, [text, color, colorFrom, colorTo, particleCount, skipWebGL])

  return (
    <span
      ref={wrapperRef}
      className={`relative inline-block align-baseline ${className}`}
      style={{ lineHeight: 1 }}
    >
      {/* Text layer. On desktop it's invisible (particles are the headline) but
          still occupies layout space and remains screen-reader readable. On
          mobile it's the visible crisp fallback. */}
      <span
        ref={textRef}
        style={{
          opacity: skipWebGL ? 1 : 0,
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
      {/* Particle canvas overlay — exact size of the text. Skipped on mobile. */}
      {!skipWebGL && (
        <span
          ref={canvasMountRef}
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
          }}
        />
      )}
    </span>
  )
}
