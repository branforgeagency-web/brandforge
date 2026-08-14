import React, { useEffect, useRef } from "react";
import * as THREE from "three";

/* ─────────────────────────────────────────────────────────────────────────────
   BrandForge Section Component — 3D WebGL Particle Morphing & Motion Experience
   
   Features:
     • ~48k glowing particles in BrandForge's official Crimson Red (#FF4D4D) logo theme
     • 3D shape morphing between deep galaxy starfield scatter and 3D Orbital Knot
     • Scroll-driven lerped hand-off with camera depth dollying & fog depth-fade
     • Interactive cursor repulsion field (particles disperse away from cursor)
     • Directional text slide-in easing + outline typography styling
   ───────────────────────────────────────────────────────────────────────────── */

const CAM_Z = 15;
const FOV = 45;
const TAU = Math.PI * 2;

const VERT_SHADER = `
  uniform float uSize;
  uniform float uScale;
  uniform float uNear;
  uniform float uFar;
  attribute float aSize;
  attribute vec3 aColor;
  varying vec3 vColor;
  varying float vFog;
  void main() {
    vColor = aColor;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    float depth = -mv.z;
    gl_PointSize = uSize * aSize * (uScale / max(0.001, depth));
    vFog = clamp((uFar - depth) / (uFar - uNear), 0.04, 1.0);
    gl_Position = projectionMatrix * mv;
  }
`;

const FRAG_SHADER = `
  precision highp float;
  varying vec3 vColor;
  varying float vFog;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.0, d);
    a = pow(a, 1.5);
    gl_FragColor = vec4(vColor, a * vFog);
  }
`;

function smoother(t) {
  return t * t * t * (t * (t * 6 - 15) + 10);
}

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);

// BRANDFORGE OFFICIAL LOGO COLOR PALETTE (#FF4D4D Logo Red & Warm Accents)
const P_WHITE = [1.0, 1.0, 1.0];
const P_RED = [1.0, 0.302, 0.302];      // #FF4D4D (Official Logo Red)
const P_CRIMSON = [0.847, 0.149, 0.149];  // #D82626
const P_GOLD = [1.0, 0.72, 0.25];       // #FFB800
const P_DIM = [0.36, 0.33, 0.40];

function col(C, i, c, k = 1) {
  C[i * 3] = Math.min(1.35, c[0] * k);
  C[i * 3 + 1] = Math.min(1.35, c[1] * k);
  C[i * 3 + 2] = Math.min(1.35, c[2] * k);
}

function dirOnSphere(out) {
  const a = Math.random() * TAU;
  const z = Math.random() * 2 - 1;
  const r = Math.sqrt(Math.max(0, 1 - z * z));
  out[0] = Math.cos(a) * r;
  out[1] = z;
  out[2] = Math.sin(a) * r;
}

const ORBITS = [
  { rx: 0.2, ry: 0.0, a: 1.0, b: 0.6 },
  { rx: 1.15, ry: 0.5, a: 0.86, b: 0.62 },
  { rx: 0.6, ry: -0.7, a: 1.02, b: 0.54 },
  { rx: 1.45, ry: 0.95, a: 0.78, b: 0.7 },
  { rx: 0.35, ry: 1.25, a: 0.92, b: 0.5 },
  { rx: -0.5, ry: 0.4, a: 0.84, b: 0.66 },
];

const NODES = [
  { o: 0, ang: 0.6, red: true },
  { o: 1, ang: 2.4, red: true },
  { o: 2, ang: 4.1, red: true },
  { o: 3, ang: 1.2, red: true },
  { o: 4, ang: 3.3, red: false },
  { o: 1, ang: 5.0, red: false },
  { o: 5, ang: 0.25, red: false },
];

function orbitPoint(o, ang, rr, out) {
  let x = Math.cos(ang) * o.a * rr, y = Math.sin(ang) * o.b * rr, z = 0;
  const y1 = y * Math.cos(o.rx) - z * Math.sin(o.rx), z1 = y * Math.sin(o.rx) + z * Math.cos(o.rx);
  y = y1; z = z1;
  const x1 = x * Math.cos(o.ry) + z * Math.sin(o.ry), z2 = -x * Math.sin(o.ry) + z * Math.cos(o.ry);
  x = x1; z = z2;
  out[0] = x; out[1] = y; out[2] = z;
}

