// app/layout.tsx
import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import Navbar from "@/components/Navbar"
import SiteFooter from "@/components/layout/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { ErrorBoundary } from "@/components/error-boundary"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.patterngrowth.com"),
  title: {
    default: "Project-Based Marketing Consultant | 8-Week Growth Strategy Sprint | Pattern Growth",
    template: "%s | Pattern Growth",
  },
  description: "8-week growth strategy sprints for $1-5M B2B companies. Project-based alternative to fractional CMO retainers delivering complete marketing infrastructure with full ownership transfer.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.patterngrowth.com/",
    siteName: "Pattern Growth",
    title: "Pattern Growth",
    description: "8-week growth strategy sprints for $1-5M B2B companies. Project-based alternative to fractional CMO retainers delivering complete marketing infrastructure with full ownership transfer.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pattern Growth",
    description: "8-week growth strategy sprints for $1-5M B2B companies. Project-based alternative to fractional CMO retainers delivering complete marketing infrastructure with full ownership transfer.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/patterngrowth-logo.svg", type: "image/svg+xml" },
      { url: "/patterngrowth-logo-16.png", sizes: "16x16", type: "image/png" },
      { url: "/patterngrowth-logo-32.png", sizes: "32x32", type: "image/png" },
      { url: "/patterngrowth-logo-48.png", sizes: "48x48", type: "image/png" },
      { url: "/patterngrowth-android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/patterngrowth-android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "32x32" },
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
    <html lang="en" suppressHydrationWarning>
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

        {/* Preconnect to critical external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        {/* Google Analytics - deferred and optimized */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DQD43BSF5Q"
          strategy="afterInteractive"
          onLoad={() => {
            if (typeof window !== 'undefined') {
              (window as any).dataLayer = (window as any).dataLayer || [];
              function gtag(...args: any[]){(window as any).dataLayer.push(args);}
              gtag('js', new Date());
              gtag('config', 'G-DQD43BSF5Q', {
                anonymize_ip: true,
                send_page_view: true,
                enhanced_measurement: true
              });
            }
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Pattern Growth",
              description: "Growth strategy sprints for $1-5M companies. We build your marketing strategy from scratch in 8 weeks with complete ownership transfer.",
              url: "https://www.patterngrowth.com",
              logo: "https://www.patterngrowth.com/patterngrowth-android-chrome-512x512.png",
              sameAs: [
                "https://twitter.com/patterngrowth"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "hello@patterngrowth.com"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} min-h-dvh bg-background text-foreground antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          <ErrorBoundary>
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}
