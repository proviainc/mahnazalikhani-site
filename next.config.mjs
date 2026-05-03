/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  pageExtensions: ['ts', 'tsx'],
  // Static export has no Image Optimization API; serve src files as-is from /public.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

