"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Renderer, Program, Mesh, Triangle, Color } from "ogl";

// ULTRA-SMOOTH CUBIC BEZIER EASING CURVE
const SMOOTH_EASE = [0.16, 1, 0.3, 1];

// ───────────────────────────────────────────────────────────────────────────
// BRANDFORGE CRIMSON RED THREADS WEBGL BACKGROUND COMPONENT (OGL BASED)
// ───────────────────────────────────────────────────────────────────────────
const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform float iTime;
uniform vec3 iResolution;
uniform vec3 uColor;
uniform float uAmplitude;
uniform float uDistance;
uniform vec2 uMouse;

#define PI 3.1415926538

const int u_line_count = 40;
const float u_line_width = 7.0;
const float u_line_blur = 10.0;

float Perlin2D(vec2 P) {
    vec2 Pi = floor(P);
    vec4 Pf_Pfmin1 = P.xyxy - vec4(Pi, Pi + 1.0);
    vec4 Pt = vec4(Pi.xy, Pi.xy + 1.0);
    Pt = Pt - floor(Pt * (1.0 / 71.0)) * 71.0;
    Pt += vec2(26.0, 161.0).xyxy;
    Pt *= Pt;
    Pt = Pt.xzxz * Pt.yyww;
    vec4 hash_x = fract(Pt * (1.0 / 951.135664));
    vec4 hash_y = fract(Pt * (1.0 / 642.949883));
    vec4 grad_x = hash_x - 0.49999;
    vec4 grad_y = hash_y - 0.49999;
    vec4 grad_results = inversesqrt(grad_x * grad_x + grad_y * grad_y)
        * (grad_x * Pf_Pfmin1.xzxz + grad_y * Pf_Pfmin1.yyww);
    grad_results *= 1.4142135623730950;
    vec2 blend = Pf_Pfmin1.xy * Pf_Pfmin1.xy * Pf_Pfmin1.xy
               * (Pf_Pfmin1.xy * (Pf_Pfmin1.xy * 6.0 - 15.0) + 10.0);
    vec4 blend2 = vec4(blend, vec2(1.0 - blend));
    return dot(grad_results, blend2.zxzx * blend2.wwyy);
}

float pixel(float count, vec2 resolution) {
    return (1.0 / max(resolution.x, resolution.y)) * count;
}

