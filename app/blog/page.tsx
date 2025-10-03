import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { formatDate } from '@/lib/utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Growth Insights | Pattern Growth',
  description: 'Strategic insights on scaling revenue and building operational capability for growth-stage companies.',
  openGraph: {
    title: 'Growth Insights | Pattern Growth',
    description: 'Strategic insights on scaling revenue and building operational capability for growth-stage companies.',
    url: 'https://patterngrowth.com/blog',
    siteName: 'Pattern Growth',
    type: 'website'
  }
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Growth Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Strategic insights on scaling revenue and building operational capability for growth-stage companies.
          </p>
        </div>

        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{formatDate(post.publishedAt)}</span>
                    <span>•</span>
                    <span>{post.readingTime} min read</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-accent-foreground font-medium text-sm">
                        {post.author.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {post.author.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {post.author.title}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
