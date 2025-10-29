// app/lib/use-media-query.ts
"use client"
import * as React from "react"
export function useMediaQuery(query: string) {
  // Default to true to prevent SSR mismatch - mobile-first approach
  const [matches, setMatches] = React.useState(true)
  
  React.useEffect(() => {
    const m = window.matchMedia(query)
    const onChange = () => setMatches(m.matches)
    onChange()
    m.addEventListener?.("change", onChange)
    return () => m.removeEventListener?.("change", onChange)
  }, [query])
  
  return matches
}
