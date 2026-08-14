import { useEffect, useRef } from "react";
import * as THREE from "three";

/* ───────────────────────────────────────────────────────────────────────────
   PLUME — Real-Time WebGL GPU Fluid Hero (Clean Hero without Chrome Hints)
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
    `${P} ${S}
    uniform sampler2D uTexture;
    uniform sampler2D uTextTexture;
    varying vec2 vUv;
    void main(){
      float fluid = clamp(length(texture2D(uTexture, vUv).rgb), 0.0, 1.0);
      float textAlpha = texture2D(uTextTexture, vUv).a;

      vec3 bgCol = vec3(0.0235, 0.0196, 0.0353); // #060509 Black
      vec3 whiteText = vec3(1.0, 1.0, 1.0);      // #FFFFFF White
      vec3 redText = vec3(0.937, 0.255, 0.212);    // #EF4136 Crimson Red
      vec3 whiteFluid = vec3(0.95, 0.95, 0.98);   // Pure White Fluid

      vec3 base = mix(bgCol, whiteText, textAlpha);
      vec3 fluidColor = mix(whiteFluid, redText, textAlpha);

      vec3 finalColor = mix(base, fluidColor, fluid);
      gl_FragColor = vec4(finalColor, 1.0);
    }`,
  ],
};

const css = `
.pl-root{
  position:relative;
  width:100%;
  min-height:100vh;
  overflow:hidden;
  background:#060509;
  font-family:'DM Mono',ui-monospace,monospace;
  cursor:crosshair;
  isolation:isolate;
}
.pl-hero{
  position:absolute;
  inset:0;
  z-index:1;
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding:2rem;
  opacity:0;
  pointer-events:none;
}
.pl-hero h1{
  margin:0;
  text-transform:uppercase;
  color:#FFFFFF;
  font-family:'Outfit', 'Inter', system-ui, sans-serif;
  font-weight:900;
  font-size:clamp(3.0rem, 9.2vw, 13.0rem);
  line-height:0.88;
  letter-spacing:-0.04em;
}
.pl-hero h1:nth-child(1){align-self:flex-start;}
.pl-hero h1:nth-child(2){align-self:flex-end;}
.pl-hero h1:nth-child(3){align-self:center;}

.pl-canvas{
  position:absolute;
  inset:0;
  z-index:3;
  display:block;
  width:100%;
  height:100%;
  pointer-events:none;
}

@media (max-width:1000px){
  .pl-hero h1{align-self:center !important;text-align:center;}
}
`;

export default function PlumeFieldSection() {
  const rootRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const sizeOf = () => {
      const r = root.getBoundingClientRect();
      return { w: Math.max(1, r.width), h: Math.max(1, r.height) };
    };

    let { w: cssW, h: cssH } = sizeOf();
    renderer.setSize(cssW, cssH, false);
    const dpr = renderer.getPixelRatio();
    let width = cssW * dpr;
    let height = cssH * dpr;

    // ── Generate 2D Offscreen Canvas Texture for BrandForge Digital Agency Copy ──
    const textCanvas = document.createElement("canvas");
    const textCtx = textCanvas.getContext("2d");
    textCanvas.width = width;
    textCanvas.height = height;

    const renderTextTexture = () => {
      textCtx.clearRect(0, 0, width, height);
      textCtx.fillStyle = "#FFFFFF";

      const lines = ["FORGE DIGITAL BRANDS.", "SCALE MEDIA & ROAS.", "BRANDFORGE AGENCY."];
      const fontSize = Math.min(width * 0.076, 145 * dpr);
      textCtx.font = `900 ${fontSize}px 'Outfit', 'Inter', sans-serif`;
      textCtx.textBaseline = "middle";

      const padding = 32 * dpr;
      const centerY = height / 2;
      const lineGap = fontSize * 0.88;

      // Line 1: Left
      textCtx.textAlign = "left";
      textCtx.fillText(lines[0], padding, centerY - lineGap);

      // Line 2: Right
      textCtx.textAlign = "right";
      textCtx.fillText(lines[1], width - padding, centerY);

      // Line 3: Center
      textCtx.textAlign = "center";
      textCtx.fillText(lines[2], width / 2, centerY + lineGap);
    };

    renderTextTexture();
    const textTexture = new THREE.CanvasTexture(textCanvas);
    textTexture.minFilter = THREE.LinearFilter;
    textTexture.magFilter = THREE.LinearFilter;

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
        uPressure: pressure.read.texture,
        uVelocity: velocity.read.texture,
        texel: simTexel,
      }),
      clear: mk(SHADERS.clear, { uTexture: tex(), value: num() }),
      display: mk(SHADERS.display, {
        uTexture: dye.read.texture,
        uTextTexture: { value: textTexture },
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
        color: new THREE.Vector3(3.5, 3.5, 3.5),
      });
      pass(mats.splat, dye.write);
      dye.swap();
    };

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
        uTextTexture: textTexture,
      });
      pass(mats.display, null);
    };

    let raf = 0;
    let last = performance.now();
    const loop = () => {
      const now = performance.now();
      const dt = Math.min((now - last) / 1000, 0.016);
      last = now;

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

      textCanvas.width = width;
      textCanvas.height = height;
      renderTextTexture();
      textTexture.needsUpdate = true;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("resize", onResize);
      textTexture.dispose();
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
    <section className="pl-root" ref={rootRef}>
      <style>{css}</style>

      <div className="pl-hero" aria-hidden="true">
        <h1>FORGE DIGITAL BRANDS.</h1>
        <h1>SCALE MEDIA & ROAS.</h1>
        <h1>BRANDFORGE AGENCY.</h1>
      </div>

      <canvas className="pl-canvas" ref={canvasRef} />
    </section>
  );
}
