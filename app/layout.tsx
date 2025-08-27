import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Navbar } from "@/components/Navbar" // ✅ FIXED: Proper named import

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
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
