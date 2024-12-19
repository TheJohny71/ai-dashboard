import './globals.css'
import type { Metadata } from 'next'
import Navigation from '@/components/landing/navigation'

export const metadata: Metadata = {
  title: 'AI Innovation Lab',
  description: 'Exploring the frontiers of artificial intelligence through practical applications and groundbreaking research.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-gray-950">
        <Navigation />
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  )
}
