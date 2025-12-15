import Link from "next/link"
import { Mail, Phone, Twitter, Instagram, Linkedin } from "lucide-react"
import { siteConfig } from "@/config/site"

export default function SiteFooter() {
  const socialLinks = [
    { href: siteConfig.links.email, icon: Mail, label: "Email" },
    { href: siteConfig.links.phone, icon: Phone, label: "Phone" },
    { href: siteConfig.links.x, icon: Twitter, label: "X (Twitter)" },
    { href: siteConfig.links.instagram, icon: Instagram, label: "Instagram" },
    { href: siteConfig.links.linkedin, icon: Linkedin, label: "LinkedIn" },
  ]

  return (
    <footer className="border-t bg-muted/20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="py-8">
          {/* Mobile: Vertical Stack, Left-Aligned */}
          <div className="flex flex-col gap-2.5 text-left md:hidden">
            <p className="text-xs text-muted-foreground/90">
              © {new Date().getFullYear()} Pattern Growth
            </p>
            <nav className="flex flex-col gap-2 text-xs" aria-label="Footer navigation">
              <Link 
                href="/" 
                className="text-muted-foreground/90 hover:text-foreground transition-colors w-fit"
              >
                Home
              </Link>
              <Link 
                href="/process" 
                className="text-muted-foreground/90 hover:text-foreground transition-colors w-fit"
              >
                Our Process
              </Link>
              <Link 
                href="/about" 
                className="text-muted-foreground/90 hover:text-foreground transition-colors w-fit"
              >
                About
              </Link>
              <Link 
                href="/blog" 
                className="text-muted-foreground/90 hover:text-foreground transition-colors w-fit"
              >
                Blog
              </Link>
              <Link 
                href="/privacy" 
                className="text-muted-foreground/90 hover:text-foreground transition-colors w-fit"
              >
                Privacy Policy
              </Link>
            </nav>
            <nav className="flex items-center gap-3 mt-2" aria-label="Social links">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-muted-foreground/70 hover:text-foreground transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </nav>
          </div>

          {/* Desktop: Horizontal Single Row with Dot Separators */}
          <div className="hidden md:flex md:items-center md:justify-between gap-4">
            <p className="text-xs text-muted-foreground/90">
              © {new Date().getFullYear()} Pattern Growth
            </p>
            <div className="flex items-center gap-4">
              <nav className="flex flex-wrap items-center gap-3 text-xs" aria-label="Footer navigation links">
                <Link 
                  href="/" 
                  className="text-muted-foreground/90 hover:text-foreground transition-colors"
                >
                  Home
                </Link>
                <span className="text-muted-foreground/50">·</span>
                <Link 
                  href="/process" 
                  className="text-muted-foreground/90 hover:text-foreground transition-colors"
                >
                  Our Process
                </Link>
                <span className="text-muted-foreground/50">·</span>
                <Link 
                  href="/about" 
                  className="text-muted-foreground/90 hover:text-foreground transition-colors"
                >
                  About
                </Link>
                <span className="text-muted-foreground/50">·</span>
                <Link 
                  href="/blog" 
                  className="text-muted-foreground/90 hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
                <span className="text-muted-foreground/50">·</span>
                <Link 
                  href="/privacy" 
                  className="text-muted-foreground/90 hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </nav>
              <nav className="flex items-center gap-3 ml-4 pl-4 border-l border-border" aria-label="Social links">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-muted-foreground/70 hover:text-foreground transition-colors"
                    aria-label={label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
