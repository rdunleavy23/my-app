// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''
  const protocol = request.nextUrl.protocol

  // Force canonical host and protocol: redirect non-www OR HTTP to https://www.patterngrowth.com
  // In production, Vercel edge redirects handle this, but we keep for:
  // 1. Local development (localhost:3000)
  // 2. Defense-in-depth if Vercel config changes
  // 3. Test environments
  
  // Don't redirect localhost - allow local development
  const isLocalhost = hostname.includes('localhost') || hostname.includes('127.0.0.1') || hostname.includes('0.0.0.0')
  
  // Handle trailing slash redirects (redirect /about/ to /about)
  // next.config.js has trailingSlash: false, so we redirect trailing slash URLs to non-trailing slash
  const pathname = url.pathname
  if (pathname !== '/' && pathname.endsWith('/')) {
    url.pathname = pathname.slice(0, -1)
    return NextResponse.redirect(url, 301) // Permanent redirect
  }
  
  const needsRedirect = 
    !isLocalhost && (
      hostname === 'patterngrowth.com' || 
      hostname === 'patterngrowth.com:3000' ||
      (protocol === 'http:' && !hostname.includes('localhost'))
    )

  if (needsRedirect) {
    url.protocol = 'https:'
    url.host = 'www.patterngrowth.com'
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
