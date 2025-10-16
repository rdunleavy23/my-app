// app/privacy/page.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Pattern Growth",
  description:
    "How Pattern Growth collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    type: "website",
    url: "https://www.patterngrowth.com/privacy",
    title: "Privacy Policy | Pattern Growth",
    description:
      "How Pattern Growth collects, uses, and protects your information.",
    siteName: "Pattern Growth",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Pattern Growth",
    description:
      "How Pattern Growth collects, uses, and protects your information.",
  },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16 prose prose-neutral dark:prose-invert">
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      <p>We respect your privacy. Replace this with your full policy.</p>
    </div>
  )
}
