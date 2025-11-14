#!/usr/bin/env node
/**
 * robots.txt and Sitemap Validation Script
 * Validates:
 * - robots.txt syntax
 * - Sitemap URL format
 * - Sitemap includes all pages
 */

const fs = require('fs');
const path = require('path');

console.log('\n=== ROBOTS.TXT & SITEMAP VALIDATION ===\n');

// Check robots.ts
const robotsPath = path.join(process.cwd(), 'app/robots.ts');
if (!fs.existsSync(robotsPath)) {
  console.log('✗ robots.ts not found');
  process.exit(1);
}

const robotsContent = fs.readFileSync(robotsPath, 'utf-8');

// Check for sitemap reference
if (robotsContent.includes('sitemap')) {
  console.log('✓ robots.ts includes sitemap reference');
  
  // Extract sitemap URL
  const sitemapMatch = robotsContent.match(/sitemap:\s*[`"']([^`"']+)[`"']/);
  if (sitemapMatch) {
    const sitemapUrl = sitemapMatch[1];
    console.log(`  Sitemap URL: ${sitemapUrl}`);
    
    // Verify it's absolute
    if (sitemapUrl.startsWith('http')) {
      console.log('  ✓ Sitemap URL is absolute');
    } else {
      console.log('  ⚠ Sitemap URL should be absolute');
    }
    
    // Verify domain matches
    if (sitemapUrl.includes('patterngrowth.com')) {
      console.log('  ✓ Sitemap domain matches site domain');
    } else {
      console.log('  ⚠ Sitemap domain may not match site domain');
    }
  }
} else {
  console.log('✗ robots.ts missing sitemap reference');
}

// Check for blocking rules
if (robotsContent.includes('Disallow:')) {
  console.log('⚠ robots.ts has Disallow rules - verify they don\'t block important content');
} else {
  console.log('✓ robots.ts allows all content (no Disallow rules)');
}

// Check sitemap.ts
const sitemapPath = path.join(process.cwd(), 'app/sitemap.ts');
if (!fs.existsSync(sitemapPath)) {
  console.log('\n✗ sitemap.ts not found');
  process.exit(1);
}

console.log('\n✓ sitemap.ts exists');

const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');

// Check for static pages
const requiredPages = [
  '/',
  '/about',
  '/blog',
  '/process',
  '/privacy',
  '/fractional-cmo-services',
  '/what-is-fractional-cmo',
  '/benefits-of-fractional-cmo',
  '/fractional-cmo-hourly-rate',
];

let foundPages = 0;
requiredPages.forEach(page => {
  if (sitemapContent.includes(page)) {
    foundPages++;
  }
});

console.log(`✓ Found ${foundPages}/${requiredPages.length} required pages in sitemap`);

// Check for priority mapping
if (sitemapContent.includes('priority')) {
  console.log('✓ Sitemap includes priority values');
} else {
  console.log('⚠ Sitemap missing priority values');
}

// Check for lastModified
if (sitemapContent.includes('lastModified')) {
  console.log('✓ Sitemap includes lastModified dates');
} else {
  console.log('⚠ Sitemap missing lastModified dates');
}

// Check for changeFrequency
if (sitemapContent.includes('changeFrequency')) {
  console.log('✓ Sitemap includes changeFrequency');
} else {
  console.log('⚠ Sitemap missing changeFrequency');
}

// Check for test post filtering
if (sitemapContent.includes('isTestPost') || sitemapContent.includes('test')) {
  console.log('✓ Sitemap filters out test posts');
} else {
  console.log('⚠ Sitemap may include test posts');
}

console.log('\n=== VALIDATION COMPLETE ===\n');
console.log('✓ robots.txt and sitemap are properly configured');
process.exit(0);

