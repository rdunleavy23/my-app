import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Company Info */}
            <div className="space-y-6 text-center lg:text-left">
              <div>
                <h3 className="text-xl font-semibold mb-3">Pattern Growth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Growth strategy sprints for $1-5M companies. We build your marketing strategy from scratch in 8 weeks with complete ownership transfer.
                </p>
              </div>
              
            </div>

            {/* Essential Links */}
            <div className="space-y-6 text-center lg:text-left">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Learn More</h4>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/process" 
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 justify-center lg:justify-start"
                  >
                    <ArrowRight className="h-3 w-3" />
                    Our 8-Week Process
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 justify-center lg:justify-start"
                  >
                    <ArrowRight className="h-3 w-3" />
                    About Our Approach
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog" 
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 justify-center lg:justify-start"
                  >
                    <ArrowRight className="h-3 w-3" />
                    Growth Insights
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Pattern Growth. All rights reserved.
              </p>
              <Link 
                href="/privacy" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
