import sharp from 'sharp';
import path from 'path';

async function processSketch(inputPath, outputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log(`Processing ${inputPath} (${width}x${height})...`);

  const outBuffer = Buffer.alloc(width * height * 4);

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const lum = 0.299 * r + 0.587 * g + 0.114 * b;

    let alpha = 0;
    if (lum >= 235) {
      alpha = 0;
    } else if (lum <= 45) {
      alpha = 255;
    } else {
      const ratio = (lum - 45) / (235 - 45);
      alpha = Math.round(255 * Math.pow(1 - ratio, 1.25));
    }

    const outIdx = (i / channels) * 4;
    outBuffer[outIdx] = 10;     // R: #0A0A0C
    outBuffer[outIdx + 1] = 10; // G
    outBuffer[outIdx + 2] = 12; // B
    outBuffer[outIdx + 3] = alpha;
  }

  await sharp(outBuffer, {
    raw: { width, height, channels: 4 }
  })
  .png()
  .toFile(outputPath);

  console.log(`Saved: ${outputPath}`);
}

async function main() {
  const dir = 'C:/Users/kowsi/.gemini/antigravity/brain/a9edaa1f-65a9-40d2-b71d-c8c4b4496751';
  const mappings = [
    ['sketch_paid_media_doodle_1791786842111.jpg', 'public/sketch-paid-media-transparent.png'],
    ['sketch_web_foundry_doodle_1791786862026.jpg', 'public/sketch-web-foundry-transparent.png'],
    ['sketch_viral_social_doodle_1791786644433.jpg', 'public/sketch-viral-social-transparent.png'],
    ['sketch_influencer_doodle_1791786697086.jpg', 'public/sketch-influencer-network-transparent.png'],
    ['sketch_content_smithy_doodle_1791786708238.jpg', 'public/sketch-content-smithy-transparent.png'],
    ['sketch_inbox_edge_doodle_1791786723401.jpg', 'public/sketch-inbox-edge-transparent.png'],
    ['sketch_brand_anvil_doodle_1791786735441.jpg', 'public/sketch-brand-anvil-transparent.png'],
    ['sketch_visual_id_doodle_1791786763243.jpg', 'public/sketch-visual-id-transparent.png'],
    ['sketch_commercial_video_doodle_1791786799110.jpg', 'public/sketch-commercial-video-transparent.png'],
    ['sketch_cro_revenue_doodle_1791786814752.jpg', 'public/sketch-cro-revenue-transparent.png'],
    ['sketch_reputation_shield_doodle_1791786828556.jpg', 'public/sketch-reputation-shield-transparent.png'],
  ];

  for (const [srcFile, destRel] of mappings) {
    await processSketch(
      `${dir}/${srcFile}`,
      path.resolve(destRel)
    );
  }
}

main().catch(console.error);
