const path = require('path');
const sharp = require(path.join(__dirname, '../node_modules/sharp'));

async function recolorAndMakeTransparent() {
  const inputPath = 'C:/Users/kowsi/.gemini/antigravity/brain/a9edaa1f-65a9-40d2-b71d-c8c4b4496751/.user_uploaded/media_1789990630592.png';
  
  // 1. First let's load raw pixels of original image
  const img = sharp(inputPath);
  const { data, info } = await img.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const width = info.width;
  const height = info.height;

  // Let's create an alpha mask for background removal
  // Background in this illustration is light grey/white or very faint grey shapes
  // The characters and megaphone have strong saturation or dark outlines
  
  // We want to remove:
  // - Pixels on the left where x < 35 and y > 200 (the black '?' mark)
  // - Pixels on bottom right where x > 345 and y > 335 (the '1.200 x 6' watermark box)
  
  // Also flood-fill from edges to find the light background
  const visited = new Uint8Array(width * height);
  const queue = [];

  function isBackground(x, y) {
    const idx = (y * width + x) * 4;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    
    // Background is light grey, off-white, or faint watermark circles
    // Typically r > 215, g > 215, b > 215 with low saturation
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const sat = max === 0 ? 0 : (max - min) / max;
    
    // If it's light grey/white and not saturated
    return (r > 200 && g > 200 && b > 200 && sat < 0.18);
  }

  // Seed boundary
  for (let x = 0; x < width; x++) {
    if (isBackground(x, 0)) { queue.push(x, 0); visited[0 * width + x] = 1; }
    if (isBackground(x, height - 1)) { queue.push(x, height - 1); visited[(height - 1) * width + x] = 1; }
  }
  for (let y = 0; y < height; y++) {
    if (isBackground(0, y)) { queue.push(0, y); visited[y * width + 0] = 1; }
    if (isBackground(width - 1, y)) { queue.push(width - 1, y); visited[y * width + (width - 1)] = 1; }
  }

  let head = 0;
  while (head < queue.length) {
    const x = queue[head++];
    const y = queue[head++];
    const idx = (y * width + x) * 4;
    data[idx + 3] = 0; // make transparent

    const neighbors = [
      [x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]
    ];
    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nPos = ny * width + nx;
        if (!visited[nPos] && isBackground(nx, ny)) {
          visited[nPos] = 1;
          queue.push(nx, ny);
        }
      }
    }
  }

  // Remove question mark on bottom-left and watermark on bottom-right
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      // Question mark on left
      if (x < 36 && y > 190) {
        data[idx + 3] = 0;
      }
      // Watermark box on bottom right
      if (x > 340 && y > 330) {
        data[idx + 3] = 0;
      }
    }
  }

  // Recolor orange pixels to BrandForge Red (#D2042D / #EF4136)
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] === 0) continue; // skip transparent
    
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Orange has high red, medium green (approx 60-160), low blue (< 100)
    // Red > Green and Green > Blue significantly
    if (r > 160 && g >= 40 && g <= 170 && b < 130 && (r - g) > 40 && (g - b) >= 0) {
      // It is orange! Convert to BrandForge crimson red (#D2042D / #EF4136)
      // BrandForge red has high Red, very low Green (~10-40), very low Blue (~20-50)
      const lightness = (r + g + b) / (3 * 255);
      
      data[i] = Math.min(255, Math.round(230 + lightness * 25)); // Deep red
      data[i + 1] = Math.round(15 + (g * 0.15)); // greatly reduce green
      data[i + 2] = Math.round(25 + (b * 0.2));  // cool crimson tint
    }
  }

  // Save intermediate transparent recolored image
  const recoloredBuffer = await sharp(data, {
    raw: { width, height, channels: 4 }
  }).png().toBuffer();

  // Now resize & composite onto a 1024x1024 transparent canvas, centered and crisp
  await sharp(recoloredBuffer)
    .resize(920, 800, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: 112,
      bottom: 112,
      left: 52,
      right: 52,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toFile(path.join(__dirname, '../public/banner-paid-media-illustration.png'));

  console.log('Successfully generated public/banner-paid-media-illustration.png');
}

recolorAndMakeTransparent().catch(console.error);
