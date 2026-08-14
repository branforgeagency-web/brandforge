import React from 'react';
import { Sliders } from 'lucide-react';

export default function ControlPanel({
  navStyle,
  setNavStyle,
  aura,
  setAura,
  onOpenCmd,
  onOpenAudit,
  onToggleMobile
}) {
  return (
    <section className="controls-stage" id="controls">
      <div className="section-container">
        <div className="control-box-hud">
          <div className="control-header">
            <Sliders className="ctrl-icon" />
            <div>
              <h3>Futuristic Navbar Interactive Control Panel</h3>
              <p>Test the dynamic behaviors, themes, positioning, and mobile responsive states of your BrandForge navbar live in React.</p>
            </div>
          </div>

          <div className="control-actions-grid">
            <div className="ctrl-card">
              <span className="ctrl-label">NAVBAR POSITION MODE</span>
              <div className="ctrl-btn-group">
                <button
                  className={`ctrl-btn ${navStyle === 'floating' ? 'active' : ''}`}
                  onClick={() => setNavStyle('floating')}
                >
                  Floating Capsule
                </button>
                <button
                  className={`ctrl-btn ${navStyle === 'edge' ? 'active' : ''}`}
                  onClick={() => setNavStyle('edge')}
                >
                  Edge-to-Edge Bar
                </button>
              </div>
            </div>

            <div className="ctrl-card">
              <span className="ctrl-label">QUICK THEME PRESETS</span>
              <div className="ctrl-btn-group">
                <button className={`ctrl-btn ${aura === 'crimson' ? 'active' : ''}`} onClick={() => setAura('crimson')}>
                  🔴 Crimson (Logo)
                </button>
                <button className={`ctrl-btn ${aura === 'cyber' ? 'active' : ''}`} onClick={() => setAura('cyber')}>
                  🌐 Neon Cyan
                </button>
                <button className={`ctrl-btn ${aura === 'gold' ? 'active' : ''}`} onClick={() => setAura('gold')}>
                  ⚡ Solar Orange
                </button>
                <button className={`ctrl-btn ${aura === 'stealth' ? 'active' : ''}`} onClick={() => setAura('stealth')}>
                  🌌 Stealth Dark
                </button>
              </div>
            </div>

            <div className="ctrl-card">
              <span className="ctrl-label">TRIGGER HUD MODALS</span>
              <div className="ctrl-btn-group">
                <button className="ctrl-btn highlight" onClick={onOpenCmd}>Search (Ctrl+K)</button>
                <button className="ctrl-btn highlight" onClick={onOpenAudit}>Strategy Audit Modal</button>
                <button className="ctrl-btn highlight" onClick={onToggleMobile}>Mobile Drawer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
