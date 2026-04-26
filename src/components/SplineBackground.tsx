"use client"

import { lazy, Suspense, useEffect, useRef } from "react"
import { useScrollProgress } from "../hooks/useScrollProgress"

const Spline = lazy(() => import("@splinetool/react-spline"))

const SCENE_URL = "https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode"

/**
 * Fixed-position Spline scene. Stays behind every section so the journey
 * feels continuous as the user scrolls.
 *
 * Perf: NO scroll-tied transform on the wrapper — that forced the entire
 * Spline canvas to re-rasterize on every scroll frame. Instead we only
 * nudge a Spline object's rotation (single transform applied inside the
 * scene's own render loop) when the runtime exposes one.
 */
export default function SplineBackground() {
  const splineAppRef = useRef<unknown>(null)
  const progress = useScrollProgress()

  // Best-effort: if the Spline app exposes a top-level object/camera,
  // rotate it slightly with scroll. Cheap because Spline is rendering
  // the frame anyway — we just write a property.
  useEffect(() => {
    const app = splineAppRef.current as
      | { findObjectByName?: (name: string) => unknown }
      | null
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
  }, [progress])

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, background: "var(--c-hero-bg)" }}
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
          onLoad={(app: unknown) => {
            splineAppRef.current = app
          }}
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
