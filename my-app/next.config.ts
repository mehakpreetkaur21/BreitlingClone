/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.breitling.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.cookielaw.org',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www-breitling.eu.saleor.cloud',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'a.mktgcdn.com', // <-- Added this
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
