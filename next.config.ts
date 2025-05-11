import type { NextConfig } from "next";
import { Settings } from "@/config";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: false,
  poweredByHeader: false,
  devIndicators: false,
  images: {
    remotePatterns: Settings.Images.RemotePatterns
  }
};

export default nextConfig;
