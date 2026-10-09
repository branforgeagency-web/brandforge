import sharp from 'sharp';
import path from 'path';

async function makeTransparentFromLight() {
  const inputPath = 'C:/Users/kowsi/.gemini/antigravity/brain/a9edaa1f-65a9-40d2-b71d-c8c4b4496751/sketch_diagram_light_preview.png';
  const outputPath = path.resolve('public/seo-sketch-diagram-transparent.png');
  const directPath = path.resolve('public/seo-sketch-diagram.png');

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log(`Input size: ${width}x${height}, channels: ${channels}`);

  const outBuffer = Buffer.alloc(width * height * 4);
  let transparentCount = 0;
  let inkCount = 0;

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // Compute luminance (0 = black ink, 255 = white paper)
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;

    let alpha = 0;
    if (lum >= 235) {
      // Pure white paper -> fully transparent
      alpha = 0;
      transparentCount++;
    } else if (lum <= 40) {
      // Solid black ink -> fully opaque
      alpha = 255;
      inkCount++;
    } else {
      // Smooth anti-aliased gradient for clean edges
      const ratio = (lum - 40) / (235 - 40);
      alpha = Math.round(255 * Math.pow(1 - ratio, 1.2));
    }

    const outIdx = (i / channels) * 4;
    outBuffer[outIdx] = 10;     // R: #0A0A0C
    outBuffer[outIdx + 1] = 10; // G
    outBuffer[outIdx + 2] = 12; // B
    outBuffer[outIdx + 3] = alpha; // Alpha
  }

  console.log(`Transparent pixels: ${transparentCount}, Solid ink: ${inkCount}`);

  await sharp(outBuffer, {
    raw: {
      width,
      height,
      channels: 4
    }
  })
  .png()
  .toFile(outputPath);

  await sharp(outBuffer, {
    raw: {
      width,
      height,
      channels: 4
    }
  })
  .png()
  .toFile(directPath);

  console.log(`Successfully written to ${outputPath} and ${directPath}`);
}

makeTransparentFromLight().catch(console.error);
