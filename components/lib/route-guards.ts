export function isProtectedRoute(pathname: string): boolean {
  if (!pathname) return false
  return pathname === '/' || pathname.startsWith('/about') || pathname.startsWith('/process')
}


