"use client"

import { Mail, MapPin, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const CONTACTS = [
  {
    icon: Mail,
    title: "Email",
    value: "mgoher@seas.upenn.edu",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=mgoher@seas.upenn.edu",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (215) 578-1132",
    href: "tel:+12155781132",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Philadelphia, PA",
    href: "https://maps.google.com/?q=Philadelphia,PA",
  },
]

const SOCIALS = [
  { icon: Github, href: "https://github.com/Abdullah3245", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/abdullah-goher-801ba227b/", label: "LinkedIn" },
]

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true)
            io.disconnect()
            break
          }
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section
      id="contact"
      className="relative z-10 px-6 md:px-10 lg:px-16 py-24 md:py-32"
    >
      <div className="max-w-4xl mx-auto">
        <header className="mb-14">
          <p className="micro-label-accent mb-3">§04 / Contact</p>
          <h2
            className="text-3xl md:text-5xl font-semibold tracking-tight"
            style={{ color: "var(--c-fg)", lineHeight: 1.05 }}
          >
            Let's build something.
          </h2>
          <p
            className="mt-4 max-w-xl"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Open to internships, research collaborations, and interesting
            problems.
          </p>
        </header>

        <div
          ref={ref}
          className="journey-panel p-8 md:p-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(28px)",
            transition:
              "opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {CONTACTS.map(({ icon: Icon, title, value, href }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-5"
                style={{
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "0.125rem",
                  background: "hsl(var(--background) / 0.4)",
                  transition: "border-color 240ms ease, transform 240ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--c-primary)"
                  e.currentTarget.style.transform = "translateY(-2px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "hsl(var(--border))"
                  e.currentTarget.style.transform = "none"
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <Icon size={18} style={{ color: "var(--c-primary)" }} />
                  <ArrowUpRight
                    size={16}
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  />
                </div>
                <p className="micro-label mb-1">{title}</p>
                <p
                  className="font-medium"
                  style={{
                    color: "var(--c-fg)",
                    fontSize: "0.95rem",
                    wordBreak: "break-word",
                  }}
                >
                  {value}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=mgoher@seas.upenn.edu",
                  "_blank",
                )
              }
              className="btn-primary text-sm"
            >
              Send a quick email
            </button>
            <a
              href="/files/Abdullah_resume.docx"
              download="Abdullah_resume"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary text-sm"
            >
              Download resume
            </a>

            <div className="flex items-center gap-3 ml-auto">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 transition-colors"
                  style={{
                    color: "hsl(var(--muted-foreground))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.125rem",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--c-primary)"
                    e.currentTarget.style.borderColor = "var(--c-primary)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "hsl(var(--muted-foreground))"
                    e.currentTarget.style.borderColor = "hsl(var(--border))"
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
