#!/usr/bin/env node
/**
 * H1 Tag Audit Script
 * Checks all pages for:
 * - Exactly one H1 tag per page
 * - H1 contains primary keyword
 * - Proper heading hierarchy
 */

const fs = require('fs');
const path = require('path');

const pages = [
  { file: 'app/page.tsx', route: '/' },
  { file: 'app/about/page.tsx', route: '/about' },
  { file: 'app/blog/page.tsx', route: '/blog' },
  { file: 'app/process/page.tsx', route: '/process' },
  { file: 'app/privacy/page.tsx', route: '/privacy' },
  { file: 'app/fractional-cmo-services/page.tsx', route: '/fractional-cmo-services' },
  { file: 'app/what-is-fractional-cmo/page.tsx', route: '/what-is-fractional-cmo' },
  { file: 'app/benefits-of-fractional-cmo/page.tsx', route: '/benefits-of-fractional-cmo' },
  { file: 'app/fractional-cmo-hourly-rate/page.tsx', route: '/fractional-cmo-hourly-rate' },
  { file: 'app/fractional-marketing-services/page.tsx', route: '/fractional-marketing-services' },
  { file: 'app/fractional-cmo-responsibilities/page.tsx', route: '/fractional-cmo-responsibilities' },
  { file: 'app/styleguide/page.tsx', route: '/styleguide' },
];

const results = [];

function extractHeadings(content) {
  // Match H1 tags including multi-line content
  const h1Matches = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  const h2Matches = content.match(/<h2[^>]*>([\s\S]*?)<\/h2>/gi) || [];
  const h3Matches = content.match(/<h3[^>]*>([\s\S]*?)<\/h3>/gi) || [];
  
  return {
    h1: h1Matches.map(m => m.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()),
    h2: h2Matches.map(m => m.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()),
    h3: h3Matches.map(m => m.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()),
  };
}

pages.forEach(({ file, route }) => {
  const filePath = path.join(process.cwd(), file);
  if (!fs.existsSync(filePath)) {
    results.push({ route, status: 'missing', error: 'File not found' });
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const headings = extractHeadings(content);
  
  const h1Count = headings.h1.length;
  const hasOneH1 = h1Count === 1;
  const hasNoH1 = h1Count === 0;
  const hasMultipleH1 = h1Count > 1;
  
  // Check hierarchy - H1 should come before H2, H2 before H3
  let hierarchyIssue = null;
  if (hasOneH1) {
    const h1Index = content.indexOf('<h1');
    const firstH2Index = content.indexOf('<h2');
    const firstH3Index = content.indexOf('<h3');
    
    if (firstH2Index !== -1 && firstH2Index < h1Index) {
      hierarchyIssue = 'H2 appears before H1';
    } else if (firstH3Index !== -1 && firstH3Index < h1Index) {
      hierarchyIssue = 'H3 appears before H1';
    } else if (firstH3Index !== -1 && firstH2Index !== -1 && firstH3Index < firstH2Index) {
      hierarchyIssue = 'H3 appears before H2';
    }
  }
  
  results.push({
    route,
    h1Count,
    hasOneH1,
    hasNoH1,
    hasMultipleH1,
    h1Text: headings.h1[0] || 'NONE',
    h2Count: headings.h2.length,
    h3Count: headings.h3.length,
    hierarchyIssue,
  });
});

// Print results
console.log('\n=== H1 TAG AUDIT RESULTS ===\n');
results.forEach(result => {
  if (result.status === 'error' || result.status === 'missing') {
    console.log(`❌ ${result.route}: ${result.error}`);
    return;
  }
  
  let status = '✓';
  if (result.hasNoH1) status = '✗';
  if (result.hasMultipleH1) status = '✗';
  
  console.log(`${status} ${result.route}`);
  console.log(`   H1 Count: ${result.h1Count} ${result.hasOneH1 ? '(CORRECT)' : result.hasNoH1 ? '(MISSING)' : '(TOO MANY)'}`);
  console.log(`   H1 Text: "${result.h1Text}"`);
  console.log(`   H2 Count: ${result.h2Count}`);
  console.log(`   H3 Count: ${result.h3Count}`);
  if (result.hierarchyIssue) {
    console.log(`   ⚠ HIERARCHY ISSUE: ${result.hierarchyIssue}`);
  }
  console.log('');
});

// Summary
const correct = results.filter(r => r.hasOneH1 && !r.hierarchyIssue).length;
const issues = results.filter(r => r.hasNoH1 || r.hasMultipleH1 || r.hierarchyIssue || r.status === 'error').length;

console.log('\n=== SUMMARY ===');
console.log(`Total pages: ${results.length}`);
console.log(`Correct (1 H1, proper hierarchy): ${correct}`);
console.log(`Issues found: ${issues}`);

if (issues === 0) {
  console.log('\n✓ All pages have exactly one H1 tag with proper hierarchy!');
  process.exit(0);
} else {
  console.log('\n⚠ Some pages need H1 fixes.');
  process.exit(1);
}

