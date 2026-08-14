import React, { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import * as THREE from "three";

// ATTRACTIVE DIGITAL MARKETING IMAGES IN RED, BLACK, AND WHITE PALETTE
const DEFAULT_IMAGES = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2200&q=90",
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1600&q=90",
  "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=1600&q=90",
];

/* ─── GPU Fluid Shader Definitions for Dark Theme Finale ─── */
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

function FinaleFluidCanvas({ parentRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = parentRef.current;
    if (!canvas || !parent) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const sizeOf = () => {
      const r = parent.getBoundingClientRect();
      return { w: Math.max(1, r.width), h: Math.max(1, r.height) };
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

    const simSize = { w: CONFIG.simResolution, h: Math.round(CONFIG.simResolution / aspect) };
    const dyeSize = { w: CONFIG.dyeResolution, h: Math.round(CONFIG.dyeResolution / aspect) };

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
        uPressure: tex(),
        uVelocity: tex(),
        texel: vec2(),
      }),
      clear: mk(SHADERS.clear, { uTexture: tex(), value: num() }),
      display: mk(SHADERS.display, {
        uTexture: tex(),
        threshold: num(),
        softness: num(),
        ink: { value: new THREE.Color(0.937, 0.255, 0.212) },
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
      const r = parent.getBoundingClientRect();
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
        color: new THREE.Vector3(3.5, 1.2, 1.0),
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
      for (let i = 0; i < CONFIG.pressureIterations; i++) {
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
        ink: new THREE.Color(0.937, 0.255, 0.212),
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
  }, [parentRef]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 5,
        pointerEvents: "none",
        mixBlendMode: "screen",
      }}
    />
  );
}

