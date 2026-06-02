"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

/**
 * ParticleField — the unified, scroll-driven 3D particle system that replaces
 * the old Spline scene. One Points cloud of N particles continuously *morphs*
 * between five formations as the page scrolls:
 *
 *   0.00  Galaxy     (home / hero)        — spiral arms, slow swirl
 *   0.25  Double helix (experience)       — DNA strands rising
 *   0.50  Sphere     (projects)           — fibonacci globe
 *   0.75  Atom       (skills)             — nucleus + 3 electron orbits
 *   1.00  Wave field (contact)            — rippling flow-field plane
 *
 * Layered on top:
 *   - cursor force      : particles repel from the pointer (unprojected to z=0)
 *   - constellation     : faint neon lines link a subset of "hub" particles
 *   - camera journey    : the camera gently orbits + dollies with scroll
 *   - breathing wobble  : per-particle noise so the cloud is never static
 *
 * Perf:
 *   - one BufferGeometry, CPU-side spring integration (smooth even if scroll
 *     jumps), all five shapes precomputed once into Float32Arrays.
 *   - mobile: fewer particles, no constellation lines.
 *   - reduced-motion: a single still galaxy, no animation loop.
 *   - scroll is read from a ref updated by a rAF-throttled listener — no React
 *     re-renders per frame.
 */

const TAU = Math.PI * 2
const GOLDEN = Math.PI * (3 - Math.sqrt(5))
const R = 12.5 // base radius of the formations, in world units (bigger = fills more screen)

// Neon-on-black palette — blue → indigo → purple (matches the constellation)
const PAL = [
  new THREE.Color("#4f7cff"), // blue
  new THREE.Color("#6d6bff"), // indigo
  new THREE.Color("#a855f7"), // purple
]
// occasional brighter highlight node (light blue) instead of a green accent
const ACCENT = new THREE.Color("#7dd3fc")

function smoothstep(t: number) {
  t = Math.min(1, Math.max(0, t))
  return t * t * (3 - 2 * t)
}

/* ----------------------------- shape builders ---------------------------- */
/* Each writes N*3 floats into `out`. Particle i in one shape maps to particle
   i in every other shape, so morphing is just a per-index lerp. */

function buildGalaxy(out: Float32Array, n: number) {
  const arms = 3
  const tiltX = 0.5
  const cosT = Math.cos(tiltX)
  const sinT = Math.sin(tiltX)
  for (let i = 0; i < n; i++) {
    const t = i / n
    const radius = Math.pow(t, 0.5) * R
    const branch = ((i % arms) / arms) * TAU
    const spin = radius * 0.55
    const falloff = 1 - t
    const rx = (Math.random() - 0.5) * falloff * 2.6
    const ry = (Math.random() - 0.5) * falloff * 1.1
    const rz = (Math.random() - 0.5) * falloff * 2.6
    const x = Math.cos(branch + spin) * radius + rx
    const z = Math.sin(branch + spin) * radius + rz
    let y = ry + (Math.random() - 0.5) * 0.3
    // tilt the disk around X so it reads as a galaxy, not a flat ring
    const y2 = y * cosT - z * sinT
    const z2 = y * sinT + z * cosT
    y = y2
    const i3 = i * 3
    out[i3] = x
    out[i3 + 1] = y
    out[i3 + 2] = z2
  }
}

function buildHelix(out: Float32Array, n: number) {
  const turns = 5
  const r = R * 0.42
  const height = R * 2
  for (let i = 0; i < n; i++) {
    const f = i / n
    const strand = i % 2
    const angle = f * turns * TAU + strand * Math.PI
    const x = Math.cos(angle) * r + (Math.random() - 0.5) * 0.5
    const z = Math.sin(angle) * r + (Math.random() - 0.5) * 0.5
    const y = (f - 0.5) * height + (Math.random() - 0.5) * 0.3
    const i3 = i * 3
    out[i3] = x
    out[i3 + 1] = y
    out[i3 + 2] = z
  }
}

function buildSphere(out: Float32Array, n: number) {
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2
    const rad = Math.sqrt(Math.max(0, 1 - y * y))
    const theta = i * GOLDEN
    const jitter = 1 + (Math.random() - 0.5) * 0.04
    const i3 = i * 3
    out[i3] = Math.cos(theta) * rad * R * jitter
    out[i3 + 1] = y * R * jitter
    out[i3 + 2] = Math.sin(theta) * rad * R * jitter
  }
}

