"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Sparkles, ArrowUpRight } from "lucide-react";
import * as THREE from "three";

// ───────────────────────────────────────────────────────────────────────────
// WEBGL SMOKE & FIRE PLUME SHADERS
// ───────────────────────────────────────────────────────────────────────────

const plumeVertexShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vPosition;

  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const plumeFragmentShader = /* glsl */ `
  uniform float uTime;
  uniform float uIntensity;
  uniform vec2 uResolution;
  uniform vec2 uMouse;

  varying vec2 vUv;
  varying vec3 vPosition;

  // Simplex Noise 2D
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                     -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * frac(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float fbm(vec2 p) {
    float val = 0.0;
    float amp = 0.5;
    for (int i = 0; i < 5; i++) {
      val += amp * snoise(p);
      p *= 2.02;
      amp *= 0.5;
    }
    return val;
  }

  void main() {
    vec2 st = vUv;

    // Plume trajectory: rising upward & drifting slightly left to right
    float time = uTime * 0.85;
    vec2 q = vec2(st.x * 2.5, st.y - time * 0.35);

    // Turbulence noise billows
    float n1 = fbm(q * 2.8 + vec2(0.0, -time * 0.6));
    float n2 = fbm(q * 4.2 + vec2(n1 * 1.5, time * 0.4));
    float smokePattern = fbm(q * 3.0 + vec2(n2 * 2.0, -time * 0.2));

    // Plume core path (curved line from bottom right to top right)
    float centerX = 0.82 - sin(st.y * 3.14159 * 0.8) * 0.12 + n1 * 0.08;
    float distToCore = abs(st.x - centerX);

    // Width flares slightly at the top
    float plumeWidth = 0.12 + st.y * 0.18;
    float coreMask = smoothstep(plumeWidth, 0.0, distToCore);

    // Density fade at the top & bottom edges
    float verticalFade = smoothstep(0.0, 0.15, st.y) * smoothstep(1.0, 0.88, st.y);
    float density = coreMask * verticalFade * (0.6 + smokePattern * 0.5) * uIntensity;

    // Heat core near thruster base (Crimson Red #EF4136)
    float heat = smoothstep(0.3, 0.0, st.y) * coreMask;
    vec3 crimsonRed = vec3(0.937, 0.255, 0.212); // #EF4136
    vec3 brightOrange = vec3(1.0, 0.42, 0.2);
    vec3 smokeWhite = vec3(0.88, 0.90, 0.94);
    vec3 bgDark = vec3(0.035, 0.03, 0.05);

    vec3 plumeColor = mix(smokeWhite, brightOrange, heat * 0.85);
    plumeColor = mix(plumeColor, crimsonRed, heat * 0.95);

    // Glow halo
    float halo = smoothstep(plumeWidth * 2.2, 0.0, distToCore) * verticalFade * 0.3;
    vec3 finalColor = mix(bgDark, plumeColor, density);
    finalColor += crimsonRed * halo * (0.4 + uIntensity * 0.4);

    float alpha = clamp(density * 1.35 + halo * 0.5, 0.0, 0.95);
    gl_FragColor = vec4(finalColor, alpha);
  }
`;

function RocketPlumeCanvas({ launching }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);

    const { width: w, height: h } = container.getBoundingClientRect();
    renderer.setSize(w, h);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uIntensity: { value: 1.0 },
        uResolution: { value: new THREE.Vector2(w, h) },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      },
      vertexShader: plumeVertexShader,
      fragmentShader: plumeFragmentShader,
      transparent: true,
      depthWrite: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let rafId;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      material.uniforms.uTime.value = elapsed;
      material.uniforms.uIntensity.value = launching ? 2.2 : 1.1;

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      if (!container) return;
      const { width: rw, height: rh } = container.getBoundingClientRect();
      renderer.setSize(rw, rh);
      material.uniforms.uResolution.value.set(rw, rh);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [launching]);

  return <div ref={containerRef} className="bf-plume-canvas" />;
}

