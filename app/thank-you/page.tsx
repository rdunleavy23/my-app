// DIAGNOSTIC: Testing Vercel cache invalidation
// This file was created to override any stale cached artifacts from commit 7931157
// If this builds successfully, it proves the cache was the issue
// 
// BUILD TIMESTAMP: 2026-01-27
// Expected behavior: Build should pass with this simple Server Component

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Thank You | Pattern Growth",
  description: "Thank you for your interest in Pattern Growth.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-8">
        <h1 className="text-2xl font-semibold text-foreground mb-4">
          Thank You
        </h1>
        <p className="text-muted-foreground">
          Thank you for your interest in Pattern Growth. We&apos;ll be in touch soon.
        </p>
      </div>
    </main>
  )
}
