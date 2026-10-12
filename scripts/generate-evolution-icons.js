import sharp from 'sharp';
import path from 'path';

/**
 * Flood-fill outer white background removal for generated 3D icon JPGs on #FFFFFF
 * Preserves all internal highlights while making the exterior background 100% transparent
 * with smooth anti-aliased edges.
 */
async function removeOuterWhiteBg(inputPath, outputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const out = Buffer.from(data);
  const visited = new Uint8Array(width * height);

  const isBgCandidate = (idx) => {
    const r = out[idx];
    const g = out[idx + 1];
    const b = out[idx + 2];
    // Pure white or very light gray/pinkish anti-aliased edge
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    return lum >= 242 && (max - min) <= 22;
  };

  // BFS flood fill from all 4 borders
  const queue = new Int32Array(width * height);
  let head = 0;
  let tail = 0;

  const enqueue = (x, y) => {
    const p = y * width + x;
    if (visited[p]) return;
    const idx = p * channels;
    if (isBgCandidate(idx)) {
      visited[p] = 1;
      queue[tail++] = p;
    }
  };

  for (let x = 0; x < width; x++) {
    enqueue(x, 0);
    enqueue(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    enqueue(0, y);
    enqueue(width - 1, y);
  }

  while (head < tail) {
    const p = queue[head++];
    const idx = p * channels;
    out[idx + 3] = 0; // Transparent

    const x = p % width;
    const y = (p - x) / width;

    if (x > 0) enqueue(x - 1, y);
    if (x < width - 1) enqueue(x + 1, y);
    if (y > 0) enqueue(x, y - 1);
    if (y < height - 1) enqueue(x, y + 1);
  }

  // Smooth anti-aliasing on 2px boundary around visited background pixels
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const p = y * width + x;
      if (visited[p]) continue;

      // Check if adjacent to a transparent pixel
      const hasBgNeighbor =
        visited[p - 1] ||
        visited[p + 1] ||
        visited[p - width] ||
        visited[p + width];

      if (hasBgNeighbor) {
        const idx = p * channels;
        const r = out[idx];
        const g = out[idx + 1];
        const b = out[idx + 2];
        const lum = 0.299 * r + 0.587 * g + 0.114 * b;
        if (lum > 180) {
          const factor = Math.max(0, Math.min(1, (245 - lum) / 65));
          out[idx + 3] = Math.round(255 * factor);
        }
      }
    }
  }

  await sharp(out, { raw: { width, height, channels: 4 } })
    .png()
    .toFile(outputPath);

  console.log(`Saved flood-fill transparent PNG: ${outputPath}`);
}

const COMMON_DEFS = `
  <defs>
    <!-- Matte Obsidian 3D Gradients -->
    <linearGradient id="obsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#27303F" />
      <stop offset="50%" stop-color="#141A23" />
      <stop offset="100%" stop-color="#090C10" />
    </linearGradient>
    <linearGradient id="obsSide" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1E2633" />
      <stop offset="100%" stop-color="#0A0D12" />
    </linearGradient>
    <linearGradient id="obsRim" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#4B5563" />
      <stop offset="100%" stop-color="#1F2937" />
    </linearGradient>

    <!-- Vibrant Crimson 3D Gradients -->
    <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF6B5E" />
      <stop offset="45%" stop-color="#EF4136" />
      <stop offset="100%" stop-color="#B91C1C" />
    </linearGradient>
    <linearGradient id="redDark" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#DC2626" />
      <stop offset="100%" stop-color="#991B1B" />
    </linearGradient>
    <linearGradient id="redGlow" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#EF4136" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#FF6B5E" stop-opacity="0.95" />
    </linearGradient>

    <!-- Frosted Slate Glass -->
    <linearGradient id="slateCard" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#334155" />
      <stop offset="100%" stop-color="#1E293B" />
    </linearGradient>

    <filter id="softShadow" x="-15%" y="-15%" width="130%" height="130%">
      <feDropShadow dx="0" dy="18" stdDeviation="16" flood-color="#090C10" flood-opacity="0.24" />
    </filter>
    <filter id="crimsonGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#EF4136" flood-opacity="0.38" />
    </filter>
  </defs>
`;