export default function BrandForgeRocketPlumeSection({ onOpenModal }) {
  const [launching, setLaunching] = useState(false);

  const handleRocketClick = () => {
    setLaunching(true);
    setTimeout(() => {
      setLaunching(false);
      onOpenModal?.();
    }, 600);
  };

  return (
    <section className="bf-plume-stage-root">
      <style>{styles}</style>

      {/* WEBGL RISING SMOKE & FIRE PLUME CANVAS */}
      <RocketPlumeCanvas launching={launching} />

      {/* VERTICAL ACRONYM LETTERS FLOATING INSIDE THE SMOKE PLUME */}
      <div className="bf-plume-vertical-letters" aria-hidden="true">
        <span className="v-letter v-f">F</span>
        <span className="v-letter v-o">O</span>
        <span className="v-letter v-r">R</span>
        <span className="v-letter v-g">G</span>
        <span className="v-letter v-e">E</span>
      </div>

      {/* MAIN EDITORIAL HERO COPY */}
      <div className="bf-plume-content-wrap">
        <div className="bf-plume-typography">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            FORGE DIGITAL BRANDS.
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            SCALE MEDIA & ROAS.
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.75, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            BRANDFORGE AGENCY.
          </motion.h1>
        </div>

        {/* BOTTOM ACTION BAR WITH ROCKET BUTTON & FORGE YOUR BRAND CTA */}
        <div className="bf-plume-bottom-bar">
          {/* FORGE YOUR BRAND PILL BUTTON */}
          <motion.button
            type="button"
            className="bf-plume-pill-btn"
            onClick={onOpenModal}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <span className="pill-stars-bg" />
            <span>FORGE YOUR BRAND</span>
          </motion.button>

          {/* ROCKET LAUNCHER BUTTON & TAP HERE BADGE */}
          <div className="bf-plume-rocket-wrap">
            <motion.div
              className="bf-rocket-badge"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span>TAP HERE 🚀</span>
            </motion.div>

            <motion.button
              type="button"
              className={`bf-rocket-circle-btn ${launching ? "is-launching" : ""}`}
              onClick={handleRocketClick}
              whileHover={{ scale: 1.1, rotate: -8 }}
              whileTap={{ scale: 0.92 }}
              aria-label="Launch Brand Transformation"
            >
              <div className="rocket-inner-glow" />
              <div className="rocket-icon-wrap">
                <Rocket size={32} />
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = /* css */ `
  @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@800;900&family=Plus+Jakarta+Sans:wght@700;800;900&display=swap");

  .bf-plume-stage-root {
    position: relative;
    width: 100%;
    min-height: 100vh;
    min-height: 100dvh;
    background: #040306;
    color: #FFFFFF;
    font-family: "Outfit", "Plus Jakarta Sans", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    padding: clamp(30px, 6vw, 80px) clamp(20px, 4vw, 56px);
    isolation: isolate;
  }

  .bf-plume-canvas {
    position: absolute;
    inset: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .bf-plume-content-wrap {
    position: relative;
    z-index: 5;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 75vh;
  }

  .bf-plume-typography {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .bf-plume-typography h1 {
    margin: 0;
    font-size: clamp(2.8rem, 8.2vw, 11.5rem);
    font-weight: 900;
    line-height: 0.92;
    letter-spacing: -0.04em;
    text-transform: uppercase;
    color: #FFFFFF;
    text-shadow: 0 10px 40px rgba(0, 0, 0, 0.85);
  }

  /* VERTICAL ACRONYM LETTERS FLOATING INSIDE SMOKE PLUME */
  .bf-plume-vertical-letters {
    position: absolute;
    right: clamp(10%, 14vw, 18%);
    top: 12%;
    bottom: 22%;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    pointer-events: none;
    user-select: none;
  }

  .v-letter {
    font-family: "Outfit", sans-serif;
    font-size: clamp(3.5rem, 7.5vw, 9.5rem);
    font-weight: 900;
    color: #EF4136;
    text-shadow:
      0 0 25px rgba(239, 65, 54, 0.85),
      0 0 50px rgba(239, 65, 54, 0.5);
    line-height: 1;
    opacity: 0.9;
    animation: vLetterPulse 3.5s ease-in-out infinite alternate;
  }

  .v-f { animation-delay: 0s; }
  .v-o { animation-delay: 0.4s; }
  .v-r { animation-delay: 0.8s; }
  .v-g { animation-delay: 1.2s; }
  .v-e { animation-delay: 1.6s; }

  @keyframes vLetterPulse {
    from { opacity: 0.75; transform: scale(0.96); }
    to { opacity: 1; transform: scale(1.05); }
  }

  /* BOTTOM ACTION BAR */
  .bf-plume-bottom-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin-top: 40px;
    position: relative;
    z-index: 10;
  }

  /* FORGE YOUR BRAND PILL BUTTON */
  .bf-plume-pill-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 16px 38px;
    background: #000000;
    color: #FFFFFF;
    border: 2px solid #EF4136;
    border-radius: 999px;
    font-family: "Outfit", sans-serif;
    font-size: 0.95rem;
    font-weight: 900;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    cursor: pointer;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
    transition: all 0.3s ease;
  }

  .pill-stars-bg {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1%);
    background-size: 16px 16px;
    opacity: 0.4;
    pointer-events: none;
  }

  .bf-plume-pill-btn:hover {
    border-color: #FF4D4D;
    background: rgba(239, 65, 54, 0.12);
    box-shadow: 0 14px 40px rgba(239, 65, 54, 0.4);
  }

  /* ROCKET LAUNCHER CIRCLE BUTTON */
  .bf-plume-rocket-wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .bf-rocket-badge {
    position: absolute;
    top: -34px;
    background: #EF4136;
    color: #FFFFFF;
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 0.72rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    box-shadow: 0 4px 15px rgba(239, 65, 54, 0.6);
    white-space: nowrap;
    z-index: 2;
  }

  .bf-rocket-circle-btn {
    position: relative;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #2a2832, #0d0c12 70%);
    border: 2px solid rgba(255, 255, 255, 0.2);
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow:
      0 12px 30px rgba(0, 0, 0, 0.8),
      0 0 25px rgba(239, 65, 54, 0.35);
    transition: all 0.3s ease;
  }

  .rocket-inner-glow {
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(239, 65, 54, 0.4), transparent 70%);
    opacity: 0.6;
    animation: rocketGlowBreathe 2s ease-in-out infinite alternate;
  }

  .rocket-icon-wrap {
    position: relative;
    z-index: 2;
    color: #EF4136;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
  }

  .bf-rocket-circle-btn:hover .rocket-icon-wrap {
    color: #FFFFFF;
    transform: translateY(-2px) scale(1.1);
  }

  .bf-rocket-circle-btn.is-launching .rocket-icon-wrap {
    animation: rocketLaunchAnim 0.6s ease-in-out;
  }

  @keyframes rocketGlowBreathe {
    from { opacity: 0.4; transform: scale(0.9); }
    to { opacity: 0.9; transform: scale(1.1); }
  }

  @keyframes rocketLaunchAnim {
    0% { transform: translateY(0) scale(1); }
    40% { transform: translateY(8px) scale(0.9); }
    100% { transform: translateY(-80px) scale(1.3); opacity: 0; }
  }

  @media (max-width: 768px) {
    .bf-plume-stage-root {
      padding: 40px 16px;
    }

    .bf-plume-typography h1 {
      font-size: clamp(2.2rem, 10vw, 4.5rem);
      text-align: center;
    }

    .bf-plume-vertical-letters {
      right: 6%;
      opacity: 0.6;
    }

    .v-letter {
      font-size: clamp(2.5rem, 8vw, 4.5rem);
    }

    .bf-plume-bottom-bar {
      flex-direction: column;
      gap: 20px;
    }
  }
`;
