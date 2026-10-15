import fs from 'fs';

const p = 'src/components/BrandForgeTestimonialsSection.jsx';
let code = fs.readFileSync(p, 'utf8');
const splitMarker = 'const REVIEWS = [';
const idx = code.indexOf(splitMarker);
if (idx > 0) {
  const newHeader = 'import React, { useState } from "react";\nimport KexsioCanvasBackground from "./KexsioCanvasBackground";\n\n';
  code = newHeader + code.slice(idx);
  fs.writeFileSync(p, code, 'utf8');
  console.log('Replaced successfully!');
} else {
  console.log('Marker not found');
}
