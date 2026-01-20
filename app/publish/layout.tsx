import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Publish - Admin',
  robots: { index: false, follow: false },
}

export default function PublishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
