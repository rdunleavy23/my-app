#!/usr/bin/env node

/**
 * Generate a proper multi-size ICO file from existing PNG logo files
 */

const fs = require('fs');
const path = require('path');
const toIco = require('to-ico');

async function generateFavicon() {
  const sizes = [16, 32, 48];
  const images = [];

  console.log('Reading PNG logo files...');

  // Read the PNG files for each size
  for (const size of sizes) {
    const pngPath = path.join(__dirname, '..', 'public', `patterngrowth-logo-${size}.png`);
    
    if (!fs.existsSync(pngPath)) {
      console.error(`Error: ${pngPath} not found`);
      process.exit(1);
    }

    const image = fs.readFileSync(pngPath);
    images.push(image);
    console.log(`✓ Loaded ${size}x${size} PNG`);
  }

  console.log('\nGenerating ICO file with multiple sizes...');

  try {
    // Create ICO file with all sizes
    const ico = await toIco(images);
    
    // Save to app/favicon.ico
    const outputPath = path.join(__dirname, '..', 'app', 'favicon.ico');
    fs.writeFileSync(outputPath, ico);
    
    console.log(`✓ Created ${outputPath}`);
    console.log(`✓ ICO file size: ${(ico.length / 1024).toFixed(2)} KB`);
    console.log('\nFavicon generation complete!');
  } catch (error) {
    console.error('Error generating ICO:', error);
    process.exit(1);
  }
}

generateFavicon();

