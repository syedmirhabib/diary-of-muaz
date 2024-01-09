/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: isProd ? "https://diary-of-muaz.vercel.app//" : "",
  },
  basePath: "",
  swcMinify: false, // Disable SWC minification
};

module.exports = nextConfig;
