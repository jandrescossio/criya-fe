/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    apiUrl: 'http://localhost/api',
    storageUrl: 'http://localhost/storage',
  },
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
