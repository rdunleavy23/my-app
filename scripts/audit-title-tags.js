#!/usr/bin/env node
/**
 * Title Tag Audit Script
 * Checks all title tags for:
 * - Length (60-65 characters ideal)
 * - Uniqueness
 * - Whether they complement (not duplicate) H1 tags
 */

const fs = require('fs');
const path = require('path');

// Pages to check
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
];

const results = [];
const titleMap = new Map();

function extractTitle(content, filePath) {
  // Look for title in metadata export
  const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
  if (titleMatch) {
    return titleMatch[1];
  }
  
  // Look for title in template format
  const templateMatch = content.match(/title:\s*\{[^}]*default:\s*["']([^"']+)["']/);
  if (templateMatch) {
    return templateMatch[1];
  }
  
  return null;
}

function extractH1(content) {
  // Look for H1 tags in JSX
  const h1Matches = content.match(/<h1[^>]*>([^<]+)<\/h1>/g);
  if (h1Matches) {
    return h1Matches.map(match => match.replace(/<[^>]+>/g, '').trim());
  }
  return [];
}

pages.forEach(({ file, route }) => {
  const filePath = path.join(process.cwd(), file);
  if (!fs.existsSync(filePath)) {
    results.push({ route, status: 'missing', error: 'File not found' });
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const title = extractTitle(content, filePath);
  const h1s = extractH1(content);
  
  if (!title) {
    results.push({ route, status: 'error', error: 'No title found' });
    return;
  }
  
  const length = title.length;
  const isOptimal = length >= 50 && length <= 65;
  const isAcceptable = length >= 30 && length <= 70;
  
  // Check for duplicates
  const duplicate = titleMap.has(title);
  if (!duplicate) {
    titleMap.set(title, route);
  }
  
  results.push({
    route,
    title,
    length,
    isOptimal,
    isAcceptable,
    duplicate: duplicate ? titleMap.get(title) : null,
    h1Count: h1s.length,
    h1Text: h1s[0] || 'No H1 found',
    h1Duplicate: h1s[0] && title.toLowerCase().includes(h1s[0].toLowerCase().substring(0, 20)),
  });
});

// Print results
console.log('\n=== TITLE TAG AUDIT RESULTS ===\n');
results.forEach(result => {
  if (result.status === 'error' || result.status === 'missing') {
    console.log(`❌ ${result.route}: ${result.error}`);
    return;
  }
  
  const status = result.isOptimal ? '✓' : result.isAcceptable ? '⚠' : '✗';
  const lengthStatus = result.isOptimal ? 'OPTIMAL' : result.isAcceptable ? 'ACCEPTABLE' : 'TOO LONG/SHORT';
  
  console.log(`${status} ${result.route}`);
  console.log(`   Title: "${result.title}"`);
  console.log(`   Length: ${result.length} chars (${lengthStatus})`);
  if (result.duplicate) {
    console.log(`   ⚠ DUPLICATE: Also used on ${result.duplicate}`);
  }
  if (result.h1Duplicate) {
    console.log(`   ⚠ H1 DUPLICATE: Title may duplicate H1 content`);
  }
  console.log(`   H1: "${result.h1Text}" (${result.h1Count} H1 tag(s))`);
  console.log('');
});

// Summary
const optimal = results.filter(r => r.isOptimal).length;
const acceptable = results.filter(r => r.isAcceptable && !r.isOptimal).length;
const issues = results.filter(r => !r.isAcceptable || r.duplicate || r.status === 'error').length;

console.log('\n=== SUMMARY ===');
console.log(`Total pages: ${results.length}`);
console.log(`Optimal (50-65 chars): ${optimal}`);
console.log(`Acceptable (30-70 chars): ${acceptable}`);
console.log(`Issues found: ${issues}`);

if (issues === 0) {
  console.log('\n✓ All title tags are within acceptable range and unique!');
  process.exit(0);
} else {
  console.log('\n⚠ Some title tags need attention.');
  process.exit(1);
}

