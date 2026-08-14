import React, { useState, useEffect } from 'react';
import { Zap, Cpu, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

export default function MegaMenu() {
  const [counter, setCounter] = useState(10.0);

  useEffect(() => {
    const target = 14.8;
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + 0.2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mega-menu-panel">
      <div className="mega-grid">
        {/* COLUMN 1: DIGITAL POWER CAPABILITIES */}
        <div className="mega-col main-pillars">
          <div className="mega-col-header">
            <span className="col-tag">[ core_capabilities ]</span>
            <h4>Digital Power Engine</h4>
          </div>
          <div className="mega-cards-list">
            <a href="#services" className="mega-card">
              <div className="card-icon red-glow"><Zap size={18} /></div>
              <div className="card-info">
                <div className="card-title">Performance PPC <span className="badge-mini neon">3.4x ROI</span></div>
                <p className="card-desc">Hyper-targeted PPC & Meta programmatic scaling.</p>
              </div>
            </a>

            <a href="#ai" className="mega-card">
              <div className="card-icon cyan-glow"><Cpu size={18} /></div>
              <div className="card-info">
                <div className="card-title">AI Marketing Funnels <span className="badge-mini new">v4.0</span></div>
                <p className="card-desc">Autonomous lead capture & conversion chatbots.</p>
              </div>
            </a>

            <a href="#seo" className="mega-card">
              <div className="card-icon amber-glow"><TrendingUp size={18} /></div>
              <div className="card-info">
                <div className="card-title">SEO Search Supremacy</div>
                <p className="card-desc">Technical search grid domination & authority.</p>
              </div>
            </a>

            <a href="#brand" className="mega-card">
              <div className="card-icon purple-glow"><Sparkles size={18} /></div>
              <div className="card-info">
                <div className="card-title">3D Motion & Brand Forge</div>
                <p className="card-desc">High-converting visual identity & 3D graphics.</p>
              </div>
            </a>
          </div>
        </div>

        {/* COLUMN 2: LIVE METRICS */}
        <div className="mega-col HUD-spotlight">
          <div className="spotlight-box">
            <div className="spotlight-badge">⚡ LIVE CAMPAIGN IMPACT</div>
            <div className="metric-display">
              <span className="metric-val">${counter.toFixed(1)}M+</span>
              <span className="metric-lbl">Tracked Revenue Generated</span>
            </div>
            <div className="spotlight-graph">
              <div className="bar bar-1"></div>
              <div className="bar bar-2"></div>
              <div className="bar bar-3"></div>
              <div className="bar bar-4"></div>
              <div className="bar bar-5"></div>
            </div>
            <button className="btn-spotlight" onClick={() => alert('⚡ Booking strategy call...')}>
              <span>Schedule Strategy Call</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
