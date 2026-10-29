const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

/**
 * Converts a white-background JPG/PNG to a clean transparent PNG,
 * antialiasing edges and trimming transparent margins.
 */
async function processToTransparent(inputPath, outputPath, targetHeight = 90) {
  if (!fs.existsSync(inputPath)) {
    console.warn(`Input file does not exist: ${inputPath}`);
    return false;
  }

  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const out = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const r = data[i * 3];
    const g = data[i * 3 + 1];
    const b = data[i * 3 + 2];

    const minC = Math.min(r, g, b);

    if (minC > 248) {
      // Pure or near pure white -> fully transparent
      out[i * 4] = r;
      out[i * 4 + 1] = g;
      out[i * 4 + 2] = b;
      out[i * 4 + 3] = 0;
    } else if (minC > 210) {
      // Anti-aliased boundary
      const alpha = Math.round(255 * (1 - (minC - 210) / (248 - 210)));
      const factor = alpha / 255;
      const dematR = Math.max(0, Math.min(255, Math.round((r - 255 * (1 - factor)) / factor)));
      const dematG = Math.max(0, Math.min(255, Math.round((g - 255 * (1 - factor)) / factor)));
      const dematB = Math.max(0, Math.min(255, Math.round((b - 255 * (1 - factor)) / factor)));
      out[i * 4] = dematR;
      out[i * 4 + 1] = dematG;
      out[i * 4 + 2] = dematB;
      out[i * 4 + 3] = alpha;
    } else {
      out[i * 4] = r;
      out[i * 4 + 1] = g;
      out[i * 4 + 2] = b;
      out[i * 4 + 3] = 255;
    }
  }

  await sharp(out, { raw: { width, height, channels: 4 } })
    .trim()
    .resize({ height: targetHeight })
    .png()
    .toFile(outputPath);

  const meta = await sharp(outputPath).metadata();
  console.log(`Saved: ${outputPath} (${meta.width}x${meta.height})`);
  return true;
}

module.exports = { processToTransparent };

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length >= 2) {
    processToTransparent(args[0], args[1]);
  }
}
