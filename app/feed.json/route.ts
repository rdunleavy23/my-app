// app/feed.json/route.ts
// JSON Feed for AI platforms and aggregators
// Spec: https://jsonfeed.org/version/1.1

import { getAllPosts } from '@/lib/blog'
import { siteConfig } from '@/config/site'
import { NextResponse } from 'next/server'

export async function GET() {
  const posts = getAllPosts() // Already filters out test posts

  const feed = {
    version: "https://jsonfeed.org/version/1.1",
    title: "Pattern Growth - Growth Strategy Insights",
    home_page_url: siteConfig.url,
    feed_url: `${siteConfig.url}/feed.json`,
    description: "8-week growth strategy sprints for B2B companies ($1-5M revenue). Strategic frameworks, marketing operations, and team enablement insights.",
    icon: `${siteConfig.url}/patterngrowth-logo.svg`,
    favicon: `${siteConfig.url}/favicon.ico`,
    language: "en-US",
    authors: [
      {
        name: "Pattern Growth",
        url: `${siteConfig.url}/about`,
        avatar: `${siteConfig.url}/patterngrowth-logo.svg`
      }
    ],
    items: posts.map(post => ({
      id: `${siteConfig.url}/blog/${post.slug}`,
      url: `${siteConfig.url}/blog/${post.slug}`,
      title: post.title,
      content_html: post.content,
      summary: post.description,
      date_published: post.publishedAt,
      date_modified: post.publishedAt,
      authors: [
        {
          name: post.author.name,
          url: `${siteConfig.url}/about`,
          avatar: post.author.image ? `${siteConfig.url}${post.author.image}` : undefined
        }
      ],
      tags: post.seo.keywords || [],
      _pattern_growth: {
        reading_time_minutes: post.readingTime,
        author_title: post.author.title,
      }
    }))
  }

  return NextResponse.json(feed, {
    headers: {
      'Content-Type': 'application/feed+json; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
