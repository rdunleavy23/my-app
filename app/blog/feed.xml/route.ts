import { getAllPosts } from '@/lib/blog'

export async function GET() {
  const posts = getAllPosts()

  const rssItems = posts.map((post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>https://patterngrowth.com/blog/${post.slug}</link>
      <guid>https://patterngrowth.com/blog/${post.slug}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <author>${post.author.name}</author>
    </item>
  `).join('')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>Pattern Growth - Growth Insights</title>
        <description>Strategic insights on scaling revenue and building operational capability for growth-stage companies.</description>
        <link>https://patterngrowth.com/blog</link>
        <atom:link href="https://patterngrowth.com/blog/feed.xml" rel="self" type="application/rss+xml" />
        <language>en-US</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${rssItems}
      </channel>
    </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
