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
          <a href="/seo-company-coimbatore">SEO & GEO Services</a>
          <a href="/ppc-company-coimbatore">Paid Media (PPC)</a>
          <a href="/website-development-company-coimbatore">Web Foundry (Web Dev)</a>
          <a href="/services/viral-social">Social Media Dominance</a>
          <a href="/services/visual-id">Visual Identity & 3D</a>
          <a href="/services/cro-revenue">CRO Revenue Engine</a>
        </div>

        <div className="footer-links-col">
          <h4>AGENCY</h4>
          <a href="/about">Who We Are / Founders</a>
          <a href="/contact">Contact Strategy Consultation</a>
          <a href="/seo-company-coimbatore">Best SEO Coimbatore</a>
          <a href="/website-development-company-coimbatore">Web Dev Coimbatore</a>
        </div>

        <div className="footer-links-col">
          <h4>CONNECT</h4>
          <a href="https://www.instagram.com/the_brandforge_digital?igsi=YjR1N3prdzJocTdx" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://wa.me/919384576852" target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="mailto:brandforgedigitalmarketing@gmail.com">Email Us</a>
          <a href="tel:+919384576852">Call Consultation</a>
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
