// app/layout.tsx
import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import Navbar from "@/components/Navbar"
import SiteFooter from "@/components/layout/site-footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.patterngrowth.com"),
  title: {
    default: "Pattern Growth",
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
      </head>
      <body className={`${inter.className} min-h-dvh bg-background text-foreground antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
