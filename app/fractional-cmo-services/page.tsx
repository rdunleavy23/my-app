// app/fractional-cmo-services/page.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fractional CMO Services | Pattern Growth",
  description:
    "Project-based growth strategy, playbooks, and KPI models—without ongoing retainers.",
  alternates: { canonical: "/fractional-cmo-services" },
  openGraph: {
    type: "website",
    url: "https://www.patterngrowth.com/fractional-cmo-services",
    title: "Fractional CMO Services | Pattern Growth",
    description:
      "Project-based growth strategy, playbooks, and KPI models—without ongoing retainers.",
    siteName: "Pattern Growth",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional CMO Services | Pattern Growth",
    description:
      "Project-based growth strategy, playbooks, and KPI models—without ongoing retainers.",
  },
  robots: { index: true, follow: true },
}

export default function FractionalCMOServicesPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Fractional CMO Services</h1>
      <p className="text-muted-foreground">
        This page will be restored with full content after deploy. For now, it compiles cleanly.
      </p>
    </main>
  )
}
