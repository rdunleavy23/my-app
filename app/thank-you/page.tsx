import { Metadata } from "next"
import { Suspense } from "react"
import { ThankYouContent } from "./thank-you-content"

export const metadata: Metadata = {
  title: "Thank You | Pattern Growth",
  description: "Thank you for your interest in Pattern Growth. We'll be in touch soon.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>}>
      <ThankYouContent />
    </Suspense>
  )
}
