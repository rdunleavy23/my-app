import "./globals.css"

export const metadata = {
  title: "Pattern Growth",
  description:
    "Instead of hiring a fractional CMO, companies work with Pattern Growth in focused sprints. We translate executive vision into data-driven strategy, then build custom dashboards so leaders can actually see what's working.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        }}
        className="antialiased"
      >
        {children}
      </body>
    </html>
  )
}
