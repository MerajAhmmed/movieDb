/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/t/p/**",
      },
      {
        protocol: "http",
        hostname: "facebook.com",
      },
      {
        protocol: "http",
        hostname: "x.com",
      },
      {
        protocol: "http",
        hostname: "linkedin.com",
      },
    ],
  },
};

export default nextConfig;
