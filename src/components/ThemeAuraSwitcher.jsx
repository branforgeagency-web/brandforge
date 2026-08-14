import React, { useState, useRef, useEffect } from 'react';
import { Palette } from 'lucide-react';

export default function ThemeAuraSwitcher({ aura, setAura }) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const selectTheme = (theme) => {
    setAura(theme);
    document.body.setAttribute('data-theme', theme);
    setIsOpen(false);
  };

  return (
    <div className="aura-switcher-wrap" ref={wrapRef}>
      <button className="aura-toggle-btn" onClick={() => setIsOpen(!isOpen)} title="Switch Cyber Theme Aura">
        <Palette size={16} />
      </button>

      <div className={`aura-menu ${isOpen ? 'active' : ''}`}>
        <div className="aura-menu-title">THEME AURA ENGINE</div>
        <button className={`aura-opt ${aura === 'crimson' ? 'active' : ''}`} onClick={() => selectTheme('crimson')}>
          <span className="aura-swatch crimson"></span> Crimson (Logo Red)
        </button>
        <button className={`aura-opt ${aura === 'cyber' ? 'active' : ''}`} onClick={() => selectTheme('cyber')}>
          <span className="aura-swatch cyber"></span> Neon Cyber Cyan
        </button>
        <button className={`aura-opt ${aura === 'gold' ? 'active' : ''}`} onClick={() => selectTheme('gold')}>
          <span className="aura-swatch gold"></span> Solar Flare Amber
        </button>
        <button className={`aura-opt ${aura === 'stealth' ? 'active' : ''}`} onClick={() => selectTheme('stealth')}>
          <span className="aura-swatch stealth"></span> Stealth Dark Obsidian
        </button>
      </div>
    </div>
  );
}
