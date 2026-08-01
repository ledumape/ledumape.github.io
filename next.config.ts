import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.GITHUB_PAGES_BUILD === "true" ? { output: "export" } : {}),
};

export default nextConfig;
