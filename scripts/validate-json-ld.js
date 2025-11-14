#!/usr/bin/env node
/**
 * JSON-LD Schema Validation Script
 * Checks for:
 * - Valid JSON syntax
 * - Required fields for common schemas
 * - HTML tags in string fields
 * - Double quotes (not single quotes)
 */

const fs = require('fs');
const path = require('path');

const pages = [
  { file: 'app/page.tsx', route: '/' },
  { file: 'app/about/page.tsx', route: '/about' },
  { file: 'app/blog/page.tsx', route: '/blog' },
  { file: 'app/process/page.tsx', route: '/process' },
  { file: 'app/fractional-cmo-services/page.tsx', route: '/fractional-cmo-services' },
];

const results = [];

function extractJSONLD(content) {
  // Match both <script type="application/ld+json"> and dangerouslySetInnerHTML patterns
  const scriptMatches = content.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) || [];
  const dangerouslyMatches = content.match(/dangerouslySetInnerHTML=\{\{\s*__html:\s*JSON\.stringify\(([^}]+)\)\s*\}\}/gi) || [];
  
  const results = [];
  
  // Extract from script tags
  scriptMatches.forEach(match => {
    const jsonMatch = match.match(/<script[^>]*>([\s\S]*?)<\/script>/i);
    if (jsonMatch) {
      results.push(jsonMatch[1].trim());
    }
  });
  
  // Extract from dangerouslySetInnerHTML (we'll need to parse the actual JSON.stringify call)
  // This is more complex - we'll look for the schema creation functions
  const schemaMatches = content.match(/(createServiceSchema|createWebPageSchema|createPersonSchema|createOrganizationSchema|createBreadcrumbListSchema)\([\s\S]*?\)/gi) || [];
  // For now, we'll validate that these exist and are properly formatted
  schemaMatches.forEach(match => {
    // Check for proper JSON.stringify usage
    if (match.includes('JSON.stringify')) {
      results.push(match); // This will be validated as a code pattern
    }
  });
  
  return results;
}

function validateJSONLD(jsonString, route) {
  const issues = [];
  
  // Check for single quotes (should use double quotes)
  if (jsonString.includes("'")) {
    // But allow escaped quotes
    const singleQuoteMatches = jsonString.match(/(?<!\\)'/g);
    if (singleQuoteMatches && singleQuoteMatches.length > 0) {
      issues.push('Contains single quotes - should use double quotes');
    }
  }
  
  // Check for HTML tags in strings
  const htmlTagPattern = /<[^>]+>/g;
  if (htmlTagPattern.test(jsonString)) {
    issues.push('Contains HTML tags - remove HTML from JSON-LD strings');
  }
  
  // Try to parse JSON
  try {
    const parsed = JSON.parse(jsonString);
    
    // Validate required fields for common schemas
    if (parsed['@type']) {
      const type = parsed['@type'];
      
      if (type === 'Organization' || type === 'https://schema.org/Organization') {
        if (!parsed.name) issues.push('Organization schema missing "name"');
        if (!parsed.url) issues.push('Organization schema missing "url"');
      }
      
      if (type === 'Service' || type === 'https://schema.org/Service') {
        if (!parsed.name) issues.push('Service schema missing "name"');
        if (!parsed.provider) issues.push('Service schema missing "provider"');
      }
      
      if (type === 'Person' || type === 'https://schema.org/Person') {
        if (!parsed.name) issues.push('Person schema missing "name"');
      }
      
      if (type === 'BreadcrumbList' || type === 'https://schema.org/BreadcrumbList') {
        if (!parsed.itemListElement || !Array.isArray(parsed.itemListElement)) {
          issues.push('BreadcrumbList schema missing "itemListElement" array');
        }
      }
    }
  } catch (error) {
    issues.push(`Invalid JSON: ${error.message}`);
  }
  
  return issues;
}

pages.forEach(({ file, route }) => {
  const filePath = path.join(process.cwd(), file);
  if (!fs.existsSync(filePath)) {
    results.push({ route, status: 'missing' });
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const jsonldBlocks = extractJSONLD(content);
  
  if (jsonldBlocks.length === 0) {
    results.push({ route, schemas: 0, issues: [] });
    return;
  }
  
  const allIssues = [];
  jsonldBlocks.forEach((jsonString, index) => {
    const issues = validateJSONLD(jsonString, route);
    if (issues.length > 0) {
      allIssues.push({ block: index + 1, issues });
    }
  });
  
  results.push({
    route,
    schemas: jsonldBlocks.length,
    issues: allIssues,
  });
});

// Print results
console.log('\n=== JSON-LD VALIDATION RESULTS ===\n');
results.forEach(result => {
  if (result.status === 'missing') {
    console.log(`❌ ${result.route}: File not found`);
    return;
  }
  
  const status = result.issues.length === 0 ? '✓' : '⚠';
  console.log(`${status} ${result.route}`);
  console.log(`   JSON-LD schemas: ${result.schemas}`);
  if (result.issues.length > 0) {
    result.issues.forEach(({ block, issues }) => {
      console.log(`   Block ${block} issues:`);
      issues.forEach(issue => console.log(`     - ${issue}`));
    });
  } else {
    console.log(`   ✓ All schemas valid`);
  }
  console.log('');
});

// Summary
const perfect = results.filter(r => r.issues && r.issues.length === 0).length;
const totalIssues = results.reduce((sum, r) => sum + (r.issues ? r.issues.length : 0), 0);

console.log('\n=== SUMMARY ===');
console.log(`Total pages checked: ${results.length}`);
console.log(`Pages with valid schemas: ${perfect}`);
console.log(`Total schema blocks with issues: ${totalIssues}`);

if (totalIssues === 0) {
  console.log('\n✓ All JSON-LD schemas are valid!');
  process.exit(0);
} else {
  console.log('\n⚠ Some JSON-LD schemas need fixes.');
  process.exit(1);
}

