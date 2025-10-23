const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  // Performance optimizations for Core Web Vitals
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;
