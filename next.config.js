/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['adpromoter.s3.amazonaws.com', 'nigerianbanks.xyz','raw.githubusercontent.com'],
  },
};

module.exports = nextConfig;