function buildOrbitalKnot(n, P, C) {
  const d = [0, 0, 0];
  const t = [0, 0, 0];
  let i = 0;

  const cntCore = Math.round(n * 0.2);
  for (; i < cntCore; i++) {
    dirOnSphere(d);
    const rr = Math.pow(Math.random(), 0.5) * 0.27;
    P[i * 3] = d[0] * rr; P[i * 3 + 1] = d[1] * rr; P[i * 3 + 2] = d[2] * rr;
    col(C, i, rr < 0.08 ? P_WHITE : Math.random() < 0.2 ? P_GOLD : P_RED, 0.95 + Math.random() * 0.4);
  }

  const cntRays = Math.round(n * 0.06);
  for (let j = 0; j < cntRays && i < n; j++, i++) {
    dirOnSphere(d);
    const rr = 0.27 + Math.random() * 0.2;
    P[i * 3] = d[0] * rr; P[i * 3 + 1] = d[1] * rr; P[i * 3 + 2] = d[2] * rr;
    col(C, i, Math.random() < 0.5 ? P_WHITE : P_RED, 0.7 + Math.random() * 0.3);
  }

  const cntRings = Math.round(n * 0.42);
  for (let j = 0; j < cntRings && i < n; j++, i++) {
    const o = ORBITS[Math.floor(Math.random() * ORBITS.length)];
    orbitPoint(o, Math.random() * TAU, 1.0, t);
    const jitter = 0.014;
    P[i * 3] = t[0] + (Math.random() - 0.5) * jitter;
    P[i * 3 + 1] = t[1] + (Math.random() - 0.5) * jitter;
    P[i * 3 + 2] = t[2] + (Math.random() - 0.5) * jitter;
    col(C, i, Math.random() < 0.15 ? P_WHITE : P_RED, 0.8 + Math.random() * 0.3);
  }

  const cntNodes = Math.round(n * 0.26);
  for (let j = 0; j < cntNodes && i < n; j++, i++) {
    const ns = NODES[Math.floor(Math.random() * NODES.length)];
    orbitPoint(ORBITS[ns.o], ns.ang, 1.0, t);
    dirOnSphere(d);
    const rad = ns.red ? 0.12 : 0.075;
    P[i * 3] = t[0] + d[0] * rad; P[i * 3 + 1] = t[1] + d[1] * rad; P[i * 3 + 2] = t[2] + d[2] * rad;
    col(C, i, ns.red ? P_RED : P_CRIMSON, ns.red ? 1.0 + Math.random() * 0.3 : 0.9 + Math.random() * 0.3);
  }

  while (i < n) {
    const o = ORBITS[Math.floor(Math.random() * ORBITS.length)];
    orbitPoint(o, Math.random() * TAU, 0.4 + 0.6 * Math.random(), t);
    P[i * 3] = t[0]; P[i * 3 + 1] = t[1]; P[i * 3 + 2] = t[2];
    col(C, i, P_DIM, 0.5 + Math.random() * 0.3);
    i++;
  }
}

