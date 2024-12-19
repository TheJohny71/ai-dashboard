import type { NextConfig } from 'next'

const config: NextConfig = {
  // Basic configuration
  reactStrictMode: true,
  
  // Minimal experimental features
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    }
  }
}

export default config