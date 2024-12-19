import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/landing/navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Innovation Lab',
  description: 'Exploring the frontiers of artificial intelligence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
