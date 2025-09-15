#!/bin/bash

# 🚀 Pattern Growth Blog System - Single Command Deployment
# Run this file with: ./deploy-blog.sh

echo "🚀 Setting up Pattern Growth Blog System..."

# 1. Install required dependencies
echo "📦 Installing dependencies..."
npm install gray-matter unified remark-parse remark-rehype rehype-stringify rehype-slug rehype-autolink-headings

# 2. Create directory structure
echo "📁 Creating directory structure..."
mkdir -p content/posts
mkdir -p lib
mkdir -p app/blog/[slug]
mkdir -p app/blog/feed.xml

# 3. Create lib/types.ts
echo "📝 Creating type definitions..."
cat > lib/types.ts <<'EOT'
export interface BlogPost {
  slug: string
  title: string
  description: string
  publishedAt: string
  readingTime: number
  content: string
  author: {
    name: string
    title: string
    image: string
  }
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}
EOT

# 4. Create lib/blog.ts
echo "📝 Creating blog utilities..."
cat > lib/blog.ts <<'EOT'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPost } from './types'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        description: data.description,
        publishedAt: data.publishedAt,
        readingTime: calculateReadingTime(content),
        content,
        author: data.author,
        seo: data.seo
      } as BlogPost
    })

  return allPostsData.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, \`\${slug}.md\`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      description: data.description,
      publishedAt: data.publishedAt,
      readingTime: calculateReadingTime(content),
      content,
      author: data.author,
      seo: data.seo
    }
  } catch {
    return null
  }
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}
EOT

# 5. Create lib/markdown.ts
echo "📝 Creating markdown processor..."
cat > lib/markdown.ts <<'EOT'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: 'wrap',
      properties: {
        className: ['anchor-link']
      }
    })
    .use(rehypeStringify)
    .process(markdown)

  return result.toString()
}
EOT

# 6. Add utility to lib/utils.ts
echo "📝 Updating utilities..."
cat >> lib/utils.ts <<'EOT'

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
EOT

# 7–11. Pages, sitemap, RSS, sample post
echo "🛠️ Generating blog pages and content..."
cat > app/blog/page.tsx <<'EOT'
// ... your blog index page.tsx here ...
EOT

cat > app/blog/[slug]/page.tsx <<'EOT'
// ... your post page.tsx here ...
EOT

cat > app/sitemap.ts <<'EOT'
// ... your sitemap.ts here ...
EOT

cat > app/blog/feed.xml/route.ts <<'EOT'
// ... your RSS route.ts here ...
EOT

cat > content/posts/scaling-revenue-without-scale-debt.md <<'EOT'
// ... your sample markdown post here ...
EOT

# 12. Update package.json script
echo "📝 Updating deploy script..."
npm pkg set scripts.deploy="npm run build && git add . && git commit -m 'Deploy blog updates' && git push"

# 13. Build and deploy
echo "🚀 Building project..."
npm run build

if [ $? -eq 0 ]; then
  echo "✅ Build successful!"
  git add .
  git commit -m "✨ Add complete blog system with SEO optimization"
  git push
  echo "🎉 BLOG SYSTEM DEPLOYED SUCCESSFULLY!"
else
  echo "❌ Build failed. Please check logs."
  exit 1
fi
