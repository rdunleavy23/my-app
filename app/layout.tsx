import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import Navbar from "@/components/Navbar"

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
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DQD43BSF5Q"
          strategy="afterInteractive"
        />
        <Script
          src="/gtag-init.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
