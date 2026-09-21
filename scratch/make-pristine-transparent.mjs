import sharp from 'sharp';

async function process() {
  const inputPath = 'C:/Users/kowsi/.gemini/antigravity/brain/a9edaa1f-65a9-40d2-b71d-c8c4b4496751/seo_floating_3d_asset_1789982448375.jpg';
  const img = sharp(inputPath);
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  const out = Buffer.alloc(width * height * 4);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = y * width + x;
      const srcIdx = i * channels;
      const dstIdx = i * 4;
      let r = data[srcIdx];
      let g = data[srcIdx + 1];
      let b = data[srcIdx + 2];

      const maxVal = Math.max(r, g, b);
      const minVal = Math.min(r, g, b);
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;

      // Dark background removal
      // If pixel is in upper left quadrant (around lightbulb) and dark, remove dark starburst
      const isUpperLeft = x < 520 && y < 420;
      const darkThreshold = isUpperLeft ? 48 : 30;

      if (lum < darkThreshold && r < 55 && g < 55 && b < 65) {
        out[dstIdx] = 0;
        out[dstIdx + 1] = 0;
        out[dstIdx + 2] = 0;
        out[dstIdx + 3] = 0;
      } else if (maxVal <= 24) {
        out[dstIdx] = 0;
        out[dstIdx + 1] = 0;
        out[dstIdx + 2] = 0;
        out[dstIdx + 3] = 0;
      } else {
        out[dstIdx] = r;
        out[dstIdx + 1] = g;
        out[dstIdx + 2] = b;
        out[dstIdx + 3] = 255;
      }
    }
  }

  await sharp(out, {
    raw: {
      width,
      height,
      channels: 4
    }
  })
  .png()
  .toFile('public/seo-geo-floating-3d.png');

  console.log('Cleared starburst aura!');
}

process().catch(console.error);
