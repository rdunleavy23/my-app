import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { markdownToHtml } from '@/lib/markdown'
import { formatDate } from '@/lib/utils'
import { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import { GetStartedButton } from '@/components/ui/get-started-button'
import RelatedContent from '@/components/ui/related-content'
import { isProtectedRoute } from '@/components/lib/route-guards'
import { BlogPostTracking } from './blog-post-tracking'
import { createBreadcrumbListSchema } from '@/lib/schemas'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
      robots: { index: false, follow: false },
    }
  }

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    alternates: { canonical: `https://www.patterngrowth.com/blog/${post.slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      url: `https://www.patterngrowth.com/blog/${post.slug}`,
      siteName: 'Pattern Growth',
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo.title,
      description: post.seo.description,
    },
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const content = await markdownToHtml(post.content)

  const breadcrumbSchema = createBreadcrumbListSchema([
    { label: 'Home', href: '/', position: 1 },
    { label: 'Blog', href: '/blog', position: 2 },
    { label: post.title, position: 3 }
  ]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.title,
      "url": `https://www.patterngrowth.com/about`,
      "image": post.author.image ? `https://www.patterngrowth.com${post.author.image}` : undefined,
      "worksFor": {
        "@type": "Organization",
        "name": "Pattern Growth",
        "url": "https://www.patterngrowth.com"
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "publisher": {
      "@type": "Organization",
      "name": "Pattern Growth",
      "url": "https://www.patterngrowth.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.patterngrowth.com/patterngrowth-logo.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.patterngrowth.com/blog/${post.slug}`,
    },
    "url": `https://www.patterngrowth.com/blog/${post.slug}`,
    "articleSection": "Growth Strategy",
    "keywords": post.seo.keywords?.join(", ") || "",
    "timeRequired": `PT${post.readingTime}M`,
    "isPartOf": {
      "@type": "Blog",
      "name": "Pattern Growth Blog",
      "url": "https://www.patterngrowth.com/blog"
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Growth Strategy",
        "description": "Strategic frameworks for scaling companies"
      },
      {
        "@type": "Thing",
        "name": "Marketing Operations",
        "description": "Marketing systems and infrastructure development"
      }
    ]
  }

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <BlogPostTracking 
        postTitle={post.title}
        postAuthor={post.author.name}
        postSlug={post.slug}
      />

      <article className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-3xl">
          <header className="mb-12">
            <div className="mb-8">
              <Link
                href="/blog"
                className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                ← Back to insights
              </Link>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{formatDate(post.publishedAt)}</span>
                <span>•</span>
                <span>{post.readingTime} min read</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                {post.description}
              </p>

              <div className="flex items-center gap-4 pt-4">
                {post.author.image ? (
                  <img
                    src={post.author.image}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-medium">
                      {post.author.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-medium text-foreground">
                    {post.author.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {post.author.title}
                  </p>
                </div>
              </div>
            </div>
          </header>

          <div
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-code:text-foreground prose-code:bg-muted prose-pre:bg-muted"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* Related Content (always allowed on blog) */}
          <RelatedContent
            currentPage={`/blog/${slug}`}
            className="mt-12 mb-8"
            variant="cards"
            maxLinks={3}
          />

          <div className="mt-16 p-8 bg-muted rounded-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to diagnose your growth gaps?
              </h3>
              <p className="text-muted-foreground mb-6">
                Schedule a 15-minute fit call. We'll discuss your situation and be direct about whether our approach makes sense for you. No pitch, just clarity.
              </p>
              <GetStartedButton>
                Schedule Your Call
              </GetStartedButton>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
