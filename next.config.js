/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// next.config.js
module.exports = {
  reactStrictMode: true,
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    FROM_EMAIL: process.env.FROM_EMAIL,
  },
};
