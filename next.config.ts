import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['storage.googleapis.com', 'raw.githubusercontent.com'],
  },
};

export default nextConfig;
