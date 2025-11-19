// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// AI crawler user agents to monitor
const AI_CRAWLERS = {
  // Search & Citation bots (allowed - drive traffic)
  'OAI-SearchBot': 'ChatGPT Search',
  'ChatGPT-User': 'ChatGPT Browsing',
  'PerplexityBot': 'Perplexity',
  'anthropic-ai': 'Claude',
  'Claude-Web': 'Claude Web',
  'Bingbot': 'Bing/ChatGPT',
  'Applebot-Extended': 'Apple Intelligence',
  'Diffbot': 'Diffbot',
  'cohere-ai': 'Cohere',
  'FacebookBot': 'Meta AI',
  // Training bots (blocked - but track attempts)
  'GPTBot': 'OpenAI Training (BLOCKED)',
  'Google-Extended': 'Google AI Training (BLOCKED)',
  'CCBot': 'Common Crawl Training (BLOCKED)',
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''
  const protocol = request.nextUrl.protocol
  const userAgent = request.headers.get('user-agent') || ''

  // Monitor AI crawler activity (Gap 2 fix)
  const aiCrawler = Object.keys(AI_CRAWLERS).find(bot => userAgent.includes(bot))
  if (aiCrawler) {
    const crawlerName = AI_CRAWLERS[aiCrawler as keyof typeof AI_CRAWLERS]
    console.log(JSON.stringify({
      type: 'ai_crawler_visit',
      crawler: crawlerName,
      bot: aiCrawler,
      url: request.nextUrl.pathname,
      timestamp: new Date().toISOString(),
      referrer: request.headers.get('referer'),
      blocked: crawlerName.includes('BLOCKED'),
    }))
  }

  // Force canonical host and protocol: redirect non-www OR HTTP to https://www.patterngrowth.com
  // In production, Vercel edge redirects handle this, but we keep for:
  // 1. Local development (localhost:3000)
  // 2. Defense-in-depth if Vercel config changes
  // 3. Test environments
  
  // Don't redirect localhost - allow local development
  const isLocalhost = hostname.includes('localhost') || hostname.includes('127.0.0.1') || hostname.includes('0.0.0.0')

  // Check if canonical host/protocol redirect is needed
  const needsCanonicalRedirect =
    !isLocalhost && (
      hostname === 'patterngrowth.com' ||
      hostname === 'patterngrowth.com:3000' ||
      (protocol === 'http:' && !hostname.includes('localhost'))
    )

  // Check if trailing slash needs to be removed
  const pathname = url.pathname
  const hasTrailingSlash = pathname !== '/' && pathname.endsWith('/')

  // If BOTH canonical AND trailing slash issues exist, fix them in one redirect
  if (needsCanonicalRedirect && hasTrailingSlash) {
    url.protocol = 'https:'
    url.host = 'www.patterngrowth.com'
    url.pathname = pathname.slice(0, -1)
    return NextResponse.redirect(url, 301) // Permanent redirect
  }

  // If ONLY canonical redirect needed (no trailing slash issue)
  if (needsCanonicalRedirect) {
    url.protocol = 'https:'
    url.host = 'www.patterngrowth.com'
    return NextResponse.redirect(url, 301) // Permanent redirect
  }

  // If ONLY trailing slash issue (already on correct host/protocol)
  if (hasTrailingSlash) {
    url.pathname = pathname.slice(0, -1)
    return NextResponse.redirect(url, 301) // Permanent redirect
  }

  const response = NextResponse.next()

  const csp = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: blob: https:;
    font-src 'self' data:;
    connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim()

  response.headers.set('Content-Security-Policy', csp)

  // Additional security headers
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api).*)',
  ],
}
