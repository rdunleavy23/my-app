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
            <p className="text-xs text-[#3E5661]">
              © {new Date().getFullYear()} Pattern Growth
            </p>
            <nav className="flex flex-col gap-2 text-xs" aria-label="Footer navigation">
              <Link 
                href="/" 
                className="text-[#3E5661] hover:text-[#3E5661]/80 transition-colors w-fit"
              >
                Home
              </Link>
              <Link 
                href="/process" 
                className="text-[#3E5661] hover:text-[#3E5661]/80 transition-colors w-fit"
              >
                Our Process
              </Link>
              <Link 
                href="/about" 
                className="text-[#3E5661] hover:text-[#3E5661]/80 transition-colors w-fit"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-[#3E5661] hover:text-[#3E5661]/80 transition-colors w-fit"
              >
                Blog
              </Link>
              <Link
                href="/fractional-cmo-services"
                className="text-[#3E5661] hover:text-[#3E5661]/80 transition-colors w-fit"
              >
                Fractional CMO Services
              </Link>
              <Link
                href="/privacy"
                className="text-[#3E5661] hover:text-[#3E5661]/80 transition-colors w-fit"
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
                  rel={href.startsWith("http") ? "noopener noreferrer nofollow" : undefined}
                  className="text-[#3E5661] hover:text-[#3E5661]/80 transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </nav>
          </div>

          {/* Desktop: Horizontal Single Row with Dot Separators */}
          <div className="hidden md:flex md:items-center md:justify-between gap-4">
            <p className="text-xs text-[#3E5661]">
              © {new Date().getFullYear()} Pattern Growth
            </p>
            <div className="flex items-center gap-4">
              <nav className="flex flex-wrap items-center gap-3 text-xs" aria-label="Footer navigation links">
                <Link 
                  href="/" 
                  className="text-[#3E5661] hover:text-[#3E5661]/80 transition-colors"
                >
                  Home
                </Link>
                <span className="text-[#3E5661]/50">·</span>
                <Link 
                  href="/process" 
                  className="text-[#3E5661] hover:text-[#3E5661]/80 transition-colors"
                >
                  Our Process
                </Link>
                <span className="text-[#3E5661]/50">·</span>
                <Link 
                  href="/about" 
                  className="text-[#3E5661] hover:text-[#3E5661]/80 transition-colors"
                >
                  About
                </Link>
                <span className="text-[#3E5661]/50">·</span>
                <Link
                  href="/blog"
                  className="text-[#3E5661] hover:text-[#3E5661]/80 transition-colors"
                >
                  Blog
                </Link>
                <span className="text-[#3E5661]/50">·</span>
                <Link
                  href="/fractional-cmo-services"
                  className="text-[#3E5661] hover:text-[#3E5661]/80 transition-colors"
                >
                  Fractional CMO Services
                </Link>
                <span className="text-[#3E5661]/50">·</span>
                <Link
                  href="/privacy"
                  className="text-[#3E5661] hover:text-[#3E5661]/80 transition-colors"
                >
                  Privacy Policy
                </Link>
              </nav>
              <nav className="flex items-center gap-3 ml-4 pl-4 border-l border-[#3E5661]/20" aria-label="Social links">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer nofollow" : undefined}
                    className="text-[#3E5661] hover:text-[#3E5661]/80 transition-colors"
                    aria-label={label}
                  >
                    <Icon className="h-6 w-6" />
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
