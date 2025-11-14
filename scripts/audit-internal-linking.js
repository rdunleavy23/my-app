#!/usr/bin/env node
/**
 * Internal Linking Audit Script
 * Checks that all pages are reachable within 2-3 clicks from homepage
 * Verifies descriptive anchor text (not "click here")
 */

const fs = require('fs');
const path = require('path');

const pages = [
  { file: 'app/page.tsx', route: '/', name: 'Homepage' },
  { file: 'app/about/page.tsx', route: '/about', name: 'About' },
  { file: 'app/blog/page.tsx', route: '/blog', name: 'Blog' },
  { file: 'app/process/page.tsx', route: '/process', name: 'Process' },
  { file: 'app/privacy/page.tsx', route: '/privacy', name: 'Privacy' },
  { file: 'app/fractional-cmo-services/page.tsx', route: '/fractional-cmo-services', name: 'Fractional CMO Services' },
  { file: 'app/what-is-fractional-cmo/page.tsx', route: '/what-is-fractional-cmo', name: 'What is Fractional CMO' },
  { file: 'app/benefits-of-fractional-cmo/page.tsx', route: '/benefits-of-fractional-cmo', name: 'Benefits' },
  { file: 'app/fractional-cmo-hourly-rate/page.tsx', route: '/fractional-cmo-hourly-rate', name: 'Hourly Rate' },
  { file: 'app/fractional-marketing-services/page.tsx', route: '/fractional-marketing-services', name: 'Marketing Services' },
  { file: 'app/fractional-cmo-responsibilities/page.tsx', route: '/fractional-cmo-responsibilities', name: 'Responsibilities' },
];

// Navigation structure
const navigation = {
  '/': ['/about', '/process', '/blog', '/privacy'],
  '/about': ['/'],
  '/blog': ['/'],
  '/process': ['/'],
  '/privacy': ['/'],
};

function extractLinks(content) {
  // Match Next.js Link components and regular anchor tags
  const linkMatches = content.match(/href=["']([^"']+)["']/gi) || [];
  const internalLinks = linkMatches
    .map(match => match.replace(/href=["']/, '').replace(/["']$/, ''))
    .filter(link => link.startsWith('/') && !link.startsWith('/api') && !link.startsWith('/_next'))
    .map(link => link.split('#')[0]) // Remove hash fragments
    .filter((link, index, arr) => arr.indexOf(link) === index); // Unique only
  
  return internalLinks;
}

function findReachability(startRoute, targetRoute, visited = new Set(), depth = 0) {
  if (depth > 3) return null; // Max 3 clicks
  if (startRoute === targetRoute) return [];
  
  visited.add(startRoute);
  
  const pageInfo = pages.find(p => p.route === startRoute);
  if (!pageInfo) return null;
  
  const filePath = path.join(process.cwd(), pageInfo.file);
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) return null;
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const links = extractLinks(content);
  
  // Also check footer and header navigation
  const footerPath = path.join(process.cwd(), 'components/layout/site-footer.tsx');
  const headerPath = path.join(process.cwd(), 'components/Navbar.tsx');
  
  let allLinks = [...links];
  
  if (fs.existsSync(footerPath)) {
    const footerContent = fs.readFileSync(footerPath, 'utf-8');
    allLinks = [...allLinks, ...extractLinks(footerContent)];
  }
  
  if (fs.existsSync(headerPath)) {
    const headerContent = fs.readFileSync(headerPath, 'utf-8');
    allLinks = [...allLinks, ...extractLinks(headerContent)];
  }
  
  // Remove duplicates
  allLinks = [...new Set(allLinks)];
  
  for (const link of allLinks) {
    if (visited.has(link)) continue;
    
    if (link === targetRoute) {
      return [startRoute, link];
    }
    
    const path = findReachability(link, targetRoute, new Set(visited), depth + 1);
    if (path) {
      return [startRoute, ...path];
    }
  }
  
  return null;
}

// Check for "click here" and other non-descriptive anchor text
function checkAnchorText(content) {
  const badPatterns = [
    /click here/gi,
    /read more/gi,
    /here/gi,
    /link/gi,
  ];
  
  const issues = [];
  badPatterns.forEach(pattern => {
    const matches = content.match(pattern);
    if (matches) {
      issues.push(`Found "${matches[0]}" - use descriptive anchor text`);
    }
  });
  
  return issues;
}

const results = [];

pages.forEach(({ route, name }) => {
  const filePath = path.join(process.cwd(), pages.find(p => p.route === route)?.file || '');
  if (!fs.existsSync(filePath)) {
    results.push({ route, name, status: 'missing' });
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const links = extractLinks(content);
  const anchorIssues = checkAnchorText(content);
  
  // Check reachability from homepage
  const pathFromHome = findReachability('/', route);
  const clicksFromHome = pathFromHome ? pathFromHome.length - 1 : null;
  
  results.push({
    route,
    name,
    links: links.length,
    clicksFromHome,
    reachable: clicksFromHome !== null && clicksFromHome <= 3,
    anchorIssues,
  });
});

// Print results
console.log('\n=== INTERNAL LINKING AUDIT RESULTS ===\n');
results.forEach(result => {
  if (result.status === 'missing') {
    console.log(`❌ ${result.route}: File not found`);
    return;
  }
  
  const status = result.reachable ? '✓' : '✗';
  console.log(`${status} ${result.name} (${result.route})`);
  console.log(`   Internal links: ${result.links}`);
  console.log(`   Clicks from homepage: ${result.clicksFromHome !== null ? result.clicksFromHome : 'UNREACHABLE'}`);
  if (result.anchorIssues.length > 0) {
    console.log(`   ⚠ Anchor text issues: ${result.anchorIssues.join(', ')}`);
  }
  console.log('');
});

// Summary
const reachable = results.filter(r => r.reachable).length;
const unreachable = results.filter(r => !r.reachable && r.status !== 'missing').length;
const anchorIssues = results.filter(r => r.anchorIssues && r.anchorIssues.length > 0).length;

console.log('\n=== SUMMARY ===');
console.log(`Total pages: ${results.length}`);
console.log(`Reachable from homepage (≤3 clicks): ${reachable}`);
console.log(`Unreachable: ${unreachable}`);
console.log(`Pages with anchor text issues: ${anchorIssues}`);

if (unreachable === 0 && anchorIssues === 0) {
  console.log('\n✓ All pages are reachable and use descriptive anchor text!');
  process.exit(0);
} else {
  console.log('\n⚠ Some pages need internal linking improvements.');
  process.exit(1);
}

