"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import ThreeNameParticles from "./ThreeNameParticles"

/**
 * Intro card. Sits over the fixed Spline scene, content anchored bottom-left.
 * Staggered fade-up reveal.
 */
export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end overflow-hidden"
      // pointer-events: none so the Spline scene behind us receives mouse
      // events (hovering over blocks plays the scene's built-in animations).
      // The hero's buttons / photo / social links opt back in with
      // pointer-events-auto on themselves.
      style={{ background: "transparent", pointerEvents: "none" }}
    >
      {/* Subtle dark overlay so the headline reads on top of the Spline scene */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--hero-bg) / 0.0) 0%, hsl(var(--hero-bg) / 0.0) 55%, hsl(var(--hero-bg) / 0.55) 100%)",
          zIndex: 1,
        }}
      />

      <div className="relative z-10 pointer-events-none w-full max-w-[90%] sm:max-w-md lg:max-w-3xl px-6 md:px-12 pb-12 md:pb-16 pt-32">
        {/* Profile photo */}
        <div
          className="opacity-0 animate-fade-up mb-5 md:mb-6"
          style={{ animationDelay: "0.0s" }}
        >
          <div
            className="relative inline-block"
            style={{
              width: "clamp(88px, 8.5vw, 120px)",
              height: "clamp(88px, 8.5vw, 120px)",
            }}
          >
            <img
              src="/files/Abdullah_new.jpg"
              alt="Abdullah Goher"
              className="w-full h-full object-cover object-[center_25%] pointer-events-auto"
              style={{
                borderRadius: "50%",
                border: "2px solid hsl(var(--primary))",
                boxShadow:
                  "0 0 24px hsl(var(--primary) / 0.4), 0 4px 18px rgba(0,0,0,0.45)",
              }}
            />
            <span
              aria-hidden="true"
              className="absolute -bottom-1 -right-1 inline-flex items-center justify-center"
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                background: "hsl(var(--primary))",
                boxShadow: "0 0 0 3px var(--c-hero-bg), 0 0 10px hsl(var(--primary))",
              }}
            />
          </div>
        </div>

        {/* Eyebrow */}
        <p
          className="micro-label-accent opacity-0 animate-fade-up mb-4"
          style={{ animationDelay: "0.1s" }}
        >
          Junior · CIS · Penn '27
        </p>

        {/* Heading — particle text. Two lines: ABDULLAH (white) + GOHER (green). */}
        <h1
          className="opacity-0 animate-fade-up font-bold uppercase mb-3 md:mb-5 pointer-events-auto"
          style={{
            animationDelay: "0.2s",
            color: "var(--c-fg)",
            fontSize: "clamp(2.6rem, 8vw, 6rem)",
            lineHeight: 1.04,
            letterSpacing: "-0.05em",
          }}
        >
          <ThreeNameParticles text="ABDULLAH" color="hsl(0, 0%, 96%)" />
          <br />
          <ThreeNameParticles text="GOHER" color="hsl(119, 99%, 46%)" />
        </h1>

        {/* Subheading */}
        <p
          className="opacity-0 animate-fade-up font-light mb-3 md:mb-6"
          style={{
            animationDelay: "0.4s",
            color: "hsl(var(--foreground) / 0.85)",
            fontSize: "clamp(1.05rem, 2.4vw, 1.75rem)",
            letterSpacing: "-0.01em",
          }}
        >
          I build secure, intelligent systems.
        </p>

        {/* Credential — kept prominent on its own line */}
        <p
          className="opacity-0 animate-fade-up font-medium mb-2 md:mb-3 max-w-2xl"
          style={{
            animationDelay: "0.55s",
            color: "var(--c-fg)",
            fontSize: "clamp(0.95rem, 1.5vw, 1.2rem)",
            lineHeight: 1.5,
          }}
        >
          B.S.E. &amp; M.S.E. in Computer &amp; Information Science at the
          University of Pennsylvania.
        </p>

        {/* Description */}
        <p
          className="opacity-0 animate-fade-up font-light mb-6 md:mb-8 max-w-2xl"
          style={{
            animationDelay: "0.65s",
            color: "hsl(var(--muted-foreground))",
            fontSize: "clamp(0.92rem, 1.4vw, 1.15rem)",
            lineHeight: 1.6,
          }}
        >
          I ship full-stack applications, train ML models for real-world
          problems, and turn multi-terabyte datasets into clear decisions.
        </p>

        {/* CTAs */}
        <div
          className="opacity-0 animate-fade-up flex flex-wrap gap-3 mb-6 md:mb-8"
          style={{ animationDelay: "0.7s" }}
        >
          <button
            type="button"
            onClick={() => scrollTo("projects")}
            className="btn-primary pointer-events-auto text-sm"
          >
            View My Work
          </button>
          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="btn-secondary pointer-events-auto text-sm"
          >
            Get In Touch
          </button>
        </div>

        {/* Trust line + social */}
        <div
          className="opacity-0 animate-fade-up flex flex-wrap items-center gap-4 md:gap-6"
          style={{ animationDelay: "0.85s" }}
        >
          <p
            className="font-light"
            style={{
              color: "hsl(var(--muted-foreground) / 0.7)",
              fontSize: "0.78rem",
              letterSpacing: "0.04em",
            }}
          >
            Philadelphia, PA · 4 internships shipped · ML / SWE / Data
          </p>

          <span
            className="hidden md:inline-block w-px h-4"
            style={{ background: "hsl(var(--border))" }}
          />

          <div className="flex items-center gap-3 pointer-events-auto">
            <a
              href="https://github.com/Abdullah3245"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: "hsl(var(--muted-foreground))" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--c-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "hsl(var(--muted-foreground))")
              }
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdullah-goher-801ba227b/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: "hsl(var(--muted-foreground))" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--c-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "hsl(var(--muted-foreground))")
              }
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mgoher@seas.upenn.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: "hsl(var(--muted-foreground))" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--c-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "hsl(var(--muted-foreground))")
              }
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
