import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

/* ───────────────────────────────────────────────────────────────────────────
   BRANDFORGE FLUID FIELD — Real-Time GPU Navier–Stokes Fluid Simulation.
   Composited over editorial hero with mix-blend-mode:difference.
   ─────────────────────────────────────────────────────────────────────────── */

const CONFIG = {
  simResolution: 256,
  dyeResolution: 1024,
  curl: 50,
  pressureIterations: 40,
  velocityDissipation: 0.95,
  dyeDissipation: 0.95,
  splatRadius: 0.3,
  forceStrength: 8.5,
  pressureDecay: 0.75,
  threshold: 1.0,
  edgeSoftness: 0.0,
  ink: new THREE.Color(1, 1, 1),
};

const VERT = `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position, 1.0); }`;
const P = `precision highp float;`;
const S = `precision mediump sampler2D;`;

const SHADERS = {
  splat: [
    VERT,
    `${P} ${S}
    uniform sampler2D uTarget; uniform float aspect, radius; uniform vec3 color; uniform vec2 point; varying vec2 vUv;
    void main(){ vec2 d = vUv - point; d.x *= aspect; vec3 base = texture2D(uTarget, vUv).xyz; gl_FragColor = vec4(base + exp(-dot(d,d)/radius) * color, 1.0); }`,
  ],
  advection: [
    VERT,
    `${P} ${S}
    uniform sampler2D uVelocity, uSource; uniform vec2 texel; uniform float dt, dissipation; varying vec2 vUv;
    void main(){ vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texel; gl_FragColor = vec4(dissipation * texture2D(uSource, coord).rgb, 1.0); }`,
  ],
  divergence: [
    VERT,
    `${P} ${S}
    uniform sampler2D uVelocity; uniform vec2 texel; varying vec2 vUv;
    vec2 vel(vec2 uv){ vec2 s = vec2(1.0); if(uv.x<0.0){uv.x=0.0;s.x=-1.0;} if(uv.x>1.0){uv.x=1.0;s.x=-1.0;} if(uv.y<0.0){uv.y=0.0;s.y=-1.0;} if(uv.y>1.0){uv.y=1.0;s.y=-1.0;} return s*texture2D(uVelocity,uv).xy; }
    void main(){ vec2 L=vUv-vec2(texel.x,0.0),R=vUv+vec2(texel.x,0.0),T=vUv+vec2(0.0,texel.y),B=vUv-vec2(0.0,texel.y); gl_FragColor = vec4(0.5*(vel(R).x-vel(L).x+vel(T).y-vel(B).y),0.0,0.0,1.0); }`,
  ],
  curl: [
    VERT,
    `${P} ${S}
    uniform sampler2D uVelocity; uniform vec2 texel; varying vec2 vUv;
    void main(){ vec2 L=vUv-vec2(texel.x,0.0),R=vUv+vec2(texel.x,0.0),T=vUv+vec2(0.0,texel.y),B=vUv-vec2(0.0,texel.y); gl_FragColor = vec4(texture2D(uVelocity,R).y-texture2D(uVelocity,L).y-texture2D(uVelocity,T).x+texture2D(uVelocity,B).x,0.0,0.0,1.0); }`,
  ],
  vorticity: [
    VERT,
    `${P} ${S}
    uniform sampler2D uVelocity, uCurl; uniform vec2 texel; uniform float strength, dt; varying vec2 vUv;
    void main(){ vec2 L=vUv-vec2(texel.x,0.0),R=vUv+vec2(texel.x,0.0),T=vUv+vec2(0.0,texel.y),B=vUv-vec2(0.0,texel.y); vec2 f = normalize(vec2(abs(texture2D(uCurl,T).x)-abs(texture2D(uCurl,B).x), abs(texture2D(uCurl,R).x)-abs(texture2D(uCurl,L).x))+0.0001) * strength * texture2D(uCurl,vUv).x; gl_FragColor = vec4(texture2D(uVelocity,vUv).xy + f*dt, 0.0, 1.0); }`,
  ],
  pressure: [
    VERT,
    `${P} ${S}
    uniform sampler2D uPressure, uDivergence; uniform vec2 texel; varying vec2 vUv;
    void main(){ vec2 L=clamp(vUv-vec2(texel.x,0.0),0.0,1.0),R=clamp(vUv+vec2(texel.x,0.0),0.0,1.0),T=clamp(vUv+vec2(0.0,texel.y),0.0,1.0),B=clamp(vUv-vec2(0.0,texel.y),0.0,1.0); gl_FragColor = vec4((texture2D(uPressure,L).x+texture2D(uPressure,R).x+texture2D(uPressure,T).x+texture2D(uPressure,B).x-texture2D(uDivergence,vUv).x)*0.25,0.0,0.0,1.0); }`,
  ],
  gradientSubtract: [
    VERT,
    `${P} ${S}
    uniform sampler2D uPressure, uVelocity; uniform vec2 texel; varying vec2 vUv;
    void main(){ float pL=texture2D(uPressure,clamp(vUv-vec2(texel.x,0.0),0.0,1.0)).x, pR=texture2D(uPressure,clamp(vUv+vec2(texel.x,0.0),0.0,1.0)).x, pT=texture2D(uPressure,clamp(vUv+vec2(0.0,texel.y),0.0,1.0)).x, pB=texture2D(uPressure,clamp(vUv-vec2(0.0,texel.y),0.0,1.0)).x; gl_FragColor = vec4(texture2D(uVelocity,vUv).xy - vec2(pR-pL, pT-pB), 0.0, 1.0); }`,
  ],
  clear: [
    VERT,
    `${P} ${S}
    uniform sampler2D uTexture; uniform float value; varying vec2 vUv;
    void main(){ gl_FragColor = value * texture2D(uTexture, vUv); }`,
  ],
  display: [
    VERT,
    `${P}
    uniform sampler2D uTexture; uniform float threshold, softness; uniform vec3 ink; varying vec2 vUv;
    void main(){ float d = clamp(length(texture2D(uTexture,vUv).rgb),0.0,1.0); float a = softness>0.0 ? smoothstep(threshold-softness*0.5, threshold+softness*0.5, d) : step(threshold,d);
    gl_FragColor = vec4(ink * a, a); }`,
  ],
};

