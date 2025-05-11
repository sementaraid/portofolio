import type { NextConfig } from "next";
import { Settings } from "@/config";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: false,
  poweredByHeader: false,
  devIndicators: false,
  images: {
    remotePatterns: Settings.Images.RemotePatterns
  }
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
})

export default withMDX(nextConfig)
