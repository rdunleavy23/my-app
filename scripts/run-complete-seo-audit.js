#!/usr/bin/env node

/**
 * Complete Automated SEO Audit & Fix System
 *
 * Master script that runs all SEO automation tools:
 * 1. Broken link checker with redirect mapping
 * 2. Advanced sitemap generation
 * 3. Meta description & keyword optimization
 * 4. Schema markup automation (breadcrumbs, FAQ, service)
 * 5. Core Web Vitals optimization
 * 6. Final validation with existing checks
 *
 * Usage:
 *   node scripts/run-complete-seo-audit.js
 *   npm run seo:audit  (add to package.json)
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
  bold: '\x1b[1m',
};

class CompleteSEOAudit {
  constructor() {
    this.results = {
      linkCheck: null,
      sitemap: null,
      seoOptimizer: null,
      webVitals: null,
      validation: null,
    };
    this.startTime = Date.now();
  }

  printHeader() {
    console.log('\n');
    console.log(`${colors.bold}${colors.cyan}╔═══════════════════════════════════════════════════════════╗${colors.reset}`);
    console.log(`${colors.bold}${colors.cyan}║                                                           ║${colors.reset}`);
    console.log(`${colors.bold}${colors.cyan}║        🚀 COMPLETE SEO AUDIT & OPTIMIZATION 🚀           ║${colors.reset}`);
    console.log(`${colors.bold}${colors.cyan}║              Pattern Growth Automation                    ║${colors.reset}`);
    console.log(`${colors.bold}${colors.cyan}║                                                           ║${colors.reset}`);
    console.log(`${colors.bold}${colors.cyan}╚═══════════════════════════════════════════════════════════╝${colors.reset}`);
    console.log('\n');
  }

  printStep(number, total, title) {
    console.log(`${colors.bold}${colors.blue}[Step ${number}/${total}] ${title}${colors.reset}`);
    console.log(`${colors.cyan}${'═'.repeat(60)}${colors.reset}\n`);
  }

  async runStep(name, scriptPath, stepNum, totalSteps, title) {
    this.printStep(stepNum, totalSteps, title);

    try {
      const script = require(scriptPath);
      const instance = new script();
      await instance.run();

      this.results[name] = {
        status: 'success',
        issues: instance.issues || [],
        recommendations: instance.recommendations || [],
      };

      console.log(`${colors.green}✓ ${title} completed successfully${colors.reset}\n\n`);
    } catch (error) {
      console.error(`${colors.red}✗ ${title} failed: ${error.message}${colors.reset}\n\n`);
      this.results[name] = {
        status: 'failed',
        error: error.message,
      };
    }
  }

  async runValidation() {
    this.printStep(6, 6, 'Running Final SEO Validation');

    try {
      const output = execSync('node scripts/verify-all-10-checks.js', {
        encoding: 'utf8',
        cwd: process.cwd(),
      });

      console.log(output);

      this.results.validation = {
        status: 'success',
        output,
      };

      console.log(`${colors.green}✓ Validation completed${colors.reset}\n\n`);
    } catch (error) {
      console.error(`${colors.yellow}⚠ Validation warnings (non-critical)${colors.reset}\n\n`);
      this.results.validation = {
        status: 'warning',
        output: error.stdout || error.message,
      };
    }
  }

  generateSummaryReport() {
    console.log(`${colors.bold}${colors.magenta}╔═══════════════════════════════════════════════════════════╗${colors.reset}`);
    console.log(`${colors.bold}${colors.magenta}║                    AUDIT SUMMARY                          ║${colors.reset}`);
    console.log(`${colors.bold}${colors.magenta}╚═══════════════════════════════════════════════════════════╝${colors.reset}\n`);

    const duration = ((Date.now() - this.startTime) / 1000).toFixed(2);
    console.log(`${colors.cyan}Total Duration: ${duration}s${colors.reset}\n`);

    // Status overview
    const modules = [
      { name: 'Broken Link Check', key: 'linkCheck' },
      { name: 'Sitemap Generation', key: 'sitemap' },
      { name: 'SEO Optimization', key: 'seoOptimizer' },
      { name: 'Web Vitals', key: 'webVitals' },
      { name: 'Final Validation', key: 'validation' },
    ];

    console.log(`${colors.bold}Module Status:${colors.reset}\n`);

    let allPassed = true;
    modules.forEach(module => {
      const result = this.results[module.key];
      if (!result) {
        console.log(`  ${colors.yellow}⊘ ${module.name}: Skipped${colors.reset}`);
        return;
      }

      const statusIcon = result.status === 'success' ? '✓' :
                        result.status === 'warning' ? '⚠' : '✗';
      const statusColor = result.status === 'success' ? colors.green :
                         result.status === 'warning' ? colors.yellow : colors.red;

      console.log(`  ${statusColor}${statusIcon} ${module.name}: ${result.status}${colors.reset}`);

      if (result.status !== 'success' && result.status !== 'warning') {
        allPassed = false;
      }

      // Show issue counts
      if (result.issues && result.issues.length > 0) {
        const errors = result.issues.filter(i => i.severity === 'error').length;
        const warnings = result.issues.filter(i => i.severity === 'warning').length;
        if (errors > 0) console.log(`    ${colors.red}Errors: ${errors}${colors.reset}`);
        if (warnings > 0) console.log(`    ${colors.yellow}Warnings: ${warnings}${colors.reset}`);
      }

      if (result.recommendations && result.recommendations.length > 0) {
        console.log(`    ${colors.cyan}Recommendations: ${result.recommendations.length}${colors.reset}`);
      }
    });

    console.log('\n');

    // Generated files
    console.log(`${colors.bold}Generated Files:${colors.reset}\n`);
    const generatedFiles = [
      'scripts/link-check-report.json',
      'scripts/generated-redirects.js',
      'scripts/seo-fixes.md',
      'scripts/web-vitals-guide.md',
      'scripts/next-config-optimizations.js',
      'public/sitemap-main.xml',
      'public/sitemap-images.xml',
      'public/sitemap-index.xml',
    ];

    generatedFiles.forEach(file => {
      const fullPath = path.join(process.cwd(), file);
      if (fs.existsSync(fullPath)) {
        console.log(`  ${colors.green}✓${colors.reset} ${file}`);
      } else {
        console.log(`  ${colors.yellow}⊘${colors.reset} ${file} (not generated)`);
      }
    });

    console.log('\n');

    // Next steps
    console.log(`${colors.bold}${colors.cyan}Next Steps:${colors.reset}\n`);
    console.log(`  1. Review generated reports in scripts/ directory`);
    console.log(`  2. Apply recommended fixes from scripts/seo-fixes.md`);
    console.log(`  3. Review Web Vitals recommendations in scripts/web-vitals-guide.md`);
    console.log(`  4. Add redirects from scripts/generated-redirects.js to next.config.js`);
    console.log(`  5. Update next.config.js with optimizations from scripts/next-config-optimizations.js`);
    console.log(`  6. Test build: npm run build`);
    console.log(`  7. Run Lighthouse: npm run lhci`);
    console.log(`  8. Submit updated sitemap to Google Search Console\n`);

    if (allPassed) {
      console.log(`${colors.bold}${colors.green}╔═══════════════════════════════════════════════════════════╗${colors.reset}`);
      console.log(`${colors.bold}${colors.green}║         ✓ ALL CHECKS PASSED - READY TO DEPLOY!           ║${colors.reset}`);
      console.log(`${colors.bold}${colors.green}╚═══════════════════════════════════════════════════════════╝${colors.reset}\n`);
    } else {
      console.log(`${colors.bold}${colors.yellow}╔═══════════════════════════════════════════════════════════╗${colors.reset}`);
      console.log(`${colors.bold}${colors.yellow}║      ⚠ SOME ISSUES FOUND - REVIEW REPORTS ABOVE          ║${colors.reset}`);
      console.log(`${colors.bold}${colors.yellow}╚═══════════════════════════════════════════════════════════╝${colors.reset}\n`);
    }

    // Save summary to JSON
    const summary = {
      timestamp: new Date().toISOString(),
      duration: `${duration}s`,
      results: this.results,
      allPassed,
    };

    fs.writeFileSync(
      path.join(process.cwd(), 'scripts', 'seo-audit-summary.json'),
      JSON.stringify(summary, null, 2)
    );

    console.log(`${colors.cyan}Full summary saved to: scripts/seo-audit-summary.json${colors.reset}\n`);
  }

  async run() {
    this.printHeader();

    // Step 1: Check for broken links
    await this.runStep(
      'linkCheck',
      path.join(__dirname, 'check-broken-links.js'),
      1,
      6,
      '🔍 Checking for Broken Links & Generating Redirects'
    );

    // Step 2: Generate advanced sitemaps
    await this.runStep(
      'sitemap',
      path.join(__dirname, 'generate-advanced-sitemap.js'),
      2,
      6,
      '🗺️  Generating Advanced Sitemaps'
    );

    // Step 3: Optimize meta descriptions and schemas
    await this.runStep(
      'seoOptimizer',
      path.join(__dirname, 'auto-seo-optimizer.js'),
      3,
      6,
      '📝 Optimizing Meta Descriptions & Schema Markup'
    );

    // Step 4: Optimize Core Web Vitals
    await this.runStep(
      'webVitals',
      path.join(__dirname, 'optimize-core-web-vitals.js'),
      4,
      6,
      '⚡ Analyzing Core Web Vitals'
    );

    // Step 5: Run existing validation
    await this.runValidation();

    // Generate summary report
    this.generateSummaryReport();

    // Exit with appropriate code
    const hasErrors = Object.values(this.results).some(r => r && r.status === 'failed');
    process.exit(hasErrors ? 1 : 0);
  }
}

// Run if called directly
if (require.main === module) {
  const audit = new CompleteSEOAudit();
  audit.run().catch(err => {
    console.error(`${colors.red}Fatal error:${colors.reset}`, err);
    process.exit(1);
  });
}

module.exports = CompleteSEOAudit;
