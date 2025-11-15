// app/robots.ts
import type { MetadataRoute } from "next";
import { siteConfig } from '@/config/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all crawlers by default
      {
        userAgent: "*",
        allow: "/"
      },
      // Explicitly welcome AI platform crawlers
      {
        userAgent: [
          "GPTBot",              // OpenAI
          "ChatGPT-User",        // ChatGPT browsing
          "anthropic-ai",        // Anthropic/Claude
          "Claude-Web",          // Claude browsing
          "PerplexityBot",       // Perplexity
          "Google-Extended",     // Google AI (Gemini)
          "Applebot-Extended",   // Apple Intelligence
          "CCBot",               // Common Crawl (used by many AI platforms)
          "Diffbot",             // Diffbot
          "cohere-ai",           // Cohere
          "FacebookBot",         // Meta AI
        ],
        allow: "/",
        crawlDelay: 1,
      }
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
