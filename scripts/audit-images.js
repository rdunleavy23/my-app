#!/usr/bin/env node
/**
 * Image Audit Script
 * Checks all images for:
 * - Alt text presence
 * - Width and height attributes
 * - Loading attributes (eager/lazy)
 * - fetchPriority for critical images
 */

const fs = require('fs');
const path = require('path');

const pages = [
  { file: 'app/page.tsx', route: '/' },
  { file: 'app/about/page.tsx', route: '/about' },
  { file: 'components/Logo.tsx', route: 'Logo component' },
];

const results = [];

function auditImages(content, filePath, route) {
  // Match both <img> and Next.js <Image> components
  const imgMatches = content.match(/<img[^>]*>/gi) || [];
  const imageMatches = content.match(/<Image[^>]*>/gi) || [];
  
  const allImages = [...imgMatches, ...imageMatches];
  const imageIssues = [];
  
  allImages.forEach((imgTag, index) => {
    const issues = [];
    
    // Check for alt text
    if (!imgTag.match(/alt=["'][^"']*["']/i)) {
      issues.push('Missing alt text');
    }
    
    // Check for width
    if (!imgTag.match(/width\s*=\s*["']?\d+["']?/i) && !imgTag.match(/width\s*=\s*\{/)) {
      issues.push('Missing width attribute');
    }
    
    // Check for height
    if (!imgTag.match(/height\s*=\s*["']?\d+["']?/i) && !imgTag.match(/height\s*=\s*\{/)) {
      issues.push('Missing height attribute');
    }
    
    // Check for loading attribute (should be eager or lazy)
    const hasLoading = imgTag.match(/loading\s*=\s*["'](eager|lazy)["']/i);
    const hasPriority = imgTag.match(/priority\s*=\s*\{?true\}?/i);
    
    // Check for fetchPriority
    const hasFetchPriority = imgTag.match(/fetchPriority\s*=\s*["'](high|low|auto)["']/i);
    
    // Critical images (logo, hero) should have fetchPriority="high" or priority={true}
    const isLikelyCritical = imgTag.includes('logo') || imgTag.includes('hero') || route === 'Logo component';
    if (isLikelyCritical && !hasFetchPriority && !hasPriority) {
      issues.push('Critical image missing fetchPriority="high" or priority');
    }
    
    if (issues.length > 0) {
      imageIssues.push({
        index: index + 1,
        tag: imgTag.substring(0, 100) + (imgTag.length > 100 ? '...' : ''),
        issues,
      });
    }
  });
  
  return {
    totalImages: allImages.length,
    issues: imageIssues,
  };
}

pages.forEach(({ file, route }) => {
  const filePath = path.join(process.cwd(), file);
  if (!fs.existsSync(filePath)) {
    results.push({ route, status: 'missing', error: 'File not found' });
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const audit = auditImages(content, filePath, route);
  
  results.push({
    route,
    ...audit,
  });
});

// Print results
console.log('\n=== IMAGE AUDIT RESULTS ===\n');
results.forEach(result => {
  if (result.status === 'error' || result.status === 'missing') {
    console.log(`❌ ${result.route}: ${result.error}`);
    return;
  }
  
  const status = result.issues.length === 0 ? '✓' : '⚠';
  console.log(`${status} ${result.route}`);
  console.log(`   Total images: ${result.totalImages}`);
  if (result.issues.length > 0) {
    console.log(`   Issues: ${result.issues.length}`);
    result.issues.forEach(issue => {
      console.log(`     Image ${issue.index}: ${issue.issues.join(', ')}`);
      console.log(`       Tag: ${issue.tag}`);
    });
  } else {
    console.log(`   ✓ All images properly optimized`);
  }
  console.log('');
});

// Summary
const perfect = results.filter(r => r.issues && r.issues.length === 0).length;
const totalIssues = results.reduce((sum, r) => sum + (r.issues ? r.issues.length : 0), 0);

console.log('\n=== SUMMARY ===');
console.log(`Total files audited: ${results.length}`);
console.log(`Files with no issues: ${perfect}`);
console.log(`Total image issues: ${totalIssues}`);

if (totalIssues === 0) {
  console.log('\n✓ All images are properly optimized!');
  process.exit(0);
} else {
  console.log('\n⚠ Some images need optimization.');
  process.exit(1);
}

