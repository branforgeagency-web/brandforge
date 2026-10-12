import sharp from 'sharp';
import path from 'path';

const artifacts = [
  { name: '3d-paid-media.png', src: 'paid_media_3d_1791545142454.jpg' },
  { name: '3d-web-foundry.png', src: 'web_foundry_3d_1791545170002.jpg' },
  { name: '3d-viral-social.png', src: 'viral_social_3d_1791545197295.jpg' },
  { name: '3d-influencer.png', src: 'influencer_network_3d_1791545221403.jpg' },
  { name: '3d-content-smithy.png', src: 'content_smithy_3d_1791545247528.jpg' },
  { name: '3d-inbox-edge.png', src: 'inbox_edge_3d_1791545275577.jpg' },
  { name: '3d-brand-anvil.png', src: 'brand_anvil_3d_1791545307738.jpg' },
  { name: '3d-visual-id.png', src: 'visual_id_3d_1791545334991.jpg' },
  { name: '3d-commercial-video.png', src: 'commercial_video_3d_1791545370439.jpg' },
  { name: '3d-cro-revenue.png', src: 'cro_revenue_3d_1791545402827.jpg' },
  { name: '3d-reputation-shield.png', src: 'reputation_shield_3d_1791545430841.jpg' },
];

const brainDir = 'C:/Users/kowsi/.gemini/antigravity/brain/a9edaa1f-65a9-40d2-b71d-c8c4b4496751';

async function processAll() {
  for (const item of artifacts) {
    const inputPath = path.join(brainDir, item.src);
    const outputPath = path.resolve('public', item.name);

    const { data, info } = await sharp(inputPath)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const { width, height, channels } = info;
    const outBuffer = Buffer.alloc(width * height * 4);

    for (let i = 0; i < data.length; i += channels) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      const lum = 0.299 * r + 0.587 * g + 0.114 * b;
      let alpha = 255;

      // Pure white/off-white background removal
      if (r > 240 && g > 240 && b > 240) {
        alpha = 0;
      } else if (r > 225 && g > 225 && b > 225) {
        const minVal = Math.min(r, g, b);
        alpha = Math.round(255 * (1 - (minVal - 225) / (255 - 225)));
      }

      const outIdx = (i / channels) * 4;
      outBuffer[outIdx] = r;
      outBuffer[outIdx + 1] = g;
      outBuffer[outIdx + 2] = b;
      outBuffer[outIdx + 3] = alpha;
    }

    await sharp(outBuffer, {
      raw: {
        width,
        height,
        channels: 4,
      },
    })
      .png()
      .toFile(outputPath);

    console.log(`Processed ${item.name} (${width}x${height})`);
  }
}

processAll().catch(console.error);
