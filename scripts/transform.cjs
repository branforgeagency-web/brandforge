const path = require('path');
const sharp = require(path.join(__dirname, '../node_modules/sharp'));

async function transformReference() {
  const inputPath = 'C:/Users/kowsi/.gemini/antigravity/brain/a9edaa1f-65a9-40d2-b71d-c8c4b4496751/.user_uploaded/media_1789989986399.png';
  
  // Resize reference image cleanly
  const resized = await sharp(inputPath)
    .resize(840, 840, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();
    
  // Create obsidian dark backdrop with BrandForge red radial glow
  const svgGlow = Buffer.from(`
    <svg width="1024" height="1024" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      <rect width="1024" height="1024" fill="#030305" rx="36"/>
      <circle cx="512" cy="512" r="460" fill="url(#redHalo)" />
      <circle cx="512" cy="512" r="280" fill="url(#coreGlow)" />
      <defs>
        <radialGradient id="redHalo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#D2042D" stop-opacity="0.38" />
          <stop offset="60%" stop-color="#800010" stop-opacity="0.14" />
          <stop offset="100%" stop-color="#030305" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#EF4136" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#D2042D" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  `);
  
  await sharp(svgGlow)
    .composite([{ input: resized, top: 92, left: 92 }])
    .png()
    .toFile(path.join(__dirname, '../public/paid-media-ref-brandforge.png'));
    
  console.log('Successfully created public/paid-media-ref-brandforge.png');
}

transformReference().catch(console.error);
