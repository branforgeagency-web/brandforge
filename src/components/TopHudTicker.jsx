import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function TopHudTicker({ onOpenAudit }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="top-hud-bar">
      <div className="hud-ticker-wrap">
        <div className="hud-status">
          <span className="pulse-node"></span>
          <span className="hud-code">SYSTEM_STATUS // ONLINE</span>
        </div>
        <div className="hud-ticker-text">
          ⚡ <span>BRANDFORGE GROWTH SPRINT 2026:</span> UNLOCK 3.4X DIGITAL POWER & AI CAMPAIGNS —{' '}
          <button onClick={onOpenAudit}>CLAIM FREE AUDIT &rarr;</button>
        </div>
        <button className="hud-close-btn" onClick={() => setVisible(false)} aria-label="Close Announcement">
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
