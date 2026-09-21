const path = require('path');
const sharp = require(path.join(__dirname, '../node_modules/sharp'));

async function inspect() {
  const meta = await sharp('public/banner-paid-media-illustration.png').metadata();
  console.log('Metadata:', meta);
}

inspect().catch(console.error);
