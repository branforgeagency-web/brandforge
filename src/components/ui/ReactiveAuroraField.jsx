"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function ReactiveAuroraField({
  hasActiveReminders = false,
  hasUpcomingReminders = false,
  disableCenterDimming = false,
  className = "",
  style = {},
}) {
  const containerRef = useRef(null);
  const materialRef = useRef(null);

  useEffect(() => {
    const material = materialRef.current;
    if (!material) return;

    material.uniforms.uMode.value = hasActiveReminders
      ? 1
      : hasUpcomingReminders
        ? 2
        : 0;

    material.uniforms.uCenterDimming.value = disableCenterDimming ? 0 : 1;
  }, [hasActiveReminders, hasUpcomingReminders, disableCenterDimming]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: false,
      powerPreference: "high-performance",
    });

    renderer.setClearColor(0x060509, 1);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    renderer.domElement.setAttribute("aria-hidden", "true");

    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const vertexShader = /* glsl */ `
      varying vec2 vUv;

      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `;

    const fragmentShader = /* glsl */ `
      precision highp float;

      uniform vec2 uResolution;
      uniform vec2 uPointer;
      uniform float uTime;
      uniform float uCenterDimming;
      uniform int uMode;

      varying vec2 vUv;

      mat2 rotate2D(float angle) {
        float sine = sin(angle);
        float cosine = cos(angle);

        return mat2(
          cosine, -sine,
          sine, cosine
        );
      }

      float randomValue(vec2 point) {
        return fract(
          sin(dot(point, vec2(127.1, 311.7))) * 43758.5453
        );
      }

      float smoothNoise(vec2 point) {
        vec2 cell = floor(point);
        vec2 local = fract(point);

        local = local * local * (3.0 - 2.0 * local);

        float bottomLeft = randomValue(cell);
        float bottomRight = randomValue(cell + vec2(1.0, 0.0));
        float topLeft = randomValue(cell + vec2(0.0, 1.0));
        float topRight = randomValue(cell + vec2(1.0, 1.0));

        return mix(
          mix(bottomLeft, bottomRight, local.x),
          mix(topLeft, topRight, local.x),
          local.y
        );
      }

      float layeredNoise(vec2 point) {
        float result = 0.0;
        float strength = 0.5;

        for (int i = 0; i < 5; i++) {
          result += smoothNoise(point) * strength;

          point =
            rotate2D(0.52) * point * 2.03 +
            vec2(3.1, 1.7);

          strength *= 0.5;
        }

        return result;
      }

      vec3 getPaletteA() {
        if (uMode == 1) return vec3(0.75, 0.12, 0.18);
        if (uMode == 2) return vec3(0.48, 0.06, 0.10);

        // BrandForge Deep Velvet Crimson
        return vec3(0.58, 0.08, 0.12);
      }

      vec3 getPaletteB() {
        if (uMode == 1) return vec3(1.00, 0.38, 0.12);
        if (uMode == 2) return vec3(0.94, 0.25, 0.21);

        // BrandForge Signature Electric Red (#EF4136)
        return vec3(0.94, 0.25, 0.21);
      }

      vec3 getPaletteC() {
        if (uMode == 1) return vec3(1.00, 0.72, 0.28);
        if (uMode == 2) return vec3(1.00, 0.48, 0.24);

        // BrandForge Fiery Coral & Warm Ember Glow (#FF6B4A)
        return vec3(1.00, 0.44, 0.22);
      }

      void main() {
        vec2 resolution = max(uResolution, vec2(1.0));

        vec2 position =
          (gl_FragCoord.xy - resolution * 0.5) /
          min(resolution.x, resolution.y);

        float time = uTime * 0.085;

        position += uPointer * 0.045;
        position *= rotate2D(sin(time * 0.42) * 0.12);

        vec2 firstWarp = vec2(
          layeredNoise(
            position * 1.65 +
            vec2(time, -time * 0.7)
          ),
          layeredNoise(
            position * 1.65 +
            vec2(5.8, 2.1 - time)
          )
        );

        vec2 secondWarp = vec2(
          layeredNoise(
            position * 2.25 +
            firstWarp * 1.75 +
            vec2(-time * 0.8, time * 0.45)
          ),
          layeredNoise(
            position * 2.0 -
            firstWarp * 1.35 +
            vec2(7.2, time * 0.62)
          )
        );

        float cloudField = layeredNoise(
          position * 2.15 +
          firstWarp * 1.2 +
          secondWarp * 0.7
        );

        float ribbonField = sin(
          position.x * 3.2 +
          position.y * 2.1 +
          firstWarp.x * 4.0 -
          secondWarp.y * 2.5 +
          time * 2.0
        );

        ribbonField = smoothstep(-0.35, 0.95, ribbonField);

        float cloud = smoothstep(0.26, 0.92, cloudField);
        float brightCloud = pow(cloud, 2.25);

        float ribbons =
          ribbonField *
          smoothstep(0.25, 0.82, cloudField);

        vec3 paletteA = getPaletteA();
        vec3 paletteB = getPaletteB();
        vec3 paletteC = getPaletteC();

        vec3 color = vec3(0.024, 0.020, 0.035);

        color += paletteA * cloud * 0.55;
        color += paletteB * brightCloud * 1.1;
        color += paletteC * ribbons * 0.58;

        float glow = exp(
          -2.1 *
          length(
            position +
            vec2(
              sin(time * 0.7) * 0.22,
              cos(time * 0.55) * 0.12
            )
          )
        );

        color +=
          mix(paletteA, paletteC, 0.55) *
          glow *
          0.3;

        float centerDistance = length(
          position * vec2(0.86, 1.0)
        );

        float centerBrightness = mix(
          0.28,
          1.0,
          smoothstep(0.12, 0.58, centerDistance)
        );

        color *= mix(
          1.0,
          centerBrightness,
          uCenterDimming
        );

        float vignette = smoothstep(
          1.25,
          0.18,
          length(position * vec2(0.84, 1.0))
        );

        color *= mix(0.5, 1.0, vignette);

        color = color / (color + vec3(1.0));
        color = pow(color, vec3(0.88));

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const uniforms = {
      uResolution: {
        value: new THREE.Vector2(1, 1),
      },
      uPointer: {
        value: new THREE.Vector2(0, 0),
      },
      uTime: {
        value: 0,
      },
      uMode: {
        value: hasActiveReminders
          ? 1
          : hasUpcomingReminders
            ? 2
            : 0,
      },
      uCenterDimming: {
        value: disableCenterDimming ? 0 : 1,
      },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      depthTest: false,
      depthWrite: false,
    });

    materialRef.current = material;

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    const pointerTarget = new THREE.Vector2();
    const pointerCurrent = new THREE.Vector2();

    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resizeRenderer = () => {
      if (!container) return;
      const { width, height } = container.getBoundingClientRect();

      const pixelRatio = Math.min(
        (typeof window !== "undefined" && window.devicePixelRatio) || 1,
        width < 768 ? 1.35 : 1.75,
      );

      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(Math.max(1, width), Math.max(1, height), false);

      renderer.getDrawingBufferSize(uniforms.uResolution.value);
    };

    const handlePointerMove = (event) => {
      if (!container) return;
      const bounds = container.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;

      pointerTarget.set(
        ((event.clientX - bounds.left) / bounds.width) * 2 - 1,
        -(((event.clientY - bounds.top) / bounds.height) * 2 - 1),
      );
    };

    const handlePointerLeave = () => {
      pointerTarget.set(0, 0);
    };

    const resizeObserver = new ResizeObserver(resizeRenderer);
    resizeObserver.observe(container);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("blur", handlePointerLeave);

    resizeRenderer();

    const clock = new THREE.Clock();

    renderer.setAnimationLoop(() => {
      const elapsedTime = clock.getElapsedTime();

      pointerCurrent.lerp(pointerTarget, reducedMotion ? 0.015 : 0.045);
      uniforms.uPointer.value.copy(pointerCurrent);

      uniforms.uTime.value = reducedMotion ? elapsedTime * 0.12 : elapsedTime;

      renderer.render(scene, camera);
    });

    return () => {
      renderer.setAnimationLoop(null);
      resizeObserver.disconnect();

      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", handlePointerLeave);

      scene.remove(mesh);
      geometry.dispose();
      material.dispose();
      renderer.dispose();

      materialRef.current = null;

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
        background: "#060509",
        ...style,
      }}
    />
  );
}

export default ReactiveAuroraField;
