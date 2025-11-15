// app/robots.ts
import type { MetadataRoute } from "next";
import { siteConfig } from '@/config/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // CRITICAL: Block AI training bots (GPTBot trains models, we don't allow training)
      {
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        userAgent: "Google-Extended",  // Google AI training
        disallow: "/",
      },
      {
        userAgent: "CCBot",  // Common Crawl (used for AI training datasets)
        disallow: "/",
      },

      // ALLOW: AI search & citation bots (these drive traffic with citations)
      {
        userAgent: [
          "OAI-SearchBot",       // ChatGPT search results (CRITICAL: drives traffic)
          "ChatGPT-User",        // ChatGPT on-demand browsing
          "PerplexityBot",       // Perplexity search & citations
          "anthropic-ai",        // Anthropic/Claude
          "Claude-Web",          // Claude browsing
          "Applebot-Extended",   // Apple Intelligence
          "Diffbot",             // Diffbot
          "cohere-ai",           // Cohere
          "FacebookBot",         // Meta AI
          "Bingbot",             // Bing (powers ChatGPT search)
        ],
        allow: "/",
        crawlDelay: 1,
      },

      // Allow all other crawlers by default
      {
        userAgent: "*",
        allow: "/"
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
