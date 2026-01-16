import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stellar - API Security Framework',
  description: 'The API Security Framework for enterprise-grade applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}