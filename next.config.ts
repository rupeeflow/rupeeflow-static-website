/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // ← uncomment this line
  trailingSlash: true,
  images: {
    unoptimized: true,   // required for static export
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig