/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    LOCAL_BASE_URL: isProd
      ? "movie-db-beryl-seven.vercel.app"
      : "http://localhost:3000",
  },
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