export default function BrandForge3DSection({
  title = "BrandForge",
  accentWord = "Forge",
  description = "We fuse AI brand intelligence, sub-second 3D WebGL foundry, and high-ticket performance marketing to transform enterprise digital power.",
  autoPlay = false,
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const textEl = textRef.current;
    if (!container || !canvas || !textEl) return;

    const count = window.innerWidth < 768 ? 24000 : 48000;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    let pr = Math.min(window.devicePixelRatio || 1, 1.75);
    renderer.setPixelRatio(pr);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 200);
    camera.position.set(0, 0, CAM_Z);

    let halfH = CAM_Z * Math.tan((FOV / 2) * (Math.PI / 180));
    let halfW = halfH;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const stagger = new Float32Array(count);
    const noise = new Float32Array(count);
    const swirl = new Float32Array(count * 3);
    const disp = new Float32Array(count * 3);
    const hi = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      stagger[i] = Math.random();
      noise[i] = Math.random();
      const a = Math.random() * TAU;
      const b = (Math.random() - 0.5) * Math.PI;
      swirl[i * 3] = Math.cos(a) * Math.cos(b);
      swirl[i * 3 + 1] = Math.sin(b);
      swirl[i * 3 + 2] = Math.sin(a) * Math.cos(b);
      sizes[i] = Math.random() < 0.14 ? 1.0 + Math.random() * 0.8 : 0.5 + Math.random() * 0.7;
    }

    const baseSizes = sizes.slice();

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("aColor", new THREE.BufferAttribute(colors, 3));
    geo.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.ShaderMaterial({
      vertexShader: VERT_SHADER,
      fragmentShader: FRAG_SHADER,
      uniforms: {
        uSize: { value: 0.05 },
        uScale: { value: 1000 },
        uNear: { value: 2 },
        uFar: { value: 58 },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      depthWrite: false,
    });

    const points = new THREE.Points(geo, material);
    scene.add(points);

    // Station 0: Starfield Scatter
    const starPos = new Float32Array(count * 3);
    const starCol = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      starPos[i * 3] = (Math.random() - 0.5) * halfW * 4.4;
      starPos[i * 3 + 1] = (Math.random() - 0.5) * halfH * 3.4;
      starPos[i * 3 + 2] = 9 - Math.pow(Math.random(), 0.7) * 50;

      const r = Math.random();
      if (r < 0.5) col(starCol, i, P_WHITE, 0.68 + Math.random() * 0.4);
      else if (r < 0.78) col(starCol, i, P_RED, 0.68 + Math.random() * 0.4);
      else if (r < 0.92) col(starCol, i, P_GOLD, 0.68 + Math.random() * 0.4);
      else col(starCol, i, P_DIM, 0.6 + Math.random() * 0.3);
    }

    // Station 1: BrandForge Orbital Knot
    const knotU = new Float32Array(count * 3);
    const knotCol = new Float32Array(count * 3);
    buildOrbitalKnot(count, knotU, knotCol);

    const knotPos = new Float32Array(count * 3);

    function updateBases() {
      const ar = halfH * 0.82;
      for (let i = 0; i < count; i++) {
        const x = i * 3;
        knotPos[x] = knotU[x] * ar;
        knotPos[x + 1] = knotU[x + 1] * ar;
        knotPos[x + 2] = knotU[x + 2] * ar;
      }
    }

    function resize() {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      halfH = CAM_Z * Math.tan((FOV / 2) * (Math.PI / 180));
      halfW = halfH * (w / h);
      pr = Math.min(window.devicePixelRatio || 1, 1.75);
      material.uniforms.uScale.value = (h * pr) / (2 * Math.tan((FOV / 2) * (Math.PI / 180)));
      material.uniforms.uSize.value = w < 720 ? 0.075 : 0.05;
      updateBases();
    }
    resize();

    window.addEventListener("resize", resize);

    let mx = 0, my = 0, hoverPresent = false;
    function onPointerMove(e) {
      const rect = container.getBoundingClientRect();
      mx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      my = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
      hoverPresent = true;
    }
    function onPointerLeave() { hoverPresent = false; }

    container.addEventListener("pointermove", onPointerMove, { passive: true });
    container.addEventListener("pointerleave", onPointerLeave);

    const cursorV = new THREE.Vector3();
    let cwx = 0, cwy = 0, cwz = 0, hoverActive = false;

    let raf = 0, pCur = 0, pTarget = 0;
    const startTime = performance.now();

    function writeFrame(progress, time) {
      const ang = time * 0.18;
      const c = Math.cos(ang);
      const sn = Math.sin(ang);
      const breatheAmt = 1 + 0.024 * Math.sin(time * 0.7);

      const morphT = smoother(progress);
      const swAmt = Math.sin(morphT * Math.PI) * halfH * 0.62;
      const camDolly = Math.sin(morphT * Math.PI);

      hoverActive = false;
      if (hoverPresent) {
        cursorV.set(mx, my, 0.5).unproject(camera).sub(camera.position);
        if (Math.abs(cursorV.z) > 1e-4) {
          const tt = -camera.position.z / cursorV.z;
          cwx = camera.position.x + cursorV.x * tt;
          cwy = camera.position.y + cursorV.y * tt;
          cwz = camera.position.z + cursorV.z * tt;
          hoverActive = true;
        }
      }

      const HR = halfH * 0.5;
      const HR2 = HR * HR;
      const HPUSH = halfH * 0.36;
      const offX = -halfW * 0.32;

      for (let q = 0; q < count; q++) {
        const d = stagger[q];
        let pt = (morphT - d * 0.34) / 0.66;
        pt = pt < 0 ? 0 : pt > 1 ? 1 : pt;
        pt = smoother(pt);

        const ax = starPos[q * 3];
        const ay = starPos[q * 3 + 1];
        const az = starPos[q * 3 + 2];

        const kx = knotPos[q * 3];
        const ky = knotPos[q * 3 + 1] * breatheAmt;
        const kz = knotPos[q * 3 + 2];
        const bx_rot = (kx * c + kz * sn) * breatheAmt + offX;
        const bz_rot = (-kx * sn + kz * c) * breatheAmt;

        const nf = noise[q];
        const fs = Math.sin(time * 0.6 + nf * 6.283);
        const fc = Math.cos(time * 0.47 + nf * 6.283);
        const x3 = q * 3;

        const bx = ax + (bx_rot - ax) * pt + swirl[x3] * swAmt + fs * 0.05;
        const by = ay + (ky - ay) * pt + swirl[x3 + 1] * swAmt + fc * 0.05;
        const bz = az + (bz_rot - az) * pt + swirl[x3 + 2] * swAmt + fs * fc * 0.06;

        let tx = 0, ty = 0, tz = 0, th = 0;
        if (hoverActive) {
          const ddx = bx - cwx, ddy = by - cwy, ddz = bz - cwz;
          const dist2 = ddx * ddx + ddy * ddy + ddz * ddz;
          if (dist2 < HR2) {
            const dd = Math.sqrt(dist2) || 1e-3;
            const fall = 1 - dd / HR;
            th = fall * fall;
            const k = (HPUSH * th) / dd;
            tx = ddx * k; ty = ddy * k; tz = ddz * k;
          }
        }

        disp[x3] += (tx - disp[x3]) * 0.16;
        disp[x3 + 1] += (ty - disp[x3 + 1]) * 0.16;
        disp[x3 + 2] += (tz - disp[x3 + 2]) * 0.16;
        hi[q] += (th - hi[q]) * 0.16;

        positions[x3] = bx + disp[x3];
        positions[x3 + 1] = by + disp[x3 + 1];
        positions[x3 + 2] = bz + disp[x3 + 2];

        const hb = 1 + hi[q] * 0.95;
        const ca = starCol[x3];
        const cb = knotCol[x3];
        colors[x3] = Math.min(1.55, (ca + (cb - ca) * morphT) * hb);
        colors[x3 + 1] = Math.min(1.55, (starCol[x3 + 1] + (knotCol[x3 + 1] - starCol[x3 + 1]) * morphT) * hb);
        colors[x3 + 2] = Math.min(1.55, (starCol[x3 + 2] + (knotCol[x3 + 2] - starCol[x3 + 2]) * morphT) * hb);

        sizes[q] = baseSizes[q] * (1 + hi[q] * 1.4);
      }

      geo.attributes.position.needsUpdate = true;
      geo.attributes.aColor.needsUpdate = true;
      geo.attributes.aSize.needsUpdate = true;

      const vis = Math.max(0, 1 - Math.abs(progress - 1) / 0.8);
      const e = vis * vis;
      const dx = 46 * (1 - vis);
      if (textEl) {
        textEl.style.opacity = String(e);
        textEl.style.transform = `translate3d(${dx}px, 0, 0)`;
      }

      const camZ = CAM_Z - camDolly * 5.5;
      camera.position.x += (mx * 1.7 - camera.position.x) * 0.05;
      camera.position.y += (my * 1.2 - camera.position.y) * 0.05;
      camera.position.z += (camZ - camera.position.z) * 0.06;
      camera.lookAt(0, 0, 0);
    }

    function animate(now) {
      const time = (now - startTime) / 1000;

      if (autoPlay) {
        const period = 10;
        const phase = (time / period) % 2;
        pTarget = phase < 1 ? phase : 2 - phase;
      } else {
        const rect = container.getBoundingClientRect();
        const viewH = window.innerHeight;
        const progress = 1 - clamp01((rect.top + rect.height * 0.5 - viewH * 0.5) / (viewH * 0.8));
        pTarget = clamp01(progress);
      }

      pCur += (pTarget - pCur) * 0.07;
      writeFrame(pCur, time);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    }

    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", onPointerLeave);
      geo.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [autoPlay]);

  const mainTitle = title.replace(accentWord, "");

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        background: "radial-gradient(120% 130% at 70% 30%, #17070B 0%, #0D0507 44%, #030305 100%)",
        color: "#FFFFFF",
        fontFamily: "'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif",
        overflow: "hidden",
        borderTop: "1px solid rgba(255, 77, 77, 0.2)",
        borderBottom: "1px solid rgba(255, 77, 77, 0.2)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;700&display=swap');
        .bf-outline {
          color: transparent;
          -webkit-text-stroke: 1.4px #FF4D4D;
        }
        .bf-sec {
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 0 6vw;
          will-change: opacity, transform;
        }
        .bf-side-copy {
          max-width: 34ch;
          text-align: right;
        }
        .bf-eyebrow-3d {
          font-family: 'JetBrains Mono', monospace;
          font-size: clamp(0.72rem, 0.9vw, 0.82rem);
          font-weight: 700;
          color: #FF4D4D;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 8px;
        }
        .bf-h2 {
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          text-transform: uppercase;
          font-size: clamp(2.4rem, 6vw, 5rem);
          margin: 0;
          letter-spacing: -0.03em;
          line-height: 0.95;
          color: #FFFFFF;
        }
        .bf-para {
          font-size: clamp(0.95rem, 1.25vw, 1.1rem);
          line-height: 1.6;
          color: #94A3B8;
          margin-top: 1.2rem;
          font-weight: 400;
        }
      `}</style>

      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
          zIndex: 0,
        }}
      />

      <section className="bf-sec">
        <div ref={textRef} className="bf-side-copy" style={{ opacity: 0 }}>
          <span className="bf-eyebrow-3d">⚡ 3D WEBGL PARTICLE FOUNDRY</span>
          <h2 className="bf-h2">
            {mainTitle}
            <span className="bf-outline">{accentWord}</span>
          </h2>
          <p className="bf-para">{description}</p>
        </div>
      </section>
    </div>
  );
}
