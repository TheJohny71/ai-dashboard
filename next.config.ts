import type { Config } from 'next'

const config: Config = {
  // Enable strict mode for better development
  reactStrictMode: true,

  // Type-safe experimental features
  experimental: {
    // Configure server actions with proper typing
    serverActions: {
      allowedOrigins: ['localhost:3000'],
      bodySizeLimit: '2mb'
    }
  }
}

export default config
