"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Users,
  Layers3,
  Cpu,
  Phone,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import * as THREE from "three";

// ───────────────────────────────────────────────────────────────────────────
// BRANDFORGE CRIMSON RED 3D LIQUID ORB WEBGL SHADERS
// ───────────────────────────────────────────────────────────────────────────

const noiseGLSL = /* glsl */ `
  vec4 permute(vec4 x) {
    return mod(((x * 34.0) + 1.0) * x, 289.0);
  }

  vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
  }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;

    i = mod(i, 289.0);
    vec4 p = permute(
      permute(
        permute(i.z + vec4(0.0, i1.z, i2.z, 1.0))
        + i.y + vec4(0.0, i1.y, i2.y, 1.0)
      ) + i.x + vec4(0.0, i1.x, i2.x, 1.0)
    );

    float n_ = 1.0 / 7.0;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(
      dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)
    ));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    vec4 m = max(
      0.6 - vec4(
        dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)
      ),
      0.0
    );
    m *= m;
    return 42.0 * dot(
      m * m,
      vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3))
    );
  }

  float fbm(vec3 p) {
    float value = 0.0;
    float amplitude = 0.55;
    mat3 rotation = mat3(
       0.00,  0.80,  0.60,
      -0.80,  0.36, -0.48,
      -0.60, -0.48,  0.64
    );

    for (int i = 0; i < 4; i++) {
      value += amplitude * snoise(p);
      p = rotation * p * 2.02 + vec3(0.17, -0.11, 0.13);
      amplitude *= 0.5;
    }
    return value;
  }
`;

const blobVertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uEnergy;

  varying vec3 vObjectPosition;
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;
  varying float vNoise;

  ${noiseGLSL}

  void main() {
    vec3 p = position;
    float time = uTime * 0.42;
    vec3 samplePoint = normalize(position) * 2.35;

    float broadNoise = snoise(
      samplePoint + vec3(time, -time * 0.71, time * 0.46)
    );
    float detailNoise = snoise(
      samplePoint * 2.1 + vec3(-time * 0.82, time * 0.55, -time * 0.34)
    );
    float liquidNoise = broadNoise + detailNoise * 0.42;
    float ripple = sin(position.y * 5.4 - uTime * 1.65 + liquidNoise * 2.8);
    float displacement = liquidNoise * 0.034 + ripple * 0.011;

    p += normal * displacement * (1.0 + uEnergy * 0.78);

    vec4 world = modelMatrix * vec4(p, 1.0);
    vObjectPosition = p;
    vWorldPosition = world.xyz;
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    vNoise = liquidNoise;

    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const liquidFragmentShader = /* glsl */ `
  uniform float uTime;
  uniform float uEnergy;
  uniform vec2 uPointer;

  varying vec3 vObjectPosition;
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;
  varying float vNoise;

  ${noiseGLSL}

  mat2 rotate2d(float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return mat2(c, -s, s, c);
  }

  void main() {
    vec3 p = vObjectPosition * 2.3;
    p.xz *= rotate2d(uTime * 0.12);
    p.xy *= rotate2d(-uTime * 0.08);

    vec3 drift = vec3(
      uTime * 0.13,
      -uTime * 0.18,
      uTime * 0.105
    );
    float warpA = fbm(p * 1.08 + drift);
    float warpB = fbm(
      p * 1.72 - drift * 1.37 + vec3(warpA * 1.4)
    );
    float flow = fbm(
      p * 2.35 + vec3(warpA, warpB, -warpA) * 1.75 + drift * 0.8
    );

    float angle = atan(p.z, p.x);
    float ribbonWave = sin(
      p.y * 5.0 + angle * 2.25 + warpA * 4.2 - uTime * 1.35
    );
    float ribbons = pow(max(0.0, 1.0 - abs(ribbonWave)), 4.5);
    float cells = smoothstep(0.08, 0.72, flow + warpB * 0.46);
    float sparks = pow(max(0.0, flow * 0.5 + warpA * 0.5 + 0.44), 6.0);

    vec3 normal = normalize(vWorldNormal);
    vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
    float facing = clamp(dot(normal, viewDirection), 0.0, 1.0);
    float fresnel = pow(1.0 - facing, 2.75);

    // BrandForge Theme Color Palette (Crimson Red, Electric Red, Flame & White)
    vec3 deepRed = vec3(0.18, 0.02, 0.02);
    vec3 electricRed = vec3(0.937, 0.255, 0.212); // #EF4136
    vec3 liquidFlame = vec3(1.0, 0.35, 0.28);    // #FF5848
    vec3 pureWhite = vec3(1.0, 0.96, 0.96);     // #FFFFFF

    vec3 color = mix(deepRed, electricRed, cells);
    color = mix(color, liquidFlame, ribbons * 0.66);
    color += electricRed * max(vNoise, 0.0) * 0.42;
    color += pureWhite * sparks * (0.6 + uEnergy * 0.65);
    color += mix(electricRed, liquidFlame, facing) * fresnel * 0.82;

    float pointerGlow = max(
      0.0,
      dot(normalize(vObjectPosition), normalize(vec3(uPointer, 0.72)))
    );
    pointerGlow = pow(pointerGlow, 10.0);
    color += pureWhite * pointerGlow * (0.16 + uEnergy * 0.36);

    color *= 0.86 + facing * 0.28;
    gl_FragColor = vec4(color, 0.98);
  }
`;

const glassFragmentShader = /* glsl */ `
  uniform float uTime;
  uniform float uEnergy;

  varying vec3 vObjectPosition;
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;
  varying float vNoise;

  void main() {
    vec3 normal = normalize(vWorldNormal);
    vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
    vec3 lightDirection = normalize(vec3(-0.55, 0.82, 0.95));
    vec3 reflectedLight = reflect(-lightDirection, normal);

    float facing = clamp(dot(normal, viewDirection), 0.0, 1.0);
    float fresnel = pow(1.0 - facing, 3.15);
    float sharpHighlight = pow(
      max(dot(reflectedLight, viewDirection), 0.0),
      86.0
    );
    float broadHighlight = pow(
      max(dot(reflectedLight, viewDirection), 0.0),
      13.0
    );
    float lowerRim = pow(
      max(dot(normal, normalize(vec3(0.35, -0.75, 0.52))), 0.0),
      8.0
    );

    vec3 red = vec3(0.937, 0.255, 0.212);
    vec3 flame = vec3(1.0, 0.42, 0.35);
    vec3 white = vec3(1.0, 0.98, 0.98);

    vec3 color = red * fresnel * 1.18;
    color += flame * broadHighlight * 0.36;
    color += white * sharpHighlight * (1.4 + uEnergy * 0.55);
    color += red * lowerRim * 0.28;
    color += flame * max(vNoise, 0.0) * fresnel * 0.16;

    float alpha = 0.035 + fresnel * 0.47;
    alpha += broadHighlight * 0.10 + sharpHighlight * 0.74;
    alpha += lowerRim * 0.08;

    gl_FragColor = vec4(color, clamp(alpha, 0.0, 0.92));
  }
`;

function seededRandom(index) {
  const value = Math.sin(index * 78.233 + 19.19) * 43758.5453;
  return value - Math.floor(value);
}

function LiquidOrbCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer;
    let w = 60;
    let h = 60;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.12;
      renderer.setClearColor(0x000000, 0);

      const rect = container.getBoundingClientRect();
      w = Math.max(1, rect.width);
      h = Math.max(1, rect.height);
      renderer.setSize(w, h);
      container.appendChild(renderer.domElement);
    } catch (err) {
      console.warn("Liquid Orb WebGL error skipped:", err);
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, w / h, 0.1, 20);
    camera.position.set(0, 0, 4.15);

    const group = new THREE.Group();
    scene.add(group);

    const sphereGeo = new THREE.SphereGeometry(1, 96, 96);

    // Fluid Material
    const fluidMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uEnergy: { value: 0.14 },
        uPointer: { value: new THREE.Vector2(0, 0) },
      },
      vertexShader: blobVertexShader,
      fragmentShader: liquidFragmentShader,
      transparent: true,
      depthWrite: true,
    });
    const fluidMesh = new THREE.Mesh(sphereGeo, fluidMaterial);
    fluidMesh.scale.setScalar(0.955);
    fluidMesh.renderOrder = 1;
    group.add(fluidMesh);

    // Energy Ribbons
    const ribbonsGroup = new THREE.Group();
    ribbonsGroup.scale.setScalar(0.93);

    const knotGeo1 = new THREE.TorusKnotGeometry(0.57, 0.012, 180, 7, 2, 3);
    const knotMat1 = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#EF4136"),
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
    });
    const knotMesh1 = new THREE.Mesh(knotGeo1, knotMat1);
    knotMesh1.rotation.set(0.7, 0.25, 0.15);
    ribbonsGroup.add(knotMesh1);

    const knotGeo2 = new THREE.TorusKnotGeometry(0.56, 0.009, 160, 6, 3, 4);
    const knotMat2 = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#FF7777"),
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
    });
    const knotMesh2 = new THREE.Mesh(knotGeo2, knotMat2);
    knotMesh2.rotation.set(-0.42, 0.78, -0.4);
    knotMesh2.scale.setScalar(0.82);
    ribbonsGroup.add(knotMesh2);

    group.add(ribbonsGroup);

    // Internal Floating Particles
    const particleCount = 92;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = Math.cbrt(seededRandom(i * 3 + 1)) * 0.84;
      const theta = seededRandom(i * 3 + 2) * Math.PI * 2;
      const z = seededRandom(i * 3 + 3) * 2 - 1;
      const ring = Math.sqrt(1 - z * z);

      positions[i * 3] = radius * ring * Math.cos(theta);
      positions[i * 3 + 1] = radius * z;
      positions[i * 3 + 2] = radius * ring * Math.sin(theta);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: new THREE.Color("#ffb3b3"),
      size: 0.025,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
    });
    const particlesMesh = new THREE.Points(particleGeo, particleMat);
    particlesMesh.renderOrder = 4;
    group.add(particlesMesh);

    // Glass Material
    const glassMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uEnergy: { value: 0.14 },
      },
      vertexShader: blobVertexShader,
      fragmentShader: glassFragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });
    const glassMesh = new THREE.Mesh(sphereGeo, glassMaterial);
    glassMesh.scale.setScalar(1.035);
    glassMesh.renderOrder = 5;
    group.add(glassMesh);

    // Outer Glow Shell
    const outerMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#ef4136"),
      transparent: true,
      opacity: 0.08,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      toneMapped: false,
    });
    const outerMesh = new THREE.Mesh(new THREE.SphereGeometry(1, 64, 64), outerMat);
    outerMesh.scale.setScalar(1.062);
    outerMesh.renderOrder = 6;
    group.add(outerMesh);

    let rafId;
    const clock = new THREE.Clock();
    const pointer = new THREE.Vector2(0, 0);

    const onPointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };
    window.addEventListener("pointermove", onPointerMove);

    let burst = 0;
    let hovered = false;

    const onEnter = () => { hovered = true; };
    const onLeave = () => { hovered = false; };
    const onClick = () => { burst = 1.05; };

    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);
    container.addEventListener("click", onClick);

    const animate = () => {
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      const targetEnergy = hovered ? 0.62 : 0.14;
      burst = Math.max(0, burst - delta * 1.55);
      const energy = Math.min(1.25, targetEnergy + burst);

      fluidMaterial.uniforms.uTime.value = elapsed;
      fluidMaterial.uniforms.uEnergy.value = THREE.MathUtils.damp(fluidMaterial.uniforms.uEnergy.value, energy, 5.2, delta);
      fluidMaterial.uniforms.uPointer.value.lerp(pointer, 0.065);

      glassMaterial.uniforms.uTime.value = elapsed;
      glassMaterial.uniforms.uEnergy.value = THREE.MathUtils.damp(glassMaterial.uniforms.uEnergy.value, energy, 5.2, delta);

      particlesMesh.rotation.y += delta * 0.16;
      particlesMesh.rotation.x = Math.sin(elapsed * 0.22) * 0.24;
      particleMat.opacity = 0.58 + Math.sin(elapsed * 2.2) * 0.13;

      ribbonsGroup.rotation.x += delta * 0.075;
      ribbonsGroup.rotation.y -= delta * 0.105;
      ribbonsGroup.rotation.z = Math.sin(elapsed * 0.31) * 0.22;

      const targetScale = hovered ? 1.055 : 1;
      const scale = THREE.MathUtils.damp(group.scale.x, targetScale, 6.5, delta);
      group.scale.setScalar(scale);

      group.rotation.y = THREE.MathUtils.damp(group.rotation.y, pointer.x * 0.22 + elapsed * 0.055, 3.2, delta);
      group.rotation.x = THREE.MathUtils.damp(group.rotation.x, -pointer.y * 0.17 + Math.sin(elapsed * 0.5) * 0.04, 3.2, delta);

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      if (!container) return;
      const { width: rw, height: rh } = container.getBoundingClientRect();
      renderer.setSize(rw, rh);
      camera.aspect = rw / rh;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
      container.removeEventListener("click", onClick);
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="liquid-nav__orb" aria-label="Interactive BrandForge liquid energy orb">
      <div className="liquid-nav__orb-glow" />
      <div ref={containerRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}

const NAVIGATION_ITEMS = [
  { label: "Home", to: "/", icon: Home },
  { label: "Who We Are", to: "/about", icon: Users },
  { label: "Services", to: "/#stacked-services", icon: Layers3 },
  { label: "Contact", to: "/contact", icon: Phone },
];

export default function SiteNavbar({ path, navigate, onOpenModal }) {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isLightLandingPage = path?.startsWith("/services/");

  useEffect(() => {
    const onScroll = () => {
      // Calculate hero / banner section height threshold (only hide on home page)
      if (isLightLandingPage) {
        setScrolledPastHero(false);
        return;
      }
      const heroThreshold = Math.min(window.innerHeight * 0.75, 650);
      setScrolledPastHero(window.scrollY > heroThreshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isLightLandingPage]);

  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  const go = (to) => {
    if (to.startsWith("/#")) {
      const targetId = to.replace("/#", "");
      if (path !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 150);
      } else {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(to);
    }
    setMenuOpen(false);
  };

  return (
    <header className={`liquid-nav__root ${scrolledPastHero && !isLightLandingPage ? "is-hidden" : ""}`}>
      <style>{styles}</style>

      <nav className={`liquid-nav__bar ${isLightLandingPage ? "is-dark-landing-bar" : ""}`} aria-label="Primary navigation">
        {/* BRANDFORGE COMPANY LOGO */}
        <div className="liquid-nav__brand-logo" onClick={() => go("/")} style={{ cursor: "pointer" }}>
          <img src="/brandforge-logo.png" alt="BrandForge Logo" className="liquid-nav__logo-img" />
        </div>

        {/* NAVIGATION RAIL ITEMS */}
        <div className="liquid-nav__rail">
          {NAVIGATION_ITEMS.map(({ label, to, icon: Icon }) => {
            const isActive = path === to;

            return (
              <button
                key={label}
                type="button"
                className={`liquid-nav__item${isActive ? " is-active" : ""}`}
                aria-current={isActive ? "page" : undefined}
                onClick={() => go(to)}
              >
                <span className="liquid-nav__item-shine" />
                <Icon aria-hidden="true" strokeWidth={2} />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* CTA ACTION & MOBILE HAMBURGER BUTTON */}
        <div className="liquid-nav__actions">
          <button type="button" className="liquid-nav__cta" onClick={onOpenModal}>
            <span>LET'S TALK</span>
            <ArrowUpRight size={16} />
          </button>

          <button
            type="button"
            className="liquid-nav__burger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* MOBILE NAV OVERLAY DRAWER */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="liquid-nav__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {NAVIGATION_ITEMS.map(({ label, to, icon: Icon }) => (
              <button
                key={label}
                type="button"
                className={`liquid-nav__mobile-link ${path === to ? "is-active" : ""}`}
                onClick={() => go(to)}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Icon size={18} />
                  <span>{label}</span>
                </div>
              </button>
            ))}
            <button
              type="button"
              className="liquid-nav__mobile-cta"
              onClick={() => {
                setMenuOpen(false);
                onOpenModal();
              }}
            >
              <span>LET'S TALK</span>
              <ArrowUpRight size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

const styles = /* css */ `
  @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap");

  .liquid-nav__root {
    position: fixed;
    top: 18px;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    padding: 0 16px;
    pointer-events: none;
    transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease;
  }

  .liquid-nav__root.is-hidden {
    transform: translateY(-120%);
    opacity: 0;
  }

  .liquid-nav__bar {
    position: relative;
    pointer-events: auto;
    display: flex;
    width: min(1040px, calc(100vw - 32px));
    height: 72px;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 8px 18px 8px 14px;
    border: 1px solid rgba(255, 255, 255, 0.35);
    border-radius: 999px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(239, 65, 54, 0.08) 100%);
    backdrop-filter: blur(28px) saturate(220%);
    -webkit-backdrop-filter: blur(28px) saturate(220%);
    box-shadow:
      inset 1.5px 1.5px 3px rgba(255, 255, 255, 0.7),
      inset -1.5px -1.5px 4px rgba(0, 0, 0, 0.4),
      0 20px 50px rgba(0, 0, 0, 0.5),
      0 0 35px rgba(239, 65, 54, 0.2);
    transition: background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
  }

  .liquid-nav__bar.is-dark-landing-bar {
    background: rgba(10, 10, 14, 0.94) !important;
    border: 1px solid rgba(255, 255, 255, 0.25) !important;
    box-shadow:
      inset 1.5px 1.5px 3px rgba(255, 255, 255, 0.4),
      inset -1.5px -1.5px 4px rgba(0, 0, 0, 0.6),
      0 20px 50px rgba(0, 0, 0, 0.4),
      0 0 35px rgba(239, 65, 54, 0.35) !important;
    backdrop-filter: blur(28px) saturate(220%) !important;
    -webkit-backdrop-filter: blur(28px) saturate(220%) !important;
  }

  .liquid-nav__bar::after {
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    content: "";
    background: linear-gradient(105deg, rgba(255, 255, 255, 0.15), transparent 35%, transparent 65%, rgba(239, 65, 54, 0.12));
    pointer-events: none;
  }

  .liquid-nav__brand-logo {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    padding-left: 6px;
    padding-right: 8px;
  }

  .liquid-nav__logo-img {
    height: 38px;
    width: auto;
    object-fit: contain;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4));
    transition: transform 0.25s ease;
  }

  .liquid-nav__brand-logo:hover .liquid-nav__logo-img {
    transform: scale(1.06);
  }

  .liquid-nav__orb {
    position: relative;
    isolation: isolate;
    width: 100%;
    height: 100%;
    overflow: visible;
    border-radius: 50%;
  }

  .liquid-nav__orb canvas {
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 50%;
  }

  .liquid-nav__orb-glow {
    position: absolute;
    z-index: 0;
    inset: 12%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(239, 65, 54, 0.5) 0%, transparent 80%);
    opacity: 0.56;
    filter: blur(12px);
    animation: liquid-nav-breathe 3.4s ease-in-out infinite;
  }

  .liquid-nav__rail {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .liquid-nav__item {
    position: relative;
    display: inline-flex;
    height: 44px;
    align-items: center;
    justify-content: center;
    gap: 8px;
    overflow: hidden;
    padding: 0 18px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 999px;
    outline: none;
    color: rgba(255, 255, 255, 0.85);
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 0.88rem;
    font-weight: 700;
    cursor: pointer;
    box-shadow:
      inset 1px 1px 2px rgba(255, 255, 255, 0.4),
      inset -1px -1px 2px rgba(0, 0, 0, 0.3);
    transition:
      color 300ms ease,
      border-color 300ms ease,
      background 300ms ease,
      box-shadow 300ms ease,
      transform 300ms ease;
  }

  .liquid-nav__item svg {
    z-index: 1;
    width: 18px;
    height: 18px;
    color: #EF4136;
    transition: transform 300ms ease, color 300ms ease;
  }

  .liquid-nav__item > span:last-child {
    z-index: 1;
    letter-spacing: -0.01em;
  }

  .liquid-nav__item-shine {
    position: absolute;
    top: -120%;
    left: -45%;
    width: 42%;
    height: 340%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
    opacity: 0;
    pointer-events: none;
    transform: rotate(16deg);
    transition: left 600ms cubic-bezier(0.16, 1, 0.3, 1), opacity 200ms ease;
  }

  .liquid-nav__item:hover {
    border-color: rgba(255, 255, 255, 0.45);
    color: #FFFFFF;
    background: rgba(255, 255, 255, 0.14);
    box-shadow:
      inset 1.5px 1.5px 3px rgba(255, 255, 255, 0.6),
      0 4px 20px rgba(239, 65, 54, 0.25);
    transform: translateY(-2px);
  }

  .liquid-nav__item:hover .liquid-nav__item-shine {
    left: 108%;
    opacity: 1;
  }

  .liquid-nav__item:hover svg {
    transform: scale(1.1);
    color: #FFFFFF;
  }

  .liquid-nav__item.is-active {
    color: #FFFFFF;
    background: linear-gradient(135deg, rgba(239, 65, 54, 0.45) 0%, rgba(255, 255, 255, 0.2) 100%);
    border-color: rgba(255, 255, 255, 0.6);
    box-shadow:
      inset 1.5px 1.5px 3px rgba(255, 255, 255, 0.8),
      inset -1px -1px 3px rgba(0, 0, 0, 0.3),
      0 6px 20px rgba(239, 65, 54, 0.45);
  }

  .liquid-nav__item.is-active svg {
    color: #FFFFFF;
  }

  .liquid-nav__actions {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .liquid-nav__cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 22px;
    background: #EF4136;
    color: #FFFFFF;
    border: none;
    border-radius: 999px;
    font-family: "Outfit", sans-serif;
    font-size: 0.85rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 0.25s ease, background 0.25s ease;
  }

  .liquid-nav__cta:hover {
    background: #EF4136;
    transform: translateY(-2px);
  }

  .liquid-nav__burger {
    display: none;
    pointer-events: auto;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 50%;
    width: 44px;
    height: 44px;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    cursor: pointer;
  }

  .liquid-nav__mobile {
    margin-top: 10px;
    width: min(1040px, calc(100vw - 32px));
    pointer-events: auto;
    overflow: hidden;
    background: #000000;
    border: 1px solid rgba(239, 65, 54, 0.3);
    border-radius: 24px;
    padding: 12px 0;
  }

  .liquid-nav__mobile-link,
  .liquid-nav__mobile-cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 14px 24px;
    background: none;
    border: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
    text-align: left;
  }

  .liquid-nav__mobile-link.is-active {
    color: #EF4136;
  }

  .liquid-nav__mobile-cta {
    color: #EF4136;
    border-bottom: none;
    font-weight: 800;
  }

  @keyframes liquid-nav-breathe {
    0%, 100% { opacity: 0.26; transform: scale(0.9); }
    50% { opacity: 0.48; transform: scale(1.08); }
  }

  @keyframes liquid-nav-bloom {
    0%, 100% { opacity: 0.64; transform: scale(0.96); }
    50% { opacity: 0.94; transform: scale(1.12); }
  }

  @keyframes liquid-nav-rim-pulse {
    0%, 100% { opacity: 0.58; transform: scale(0.99); }
    50% { opacity: 0.9; transform: scale(1.025); }
  }

  @media (max-width: 860px) {
    .liquid-nav__rail {
      display: none;
    }
    .liquid-nav__cta {
      display: none;
    }
    .liquid-nav__burger {
      display: inline-flex;
    }
  }
`;
