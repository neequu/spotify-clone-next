/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nlqimebrpdwlvxhpmbre.supabase.co',
      },
    ],
  },
};

module.exports = nextConfig;
