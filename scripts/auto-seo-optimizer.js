#!/usr/bin/env node

/**
 * Automated SEO Optimizer for Pattern Growth
 *
 * Features:
 * - Audits and optimizes meta descriptions (150-160 chars)
 * - Automatically adds breadcrumb schema to all pages
 * - Generates FAQ schema for service pages
 * - Creates automated schema markup system
 * - Optimizes keyword placement
 * - Validates all SEO elements
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Color codes
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
};

// Target keywords by page
const PAGE_KEYWORDS = {
  '/': ['growth strategy', '8-week sprint', 'marketing consultant', 'fractional CMO alternative'],
  '/what-is-fractional-cmo': ['fractional CMO', 'part-time CMO', 'marketing executive', 'CMO services'],
  '/fractional-cmo-hourly-rate': ['fractional CMO rate', 'CMO pricing', 'marketing consultant cost'],
  '/fractional-cmo-services': ['fractional CMO services', 'marketing strategy', 'CMO consulting'],
  '/benefits-of-fractional-cmo': ['fractional CMO benefits', 'part-time CMO advantages'],
  '/sprint-vs-fractional-cmo': ['strategy sprint', 'fractional CMO comparison', 'project-based marketing'],
  '/process': ['growth strategy process', '8-week sprint', 'marketing strategy delivery'],
  '/about': ['growth strategists', 'marketing consultants', 'Pattern Growth team'],
};

// FAQ content by page
const PAGE_FAQS = {
  '/what-is-fractional-cmo': [
    {
      question: 'What is a fractional CMO?',
      answer: 'A fractional CMO is a part-time chief marketing officer who provides strategic marketing leadership on a contract or retainer basis. They work with companies that need executive-level marketing expertise but don\'t require or can\'t afford a full-time CMO.',
    },
    {
      question: 'How is a fractional CMO different from a marketing consultant?',
      answer: 'A fractional CMO takes on the role of your marketing executive, providing ongoing strategic oversight and leadership. A marketing consultant typically works on specific projects or provides advice. Pattern Growth offers a project-based sprint model that delivers complete strategy and infrastructure with full ownership transfer.',
    },
    {
      question: 'When should I hire a fractional CMO?',
      answer: 'Companies typically hire fractional CMOs when they need senior marketing leadership but aren\'t ready for a full-time hire. This is common for startups, growing companies, or during strategic transitions. However, if you need complete strategy built from your data with full ownership, Pattern Growth\'s 8-week sprint may be a better fit.',
    },
    {
      question: 'What does a fractional CMO do?',
      answer: 'A fractional CMO develops marketing strategy, oversees marketing teams, manages budgets, aligns marketing with business goals, and provides strategic leadership. They typically work 10-20 hours per week on an ongoing retainer basis.',
    },
  ],
  '/fractional-cmo-hourly-rate': [
    {
      question: 'How much does a fractional CMO cost?',
      answer: 'Fractional CMO rates typically range from $200-500 per hour or $5,000-15,000 per month on retainer. The exact cost depends on experience level, industry expertise, and time commitment. Pattern Growth offers a fixed-scope 8-week sprint as an alternative to ongoing retainers.',
    },
    {
      question: 'Is a fractional CMO worth the cost?',
      answer: 'It depends on your needs. Fractional CMOs provide ongoing strategic oversight, which is valuable if you need continuous leadership. However, if you need complete strategy built once with full ownership, Pattern Growth\'s project-based model eliminates recurring costs.',
    },
    {
      question: 'What\'s the difference between hourly and monthly fractional CMO pricing?',
      answer: 'Hourly rates ($200-500/hour) offer flexibility but can be unpredictable. Monthly retainers ($5K-15K/month) provide dedicated time but create ongoing costs. Pattern Growth\'s fixed-scope sprint delivers everything upfront with complete ownership transfer.',
    },
  ],
  '/benefits-of-fractional-cmo': [
    {
      question: 'What are the main benefits of a fractional CMO?',
      answer: 'Fractional CMOs provide executive-level marketing expertise at a fraction of the cost of a full-time hire. Benefits include strategic guidance, leadership experience, flexibility, and access to proven marketing frameworks without long-term commitment.',
    },
    {
      question: 'What are the downsides of a fractional CMO?',
      answer: 'Fractional CMOs work part-time (typically 10-20 hours/week), may serve multiple clients, and require ongoing monthly costs. They provide oversight but may not build the infrastructure your team needs to execute independently. Pattern Growth addresses this by building complete systems your team owns.',
    },
    {
      question: 'When is a fractional CMO not the right fit?',
      answer: 'If you need someone to build complete marketing infrastructure from your data, train your team, and transfer full ownership, a project-based approach like Pattern Growth\'s 8-week sprint may be more appropriate than ongoing fractional CMO oversight.',
    },
  ],
  '/sprint-vs-fractional-cmo': [
    {
      question: 'What\'s the difference between a strategy sprint and fractional CMO?',
      answer: 'A strategy sprint is a fixed-scope project that delivers complete strategy and infrastructure with full ownership transfer. A fractional CMO provides ongoing strategic oversight on a retainer basis. Sprints are project-based; fractional CMOs are relationship-based.',
    },
    {
      question: 'Which is better: strategy sprint or fractional CMO?',
      answer: 'It depends on your needs. Choose a fractional CMO if you need ongoing strategic leadership and oversight. Choose a strategy sprint if you want complete infrastructure built from your data with full ownership, allowing your team to execute independently.',
    },
    {
      question: 'Can I do both a sprint and hire a fractional CMO?',
      answer: 'Yes, many companies use Pattern Growth\'s sprint to build foundational strategy and infrastructure, then hire a fractional CMO for ongoing oversight as they scale. The sprint gives the CMO a solid foundation to build from.',
    },
  ],
  '/process': [
    {
      question: 'How long does the growth strategy sprint take?',
      answer: 'Pattern Growth\'s strategy sprint is a fixed 8-week engagement. Week 1-2 focuses on strategic foundation, Week 3-4 on tactical framework, and Week 5-8 on dashboard creation and team handoff with complete documentation.',
    },
    {
      question: 'What do I get at the end of the 8-week sprint?',
      answer: 'You receive complete growth strategy, marketing infrastructure, operational playbooks, measurement dashboards, team training, and full documentation. Everything is built from your actual data and transfers to you with complete ownership.',
    },
    {
      question: 'What happens after the 8 weeks?',
      answer: 'Your team has everything needed to execute independently: strategy, playbooks, dashboards, and documentation. We provide handoff training to ensure smooth transition. You own all the work product and can iterate without ongoing consulting costs.',
    },
  ],
};

class SEOOptimizer {
  constructor() {
    this.issues = [];
    this.fixes = [];
    this.pages = [];
  }

  async scanAllPages() {
    console.log(`${colors.blue}🔍 Scanning all pages...${colors.reset}\n`);

    const files = await glob('app/**/page.tsx', {
      ignore: ['**/node_modules/**', '**/.next/**', '**/api/**'],
    });

    for (const file of files) {
      await this.scanPage(file);
    }

    console.log(`${colors.green}✓ Scanned ${this.pages.length} pages${colors.reset}\n`);
  }

  async scanPage(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const route = this.filePathToRoute(filePath);

    const page = {
      filePath,
      route,
      content,
      metadata: this.extractMetadata(content),
      hasSchema: content.includes('createServiceSchema') || content.includes('createFAQSchema'),
      hasBreadcrumbs: content.includes('Breadcrumbs') || content.includes('createBreadcrumbSchema'),
    };

    this.pages.push(page);
    this.auditPage(page);
  }

  filePathToRoute(filePath) {
    let route = filePath
      .replace(/^app/, '')
      .replace(/\/page\.tsx$/, '')
      .replace(/\(marketing\)/g, '')
      .replace(/\/\/+/g, '/');

    return route === '' ? '/' : route;
  }

  extractMetadata(content) {
    const metadata = {};

    // Extract title
    const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
    if (titleMatch) {
      metadata.title = titleMatch[1];
    }

    // Extract description
    const descMatch = content.match(/description:\s*["']([^"']+)["']/);
    if (descMatch) {
      metadata.description = descMatch[1];
    }

    // Extract keywords
    const keywordsMatch = content.match(/keywords:\s*(\[[\s\S]*?\])/);
    if (keywordsMatch) {
      try {
        metadata.keywords = eval(keywordsMatch[1]);
      } catch {
        metadata.keywords = [];
      }
    }

    return metadata;
  }

  auditPage(page) {
    // Check meta description length
    if (page.metadata.description) {
      const length = page.metadata.description.length;
      if (length < 150 || length > 160) {
        this.issues.push({
          type: 'meta-description',
          severity: 'warning',
          page: page.route,
          issue: `Meta description is ${length} chars (should be 150-160)`,
          current: page.metadata.description,
        });
      }
    } else {
      this.issues.push({
        type: 'meta-description',
        severity: 'error',
        page: page.route,
        issue: 'Missing meta description',
      });
    }

    // Check for keywords
    if (!page.metadata.keywords || page.metadata.keywords.length === 0) {
      this.issues.push({
        type: 'keywords',
        severity: 'warning',
        page: page.route,
        issue: 'No keywords defined',
      });
    }

    // Check for breadcrumb schema
    if (!page.hasBreadcrumbs && page.route !== '/') {
      this.issues.push({
        type: 'breadcrumb',
        severity: 'warning',
        page: page.route,
        issue: 'Missing breadcrumb schema',
      });
    }

    // Check for FAQ schema on service pages
    if (this.isServicePage(page.route) && !page.hasSchema) {
      this.issues.push({
        type: 'faq-schema',
        severity: 'info',
        page: page.route,
        issue: 'Could benefit from FAQ schema',
      });
    }
  }

  isServicePage(route) {
    return (
      route.includes('fractional-cmo') ||
      route.includes('marketing') ||
      route === '/process'
    );
  }

  generateOptimalDescription(route, currentDescription) {
    const keywords = PAGE_KEYWORDS[route] || [];
    const targetLength = 155;

    if (currentDescription && currentDescription.length >= 150 && currentDescription.length <= 160) {
      return currentDescription; // Already optimal
    }

    // Generate new description with keywords
    const templates = {
      '/': `Complete growth strategy in 8 weeks: marketing consultant builds from your data. Project-based alternative to fractional CMO retainers. Everything transfers.`,
      '/what-is-fractional-cmo': `Fractional CMO definition: Part-time marketing executive on retainer. Compare with Pattern Growth's project-based sprint: complete ownership transfer.`,
      '/fractional-cmo-hourly-rate': `Fractional CMO rates: $200-500/hour or $5K-15K/month. Pattern Growth offers fixed-scope 8-week sprint with complete ownership. Compare pricing models.`,
      '/fractional-cmo-services': `Fractional CMO services vs project-based sprint: ongoing oversight vs complete strategy build. Pattern Growth delivers infrastructure with ownership transfer.`,
      '/benefits-of-fractional-cmo': `Fractional CMO benefits and comparison with project-based approach. When you need complete strategy built from data vs ongoing leadership oversight.`,
      '/sprint-vs-fractional-cmo': `Strategy sprint vs fractional CMO: project-based vs retainer. Fixed scope with ownership transfer vs ongoing oversight. Choose the right model for your needs.`,
      '/process': `8-week growth strategy sprint process: strategic foundation, tactical framework, dashboards, and team handoff. Complete project-based marketing consulting.`,
      '/about': `Meet Ryan & William: growth strategists who build marketing strategy from your data. 8-week project-based sprint with complete ownership transfer to your team.`,
    };

    return templates[route] || currentDescription;
  }

  generateBreadcrumbCode(route) {
    const parts = route.split('/').filter(Boolean);
    const breadcrumbs = [{ label: 'Home', href: '/', position: 1 }];

    let currentPath = '';
    parts.forEach((part, index) => {
      currentPath += `/${part}`;
      breadcrumbs.push({
        label: this.routeToLabel(part),
        href: currentPath,
        position: index + 2,
      });
    });

    return `
// Breadcrumb Schema
const breadcrumbSchema = createBreadcrumbListSchema(${JSON.stringify(breadcrumbs, null, 2)});
`;
  }

  routeToLabel(route) {
    return route
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  generateFAQCode(route) {
    const faqs = PAGE_FAQS[route];
    if (!faqs) return '';

    return `
// FAQ Schema
const faqSchema = createFAQSchema([
${faqs.map(faq => `  {
    "@type": "Question",
    name: "${faq.question}",
    acceptedAnswer: {
      "@type": "Answer",
      text: "${faq.answer.replace(/"/g, '\\"')}"
    }
  }`).join(',\n')}
]);
`;
  }

  generateServiceSchemaCode(route) {
    const services = {
      '/': {
        name: '8-Week Growth Strategy Sprint',
        description: 'Complete marketing strategy and infrastructure delivered in 8 weeks. Project-based alternative to fractional CMO retainers with full ownership transfer.',
      },
      '/what-is-fractional-cmo': {
        name: 'Fractional CMO Education & Comparison',
        description: 'Comprehensive guide to fractional CMO services, pricing, and comparison with project-based strategy sprints.',
      },
      '/fractional-cmo-services': {
        name: 'Project-Based Marketing Strategy Services',
        description: 'Complete growth strategy, marketing infrastructure, and team training delivered in fixed 8-week sprint with ownership transfer.',
      },
      '/process': {
        name: 'Growth Strategy Sprint Process',
        description: '8-week focused engagement delivering growth strategy, marketing infrastructure, and team training with complete ownership transfer.',
      },
    };

    const service = services[route];
    if (!service) return '';

    return `
// Service Schema
const serviceSchema = createServiceSchema({
  name: "${service.name}",
  description: "${service.description}",
  url: "https://www.patterngrowth.com${route}",
  provider: "Pattern Growth"
});
`;
  }

  generateSchemaScriptTags(route) {
    const schemas = [];

    if (route !== '/') {
      schemas.push('breadcrumbSchema');
    }

    if (PAGE_FAQS[route]) {
      schemas.push('faqSchema');
    }

    if (this.isServicePage(route)) {
      schemas.push('serviceSchema');
    }

    if (schemas.length === 0) return '';

    return schemas.map(schema => `
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(${schema}) }}
      />`).join('');
  }

  generateReport() {
    console.log(`${colors.cyan}╔════════════════════════════════════════╗${colors.reset}`);
    console.log(`${colors.cyan}║     SEO Optimization Report            ║${colors.reset}`);
    console.log(`${colors.cyan}╚════════════════════════════════════════╝${colors.reset}\n`);

    console.log(`${colors.blue}Pages Scanned: ${this.pages.length}${colors.reset}\n`);

    const errors = this.issues.filter(i => i.severity === 'error');
    const warnings = this.issues.filter(i => i.severity === 'warning');
    const info = this.issues.filter(i => i.severity === 'info');

    console.log(`${colors.red}Errors: ${errors.length}${colors.reset}`);
    console.log(`${colors.yellow}Warnings: ${warnings.length}${colors.reset}`);
    console.log(`${colors.cyan}Info: ${info.length}${colors.reset}\n`);

    if (errors.length > 0) {
      console.log(`${colors.red}═══ ERRORS ═══${colors.reset}\n`);
      errors.forEach(issue => {
        console.log(`${colors.red}✗ ${issue.page}${colors.reset}`);
        console.log(`  ${issue.issue}\n`);
      });
    }

    if (warnings.length > 0) {
      console.log(`${colors.yellow}═══ WARNINGS ═══${colors.reset}\n`);
      warnings.forEach(issue => {
        console.log(`${colors.yellow}⚠ ${issue.page}${colors.reset}`);
        console.log(`  ${issue.issue}`);
        if (issue.current) {
          console.log(`  Current: "${issue.current}"`);
          const optimal = this.generateOptimalDescription(issue.page, issue.current);
          console.log(`  Optimal: "${optimal}"`);
        }
        console.log('');
      });
    }

    // Generate fixes file
    this.generateFixesFile();

    console.log(`${colors.green}✓ Report complete!${colors.reset}\n`);
    console.log(`${colors.cyan}See scripts/seo-fixes.md for recommended fixes${colors.reset}\n`);
  }

  generateFixesFile() {
    let markdown = '# SEO Optimization Fixes\n\n';
    markdown += `Generated: ${new Date().toISOString()}\n\n`;
    markdown += '## Summary\n\n';
    markdown += `- Pages scanned: ${this.pages.length}\n`;
    markdown += `- Issues found: ${this.issues.length}\n\n`;

    markdown += '## Recommended Fixes\n\n';

    this.pages.forEach(page => {
      const pageIssues = this.issues.filter(i => i.page === page.route);
      if (pageIssues.length === 0) return;

      markdown += `### ${page.route}\n\n`;

      pageIssues.forEach(issue => {
        markdown += `**${issue.type}**: ${issue.issue}\n\n`;

        if (issue.type === 'meta-description') {
          const optimal = this.generateOptimalDescription(page.route, issue.current);
          markdown += '```typescript\n';
          markdown += `description: "${optimal}",\n`;
          markdown += '```\n\n';
        }

        if (issue.type === 'breadcrumb') {
          markdown += this.generateBreadcrumbCode(page.route);
          markdown += '\n';
          markdown += this.generateSchemaScriptTags(page.route);
          markdown += '\n\n';
        }

        if (issue.type === 'faq-schema') {
          markdown += this.generateFAQCode(page.route);
          markdown += '\n';
          markdown += this.generateSchemaScriptTags(page.route);
          markdown += '\n\n';
        }
      });
    });

    const outputPath = path.join(process.cwd(), 'scripts', 'seo-fixes.md');
    fs.writeFileSync(outputPath, markdown);
    console.log(`${colors.green}✓ Fixes written to ${outputPath}${colors.reset}\n`);
  }

  async run() {
    await this.scanAllPages();
    this.generateReport();
  }
}

// Run if called directly
if (require.main === module) {
  const optimizer = new SEOOptimizer();
  optimizer.run().catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
}

module.exports = SEOOptimizer;
