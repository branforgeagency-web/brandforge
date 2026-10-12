import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

function transformSvgToLightSketch(svgContent) {
  let transformed = svgContent;

  // 1. Replace white fills and strokes with black ink / charcoal
  // Replace fill="#FFFFFF" or fill="#fff" with fill="#0A0A0C"
  transformed = transformed.replace(/fill="#FFFFFF"/gi, 'fill="#0A0A0C"');
  transformed = transformed.replace(/fill="#FFF"/gi, 'fill="#0A0A0C"');
  transformed = transformed.replace(/fill: #FFFFFF/gi, 'fill: #0A0A0C');
  transformed = transformed.replace(/fill: #FFF/gi, 'fill: #0A0A0C');

  // Replace white strokes with black ink #0A0A0C
  transformed = transformed.replace(/stroke="#FFFFFF"/gi, 'stroke="#0A0A0C"');
  transformed = transformed.replace(/stroke="#FFF"/gi, 'stroke="#0A0A0C"');
  transformed = transformed.replace(/stroke: #FFFFFF/gi, 'stroke: #0A0A0C');

  // Replace rgba(255, 255, 255, ...) with rgba(10, 10, 12, ...)
  transformed = transformed.replace(/rgba\(255,\s*255,\s*255,\s*([0-9.]+)\)/gi, (match, p1) => {
    return `rgba(10, 10, 12, ${p1})`;
  });

  // Replace rgba(255,255,255,...) without spaces
  transformed = transformed.replace(/rgba\(255,255,255,([0-9.]+)\)/gi, (match, p1) => {
    return `rgba(10, 10, 12, ${p1})`;
  });

  // Strip @import to prevent unescaped XML entity error in librsvg
  transformed = transformed.replace(/@import[^;]+;/gi, '');

  // Escape any raw '&' to '&amp;' for strict XML
  transformed = transformed.replace(/&(?!(amp|lt|gt|quot|apos);)/g, '&amp;');

  // Ensure center title and sub are bold black and red
  transformed = transformed.replace(/class="center-title"/gi, 'class="center-title" fill="#0A0A0C"');
  transformed = transformed.replace(/class="center-sub"/gi, 'class="center-sub" fill="#EF4136"');

  // In style block, make center-title #0A0A0C and center-sub #EF4136
  transformed = transformed.replace(/\.center-title\s*\{[^}]+\}/gi, `
    .center-title { font-family: "Outfit", sans-serif; font-weight: 900; font-size: 72px; fill: #0A0A0C; text-anchor: middle; letter-spacing: -2px; }
  `);
  transformed = transformed.replace(/\.center-sub\s*\{[^}]+\}/gi, `
    .center-sub { font-family: "Plus Jakarta Sans", sans-serif; font-weight: 800; font-size: 15px; fill: #EF4136; text-anchor: middle; letter-spacing: 3px; text-transform: uppercase; }
  `);

  return transformed;
}

async function testOne() {
  const input = fs.readFileSync('public/mindmap-cro-revenue.svg', 'utf8');
  const lightSvg = transformSvgToLightSketch(input);
  fs.writeFileSync('public/sketch-cro-revenue-transparent.svg', lightSvg);

  await sharp(Buffer.from(lightSvg))
    .png()
    .toFile('public/sketch-cro-revenue-transparent.png');

  console.log('Successfully generated public/sketch-cro-revenue-transparent.png');
}

testOne().catch(console.error);
