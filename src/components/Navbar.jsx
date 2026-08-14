import React from 'react';
import { Menu } from 'lucide-react';

export default function Navbar({ onToggleMobile }) {
  return (
    <header className="navbar-container-wrap">
      <div className="navbar-pill">
        
        {/* BRAND LOGO ON LEFT */}
        <a href="#" className="brand-logo-box" title="BrandForge">
          <div className="logo-img-container">
            <img src="/logo.png" alt="BrandForge Logo" className="brand-logo-img" />
          </div>
        </a>

        {/* CENTER NAV LINKS */}
        <nav className="pill-nav-links">
          <a href="#services" className="pill-link">Services</a>
          <a href="#products" className="pill-link">Products</a>
          <a href="#pricing" className="pill-link">Pricing</a>
          <a href="#about" className="pill-link">About</a>
        </nav>

        {/* RIGHT CTA BUTTON */}
        <div className="pill-nav-actions">
          <a href="#book" className="btn-book-call" onClick={(e) => { e.preventDefault(); alert('⚡ Opening call scheduler...'); }}>
            Book a call
          </a>

          {/* MOBILE TOGGLE */}
          <button className="mobile-pill-toggle" onClick={onToggleMobile} aria-label="Toggle Menu">
            <Menu size={20} color="#000000" />
          </button>
        </div>

      </div>
    </header>
  );
}
