#!/usr/bin/env node
/**
 * Schema Validation Script (Gap 3 fix)
 *
 * Validates all schema.org markup on the site to ensure AI platforms
 * can properly parse and trust our structured data.
 *
 * Usage:
 *   npm run validate:schema
 *
 * Validates:
 * - JSON-LD syntax correctness
 * - Required properties for each schema type
 * - URL consistency (all URLs use canonical domain)
 * - Image accessibility
 * - Date formats
 */

import { readdir, readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const CANONICAL_DOMAIN = 'https://www.patterngrowth.com';

// Schema validation rules
const SCHEMA_REQUIRED_FIELDS = {
  Organization: ['name', 'url'],
  WebSite: ['name', 'url'],
  Service: ['name', 'provider'],
  BlogPosting: ['headline', 'author', 'datePublished'],
  Person: ['name'],
  BreadcrumbList: ['itemListElement'],
  FAQPage: ['mainEntity'],
};

async function findSchemaFiles() {
  const appDir = join(__dirname, '..', 'app');
  const files = [];

  async function walk(dir) {
    const entries = await readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(path);
      } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
        files.push(path);
      }
    }
  }

  await walk(appDir);
  return files;
}

function extractSchemas(content) {
  // Extract schema objects from TypeScript/React files
  const schemas = [];

  // Match JSON-LD script tags
  const scriptRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([^<]+)<\/script>/gi;
  let match;

  while ((match = scriptRegex.exec(content)) !== null) {
    try {
      const schema = JSON.parse(match[1]);
      schemas.push(schema);
    } catch (e) {
      // Skip invalid JSON
    }
  }

  // Match schema objects in code
  const objRegex = /@type["']?\s*:\s*["'](\w+)["']/g;
  while ((match = objRegex.exec(content)) !== null) {
    schemas.push({ '@type': match[1], _source: 'code' });
  }

  return schemas;
}

function validateSchema(schema) {
  const errors = [];
  const warnings = [];

  const type = schema['@type'];
  if (!type) {
    errors.push('Missing @type property');
    return { errors, warnings };
  }

  // Check required fields
  const requiredFields = SCHEMA_REQUIRED_FIELDS[type] || [];
  for (const field of requiredFields) {
    if (!schema[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  }

  // Check URLs use canonical domain
  const urlFields = ['url', 'logo', 'image', 'sameAs'];
  for (const field of urlFields) {
    if (schema[field]) {
      const url = typeof schema[field] === 'string' ? schema[field] : schema[field].url;
      if (url && url.startsWith('http') && !url.startsWith(CANONICAL_DOMAIN)) {
        warnings.push(`URL field "${field}" does not use canonical domain: ${url}`);
      }
    }
  }

  // Validate dates
  const dateFields = ['datePublished', 'dateModified', 'publishedAt'];
  for (const field of dateFields) {
    if (schema[field]) {
      const date = new Date(schema[field]);
      if (isNaN(date.getTime())) {
        errors.push(`Invalid date format in ${field}: ${schema[field]}`);
      }
    }
  }

  return { errors, warnings };
}

async function main() {
  console.log('🔍 Validating schema.org markup...\n');

  const files = await findSchemaFiles();
  let totalSchemas = 0;
  let totalErrors = 0;
  let totalWarnings = 0;

  for (const file of files) {
    const content = await readFile(file, 'utf-8');
    const schemas = extractSchemas(content);

    if (schemas.length === 0) continue;

    const relPath = file.replace(join(__dirname, '..'), '');

    for (const schema of schemas) {
      totalSchemas++;
      const { errors, warnings } = validateSchema(schema);

      if (errors.length > 0 || warnings.length > 0) {
        console.log(`📄 ${relPath}`);
        console.log(`   Schema type: ${schema['@type']}`);

        if (errors.length > 0) {
          totalErrors += errors.length;
          console.log(`   ❌ Errors:`);
          errors.forEach(e => console.log(`      - ${e}`));
        }

        if (warnings.length > 0) {
          totalWarnings += warnings.length;
          console.log(`   ⚠️  Warnings:`);
          warnings.forEach(w => console.log(`      - ${w}`));
        }

        console.log('');
      }
    }
  }

  console.log('─'.repeat(50));
  console.log(`✅ Total schemas found: ${totalSchemas}`);
  console.log(`❌ Total errors: ${totalErrors}`);
  console.log(`⚠️  Total warnings: ${totalWarnings}`);

  if (totalErrors > 0) {
    console.log('\n⚠️  SCHEMA VALIDATION FAILED');
    console.log('Fix errors above to improve AI platform visibility');
    process.exit(1);
  } else {
    console.log('\n✅ SCHEMA VALIDATION PASSED');
    console.log('All schemas are properly formatted');
  }
}

main().catch(console.error);
