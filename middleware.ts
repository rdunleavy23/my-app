import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  response.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self';",
      "script-src 'self' 'strict-dynamic' https://www.googletagmanager.com;",
      "style-src 'self' 'unsafe-inline';", // Inline styles are usually needed for fonts etc.
      "object-src 'none';",
      "base-uri 'self';"
    ].join(' ')
  )

  return response
}
