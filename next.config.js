const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  trailingSlash: false, // Explicitly disable trailing slashes for consistent URLs
  // Performance optimizations for Core Web Vitals
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Bundle optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optimize for performance
  webpack: (config, { dev, isServer }) => {
    // Remove unnecessary polyfills in production
    if (!dev && !isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }

    // Bundle analyzer for development
    if (dev && process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          openAnalyzer: true,
        })
      )
    }

    return config
  },
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
};

module.exports = nextConfig;
