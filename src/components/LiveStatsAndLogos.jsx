import React, { useEffect, useState } from 'react';
import { Zap, Activity, TrendingUp, Award, ShieldCheck } from 'lucide-react';

export default function LiveStatsAndLogos() {
  const [revenue, setRevenue] = useState(0);
  const [precision, setPrecision] = useState(0);
  const [brands, setBrands] = useState(0);

  useEffect(() => {
    let currentRev = 0;
    let currentPrec = 0;
    let currentBrands = 0;

    const interval = setInterval(() => {
      currentRev += 15;
      currentPrec += 3.1;
      currentBrands += 16;

      if (currentRev >= 485) setRevenue(485);
      else setRevenue(currentRev);

      if (currentPrec >= 99.8) setPrecision(99.8);
      else setPrecision(Number(currentPrec.toFixed(1)));

      if (currentBrands >= 500) setBrands(500);
      else setBrands(currentBrands);

      if (currentRev >= 485 && currentPrec >= 99.8 && currentBrands >= 500) {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const clientLogos = [
    { name: "APEX GLOBAL", color: "#FF3B30" },
    { name: "VELOCE MOTORS", color: "#00F0FF" },
    { name: "AURA HEALTH", color: "#FF4DBE" },
    { name: "KINETIX AI", color: "#66F5C8" },
    { name: "TITAN CORP", color: "#FFB800" },
    { name: "NEXUS MEDIA", color: "#A980FF" },
  ];

  return (
    <section className="stats-ticker-section">
      <div className="stats-container">
        
        {/* COUNTER METRIC CARDS */}
        <div className="counter-cards-grid">
          
          <div className="counter-card-item">
            <div className="stat-icon-wrapper">
              <TrendingUp size={24} className="stat-icon red" />
            </div>
            <div className="stat-number-display">${revenue}M+</div>
            <div className="stat-label-title">Client Revenue Generated</div>
            <p className="stat-subtext">Verified tracked client revenue generated since inception.</p>
          </div>

          <div className="counter-card-item">
            <div className="stat-icon-wrapper">
              <Activity size={24} className="stat-icon gold" />
            </div>
            <div className="stat-number-display">{precision}%</div>
            <div className="stat-label-title">Campaign Precision Rate</div>
            <p className="stat-subtext">ROAS optimization and conversion efficiency benchmark.</p>
          </div>

          <div className="counter-card-item">
            <div className="stat-icon-wrapper">
              <Award size={24} className="stat-icon cyan" />
            </div>
            <div className="stat-number-display">{brands}+</div>
            <div className="stat-label-title">Enterprise Brands Powered</div>
            <p className="stat-subtext">From high-growth scale-ups to Fortune 500 leaders.</p>
          </div>

          <div className="counter-card-item">
            <div className="stat-icon-wrapper">
              <Zap size={24} className="stat-icon red" />
            </div>
            <div className="stat-number-display">12</div>
            <div className="stat-label-title">Core Digital Capabilities</div>
            <p className="stat-subtext">Full-stack digital engineering & performance media team.</p>
          </div>

        </div>

        {/* MONOCHROMATIC TICKER WITH HOVER COLOR GLOW */}
        <div className="client-logos-ticker-wrap">
          <span className="ticker-label">TRUSTED BY INDUSTRY TITANS WORLDWIDE:</span>
          <div className="logos-track">
            {clientLogos.concat(clientLogos).map((logo, idx) => (
              <div
                key={idx}
                className="logo-item-pill"
                style={{ "--logo-hover-color": logo.color }}
              >
                <ShieldCheck size={16} className="logo-shield" />
                <span>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
