/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'faksestoreapi.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
