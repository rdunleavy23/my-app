// app/blog/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
import { GetStartedButton } from "@/components/ui/get-started-button"
import { getAllPosts } from "@/lib/blog"
import { formatDate } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar } from "lucide-react"
import { MarketingSection } from "@/components/marketing/MarketingSection"

export const metadata: Metadata = {
  title: "Growth Strategy Insights | Pattern Growth Blog",
  description:
    "Growth strategy insights for scaling companies. Practical guides on marketing strategy, marketing ops, and building a foundation your team owns.",
  alternates: { canonical: "https://www.patterngrowth.com/blog" },
  openGraph: {
    type: "website",
    url: "https://www.patterngrowth.com/blog",
    title: "Growth Strategy Insights | Pattern Growth Blog",
    description:
      "Growth strategy insights for scaling companies. Practical guides on marketing strategy, marketing ops, and building a foundation your team owns.",
    siteName: "Pattern Growth",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Strategy Insights | Pattern Growth Blog",
    description:
      "Growth strategy insights for scaling companies. Practical guides on marketing strategy, marketing ops, and building a foundation your team owns.",
  },
  robots: { index: true, follow: true },
}

export default function BlogPage() {
  const posts = getAllPosts()

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Pattern Growth Blog",
    description: "Growth strategy insights and case studies for $1-5M companies. Learn how to build marketing infrastructure, implement strategic frameworks, and scale revenue without scale debt.",
    url: "https://www.patterngrowth.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Pattern Growth",
      url: "https://www.patterngrowth.com"
    }
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "BlogPosting",
        "@id": `https://www.patterngrowth.com/blog/${post.slug}`,
        headline: post.title,
        description: post.description,
        url: `https://www.patterngrowth.com/blog/${post.slug}`,
        datePublished: post.publishedAt,
        author: {
          "@type": "Person",
          name: post.author.name
        }
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <MarketingSection variant="default" className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-balance">Growth Strategy Insights</h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              How to scale revenue and build operational capability—written for growth-stage companies.
            </p>
          </div>

          {/* Featured Post */}
          {posts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">Latest Insights</h2>
          <Card className="border-2 card-hover-lift">
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
              <div className="mt-4">
                <GetStartedButton
                  size="sm"
                  className="w-full sm:w-auto"
                  location="content"
                >
                  Book a 30-min call
                </GetStartedButton>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

              {/* All Posts */}
              {posts.length > 1 && (
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">All Articles</h2>
          <div className="grid gap-6">
            {posts.slice(1).map((post, index) => (
              <Card key={post.slug} className="card-hover-lift">
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
                  {index < 2 && (
                    <div className="mt-3">
                      <GetStartedButton
                        size="sm"
                        className="w-full sm:w-auto"
                        location="content"
                      >
                        Book a 30-min call
                      </GetStartedButton>
                    </div>
                  )}
                </CardContent>
              </Card>
                ))}
              </div>
            </div>
          )}

        </div>
      </MarketingSection>

      {/* CTA Section */}
      <MarketingSection variant="chapter" className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">Ready to Scale Your Growth Strategy?</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Work with senior partners who embed in your business and build a custom strategy your team owns—the strategy, measurement systems, and playbooks, scoped to exactly what you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GetStartedButton className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold btn-hover-lift sm:min-w-[200px]" size="lg" location="content">
                Schedule a Call
              </GetStartedButton>
              <Link
                href="/process"
                className="inline-flex items-center justify-center border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                See Our Process
              </Link>
            </div>
          </div>
        </div>
      </MarketingSection>
    </>
  )
}