/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'rejoovme.com.au' },
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ]
  },
  async redirects() {
    return [
      // Canonical host is non-www: redirect any www request to the same path
      // on the apex so relative internal links never resolve to www URLs.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.dayspagoldcoast.com' }],
        destination: 'https://dayspagoldcoast.com/:path*',
        permanent: true
      },
      { source: '/', destination: '/day-spa-gold-coast', permanent: true }
    ];
  }
};

module.exports = nextConfig;
