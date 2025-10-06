// app/layout.tsx
import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import Navbar from "@/components/Navbar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pattern Growth",
  description: "Growth strategy your team can actually run",
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
            gtag('config', 'G-DQD43BSF5Q');
          `}
        </Script>
      </head>
      <body className={`${inter.className} min-h-dvh bg-background text-foreground antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
