/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/blog/1',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig