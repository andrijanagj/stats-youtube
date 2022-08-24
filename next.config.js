/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "source.unsplash.com",
      "yt3.ggpht.com",
      "images.unsplash.com",
      "i.ytimg.com",
      "upload.wikimedia.org",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
