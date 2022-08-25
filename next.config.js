/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["material-ui.com"],
  },
};

module.exports = nextConfig;
