import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const SVG_SERVICES = [
  { slug: 'viral-social', file: 'mindmap-viral-social.svg' },
  { slug: 'influencer-network', file: 'mindmap-influencer-network.svg' },
  { slug: 'content-smithy', file: 'mindmap-content-smithy.svg' },
  { slug: 'inbox-edge', file: 'mindmap-inbox-edge.svg' },
  { slug: 'brand-anvil', file: 'mindmap-brand-anvil.svg' },
  { slug: 'visual-id', file: 'mindmap-visual-id.svg' },
  { slug: 'commercial-video', file: 'mindmap-commercial-video.svg' },
  { slug: 'cro-revenue', file: 'mindmap-cro-revenue.svg' },
  { slug: 'reputation-shield', file: 'mindmap-reputation-shield.svg' },
];

function transformSvgToLightSketch(svgContent) {
  let transformed = svgContent;

  // 1. Strip external @import to prevent unescaped XML entity parsing errors in librsvg
  transformed = transformed.replace(/@import[^;]+;/gi, '');

  // 2. Escape any raw '&' to '&amp;' for strict XML compliance
  transformed = transformed.replace(/&(?!(amp|lt|gt|quot|apos);)/g, '&amp;');

  // 3. Convert white fills to jet black ink (#0A0A0C)
  transformed = transformed.replace(/fill="#FFFFFF"/gi, 'fill="#0A0A0C"');
  transformed = transformed.replace(/fill="#FFF"/gi, 'fill="#0A0A0C"');
  transformed = transformed.replace(/fill: #FFFFFF/gi, 'fill: #0A0A0C');
  transformed = transformed.replace(/fill: #FFF/gi, 'fill: #0A0A0C');

  // 4. Convert white strokes to jet black ink (#0A0A0C)
  transformed = transformed.replace(/stroke="#FFFFFF"/gi, 'stroke="#0A0A0C"');
  transformed = transformed.replace(/stroke="#FFF"/gi, 'stroke="#0A0A0C"');
  transformed = transformed.replace(/stroke: #FFFFFF/gi, 'stroke: #0A0A0C');

  // 5. Convert semi-transparent white strokes & fills to semi-transparent black ink
  transformed = transformed.replace(/rgba\(255,\s*255,\s*255,\s*([0-9.]+)\)/gi, (match, p1) => {
    return `rgba(10, 10, 12, ${p1})`;
  });
  transformed = transformed.replace(/rgba\(255,255,255,([0-9.]+)\)/gi, (match, p1) => {
    return `rgba(10, 10, 12, ${p1})`;
  });

  // 6. Style center-title as black ink #0A0A0C and center-sub as vermilion red #EF4136
  transformed = transformed.replace(/\.center-title\s*\{[^}]+\}/gi, `
    .center-title { font-family: "Outfit", sans-serif; font-weight: 900; font-size: 72px; fill: #0A0A0C; text-anchor: middle; letter-spacing: -2px; }
  `);
  transformed = transformed.replace(/\.center-sub\s*\{[^}]+\}/gi, `
    .center-sub { font-family: "Plus Jakarta Sans", sans-serif; font-weight: 800; font-size: 15px; fill: #EF4136; text-anchor: middle; letter-spacing: 3px; text-transform: uppercase; }
  `);

  return transformed;
}

async function main() {
  console.log('Generating transparent light sketch PNGs from mindmap SVGs...');

  for (const { slug, file } of SVG_SERVICES) {
    const inputPath = path.resolve('public', file);
    if (!fs.existsSync(inputPath)) {
      console.warn(`File not found: ${inputPath}`);
      continue;
    }

    const rawSvg = fs.readFileSync(inputPath, 'utf8');
    const lightSvg = transformSvgToLightSketch(rawSvg);

    const outSvgPath = path.resolve('public', `sketch-${slug}-transparent.svg`);
    fs.writeFileSync(outSvgPath, lightSvg, 'utf8');

    const outPngPath = path.resolve('public', `sketch-${slug}-transparent.png`);
    await sharp(Buffer.from(lightSvg), { density: 150 })
      .png()
      .toFile(outPngPath);

    console.log(`✓ Generated: public/sketch-${slug}-transparent.png`);
  }

  console.log('Done generating all sketch assets!');
}

main().catch(console.error);
