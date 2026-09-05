import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // On GitHub Pages the site lives at /test-portfolio/, so assets must be
  // prefixed with the repo name in production. Locally (dev) no prefix is needed.
  basePath: isProd ? "/test-portfolio" : "",
  assetPrefix: isProd ? "/test-portfolio/" : "",
};

export default nextConfig;
