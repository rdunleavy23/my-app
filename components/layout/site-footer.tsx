import Link from "next/link"
import { siteConfig } from "@/config/site"

export default function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Pattern Growth</h3>
              <p className="text-sm text-muted-foreground">
                Growth strategy your team can actually run. CMO-level thinking delivered through focused 2-month engagements.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link 
                    href="/what-is-fractional-cmo" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    What is Fractional CMO?
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/fractional-cmo-alternative" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Fractional CMO Alternative
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/fractional-cmo-services" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Fractional CMO Services
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/fractional-marketing-services" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Fractional Marketing Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link 
                    href="/process" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/benefits-of-fractional-cmo" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Benefits of Fractional CMO
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/fractional-cmo-hourly-rate" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Fractional CMO Hourly Rate
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/fractional-cmo-responsibilities" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Fractional CMO Responsibilities
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link 
                    href="/about" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/privacy" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://cal.com/pattern-growth" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Schedule a Call
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Pattern Growth. All rights reserved.
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a 
                  href={siteConfig.links.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Twitter
                </a>
                <a 
                  href={siteConfig.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
