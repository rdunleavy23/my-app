// app/blog/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import { formatDate } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Growth Strategy Insights | Pattern Growth",
  description:
    "Strategic insights on scaling revenue and building operational capability for growth-stage companies.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "https://www.patterngrowth.com/blog",
    title: "Growth Strategy Insights | Pattern Growth",
    description:
      "Strategic insights on scaling revenue and building operational capability for growth-stage companies.",
    siteName: "Pattern Growth",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Strategy Insights | Pattern Growth",
    description:
      "Strategic insights on scaling revenue and building operational capability for growth-stage companies.",
  },
  robots: { index: true, follow: true },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="container mx-auto max-w-4xl px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Growth Strategy Insights</h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Strategic insights on scaling revenue and building operational capability for growth-stage companies.
        </p>
      </div>

      {/* Featured Post */}
      {posts.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Latest Insights</h2>
          <Card className="border-2 motion-safe:transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">Latest</Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  {formatDate(posts[0].publishedAt)}
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {posts[0].readingTime} min read
                </div>
              </div>
              <CardTitle className="text-xl">
                <Link 
                  href={`/blog/${posts[0].slug}`}
                  className="hover:text-primary motion-safe:transition-colors"
                >
                  {posts[0].title}
                </Link>
              </CardTitle>
              <CardDescription className="text-base">
                {posts[0].description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link 
                href={`/blog/${posts[0].slug}`}
                className="inline-flex items-center text-primary hover:underline font-medium"
              >
                Continue reading →
              </Link>
            </CardContent>
          </Card>
        </div>
      )}

      {/* All Posts */}
      {posts.length > 1 && (
        <div>
          <h2 className="text-2xl font-semibold mb-6">All Articles</h2>
          <div className="grid gap-6">
            {posts.slice(1).map((post) => (
              <Card key={post.slug} className="motion-safe:transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" aria-hidden="true" />
                      {formatDate(post.publishedAt)}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" aria-hidden="true" />
                      {post.readingTime} min read
                    </div>
                  </div>
                  <CardTitle className="text-xl">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="hover:text-primary motion-safe:transition-colors"
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary hover:underline font-medium"
                  >
                    Continue reading →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-16 text-center bg-muted/50 rounded-lg p-8">
        <h3 className="text-2xl font-semibold mb-4">Ready to Scale Your Growth Strategy?</h3>
        <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
          Get CMO-level strategy delivered in 8 weeks. No retainers, no dependency. You own the strategy, dashboards, and playbooks.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="https://cal.com/pattern-growth/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Start a Conversation
          </Link>
          <Link 
            href="/process"
            className="inline-flex items-center justify-center border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
          >
            See Our Process
          </Link>
        </div>
      </div>
    </main>
  )
}