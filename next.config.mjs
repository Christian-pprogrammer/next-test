/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'testvalley.kr',
      'dvd6ljcj7w3pj.cloudfront.net'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '',
        port: '',
        pathname: '/**',
      }
    ]
  }
};

export default nextConfig;
