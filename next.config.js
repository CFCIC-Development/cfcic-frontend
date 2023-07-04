/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/facebook-auth",
        destination: "http://localhost:8000/auth/facebook",
      },
      {
        source: "/api/google-auth",
        destination: "http://localhost:8000/auth/google",
      },
    ];
  }
}

module.exports = nextConfig
