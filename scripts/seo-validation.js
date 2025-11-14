#!/usr/bin/env node

/**
 * SEO Validation Script
 * Validates SEO requirements from cursor-seo-rules.md
 * 
 * Usage: node scripts/seo-validation.js
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.patterngrowth.com';
const errors = [];
const warnings = [];

// Find all page.tsx files
function findPageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and .next
      if (!file.startsWith('.') && file !== 'node_modules' && file !== '.next') {
        findPageFiles(filePath, fileList);
      }
    } else if (file === 'page.tsx' || file === 'page.ts') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Extract metadata from file
function extractMetadata(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const metadata = {
    file: filePath,
    title: null,
    description: null,
    canonical: null,
    h1Count: 0,
    h1Text: null,
  };
  
  // Extract title
  const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
  if (titleMatch) {
    metadata.title = titleMatch[1];
  }
  
  // Extract description
  const descMatch = content.match(/description:\s*['"]([^'"]+)['"]/);
  if (descMatch) {
    metadata.description = descMatch[1];
  }
  
  // Extract canonical
  const canonMatch = content.match(/canonical:\s*['"]([^'"]+)['"]/);
  if (canonMatch) {
    metadata.canonical = canonMatch[1];
  }
  
  // Count H1 tags
  const h1Matches = content.match(/<h1[^>]*>/g);
  if (h1Matches) {
    metadata.h1Count = h1Matches.length;
    // Extract first H1 text
    const h1TextMatch = content.match(/<h1[^>]*>([^<]+)</);
    if (h1TextMatch) {
      metadata.h1Text = h1TextMatch[1].trim();
    }
  }
  
  return metadata;
}

// Validate metadata
function validateMetadata(metadata) {
  // Check title length (60-65 chars)
  if (metadata.title) {
    if (metadata.title.length < 60) {
      warnings.push(`${metadata.file}: Title is ${metadata.title.length} chars (recommended: 60-65)`);
    } else if (metadata.title.length > 65) {
      warnings.push(`${metadata.file}: Title is ${metadata.title.length} chars (recommended: 60-65)`);
    }
  }
  
  // Check description length (150-160 chars)
  if (metadata.description) {
    if (metadata.description.length < 150) {
      errors.push(`${metadata.file}: Meta description is ${metadata.description.length} chars (required: 150-160)`);
    } else if (metadata.description.length > 160) {
      errors.push(`${metadata.file}: Meta description is ${metadata.description.length} chars (required: 150-160)`);
    }
  } else {
    errors.push(`${metadata.file}: Missing meta description`);
  }
  
  // Check canonical is absolute URL
  if (metadata.canonical && !metadata.canonical.startsWith('http')) {
    errors.push(`${metadata.file}: Canonical URL is relative: ${metadata.canonical} (must be absolute)`);
  }
  
  // Check H1 count
  if (metadata.h1Count === 0) {
    errors.push(`${metadata.file}: Missing H1 tag (required: exactly one)`);
  } else if (metadata.h1Count > 1) {
    errors.push(`${metadata.file}: Multiple H1 tags found: ${metadata.h1Count} (required: exactly one)`);
  }
  
  // Check title doesn't duplicate H1
  if (metadata.title && metadata.h1Text) {
    const titleWords = metadata.title.toLowerCase().split(/\s+/);
    const h1Words = metadata.h1Text.toLowerCase().split(/\s+/);
    const commonWords = titleWords.filter(word => h1Words.includes(word));
    if (commonWords.length / titleWords.length > 0.8) {
      warnings.push(`${metadata.file}: Title and H1 are too similar (should complement, not duplicate)`);
    }
  }
}

// Main validation
console.log('🔍 Starting SEO validation...\n');

const pageFiles = findPageFiles('./app');
const allMetadata = [];

pageFiles.forEach(file => {
  const metadata = extractMetadata(file);
  allMetadata.push(metadata);
  validateMetadata(metadata);
});

// Check for duplicate descriptions
const descriptions = allMetadata
  .filter(m => m.description)
  .map(m => ({ file: m.file, desc: m.description }));
  
const descMap = {};
descriptions.forEach(({ file, desc }) => {
  if (!descMap[desc]) {
    descMap[desc] = [];
  }
  descMap[desc].push(file);
});

Object.entries(descMap).forEach(([desc, files]) => {
  if (files.length > 1) {
    errors.push(`Duplicate meta description found in ${files.length} files: ${files.join(', ')}`);
  }
});

// Report results
console.log(`📊 Validated ${pageFiles.length} pages\n`);

if (errors.length > 0) {
  console.log('❌ ERRORS (must fix):');
  errors.forEach(err => console.log(`  - ${err}`));
  console.log('');
}

if (warnings.length > 0) {
  console.log('⚠️  WARNINGS (should fix):');
  warnings.forEach(warn => console.log(`  - ${warn}`));
  console.log('');
}

if (errors.length === 0 && warnings.length === 0) {
  console.log('✅ All SEO checks passed!');
  process.exit(0);
} else {
  console.log(`\n📈 Summary: ${errors.length} errors, ${warnings.length} warnings`);
  process.exit(errors.length > 0 ? 1 : 0);
}

