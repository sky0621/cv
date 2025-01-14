import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // ビルド中のESLintエラーを無視
  },
};

export default nextConfig;
