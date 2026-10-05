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
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    // Must match WIDTHS in scripts/optimize-images.mjs.
    deviceSizes: [640, 960, 1280, 1600],
    imageSizes: [],
  },
};

export default nextConfig;
