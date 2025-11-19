#!/usr/bin/env node

/**
 * Core Web Vitals Optimizer for Pattern Growth
 *
 * Features:
 * - Automatic image lazy loading configuration
 * - Dynamic import optimization for heavy components
 * - Font loading strategy optimization
 * - Bundle size analysis and recommendations
 * - LCP (Largest Contentful Paint) optimization
 * - CLS (Cumulative Layout Shift) fixes
 * - FID (First Input Delay) improvements
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

// Heavy components that should be lazy loaded
const LAZY_LOAD_CANDIDATES = [
  'Carousel',
  'Chart',
  'Modal',
  'Dialog',
  'Calendar',
  'ComparisonTable',
  'FAQCollapsible',
  'Approach',
];

// Image optimization settings
const IMAGE_OPTIMIZATION = {
  formats: ['webp', 'avif'],
  sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  quality: 85,
  loading: 'lazy',
  priority: false, // Only hero images should have priority
};

class CoreWebVitalsOptimizer {
  constructor() {
    this.issues = [];
    this.recommendations = [];
    this.files = [];
  }

  async scanProject() {
    console.log(`${colors.blue}🔍 Scanning project for Web Vitals optimization...${colors.reset}\n`);

    const patterns = [
      'app/**/*.tsx',
      'app/**/*.ts',
      'components/**/*.tsx',
    ];

    this.files = await glob(patterns, {
      ignore: ['**/node_modules/**', '**/.next/**'],
    });

    console.log(`${colors.green}✓ Found ${this.files.length} files to analyze${colors.reset}\n`);
  }

  async analyzeImages() {
    console.log(`${colors.blue}📸 Analyzing images...${colors.reset}\n`);

    let totalImages = 0;
    let unoptimizedImages = 0;
    let missingAlt = 0;
    let missingLazyLoad = 0;

    for (const file of this.files) {
      const content = fs.readFileSync(file, 'utf8');

      // Find Next.js Image components
      const imageRegex = /<Image\s+([^>]+)>/g;
      let match;

      while ((match = imageRegex.exec(content)) !== null) {
        totalImages++;
        const props = match[1];

        // Check for alt attribute
        if (!props.includes('alt=')) {
          missingAlt++;
          this.issues.push({
            type: 'accessibility',
            severity: 'error',
            file,
            issue: 'Image missing alt attribute',
            impact: 'SEO and accessibility',
          });
        }

        // Check for lazy loading
        if (!props.includes('loading=') && !props.includes('priority')) {
          missingLazyLoad++;
          this.recommendations.push({
            type: 'performance',
            file,
            recommendation: 'Add loading="lazy" to images below the fold',
          });
        }

        // Check for priority on hero images
        if (props.includes('priority') && !this.isAboveFold(content, match.index)) {
          this.issues.push({
            type: 'performance',
            severity: 'warning',
            file,
            issue: 'Priority set on below-fold image (increases initial load)',
          });
        }

        // Check for width/height (prevents CLS)
        if (!props.includes('width=') || !props.includes('height=')) {
          this.issues.push({
            type: 'cls',
            severity: 'warning',
            file,
            issue: 'Image missing width/height (causes layout shift)',
            fix: 'Add explicit width and height to prevent CLS',
          });
        }
      }

      // Check for regular <img> tags (should use Next Image)
      const htmlImgRegex = /<img\s+[^>]*>/g;
      const htmlImgMatches = content.match(htmlImgRegex);
      if (htmlImgMatches) {
        unoptimizedImages += htmlImgMatches.length;
        this.issues.push({
          type: 'performance',
          severity: 'error',
          file,
          issue: `Found ${htmlImgMatches.length} unoptimized <img> tags`,
          fix: 'Replace with Next.js <Image> component',
        });
      }
    }

    console.log(`${colors.cyan}Images Analysis:${colors.reset}`);
    console.log(`  Total Next.js Images: ${totalImages}`);
    console.log(`  Missing alt: ${missingAlt}`);
    console.log(`  Could lazy load: ${missingLazyLoad}`);
    console.log(`  Unoptimized <img> tags: ${unoptimizedImages}\n`);
  }

  isAboveFold(content, position) {
    // Simple heuristic: if image appears in first 1000 chars, likely above fold
    return position < 1000;
  }

  async analyzeLazyLoading() {
    console.log(`${colors.blue}⚡ Analyzing component lazy loading...${colors.reset}\n`);

    let notLazyLoaded = 0;

    for (const file of this.files) {
      const content = fs.readFileSync(file, 'utf8');

      // Check for heavy components that aren't lazy loaded
      LAZY_LOAD_CANDIDATES.forEach(component => {
        const importRegex = new RegExp(`import.*${component}.*from`, 'g');
        const dynamicImportRegex = new RegExp(`dynamic\\(.*${component}`, 'g');

        if (importRegex.test(content) && !dynamicImportRegex.test(content)) {
          notLazyLoaded++;
          this.recommendations.push({
            type: 'performance',
            file,
            component,
            recommendation: `Consider lazy loading ${component} with next/dynamic`,
            example: this.generateLazyLoadExample(component),
          });
        }
      });
    }

    console.log(`${colors.cyan}Lazy Loading Analysis:${colors.reset}`);
    console.log(`  Components that could be lazy loaded: ${notLazyLoaded}\n`);
  }

  generateLazyLoadExample(component) {
    return `
const ${component} = dynamic(() => import('@/components/${component}'), {
  loading: () => <${component}Skeleton />,
  ssr: true, // Set to false if component doesn't need SSR
});
`;
  }

  async analyzeFonts() {
    console.log(`${colors.blue}🔤 Analyzing font loading...${colors.reset}\n`);

    const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
    if (!fs.existsSync(layoutPath)) {
      console.log(`${colors.yellow}⚠ No layout.tsx found${colors.reset}\n`);
      return;
    }

    const content = fs.readFileSync(layoutPath, 'utf8');

    // Check for font display: swap
    if (!content.includes('display:')) {
      this.issues.push({
        type: 'performance',
        severity: 'warning',
        file: layoutPath,
        issue: 'Fonts missing display strategy',
        fix: 'Add display: "swap" to next/font/google config',
      });
    }

    // Check for font preload
    if (content.includes('display: "swap"') || content.includes('display: \'swap\'')) {
      console.log(`${colors.green}✓ Fonts configured with display: swap${colors.reset}\n`);
    } else {
      console.log(`${colors.yellow}⚠ Fonts should use display: swap${colors.reset}\n`);
    }
  }

  async analyzeBundle() {
    console.log(`${colors.blue}📦 Analyzing bundle configuration...${colors.reset}\n`);

    const nextConfigPath = path.join(process.cwd(), 'next.config.js');
    if (!fs.existsSync(nextConfigPath)) {
      console.log(`${colors.yellow}⚠ No next.config.js found${colors.reset}\n`);
      return;
    }

    const content = fs.readFileSync(nextConfigPath, 'utf8');

    const recommendations = [];

    // Check for bundle analyzer
    if (!content.includes('webpack-bundle-analyzer')) {
      recommendations.push('Install @next/bundle-analyzer for bundle analysis');
    }

    // Check for image optimization
    if (!content.includes('images:')) {
      recommendations.push('Configure image optimization in next.config.js');
    }

    // Check for compression
    if (!content.includes('compress:')) {
      recommendations.push('Enable compression in next.config.js');
    }

    if (recommendations.length > 0) {
      console.log(`${colors.cyan}Bundle Recommendations:${colors.reset}`);
      recommendations.forEach(rec => {
        console.log(`  - ${rec}`);
      });
      console.log('');
    } else {
      console.log(`${colors.green}✓ Bundle configuration looks good${colors.reset}\n`);
    }
  }

  generateOptimizationConfig() {
    const config = `
// Auto-generated Next.js optimizations for Core Web Vitals
// Add to next.config.js

module.exports = {
  // Image Optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Performance Optimizations
  compress: true,
  poweredByHeader: false,

  // Experimental optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Replace React with Preact in production (optional)
      Object.assign(config.resolve.alias, {
        // 'react': 'preact/compat',
        // 'react-dom/test-utils': 'preact/test-utils',
        // 'react-dom': 'preact/compat',
      });
    }
    return config;
  },

  // Headers for caching
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
`;

    const outputPath = path.join(process.cwd(), 'scripts', 'next-config-optimizations.js');
    fs.writeFileSync(outputPath, config.trim());
    console.log(`${colors.green}✓ Optimization config written to ${outputPath}${colors.reset}\n`);
  }

  generateReport() {
    console.log(`${colors.cyan}╔════════════════════════════════════════╗${colors.reset}`);
    console.log(`${colors.cyan}║   Core Web Vitals Optimization         ║${colors.reset}`);
    console.log(`${colors.cyan}╚════════════════════════════════════════╝${colors.reset}\n`);

    const errors = this.issues.filter(i => i.severity === 'error');
    const warnings = this.issues.filter(i => i.severity === 'warning');

    console.log(`${colors.red}Errors: ${errors.length}${colors.reset}`);
    console.log(`${colors.yellow}Warnings: ${warnings.length}${colors.reset}`);
    console.log(`${colors.cyan}Recommendations: ${this.recommendations.length}${colors.reset}\n`);

    // Group issues by type
    const byType = {};
    this.issues.forEach(issue => {
      if (!byType[issue.type]) byType[issue.type] = [];
      byType[issue.type].push(issue);
    });

    Object.keys(byType).forEach(type => {
      console.log(`${colors.cyan}═══ ${type.toUpperCase()} ═══${colors.reset}\n`);
      byType[type].forEach(issue => {
        const color = issue.severity === 'error' ? colors.red : colors.yellow;
        console.log(`${color}${issue.severity === 'error' ? '✗' : '⚠'} ${issue.issue}${colors.reset}`);
        console.log(`  File: ${issue.file}`);
        if (issue.fix) {
          console.log(`  Fix: ${issue.fix}`);
        }
        console.log('');
      });
    });

    this.generateOptimizationGuide();
  }

  generateOptimizationGuide() {
    let guide = '# Core Web Vitals Optimization Guide\n\n';
    guide += `Generated: ${new Date().toISOString()}\n\n`;

    guide += '## Issues Found\n\n';
    this.issues.forEach(issue => {
      guide += `### ${issue.issue}\n\n`;
      guide += `**Type**: ${issue.type}  \n`;
      guide += `**Severity**: ${issue.severity}  \n`;
      guide += `**File**: ${issue.file}  \n`;
      if (issue.fix) {
        guide += `**Fix**: ${issue.fix}  \n`;
      }
      guide += '\n';
    });

    guide += '## Recommendations\n\n';
    this.recommendations.forEach(rec => {
      guide += `### ${rec.recommendation}\n\n`;
      guide += `**File**: ${rec.file}  \n`;
      if (rec.example) {
        guide += '\n```typescript\n';
        guide += rec.example;
        guide += '\n```\n';
      }
      guide += '\n';
    });

    guide += '## Quick Wins\n\n';
    guide += '1. **Lazy load all images below the fold**\n';
    guide += '   - Add `loading="lazy"` to Image components\n';
    guide += '   - Only use `priority` for hero images\n\n';
    guide += '2. **Add explicit dimensions to all images**\n';
    guide += '   - Prevents Cumulative Layout Shift (CLS)\n';
    guide += '   - Use exact width and height values\n\n';
    guide += '3. **Lazy load heavy components**\n';
    guide += '   - Use `next/dynamic` for carousels, charts, modals\n';
    guide += '   - Provide loading skeletons\n\n';
    guide += '4. **Optimize fonts**\n';
    guide += '   - Use `display: "swap"` for all fonts\n';
    guide += '   - Preload critical fonts\n\n';
    guide += '5. **Enable image optimization**\n';
    guide += '   - Configure AVIF and WebP formats\n';
    guide += '   - Set appropriate device sizes\n\n';

    const outputPath = path.join(process.cwd(), 'scripts', 'web-vitals-guide.md');
    fs.writeFileSync(outputPath, guide);
    console.log(`${colors.green}✓ Optimization guide saved to ${outputPath}${colors.reset}\n`);
  }

  async run() {
    await this.scanProject();
    await this.analyzeImages();
    await this.analyzeLazyLoading();
    await this.analyzeFonts();
    await this.analyzeBundle();
    this.generateOptimizationConfig();
    this.generateReport();

    console.log(`${colors.green}✓ Core Web Vitals analysis complete!${colors.reset}\n`);

    if (this.issues.filter(i => i.severity === 'error').length > 0) {
      console.log(`${colors.red}⚠ Critical issues found. Please review the guide.${colors.reset}\n`);
      process.exit(1);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const optimizer = new CoreWebVitalsOptimizer();
  optimizer.run().catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
}

module.exports = CoreWebVitalsOptimizer;
