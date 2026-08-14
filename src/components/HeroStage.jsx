import React from 'react';
import { Zap, Calculator } from 'lucide-react';

export default function HeroStage({ onOpenAudit, onScrollTo }) {
  return (
    <section className="hero-stage">
      <div className="hero-container">
        
        <div className="hero-badge-tag">
          <span className="tag-icon">⚡</span>
          <span>NEXT-GEN DIGITAL MARKETING AGENCY</span>
        </div>

        <h1 className="hero-headline">
          Turning Ideas Into<br />
          <span className="gradient-text-electric">Digital Power</span>
        </h1>

        <p className="hero-subhead">
          BrandForge fuels explosive growth for market leaders using AI-driven campaigns, hyper-precision PPC, high-converting motion design, and SEO search grid dominance.
        </p>

        <div className="hero-cta-group">
          <button className="btn-electric-cta btn-hero" onClick={onOpenAudit}>
            <div className="btn-content">
              <Zap size={16} />
              <span>START YOUR EXPANSION</span>
            </div>
          </button>
          <button className="btn-secondary-cyber" onClick={() => onScrollTo('calculator')}>
            <Calculator size={16} />
            <span>TEST ROI CALCULATOR</span>
          </button>
        </div>

        {/* METRICS GRID */}
        <div className="hero-metrics-grid">
          <div className="metric-card">
            <div className="m-val">$148M+</div>
            <div className="m-lbl">Client Revenue Tracked</div>
          </div>
          <div className="metric-card">
            <div className="m-val">340%</div>
            <div className="m-lbl">Avg. Conversion Lift</div>
          </div>
          <div className="metric-card">
            <div className="m-val">99.4%</div>
            <div className="m-lbl">Retention Rate</div>
          </div>
          <div className="metric-card">
            <div className="m-val">24/7</div>
            <div className="m-lbl">AI Campaign Engine</div>
          </div>
        </div>

      </div>
    </section>
  );
}
