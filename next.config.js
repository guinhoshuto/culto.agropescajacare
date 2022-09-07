/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.ctfassets.net', 'pbs.twimg.com']
  },
}

module.exports = nextConfig
