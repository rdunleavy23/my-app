import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Force dynamic rendering - prevents static caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const SITE_URL = 'https://patterngrowth.com';

// Test post patterns to exclude from sitemap
const TEST_POST_PATTERNS = [
  /^test/i,
  /^debug/i,
  /^sha-/i,
  /hello-from-api/i,
];

function isTestPost(slug: string): boolean {
  return TEST_POST_PATTERNS.some(pattern => pattern.test(slug));
}

function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      const stats = fs.statSync(fullPath);
      
      return {
        slug,
        publishDate: data.publishDate || data.date || stats.mtime.toISOString(),
        modifiedDate: stats.mtime.toISOString(),
        published: data.published !== false, // default to true unless explicitly false
      };
    })
    // Filter out test posts and unpublished posts
    .filter(post => post.published && !isTestPost(post.slug))
    // Sort by date descending (newest first)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

  return posts;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getBlogPosts();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: posts[0]?.modifiedDate || new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Blog post pages
  const blogPages: MetadataRoute.Sitemap = posts.map(post => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.modifiedDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}