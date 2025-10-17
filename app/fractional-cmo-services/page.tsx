// app/fractional-cmo-services/page.tsx
import type { Metadata } from "next"
import { createServiceSchema, createWebPageSchema } from "@/lib/schemas"

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
  const serviceSchema = createServiceSchema({
    name: "Fractional CMO Services",
    description: "Project-based growth strategy, playbooks, and KPI models—without ongoing retainers.",
    url: "https://www.patterngrowth.com/fractional-cmo-services",
    provider: "Pattern Growth"
  });

  const webPageSchema = createWebPageSchema(
    "Fractional CMO Services | Pattern Growth",
    "Project-based growth strategy, playbooks, and KPI models—without ongoing retainers.",
    "https://www.patterngrowth.com/fractional-cmo-services"
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <main className="container mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Fractional CMO Services</h1>
      <p className="text-muted-foreground">
        This page will be restored with full content after deploy. For now, it compiles cleanly.
      </p>
    </main>
    </>
  )
}
