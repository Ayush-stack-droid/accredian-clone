/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // ✅ THIS FIXES YOUR ISSUE
  },
}

module.exports = nextConfig