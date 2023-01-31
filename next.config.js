/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    apiBaseUrl: 'http://localhost:8000',
    backendEndpoints: [
      '/api/graphql',
    ],
  },
}

module.exports = nextConfig
