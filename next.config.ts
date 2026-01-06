import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // Habilita uso de imagens externas se necessário
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
