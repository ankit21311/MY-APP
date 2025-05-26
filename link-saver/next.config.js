/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['*'], // This allows images from any domain
  },
}

module.exports = nextConfig