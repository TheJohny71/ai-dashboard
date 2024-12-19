import { NextConfig } from 'next'

const config: NextConfig = {
  output: 'export',
  basePath: '/ai-dashboard',
  images: {
    unoptimized: true,
  },
}

export default config
