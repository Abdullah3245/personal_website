"use client"

import { useEffect, useRef, useState } from "react"
import { Cpu, FlaskConical, Code2, Briefcase, GraduationCap, Network, MapPin, Calendar, ExternalLink } from "lucide-react"

/* ------------------------------------------------------------------ data */

interface RoleNode {
  id: string
  label: string
  fx: number // fractional x position in the stage (0..1)
  fy: number // fractional y position in the stage (0..1)
  color: string
  icon: "ml" | "research" | "frontend" | "intern" | "teach"
  role: string
  type: string
  period: string
  location: string
  description: string
  achievements: string[]
  tech: string[]
  website: string
}

const HUB = { id: "hub", label: "Abdullah", fx: 0.5, fy: 0.5, color: "#b9a7ff" }

// Even pentagon around the hub: angles at -90° (top), then clockwise every 72°.
// rx/ry are fractions of the stage; positions computed once below.
const ROLES: RoleNode[] = [
  {
    // top
    id: "aeternal",
    label: "AeternalLabs",
    fx: 0.5,
    fy: 0.15,
    color: "#d946ef",
    icon: "ml",
    role: "Founding Software Engineer",
    type: "Full-time · first engineering hire",
    period: "May 2026 – Sep 2026",
    location: "Saint Louis, MO",
    description:
      "AI-evaluation platform for lenders, hospitals, and other regulated businesses.",
    achievements: [
      "Built the harness that tests whether autonomous AI pipelines are safe and fair: it inverts the demographics in a prompt and runs both versions through models from 8 providers in parallel (a thread pool made that 1.88x faster)",
      "Owned the whole codebase: React frontend, FastAPI gateway with per-provider adapters, and a PostgreSQL layer with a SHA-256 audit trail, across 18+ models",
      "Built the scoring engine behind it: weighted statistical measures of how far two decisions diverge, with confidence bounds, across 10+ regulated domains",
      "Set up the CI merge gate (GitHub Actions) and took the test suite from 1 test to 80 so the platform could deploy safely",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "GitHub Actions"],
    website: "https://aeternallabs.ai",
  },
  {
    // right
    id: "css",
    label: "CSS Lab",
    fx: 0.833,
    fy: 0.392,
    color: "#4f7cff",
    icon: "research",
    role: "Lead Software Engineer Intern",
    type: "Full-time",
    period: "May 2025 – Dec 2025",
    location: "Philadelphia, PA",
    description:
      "Human-mobility research platform & large-scale geospatial analysis.",
    achievements: [
      "The lab's disaster-management team needed to know how crowds would move during the 2026 FIFA World Cup: processed multi-terabyte GPS datasets (Meta, Factori, SafeGraph) with PySpark on AWS EMR into crowd-density maps",
      "Researchers were reading 100+ mobility papers by hand to pull out numbers: built an LLM-based RAG pipeline that reads each paper and extracts the metrics as structured JSON",
      "Built Nomad, the lab's platform for sharing mobility datasets and tools (Express, MongoDB, AWS S3, React); Cypress and Vitest suites parallelized to run 50% faster",
    ],
    tech: ["Express", "MongoDB", "PySpark", "AWS EMR", "AWS S3", "RAG"],
    website: "https://css.seas.upenn.edu/",
  },
  {
    // bottom
    id: "chop",
    label: "CHOP",
    fx: 0.706,
    fy: 0.783,
    color: "#38bdf8",
    icon: "frontend",
    role: "Full Stack Web Developer",
    type: "Part-time",
    period: "Nov 2024 – Aug 2025",
    location: "Philadelphia, PA",
    description:
      "Compsy, a full-stack web app researchers use to design behavioral and clinical experiments.",
    achievements: [
      "Clinical researchers waited on engineers for every change to a study: built the dashboard and 15+ data-entry forms in React, Vite, and Tailwind they now use daily, responsive across desktop, tablet, and phone",
      "Implemented stateless authentication (JWT in HTTP-only cookies) and context-based data fetching over a MongoDB REST API",
    ],
    tech: ["React", "Vite", "Tailwind", "MongoDB", "REST", "JWT"],
    website: "https://www.research.chop.edu/people/birkan-tunc",
  },
  {
    // left
    id: "pennadapt",
    label: "PennAdapt",
    fx: 0.294,
    fy: 0.783,
    color: "#a855f7",
    icon: "ml",
    role: "Machine Learning Engineer",
    type: "Student Org",
    period: "Sep 2024 – Present",
    location: "Philadelphia, PA",
    description:
      "Penn Assistive Devices & Prosthetic Technologies.",
    achievements: [
      "Collaborated with Penn Medicine surgeons and nurses on a team of 10 to build a real-time computer vision system that counts and identifies surgical tools during a procedure",
      "The first model, trained on public datasets, failed in a real operating room (glare, overlapping tools, motion blur): compared training images against OR footage to find the gap, then curated and annotated 1,500+ images with clinicians",
      "Retrained CNN and Vision Transformer models to 90%+ accuracy across 75 tool classes, with a verification step (SAM segmentation, ViT classification, RAG check) before a count is shown",
    ],
    tech: ["PyTorch", "Computer Vision", "ViT", "SAM", "RAG", "Agentic AI"],
    website: "https://pennadapt.wixsite.com/pennadapt",
  },
  {
    // upper-left
    id: "ta",
    label: "Penn CIS",
    fx: 0.167,
    fy: 0.392,
    color: "#f59e0b",
    icon: "teach",
    role: "Teaching Assistant, CIS 4480/5480 Operating Systems",
    type: "Part-time",
    period: "Aug 2026 – Present",
    location: "Philadelphia, PA",
    description:
      "Graduate operating systems course; 13-TA staff.",
    achievements: [
      "Teach recitations twice a semester, assist in live lectures, and hold weekly office hours helping students debug their own kernels",
    ],
    tech: ["C", "Operating Systems", "Concurrency", "File Systems"],
    website: "https://www.cis.upenn.edu/~cis5480/",
  },
]

