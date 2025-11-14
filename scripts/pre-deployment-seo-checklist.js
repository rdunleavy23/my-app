#!/usr/bin/env node
/**
 * Pre-Deployment SEO Checklist
 * Runs all SEO audits and validates critical requirements before deployment
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const checks = [
  { name: 'Title Tags', script: 'scripts/audit-title-tags.js' },
  { name: 'H1 Tags', script: 'scripts/audit-h1-tags.js' },
  { name: 'Images', script: 'scripts/audit-images.js' },
  { name: 'Internal Linking', script: 'scripts/audit-internal-linking.js' },
  { name: 'JSON-LD Schemas', script: 'scripts/validate-json-ld.js' },
];

const results = [];

console.log('\n=== PRE-DEPLOYMENT SEO CHECKLIST ===\n');
console.log('Running all SEO validation checks...\n');

checks.forEach(({ name, script }) => {
  const scriptPath = path.join(process.cwd(), script);
  if (!fs.existsSync(scriptPath)) {
    results.push({ name, status: 'error', message: `Script not found: ${script}` });
    return;
  }
  
  try {
    const output = execSync(`node ${script}`, { encoding: 'utf-8', cwd: process.cwd() });
    const exitCode = 0; // execSync throws on non-zero, so if we're here it passed
    
    results.push({ name, status: 'pass', output });
    console.log(`✓ ${name}: PASSED`);
  } catch (error) {
    const exitCode = error.status || 1;
    results.push({ name, status: 'fail', output: error.stdout || error.message, exitCode });
    console.log(`✗ ${name}: FAILED`);
  }
});

// Additional manual checks
console.log('\n=== ADDITIONAL CHECKS ===\n');

// Check robots.txt
try {
  const robotsPath = path.join(process.cwd(), 'app/robots.ts');
  if (fs.existsSync(robotsPath)) {
    const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
    if (robotsContent.includes('sitemap')) {
      console.log('✓ robots.txt includes sitemap reference');
    } else {
      console.log('⚠ robots.txt missing sitemap reference');
    }
  }
} catch (error) {
  console.log('✗ Error checking robots.txt');
}

// Check sitemap.ts
try {
  const sitemapPath = path.join(process.cwd(), 'app/sitemap.ts');
  if (fs.existsSync(sitemapPath)) {
    console.log('✓ sitemap.ts exists');
  } else {
    console.log('✗ sitemap.ts missing');
  }
} catch (error) {
  console.log('✗ Error checking sitemap.ts');
}

// Check canonical URLs
try {
  const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
  if (fs.existsSync(layoutPath)) {
    const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
    if (layoutContent.includes('canonical: "https://www.patterngrowth.com"')) {
      console.log('✓ Root layout uses absolute canonical URL');
    } else {
      console.log('⚠ Root layout canonical URL needs verification');
    }
  }
} catch (error) {
  console.log('✗ Error checking canonical URLs');
}

// Summary
console.log('\n=== SUMMARY ===\n');
const passed = results.filter(r => r.status === 'pass').length;
const failed = results.filter(r => r.status === 'fail').length;
const errors = results.filter(r => r.status === 'error').length;

console.log(`Total checks: ${results.length}`);
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);
console.log(`Errors: ${errors}`);

if (failed === 0 && errors === 0) {
  console.log('\n✓ ALL CHECKS PASSED - Ready for deployment!');
  console.log('\nNext steps:');
  console.log('1. Run: npm run build');
  console.log('2. Test build locally');
  console.log('3. Deploy to production');
  console.log('4. Submit sitemap to Google Search Console: https://www.patterngrowth.com/sitemap.xml');
  process.exit(0);
} else {
  console.log('\n✗ SOME CHECKS FAILED - Fix issues before deployment');
  process.exit(1);
}

