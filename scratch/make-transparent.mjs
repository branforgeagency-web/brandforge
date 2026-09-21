import sharp from 'sharp';

async function makeTransparent() {
  const img = sharp('public/seo-geo-banner-artwork.jpg');
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Create RGBA buffer
  const out = Buffer.alloc(width * height * 4);

  // Background color around corners is roughly (2, 5, 20)
  for (let i = 0; i < width * height; i++) {
    const srcIdx = i * channels;
    const dstIdx = i * 4;
    const r = data[srcIdx];
    const g = data[srcIdx + 1];
    const b = data[srcIdx + 2];

    out[dstIdx] = r;
    out[dstIdx + 1] = g;
    out[dstIdx + 2] = b;

    // Luminance and max color
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    const maxVal = Math.max(r, g, b);

    // Distance from dark background (0, 4, 18)
    const dist = Math.sqrt((r - 0)**2 + (g - 4)**2 + (b - 18)**2);

    // If it's dark background, make it transparent with smooth transition
    if (dist < 22 && lum < 18) {
      out[dstIdx + 3] = 0;
    } else if (dist < 42 && lum < 35) {
      const alpha = Math.min(255, Math.max(0, Math.round(((dist - 22) / 20) * 255)));
      out[dstIdx + 3] = alpha;
    } else {
      out[dstIdx + 3] = 255;
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
  .toFile('public/seo-geo-banner-artwork-transparent.png');

  console.log('Saved public/seo-geo-banner-artwork-transparent.png');
}

makeTransparent().catch(console.error);
