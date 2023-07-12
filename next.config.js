/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["image.tmdb.org"],
  },
  env: {
    customKey: "my-value",
  },
};

module.exports = nextConfig;
