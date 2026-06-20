// app/layout.tsx
import "./globals.css"

import type { Metadata } from "next"
import { DM_Sans, DM_Mono, Platypi } from "next/font/google"
import Script from "next/script"
import Navbar from "@/components/Navbar"
import SiteFooter from "@/components/layout/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { ErrorBoundary } from "@/components/error-boundary"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  display: "swap",
  variable: "--font-sans",
})
const dmMono = DM_Mono({ 
  subsets: ["latin"], 
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
})
const platypi = Platypi({ 
  subsets: ["latin"], 
  display: "swap",
  variable: "--font-serif",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.patterngrowth.com"),
  applicationName: "Pattern Growth",
  title: {
    default: "Pattern Growth | Senior-Led Growth Strategy Partner",
    template: "%s | Pattern Growth",
  },
  description: "Pattern Growth is a senior-led growth strategy partner. We embed with your leadership, learn your business deeply, and build a custom marketing strategy your team owns — premium expertise without the overhead of a full-time hire.",
  // NOTE: Do NOT set canonical here - each page defines its own canonical
  // Setting a layout-level canonical overrides page-level canonicals in Next.js
  openGraph: {
    type: "website",
    url: "https://www.patterngrowth.com/",
    siteName: "Pattern Growth",
    title: "Pattern Growth",
    description: "A senior-led growth strategy partner that embeds with your leadership to build a custom marketing strategy your team owns — premium expertise without the overhead of a full-time hire.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pattern Growth",
    description: "A senior-led growth strategy partner that embeds with your leadership to build a custom marketing strategy your team owns — premium expertise without the overhead of a full-time hire.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      // Primary favicon - ICO file (multi-size: 16x16, 32x32, 48x48) for Google consistency
      // Next.js 15 automatically serves app/favicon.ico at /favicon.ico
      // PNG fallbacks for browsers that don't support ICO
      { url: "/patterngrowth-logo-48.png", sizes: "48x48", type: "image/png" },
      { url: "/patterngrowth-logo-32.png", sizes: "32x32", type: "image/png" },
      { url: "/patterngrowth-logo-16.png", sizes: "16x16", type: "image/png" },
      // SVG for modern browsers (after PNG for Google compatibility)
      { url: "/patterngrowth-logo.svg", type: "image/svg+xml" },
      // Android chrome icons
      { url: "/patterngrowth-android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/patterngrowth-android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: [
      { url: "/patterngrowth-logo-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/patterngrowth-apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/patterngrowth-site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={process.env.NEXT_PUBLIC_PG_THEME_TRIAL === "1" ? "pg-theme-trial" : undefined}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Preload critical resources for Core Web Vitals */}
        {/* Preload critical resources */}
        <link rel="preload" href="/patterngrowth-logo.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/patterngrowth-android-chrome-512x512.png" as="image" />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//app.cal.com" />

        {/* Preconnect to critical external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://app.cal.com" crossOrigin="anonymous" />
        {/* Google Analytics - deferred loading */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DQD43BSF5Q"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DQD43BSF5Q', {
              anonymize_ip: true,
              send_page_view: true,
              enhanced_measurement: true
            });
            gtag('config', 'AW-17619996764');
          `}
        </Script>
        {/* Organization Schema - kept global for brand identity */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.patterngrowth.com/#organization",
              name: "Pattern Growth",
              description: "A senior-led growth strategy partner. We embed with your leadership and treat your company like our own, building a custom marketing strategy your team owns — premium expertise without the overhead of a full-time hire.",
              url: "https://www.patterngrowth.com",
              logo: "https://www.patterngrowth.com/patterngrowth-android-chrome-512x512.png",
              sameAs: [
                "https://x.com/patterngrowthco",
                "https://linkedin.com/company/patterngrowth",
                "https://instagram.com/patterngrowthco"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "hello@patterngrowth.com",
                telephone: "+1-469-708-9802"
              }
            })
          }}
        />
        {/* WebSite schema moved to homepage only (app/page.tsx) */}
      </head>
      <body className={`${dmSans.variable} ${dmMono.variable} ${platypi.variable} font-sans min-h-dvh bg-background text-foreground antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          <ErrorBoundary>
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </ErrorBoundary>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
