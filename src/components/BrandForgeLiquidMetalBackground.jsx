import React, { useEffect, useRef } from "react";
import * as THREE from "three";

/* ───────────────────────────────────────────────────────────────────────────
   BRANDFORGE LIQUID METAL SHADER & SPARK BACKGROUND COMPONENT
   Inspired by Laocoön liquid metal wave shader + floating ember sparks.
   ─────────────────────────────────────────────────────────────────────────── */

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform float uScroll;

  float hash(float n) { return fract(sin(n) * 43758.5453123); }

  float noise(in vec3 x) {
    vec3 p = floor(x);
    vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    float n = p.x + p.y * 57.0 + 113.0 * p.z;
    return mix(
      mix(
        mix(hash(n + 0.0), hash(n + 1.0), f.x),
        mix(hash(n + 57.0), hash(n + 58.0), f.x),
        f.y
      ),
      mix(
        mix(hash(n + 113.0), hash(n + 114.0), f.x),
        mix(hash(n + 170.0), hash(n + 171.0), f.x),
        f.y
      ),
      f.z
    );
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / uResolution.y;
    float aspect = uResolution.x / uResolution.y;
    float time = uTime * 0.08;
    float scroll = uScroll;

    float angle1 = 0.6;
    float angle2 = -0.7;
    float angle3 = 1.2;

    float freq1 = 2.4;
    float freq2 = 3.2;
    float freq3 = 4.0;

    vec2 warpedUv = uv;
    float scrollDeform = scroll * 4.0;
    warpedUv.x += sin(uv.y * 2.5 + time * 0.2 + scrollDeform) * 0.35;
    warpedUv.y += cos(uv.x * 2.5 - time * 0.15 - scrollDeform * 0.8) * 0.35;
    warpedUv.x += sin(uv.y * 1.2 - time * 0.1 - scrollDeform * 1.5) * 0.25;
    warpedUv.y += cos(uv.x * 1.2 + time * 0.18 + scrollDeform * 1.2) * 0.25;

    vec2 scrollDrift = vec2(scroll * 0.04, -scroll * 0.02);
    vec2 mouseShift = vec2(uMouse.x * aspect * 0.05, uMouse.y * 0.05);
    warpedUv += scrollDrift + mouseShift;

    vec2 dir1 = vec2(cos(angle1), sin(angle1));
    vec2 dir2 = vec2(cos(angle2), sin(angle2));
    vec2 dir3 = vec2(cos(angle3), sin(angle3));

    float w1 = sin(dot(warpedUv, dir1) * freq1 + time * 1.0);
    float w2 = cos(dot(warpedUv, dir2) * freq2 - time * 1.4 + w1 * 0.4);
    float w3 = sin(dot(warpedUv, dir3) * freq3 + time * 1.8 + w2 * 0.5);
    float waveField = w1 * 0.50 + w2 * 0.35 + w3 * 0.15;

    float wideSheen = pow(max(0.0, 1.0 - abs(waveField - 0.1)), 2.5);
    float crispSpecular = pow(max(0.0, 1.0 - abs(waveField - 0.15)), 8.0);
    float crest = wideSheen * 0.5 + crispSpecular * 0.9;

    // BrandForge Acid Crimson Palette Integration (Extra Lighter & Soft Tones)
    vec3 c0_shadow = vec3(0.28, 0.12, 0.14);
    vec3 c0_wave1  = vec3(0.60, 0.22, 0.20);
    vec3 c0_wave2  = vec3(0.42, 0.14, 0.12);
    vec3 c0_crest  = vec3(0.95, 0.50, 0.45);

    vec3 c1_shadow = vec3(0.24, 0.10, 0.12);
    vec3 c1_wave1  = vec3(0.65, 0.25, 0.22);
    vec3 c1_wave2  = vec3(0.46, 0.16, 0.14);
    vec3 c1_crest  = vec3(0.98, 0.58, 0.52);

    float t = smoothstep(0.0, 1.0, scroll);
    vec3 colShadow = mix(c0_shadow, c1_shadow, t);
    vec3 colWave1  = mix(c0_wave1, c1_wave1, t);
    vec3 colWave2  = mix(c0_wave2, c1_wave2, t);
    vec3 colCrest  = mix(c0_crest, c1_crest, t);

    vec3 color = colShadow;
    color = mix(color, colWave2, smoothstep(-0.6, 0.2, waveField));
    color = mix(color, colWave1, smoothstep(0.0, 0.8, waveField));
    color += colCrest * crest * 1.3 + vec3(0.18, 0.08, 0.08);

    float vignette = 1.0 - dot(uv, uv) * 0.03;
    color *= vignette;
    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function BrandForgeLiquidMetalBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animId = 0;
    const sizes = { width: window.innerWidth, height: window.innerHeight };

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height, 0.1, 100);
    camera.position.set(0, 0, 3);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    } catch (err) {
      console.warn("WebGL initialization skipped:", err);
      return;
    }

    const shaderUniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(sizes.width, sizes.height) },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uScroll: { value: 0 },
    };

    const bgMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: shaderUniforms,
      depthWrite: false,
      depthTest: false,
      transparent: true,
    });

    const bgGeometry = new THREE.PlaneGeometry(30, 30);
    const bgMesh = new THREE.Mesh(bgGeometry, bgMaterial);
    bgMesh.position.set(0, 0, -8);
    scene.add(bgMesh);

    // Create Ember Spark Particles
    const sparkCount = 350;
    const sparkPositions = new Float32Array(sparkCount * 3);
    const sparkColors = new Float32Array(sparkCount * 3);
    const sparkData = [];

    const textureCanvas = document.createElement("canvas");
    textureCanvas.width = 16;
    textureCanvas.height = 16;
    const ctx = textureCanvas.getContext("2d");
    const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.25, "rgba(239, 65, 54, 0.85)");
    gradient.addColorStop(0.6, "rgba(239, 65, 54, 0.25)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 16, 16);
    const sparkTexture = new THREE.CanvasTexture(textureCanvas);

    for (let i = 0; i < sparkCount; i++) {
      const x = (Math.random() - 0.5) * 7.5;
      const y = (Math.random() - 0.5) * 6.0;
      const z = (Math.random() - 0.5) * 6.0;
      sparkPositions[i * 3] = x;
      sparkPositions[i * 3 + 1] = y;
      sparkPositions[i * 3 + 2] = z;

      if (Math.random() < 0.65) {
        sparkColors[i * 3] = 0.937;
        sparkColors[i * 3 + 1] = 0.255;
        sparkColors[i * 3 + 2] = 0.212;
      } else {
        sparkColors[i * 3] = 1.0;
        sparkColors[i * 3 + 1] = 0.6;
        sparkColors[i * 3 + 2] = 0.4;
      }

      sparkData.push({
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: 0.15 + Math.random() * 0.35,
        speedZ: (Math.random() - 0.5) * 0.35,
        swaySpeed: 0.5 + Math.random() * 1.5,
        swayRadius: 0.05 + Math.random() * 0.15,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const sparkGeo = new THREE.BufferGeometry();
    sparkGeo.setAttribute("position", new THREE.BufferAttribute(sparkPositions, 3));
    sparkGeo.setAttribute("color", new THREE.BufferAttribute(sparkColors, 3));

    const sparkMat = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      map: sparkTexture,
    });

    const sparkParticles = new THREE.Points(sparkGeo, sparkMat);
    scene.add(sparkParticles);

    // Scroll & Mouse Tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    let currentScroll = 0;

    const onPointerMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener("mousemove", onPointerMove, { passive: true });

    const clock = new THREE.Clock();

    const render = () => {
      const delta = Math.min(clock.getDelta(), 0.05);
      const time = clock.getElapsedTime();

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const targetScroll = maxScroll > 0 ? scrollTop / maxScroll : 0;
      currentScroll += (targetScroll - currentScroll) * 0.05;

      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      shaderUniforms.uTime.value = time;
      shaderUniforms.uMouse.value.set(currentMouseX, -currentMouseY);
      shaderUniforms.uScroll.value = currentScroll;

      // Update Spark Particles
      if (sparkParticles) {
        const positions = sparkParticles.geometry.attributes.position.array;
        for (let i = 0; i < sparkCount; i++) {
          const idx = i * 3;
          const data = sparkData[i];
          positions[idx] += data.speedX * delta;
          positions[idx + 1] += data.speedY * delta;
          positions[idx + 2] += data.speedZ * delta;

          positions[idx] += Math.sin(time * data.swaySpeed + data.phase) * data.swayRadius * delta;
          positions[idx + 2] += Math.cos(time * data.swaySpeed + data.phase) * data.swayRadius * delta;

          if (positions[idx + 1] > 3.2 || Math.abs(positions[idx]) > 4 || Math.abs(positions[idx + 2]) > 4) {
            positions[idx + 1] = -3.0;
            positions[idx] = (Math.random() - 0.5) * 4;
            positions[idx + 2] = (Math.random() - 0.5) * 4;
          }
        }
        sparkParticles.geometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    const onResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
      shaderUniforms.uResolution.value.set(sizes.width, sizes.height);
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      bgGeometry.dispose();
      bgMaterial.dispose();
      sparkGeo.dispose();
      sparkMat.dispose();
      sparkTexture.dispose();
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          opacity: 0.15,
          pointerEvents: "none",
        }}
      />
    </>
  );
}
