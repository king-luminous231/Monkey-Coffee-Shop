import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "ahead-depend-constitution-pvc.trycloudflare.com",
  ],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
