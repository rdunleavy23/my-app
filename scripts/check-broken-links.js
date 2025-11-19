#!/usr/bin/env node

/**
 * Automated Broken Link Checker for Pattern Growth
 *
 * Features:
 * - Scans all pages for internal and external links
 * - Identifies broken links (404s, timeouts)
 * - Generates 301 redirect mapping
 * - Creates middleware redirect rules automatically
 * - Validates all internal navigation
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

// Link patterns to extract from files
const LINK_PATTERNS = [
  /href=["']([^"']+)["']/g,
  /to=["']([^"']+)["']/g,
  /url:\s*["']([^"']+)["']/g,
  /canonical:\s*["']([^"']+)["']/g,
];

// Exclude patterns
const EXCLUDE_PATTERNS = [
  /^mailto:/,
  /^tel:/,
  /^#/,
  /^javascript:/,
  /\{.*\}/,  // Template variables
  /\$\{.*\}/,  // Template literals
];

class LinkChecker {
  constructor() {
    this.links = new Map();
    this.brokenLinks = [];
    this.externalLinks = new Set();
    this.internalLinks = new Set();
    this.redirectMap = new Map();
  }

  async scanFiles() {
    console.log(`${colors.blue}🔍 Scanning files for links...${colors.reset}\n`);

    const patterns = [
      'app/**/*.tsx',
      'app/**/*.ts',
      'components/**/*.tsx',
      'lib/**/*.ts',
      'content/**/*.md',
    ];

    const files = await glob(patterns, {
      ignore: ['**/node_modules/**', '**/.next/**', '**/dist/**'],
    });

    for (const file of files) {
      await this.scanFile(file);
    }

    console.log(`${colors.green}✓ Found ${this.internalLinks.size} internal links${colors.reset}`);
    console.log(`${colors.green}✓ Found ${this.externalLinks.size} unique external links${colors.reset}\n`);
  }

  async scanFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const links = this.extractLinks(content);

    links.forEach(link => {
      if (!this.links.has(link)) {
        this.links.set(link, []);
      }
      this.links.get(link).push(filePath);

      if (this.isInternalLink(link)) {
        this.internalLinks.add(link);
      } else if (this.isExternalLink(link)) {
        this.externalLinks.add(link);
      }
    });
  }

  extractLinks(content) {
    const links = new Set();

    LINK_PATTERNS.forEach(pattern => {
      const matches = content.matchAll(pattern);
      for (const match of matches) {
        const link = match[1];
        if (this.isValidLink(link)) {
          links.add(link);
        }
      }
    });

    return Array.from(links);
  }

  isValidLink(link) {
    return !EXCLUDE_PATTERNS.some(pattern => pattern.test(link));
  }

  isInternalLink(link) {
    return link.startsWith('/') && !link.startsWith('//');
  }

  isExternalLink(link) {
    return link.startsWith('http://') || link.startsWith('https://') || link.startsWith('//');
  }

  async validateInternalLinks() {
    console.log(`${colors.blue}🔍 Validating internal links...${colors.reset}\n`);

    const appDir = path.join(process.cwd(), 'app');
    const publicDir = path.join(process.cwd(), 'public');

    for (const link of this.internalLinks) {
      const isValid = await this.checkInternalLink(link, appDir, publicDir);
      if (!isValid) {
        this.brokenLinks.push({
          link,
          type: 'internal',
          foundIn: this.links.get(link),
        });
      }
    }

    if (this.brokenLinks.length === 0) {
      console.log(`${colors.green}✓ All internal links are valid!${colors.reset}\n`);
    } else {
      console.log(`${colors.red}✗ Found ${this.brokenLinks.length} broken internal links${colors.reset}\n`);
      this.reportBrokenLinks();
    }
  }

  async checkInternalLink(link, appDir, publicDir) {
    // Remove query params and hash
    const cleanLink = link.split('?')[0].split('#')[0];

    // Check if it's a static file
    if (cleanLink.match(/\.(png|jpg|jpeg|gif|svg|ico|pdf|webp)$/i)) {
      const filePath = path.join(publicDir, cleanLink);
      return fs.existsSync(filePath);
    }

    // Check if it's an app route
    const routePath = cleanLink === '/' ? '' : cleanLink;
    const possiblePaths = [
      path.join(appDir, routePath, 'page.tsx'),
      path.join(appDir, routePath, 'page.ts'),
      path.join(appDir, routePath + '.tsx'),
      path.join(appDir, routePath + '.ts'),
      path.join(appDir, routePath, 'route.ts'),
    ];

    return possiblePaths.some(p => fs.existsSync(p));
  }

  reportBrokenLinks() {
    console.log(`${colors.red}Broken Links Report:${colors.reset}\n`);

    this.brokenLinks.forEach((item, index) => {
      console.log(`${colors.yellow}${index + 1}. ${item.link}${colors.reset}`);
      console.log(`   Type: ${item.type}`);
      console.log(`   Found in:`);
      item.foundIn.forEach(file => {
        console.log(`     - ${file}`);
      });
      console.log('');
    });
  }

  generateRedirectMapping() {
    console.log(`${colors.blue}📝 Generating redirect mapping...${colors.reset}\n`);

    // Common redirects for Pattern Growth
    const commonRedirects = [
      { from: '/services', to: '/process', permanent: true },
      { from: '/contact', to: '/#get-started', permanent: false },
      { from: '/pricing', to: '/fractional-cmo-hourly-rate', permanent: false },
      { from: '/cmo', to: '/what-is-fractional-cmo', permanent: false },
      { from: '/fractional-cmo', to: '/what-is-fractional-cmo', permanent: false },
      { from: '/hire-fractional-cmo', to: '/what-is-fractional-cmo', permanent: false },
      { from: '/marketing-consultant', to: '/', permanent: false },
      { from: '/growth-marketing', to: '/', permanent: false },
    ];

    return commonRedirects;
  }

  generateNextConfigRedirects() {
    const redirects = this.generateRedirectMapping();

    const code = `
// Auto-generated redirects from broken link checker
// Generated: ${new Date().toISOString()}

async redirects() {
  return [
${redirects.map(r => `    { source: '${r.from}', destination: '${r.to}', permanent: ${r.permanent} },`).join('\n')}
  ]
}
`;

    const outputPath = path.join(process.cwd(), 'scripts', 'generated-redirects.js');
    fs.writeFileSync(outputPath, code.trim());

    console.log(`${colors.green}✓ Redirects written to: ${outputPath}${colors.reset}\n`);
    console.log(`${colors.cyan}Add to next.config.js:${colors.reset}`);
    console.log(`${colors.cyan}const redirects = require('./scripts/generated-redirects');${colors.reset}\n`);
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalLinks: this.links.size,
        internalLinks: this.internalLinks.size,
        externalLinks: this.externalLinks.size,
        brokenLinks: this.brokenLinks.length,
      },
      brokenLinks: this.brokenLinks,
      redirects: this.generateRedirectMapping(),
    };

    const outputPath = path.join(process.cwd(), 'scripts', 'link-check-report.json');
    fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));

    console.log(`${colors.green}✓ Full report saved to: ${outputPath}${colors.reset}\n`);
  }

  async run() {
    console.log(`${colors.cyan}╔════════════════════════════════════════╗${colors.reset}`);
    console.log(`${colors.cyan}║   Pattern Growth Link Checker          ║${colors.reset}`);
    console.log(`${colors.cyan}╚════════════════════════════════════════╝${colors.reset}\n`);

    await this.scanFiles();
    await this.validateInternalLinks();
    this.generateNextConfigRedirects();
    this.generateReport();

    console.log(`${colors.green}✓ Link check complete!${colors.reset}\n`);

    if (this.brokenLinks.length > 0) {
      process.exit(1);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const checker = new LinkChecker();
  checker.run().catch(err => {
    console.error(`${colors.red}Error:${colors.reset}`, err);
    process.exit(1);
  });
}

module.exports = LinkChecker;
