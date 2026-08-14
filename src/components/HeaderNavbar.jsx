import React, { useState } from 'react';
import { Zap, Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

export default function HeaderNavbar({ onOpenModal, onToggleServices, isServicesOpen }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="brand-header-fixed">
      <div className="brand-header-container">
        
        {/* LOGO & BRAND SIGNAL */}
        <a href="#" className="brand-header-logo-group">
          <img src="/logo.png" alt="BrandForge Logo" className="brand-header-logo-img" />
          <div className="brand-live-signal">
            <span className="signal-dot-pulse"></span>
            <span className="signal-text">DIGITAL POWER</span>
          </div>
        </a>

        {/* CENTER NAV LINKS */}
        <nav className="brand-header-nav-desktop">
          <button
            className={`nav-services-trigger ${isServicesOpen ? 'active' : ''}`}
            onClick={onToggleServices}
          >
            <Sparkles size={14} className="sparkle-red" />
            <span>12 Core Services</span>
            <span className="services-badge">Interactive</span>
          </button>

          <a href="#about-forge" className="nav-link-item">About Engine</a>
          <a href="#portfolio-showcase" className="nav-link-item">Case Studies</a>
          <a href="#power-calculator" className="nav-link-item">Growth Calculator</a>
        </nav>

        {/* RIGHT DYNAMIC CTA */}
        <div className="brand-header-actions">
          <button className="btn-get-powered-up" onClick={onOpenModal}>
            <div className="signal-wave-ring" />
            <Zap size={16} fill="currentColor" />
            <span>Get Powered Up</span>
            <ArrowUpRight size={16} />
          </button>

          <button
            className="mobile-hamburger-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* MOBILE DRAWER OVERLAY */}
      {mobileOpen && (
        <div className="mobile-nav-overlay">
          <div className="mobile-nav-content">
            <button
              className="mobile-nav-item glow"
              onClick={() => { onToggleServices(); setMobileOpen(false); }}
            >
              ⚡ Explore 12 Services
            </button>
            <a href="#about-forge" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>About Engine</a>
            <a href="#portfolio-showcase" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>Case Studies</a>
            <a href="#power-calculator" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>Growth Calculator</a>
            <button
              className="btn-get-powered-up w-full"
              onClick={() => { onOpenModal(); setMobileOpen(false); }}
            >
              <Zap size={16} fill="currentColor" />
              <span>Get Powered Up</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
