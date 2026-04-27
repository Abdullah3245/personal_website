"use client"

import { lazy, Suspense, useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { useScrollProgress } from "../hooks/useScrollProgress"

const Spline = lazy(() => import("@splinetool/react-spline"))

const SCENE_URL = "https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode"

/**
 * Fixed-position Spline scene. Stays behind every section so the journey
 * feels continuous as the user scrolls.
 *
 * Perf:
 *   - No scroll-tied transform on the wrapper (would force WebGL canvas
 *     re-raster every scroll frame).
 *   - On mobile we don't load Spline at all — the heavy physics + Three
 *     runtime chokes mid-tier mobile GPUs. We swap in a static dark
 *     gradient instead. Desktop gets the full scene.
 *
 * Block hover interactivity:
 *   - The SENTINEL scene's author didn't wire mouseHover behaviors on
 *     individual blocks, so `emitEvent` is a no-op. We do it ourselves:
 *     on load, traverse the scene to collect every mesh + the camera.
 *     Each frame, project each mesh's world position to NDC, compare to
 *     cursor NDC, and push nearby meshes away (XY) and forward (Z).
 *     Positions are lerped for smoothness.
 */
type BlockEntry = {
  obj: THREE.Object3D
  // Cached base position so each frame's target is computed from the
  // mesh's resting place (not the previous frame's offset position).
  bx: number
  by: number
  bz: number
}

type SplineApp = {
  findObjectByName?: (name: string) => unknown
  // Spline's internal scene (private but exposed); duck-type it as Object3D.
  _scene?: THREE.Object3D
  scene?: THREE.Object3D
}

export default function SplineBackground() {
  const splineAppRef = useRef<SplineApp | null>(null)
  const blocksRef = useRef<{
    blocks: BlockEntry[]
    camera: THREE.Camera
  } | null>(null)
  const progress = useScrollProgress()
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === "undefined") return false
    return window.matchMedia("(max-width: 768px)").matches
  })

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)")
    const onChange = () => setIsMobile(mq.matches)
    mq.addEventListener?.("change", onChange)
    return () => mq.removeEventListener?.("change", onChange)
  }, [])

  // Best-effort camera nudge with scroll (desktop only).
  useEffect(() => {
    if (isMobile) return
    const app = splineAppRef.current
    if (!app || typeof app.findObjectByName !== "function") return
    const candidates = ["Camera", "camera", "Scene", "Group", "Cube"]
    for (const name of candidates) {
      const obj = app.findObjectByName(name) as
        | { rotation?: { x: number; y: number; z: number } }
        | undefined
      if (obj && obj.rotation) {
        obj.rotation.y = progress * 0.21
        return
      }
    }
  }, [progress, isMobile])

  // Cursor-driven block displacement loop. Runs while desktop + scene loaded.
  useEffect(() => {
    if (isMobile) return

    let mouseNdcX = 0
    let mouseNdcY = 0
    let mouseActive = false

    const onMove = (e: MouseEvent) => {
      mouseNdcX = (e.clientX / window.innerWidth) * 2 - 1
      mouseNdcY = -(e.clientY / window.innerHeight) * 2 + 1
      mouseActive = true
    }
    const onLeave = () => {
      mouseActive = false
    }
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseleave", onLeave)

    // Tunable parameters — keep gentle so the scene still reads as a scene.
    const RADIUS = 0.45        // NDC radius of influence around cursor
    const PUSH_XY = 70         // world units lateral push
    const PUSH_Z = 50          // world units forward pop
    const LERP = 0.12          // smoothing factor toward target

    const tmpVec = new THREE.Vector3()
    let raf = 0

    const animate = () => {
      raf = requestAnimationFrame(animate)
      const data = blocksRef.current
      if (!data) return
      const { blocks, camera } = data

      for (const b of blocks) {
        // Where is this block in NDC right now?
        b.obj.getWorldPosition(tmpVec)
        tmpVec.project(camera)
        const sx = tmpVec.x
        const sy = tmpVec.y

        let tx = b.bx
        let ty = b.by
        let tz = b.bz

        if (mouseActive) {
          const dx = sx - mouseNdcX
          const dy = sy - mouseNdcY
          const distSq = dx * dx + dy * dy
          if (distSq < RADIUS * RADIUS) {
            const dist = Math.sqrt(distSq) || 0.0001
            const f = 1 - dist / RADIUS
            tx += (dx / dist) * f * PUSH_XY
            ty += (dy / dist) * f * PUSH_XY
            tz += f * PUSH_Z
          }
        }

        // Lerp current toward target (ease-in-out feel).
        b.obj.position.x += (tx - b.obj.position.x) * LERP
        b.obj.position.y += (ty - b.obj.position.y) * LERP
        b.obj.position.z += (tz - b.obj.position.z) * LERP
      }
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseleave", onLeave)
    }
  }, [isMobile])

  const handleSplineLoad = (app: unknown) => {
    splineAppRef.current = app as SplineApp
    if (isMobile) return // shouldn't happen since Spline isn't rendered on mobile

    // Find the scene root the runtime exposes.
    const root: THREE.Object3D | undefined =
      (app as SplineApp)._scene || (app as SplineApp).scene
    if (!root) return

    // Walk the tree, collecting meshes and the first perspective camera we
    // find. We avoid lights / helpers — only objects with a `.position`
    // and an `isMesh` flag.
    let camera: THREE.Camera | null = null
    const blocks: BlockEntry[] = []
    root.traverse((obj: THREE.Object3D) => {
      // Use ducktype check so we don't depend on importing the runtime's THREE.
      const isMesh =
        (obj as { isMesh?: boolean }).isMesh === true ||
        (obj as { type?: string }).type === "Mesh"
      const isCam = (obj as { isCamera?: boolean }).isCamera === true
      if (isCam && !camera) camera = obj as THREE.Camera
      if (isMesh && obj.position) {
        blocks.push({
          obj,
          bx: obj.position.x,
          by: obj.position.y,
          bz: obj.position.z,
        })
      }
    })

    if (!camera || blocks.length === 0) return
    blocksRef.current = { blocks, camera }
  }

  // Mobile: static gradient — no Spline. Eliminates the dominant GPU cost.
  if (isMobile) {
    return (
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background:
            "radial-gradient(ellipse at 30% 20%, hsl(0 0% 16%) 0%, hsl(var(--hero-bg)) 55%, hsl(0 0% 5%) 100%)",
        }}
      />
    )
  }

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0"
      style={{
        zIndex: 0,
        background: "var(--c-hero-bg)",
        // Desktop: events DO reach the Spline canvas so the scene's
        // built-in hover/click animations on its blocks can fire.
        pointerEvents: "auto",
      }}
    >
      <Suspense
        fallback={
          <div
            className="absolute inset-0"
            style={{ background: "var(--c-hero-bg)" }}
          />
        }
      >
        <Spline
          scene={SCENE_URL}
          className="w-full h-full"
          onLoad={handleSplineLoad}
        />
      </Suspense>
      {/* tinted vignette so cards on top stay readable over the busy scene */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(var(--hero-bg) / 0.0) 0%, hsl(var(--hero-bg) / 0.5) 70%, hsl(var(--hero-bg) / 0.92) 100%)",
        }}
      />
    </div>
  )
}
