import React from 'react';
import { Zap, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onOpenModal }) {
  return (
    <footer className="brand-footer-section">
      
      {/* TOP CALLOUT BANNER */}
      <div className="footer-callout-banner">
        <div className="callout-container">
          <h2>READY TO TURN YOUR IDEAS INTO DIGITAL POWER?</h2>
          <p>Partner with BrandForge to forge high-converting channels and market dominance.</p>
          <button className="btn-footer-cta" onClick={onOpenModal}>
            <Zap size={18} fill="currentColor" />
            <span>GET POWERED UP NOW</span>
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>

      <div className="footer-main-container">
        
        {/* BRAND COL */}
        <div className="footer-brand-col">
          <a href="#" className="footer-logo-wrap">
            <img src="/logo.png" alt="BrandForge Logo" className="footer-logo-img" />
          </a>
          <p className="footer-tagline">"TURNING IDEAS INTO DIGITAL POWER"</p>
          <p className="footer-desc">
            Next-generation digital marketing agency specializing in high-performance SEO, Paid Media, Web Foundry engineering, and Viral Visual Identity.
          </p>
        </div>

        {/* LINKS COLS */}
        <div className="footer-links-col">
          <h4>12 SERVICES</h4>
          <a href="#services-grid">SEO & GEO</a>
          <a href="#services-grid">Paid Media (PPC)</a>
          <a href="#services-grid">Web Foundry</a>
          <a href="#services-grid">Social Media</a>
          <a href="#services-grid">Visual Identity</a>
          <a href="#services-grid">View All 12</a>
        </div>

        <div className="footer-links-col">
          <h4>AGENCY</h4>
          <a href="#about-forge">About Engine</a>
          <a href="#portfolio-showcase">Case Studies</a>
          <a href="#power-calculator">Growth Calculator</a>
          <a href="#about-forge">Manifesto</a>
        </div>

        <div className="footer-links-col">
          <h4>CONNECT</h4>
          <a href="#" onClick={(e) => { e.preventDefault(); alert('Connecting on LinkedIn...'); }}>LinkedIn</a>
          <a href="#" onClick={(e) => { e.preventDefault(); alert('Connecting on X / Twitter...'); }}>X (Twitter)</a>
          <a href="#" onClick={(e) => { e.preventDefault(); alert('Connecting on Instagram...'); }}>Instagram</a>
          <a href="#" onClick={(e) => { e.preventDefault(); alert('Connecting on YouTube...'); }}>YouTube</a>
        </div>

      </div>

      {/* FOOTER BOTTOM BAR */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          <span>© {new Date().getFullYear()} BrandForge Agency Inc. All rights reserved.</span>
          <div className="footer-security-note">
            <ShieldCheck size={14} />
            <span>Encrypted 256-Bit Data Transfer</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