// emergence order (visual, clockwise from the top). spokes hub→role; shared
// dashed cross-links connect roles in the same domain.
const ORDER = ["aeternal", "css", "chop", "pennadapt", "ta"]
const SHARED: [string, string][] = [
  ["aeternal", "pennadapt"], // ML thread
  ["css", "chop"], // full-stack thread
  ["ta", "aeternal"], // systems thread
]

const ICONS = { ml: Cpu, research: FlaskConical, frontend: Code2, intern: Briefcase, teach: GraduationCap }

/* ------------------------------------------------------- intro timeline (s) */
const HUB_DUR = 0.5
const ROLE_STEP = 0.26
const SPOKE_DUR = 0.4
const NODE_DELAY = 0.26
const NODE_DUR = 0.5
const roleSpokeStart = (i: number) => HUB_DUR + i * ROLE_STEP
const roleNodeStart = (i: number) => roleSpokeStart(i) + NODE_DELAY
const INTRO_END = roleNodeStart(ORDER.length - 1) + NODE_DUR
const SHARED_START = INTRO_END - 0.1
const SHARED_DUR = 0.6

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v)
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)
const backOut = (t: number) => {
  const c1 = 1.70158
  const c3 = c1 + 1
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2)
}
function hexA(hex: string, a: number) {
  const n = parseInt(hex.slice(1), 16)
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`
}

/* --------------------------------------------------------------- component */

export default function ExperienceGraph() {
  const stageRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const nodeEls = useRef<Record<string, HTMLButtonElement | null>>({})
  const lineEls = useRef<Record<string, SVGLineElement | null>>({})
  const pulseEls = useRef<Record<string, SVGCircleElement | null>>({})

  const [active, setActive] = useState<string>("hub")
  const activeRef = useRef(active)
  activeRef.current = active

  const introStartRef = useRef<number | null>(null)
  const introDoneRef = useRef(false)
  const [introDone, setIntroDone] = useState(false)

  const [reduced] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  )

  const allNodes = [HUB, ...ROLES]

  // Trigger the intro the first time the graph scrolls into view.
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    if (reduced) {
      introDoneRef.current = true
      setIntroDone(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && introStartRef.current == null) {
            introStartRef.current = performance.now()
            io.disconnect()
            break
          }
        }
      },
      { threshold: 0.35 },
    )
    io.observe(stage)
    return () => io.disconnect()
  }, [reduced])

  // Main animation loop (imperative; no React re-render per frame).
  useEffect(() => {
    const stage = stageRef.current
    const svg = svgRef.current
    if (!stage || !svg) return

    let W = 0
    let H = 0
    const phases: Record<string, number> = {}
    allNodes.forEach((n) => (phases[n.id] = Math.random() * Math.PI * 2))

    const size = () => {
      const r = stage.getBoundingClientRect()
      W = r.width
      H = r.height
      svg.setAttribute("viewBox", `0 0 ${W} ${H}`)
    }
    size()
    window.addEventListener("resize", size)

    const center = (n: { id: string; fx: number; fy: number }, t: number, isHub: boolean) => {
      const amp = isHub ? 2.5 : 6
      return {
        x: n.fx * W + Math.cos(t * 0.7 + phases[n.id]) * amp,
        y: n.fy * H + Math.sin(t * 0.9 + phases[n.id]) * amp,
      }
    }
    const roleIndex = (id: string) => ORDER.indexOf(id)
    const connected = (id: string) => {
      const s: Record<string, boolean> = {}
      ROLES.forEach((r) => (s[r.id] = true)) // hub connects to all
      const set: Record<string, boolean> = {}
      const all: [string, string][] = [
        ...ROLES.map((r) => ["hub", r.id] as [string, string]),
        ...SHARED,
      ]
      all.forEach(([a, b]) => {
        if (a === id) set[b] = true
        if (b === id) set[a] = true
      })
      return set
    }

    const t0 = performance.now()
    let raf = 0

    const placeNode = (id: string, x: number, y: number, scale: number, opacity: number) => {
      const el = nodeEls.current[id]
      if (!el) return
      el.style.left = `${x}px`
      el.style.top = `${y}px`
      el.style.transform = `translate(-50%,-50%) scale(${Math.max(0, scale)})`
      el.style.opacity = String(opacity)
    }

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop)
      if (!W) size()
      const t = (now - t0) / 1000
      const started = introStartRef.current != null
      const it = started ? (now - (introStartRef.current as number)) / 1000 : 0
      const skip = reduced

      const pos: Record<string, { x: number; y: number }> = {}
      allNodes.forEach((n) => {
        pos[n.id] = center(n, t, n.id === "hub")
      })

      // hub
      if (skip) {
        placeNode("hub", pos.hub.x, pos.hub.y, 1, 1)
      } else {
        const hp = clamp01(it / HUB_DUR)
        placeNode("hub", pos.hub.x, pos.hub.y, started ? backOut(clamp01(hp)) : 0, started ? clamp01(hp * 1.5) : 0)
      }

      // role nodes
      ORDER.forEach((id, i) => {
        const p = pos[id]
        if (skip) {
          placeNode(id, p.x, p.y, 1, 1)
          return
        }
        const np = clamp01((it - roleNodeStart(i)) / NODE_DUR)
        placeNode(id, p.x, p.y, np <= 0 ? 0 : backOut(np), clamp01(np * 1.6))
      })

      const act = activeRef.current
      const conn = act ? connected(act) : null

      // edges
      ROLES.forEach((r) => {
        const l = lineEls.current[`hub-${r.id}`]
        if (!l) return
        const a = pos.hub
        const b = pos[r.id]
        const hot = act === "hub" || act === r.id
        if (skip) {
          l.setAttribute("x1", String(a.x))
          l.setAttribute("y1", String(a.y))
          l.setAttribute("x2", String(b.x))
          l.setAttribute("y2", String(b.y))
          l.setAttribute("stroke-opacity", hot ? "0.95" : "0.4")
          l.setAttribute("stroke-width", hot ? "2.2" : "1.4")
          return
        }
        const g = clamp01((it - roleSpokeStart(roleIndex(r.id))) / SPOKE_DUR)
        const ge = easeOut(g)
        l.setAttribute("x1", String(a.x))
        l.setAttribute("y1", String(a.y))
        l.setAttribute("x2", String(a.x + (b.x - a.x) * ge))
        l.setAttribute("y2", String(a.y + (b.y - a.y) * ge))
        l.setAttribute("stroke-opacity", g <= 0 ? "0" : hot ? "0.95" : "0.4")
        l.setAttribute("stroke-width", hot ? "2.2" : "1.4")
      })

      // shared dashed threads
      SHARED.forEach(([a, b]) => {
        const l = lineEls.current[`${a}-${b}`]
        if (!l) return
        const pa = pos[a]
        const pb = pos[b]
        l.setAttribute("x1", String(pa.x))
        l.setAttribute("y1", String(pa.y))
        l.setAttribute("x2", String(pb.x))
        l.setAttribute("y2", String(pb.y))
        const hot = act === a || act === b
        const sr = skip ? 1 : clamp01((it - SHARED_START) / SHARED_DUR)
        l.setAttribute("stroke-opacity", String(sr * (hot ? 0.6 : 0.22)))
        l.setAttribute("stroke-width", hot ? "1.4" : "1")
      })

      // intro completion
      if (!introDoneRef.current && started && it >= INTRO_END) {
        introDoneRef.current = true
        setIntroDone(true)
      }

      // dim unconnected nodes on hover (post-intro)
      if (introDoneRef.current || skip) {
        allNodes.forEach((n) => {
          if (n.id === "hub") return
          const dim = act && act !== "hub" && n.id !== act && !(conn && conn[n.id])
          const el = nodeEls.current[n.id]
          if (el) el.style.opacity = dim ? "0.4" : "1"
        })
      }

      // pulses traveling hub→role (after intro)
      ROLES.forEach((r) => {
        const p = pulseEls.current[r.id]
        if (!p) return
        if (!(introDoneRef.current || skip)) {
          p.setAttribute("opacity", "0")
          return
        }
        const a = pos.hub
        const b = pos[r.id]
        const tt = ((now / 1000) * 0.45 + (roleIndex(r.id) / ROLES.length)) % 1
        p.setAttribute("cx", String(a.x + (b.x - a.x) * tt))
        p.setAttribute("cy", String(a.y + (b.y - a.y) * tt))
        const hot = act === "hub" || act === r.id
        p.setAttribute("opacity", hot ? "1" : "0.5")
        p.setAttribute("r", hot ? "3.4" : "2.6")
      })
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", size)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced])

  const activeRole = ROLES.find((r) => r.id === active) || null

  const onActivate = (id: string) => {
    // ignore hover until intro finishes (so it doesn't fight the build), but
    // always allow explicit clicks/taps
    setActive(id)
  }

  return (
    <div className="xpg">
      {/* graph stage */}
      <div
        ref={stageRef}
        className="xpg-stage"
        role="group"
        aria-label="Interactive experience network. Hover or tap a role node to see details."
      >
        <svg ref={svgRef} className="xpg-edges" preserveAspectRatio="none" aria-hidden="true">
          {/* shared dashed threads (under spokes) */}
          {SHARED.map(([a, b]) => (
            <line
              key={`${a}-${b}`}
              ref={(el) => {
                lineEls.current[`${a}-${b}`] = el
              }}
              stroke="#5b6bd6"
              strokeWidth={1}
              strokeDasharray="3 5"
              strokeOpacity={0}
            />
          ))}
          {/* hub→role spokes */}
          {ROLES.map((r) => (
            <line
              key={`hub-${r.id}`}
              ref={(el) => {
                lineEls.current[`hub-${r.id}`] = el
              }}
              stroke={hexA(r.color, 0.6)}
              strokeWidth={1.4}
              strokeOpacity={0}
            />
          ))}
          {/* pulses */}
          {ROLES.map((r) => (
            <circle
              key={`pulse-${r.id}`}
              ref={(el) => {
                pulseEls.current[r.id] = el
              }}
              r={2.6}
              fill={hexA(r.color, 0.9)}
              opacity={0}
            />
          ))}
        </svg>

        {/* hub node */}
        <button
          ref={(el) => {
            nodeEls.current.hub = el
          }}
          className="xpg-node xpg-hub"
          style={{ opacity: reduced ? 1 : 0 }}
          onMouseEnter={() => introDone && onActivate("hub")}
          onFocus={() => introDone && onActivate("hub")}
          onClick={() => onActivate("hub")}
          aria-label="Abdullah, experience hub"
        >
          <span
            className="xpg-dot"
            style={{
              borderColor: HUB.color,
              background: `radial-gradient(circle at 35% 30%, ${hexA(HUB.color, 0.55)}, ${hexA(HUB.color, 0.12)})`,
              boxShadow: active === "hub" ? `0 0 22px ${hexA(HUB.color, 0.6)}` : "none",
            }}
          >
            <Network size={18} />
          </span>
          <span className="xpg-name">{HUB.label}</span>
        </button>

        {/* role nodes */}
        {ROLES.map((r) => {
          const Icon = ICONS[r.icon]
          return (
            <button
              key={r.id}
              ref={(el) => {
                nodeEls.current[r.id] = el
              }}
              className="xpg-node"
              style={{ opacity: reduced ? 1 : 0 }}
              onMouseEnter={() => introDone && onActivate(r.id)}
              onFocus={() => introDone && onActivate(r.id)}
              onClick={() => onActivate(r.id)}
              aria-label={`${r.role} at ${r.label}`}
            >
              <span
                className="xpg-dot"
                style={{
                  borderColor: r.color,
                  background: `radial-gradient(circle at 35% 30%, ${hexA(r.color, 0.55)}, ${hexA(r.color, 0.12)})`,
                  boxShadow: active === r.id ? `0 0 22px ${hexA(r.color, 0.7)}` : "none",
                }}
              >
                <Icon size={20} />
              </span>
              <span className="xpg-name">{r.label}</span>
            </button>
          )
        })}
      </div>

      {/* detail card */}
      <div
        className="xpg-card"
        style={{
          borderLeftColor: activeRole ? activeRole.color : HUB.color,
          opacity: introDone || reduced ? 1 : 0,
        }}
      >
        {activeRole ? (
          <>
            <p className="xpg-card-role">
              {activeRole.role} ·{" "}
              <span style={{ color: activeRole.color }}>{activeRole.label}</span>
              <a
                href={activeRole.website}
                target="_blank"
                rel="noopener noreferrer"
                className="xpg-visit"
                aria-label={`Visit ${activeRole.label}`}
              >
                <ExternalLink size={13} />
              </a>
            </p>
            <p className="xpg-card-meta">
              {activeRole.type}
              <span className="dot">·</span>
              <span className="mi">
                <Calendar size={12} /> {activeRole.period}
              </span>
              <span className="dot">·</span>
              <span className="mi">
                <MapPin size={12} /> {activeRole.location}
              </span>
            </p>
            <p className="xpg-card-desc">{activeRole.description}</p>
            <ul style={{ ["--ac" as string]: activeRole.color }}>
              {activeRole.achievements.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
            <div className="xpg-chips">
              {activeRole.tech.map((tname) => (
                <span key={tname} className="xpg-chip">
                  {tname}
                </span>
              ))}
            </div>
          </>
        ) : (
          <>
            <p className="xpg-card-role">Abdullah Goher</p>
            <p className="xpg-card-meta">
              Penn CS · BSE + MSE submatriculant
              <span className="dot">·</span>AI concentration
              <span className="dot">·</span>May 2027
            </p>
            <p className="xpg-card-desc">
              A Computer Science student at the University of Pennsylvania who
              likes building AI systems that actually ship. Most recently the
              first engineer at AeternalLabs, where I built an AI-evaluation
              platform end to end: the harness that tests whether an AI decision
              changes when you flip the demographics in a prompt, the scoring
              engine behind it, and the React interface on top. Alongside that:
              computer vision with Penn Medicine surgeons at PennAdapt, research
              engineering at Penn's CSS Lab, full-stack work at CHOP, and now
              teaching the graduate operating systems course as a TA.
            </p>
            <ul style={{ ["--ac" as string]: HUB.color }}>
              <li>
                Toolkit: Python, PyTorch, HuggingFace, LangChain / LangGraph,
                React, FastAPI, PostgreSQL, AWS.
              </li>
              <li>
                Seeking AI Engineer, ML Engineer, Data Science, and Software
                Engineering roles. Hover any node to explore a role.
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  )
}
