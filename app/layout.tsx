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
  description: "Growth strategy your team can actually run",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.patterngrowth.com/",
    siteName: "Pattern Growth",
    title: "Pattern Growth",
    description: "Growth strategy your team can actually run",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pattern Growth",
    description: "Growth strategy your team can actually run",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/patterngrowth-android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/patterngrowth-android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DQD43BSF5Q"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DQD43BSF5Q', { anonymize_ip: true });
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Pattern Growth",
              description: "Growth strategy sprints for $1-5M companies. We build your marketing strategy from scratch in 8 weeks with complete ownership transfer.",
              url: "https://www.patterngrowth.com",
              logo: "https://www.patterngrowth.com/patterngrowth-logo.svg",
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
