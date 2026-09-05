import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export keeps deployment open to GitHub Pages, Vercel, or any CDN.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
