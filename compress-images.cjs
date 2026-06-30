// Image compression script using sharp (already installed via pnpm)
const path = require('path');
const fs = require('fs');

const publicDir = path.join(__dirname, 'client', 'public');

// Files to compress and their target formats
const targets = [
  { src: 'men_women_img.png', dest: 'men_women_img.webp', quality: 80 },
  { src: 'everonix-hero-bg.png', dest: 'everonix-hero-bg.webp', quality: 75 },
  { src: 'hero_image1.jpg', dest: 'hero_image1.webp', quality: 80 },
  { src: 'industries/bfsi.png', dest: 'industries/bfsi.webp', quality: 80 },
  { src: 'industries/healthcare.png', dest: 'industries/healthcare.webp', quality: 80 },
  { src: 'industries/logistics.png', dest: 'industries/logistics.webp', quality: 80 },
  { src: 'industries/manufacturing.png', dest: 'industries/manufacturing.webp', quality: 80 },
  { src: 'industries/retail.png', dest: 'industries/retail.webp', quality: 80 },
  { src: 'industries/technology.png', dest: 'industries/technology.webp', quality: 80 },
];

async function compress() {
  const sharp = require('sharp');
  
  for (const t of targets) {
    const srcPath = path.join(publicDir, t.src);
    const destPath = path.join(publicDir, t.dest);
    
    if (!fs.existsSync(srcPath)) {
      console.log(`Skip: ${t.src} not found`);
      continue;
    }
    
    const srcSize = (fs.statSync(srcPath).size / 1024).toFixed(1);
    
    await sharp(srcPath)
      .webp({ quality: t.quality })
      .toFile(destPath);
    
    const destSize = (fs.statSync(destPath).size / 1024).toFixed(1);
    console.log(`OK ${t.src}: ${srcSize}KB -> ${destSize}KB (WebP)`);
  }
  
  console.log('\nDone! Update src references to use .webp files.');
}

compress().catch(console.error);
