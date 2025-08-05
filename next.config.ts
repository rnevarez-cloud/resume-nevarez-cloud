import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  output: 'export', // Outputs a Single-Page Application (SPA)
  distDir: 'build', // Changes the build output directory to `build`
}

module.exports = {
    output:"standalone",
}

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
})
module.exports = withMDX()

export default nextConfig