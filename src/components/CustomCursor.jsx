import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const posRef = useRef({ x: -100, y: -100 });
  const mouseRef = useRef({ x: -100, y: -100 });
  const hoveredRef = useRef(false);

  useEffect(() => {
    let animId;

    function handleMouseMove(e) {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      const target = e.target;
      const isInteractive =
        target &&
        typeof target.closest === "function" &&
        (target.closest("button") ||
          target.closest("a") ||
          target.closest("[data-interactive]") ||
          target.closest(".service-card") ||
          target.closest(".bf-card") ||
          target.closest(".card"));

      if (isInteractive) {
        if (!hoveredRef.current) {
          hoveredRef.current = true;
          if (dotRef.current) dotRef.current.classList.add("hovered");
          if (ringRef.current) ringRef.current.classList.add("hovered");
        }
      } else {
        if (hoveredRef.current) {
          hoveredRef.current = false;
          if (dotRef.current) dotRef.current.classList.remove("hovered");
          if (ringRef.current) ringRef.current.classList.remove("hovered");
        }
      }
    }

    function render() {
      // Smooth lerp interpolation for liquid cursor ring
      posRef.current.x += (mouseRef.current.x - posRef.current.x) * 0.22;
      posRef.current.y += (mouseRef.current.y - posRef.current.y) * 0.22;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseRef.current.x}px, ${mouseRef.current.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className="custom-cursor-ring" />
    </>
  );
}