export default function RiftStageHero({
  leadImage = DEFAULT_IMAGES[0],
  openingTitle = "Ideas arrive before the world is ready to scale",
  panels = [
    {
      eyebrow: "INSTINCT & GEO",
      text: "A first signal appears without permission—capturing generative search grid dominance and AI answer engines.",
    },
    {
      eyebrow: "IMPACT & ROAS",
      text: "Shape raw visitor traffic with sub-second 3D web platforms and lethal paid media until passing thoughts become revenue.",
    },
  ],
  finalLines = ["FORGE THE", "MOMENT.", "LEAVE THE ECHO."],
  embedded = true,
}) {
  const rootRef = useRef(null);
  const contentRef = useRef(null);
  const stageRef = useRef(null);
  const finaleRef = useRef(null);
  const leadRef = useRef(null);
  const shadeRef = useRef(null);
  const flashRef = useRef(null);
  const leftCopyRef = useRef(null);
  const rightCopyRef = useRef(null);
  const finalLineRefs = useRef([]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const content = contentRef.current;
    const stage = stageRef.current;
    const finale = finaleRef.current;
    const lead = leadRef.current;
    const shade = shadeRef.current;
    const flash = flashRef.current;
    const leftCopy = leftCopyRef.current;
    const rightCopy = rightCopyRef.current;
    const finalLineEls = finalLineRefs.current.filter(Boolean);

    if (
      !root ||
      !content ||
      !stage ||
      !finale ||
      !lead ||
      !shade ||
      !flash ||
      !leftCopy ||
      !rightCopy ||
      !finalLineEls.length
    ) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.set(finalLineEls, { yPercent: 115, opacity: 0 });
      gsap.set(finale, { autoAlpha: 0 });
      gsap.set(leftCopy, { xPercent: -18, opacity: 0 });
      gsap.set(rightCopy, { xPercent: 18, opacity: 0 });

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(lead, { display: "none" });
        gsap.set(finale, { autoAlpha: 1 });
        gsap.set(finalLineEls, { yPercent: 0, opacity: 1 });
        return;
      }

      const scroller = embedded ? root : undefined;
      const lenis = embedded
        ? new Lenis({ wrapper: root, content, smoothWheel: true })
        : new Lenis({ smoothWheel: true });

      const syncScroll = () => ScrollTrigger.update();
      lenis.on("scroll", syncScroll);

      let frame = 0;
      const raf = (time) => {
        lenis.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);

      const sequence = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: stage,
          scroller,
          start: "top top",
          end: () =>
            `+=${(embedded ? root.clientHeight : window.innerHeight) * 5}`,
          scrub: 0.9,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      sequence
        .to(
          lead,
          {
            clipPath: "inset(0% 48.5% 0% 48.5%)",
            duration: 1,
          },
          0
        )
        .to(shade, { opacity: 0.88, duration: 1 }, 0)
        .to(
          leftCopy,
          { xPercent: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          0.18
        )
        .to(
          rightCopy,
          { xPercent: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          0.18
        )
        .to(lead, { rotation: 68, duration: 0.8 }, 1)
        .to(
          lead,
          {
            scale: 0,
            rotation: 105,
            duration: 0.9,
            ease: "power3.in",
          },
          1.75
        )
        .to(
          flash,
          {
            opacity: 1,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
          },
          2.6
        )
        .to(
          finale,
          {
            autoAlpha: 1,
            duration: 0.1,
          },
          2.65
        )
        .to(
          finalLineEls,
          {
            yPercent: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.55,
            ease: "power3.out",
          },
          3.0
        );

      ScrollTrigger.refresh();

      return () => {
        cancelAnimationFrame(frame);
        lenis.off("scroll", syncScroll);
        lenis.destroy();
      };
    }, root);

    return () => context.revert();
  }, [embedded]);

  return (
    <div
      ref={rootRef}
      className={`rr-root${embedded ? " rr-embedded" : ""}`}
    >
      <style>{styles}</style>

      <div ref={contentRef} className="rr-content">
        <section ref={stageRef} className="rr-stage">
          <div className="rr-underlay" aria-hidden="true">
            <article className="rr-panel rr-panel-left">
              <div ref={leftCopyRef} className="rr-panel-copy">
                <span>{panels[0].eyebrow}</span>
                <p>{panels[0].text}</p>
              </div>
            </article>

            <article className="rr-panel rr-panel-right">
              <div ref={rightCopyRef} className="rr-panel-copy">
                <span>{panels[1].eyebrow}</span>
                <p>{panels[1].text}</p>
              </div>
            </article>
          </div>

          {/* REVEALED FINALE: Dark Obsidian BrandForge Fluid Stage */}
          <div ref={finaleRef} className="rr-finale-plume">
            {/* White Hero Text Container */}
            <div className="rr-plume-hero">
              {finalLines.map((line, index) => (
                <h1
                  key={`${line}-${index}`}
                  ref={(node) => {
                    finalLineRefs.current[index] = node;
                  }}
                  className="rr-plume-line"
                >
                  {line}
                </h1>
              ))}
            </div>

            {/* GPU Crimson Fluid Canvas over dark text */}
            <FinaleFluidCanvas parentRef={finaleRef} />

            {/* Chrome Labels */}
            <div className="rr-plume-chrome" aria-hidden="true">
              <div className="rr-plume-mark">
                <span style={{ color: "#EF4136" }}>●</span> BrandForge®
              </div>
              <div className="rr-plume-tag">Fluid · Generative GPU Plume</div>
              <div className="rr-plume-hint">
                Move the cursor — <b>the crimson ink flows</b>
              </div>
              <div className="rr-plume-index">
                Fluid / <b>02</b>
              </div>
            </div>
          </div>

          {/* Opening Cover Image */}
          <div ref={leadRef} className="rr-lead">
            <img src={leadImage} alt="BrandForge Digital Marketing Growth Strategy Dashboard" draggable={false} />
            <div className="rr-image-vignette" />
            <h1>{openingTitle}</h1>
            <div ref={shadeRef} className="rr-shade" />
            <div ref={flashRef} className="rr-flash" />
          </div>

          <div className="rr-scroll-cue" aria-hidden="true">
            <span>Scroll to reveal</span>
            <i />
          </div>
        </section>
      </div>
    </div>
  );
}

