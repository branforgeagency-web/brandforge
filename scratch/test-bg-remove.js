const sharp = require('sharp');
const path = require('path');

async function test() {
  const inputPath = path.join(__dirname, '../public/seo-geo-banner-artwork.jpg');
  const image = sharp(inputPath);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  console.log(`Image info: width=${info.width}, height=${info.height}, channels=${info.channels}`);

  // Inspect corners to see average background color
  const corners = [
    0, // top-left
    (info.width - 1) * info.channels, // top-right
    (info.height - 1) * info.width * info.channels, // bottom-left
  ];
  for (const c of corners) {
    console.log(`Corner at index ${c}: R=${data[c]}, G=${data[c+1]}, B=${data[c+2]}`);
  }
}

test().catch(console.error);
