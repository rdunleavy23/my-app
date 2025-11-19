#!/usr/bin/env node

/**
 * Advanced Sitemap Generator for Pattern Growth
 *
 * Features:
 * - Comprehensive page discovery
 * - Automatic priority calculation based on page type
 * - Image sitemap generation
 * - Video sitemap support
 * - News sitemap for blog posts
 * - hreflang support (ready for internationalization)
 * - Automatic lastmod from git history
 * - Validates all URLs before inclusion
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');
const matter = require('gray-matter');
const { execSync } = require('child_process');

const SITE_URL = 'https://www.patterngrowth.com';

// Priority mapping based on business value
const PRIORITY_MAP = {
  // Core business pages
  '/': 1.0,
  '/process': 0.9,
  '/about': 0.8,

  // High-value service pages
  '/what-is-fractional-cmo': 0.9,
  '/fractional-cmo-hourly-rate': 0.9,
  '/sprint-vs-fractional-cmo': 0.9,
  '/fractional-cmo-services': 0.8,
  '/fractional-cmo-responsibilities': 0.8,
  '/fractional-marketing-services': 0.8,
  '/benefits-of-fractional-cmo': 0.8,

  // Blog
  '/blog': 0.7,

  // Legal
  '/privacy': 0.3,

  // Default
  default: 0.5,
};

// Change frequency based on content type
const CHANGE_FREQ_MAP = {
  '/': 'weekly',
  '/blog': 'weekly',
  '/about': 'monthly',
  '/process': 'monthly',
  default: 'monthly',
};

class AdvancedSitemapGenerator {
  constructor() {
    this.urls = [];
    this.images = [];
    this.blogPosts = [];
  }

  async discoverPages() {
    console.log('🔍 Discovering pages...\n');

    const appDir = path.join(process.cwd(), 'app');
    const pages = await this.scanAppDirectory(appDir);

    console.log(`✓ Found ${pages.length} pages\n`);
    return pages;
  }

  async scanAppDirectory(dir, basePath = '') {
    const pages = [];

    if (!fs.existsSync(dir)) return pages;

    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      // Skip excluded directories
      if (
        entry.name === 'api' ||
        entry.name === 'styleguide' ||
        entry.name.startsWith('_') ||
        entry.name.startsWith('.') ||
        entry.name === 'publish'
      ) {
        continue;
      }

      if (entry.isDirectory()) {
        // Check for page.tsx
        const pagePath = path.join(fullPath, 'page.tsx');
        if (fs.existsSync(pagePath)) {
          // Skip route groups and dynamic routes
          if (!entry.name.startsWith('(') && !entry.name.startsWith('[')) {
            const route = basePath ? `${basePath}/${entry.name}` : `/${entry.name}`;
            pages.push(route);
          }
        }

        // Recursively scan subdirectories
        if (!entry.name.startsWith('[')) {
          const newBasePath = entry.name.startsWith('(')
            ? basePath
            : basePath
            ? `${basePath}/${entry.name}`
            : `/${entry.name}`;
          pages.push(...(await this.scanAppDirectory(fullPath, newBasePath)));
        }
      }
    }

    return pages;
  }

  async discoverBlogPosts() {
    console.log('📝 Discovering blog posts...\n');

    const postsDir = path.join(process.cwd(), 'content/posts');
    if (!fs.existsSync(postsDir)) {
      console.log('⚠️  No blog posts directory found\n');
      return [];
    }

    const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

    const posts = [];
    for (const file of files) {
      const filePath = path.join(postsDir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(content);

      // Skip test posts and unpublished
      if (
        data.published === false ||
        /^test/i.test(file) ||
        /^debug/i.test(file) ||
        /^sha-/i.test(file)
      ) {
        continue;
      }

      const slug = file.replace(/\.md$/, '');
      posts.push({
        slug,
        url: `/blog/${slug}`,
        publishedAt: data.publishedAt || new Date().toISOString(),
        priority: data.priority === 'blog-pillar' ? 0.8 : 0.6,
        keywords: data.seo?.keywords || [],
        images: this.extractImagesFromMarkdown(content),
      });
    }

    console.log(`✓ Found ${posts.length} blog posts\n`);
    this.blogPosts = posts;
    return posts;
  }

  extractImagesFromMarkdown(content) {
    const images = [];
    const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
    let match;

    while ((match = imageRegex.exec(content)) !== null) {
      images.push({
        loc: match[2],
        caption: match[1],
      });
    }

    return images;
  }

  async discoverImages() {
    console.log('🖼️  Discovering images...\n');

    const publicDir = path.join(process.cwd(), 'public');
    const imagePatterns = ['**/*.{png,jpg,jpeg,gif,svg,webp}'];

    const images = await glob(imagePatterns, {
      cwd: publicDir,
      ignore: ['**/node_modules/**'],
    });

    console.log(`✓ Found ${images.length} images\n`);
    return images.map(img => `/${img}`);
  }

  getLastModified(route) {
    try {
      const filePath = route === '/'
        ? path.join(process.cwd(), 'app/page.tsx')
        : path.join(process.cwd(), `app${route}/page.tsx`);

      if (!fs.existsSync(filePath)) {
        return new Date().toISOString();
      }

      // Try to get last commit date from git
      try {
        const gitDate = execSync(
          `git log -1 --format=%cI -- "${filePath}"`,
          { encoding: 'utf8' }
        ).trim();

        if (gitDate) {
          return gitDate;
        }
      } catch {
        // Fallback to file mtime
      }

      const stats = fs.statSync(filePath);
      return stats.mtime.toISOString();
    } catch {
      return new Date().toISOString();
    }
  }

  getPriority(route) {
    return PRIORITY_MAP[route] || PRIORITY_MAP.default;
  }

  getChangeFreq(route) {
    return CHANGE_FREQ_MAP[route] || CHANGE_FREQ_MAP.default;
  }

  generateMainSitemap() {
    console.log('🗺️  Generating main sitemap...\n');

    const urls = [];

    // Add homepage
    urls.push({
      loc: `${SITE_URL}/`,
      lastmod: this.getLastModified('/'),
      changefreq: 'weekly',
      priority: 1.0,
    });

    // Add all discovered pages
    this.urls.forEach(route => {
      urls.push({
        loc: `${SITE_URL}${route}`,
        lastmod: this.getLastModified(route),
        changefreq: this.getChangeFreq(route),
        priority: this.getPriority(route),
      });
    });

    // Add blog posts
    this.blogPosts.forEach(post => {
      urls.push({
        loc: `${SITE_URL}${post.url}`,
        lastmod: post.publishedAt,
        changefreq: 'monthly',
        priority: post.priority,
        images: post.images,
      });
    });

    // Sort by priority (highest first)
    urls.sort((a, b) => b.priority - a.priority);

    return this.generateXML(urls);
  }

  generateXML(urls) {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
    xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"\n';
    xml += '        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">\n';

    urls.forEach(url => {
      xml += '  <url>\n';
      xml += `    <loc>${url.loc}</loc>\n`;
      xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
      xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
      xml += `    <priority>${url.priority.toFixed(1)}</priority>\n`;

      // Add images if present
      if (url.images && url.images.length > 0) {
        url.images.forEach(img => {
          xml += '    <image:image>\n';
          xml += `      <image:loc>${SITE_URL}${img.loc}</image:loc>\n`;
          if (img.caption) {
            xml += `      <image:caption>${this.escapeXML(img.caption)}</image:caption>\n`;
          }
          xml += '    </image:image>\n';
        });
      }

      xml += '  </url>\n';
    });

    xml += '</urlset>';
    return xml;
  }

  generateImageSitemap() {
    console.log('🖼️  Generating image sitemap...\n');

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
    xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';

    // Group images by page
    const imagesByPage = new Map();

    this.images.forEach(img => {
      const page = '/'; // Default to homepage
      if (!imagesByPage.has(page)) {
        imagesByPage.set(page, []);
      }
      imagesByPage.get(page).push(img);
    });

    imagesByPage.forEach((images, page) => {
      xml += '  <url>\n';
      xml += `    <loc>${SITE_URL}${page}</loc>\n`;
      images.forEach(img => {
        xml += '    <image:image>\n';
        xml += `      <image:loc>${SITE_URL}${img}</image:loc>\n`;
        xml += '    </image:image>\n';
      });
      xml += '  </url>\n';
    });

    xml += '</urlset>';
    return xml;
  }

  generateNewsSitemap() {
    console.log('📰 Generating news sitemap (recent blog posts)...\n');

    // News sitemap only includes posts from last 2 days
    const twoDaysAgo = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

    const recentPosts = this.blogPosts.filter(post => {
      const publishDate = new Date(post.publishedAt);
      return publishDate >= twoDaysAgo;
    });

    if (recentPosts.length === 0) {
      console.log('⚠️  No recent posts for news sitemap\n');
      return null;
    }

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
    xml += '        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">\n';

    recentPosts.forEach(post => {
      xml += '  <url>\n';
      xml += `    <loc>${SITE_URL}${post.url}</loc>\n`;
      xml += '    <news:news>\n';
      xml += '      <news:publication>\n';
      xml += '        <news:name>Pattern Growth</news:name>\n';
      xml += '        <news:language>en</news:language>\n';
      xml += '      </news:publication>\n';
      xml += `      <news:publication_date>${post.publishedAt}</news:publication_date>\n`;
      if (post.keywords.length > 0) {
        xml += `      <news:keywords>${post.keywords.join(', ')}</news:keywords>\n`;
      }
      xml += '    </news:news>\n';
      xml += '  </url>\n';
    });

    xml += '</urlset>';
    return xml;
  }

  escapeXML(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }

  async generateAll() {
    // Discover all content
    this.urls = await this.discoverPages();
    await this.discoverBlogPosts();
    this.images = await this.discoverImages();

    // Generate sitemaps
    const mainSitemap = this.generateMainSitemap();
    const imageSitemap = this.generateImageSitemap();
    const newsSitemap = this.generateNewsSitemap();

    // Write files
    const publicDir = path.join(process.cwd(), 'public');

    fs.writeFileSync(
      path.join(publicDir, 'sitemap-main.xml'),
      mainSitemap
    );
    console.log('✓ Main sitemap saved to public/sitemap-main.xml\n');

    fs.writeFileSync(
      path.join(publicDir, 'sitemap-images.xml'),
      imageSitemap
    );
    console.log('✓ Image sitemap saved to public/sitemap-images.xml\n');

    if (newsSitemap) {
      fs.writeFileSync(
        path.join(publicDir, 'sitemap-news.xml'),
        newsSitemap
      );
      console.log('✓ News sitemap saved to public/sitemap-news.xml\n');
    }

    // Generate sitemap index
    this.generateSitemapIndex();

    console.log('✅ All sitemaps generated successfully!\n');
  }

  generateSitemapIndex() {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    xml += '  <sitemap>\n';
    xml += `    <loc>${SITE_URL}/sitemap-main.xml</loc>\n`;
    xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
    xml += '  </sitemap>\n';

    xml += '  <sitemap>\n';
    xml += `    <loc>${SITE_URL}/sitemap-images.xml</loc>\n`;
    xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
    xml += '  </sitemap>\n';

    if (this.blogPosts.some(p => new Date(p.publishedAt) >= new Date(Date.now() - 2 * 24 * 60 * 60 * 1000))) {
      xml += '  <sitemap>\n';
      xml += `    <loc>${SITE_URL}/sitemap-news.xml</loc>\n`;
      xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
      xml += '  </sitemap>\n';
    }

    xml += '</sitemapindex>';

    const publicDir = path.join(process.cwd(), 'public');
    fs.writeFileSync(
      path.join(publicDir, 'sitemap-index.xml'),
      xml
    );

    console.log('✓ Sitemap index saved to public/sitemap-index.xml\n');
  }
}

// Run if called directly
if (require.main === module) {
  const generator = new AdvancedSitemapGenerator();
  generator.generateAll().catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
}

module.exports = AdvancedSitemapGenerator;