const styles = `
@import url("https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Outfit:wght@800;900&family=Plus+Jakarta+Sans:wght@500;700&display=swap");

.rr-root {
  --ink: #060509;
  --paper: #F1EEE6;
  --acid: #EF4136;
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--ink);
  color: var(--paper);
  font-family: "Plus Jakarta Sans", sans-serif;
  overflow: hidden;
}

.rr-root.rr-embedded {
  height: 100vh;
  overflow-y: auto;
}

.rr-content {
  position: relative;
  width: 100%;
}

.rr-stage {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: var(--ink);
}

.rr-underlay {
  position: absolute;
  inset: 0;
  display: flex;
}

.rr-panel {
  position: relative;
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 3rem;
  box-sizing: border-box;
}

.rr-panel-left {
  background: var(--ink);
  color: #ffffff;
  justify-content: flex-start;
}

.rr-panel-right {
  background: var(--paper);
  color: var(--ink);
  justify-content: flex-end;
}

.rr-panel-copy {
  max-width: 28rem;
  will-change: transform, opacity;
}

.rr-panel-left .rr-panel-copy {
  text-align: left;
}

.rr-panel-right .rr-panel-copy {
  text-align: right;
}

.rr-panel-copy span {
  display: inline-block;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  margin-bottom: 1.2rem;
}

.rr-panel-left .rr-panel-copy span {
  color: var(--acid);
}

.rr-panel-right .rr-panel-copy span {
  color: rgba(6, 5, 9, 0.65);
}

.rr-panel-copy p {
  margin: 0;
  font-size: clamp(1.15rem, 2.2vw, 1.85rem);
  line-height: 1.35;
  font-weight: 500;
  letter-spacing: -0.02em;
}

/* Revealed Dark Obsidian BrandForge Plume Stage */
.rr-finale-plume {
  position: absolute;
  inset: 0;
  z-index: 2;
  overflow: hidden;
  background: #060509;
  font-family: 'DM Mono', ui-monospace, monospace;
  cursor: crosshair;
}

.rr-plume-hero {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
}

.rr-plume-line {
  margin: 0;
  text-transform: uppercase;
  color: #FFFFFF;
  font-family: 'Outfit', 'Inter', system-ui, sans-serif;
  font-weight: 900;
  font-size: clamp(3.2rem, 10vw, 13.5rem);
  line-height: 0.88;
  letter-spacing: -0.04em;
  user-select: none;
  will-change: transform, opacity;
  text-shadow: 0 10px 40px rgba(0,0,0,0.8);
}

.rr-plume-line:nth-child(1) { align-self: flex-start; }
.rr-plume-line:nth-child(2) { align-self: flex-end; }
.rr-plume-line:nth-child(3) { align-self: center; }

.rr-plume-chrome {
  position: absolute;
  inset: 0;
  z-index: 6;
  pointer-events: none;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
}

.rr-plume-mark {
  position: absolute;
  top: 26px;
  left: 30px;
  font-family: 'Outfit', 'Inter', sans-serif;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: -0.01em;
  color: #FFFFFF;
}

.rr-plume-tag {
  position: absolute;
  top: 27px;
  right: 30px;
  font-size: 11px;
  letter-spacing: .04em;
}

.rr-plume-hint {
  position: absolute;
  bottom: 26px;
  left: 30px;
  font-size: 11px;
  letter-spacing: .04em;
}

.rr-plume-hint b {
  font-weight: 600;
  color: #EF4136;
}

.rr-plume-index {
  position: absolute;
  bottom: 26px;
  right: 30px;
  font-size: 11px;
  letter-spacing: .04em;
}

.rr-lead {
  position: absolute;
  inset: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: center center;
  will-change: transform, clip-path;
  clip-path: inset(0% 0% 0% 0%);
}

.rr-lead img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.rr-image-vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(6, 5, 9, 0.25) 0%, rgba(6, 5, 9, 0.75) 100%);
  pointer-events: none;
}

.rr-lead h1 {
  position: relative;
  z-index: 2;
  margin: 0;
  padding: 0 2rem;
  max-width: 58rem;
  text-align: center;
  font-family: "Outfit", "Inter", sans-serif;
  font-size: clamp(2.2rem, 5.5vw, 5.2rem);
  font-weight: 900;
  line-height: 1.02;
  letter-spacing: -0.04em;
  color: #ffffff;
}

.rr-shade {
  position: absolute;
  inset: 0;
  z-index: 3;
  background: #000000;
  opacity: 0;
  pointer-events: none;
  will-change: opacity;
}

.rr-flash {
  position: absolute;
  inset: 0;
  z-index: 4;
  background: #ffffff;
  opacity: 0;
  pointer-events: none;
  will-change: opacity;
}

.rr-scroll-cue {
  position: absolute;
  left: 50%;
  bottom: 2rem;
  transform: translateX(-50%);
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.65;
  pointer-events: none;
}

.rr-scroll-cue span {
  font-size: 0.72rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
}

.rr-scroll-cue i {
  width: 1px;
  height: 2.2rem;
  background: linear-gradient(to bottom, #ffffff, transparent);
  animation: rrPulse 2s infinite ease-in-out;
}

@keyframes rrPulse {
  0%, 100% { opacity: 0.3; transform: scaleY(0.6); }
  50% { opacity: 1; transform: scaleY(1); }
}

@media (max-width: 1000px) {
  .rr-plume-line {
    align-self: center !important;
    text-align: center;
  }
  .rr-plume-mark, .rr-plume-tag, .rr-plume-hint, .rr-plume-index {
    font-size: 10px;
  }
}

@media (max-width: 768px) {
  .rr-underlay {
    flex-direction: column;
  }
  .rr-panel {
    padding: 2rem;
  }
  .rr-panel-copy {
    max-width: 100%;
  }
  .rr-panel-left .rr-panel-copy,
  .rr-panel-right .rr-panel-copy {
    text-align: center;
  }
}
`;
