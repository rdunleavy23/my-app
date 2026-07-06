import Link from "next/link"
import { Mail, Phone, Twitter, Instagram, Linkedin } from "lucide-react"
import Logo from "@/components/Logo"
import { siteConfig } from "@/config/site"

const footerLinkClasses =
  "text-sm text-muted-foreground transition-colors hover:text-primary"

const socialLinks = [
  { href: siteConfig.links.x, icon: Twitter, label: "X (Twitter)" },
  { href: siteConfig.links.instagram, icon: Instagram, label: "Instagram" },
  { href: siteConfig.links.linkedin, icon: Linkedin, label: "LinkedIn" },
]

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Top band: brand + link columns */}
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Logo size="md" className="justify-start" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A senior-led growth strategy partner. We embed with your
              leadership and build a marketing strategy your team owns.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <nav aria-label="Company links">
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/" className={footerLinkClasses}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/process" className={footerLinkClasses}>
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link href="/about" className={footerLinkClasses}>
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-foreground">Resources</h3>
            <nav aria-label="Resources links">
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/blog" className={footerLinkClasses}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/fractional-cmo-services" className={footerLinkClasses}>
                    Fractional CMO Services
                  </Link>
                </li>
                <li>
                  <Link href="/what-is-fractional-cmo" className={footerLinkClasses}>
                    What Is a Fractional CMO
                  </Link>
                </li>
                <li>
                  <Link href="/sprint-vs-fractional-cmo" className={footerLinkClasses}>
                    Sprint vs Fractional CMO
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={siteConfig.links.email}
                  className={`inline-flex items-center gap-2 ${footerLinkClasses}`}
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email us
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.phone}
                  className={`inline-flex items-center gap-2 ${footerLinkClasses}`}
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call us
                </a>
              </li>
            </ul>
            <nav className="mt-5 flex items-center gap-4" aria-label="Social links">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-2 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Pattern Growth. All rights reserved.</p>
          <Link href="/privacy" className="w-fit transition-colors hover:text-primary">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
