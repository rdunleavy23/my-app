import Link from "next/link"
import { ArrowRight, Mail, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export default function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Pattern Growth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Growth strategy sprints for $1-5M companies. We build your marketing strategy from scratch in 8 weeks with complete ownership transfer.
                </p>
              </div>
              
              {/* Primary CTA */}
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <a
                  href="https://cal.com/pattern-growth/30min?overlayCalendar=true&utm_source=site&utm_medium=footer_cta&utm_campaign=home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Calendar className="h-4 w-4" />
                  Schedule a Call
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Essential Links */}
            <div className="space-y-6">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Learn More</h4>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/process" 
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" />
                    Our 8-Week Process
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" />
                    About Our Approach
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog" 
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" />
                    Growth Insights
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Legal */}
            <div className="space-y-6">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Connect</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="mailto:hello@patterngrowth.com"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <Mail className="h-3 w-3" />
                    hello@patterngrowth.com
                  </a>
                </li>
                <li>
                  <Link 
                    href="/privacy" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
              
              {/* Social Links */}
              <div className="flex space-x-4 pt-2">
                <a 
                  href={siteConfig.links.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Follow us on Twitter"
                >
                  Twitter
                </a>
                <a 
                  href={siteConfig.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="View our GitHub"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Pattern Growth. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground">
                Built for growth-stage companies who need strategy, not retainers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