function buildAtom(out: Float32Array, n: number) {
  const nucleus = Math.floor(n * 0.26)
  const ringCount = 3
  const perRing = Math.ceil((n - nucleus) / ringCount)
  const ringR = R * 0.95
  // three orbital planes, each tilted differently
  const tilts = [
    { ax: 0, az: 0 },
    { ax: 1.15, az: 0.5 },
    { ax: -1.0, az: -0.7 },
  ]
  for (let i = 0; i < n; i++) {
    const i3 = i * 3
    if (i < nucleus) {
      // random point in a small sphere (nucleus cloud)
      const u = Math.random() * TAU
      const v = Math.acos(2 * Math.random() - 1)
      const rr = R * 0.2 * Math.cbrt(Math.random())
      out[i3] = rr * Math.sin(v) * Math.cos(u)
      out[i3 + 1] = rr * Math.cos(v)
      out[i3 + 2] = rr * Math.sin(v) * Math.sin(u)
    } else {
      const idx = i - nucleus
      const ring = Math.min(ringCount - 1, Math.floor(idx / perRing))
      const a = Math.random() * TAU
      const thick = (Math.random() - 0.5) * 0.35
      const x0 = Math.cos(a) * (ringR + thick)
      const y0 = Math.sin(a) * (ringR + thick)
      const z = (Math.random() - 0.5) * 0.3
      const { ax, az } = tilts[ring]
      // rotate around Z then X to tilt the orbit
      const x1 = x0 * Math.cos(az) - y0 * Math.sin(az)
      const y1 = x0 * Math.sin(az) + y0 * Math.cos(az)
      const y2 = y1 * Math.cos(ax) - z * Math.sin(ax)
      const z2 = y1 * Math.sin(ax) + z * Math.cos(ax)
      out[i3] = x1
      out[i3 + 1] = y2
      out[i3 + 2] = z2
    }
  }
}

function buildWave(out: Float32Array, n: number) {
  const cols = Math.ceil(Math.sqrt(n))
  const span = R * 3.1
  for (let i = 0; i < n; i++) {
    const gx = i % cols
    const gz = Math.floor(i / cols)
    const x = (gx / (cols - 1) - 0.5) * span
    const z = (gz / (cols - 1) - 0.5) * span
    const y = Math.sin(x * 0.5) * Math.cos(z * 0.5) * 1.7
    const i3 = i * 3
    out[i3] = x
    out[i3 + 1] = y
    out[i3 + 2] = z
  }
}

