"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useRouter } from "next/navigation";
import { serviceUrl } from "../data/servicesData";
import {
  Search,
  Megaphone,
  Box,
  Rocket,
  Users,
  PenTool,
  Mail,
  Target,
  Palette,
  Video,
  Gauge,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

/* ───────────────────────────────────────────────────────────────────────────
   BRANDFORGE 12 SERVICES — 3D CURVED SPLINE-TO-GRID SHOWCASE
   Inspired by the Three.js curved rail-to-grid choreography:
   1. Cards sweep from deep background left along a 3D Catmull-Rom S-curve
      right past the camera foreground.
   2. At the end of the scroll track, all 12 cards break off along quadratic
      Bezier arcs into a crisp 4×3 interactive showcase grid.
   3. Clicking any card navigates directly to its dedicated service page.
   ─────────────────────────────────────────────────────────────────────────── */

const SERVICES = [
  {
    slug: "seo-geo",
    eyebrow: "SEO & GEO /",
    title: "SEARCH DOMINANCE",
    description:
      "Our SEO services help ambitious brands win both Google rankings and the new wave of AI-generated answers.",
    items: ["Technical SEO", "GEO Optimization", "Core Web Vitals"],
    number: "01",
    icon: Search,
    theme: "red",
  },
  {
    slug: "paid-media",
    eyebrow: "PAID MEDIA /",
    title: "AD SCALING",
    description:
      "Our paid advertising campaigns run across Meta, Google, TikTok, and LinkedIn to reach the right audience and scale ROAS.",
    items: ["Programmatic Bidding", "Funnel Retargeting", "ROAS Scaling"],
    number: "02",
    icon: Megaphone,
    theme: "dark",
  },
  {
    slug: "web-foundry",
    eyebrow: "WEB FOUNDRY /",
    title: "3D EXPERIENCE",
    description:
      "Our web development builds sub-second platforms and 3D visual worlds that turn visitor attention into lasting revenue.",
    items: ["Next-Gen Web Dev", "WebGL 3D Motion", "Sub-Second UX"],
    number: "03",
    icon: Box,
    theme: "white",
  },
  {
    slug: "viral-social",
    eyebrow: "VIRAL SOCIAL /",
    title: "BRAND REACH",
    description:
      "Our social media marketing builds content engines designed to spread fast and grow your brand where your audience already is.",
    items: ["Viral Short-Form", "Community Growth", "Social Listening"],
    number: "04",
    icon: Rocket,
    theme: "dark",
  },
  {
    slug: "influencer-network",
    eyebrow: "INFLUENCER /",
    title: "CREATOR NETWORK",
    description:
      "Our influencer marketing connects your brand with the right creators and key opinion leaders to build real reach and authority.",
    items: ["Creator Network", "Contract Vetting", "ROI Tracking"],
    number: "05",
    icon: Users,
    theme: "red",
  },
  {
    slug: "content-smithy",
    eyebrow: "CONTENT /",
    title: "STORY SMITHY",
    description:
      "Our content marketing crafts authority storytelling and editorial copy designed to turn prospects into clients.",
    items: ["Authority Copywriting", "Whitepapers", "Thought Leadership"],
    number: "06",
    icon: PenTool,
    theme: "white",
  },
  {
    slug: "inbox-edge",
    eyebrow: "INBOX EDGE /",
    title: "RETENTION FUNNELS",
    description:
      "Our email marketing builds automated lifecycle sequences that improve deliverability and grow customer lifetime value (LTV).",
    items: ["Klaviyo Automation", "Dynamic Segmentation", "LTV Maximization"],
    number: "07",
    icon: Mail,
    theme: "dark",
  },
  {
    slug: "brand-anvil",
    eyebrow: "BRAND ANVIL /",
    title: "GROWTH ARCHITECTURE",
    description:
      "Our growth strategy engineers 360° blueprints and unit-economics optimization built for market leadership.",
    items: ["360° Growth Blueprints", "Market Research", "Unit Economics"],
    number: "08",
    icon: Target,
    theme: "red",
  },
  {
    slug: "visual-id",
    eyebrow: "IDENTITY FORGE /",
    title: "VISUAL ID DESIGN",
    description:
      "Our branding and design build instant market authority through logo design, 3D motion graphics, and cohesive design systems.",
    items: ["Logo Forging", "3D Motion Graphics", "Design Systems"],
    number: "09",
    icon: Palette,
    theme: "white",
  },
  {
    slug: "commercial-video",
    eyebrow: "REEL FORGE /",
    title: "COMMERCIAL VIDEO",
    description:
      "Our video production and editing team creates ad films, reels, corporate videos, and motion graphics that bring enquiries.",
    items: ["Ad Films & Reels", "Video Editing", "Motion Graphics"],
    number: "10",
    icon: Video,
    theme: "dark",
  },
  {
    slug: "cro-revenue",
    eyebrow: "INSIGHT FURNACE /",
    title: "CRO REVENUE LIFT",
    description:
      "Our conversion rate optimization runs data-driven A/B testing and removes checkout friction to lift conversions without extra ad spend.",
    items: ["A/B Testing Engine", "Friction Removal", "Revenue Lift"],
    number: "11",
    icon: Gauge,
    theme: "red",
  },
  {
    slug: "reputation-shield",
    eyebrow: "REPUTATION SHIELD /",
    title: "REPUTATION MANAGEMENT",
    description:
      "Our brand reputation management grows genuine reviews, answers every review professionally, and keeps your search results clean.",
    items: ["Review Growth", "Review Replies", "Brand Monitoring"],
    number: "12",
    icon: ShieldCheck,
    theme: "white",
  },
];

/* ─── 3D Spline & Grid Choreography Constants ─── */
const CARD_ASPECT = 1.4; // 1120 × 800 crisp editorial card ratio
const SCENE_CFG = {
  FOV: 42,
  CAM_Z: 9.2,
  CARD_W: 3.35,
  SPACING: 0.115,
  RAIL_SPAN: 1.55,
  FLY_SPAN: 0.38,
  HOLD: 0.22,
  RAIL: [
    [0, 2.8, -58],
    [-9.8, 1.8, -32],
    [-11.8, 0.55, -13],
    [-6.8, -0.08, -1],
    [0, -0.3, 3.1],
    [6.8, -0.08, -1],
    [11.8, 0.6, -12],
    [8.8, 1.5, -26],
    [2, 2.1, -34],
  ],
};

const clamp01 = (v) => Math.max(0, Math.min(1, v));
const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

function getTotalSpan(count) {
  return (
    SCENE_CFG.RAIL_SPAN +
    SCENE_CFG.FLY_SPAN +
    (count - 1) * SCENE_CFG.SPACING +
    SCENE_CFG.HOLD
  );
}

function evalCardTimeline(progress, index, count) {
  const r = clamp01(progress) * getTotalSpan(count) - index * SCENE_CFG.SPACING;
  return {
    rail: clamp01(r / SCENE_CFG.RAIL_SPAN),
    fly: clamp01((r - SCENE_CFG.RAIL_SPAN) / SCENE_CFG.FLY_SPAN),
    opacity: r <= 0 ? 0 : Math.min(1, r / 0.12),
  };
}

function computeGridLayout(count, width, height, fov, camZ) {
  const visH = 2 * camZ * Math.tan(((fov / 2) * Math.PI) / 180);
  const aspect = width / Math.max(height, 1);
  const visW = visH * aspect;

  const cols = aspect < 1.05 ? 3 : 4;
  const rows = Math.ceil(count / cols);

  const topClearance = visH * 0.215; // Leave room for header at top
  const availH = visH - topClearance - visH * 0.135; // Extra 50px+ clearance above bottom progress pill
  const gap = Math.min(visW, visH) * 0.022;

  let cellW = Math.min(
    (visW * 0.9 - gap * (cols - 1)) / cols,
    ((availH - gap * (rows - 1)) / rows) * CARD_ASPECT
  );
  cellW = Math.max(cellW, 0.55);
  const cellH = cellW / CARD_ASPECT;

  const totalW = cols * cellW + (cols - 1) * gap;
  const totalH = rows * cellH + (rows - 1) * gap;
  const startY = visH / 2 - topClearance - (availH - totalH) / 2;

  return {
    cells: Array.from({ length: count }, (_, idx) => {
      const col = idx % cols;
      const row = Math.floor(idx / cols);
      return {
        x: -totalW / 2 + cellW / 2 + col * (cellW + gap),
        y: startY - cellH / 2 - row * (cellH + gap),
        side: cols > 1 && col === 0 ? -1 : cols > 1 && col === cols - 1 ? 1 : 0,
        vert: row === 0 ? 1 : row === rows - 1 ? -1 : 0,
      };
    }),
    cellW,
    cellH,
    cols,
    rows,
  };
}

/* ─── WebGL Card Shaders (Rounded Glass Card + Hover Crimson Rim) ─── */
const CARD_VERT = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const CARD_FRAG = `
  uniform sampler2D map;
  uniform float uOpacity;
  uniform float uHover;
  varying vec2 vUv;

  float rbox(vec2 p, vec2 b, float r) {
    vec2 q = abs(p) - b + r;
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
  }

  void main() {
    vec2 uv = vUv;
    if (!gl_FrontFacing) uv.x = 1.0 - uv.x;
    vec2 p = (uv - 0.5) * vec2(${CARD_ASPECT.toFixed(4)}, 1.0);
    float d = rbox(p, vec2(${(CARD_ASPECT / 2).toFixed(4)}, 0.5), 0.055);
    float mask = 1.0 - smoothstep(-0.003, 0.003, d);
    if (mask < 0.01) discard;

    vec3 col = texture2D(map, uv).rgb;
    col *= 0.96 + 0.06 * uHover;

    // Subtle matte top sheen & crisp razor-thin border (no neon glow)
    col += vec3(1.0) * 0.022 * smoothstep(0.65, 1.0, uv.y) * (1.0 - uv.x * 0.5);

    float rim = smoothstep(-0.007, -0.002, d);
    vec3 rimCol = mix(vec3(0.24, 0.24, 0.28), vec3(0.85, 0.85, 0.9), uHover);
    col = mix(col, rimCol, rim * 0.35);

    gl_FragColor = vec4(col, mask * uOpacity);
  }
`;

/* ─── Crisp Ambient Particle Shaders (No Soft Glow Halo) ─── */
const BG_PARTICLE_VERT = `
  attribute float aSize;
  attribute float aSeed;
  uniform float uTime;
  uniform float uSpeed;
  uniform float uPixelRatio;
  varying float vAlpha;
  varying float vSeed;
  void main() {
    vec3 pos = position;
    pos.y += sin(uTime * (0.35 + aSeed * 0.5) + aSeed * 31.4) * 0.6;
    pos.x += cos(uTime * (0.25 + aSeed * 0.4) + aSeed * 22.1) * 0.5;
    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = aSize * uPixelRatio * (1.0 + uSpeed * 0.35) * (36.0 / max(-mv.z, 1.0));
    float pulse = 0.75 + 0.25 * sin(uTime * (0.8 + aSeed) + aSeed * 40.0);
    vAlpha = smoothstep(-58.0, -32.0, pos.z) * (1.0 - smoothstep(1.0, 6.0, pos.z)) * pulse * (0.22 + 0.45 * aSeed);
    vSeed = aSeed;
  }
`;

const BG_PARTICLE_FRAG = `
  varying float vAlpha;
  varying float vSeed;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    float dotMask = 1.0 - smoothstep(0.18, 0.36, d);
    float a = dotMask * vAlpha;
    if (a < 0.01) discard;
    vec3 col = mix(vec3(0.75, 0.08, 0.06), vec3(0.95, 0.25, 0.2), vSeed);
    gl_FragColor = vec4(col * a, a);
  }
`;

/* ─── High-DPI Offscreen Canvas Texture Renderer for Service Cards ─── */
function drawRoundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function wrapTextLines(ctx, text, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let line = "";
  for (let i = 0; i < words.length; i++) {
    const test = line ? line + " " + words[i] : words[i];
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = words[i];
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function drawServiceIconPath(ctx, slug, cx, cy, size, color) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.strokeStyle = color;
  ctx.lineWidth = 2.6;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  const r = size * 0.42;

  ctx.beginPath();
  if (slug === "seo-geo") {
    ctx.arc(-2, -2, r * 0.72, 0, Math.PI * 2);
    ctx.moveTo(r * 0.35, r * 0.35);
    ctx.lineTo(r * 0.95, r * 0.95);
  } else if (slug === "paid-media" || slug === "viral-social") {
    ctx.moveTo(-r * 0.7, r * 0.7);
    ctx.lineTo(r * 0.7, -r * 0.7);
    ctx.moveTo(0, -r * 0.7);
    ctx.lineTo(r * 0.7, -r * 0.7);
    ctx.lineTo(r * 0.7, 0);
  } else if (slug === "web-foundry") {
    ctx.rect(-r * 0.7, -r * 0.7, r * 1.4, r * 1.4);
    ctx.moveTo(-r * 0.7, -r * 0.15);
    ctx.lineTo(r * 0.7, -r * 0.15);
  } else if (slug === "inbox-edge") {
    ctx.rect(-r * 0.85, -r * 0.6, r * 1.7, r * 1.2);
    ctx.moveTo(-r * 0.85, -r * 0.6);
    ctx.lineTo(0, r * 0.1);
    ctx.lineTo(r * 0.85, -r * 0.6);
  } else if (slug === "brand-anvil") {
    ctx.arc(0, 0, r * 0.85, 0, Math.PI * 2);
    ctx.moveTo(r * 0.35, 0);
    ctx.arc(0, 0, r * 0.35, 0, Math.PI * 2);
  } else if (slug === "commercial-video") {
    ctx.moveTo(-r * 0.5, -r * 0.65);
    ctx.lineTo(r * 0.75, 0);
    ctx.lineTo(-r * 0.5, r * 0.65);
    ctx.closePath();
  } else if (slug === "cro-revenue") {
    ctx.arc(0, r * 0.2, r * 0.8, Math.PI, 0);
    ctx.moveTo(0, r * 0.2);
    ctx.lineTo(r * 0.48, -r * 0.35);
  } else if (slug === "reputation-shield") {
    ctx.moveTo(0, -r * 0.85);
    ctx.lineTo(r * 0.75, -r * 0.45);
    ctx.lineTo(r * 0.6, r * 0.35);
    ctx.lineTo(0, r * 0.85);
    ctx.lineTo(-r * 0.6, r * 0.35);
    ctx.lineTo(-r * 0.75, -r * 0.45);
    ctx.closePath();
  } else if (slug === "influencer-network") {
    ctx.arc(-r * 0.22, -r * 0.35, r * 0.32, 0, Math.PI * 2);
    ctx.moveTo(-r * 0.78, r * 0.72);
    ctx.arc(-r * 0.22, r * 0.72, r * 0.56, Math.PI, 0);
    ctx.moveTo(r * 0.48, -r * 0.15);
    ctx.arc(r * 0.48, -r * 0.15, r * 0.22, 0, Math.PI * 2);
    ctx.moveTo(r * 0.45, r * 0.72);
    ctx.lineTo(r * 0.85, r * 0.72);
  } else if (slug === "content-smithy") {
    ctx.moveTo(-r * 0.65, r * 0.7);
    ctx.lineTo(-r * 0.42, r * 0.08);
    ctx.lineTo(r * 0.42, -r * 0.76);
    ctx.lineTo(r * 0.76, -r * 0.42);
    ctx.lineTo(-r * 0.08, r * 0.42);
    ctx.closePath();
  } else if (slug === "visual-id") {
    ctx.arc(0, 0, r * 0.78, 0.25, Math.PI * 1.9);
    ctx.moveTo(-r * 0.3, -r * 0.25);
    ctx.arc(-r * 0.3, -r * 0.25, r * 0.12, 0, Math.PI * 2);
    ctx.moveTo(r * 0.28, -r * 0.2);
    ctx.arc(r * 0.28, -r * 0.2, r * 0.12, 0, Math.PI * 2);
  } else {
    ctx.arc(0, 0, r * 0.65, 0, Math.PI * 2);
    ctx.moveTo(-r * 0.3, 0);
    ctx.lineTo(r * 0.3, 0);
    ctx.moveTo(0, -r * 0.3);
    ctx.lineTo(0, r * 0.3);
  }
  ctx.stroke();
  ctx.restore();
}

function createServiceCardTexture(service, maxAniso) {
  const W = 1120;
  const H = 800;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");

  const isRed = service.theme === "red";
  const isWhite = service.theme === "white";

  // Card Background Gradient
  const grad = ctx.createLinearGradient(0, 0, W, H);
  if (isRed) {
    grad.addColorStop(0, "#FF1801");
    grad.addColorStop(1, "#C40F00");
  } else if (isWhite) {
    grad.addColorStop(0, "#FFFFFF");
    grad.addColorStop(1, "#EEF2F7");
  } else {
    grad.addColorStop(0, "#14121B");
    grad.addColorStop(1, "#07060A");
  }
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Subtle ambient glow inside dark/white cards
  if (!isRed) {
    const aura = ctx.createRadialGradient(W * 0.85, H * 0.85, 20, W * 0.85, H * 0.85, 420);
    aura.addColorStop(0, isWhite ? "rgba(255, 24, 1, 0.08)" : "rgba(255, 24, 1, 0.22)");
    aura.addColorStop(1, "transparent");
    ctx.fillStyle = aura;
    ctx.fillRect(0, 0, W, H);
  } else {
    const highlight = ctx.createRadialGradient(W * 0.15, H * 0.15, 20, W * 0.15, H * 0.15, 520);
    highlight.addColorStop(0, "rgba(255, 255, 255, 0.18)");
    highlight.addColorStop(1, "transparent");
    ctx.fillStyle = highlight;
    ctx.fillRect(0, 0, W, H);
  }

  const padX = 74;
  const padTop = 66;
  const titleColor = isWhite ? "#0F172A" : "#FFFFFF";
  const eyebrowColor = isRed ? "rgba(255, 255, 255, 0.92)" : "#FF1801";
  const descColor = isWhite
    ? "#475569"
    : isRed
    ? "rgba(255, 255, 255, 0.9)"
    : "rgba(255, 255, 255, 0.72)";

  // 1. Top Left Icon Pill
  drawRoundedRect(ctx, padX, padTop, 118, 52, 26);
  ctx.fillStyle = isRed
    ? "rgba(255, 255, 255, 0.18)"
    : isWhite
    ? "rgba(255, 24, 1, 0.08)"
    : "rgba(255, 24, 1, 0.14)";
  ctx.fill();
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = isRed
    ? "rgba(255, 255, 255, 0.35)"
    : isWhite
    ? "rgba(255, 24, 1, 0.22)"
    : "rgba(255, 24, 1, 0.35)";
  ctx.stroke();

  drawServiceIconPath(
    ctx,
    service.slug,
    padX + 59,
    padTop + 26,
    30,
    isRed ? "#FFFFFF" : "#FF1801"
  );

  // Top Right Eyebrow Pill
  ctx.font = '700 22px "JetBrains Mono", monospace';
  const ewText = service.eyebrow.replace(" /", "").trim();
  ctx.textBaseline = "middle";
  ctx.textAlign = "right";
  ctx.fillStyle = eyebrowColor;
  ctx.fillText(ewText, W - padX, padTop + 26);

  // 2. Main Heading (Eyebrow + Title)
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillStyle = titleColor;
  ctx.font = '900 72px "Outfit", "Plus Jakarta Sans", sans-serif';
  const fullHeading = `${service.eyebrow} ${service.title}`;
  const titleLines = wrapTextLines(ctx, fullHeading, W - padX * 2);
  let curY = padTop + 88;
  titleLines.slice(0, 3).forEach((line) => {
    ctx.fillText(line, padX, curY);
    curY += 78;
  });

  // 3. Description
  curY += 16;
  ctx.font = '500 29px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = descColor;
  const descLines = wrapTextLines(ctx, service.description, W - padX * 2 - 40);
  descLines.slice(0, 3).forEach((line) => {
    ctx.fillText(line, padX, curY);
    curY += 40;
  });

  // 4. Bottom Left Feature Pills
  const pillH = 54;
  const pillGap = 14;
  let pillY = H - 64 - service.items.length * pillH - (service.items.length - 1) * pillGap;
  ctx.font = '700 24px "Plus Jakarta Sans", sans-serif';

  service.items.forEach((item) => {
    const labelW = ctx.measureText(item).width;
    const pillW = Math.min(labelW + 86, 540);
    drawRoundedRect(ctx, padX, pillY, pillW, pillH, 27);
    ctx.fillStyle = isRed
      ? "rgba(255, 255, 255, 0.16)"
      : isWhite
      ? "rgba(15, 23, 42, 0.05)"
      : "rgba(255, 255, 255, 0.06)";
    ctx.fill();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = isRed
      ? "rgba(255, 255, 255, 0.28)"
      : isWhite
      ? "rgba(15, 23, 42, 0.12)"
      : "rgba(255, 24, 1, 0.28)";
    ctx.stroke();

    // Small circle indicator
    ctx.beginPath();
    ctx.arc(padX + 28, pillY + pillH / 2, 7, 0, Math.PI * 2);
    ctx.fillStyle = isRed ? "#FFFFFF" : "#FF1801";
    ctx.fill();

    ctx.textBaseline = "middle";
    ctx.fillStyle = titleColor;
    ctx.fillText(item, padX + 50, pillY + pillH / 2 + 1);
    pillY += pillH + pillGap;
  });

  // 5. Bottom Right Giant Service Number + FORGE CTA
  ctx.textAlign = "right";
  ctx.textBaseline = "alphabetic";
  ctx.font = '900 132px "Outfit", sans-serif';
  ctx.fillStyle = isRed
    ? "rgba(255, 255, 255, 0.96)"
    : isWhite
    ? "#0F172A"
    : "#FF1801";
  ctx.fillText(service.number, W - padX, H - 108);

  // Subtle decorative ring around number
  ctx.beginPath();
  ctx.arc(W - padX - 65, H - 155, 86, 0, Math.PI * 2);
  ctx.strokeStyle = isRed
    ? "rgba(255, 255, 255, 0.2)"
    : isWhite
    ? "rgba(15, 23, 42, 0.08)"
    : "rgba(255, 24, 1, 0.22)";
  ctx.lineWidth = 2;
  ctx.stroke();

  // FORGE -> CTA label
  ctx.font = '800 24px "JetBrains Mono", monospace';
  ctx.fillStyle = isRed ? "#FFFFFF" : isWhite ? "#FF1801" : "#FFFFFF";
  ctx.fillText("FORGE →", W - padX, H - 62);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  if (maxAniso) texture.anisotropy = Math.min(8, maxAniso);
  texture.needsUpdate = true;
  return texture;
}

export default function StackedServicesSection({ onSelectService, navigate: propNavigate }) {
  const router = useRouter();
  const navigate = propNavigate || ((to) => router.push(to));

  const sectionRef = useRef(null);
  const canvasHostRef = useRef(null);
  const tooltipRef = useRef(null);
  const progressBarRef = useRef(null);
  const activeCountRef = useRef(null);

  const [useFallbackGrid, setUseFallbackGrid] = useState(false);

  const handleServiceOpen = (service) => {
    if (navigate) {
      navigate(serviceUrl(service.slug));
    } else if (onSelectService) {
      onSelectService();
    }
  };
  const handleServiceOpenRef = useRef(handleServiceOpen);
  handleServiceOpenRef.current = handleServiceOpen;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmallTouch = window.matchMedia("(max-width: 768px), (pointer: coarse)").matches;

    if (prefersReduced || isSmallTouch) {
      setUseFallbackGrid(true);
      return;
    }

    const sectionEl = sectionRef.current;
    const hostEl = canvasHostRef.current;
    const tooltipEl = tooltipRef.current;
    if (!sectionEl || !hostEl) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      setUseFallbackGrid(true);
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    hostEl.appendChild(renderer.domElement);
    renderer.domElement.style.cssText =
      "position:absolute;inset:0;width:100%;height:100%;display:block;";

    const maxAniso = renderer.capabilities.getMaxAnisotropy();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(SCENE_CFG.FOV, 1, 0.1, 200);
    camera.position.set(0, 0, SCENE_CFG.CAM_Z);

    // 1. Background Crimson Bokeh Particles
    const particleCount = 240;
    const pPos = new Float32Array(particleCount * 3);
    const pSize = new Float32Array(particleCount);
    const pSeed = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      const r = Math.pow(Math.random(), 0.7) * 24;
      const a = Math.random() * Math.PI * 2;
      pPos[i * 3] = Math.cos(a) * r * 1.45;
      pPos[i * 3 + 1] = Math.sin(a) * r * 0.9;
      pPos[i * 3 + 2] = -Math.random() * 55 + 2;
      pSize[i] = Math.random() < 0.08 ? 6 + Math.random() * 10 : 1.4 + Math.random() * 3.4;
      pSeed[i] = Math.random();
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    particleGeo.setAttribute("aSize", new THREE.BufferAttribute(pSize, 1));
    particleGeo.setAttribute("aSeed", new THREE.BufferAttribute(pSeed, 1));
    const particleMat = new THREE.ShaderMaterial({
      vertexShader: BG_PARTICLE_VERT,
      fragmentShader: BG_PARTICLE_FRAG,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uSpeed: { value: 0 },
        uPixelRatio: { value: renderer.getPixelRatio() },
      },
    });
    const particlePoints = new THREE.Points(particleGeo, particleMat);
    particlePoints.frustumCulled = false;
    scene.add(particlePoints);

    // 2. Curved 3D Rail (CatmullRomCurve3) pre-sampled into 400 lookup points
    const curve = new THREE.CatmullRomCurve3(
      SCENE_CFG.RAIL.map(([x, y, z]) => new THREE.Vector3(x, y, z)),
      false,
      "centripetal"
    );
    const sampledPts = [];
    const sampledTans = [];
    for (let i = 0; i <= 400; i++) {
      sampledPts.push(curve.getPointAt(i / 400));
      sampledTans.push(curve.getTangentAt(i / 400));
    }

    const evalRail = (t, outPos, outTan) => {
      const clamped = clamp01(t) * 400;
      const idx = Math.min(Math.floor(clamped), 399);
      const frac = clamped - idx;
      outPos.lerpVectors(sampledPts[idx], sampledPts[idx + 1], frac);
      outTan.lerpVectors(sampledTans[idx], sampledTans[idx + 1], frac).normalize();
    };

    // 3. Create 12 3D Service Card Meshes
    const cardGeo = new THREE.PlaneGeometry(CARD_ASPECT, 1, 20, 14);
    const cardEntries = SERVICES.map((service, idx) => {
      const texture = createServiceCardTexture(service, maxAniso);
      const mat = new THREE.ShaderMaterial({
        vertexShader: CARD_VERT,
        fragmentShader: CARD_FRAG,
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false,
        uniforms: {
          map: { value: texture },
          uOpacity: { value: 0 },
          uHover: { value: 0 },
        },
      });
      const mesh = new THREE.Mesh(cardGeo, mat);
      mesh.userData.index = idx;
      scene.add(mesh);

      return {
        service,
        mesh,
        mat,
        texture,
        hover: 0,
      };
    });

    // Redraw crisp canvas textures once Google Fonts finish loading
    let fontCancelled = false;
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (fontCancelled) return;
        cardEntries.forEach((entry) => {
          const updatedTex = createServiceCardTexture(entry.service, maxAniso);
          entry.texture.dispose();
          entry.texture = updatedTex;
          entry.mat.uniforms.map.value = updatedTex;
        });
      });
    }

    // 4. Sizing & Grid Computation
    let hostW = 1;
    let hostH = 1;
    let gridLayout = null;

    const handleResize = () => {
      hostW = hostEl.clientWidth || window.innerWidth;
      hostH = hostEl.clientHeight || window.innerHeight;
      renderer.setSize(hostW, hostH, false);
      camera.aspect = hostW / Math.max(hostH, 1);
      camera.updateProjectionMatrix();
      gridLayout = computeGridLayout(
        cardEntries.length,
        hostW,
        hostH,
        SCENE_CFG.FOV,
        SCENE_CFG.CAM_Z
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // 5. Scroll Progress Calculation (with smooth pre-entry ramp so Card 01 enters immediately)
    let targetProgress = 0;
    let currentProgress = 0;
    let isVisible = false;

    const handleScroll = () => {
      const rect = sectionEl.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const scrollDist = Math.max(rect.height - vh, 1);

      if (rect.top > vh * 0.55) {
        targetProgress = 0;
      } else if (rect.top > 0) {
        const pre = 1 - rect.top / (vh * 0.55);
        targetProgress = clamp01(pre) * 0.085;
      } else {
        const inside = clamp01(-rect.top / scrollDist);
        targetProgress = 0.085 + inside * 0.915;
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    if (window.__lenis) {
      window.__lenis.on("scroll", handleScroll);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { rootMargin: "250px 0px" }
    );
    observer.observe(sectionEl);

    // 6. Raycasting Hover & Click Handling
    const raycaster = new THREE.Raycaster();
    const pointerNDC = new THREE.Vector2(9, 9);
    let hoveredIdx = -1;
    let ptrX = 0;
    let ptrY = 0;
    let downX = 0;
    let downY = 0;

    const onPointerMove = (e) => {
      const rect = hostEl.getBoundingClientRect();
      ptrX = e.clientX - rect.left;
      ptrY = e.clientY - rect.top;
      pointerNDC.set((ptrX / rect.width) * 2 - 1, -((ptrY / rect.height) * 2 - 1));
    };

    const onPointerLeave = () => {
      pointerNDC.set(9, 9);
      hoveredIdx = -1;
      if (tooltipEl) {
        tooltipEl.classList.remove("is-visible");
      }
    };

    const onPointerDown = (e) => {
      downX = e.clientX;
      downY = e.clientY;
      onPointerMove(e);
    };

    const onPointerUp = (e) => {
      if (Math.hypot(e.clientX - downX, e.clientY - downY) > 8) return;
      onPointerMove(e);
      updateRaycast();
      if (hoveredIdx >= 0) {
        handleServiceOpenRef.current(cardEntries[hoveredIdx].service);
      }
    };

    const updateRaycast = () => {
      if (pointerNDC.x > 2) {
        hoveredIdx = -1;
        return;
      }
      raycaster.setFromCamera(pointerNDC, camera);
      const visibleMeshes = cardEntries
        .filter((c) => c.mat.uniforms.uOpacity.value > 0.25)
        .map((c) => c.mesh);
      const hits = raycaster.intersectObjects(visibleMeshes, false);
      hoveredIdx = hits.length ? hits[0].object.userData.index : -1;
    };

    hostEl.addEventListener("pointermove", onPointerMove);
    hostEl.addEventListener("pointerleave", onPointerLeave);
    hostEl.addEventListener("pointerdown", onPointerDown);
    hostEl.addEventListener("pointerup", onPointerUp);

    // 7. Render Loop Vectors (Pre-allocated for zero GC churn)
    const tmpPos = new THREE.Vector3();
    const tmpTan = new THREE.Vector3();
    const tmpFlatTan = new THREE.Vector3();
    const tmpSide = new THREE.Vector3();
    const tmpUp = new THREE.Vector3(0, 1, 0);
    const tmpCross = new THREE.Vector3();
    const tmpMat = new THREE.Matrix4();
    const tmpQuat = new THREE.Quaternion();
    const identityQuat = new THREE.Quaternion();
    const tiltQuat = new THREE.Quaternion();

    const endRailPos = new THREE.Vector3();
    const ctrlPos = new THREE.Vector3();
    const targetGridPos = new THREE.Vector3();

    const baseRailScale = SCENE_CFG.CARD_W / CARD_ASPECT;
    let lastTime = performance.now();
    let elapsedTime = 0;
    let rafId = 0;

    const animate = (now) => {
      rafId = requestAnimationFrame(animate);
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      if (!isVisible || document.hidden) return;

      const prevProgress = currentProgress;
      currentProgress += (targetProgress - currentProgress) * (1 - Math.exp(-7 * dt));
      if (Math.abs(targetProgress - currentProgress) < 1e-5) {
        currentProgress = targetProgress;
      }

      const scrollSpeed = Math.min(Math.abs(currentProgress - prevProgress) / Math.max(dt, 0.001) * 2.5, 1.5);
      elapsedTime += dt;

      particleMat.uniforms.uTime.value = elapsedTime;
      particleMat.uniforms.uSpeed.value = scrollSpeed;

      // Update UI Progress Bar & Front-Card Counter
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${currentProgress.toFixed(4)})`;
      }

      let frontIdx = 0;
      let highestZ = -999;

      cardEntries.forEach((entry, idx) => {
        const tl = evalCardTimeline(currentProgress, idx, cardEntries.length);

        evalRail(tl.rail, tmpPos, tmpTan);
        tmpFlatTan.set(tmpTan.x, 0, tmpTan.z);
        if (tmpFlatTan.lengthSq() < 1e-4) tmpFlatTan.set(1, 0, 0);
        tmpFlatTan.normalize();
        tmpSide.crossVectors(tmpFlatTan, tmpUp).normalize();
        if (tmpSide.z < 0) tmpSide.negate();
        tmpMat.makeBasis(tmpCross.crossVectors(tmpUp, tmpSide).normalize(), tmpUp, tmpSide);
        tmpQuat.setFromRotationMatrix(tmpMat);

        const cell = gridLayout.cells[idx];

        if (tl.fly <= 0) {
          entry.mesh.position.copy(tmpPos);
          entry.mesh.quaternion.copy(tmpQuat);
          entry.mesh.scale.setScalar(baseRailScale);
        } else {
          evalRail(1, endRailPos, tmpTan);
          targetGridPos.set(cell.x, cell.y, 0);
          ctrlPos.set(
            cell.x + cell.side * gridLayout.cellW * 0.9,
            cell.y + cell.vert * gridLayout.cellH * 1.45,
            1.3
          );

          const t = easeInOutCubic(tl.fly);
          const inv = 1 - t;
          entry.mesh.position.set(
            inv * inv * endRailPos.x + 2 * inv * t * ctrlPos.x + t * t * targetGridPos.x,
            inv * inv * endRailPos.y + 2 * inv * t * ctrlPos.y + t * t * targetGridPos.y,
            inv * inv * endRailPos.z + 2 * inv * t * ctrlPos.z + t * t * targetGridPos.z
          );

          identityQuat.identity();
          entry.mesh.quaternion.copy(tmpQuat).slerp(identityQuat, t);
          tiltQuat.setFromAxisAngle(
            tmpCross.set(0, 0, 1),
            Math.sin(Math.PI * t) * 0.16 * (cell.side || cell.vert || 1)
          );
          entry.mesh.quaternion.multiply(tiltQuat);
          entry.mesh.scale.setScalar(THREE.MathUtils.lerp(baseRailScale, gridLayout.cellH, t));
        }

        if (tl.opacity > 0.5 && entry.mesh.position.z > highestZ) {
          highestZ = entry.mesh.position.z;
          frontIdx = idx;
        }

        entry.mesh.renderOrder = Math.round(entry.mesh.position.z * 100);
        entry.hover += ((idx === hoveredIdx ? 1 : 0) - entry.hover) * (1 - Math.exp(-10 * dt));
        entry.mat.uniforms.uHover.value = entry.hover;
        entry.mesh.scale.multiplyScalar(1 + entry.hover * 0.06);
        entry.mat.uniforms.uOpacity.value = tl.opacity;
        entry.mesh.visible = tl.opacity > 0.002;
      });

      if (activeCountRef.current) {
        const numStr = String(frontIdx + 1).padStart(2, "0");
        if (activeCountRef.current.textContent !== numStr) {
          activeCountRef.current.textContent = numStr;
        }
      }

      scene.updateMatrixWorld(true);
      updateRaycast();
      hostEl.style.cursor = hoveredIdx >= 0 ? "pointer" : "";

      if (tooltipEl) {
        if (hoveredIdx >= 0) {
          const svc = cardEntries[hoveredIdx].service;
          if (tooltipEl.dataset.slug !== svc.slug) {
            tooltipEl.dataset.slug = svc.slug;
            const numEl = tooltipEl.querySelector("[data-num]");
            const eyebrowEl = tooltipEl.querySelector("[data-eyebrow]");
            const titleEl = tooltipEl.querySelector("[data-title]");
            const descEl = tooltipEl.querySelector("[data-desc]");
            if (numEl) numEl.textContent = svc.number;
            if (eyebrowEl) eyebrowEl.textContent = svc.eyebrow.replace(" /", "");
            if (titleEl) titleEl.textContent = svc.title;
            if (descEl) descEl.textContent = svc.description;
            svc.items.forEach((item, idx) => {
              const chipEl = tooltipEl.querySelector(`[data-chip="${idx}"]`);
              if (chipEl) chipEl.textContent = item;
            });
          }
          tooltipEl.classList.add("is-visible");
          const tx = Math.max(14, Math.min(ptrX + 22, hostW - tooltipEl.offsetWidth - 14));
          const ty = Math.max(14, Math.min(ptrY + 22, hostH - tooltipEl.offsetHeight - 14));
          tooltipEl.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
        } else {
          tooltipEl.classList.remove("is-visible");
        }
      }

      renderer.render(scene, camera);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      fontCancelled = true;
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      if (window.__lenis) {
        window.__lenis.off("scroll", handleScroll);
      }
      hostEl.removeEventListener("pointermove", onPointerMove);
      hostEl.removeEventListener("pointerleave", onPointerLeave);
      hostEl.removeEventListener("pointerdown", onPointerDown);
      hostEl.removeEventListener("pointerup", onPointerUp);

      cardEntries.forEach((entry) => {
        entry.mat.dispose();
        entry.texture.dispose();
      });
      cardGeo.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === hostEl) {
        hostEl.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Mobile / Reduced-Motion Clean Card Grid Fallback
  if (useFallbackGrid) {
    return (
      <section className="bf-services-mobile-root" ref={sectionRef}>
        <style>{mobileStyles}</style>
        <div className="bf-srv-mob-header">
          <span className="bf-srv-eyebrow">WHAT WE FORGE · 12 CAPABILITIES</span>
          <h2 className="bf-srv-heading">SERVICES.</h2>
          <div className="bf-srv-bar" />
        </div>

        <div className="bf-srv-mob-grid">
          {SERVICES.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.slug}
                className={`bf-srv-mob-card theme-${svc.theme}`}
                onClick={() => handleServiceOpen(svc)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") handleServiceOpen(svc);
                }}
              >
                <div className="bf-mob-top">
                  <span className="bf-mob-icon">
                    <Icon size={18} />
                  </span>
                  <span className="bf-mob-num">{svc.number}</span>
                </div>
                <span className="bf-mob-eyebrow">{svc.eyebrow}</span>
                <h3 className="bf-mob-title">{svc.title}</h3>
                <p className="bf-mob-desc">{svc.description}</p>
                <div className="bf-mob-pills">
                  {svc.items.map((item) => (
                    <span key={item} className="bf-mob-pill">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="bf-mob-footer">
                  <span>FORGE →</span>
                  <ArrowUpRight size={15} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="bf-services-3d-section"
      style={{ height: "460vh" }}
    >
      <style>{desktopStyles}</style>

      <div className="bf-services-3d-sticky">
        {/* SUBTLE GHOSTED KINETIC TYPOGRAPHY BACKDROP */}
        <div className="bf-services-bg-words" aria-hidden="true">
          <span>BRANDFORGE</span>
          <span>WHAT WE DO</span>
          <span>SERVICES</span>
        </div>

        {/* TOP HEADER */}
        <div className="bf-services-header">
          <span className="bf-srv-eyebrow">WHAT WE FORGE · 12 CAPABILITIES</span>
          <h2 className="bf-srv-heading">SERVICES.</h2>
          <div className="bf-srv-bar" />
          <p className="bf-srv-subhint">
            Scroll to explore our 12 specialized studios · Click any card to inspect
          </p>
        </div>

        {/* THREE.JS 3D CURVED SPLINE-TO-GRID CANVAS */}
        <div
          ref={canvasHostRef}
          className="bf-services-canvas-host"
          aria-label="12 Interactive BrandForge Service Cards"
          role="region"
        />

        {/* CREATIVE STUDIO SPEC HOVER CARD */}
        <div ref={tooltipRef} className="bf-services-tooltip" aria-hidden="true">
          <div className="bf-tt-card">
            <div className="bf-tt-rail" />
            <div className="bf-tt-body">
              <div className="bf-tt-top">
                <div className="bf-tt-index-wrap">
                  <span className="bf-tt-prefix">NO.</span>
                  <span data-num="" className="bf-tt-num">
                    01
                  </span>
                </div>
                <span data-eyebrow="" className="bf-tt-badge" />
              </div>

              <strong data-title="" className="bf-tt-title" />
              <p data-desc="" className="bf-tt-desc" />

              <div className="bf-tt-chips">
                <span data-chip="0" className="bf-tt-chip" />
                <span data-chip="1" className="bf-tt-chip" />
                <span data-chip="2" className="bf-tt-chip" />
              </div>

              <div className="bf-tt-footer">
                <span className="bf-tt-cta-label">OPEN CAPABILITY</span>
                <span className="bf-tt-arrow">↗</span>
              </div>
            </div>
          </div>
        </div>

        {/* VERTICAL LEFT HUD INDICATOR */}
        <div className="bf-services-hud-left" aria-hidden="true">
          <span className="bf-hud-dot" />
          <span>12 SERVICES</span>
        </div>

        {/* BOTTOM SCROLL PROGRESS BAR & INDEX */}
        <div className="bf-services-progress-wrap" aria-hidden="true">
          <span ref={activeCountRef} className="bf-prog-num">
            01
          </span>
          <div className="bf-prog-track">
            <div ref={progressBarRef} className="bf-prog-fill" />
          </div>
          <span className="bf-prog-total">12</span>
        </div>
      </div>
    </section>
  );
}

const desktopStyles = `
  .bf-services-3d-section {
    position: relative;
    width: 100%;
    background: #020104;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    isolation: isolate;
  }

  .bf-services-3d-sticky {
    position: sticky;
    top: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: #020104;
  }

  .bf-services-bg-words {
    position: absolute;
    inset: -5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    user-select: none;
    opacity: 0.04;
    z-index: 1;
  }

  .bf-services-bg-words span {
    font-family: "Outfit", sans-serif;
    font-size: clamp(7rem, 16vw, 20rem);
    font-weight: 900;
    line-height: 0.85;
    letter-spacing: -0.05em;
    color: #FFFFFF;
    white-space: nowrap;
  }

  .bf-services-bg-words span:nth-child(3) {
    color: #FF1801;
  }

  .bf-services-header {
    position: absolute;
    top: clamp(18px, 3vh, 36px);
    left: 0;
    right: 0;
    z-index: 20;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 20px;
    pointer-events: none;
  }

  .bf-srv-eyebrow {
    font-family: "JetBrains Mono", monospace;
    font-size: clamp(10px, 0.78vw, 12.5px);
    font-weight: 700;
    letter-spacing: 0.22em;
    color: #FF1801;
    text-transform: uppercase;
    margin-bottom: 6px;
  }

  .bf-srv-heading {
    margin: 0;
    font-family: "Outfit", sans-serif;
    font-size: clamp(32px, 4.2vw, 62px);
    font-weight: 900;
    line-height: 0.95;
    letter-spacing: -0.03em;
    color: #FFFFFF;
    text-transform: uppercase;
  }

  .bf-srv-bar {
    width: 64px;
    height: 4px;
    background: #FF1801;
    border-radius: 999px;
    margin-top: 10px;
  }

  .bf-srv-subhint {
    margin: 10px 0 0;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: clamp(12px, 0.85vw, 14px);
    color: rgba(255, 255, 255, 0.55);
    letter-spacing: 0.01em;
  }

  .bf-services-canvas-host {
    position: absolute;
    inset: 0;
    z-index: 10;
  }

  /* CREATIVE STUDIO SPEC HOVER CARD (MATTE / NO GLOW) */
  .bf-services-tooltip {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 35;
    pointer-events: none;
    opacity: 0;
    width: 318px;
    transition: opacity 0.16s ease;
    will-change: transform, opacity;
  }

  .bf-services-tooltip.is-visible {
    opacity: 1;
  }

  .bf-tt-card {
    position: relative;
    display: flex;
    overflow: hidden;
    border-radius: 14px;
    background: #0B0B0F;
    border: 1px solid rgba(255, 255, 255, 0.16);
    box-shadow: 0 18px 36px rgba(0, 0, 0, 0.65);
    transform: scale(0.95) translateY(6px);
    transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .bf-services-tooltip.is-visible .bf-tt-card {
    transform: scale(1) translateY(0);
  }

  .bf-tt-rail {
    width: 4px;
    flex-shrink: 0;
    background: #FF1801;
  }

  .bf-tt-body {
    flex: 1;
    padding: 14px 16px 13px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .bf-tt-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .bf-tt-index-wrap {
    display: inline-flex;
    align-items: baseline;
    gap: 3px;
  }

  .bf-tt-prefix {
    font-family: "JetBrains Mono", monospace;
    font-size: 9.5px;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: rgba(255, 255, 255, 0.42);
  }

  .bf-tt-num {
    font-family: "Outfit", sans-serif;
    font-size: 16px;
    font-weight: 900;
    line-height: 1;
    color: #FF1801;
  }

  .bf-tt-badge {
    font-family: "JetBrains Mono", monospace;
    font-size: 9.5px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #FFFFFF;
    padding: 3px 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.12);
  }

  .bf-tt-title {
    font-family: "Outfit", sans-serif;
    font-size: 17px;
    font-weight: 900;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
    line-height: 1.12;
  }

  .bf-tt-desc {
    margin: 0;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 11.5px;
    line-height: 1.42;
    color: rgba(255, 255, 255, 0.68);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .bf-tt-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    padding-top: 2px;
  }

  .bf-tt-chip {
    font-family: "JetBrains Mono", monospace;
    font-size: 9.5px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.88);
    padding: 3px 7px;
    border-radius: 5px;
    background: #14141A;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .bf-tt-footer {
    margin-top: 2px;
    padding-top: 9px;
    border-top: 1px dashed rgba(255, 255, 255, 0.14);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .bf-tt-cta-label {
    font-family: "JetBrains Mono", monospace;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.14em;
    color: rgba(255, 255, 255, 0.8);
  }

  .bf-tt-arrow {
    width: 22px;
    height: 22px;
    border-radius: 999px;
    background: #FF1801;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: 800;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  /* LEFT ROTATED HUD */
  .bf-services-hud-left {
    position: absolute;
    top: 50%;
    left: 28px;
    transform: translateY(-50%) rotate(-90deg);
    transform-origin: left center;
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: "JetBrains Mono", monospace;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.22em;
    color: rgba(255, 255, 255, 0.5);
    z-index: 25;
    pointer-events: none;
  }

  .bf-hud-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #FF1801;
  }

  /* BOTTOM PROGRESS BAR */
  .bf-services-progress-wrap {
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 25;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 6px 16px;
    border-radius: 999px;
    background: rgba(12, 11, 16, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.12);
    pointer-events: none;
  }

  .bf-prog-num {
    font-family: "JetBrains Mono", monospace;
    font-size: 12px;
    font-weight: 800;
    color: #FF1801;
    min-width: 18px;
  }

  .bf-prog-track {
    width: 140px;
    height: 3px;
    background: rgba(255, 255, 255, 0.14);
    border-radius: 999px;
    overflow: hidden;
  }

  .bf-prog-fill {
    width: 100%;
    height: 100%;
    background: #FF1801;
    transform-origin: left center;
    transform: scaleX(0);
  }

  .bf-prog-total {
    font-family: "JetBrains Mono", monospace;
    font-size: 12px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.45);
  }
`;

const mobileStyles = `
  .bf-services-mobile-root {
    position: relative;
    width: 100%;
    background: #020104;
    padding: 72px 18px 80px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    font-family: "Plus Jakarta Sans", sans-serif;
  }

  .bf-srv-mob-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 36px;
  }

  .bf-srv-eyebrow {
    font-family: "JetBrains Mono", monospace;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.2em;
    color: #FF1801;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  .bf-srv-heading {
    margin: 0;
    font-family: "Outfit", sans-serif;
    font-size: 36px;
    font-weight: 900;
    color: #FFFFFF;
    letter-spacing: -0.03em;
  }

  .bf-srv-bar {
    width: 56px;
    height: 4px;
    background: #FF1801;
    border-radius: 999px;
    margin-top: 10px;
  }

  .bf-srv-mob-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 18px;
    max-width: 1000px;
    margin: 0 auto;
  }

  .bf-srv-mob-card {
    border-radius: 20px;
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    cursor: pointer;
    transition: transform 0.25s ease;
  }

  .bf-srv-mob-card:active {
    transform: scale(0.98);
  }

  .bf-srv-mob-card.theme-red {
    background: linear-gradient(135deg, #FF1801 0%, #C40F00 100%);
    color: #FFFFFF;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .bf-srv-mob-card.theme-dark {
    background: linear-gradient(135deg, #14121B 0%, #07060A 100%);
    color: #FFFFFF;
    border: 1px solid rgba(255, 24, 1, 0.28);
  }

  .bf-srv-mob-card.theme-white {
    background: linear-gradient(135deg, #FFFFFF 0%, #F1F5F9 100%);
    color: #0F172A;
    border: 1px solid rgba(15, 23, 42, 0.1);
  }

  .bf-mob-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .bf-mob-icon {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    display: grid;
    place-items: center;
    background: rgba(255, 255, 255, 0.14);
  }

  .theme-white .bf-mob-icon {
    background: rgba(255, 24, 1, 0.1);
    color: #FF1801;
  }

  .theme-dark .bf-mob-icon {
    background: rgba(255, 24, 1, 0.15);
    color: #FF1801;
  }

  .bf-mob-num {
    font-family: "Outfit", sans-serif;
    font-size: 28px;
    font-weight: 900;
    opacity: 0.9;
  }

  .theme-dark .bf-mob-num {
    color: #FF1801;
  }

  .bf-mob-eyebrow {
    font-family: "JetBrains Mono", monospace;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    opacity: 0.85;
  }

  .theme-white .bf-mob-eyebrow,
  .theme-dark .bf-mob-eyebrow {
    color: #FF1801;
  }

  .bf-mob-title {
    margin: 0;
    font-family: "Outfit", sans-serif;
    font-size: 22px;
    font-weight: 900;
    line-height: 1.1;
  }

  .bf-mob-desc {
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
    opacity: 0.86;
  }

  .bf-mob-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 6px;
  }

  .bf-mob-pill {
    font-size: 11px;
    font-weight: 700;
    padding: 5px 11px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.15);
  }

  .theme-white .bf-mob-pill {
    background: rgba(15, 23, 42, 0.07);
  }

  .bf-mob-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 6px;
    margin-top: 8px;
    font-family: "JetBrains Mono", monospace;
    font-size: 12px;
    font-weight: 800;
  }

  .theme-white .bf-mob-footer {
    color: #FF1801;
  }
`;