export default function BrandForgeFluidSection({ onOpenModal }) {
  const rootRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    } catch (err) {
      console.warn("WebGL initialization skipped:", err);
      return;
    }

    const sizeOf = () => {
      const r = root.getBoundingClientRect();
      return {
        w: Math.max(1, r.width || window.innerWidth),
        h: Math.max(1, r.height || window.innerHeight),
      };
    };

    let { w: cssW, h: cssH } = sizeOf();
    renderer.setSize(cssW, cssH, false);
    const dpr = renderer.getPixelRatio();
    let width = cssW * dpr;
    let height = cssH * dpr;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2));
    scene.add(quad);

    const aspect = width / height;
    const rtOpts = {
      type: THREE.HalfFloatType,
      depthBuffer: false,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
    };

    const single = (w, h) => new THREE.WebGLRenderTarget(w, h, rtOpts);
    const double = (w, h) => ({
      read: single(w, h),
      write: single(w, h),
      swap() {
        [this.read, this.write] = [this.write, this.read];
      },
    });

    const simRes = CONFIG.simResolution;
    const dyeRes = CONFIG.dyeResolution;
    const pressureIters = CONFIG.pressureIterations;
    const simSize = { w: simRes, h: Math.round(simRes / aspect) };
    const dyeSize = { w: dyeRes, h: Math.round(dyeRes / aspect) };

    const velocity = double(simSize.w, simSize.h);
    const dye = double(dyeSize.w, dyeSize.h);
    const divergence = single(simSize.w, simSize.h);
    const curl = single(simSize.w, simSize.h);
    const pressure = double(simSize.w, simSize.h);

    const simTexel = new THREE.Vector2(1 / simSize.w, 1 / simSize.h);
    const dyeTexel = new THREE.Vector2(1 / dyeSize.w, 1 / dyeSize.h);

    const mk = ([vert, frag], uniforms) =>
      new THREE.ShaderMaterial({ vertexShader: vert, fragmentShader: frag, uniforms });
    const tex = () => ({ value: null });
    const num = (v = 0) => ({ value: v });
    const vec2 = () => ({ value: new THREE.Vector2() });

    const fireTexture = new THREE.TextureLoader().load("/fire-flame.png");
    fireTexture.wrapS = THREE.RepeatWrapping;
    fireTexture.wrapT = THREE.RepeatWrapping;

    const mats = {
      splat: mk(SHADERS.splat, {
        uTarget: tex(),
        aspect: num(),
        radius: num(),
        color: { value: new THREE.Vector3() },
        point: { value: new THREE.Vector2() },
      }),
      advection: mk(SHADERS.advection, {
        uVelocity: tex(),
        uSource: tex(),
        texel: vec2(),
        dt: num(),
        dissipation: num(),
      }),
      divergence: mk(SHADERS.divergence, { uVelocity: tex(), texel: vec2() }),
      curl: mk(SHADERS.curl, { uVelocity: tex(), texel: vec2() }),
      vorticity: mk(SHADERS.vorticity, {
        uVelocity: tex(),
        uCurl: tex(),
        texel: vec2(),
        strength: num(),
        dt: num(),
      }),
      pressure: mk(SHADERS.pressure, {
        uPressure: tex(),
        uDivergence: tex(),
        texel: vec2(),
      }),
      gradientSubtract: mk(SHADERS.gradientSubtract, {
        uPressure: tex(),
        uVelocity: tex(),
        texel: vec2(),
      }),
      clear: mk(SHADERS.clear, { uTexture: tex(), value: num() }),
      display: mk(SHADERS.display, {
        uTexture: tex(),
        threshold: num(),
        softness: num(),
        ink: { value: CONFIG.ink },
      }),
    };

    const pass = (material, target) => {
      quad.material = material;
      renderer.setRenderTarget(target);
      renderer.render(scene, camera);
    };

    const set = (material, values) => {
      for (const [k, v] of Object.entries(values)) material.uniforms[k].value = v;
      return material;
    };

    const mouse = { x: 0, y: 0, vx: 0, vy: 0, moved: false };
    const moveTo = (clientX, clientY) => {
      const r = root.getBoundingClientRect();
      const x = (clientX - r.left) * dpr;
      const y = (clientY - r.top) * dpr;
      mouse.vx = (x - mouse.x) * CONFIG.forceStrength;
      mouse.vy = (y - mouse.y) * CONFIG.forceStrength;
      mouse.x = x;
      mouse.y = y;
      mouse.moved = true;
    };

    const onPointer = (e) => {
      moveTo(e.clientX, e.clientY);
    };

    window.addEventListener("pointermove", onPointer);

    const splat = (x, y, vx, vy) => {
      set(mats.splat, {
        aspect: width / height,
        point: new THREE.Vector2(x / width, 1 - y / height),
        radius: CONFIG.splatRadius / 100,
      });
      set(mats.splat, {
        uTarget: velocity.read.texture,
        color: new THREE.Vector3(vx, -vy, 0),
      });
      pass(mats.splat, velocity.write);
      velocity.swap();
      set(mats.splat, {
        uTarget: dye.read.texture,
        color: new THREE.Vector3(3, 3, 3),
      });
      pass(mats.splat, dye.write);
      dye.swap();
    };

    // Ambient fluid wave bursts
    let ambientTimer = 0;

    const simulate = (dt) => {
      pass(set(mats.curl, { uVelocity: velocity.read.texture, texel: simTexel }), curl);
      pass(
        set(mats.vorticity, {
          uVelocity: velocity.read.texture,
          uCurl: curl.texture,
          texel: simTexel,
          strength: CONFIG.curl,
          dt,
        }),
        velocity.write
      );
      velocity.swap();
      pass(
        set(mats.divergence, { uVelocity: velocity.read.texture, texel: simTexel }),
        divergence
      );
      pass(
        set(mats.clear, { uTexture: pressure.read.texture, value: CONFIG.pressureDecay }),
        pressure.write
      );
      pressure.swap();
      set(mats.pressure, { uDivergence: divergence.texture, texel: simTexel });
      for (let i = 0; i < pressureIters; i++) {
        mats.pressure.uniforms.uPressure.value = pressure.read.texture;
        pass(mats.pressure, pressure.write);
        pressure.swap();
      }
      pass(
        set(mats.gradientSubtract, {
          uPressure: pressure.read.texture,
          uVelocity: velocity.read.texture,
          texel: simTexel,
        }),
        velocity.write
      );
      velocity.swap();
      set(mats.advection, {
        uVelocity: velocity.read.texture,
        uSource: velocity.read.texture,
        texel: simTexel,
        dt,
        dissipation: CONFIG.velocityDissipation,
      });
      pass(mats.advection, velocity.write);
      velocity.swap();
      set(mats.advection, {
        uSource: dye.read.texture,
        texel: dyeTexel,
        dissipation: CONFIG.dyeDissipation,
      });
      pass(mats.advection, dye.write);
      dye.swap();
    };

    const render = () => {
      set(mats.display, {
        uTexture: dye.read.texture,
        threshold: CONFIG.threshold,
        softness: CONFIG.edgeSoftness,
        ink: CONFIG.ink,
      });
      pass(mats.display, null);
    };

    let raf = 0;
    let last = performance.now();
    const loop = () => {
      const now = performance.now();
      const dt = Math.min((now - last) / 1000, 0.016);
      last = now;

      ambientTimer += dt;
      if (ambientTimer > 1.2 && !mouse.moved) {
        ambientTimer = 0;
        const ax = width * (0.2 + 0.6 * Math.random());
        const ay = height * (0.2 + 0.6 * Math.random());
        const avx = (Math.random() - 0.5) * 12;
        const avy = (Math.random() - 0.5) * 12;
        splat(ax, ay, avx, avy);
      }

      if (mouse.moved) {
        splat(mouse.x, mouse.y, mouse.vx, mouse.vy);
        mouse.moved = false;
      }
      simulate(dt);
      render();
      raf = requestAnimationFrame(loop);
    };
    loop();

    const onResize = () => {
      const s = sizeOf();
      cssW = s.w;
      cssH = s.h;
      renderer.setSize(cssW, cssH, false);
      width = cssW * dpr;
      height = cssH * dpr;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      [velocity, dye, pressure].forEach((d) => {
        d.read.dispose();
        d.write.dispose();
      });
      [divergence, curl].forEach((t) => t.dispose());
      Object.values(mats).forEach((m) => m.dispose());
      quad.geometry.dispose();
    };
  }, []);

  return (
    <motion.div
      className="pl-root"
      ref={rootRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 1.0, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <style>{css}</style>
      <div className="pl-hero">
        <h1>FORGE DIGITAL BRANDS.</h1>
        <h1>SCALE MEDIA & ROAS.</h1>
        <h1>BRANDFORGE AGENCY.</h1>
      </div>

      <canvas className="pl-canvas" ref={canvasRef} />

      <div className="pl-logo-layer">
        <div className="pl-logo-wrap">
          <img src="/brandforge-logo.png" alt="BrandForge Logo" className="pl-brand-logo" />
        </div>
      </div>

      <div className="pl-chrome">
        <div className="pl-mark">BRANDFORGE® AGENCY</div>
        <div className="pl-tag">DIGITAL MARKETING · CREATIVE GROWTH</div>
        <div className="pl-hint">
          Move your cursor — <b>forge the fluid signal</b>
        </div>
        <div className="pl-index">
          BRANDFORGE / <b>01</b>
        </div>
      </div>
    </motion.div>
  );
}

