import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 eslint: {
    ignoreDuringBuilds: true, // 🚀 disables ESLint checks on build
  },
};

export default nextConfig;