const SVG_DESIGNS = {
  // 3. Web Foundry: High-speed Jamstack Browser + 3D Code Block + Speed Bolt
  'public/web-dev-evolution-icon.png': `
    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
      ${COMMON_DEFS}
      <!-- Main 3D Browser Window Chassis -->
      <g filter="url(#softShadow)">
        <rect x="130" y="210" width="660" height="460" rx="34" fill="url(#obsSide)" stroke="#374151" stroke-width="4"/>
        <rect x="130" y="196" width="660" height="450" rx="34" fill="url(#obsGrad)" stroke="url(#obsRim)" stroke-width="3"/>
        <!-- Browser Top Bar -->
        <path d="M130 230 C130 211 145 196 164 196 L756 196 C775 196 790 211 790 230 L790 268 L130 268 Z" fill="#1E293B"/>
        <circle cx="176" cy="232" r="10" fill="#EF4136"/>
        <circle cx="208" cy="232" r="10" fill="#64748B"/>
        <circle cx="240" cy="232" r="10" fill="#475569"/>
        <rect x="285" y="218" width="320" height="28" rx="14" fill="#0F172A" stroke="#334155" stroke-width="2"/>
        <!-- UI Wireframe Bento Blocks Inside Browser -->
        <rect x="174" y="304" width="250" height="160" rx="18" fill="url(#slateCard)" stroke="#475569" stroke-width="2"/>
        <rect x="200" y="334" width="110" height="14" rx="7" fill="#EF4136"/>
        <rect x="200" y="362" width="180" height="12" rx="6" fill="#94A3B8"/>
        <rect x="200" y="386" width="150" height="12" rx="6" fill="#64748B"/>
        <rect x="200" y="420" width="90" height="24" rx="12" fill="url(#redGrad)"/>

        <!-- Performance Gauge Card Inside -->
        <rect x="450" y="304" width="296" height="160" rx="18" fill="#0F172A" stroke="#334155" stroke-width="2"/>
        <path d="M 520 425 A 68 68 0 0 1 656 425" fill="none" stroke="#334155" stroke-width="16" stroke-linecap="round"/>
        <path d="M 520 425 A 68 68 0 0 1 645 385" fill="none" stroke="url(#redGrad)" stroke-width="16" stroke-linecap="round"/>
        <circle cx="588" cy="422" r="12" fill="#EF4136"/>
        <rect x="548" y="440" width="80" height="10" rx="5" fill="#94A3B8"/>

        <!-- Bottom Code Telemetry Bars -->
        <rect x="174" y="490" width="572" height="114" rx="18" fill="#0F172A" stroke="#334155" stroke-width="2"/>
        <rect x="204" y="518" width="140" height="12" rx="6" fill="#EF4136"/>
        <rect x="360" y="518" width="220" height="12" rx="6" fill="#64748B"/>
        <rect x="204" y="546" width="290" height="12" rx="6" fill="#94A3B8"/>
        <rect x="204" y="574" width="190" height="12" rx="6" fill="#475569"/>
      </g>

      <!-- Floating 3D Crimson Code Cube & Speed Bolt (Right Foreground) -->
      <g filter="url(#crimsonGlow)">
        <rect x="620" y="470" width="270" height="270" rx="48" fill="url(#redDark)" transform="translate(0, 14)"/>
        <rect x="620" y="470" width="270" height="270" rx="48" fill="url(#redGrad)" stroke="#FCA5A5" stroke-width="3"/>
        <!-- Code Brackets < / > -->
        <path d="M705 565 L665 605 L705 645" fill="none" stroke="#111827" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M805 565 L845 605 L805 645" fill="none" stroke="#111827" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="772" y1="550" x2="738" y2="660" stroke="#111827" stroke-width="18" stroke-linecap="round"/>
      </g>

      <!-- Floating 3D Lightning Speed Badge (Top Right) -->
      <g filter="url(#softShadow)">
        <circle cx="805" cy="245" r="82" fill="url(#obsGrad)" stroke="#EF4136" stroke-width="5"/>
        <polygon points="815,185 765,252 804,252 792,308 848,238 808,238" fill="url(#redGrad)"/>
      </g>
    </svg>
  `,

  // 4. Viral Social: 3D Smartphone Reels Stage + Viral Play & Heart + Growth Bars
  'public/viral-social-evolution-icon.png': `
    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
      ${COMMON_DEFS}
      <!-- Rising Viral Bar Columns Behind Phone -->
      <g filter="url(#softShadow)">
        <rect x="640" y="520" width="66" height="240" rx="16" fill="url(#obsGrad)" stroke="#374151" stroke-width="3"/>
        <rect x="730" y="410" width="66" height="350" rx="16" fill="url(#obsGrad)" stroke="#475569" stroke-width="3"/>
        <rect x="820" y="280" width="66" height="480" rx="16" fill="url(#redGrad)" filter="url(#crimsonGlow)"/>
      </g>

      <!-- 3D Smartphone Chassis -->
      <g filter="url(#softShadow)">
        <rect x="210" y="145" width="380" height="710" rx="54" fill="#090C10" transform="translate(0, 16)"/>
        <rect x="210" y="145" width="380" height="710" rx="54" fill="url(#obsGrad)" stroke="url(#obsRim)" stroke-width="5"/>
        <rect x="234" y="172" width="332" height="656" rx="40" fill="#0F172A" stroke="#334155" stroke-width="2"/>
        <!-- Dynamic Island Notch -->
        <rect x="345" y="192" width="110" height="24" rx="12" fill="#090C10"/>

        <!-- Video Reel Card Inside Phone -->
        <rect x="262" y="244" width="276" height="380" rx="26" fill="url(#slateCard)" stroke="#475569" stroke-width="2"/>
        <!-- Crimson Play Button Emblem -->
        <circle cx="400" cy="434" r="66" fill="url(#redGrad)" filter="url(#crimsonGlow)"/>
        <polygon points="384,402 384,466 438,434" fill="#111827"/>

        <!-- Audio Waveform & Engagement Bars -->
        <rect x="262" y="654" width="180" height="16" rx="8" fill="#EF4136"/>
        <rect x="262" y="684" width="230" height="12" rx="6" fill="#94A3B8"/>
        <rect x="262" y="708" width="140" height="12" rx="6" fill="#64748B"/>
      </g>

      <!-- Floating 3D Viral Heart Badge (Top Left) -->
      <g filter="url(#crimsonGlow)">
        <rect x="115" y="250" width="160" height="160" rx="38" fill="url(#redGrad)" stroke="#FCA5A5" stroke-width="3"/>
        <path d="M195 368 C195 368 143 332 143 298 C143 279 158 266 175 266 C185 266 192 272 195 279 C198 272 205 266 215 266 C232 266 247 279 247 298 C247 332 195 368 195 368 Z" fill="#111827"/>
      </g>

      <!-- Upward Viral Trajectory Arrow -->
      <g filter="url(#crimsonGlow)">
        <path d="M530 570 C620 530 710 420 835 205" fill="none" stroke="url(#redGrad)" stroke-width="22" stroke-linecap="round"/>
        <polygon points="855,170 785,205 850,248" fill="#EF4136"/>
      </g>
    </svg>
  `,

  // 5. Influencer Network: Central Verified Creator Hub + Connected Network Nodes + ROI Star
  'public/influencer-evolution-icon.png': `
    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
      ${COMMON_DEFS}
      <!-- Network Connection Conduits -->
      <g stroke="url(#redGrad)" stroke-width="14" stroke-linecap="round">
        <line x1="512" y1="512" x2="230" y2="260" />
        <line x1="512" y1="512" x2="794" y2="260" />
        <line x1="512" y1="512" x2="210" y2="730" />
        <line x1="512" y1="512" x2="814" y2="730" />
      </g>

      <!-- Outer Orbiting 3D Nodes -->
      <g filter="url(#softShadow)">
        <!-- Top Left Node: Megaphone / Reach -->
        <circle cx="230" cy="260" r="88" fill="url(#obsGrad)" stroke="#475569" stroke-width="4"/>
        <path d="M195 260 L235 235 L235 285 Z" fill="url(#redGrad)"/>
        <rect x="235" y="242" width="26" height="36" rx="6" fill="#EF4136"/>

        <!-- Top Right Node: ROI Chart -->
        <circle cx="794" cy="260" r="88" fill="url(#obsGrad)" stroke="#475569" stroke-width="4"/>
        <rect x="760" y="268" width="16" height="32" rx="4" fill="#94A3B8"/>
        <rect x="786" y="248" width="16" height="52" rx="4" fill="#EF4136"/>
        <rect x="812" y="224" width="16" height="76" rx="4" fill="url(#redGrad)"/>

        <!-- Bottom Left Node: Audience Trust Shield -->
        <circle cx="210" cy="730" r="88" fill="url(#obsGrad)" stroke="#475569" stroke-width="4"/>
        <path d="M210 684 L248 700 L248 732 C248 758 210 776 210 776 C210 776 172 758 172 732 L172 700 Z" fill="url(#redGrad)"/>

        <!-- Bottom Right Node: Engagement Star -->
        <circle cx="814" cy="730" r="88" fill="url(#obsGrad)" stroke="#475569" stroke-width="4"/>
        <polygon points="814,682 828,712 860,716 836,738 842,770 814,754 786,770 792,738 768,716 800,712" fill="url(#redGrad)"/>
      </g>

      <!-- Central 3D Creator Hub Core -->
      <g filter="url(#softShadow)">
        <circle cx="512" cy="524" r="176" fill="#090C10"/>
        <circle cx="512" cy="512" r="176" fill="url(#obsGrad)" stroke="url(#redGrad)" stroke-width="8"/>
        <!-- Creator Avatar Silhouette -->
        <circle cx="512" cy="456" r="52" fill="url(#redGrad)"/>
        <path d="M416 588 C416 534 458 518 512 518 C566 518 608 534 608 588" fill="url(#redGrad)"/>
      </g>

      <!-- Verified Checkmark Emblem -->
      <g filter="url(#crimsonGlow)">
        <circle cx="638" cy="382" r="54" fill="url(#redGrad)" stroke="#111827" stroke-width="6"/>
        <path d="M614 382 L632 400 L664 366" fill="none" stroke="#111827" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </svg>
  `,

  // 6. Content Smithy: 3D Editorial Authority Pillar + Precision Fountain Nib + AI Knowledge Nodes
  'public/content-smithy-evolution-icon.png': `
    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
      ${COMMON_DEFS}
      <!-- Stacked 3D Editorial Document Tablet -->
      <g filter="url(#softShadow)">
        <rect x="190" y="210" width="460" height="590" rx="36" fill="#0F172A" transform="rotate(-6 420 505)" stroke="#334155" stroke-width="3"/>
        <rect x="230" y="190" width="470" height="600" rx="36" fill="url(#obsGrad)" stroke="url(#obsRim)" stroke-width="4"/>
        <!-- Editorial Header Badge -->
        <rect x="286" y="254" width="150" height="28" rx="14" fill="url(#redGrad)"/>
        <!-- Structured Article Lines -->
        <rect x="286" y="312" width="340" height="22" rx="11" fill="#94A3B8"/>
        <rect x="286" y="352" width="280" height="22" rx="11" fill="#64748B"/>
        <!-- Authority Chart Block Inside Article -->
        <rect x="286" y="408" width="356" height="170" rx="20" fill="#0F172A" stroke="#334155" stroke-width="2"/>
        <rect x="326" y="508" width="42" height="46" rx="8" fill="#475569"/>
        <rect x="392" y="478" width="42" height="76" rx="8" fill="#64748B"/>
        <rect x="458" y="446" width="42" height="108" rx="8" fill="#EF4136"/>
        <rect x="524" y="418" width="42" height="136" rx="8" fill="url(#redGrad)"/>
        <!-- Bottom Paragraph Lines -->
        <rect x="286" y="614" width="356" height="16" rx="8" fill="#64748B"/>
        <rect x="286" y="648" width="300" height="16" rx="8" fill="#475569"/>
        <rect x="286" y="682" width="220" height="16" rx="8" fill="#EF4136"/>
      </g>

      <!-- Floating 3D Crimson Fountain Pen Nib (Right Foreground) -->
      <g filter="url(#crimsonGlow)" transform="translate(680, 480) rotate(25)">
        <path d="M0 -190 L95 -20 L58 140 L-58 140 L-95 -20 Z" fill="url(#redGrad)" stroke="#FCA5A5" stroke-width="4"/>
        <line x1="0" y1="-190" x2="0" y2="-25" stroke="#111827" stroke-width="12" stroke-linecap="round"/>
        <circle cx="0" cy="-20" r="24" fill="#111827"/>
        <rect x="-68" y="140" width="136" height="44" rx="12" fill="url(#obsGrad)" stroke="#475569" stroke-width="3"/>
      </g>
    </svg>
  `,

  // 7. Inbox Edge: 3D Automated Lifecycle Envelope + Conversion Funnel + Revenue Pulse
  'public/email-marketing-evolution-icon.png': `
    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
      ${COMMON_DEFS}
      <!-- 3D Obsidian Envelope Vault -->
      <g filter="url(#softShadow)">
        <rect x="160" y="340" width="620" height="440" rx="40" fill="url(#obsGrad)" stroke="url(#obsRim)" stroke-width="4"/>
        <!-- Rising Message Card Inside Envelope -->
        <rect x="230" y="190" width="480" height="390" rx="28" fill="#1E293B" stroke="#EF4136" stroke-width="4"/>
        <rect x="280" y="245" width="160" height="24" rx="12" fill="url(#redGrad)"/>
        <rect x="280" y="294" width="360" height="18" rx="9" fill="#94A3B8"/>
        <rect x="280" y="330" width="310" height="18" rx="9" fill="#64748B"/>
        <!-- Open Rate Metric Bar -->
        <rect x="280" y="382" width="380" height="86" rx="18" fill="#0F172A" stroke="#334155" stroke-width="2"/>
        <circle cx="332" cy="425" r="24" fill="url(#redGrad)"/>
        <rect x="376" y="408" width="180" height="14" rx="7" fill="#EF4136"/>
        <rect x="376" y="434" width="240" height="12" rx="6" fill="#64748B"/>

        <!-- Envelope Front Flaps -->
        <path d="M160 365 L470 590 L780 365 L780 740 C780 762 762 780 740 780 L200 780 C178 780 160 762 160 740 Z" fill="url(#obsSide)" stroke="#374151" stroke-width="3"/>
        <path d="M160 760 L470 540 L780 760" fill="none" stroke="#EF4136" stroke-width="6" stroke-linecap="round"/>
      </g>

      <!-- Floating 3D Crimson Automation Lightning & Send Badge -->
      <g filter="url(#crimsonGlow)">
        <circle cx="770" cy="310" r="105" fill="url(#redGrad)" stroke="#FCA5A5" stroke-width="4"/>
        <polygon points="730,305 825,260 790,360 768,322" fill="#111827"/>
      </g>
    </svg>
  `,

  // 8. Brand Anvil: 3D Obsidian Pedestal & Category Monopoly Crown/Diamond Prism
  'public/brand-anvil-evolution-icon.png': `
    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
      ${COMMON_DEFS}
      <!-- 3D Isometric Obsidian Anvil / Pedestal Base -->
      <g filter="url(#softShadow)">
        <polygon points="512,560 830,690 512,820 194,690" fill="url(#obsGrad)" stroke="#475569" stroke-width="4"/>
        <polygon points="194,690 512,820 512,885 194,755" fill="#0F172A" stroke="#334155" stroke-width="3"/>
        <polygon points="830,690 512,820 512,885 830,755" fill="#090C10" stroke="#1E293B" stroke-width="3"/>

        <!-- Second Tier Platform -->
        <polygon points="512,485 740,580 512,675 284,580" fill="#1E293B" stroke="#EF4136" stroke-width="4"/>
        <polygon points="284,580 512,675 512,725 284,630" fill="#0F172A"/>
        <polygon points="740,580 512,675 512,725 740,630" fill="#090C10"/>
      </g>

      <!-- Floating 3D Crimson Category Crown & Diamond Core -->
      <g filter="url(#crimsonGlow)">
        <polygon points="512,145 690,340 512,545 334,340" fill="url(#redGrad)" stroke="#FCA5A5" stroke-width="4"/>
        <polygon points="512,145 690,340 512,395" fill="#DC2626" opacity="0.75"/>
        <polygon points="512,545 690,340 512,395" fill="#991B1B" opacity="0.85"/>
        <line x1="334" y1="340" x2="690" y2="340" stroke="#111827" stroke-width="6"/>
        <line x1="512" y1="145" x2="512" y2="545" stroke="#111827" stroke-width="6"/>
      </g>

      <!-- Orbiting Authority Pillars -->
      <g filter="url(#softShadow)">
        <rect x="190" y="290" width="76" height="190" rx="20" fill="url(#obsGrad)" stroke="#EF4136" stroke-width="4"/>
        <rect x="758" y="290" width="76" height="190" rx="20" fill="url(#obsGrad)" stroke="#EF4136" stroke-width="4"/>
      </g>
    </svg>
  `,

  // 9. Visual ID: 3D Design System Token Grid + Bezier Pen Curve + Color Swatch Cards
  'public/visual-id-evolution-icon.png': `
    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
      ${COMMON_DEFS}
      <!-- 3D Design System Artboard -->
      <g filter="url(#softShadow)">
        <rect x="160" y="190" width="580" height="580" rx="42" fill="url(#obsGrad)" stroke="url(#obsRim)" stroke-width="4"/>
        <!-- Golden Ratio Grid Lines -->
        <line x1="380" y1="190" x2="380" y2="770" stroke="#334155" stroke-width="3" stroke-dasharray="10,10"/>
        <line x1="160" y1="430" x2="740" y2="430" stroke="#334155" stroke-width="3" stroke-dasharray="10,10"/>

        <!-- Bezier Curve Vector Path -->
        <path d="M 240 640 C 260 330 560 330 640 270" fill="none" stroke="url(#redGrad)" stroke-width="16" stroke-linecap="round"/>
        <!-- Bezier Handle Line & Control Nodes -->
        <line x1="250" y1="450" x2="540" y2="330" stroke="#94A3B8" stroke-width="5"/>
        <circle cx="250" cy="450" r="16" fill="#EF4136" stroke="#111827" stroke-width="5"/>
        <circle cx="540" cy="330" r="16" fill="#EF4136" stroke="#111827" stroke-width="5"/>
        <rect x="222" y="622" width="36" height="36" rx="8" fill="url(#redGrad)"/>
        <rect x="622" y="252" width="36" height="36" rx="8" fill="url(#redGrad)"/>
      </g>

      <!-- Floating 3D Color Token Swatch Cards (Right Foreground) -->
      <g filter="url(#crimsonGlow)">
        <rect x="590" y="450" width="280" height="360" rx="34" fill="url(#obsSide)" stroke="#475569" stroke-width="4"/>
        <rect x="622" y="482" width="216" height="110" rx="20" fill="url(#redGrad)"/>
        <rect x="622" y="610" width="216" height="72" rx="16" fill="#334155"/>
        <rect x="622" y="700" width="140" height="22" rx="11" fill="#EF4136"/>
        <rect x="622" y="736" width="180" height="16" rx="8" fill="#64748B"/>
      </g>
    </svg>
  `,

  // 10. Commercial Video: 3D Cinema Camera Lens + Clapperboard + Timeline Frame Track
  'public/commercial-video-evolution-icon.png': `
    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
      ${COMMON_DEFS}
      <!-- 3D Cinema Camera Body & Precision Lens -->
      <g filter="url(#softShadow)">
        <!-- Dual Film Reels on Top -->
        <circle cx="360" cy="230" r="88" fill="url(#obsGrad)" stroke="#475569" stroke-width="5"/>
        <circle cx="360" cy="230" r="32" fill="url(#redGrad)"/>
        <circle cx="560" cy="210" r="104" fill="url(#obsGrad)" stroke="#475569" stroke-width="5"/>
        <circle cx="560" cy="210" r="38" fill="url(#redGrad)"/>

        <!-- Main Camera Chassis -->
        <rect x="220" y="310" width="460" height="360" rx="44" fill="url(#obsGrad)" stroke="url(#obsRim)" stroke-width="5"/>
        <!-- Matte Box / Cinema Lens Cone -->
        <polygon points="680,370 870,290 870,690 680,610" fill="url(#obsSide)" stroke="#EF4136" stroke-width="5"/>

        <!-- Center Crimson Play / Recording Aperture -->
        <circle cx="450" cy="490" r="112" fill="#090C10" stroke="#334155" stroke-width="6"/>
        <circle cx="450" cy="490" r="82" fill="url(#redGrad)" filter="url(#crimsonGlow)"/>
        <polygon points="430,450 430,530 498,490" fill="#111827"/>
      </g>

      <!-- Floating Non-Linear Video Editing Timeline Bar (Bottom) -->
      <g filter="url(#softShadow)">
        <rect x="160" y="720" width="700" height="130" rx="28" fill="#0F172A" stroke="#475569" stroke-width="4"/>
        <rect x="200" y="752" width="190" height="28" rx="10" fill="url(#redGrad)"/>
        <rect x="406" y="752" width="260" height="28" rx="10" fill="#334155"/>
        <rect x="260" y="794" width="310" height="28" rx="10" fill="#EF4136"/>
        <!-- Playhead Scrubber Line -->
        <line x1="512" y1="695" x2="512" y2="870" stroke="#FF6B5E" stroke-width="8" stroke-linecap="round"/>
        <circle cx="512" cy="695" r="14" fill="#EF4136"/>
      </g>
    </svg>
  `,

  // 11. CRO Revenue: 3D Conversion Funnel + A/B Split Test Cards + Rising Revenue Bar
  'public/cro-revenue-evolution-icon.png': `
    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
      ${COMMON_DEFS}
      <!-- Top A/B Split Testing Cards -->
      <g filter="url(#softShadow)">
        <!-- Variant A Card -->
        <rect x="180" y="140" width="260" height="170" rx="26" fill="url(#obsGrad)" stroke="#475569" stroke-width="4"/>
        <rect x="216" y="176" width="54" height="54" rx="14" fill="#334155"/>
        <rect x="288" y="184" width="116" height="16" rx="8" fill="#94A3B8"/>
        <rect x="288" y="212" width="84" height="14" rx="7" fill="#64748B"/>
        <rect x="216" y="254" width="188" height="24" rx="12" fill="#1E293B"/>

        <!-- Variant B Winning Card -->
        <rect x="560" y="140" width="260" height="170" rx="26" fill="url(#obsGrad)" stroke="#EF4136" stroke-width="5"/>
        <rect x="596" y="176" width="54" height="54" rx="14" fill="url(#redGrad)"/>
        <rect x="668" y="184" width="116" height="16" rx="8" fill="#EF4136"/>
        <rect x="668" y="212" width="94" height="14" rx="7" fill="#94A3B8"/>
        <rect x="596" y="254" width="188" height="24" rx="12" fill="url(#redGrad)"/>
      </g>

      <!-- 3D Tiered Conversion Funnel -->
      <g filter="url(#softShadow)">
        <!-- Top Funnel Tier -->
        <polygon points="210,360 790,360 710,480 290,480" fill="url(#obsGrad)" stroke="#475569" stroke-width="4"/>
        <!-- Middle Funnel Tier -->
        <polygon points="305,500 695,500 625,620 375,620" fill="#1E293B" stroke="#EF4136" stroke-width="4"/>
        <!-- Bottom Crimson Conversion Spout -->
        <polygon points="390,640 610,640 565,760 435,760" fill="url(#redGrad)" filter="url(#crimsonGlow)"/>
      </g>

      <!-- Bottom Revenue Multiplier Badge -->
      <g filter="url(#crimsonGlow)">
        <circle cx="500" cy="845" r="76" fill="url(#obsGrad)" stroke="url(#redGrad)" stroke-width="6"/>
        <path d="M468 855 L492 878 L538 820" fill="none" stroke="#EF4136" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </svg>
  `,

  // 12. Reputation Shield: 3D Obsidian & Crimson Fortress Shield + 5 Stars + Checkmark
  'public/reputation-shield-evolution-icon.png': `
    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
      ${COMMON_DEFS}
      <!-- 3D Outer Fortress Shield -->
      <g filter="url(#softShadow)">
        <path d="M512 130 L830 250 L830 510 C830 720 512 890 512 890 C512 890 194 720 194 510 L194 250 Z" fill="#090C10" transform="translate(0, 18)"/>
        <path d="M512 130 L830 250 L830 510 C830 720 512 890 512 890 C512 890 194 720 194 510 L194 250 Z" fill="url(#obsGrad)" stroke="url(#obsRim)" stroke-width="6"/>
        <!-- Inner Crimson Core Shield -->
        <path d="M512 200 L760 296 L760 502 C760 668 512 808 512 808 C512 808 264 668 264 502 L264 296 Z" fill="#0F172A" stroke="url(#redGrad)" stroke-width="6"/>
      </g>

      <!-- Center Verified Checkmark Medallion -->
      <g filter="url(#crimsonGlow)">
        <circle cx="512" cy="485" r="130" fill="url(#redGrad)"/>
        <path d="M452 485 L494 528 L578 440" fill="none" stroke="#111827" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"/>
      </g>

      <!-- 5 Trust Stars Arc -->
      <g fill="url(#redGrad)" filter="url(#crimsonGlow)">
        <circle cx="350" cy="295" r="16"/>
        <circle cx="425" cy="265" r="20"/>
        <circle cx="512" cy="250" r="26"/>
        <circle cx="599" cy="265" r="20"/>
        <circle cx="674" cy="295" r="16"/>
      </g>
    </svg>
  `
};

async function main() {
  const artifactDir = 'C:/Users/kowsi/.gemini/antigravity/brain/a9edaa1f-65a9-40d2-b71d-c8c4b4496751';

  // 1 & 2: Flood-fill transparent background extraction for the 2 generated 3D JPGs
  await removeOuterWhiteBg(
    `${artifactDir}/evo_seo_geo_pro_1791787520239.jpg`,
    path.resolve('public/seo-to-geo-evolution-icon.png')
  );
  await removeOuterWhiteBg(
    `${artifactDir}/evo_paid_media_pro_1791787532245.jpg`,
    path.resolve('public/paid-media-evolution-icon.png')
  );

  // 3 - 12: Render bespoke 3D-shaded SVG illustrations into 1024x1024 transparent PNGs
  for (const [outRel, svgMarkup] of Object.entries(SVG_DESIGNS)) {
    const outPath = path.resolve(outRel);
    await sharp(Buffer.from(svgMarkup))
      .resize(1024, 1024)
      .png()
      .toFile(outPath);
    console.log(`Rendered 3D vector transparent PNG: ${outPath}`);
  }
}

main().catch(console.error);
