/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => [
    {source:"/", destination: "/cat", permanent: false}
  ]
}

module.exports = nextConfig
