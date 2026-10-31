"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const isTouch = typeof window !== "undefined" && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    // Initialize Lenis smooth scrolling engine — tuned for buttery smooth, responsive 60/120fps scrolling on both desktop and mobile
    const lenis = new Lenis({
      duration: isTouch ? 1.0 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.0,
      syncTouch: true,
      syncTouchLerp: 0.09,
      touchInertiaExponent: 1.6,
      infinite: false,
      autoResize: true,
    });

    let scrollTimeout = null;
    lenis.on("scroll", () => {
      ScrollTrigger.update();
      window.__isScrolling = true;
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        window.__isScrolling = false;
      }, 120);
    });

    // Sync GSAP ticker with Lenis requestAnimationFrame
    const updateRaf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateRaf);
    // CRITICAL: Disable GSAP lagSmoothing so Lenis delta isn't throttled or skipped during scroll
    gsap.ticker.lagSmoothing(0);

    // Expose lenis globally for smooth navigation clicks
    window.__lenis = lenis;

    return () => {
      gsap.ticker.remove(updateRaf);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      lenis.destroy();
      delete window.__lenis;
      delete window.__isScrolling;
    };
  }, []);

  return children;
}
