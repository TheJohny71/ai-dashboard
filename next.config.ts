import type { NextConfig } from 'next'

const config: NextConfig = {
  reactStrictMode: true,
  // Disable optimizations that might cause CSS loading issues
  optimizeFonts: false,
  // Disable experimental features for now
  experimental: {
    appDir: true
  }
}

export default config