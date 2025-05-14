const Settings = {
  Cookies: {
    Theme: "anantara-theme",
    Language: "anantara-language"
  },
  Images: {
    RemotePatterns: [
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
  }
}

export { Settings }