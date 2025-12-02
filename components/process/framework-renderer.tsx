"use client"

import dynamic from "next/dynamic"

// Dynamically import framework components to avoid SSR issues
const Framework5Cs = dynamic(() => import("./framework-5cs").then(mod => ({ default: mod.Framework5Cs })), {
  loading: () => <div className="h-48 bg-muted/30 animate-pulse rounded-lg" />
})

const STPFramework = dynamic(() => import("./framework-stp").then(mod => ({ default: mod.STPFramework })), {
  loading: () => <div className="h-48 bg-muted/30 animate-pulse rounded-lg" />
})

const FourPsGrid = dynamic(() => import("./framework-4ps").then(mod => ({ default: mod.FourPsGrid })), {
  loading: () => <div className="h-48 bg-muted/30 animate-pulse rounded-lg" />
})

interface FrameworkRendererProps {
  sectionId: string
}

export function FrameworkRenderer({ sectionId }: FrameworkRendererProps) {
  switch (sectionId) {
    case "map-your-reality":
      return <Framework5Cs />
    case "define-where-youre-headed":
      return <STPFramework />
    case "build-the-bridge":
      return <FourPsGrid />
    default:
      return null
  }
}
