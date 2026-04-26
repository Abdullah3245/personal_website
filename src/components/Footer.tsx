import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer
      className="relative z-10 py-12 px-6 md:px-10 lg:px-16"
      style={{
        background: "hsl(var(--hero-bg) / 0.85)",
        borderTop: "1px solid hsl(var(--border))",
        backdropFilter: "blur(14px)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="micro-label-accent mb-2">§ END</p>
            <h3
              className="text-xl font-semibold tracking-tight"
              style={{ color: "var(--c-fg)" }}
            >
              Abdullah Goher
            </h3>
            <p
              className="text-sm mt-1"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              Junior at the University of Pennsylvania
            </p>
          </div>

          <div className="flex space-x-3">
            {[
              { Icon: Github, href: "https://github.com/Abdullah3245", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/abdullah-goher-801ba227b/", label: "LinkedIn" },
              { Icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=mgoher@seas.upenn.edu", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 transition-colors"
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

        <hr
          className="my-8"
          style={{ border: 0, borderTop: "1px solid hsl(var(--border) / 0.6)" }}
        />

        <div className="flex flex-col md:flex-row justify-between gap-3 text-xs uppercase tracking-[0.16em]"
          style={{ color: "hsl(var(--muted-foreground))" }}>
          <p>© {new Date().getFullYear()} Abdullah Goher. All rights reserved.</p>
          <p>
            Built with React · Vite · Spline ·{" "}
            <span style={{ color: "var(--c-primary)" }}>Sora</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
