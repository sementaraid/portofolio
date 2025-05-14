import type { RemotePattern } from "next/dist/shared/lib/image-config"

const RemotePatterns: Array<URL | RemotePattern> = [
  {
    protocol: 'https',
    hostname: 'cdn.simpleicons.org',
    pathname: '/**',
    port: ''
  },
  {
    protocol: 'https', 
    hostname: 'img.shields.io',
    pathname: '/**',
    port: ''
  }
]

const Settings = {
  Cookies: {
    Theme: "anantara-theme",
    Language: "anantara-language"
  },
  Images: {
    RemotePatterns: RemotePatterns
  }
}

export { Settings }