const css = `
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@800;900&family=Plus+Jakarta+Sans:wght@500;700;800&display=swap");

.pl-root {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: #060509;
  font-family: 'Plus Jakarta Sans', sans-serif;
  cursor: crosshair;
}

.pl-hero {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(1.5rem, 5vw, 4rem);
  width: 100%;
  box-sizing: border-box;
}

.pl-hero h1 {
  margin: 0;
  text-transform: uppercase;
  color: #FFFFFF;
  font-family: 'Outfit', sans-serif;
  font-weight: 900;
  font-size: clamp(2.2rem, 5.8vw, 5.8rem);
  line-height: 0.95;
  letter-spacing: -0.03em;
  text-shadow: 0 10px 40px rgba(0, 0, 0, 0.9);
}

.pl-hero h1:nth-child(2) {
  align-self: flex-end;
}

.pl-hero h1:nth-child(3) {
  align-self: center;
}

.pl-logo-layer {
  position: absolute;
  inset: 0;
  z-index: 10;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: clamp(14rem, 28vw, 24rem);
}

.pl-logo-wrap {
  pointer-events: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pl-brand-logo {
  height: clamp(38px, 5.5vw, 72px);
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.95));
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.pl-brand-logo:hover {
  transform: scale(1.06);
}

.pl-cta-wrap {
  margin-top: clamp(2rem, 4vw, 3.5rem);
  align-self: center;
  z-index: 5;
}

.pl-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  padding: 1.1rem 2.5rem;
  border-radius: 9999px;
  background: #EF4136;
  color: #FFFFFF;
  font-family: 'Outfit', sans-serif;
  font-weight: 800;
  font-size: 0.95rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border: 1px solid rgba(239, 65, 54, 0.4);
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease;
}

.pl-cta-btn:hover {
  transform: scale(1.05);
  background: #d8342a;
}

.pl-canvas {
  position: absolute;
  inset: 0;
  z-index: 3;
  display: block;
  width: 100%;
  height: 100%;
  pointer-events: none;
  mix-blend-mode: difference;
}

.pl-chrome {
  position: absolute;
  inset: 0;
  z-index: 4;
  pointer-events: none;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
}

.pl-mark {
  position: absolute;
  top: 26px;
  left: 30px;
  font-family: 'Outfit', sans-serif;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 0.08em;
  color: #EF4136;
}

.pl-tag {
  position: absolute;
  top: 27px;
  right: 30px;
  font-size: 11px;
  letter-spacing: 0.08em;
}

.pl-hint {
  position: absolute;
  bottom: 26px;
  left: 30px;
  font-size: 11px;
  letter-spacing: 0.06em;
}

.pl-hint b {
  color: #FFFFFF;
  font-weight: 700;
}

.pl-index {
  position: absolute;
  bottom: 26px;
  right: 30px;
  font-size: 11px;
  letter-spacing: 0.06em;
}

.pl-index b {
  color: #EF4136;
}

@media (max-width: 1000px) {
  .pl-hero h1 {
    align-self: center !important;
    text-align: center;
  }
  .pl-mark, .pl-tag, .pl-hint, .pl-index {
    font-size: 10px;
  }
}
`;