export default function ParticleField() {
  const mountRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef(0)

  const [tier] = useState<"off" | "mobile" | "full">(() => {
    if (typeof window === "undefined") return "full"
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return "off"
    if (window.matchMedia("(max-width: 768px)").matches) return "mobile"
    return "full"
  })

  // keep a live scroll-progress value (0..1) without re-rendering
  useEffect(() => {
    const compute = () => {
      const doc = document.documentElement
      const max = Math.max(1, doc.scrollHeight - window.innerHeight)
      scrollRef.current = Math.min(1, Math.max(0, window.scrollY / max))
    }
    let raf: number | null = null
    const onScroll = () => {
      if (raf != null) return
      raf = requestAnimationFrame(() => {
        raf = null
        compute()
      })
    }
    compute()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", compute)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", compute)
      if (raf != null) cancelAnimationFrame(raf)
    }
  }, [])

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const reduced = tier === "off"
    const N = tier === "mobile" ? 2600 : 7000
    const useLines = tier === "full"

    /* ---------------- renderer / scene / camera ---------------- */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)
    renderer.domElement.style.display = "block"
    renderer.domElement.style.width = "100%"
    renderer.domElement.style.height = "100%"

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x05070d, 0.018)

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200)
    camera.position.set(0, 0, 26)

    /* ---------------- precompute the five formations ---------------- */
    const shapes: Float32Array[] = [
      new Float32Array(N * 3),
      new Float32Array(N * 3),
      new Float32Array(N * 3),
      new Float32Array(N * 3),
      new Float32Array(N * 3),
    ]
    buildGalaxy(shapes[0], N)
    buildHelix(shapes[1], N)
    buildSphere(shapes[2], N)
    buildAtom(shapes[3], N)
    buildWave(shapes[4], N)

    /* ---------------- live buffers ---------------- */
    const positions = new Float32Array(N * 3)
    const velocities = new Float32Array(N * 3)
    const colors = new Float32Array(N * 3)
    const phase = new Float32Array(N) // per-particle wobble offset
    positions.set(shapes[0]) // start on the galaxy

    const tmp = new THREE.Color()
    for (let i = 0; i < N; i++) {
      const i3 = i * 3
      phase[i] = Math.random() * TAU
      if (Math.random() < 0.1) {
        // occasional bright light-blue highlight for sparkle
        tmp.copy(ACCENT)
      } else {
        // blend across blue→indigo→purple by index
        const f = (i / N) * 2 // 0..2
        const seg = Math.min(1, f) < 1 ? 0 : 1
        const local = f - seg
        tmp.copy(PAL[seg]).lerp(PAL[seg + 1], local)
        // sprinkle brightness variance
        tmp.multiplyScalar(0.75 + Math.random() * 0.45)
      }
      colors[i3] = tmp.r
      colors[i3 + 1] = tmp.g
      colors[i3 + 2] = tmp.b
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

    /* soft round sprite for glow */
    const makeSprite = () => {
      const c = document.createElement("canvas")
      c.width = c.height = 64
      const g = c.getContext("2d")!
      const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32)
      grad.addColorStop(0, "rgba(255,255,255,1)")
      grad.addColorStop(0.4, "rgba(255,255,255,0.55)")
      grad.addColorStop(1, "rgba(255,255,255,0)")
      g.fillStyle = grad
      g.fillRect(0, 0, 64, 64)
      return new THREE.CanvasTexture(c)
    }
    const sprite = makeSprite()

    const material = new THREE.PointsMaterial({
      size: tier === "mobile" ? 0.2 : 0.17,
      map: sprite,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      opacity: 0.92,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    /* ---------------- constellation lines (full tier only) ---------------- */
    let lines: THREE.LineSegments | null = null
    let lineGeom: THREE.BufferGeometry | null = null
    let nodeIdx: number[] = []
    let linePos: Float32Array | null = null
    const NODES = 64
    const LINK_DIST = 5.6
    if (useLines) {
      nodeIdx = []
      const step = Math.floor(N / NODES)
      for (let k = 0; k < NODES; k++) nodeIdx.push(k * step)
      const maxPairs = (NODES * (NODES - 1)) / 2
      linePos = new Float32Array(maxPairs * 2 * 3)
      lineGeom = new THREE.BufferGeometry()
      lineGeom.setAttribute("position", new THREE.BufferAttribute(linePos, 3))
      const lineMat = new THREE.LineBasicMaterial({
        color: new THREE.Color("#7c8cff"),
        transparent: true,
        opacity: 0.18,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
      lines = new THREE.LineSegments(lineGeom, lineMat)
      scene.add(lines)
    }

    /* ---------------- pointer (unprojected to z=0 plane) ---------------- */
    const mouseNdc = new THREE.Vector2(99, 99)
    let mouseActive = false
    const raycaster = new THREE.Raycaster()
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
    const mouseWorld = new THREE.Vector3(9999, 9999, 0)
    const onMove = (e: MouseEvent) => {
      mouseNdc.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseNdc.y = -(e.clientY / window.innerHeight) * 2 + 1
      mouseActive = true
    }
    const onLeave = () => {
      mouseActive = false
      mouseWorld.set(9999, 9999, 0)
    }
    const onTouch = (e: TouchEvent) => {
      if (!e.touches[0]) return
      mouseNdc.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1
      mouseNdc.y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1
      mouseActive = true
    }
    if (!reduced) {
      window.addEventListener("mousemove", onMove, { passive: true })
      window.addEventListener("mouseleave", onLeave)
      window.addEventListener("touchmove", onTouch, { passive: true })
      window.addEventListener("touchend", onLeave)
    }

    /* ---------------- resize ---------------- */
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", onResize)

    /* ---------------- reduced-motion: render one still frame ---------------- */
    if (reduced) {
      points.rotation.x = 0.2
      renderer.render(scene, camera)
      return () => {
        window.removeEventListener("resize", onResize)
        geometry.dispose()
        material.dispose()
        sprite.dispose()
        lineGeom?.dispose()
        renderer.dispose()
        if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement)
      }
    }

    /* ---------------- animation loop ---------------- */
    const clock = new THREE.Clock()
    const REPEL_R = 5.5
    const REPEL_F = 32
    const RETURN = 6.5
    const DAMP = 0.86
    let raf = 0

    const animate = () => {
      raf = requestAnimationFrame(animate)
      const dt = Math.min(clock.getDelta(), 0.05)
      const time = clock.elapsedTime
      const sp = scrollRef.current

      // which two formations are we between?
      const seg = sp * (shapes.length - 1) // 0..4
      let idx = Math.floor(seg)
      if (idx >= shapes.length - 1) idx = shapes.length - 2
      const frac = smoothstep(seg - idx)
      const A = shapes[idx]
      const B = shapes[idx + 1]

      // wave ripple ramps in as we approach the last formation
      const waveW = smoothstep((sp - 0.72) / 0.28)

      // pointer → world position on z=0 plane
      if (mouseActive) {
        raycaster.setFromCamera(mouseNdc, camera)
        raycaster.ray.intersectPlane(plane, mouseWorld)
      }

      const pos = positions
      for (let i = 0; i < N; i++) {
        const i3 = i * 3
        // morph target = lerp(A, B)
        let tx = A[i3] + (B[i3] - A[i3]) * frac
        let ty = A[i3 + 1] + (B[i3 + 1] - A[i3 + 1]) * frac
        const tz = A[i3 + 2] + (B[i3 + 2] - A[i3 + 2]) * frac

        // breathing wobble (always) + wave ripple (near the end)
        const ph = phase[i]
        tx += Math.sin(time * 0.6 + ph) * 0.12
        ty += Math.cos(time * 0.7 + ph) * 0.12
        if (waveW > 0.001) {
          ty += Math.sin(tx * 0.5 + time * 1.4) * Math.cos(tz * 0.5 + time * 1.1) * 1.5 * waveW
        }

        // spring toward target
        velocities[i3] += (tx - pos[i3]) * RETURN * dt
        velocities[i3 + 1] += (ty - pos[i3 + 1]) * RETURN * dt
        velocities[i3 + 2] += (tz - pos[i3 + 2]) * RETURN * dt

        // cursor repel (screen-plane XY)
        if (mouseActive) {
          const dx = pos[i3] - mouseWorld.x
          const dy = pos[i3 + 1] - mouseWorld.y
          const dSq = dx * dx + dy * dy
          if (dSq < REPEL_R * REPEL_R) {
            const d = Math.sqrt(dSq) || 0.001
            const f = (1 - d / REPEL_R) * REPEL_F
            velocities[i3] += (dx / d) * f * dt
            velocities[i3 + 1] += (dy / d) * f * dt
          }
        }

        velocities[i3] *= DAMP
        velocities[i3 + 1] *= DAMP
        velocities[i3 + 2] *= DAMP
        pos[i3] += velocities[i3] * dt
        pos[i3 + 1] += velocities[i3 + 1] * dt
        pos[i3 + 2] += velocities[i3 + 2] * dt
      }
      ;(geometry.getAttribute("position") as THREE.BufferAttribute).needsUpdate = true

      // slow global spin + scroll-tied tilt
      points.rotation.y += dt * 0.05
      points.rotation.x += (sp * 0.5 - 0.1 - points.rotation.x) * 0.05

      // camera journey: gentle orbit + dolly with scroll
      const orbit = sp * 0.9
      const targetZ = 26 - sp * 7
      camera.position.x += (Math.sin(orbit) * 7 - camera.position.x) * 0.04
      camera.position.y += (Math.sin(sp * Math.PI) * 3.5 - camera.position.y) * 0.04
      camera.position.z += (targetZ - camera.position.z) * 0.04
      camera.lookAt(0, 0, 0)

      // constellation links between hub particles
      if (lines && linePos && lineGeom) {
        let ptr = 0
        const m = nodeIdx.length
        for (let a = 0; a < m; a++) {
          const ia = nodeIdx[a] * 3
          const ax = pos[ia], ay = pos[ia + 1], az = pos[ia + 2]
          for (let b = a + 1; b < m; b++) {
            const ib = nodeIdx[b] * 3
            const dx = ax - pos[ib]
            const dy = ay - pos[ib + 1]
            const dz = az - pos[ib + 2]
            if (dx * dx + dy * dy + dz * dz < LINK_DIST * LINK_DIST) {
              linePos[ptr++] = ax
              linePos[ptr++] = ay
              linePos[ptr++] = az
              linePos[ptr++] = pos[ib]
              linePos[ptr++] = pos[ib + 1]
              linePos[ptr++] = pos[ib + 2]
            }
          }
        }
        lineGeom.setDrawRange(0, ptr / 3)
        ;(lineGeom.getAttribute("position") as THREE.BufferAttribute).needsUpdate = true
      }

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseleave", onLeave)
      window.removeEventListener("touchmove", onTouch)
      window.removeEventListener("touchend", onLeave)
      window.removeEventListener("resize", onResize)
      geometry.dispose()
      material.dispose()
      sprite.dispose()
      lineGeom?.dispose()
      ;(lines?.material as THREE.Material | undefined)?.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement)
    }
  }, [tier])

  // static gradient base sits under the canvas (and is the whole show when off)
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 0,
        background:
          "radial-gradient(ellipse at 50% 30%, hsl(222 40% 11%) 0%, hsl(0 0% 6%) 55%, #04060c 100%)",
      }}
    >
      <div ref={mountRef} className="absolute inset-0" />
      {/* vignette so foreground cards stay legible over the bright cloud */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(4,6,12,0) 0%, rgba(4,6,12,0.45) 70%, rgba(4,6,12,0.9) 100%)",
        }}
      />
    </div>
  )
}
