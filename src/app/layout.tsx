import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "AI Innovation Lab",
  description: "Next-Generation AI Innovation Lab showcasing cutting-edge AI projects",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
