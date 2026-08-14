import React, { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    function handleMouseMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target;
      if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[data-interactive]') ||
        target.closest('.service-card')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    }

    function handleMouseDown() {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 300);
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <>
      {/* MAIN CURSOR DOT */}
      <div
        className={`custom-cursor-dot ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        {isClicked && <Zap size={12} className="cursor-zap-icon" />}
      </div>

      {/* SIGNAL WAVE RING TRAIL */}
      <div
        className={`custom-cursor-ring ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
    </>
  );
}
