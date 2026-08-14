import React from 'react';
import { X, ArrowUpRight, Zap, Globe, Share2, Send, MessageSquare } from 'lucide-react';

export default function MobileDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="mobile-drawer-overlay active" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="mobile-drawer-content">
        <div className="mobile-drawer-header">
          <div className="mobile-brand">
            <img src="/logo.png" alt="BrandForge Logo" className="mobile-logo-img" />
          </div>
          <button className="mobile-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="mobile-hud-status">
          <div className="hud-stat-pill">
            <span className="dot-green"></span>
            <span>SYSTEM STATUS // 100% ONLINE</span>
          </div>
        </div>

        <nav className="mobile-nav-links">
          <a href="#services" onClick={onClose} className="mobile-link">
            <span><span className="m-num">01</span>Services & Marketing</span>
            <ArrowUpRight size={16} />
          </a>
          <a href="#ai" onClick={onClose} className="mobile-link">
            <span><span className="m-num">02</span>AI Engine <span className="badge-mini neon">v4.0</span></span>
            <ArrowUpRight size={16} />
          </a>
          <a href="#work" onClick={onClose} className="mobile-link">
            <span><span className="m-num">03</span>Case Studies</span>
            <ArrowUpRight size={16} />
          </a>
          <a href="#pricing" onClick={onClose} className="mobile-link">
            <span><span className="m-num">04</span>Pricing & Packages</span>
            <ArrowUpRight size={16} />
          </a>
        </nav>

        <div className="mobile-actions">
          <button className="btn-electric-cta full-width" onClick={() => { onClose(); alert('⚡ Booking strategy call...'); }}>
            <div className="btn-content">
              <Zap size={16} />
              <span>BOOK A STRATEGY CALL</span>
            </div>
          </button>
        </div>

        <div className="mobile-footer-info">
          <p>TURNING IDEAS INTO DIGITAL POWER</p>
          <div className="social-nodes">
            <a href="#globe" title="Global Network"><Globe size={16} /></a>
            <a href="#share" title="Share"><Share2 size={16} /></a>
            <a href="#send" title="Contact"><Send size={16} /></a>
            <a href="#chat" title="Community"><MessageSquare size={16} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
