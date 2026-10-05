import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "export",
  trailingSlash: true,
  experimental: {
    inlineCss: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
