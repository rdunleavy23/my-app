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
  // 🧩 Filter out test/debug/sha posts safely
  const posts = getAllPosts().filter(post => {
    const TEST_PATTERNS = [/^test/i, /^debug/i, /^sha-/i, /hello-from-api/i];
    return post.publishedAt !== false && !TEST_PATTERNS.some(p => p.test(post.slug));
  });

  return (
    <section className="mx-auto max-w-3xl py-12">
      <h1 className="text-3xl font-bold mb-8">Growth Insights</h1>
      <ul className="space-y-8">
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold hover:underline">{post.title}</h2>
            </Link>
            <p className="text-muted-foreground text-sm mb-2">{formatDate(post.date)}</p>
            <p className="text-muted-foreground">{post.excerpt}</p>
          </li>
        ))}
        {posts.length === 0 && (
          <li className="text-muted-foreground">No published posts available.</li>
        )}
      </ul>
    </section>
  )
}