float lineFn(vec2 st, float width, float perc, float offset, vec2 mouse, float time, float amplitude, float distance) {
    float split_offset = (perc * 0.4);
    float split_point = 0.1 + split_offset;

    float amplitude_normal = smoothstep(split_point, 0.7, st.x);
    float amplitude_strength = 0.5;
    float finalAmplitude = amplitude_normal * amplitude_strength
                           * amplitude * (1.0 + (mouse.y - 0.5) * 0.2);

    float time_scaled = time / 10.0 + (mouse.x - 0.5) * 1.0;
    float blur = smoothstep(split_point, split_point + 0.05, st.x) * perc;

    float xnoise = mix(
        Perlin2D(vec2(time_scaled, st.x + perc) * 2.5),
        Perlin2D(vec2(time_scaled, st.x + time_scaled) * 3.5) / 1.5,
        st.x * 0.3
    );

    float y = 0.5 + (perc - 0.5) * distance + xnoise / 2.0 * finalAmplitude;

    float line_start = smoothstep(
        y + (width / 2.0) + (u_line_blur * pixel(1.0, iResolution.xy) * blur),
        y,
        st.y
    );

    float line_end = smoothstep(
        y,
        y - (width / 2.0) - (u_line_blur * pixel(1.0, iResolution.xy) * blur),
        st.y
    );

    return clamp(
        (line_start - line_end) * (1.0 - smoothstep(0.0, 1.0, pow(perc, 0.3))),
        0.0,
        1.0
    );
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;

    float line_strength = 1.0;
    for (int i = 0; i < u_line_count; i++) {
        float p = float(i) / float(u_line_count);
        line_strength *= (1.0 - lineFn(
            uv,
            u_line_width * pixel(1.0, iResolution.xy) * (1.0 - p),
            p,
            (PI * 1.0) * p,
            uMouse,
            iTime,
            uAmplitude,
            uDistance
        ));
    }

    float colorVal = 1.0 - line_strength;
    fragColor = vec4(uColor * colorVal, colorVal * 0.9);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;

function ThreadsBackground({
  color = [0.937, 0.255, 0.212], // BrandForge Crimson Red (#EF4136)
  amplitude = 1.1,
  distance = 0.15,
  enableMouseInteraction = true,
}) {
  const containerRef = useRef(null);
  const animationFrameId = useRef(0);
  const propsRef = useRef({ color, amplitude, distance, enableMouseInteraction });
  propsRef.current = { color, amplitude, distance, enableMouseInteraction };

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    let renderer, gl;
    try {
      renderer = new Renderer({ alpha: true });
      gl = renderer.gl;
      gl.clearColor(0, 0, 0, 0);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      container.appendChild(gl.canvas);
    } catch (err) {
      console.warn("OGL Threads WebGL skipped:", err);
      return;
    }

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        iTime: { value: 0 },
        iResolution: {
          value: new Color(gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height)
        },
        uColor: { value: new Color(...propsRef.current.color) },
        uAmplitude: { value: propsRef.current.amplitude },
        uDistance: { value: propsRef.current.distance },
        uMouse: { value: new Float32Array([0.5, 0.5]) }
      }
    });

    const mesh = new Mesh(gl, { geometry, program });

    const MAX_RENDER_DIM = 1920;
    function resize() {
      const { clientWidth, clientHeight } = container;
      const baseDpr = Math.min(window.devicePixelRatio || 1, 2);
      const longestSide = Math.max(clientWidth, clientHeight) * baseDpr;
      const dpr = longestSide > MAX_RENDER_DIM ? (baseDpr * MAX_RENDER_DIM) / longestSide : baseDpr;
      renderer.dpr = dpr;
      renderer.setSize(clientWidth, clientHeight);
      program.uniforms.iResolution.value.r = gl.canvas.width;
      program.uniforms.iResolution.value.g = gl.canvas.height;
      program.uniforms.iResolution.value.b = gl.canvas.width / gl.canvas.height;
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    window.addEventListener('resize', resize);
    resize();

    const currentMouse = [0.5, 0.5];
    let targetMouse = [0.5, 0.5];

    function handleMouseMove(e) {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      targetMouse = [x, y];
    }
    function handleMouseLeave() {
      targetMouse = [0.5, 0.5];
    }
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    let isVisible = true;
    const intersectionObserver = new IntersectionObserver(
      entries => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(container);

    function update(t) {
      animationFrameId.current = requestAnimationFrame(update);
      if (!isVisible || document.hidden) return;

      const { color, amplitude, distance, enableMouseInteraction } = propsRef.current;

      program.uniforms.uColor.value.set(...color);
      program.uniforms.uAmplitude.value = amplitude;
      program.uniforms.uDistance.value = distance;

      if (enableMouseInteraction) {
        const smoothing = 0.05;
        currentMouse[0] += smoothing * (targetMouse[0] - currentMouse[0]);
        currentMouse[1] += smoothing * (targetMouse[1] - currentMouse[1]);
        program.uniforms.uMouse.value[0] = currentMouse[0];
        program.uniforms.uMouse.value[1] = currentMouse[1];
      } else {
        program.uniforms.uMouse.value[0] = 0.5;
        program.uniforms.uMouse.value[1] = 0.5;
      }
      program.uniforms.iTime.value = t * 0.001;

      renderer.render({ scene: mesh });
    }
    animationFrameId.current = requestAnimationFrame(update);

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener('resize', resize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, []);

  return <div ref={containerRef} className="bf-threads-container" />;
}

export default function BrandForgeAboutUsSection({ onOpenModal, navigate }) {
  const containerRef = useRef(null);

  const handleAboutClick = (e) => {
    e.preventDefault();
    if (typeof navigate === "function") {
      navigate("/about");
    } else {
      window.location.hash = "/about";
    }
  };

  // Scroll Progress tracking for background & content scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Background & Content Scroll Parallax Transforms
  const bgParallaxY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const bgGridY = useTransform(scrollYProgress, [0, 1], [-45, 45]);
  const blobRotate = useTransform(scrollYProgress, [0, 1], [-6, 6]);
  const blobY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const dotMatrixX = useTransform(scrollYProgress, [0, 1], [-25, 25]);

  return (
    <section ref={containerRef} id="about-us" className="bf-about-section">
      <style>{styles}</style>

      {/* THREADS WEBGL BACKGROUND (BRANDFORGE CRIMSON RED THEME) */}
      <motion.div className="bf-about-threads-wrap" style={{ y: bgParallaxY }}>
        <ThreadsBackground
          color={[0.937, 0.255, 0.212]}
          amplitude={1.1}
          distance={0.15}
          enableMouseInteraction
        />
      </motion.div>

      {/* PARALLAX KINETIC BACKGROUND GRID */}
      <motion.div
        className="bf-about-bg-grid"
        style={{ y: bgGridY }}
      />

      <div className="bf-about-container">
        {/* LEFT COLUMN: CONCISE 2-PARAGRAPH EDITORIAL CONTENT */}
        <motion.div
          className="bf-about-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.85, ease: SMOOTH_EASE }}
        >
          <div className="bf-about-eyebrow">
            <span className="eyebrow-dot" /> ABOUT BRANDFORGE
          </div>

          <h2 className="bf-about-heading">
            Your Business Is Different.{" "}
            <span className="bf-highlight-wrap">
              Your Marketing Should Be Too.
              <motion.span
                className="bf-highlight-sweep"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.3, ease: SMOOTH_EASE }}
              />
            </span>
          </h2>

          <div className="bf-about-seo-body">
            <p>
              Digital marketing isn't about doing everything available—it's about knowing what your business needs and where effort makes the biggest difference. At BrandForge, we start by understanding your business, your audience, your competition, and your core growth goals.
            </p>
            <p>
              Our experienced team brings practical experience working across 20+ clients to unite strategy, creativity, and execution into one seamless engine. Whether improving search visibility, driving lead generation, or building brand equity, we focus on what scales your business.
            </p>
            <blockquote className="bf-about-quote-tagline">
              “The right strategy starts with understanding.”
            </blockquote>
          </div>

          {/* PRIMARY CTA BUTTON DIRECTLY BELOW CONTENT */}
          <motion.button
            className="bf-about-cta-btn"
            onClick={handleAboutClick}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>ABOUT BRANDFORGE</span>
            <div className="cta-btn-arrow">
              <ArrowUpRight size={18} />
            </div>
          </motion.button>
        </motion.div>

        {/* RIGHT COLUMN: ORGANIC FLUID MASK BLOB & SCROLL GRAPHIC */}
        <motion.div
          className="bf-about-right"
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.15, ease: SMOOTH_EASE }}
        >
          {/* PARALLAX FLOATING DOT MATRIX GRAPHIC */}
          <motion.div
            className="bf-dot-matrix-graphic"
            style={{ x: dotMatrixX }}
          />

          {/* BACKGROUND DARK CRIMSON BLOB ACCENT */}
          <motion.div
            className="bf-blob-backdrop"
            style={{ rotate: blobRotate, y: blobY }}
          />

          {/* MAIN ORGANIC FLUID BLOB IMAGE MASK */}
          <motion.div
            className="bf-blob-image-wrap"
            style={{ y: blobY }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=90"
              alt="BrandForge Creative Team"
              className="bf-blob-img"
            />
            <div className="bf-blob-overlay-glow" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const styles = `
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap");

.bf-about-section {
  position: relative;
  width: 100%;
  padding: clamp(60px, 8vw, 130px) 20px;
  background-color: #060509;
  color: #FFFFFF;
  font-family: "Plus Jakarta Sans", sans-serif;
  overflow: hidden;
  isolation: isolate;
}

/* THREADS WEBGL CONTAINER */
.bf-about-threads-wrap {
  position: absolute;
  inset: -100px 0;
  z-index: 0;
  pointer-events: auto;
  overflow: hidden;
  opacity: 0.85;
}

.bf-threads-container {
  position: relative;
  width: 100%;
  height: 100%;
}

/* PARALLAX KINETIC BACKGROUND GRID */
.bf-about-bg-grid {
  position: absolute;
  inset: -100px 0;
  z-index: 1;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(239, 65, 54, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(239, 65, 54, 0.06) 1px, transparent 1px);
  background-size: 80px 80px;
  opacity: 0.5;
}

/* MAIN CONTAINER GRID */
.bf-about-container {
  position: relative;
  z-index: 2;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: clamp(36px, 5vw, 90px);
  align-items: center;
}

/* LEFT COLUMN EDITORIAL CONTENT */
.bf-about-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.bf-about-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #EF4136;
  margin-bottom: 16px;
}

.eyebrow-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #EF4136;
}

.bf-about-heading {
  margin: 0 0 20px 0;
  font-family: "Outfit", sans-serif;
  font-size: clamp(2.0rem, 3.8vw, 3.6rem);
  font-weight: 900;
  line-height: 1.08;
  letter-spacing: -0.035em;
  color: #FFFFFF;
  text-transform: uppercase;
}

.bf-highlight-wrap {
  position: relative;
  display: inline-block;
  color: #FFFFFF;
  z-index: 1;
}

.bf-highlight-sweep {
  position: absolute;
  left: 0;
  bottom: 4px;
  width: 100%;
  height: 12px;
  background: rgba(239, 65, 54, 0.45);
  border-radius: 4px;
  z-index: -1;
  transform-origin: left center;
}

/* CONCISE 2-PARAGRAPH CONTAINER */
.bf-about-seo-body {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 26px;
  max-width: 660px;
}

.bf-about-seo-body p {
  margin: 0;
  font-size: clamp(0.95rem, 1.15vw, 1.08rem);
  line-height: 1.62;
  color: rgba(255, 255, 255, 0.88);
  font-weight: 500;
}

.bf-about-quote-tagline {
  margin: 8px 0 0 0;
  padding-left: 16px;
  border-left: 3px solid #EF4136;
  font-family: "Outfit", sans-serif;
  font-size: clamp(1.05rem, 1.3vw, 1.25rem);
  font-weight: 800;
  color: #FFFFFF;
  font-style: italic;
  letter-spacing: -0.01em;
}

/* CTA BUTTON */
.bf-about-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 15px 30px;
  margin-bottom: 28px;
  background: #EF4136;
  color: #FFFFFF;
  border: none;
  border-radius: 12px;
  font-family: "Outfit", sans-serif;
  font-size: 0.92rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.3s ease;
}

.bf-about-cta-btn:hover {
  background: #FF4D4D;
}

.cta-btn-arrow {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #FFFFFF;
  color: #EF4136;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.bf-about-cta-btn:hover .cta-btn-arrow {
  transform: rotate(45deg);
}

/* AGENCY METRICS ROW */
.bf-about-metrics-row {
  display: flex;
  align-items: center;
  gap: clamp(18px, 2.5vw, 36px);
  width: 100%;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  flex-wrap: wrap;
}

.metric-box {
  display: flex;
  flex-direction: column;
}

.metric-num {
  font-family: "Outfit", sans-serif;
  font-size: clamp(1.7rem, 2.5vw, 2.4rem);
  font-weight: 900;
  color: #EF4136;
  line-height: 1;
  letter-spacing: -0.02em;
}

.metric-label {
  font-size: 0.78rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 6px;
}

/* RIGHT COLUMN ORGANIC BLOB IMAGE */
.bf-about-right {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

/* PARALLAX DOT MATRIX GRAPHIC */
.bf-dot-matrix-graphic {
  position: absolute;
  bottom: -20px;
  left: -30px;
  width: 140px;
  height: 140px;
  z-index: 1;
  pointer-events: none;
  background-image: radial-gradient(rgba(255, 255, 255, 0.3) 2px, transparent 2px);
  background-size: 14px 14px;
}

/* BACKDROP BLOB ACCENT */
.bf-blob-backdrop {
  position: absolute;
  width: 92%;
  height: 92%;
  background: #14111D;
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  z-index: 1;
  border: 1px solid rgba(239, 65, 54, 0.3);
}

/* MAIN BLOB IMAGE WRAPPER WITH ORGANIC CUTOUT MASK */
.bf-blob-image-wrap {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 480px;
  height: 480px;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7);
  border: 3px solid rgba(255, 255, 255, 0.15);
}

.bf-blob-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}

.bf-blob-image-wrap:hover .bf-blob-img {
  transform: scale(1.05);
}

.bf-blob-overlay-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(180deg, transparent 60%, rgba(6, 5, 9, 0.6) 100%);
}

/* RESPONSIVE MOBILE OPTIMIZATIONS */
@media (max-width: 992px) {
  .bf-about-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .bf-about-right {
    order: -1;
  }
  .bf-blob-image-wrap {
    max-width: 100%;
    height: 360px;
  }
}

@media (max-width: 576px) {
  .bf-about-section {
    padding: 50px 16px;
  }
  .bf-about-heading {
    font-size: 1.85rem;
    line-height: 1.12;
  }
  .bf-about-seo-body p {
    font-size: 0.92rem;
    line-height: 1.58;
  }
  .bf-about-metrics-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    padding-top: 16px;
  }
  .metric-num {
    font-size: 1.5rem;
  }
  .metric-label {
    font-size: 0.68rem;
  }
  .bf-blob-image-wrap {
    height: 280px;
    border-radius: 24px;
  }
  .bf-blob-backdrop {
    display: none;
  }
  .bf-dot-matrix-graphic {
    display: none;
  }
}
`;
