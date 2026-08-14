import React from 'react';
import { ChevronDown, Zap, Sparkles } from 'lucide-react';

export default function TopNavbar({ isServicesOpen, onToggleServices, onBookCall }) {
  return (
    <header className="top-fixed-navbar">
      <div className="top-navbar-pill">
        
        {/* LEFT LOGO */}
        <a href="#" className="top-logo-link" title="BrandForge - Turning Ideas Into Digital Power">
          <img src="/logo.png" alt="BrandForge Logo" className="top-logo-img" />
          <div className="top-status-badge">
            <span className="top-pulse-dot"></span>
            <span>DIGITAL POWER</span>
          </div>
        </a>

        {/* CENTER NAV BUTTONS */}
        <nav className="top-nav-links">
          <button
            className={`top-services-btn ${isServicesOpen ? 'active' : ''}`}
            onClick={onToggleServices}
          >
            <Sparkles size={15} className="sparkle-icon" />
            <span>Services</span>
            <ChevronDown size={14} className={`chevron-arrow ${isServicesOpen ? 'open' : ''}`} />
          </button>
          
          <a href="#about" className="top-nav-link" onClick={(e) => { e.preventDefault(); alert('BrandForge Digital Marketing Agency'); }}>About Us</a>
        </nav>

        {/* RIGHT CTA BUTTON */}
        <div className="top-nav-actions">
          <button className="btn-top-cta" onClick={onBookCall}>
            <Zap size={15} />
            <span>Book a call</span>
          </button>
        </div>

      </div>
    </header>
  );
}
