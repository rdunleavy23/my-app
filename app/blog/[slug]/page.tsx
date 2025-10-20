import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { markdownToHtml } from '@/lib/markdown'
import { formatDate } from '@/lib/utils'
import { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/breadcrumbs'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      url: `https://patterngrowth.com/blog/${post.slug}`,
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

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const content = await markdownToHtml(post.content)

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.title,
    },
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "publisher": {
      "@type": "Organization",
      "name": "Pattern Growth",
      "url": "https://patterngrowth.com",
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://patterngrowth.com/blog/${post.slug}`,
    },
  }

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
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
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground font-medium">
                    {post.author.name.charAt(0)}
                  </span>
                </div>
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

          <div className="mt-16 p-8 bg-muted rounded-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to diagnose your growth gaps?
              </h3>
              <p className="text-muted-foreground mb-6">
                Schedule a 15-minute fit call. We'll discuss your situation and be direct about whether our approach makes sense for you. No pitch, just clarity.
              </p>
              <Link
                href="https://cal.com/pattern-growth/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                Schedule Your Call
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
