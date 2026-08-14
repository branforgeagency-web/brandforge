import React, { useState, useRef, useEffect } from 'react';
import { Zap, CheckSquare, Square, Calculator, Sparkles, Send, CheckCircle2 } from 'lucide-react';

export default function PowerForgeCalculator({ onOpenModal }) {
  const [selectedServices, setSelectedServices] = useState(["seo-geo", "paid-media", "web-foundry"]);
  const [budgetRange, setBudgetRange] = useState("$10k - $25k / mo");
  const [isSuccess, setIsSuccess] = useState(false);

  const btnRef = useRef(null);

  const availableServices = [
    { id: "seo-geo", name: "SEO & GEO", score: 25 },
    { id: "paid-media", name: "Paid Media (PPC)", score: 30 },
    { id: "social-media", name: "Social Media", score: 20 },
    { id: "content", name: "Content Strategy", score: 15 },
    { id: "visual-id", name: "Brand Identity & 3D", score: 25 },
    { id: "web-foundry", name: "Web Foundry", score: 35 },
    { id: "email", name: "Email & Funnels", score: 15 },
    { id: "influencer", name: "Influencer Media", score: 20 },
    { id: "video", name: "Video Production", score: 25 },
    { id: "cro", name: "CRO Optimization", score: 20 },
    { id: "pr", name: "PR & Outreach", score: 15 },
    { id: "analytics", name: "Analytics & Tracking", score: 15 },
  ];

  function toggleService(id) {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  }

  // Calculate dynamic growth score & estimated multiplier
  const totalScore = selectedServices.reduce((acc, currId) => {
    const s = availableServices.find((item) => item.id === currId);
    return acc + (s ? s.score : 0);
  }, 0);

  const multiplier = (1 + totalScore * 0.045).toFixed(1);

  // Magnetic Button Effect within 50px radius
  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    function handleMouseMove(e) {
      const rect = btn.getBoundingClientRect();
      const btnX = rect.left + rect.width / 2;
      const btnY = rect.top + rect.height / 2;

      const dx = e.clientX - btnX;
      const dy = e.clientY - btnY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 100) {
        btn.style.transform = `translate3d(${dx * 0.25}px, ${dy * 0.25}px, 0) scale(1.03)`;
      } else {
        btn.style.transform = `translate3d(0, 0, 0) scale(1)`;
      }
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  function handleCalculateSubmit() {
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      if (onOpenModal) onOpenModal();
    }, 1800);
  }

  return (
    <section id="power-calculator" className="power-calculator-section light-section-theme">
      <div className="calculator-container">
        
        {/* HEADER */}
        <div className="calculator-header">
          <div className="section-tag-pill-light">
            <Calculator size={14} />
            <span>ESTIMATE YOUR GROWTH POTENTIAL</span>
          </div>
          <h2 className="calculator-title-light">
            THE POWER FORGE <br />
            <span className="text-gradient-red">REVENUE MULTIPLIER CALCULATOR</span>
          </h2>
          <p className="calculator-subtext-light">
            Select your desired marketing channels below to compute your estimated ROAS acceleration score and custom growth strategy.
          </p>
        </div>

        {/* CALCULATOR INTERACTIVE BOX */}
        <div className="calculator-box-light">
          
          {/* LEFT: SERVICE SELECTION MATRIX */}
          <div className="calc-left-services">
            <h3>SELECT CAPABILITIES ({selectedServices.length} ACTIVE)</h3>
            
            <div className="service-checkboxes-grid">
              {availableServices.map((srv) => {
                const isSelected = selectedServices.includes(srv.id);

                return (
                  <button
                    key={srv.id}
                    type="button"
                    className={`chk-service-pill-light ${isSelected ? 'active' : ''}`}
                    onClick={() => toggleService(srv.id)}
                  >
                    {isSelected ? (
                      <CheckSquare size={18} className="chk-icon red" />
                    ) : (
                      <Square size={18} className="chk-icon grey" />
                    )}
                    <span>{srv.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: REAL-TIME METRICS & SUBMIT */}
          <div className="calc-right-summary-light">
            <h3>ESTIMATED IMPACT METRICS</h3>

            <div className="power-score-display">
              <div className="score-num-wrap">
                <span className="score-big">{totalScore}</span>
                <span className="score-max">/ 260 PWR</span>
              </div>
              
              <div className="score-meter-bg">
                <div
                  className="score-meter-fill"
                  style={{ width: `${Math.min(100, (totalScore / 260) * 100)}%` }}
                />
              </div>

              <div className="multiplier-badge">
                <Sparkles size={16} />
                <span>PROJECTED REVENUE MULTIPLIER: <strong>{multiplier}x ROAS</strong></span>
              </div>
            </div>

            {/* BUDGET SELECTOR */}
            <div className="budget-range-selector">
              <label>ESTIMATED MONTHLY MEDIA BUDGET:</label>
              <div className="budget-pills">
                {["$5k - $10k", "$10k - $25k", "$25k - $50k", "$50k+"].map((b) => (
                  <button
                    key={b}
                    type="button"
                    className={`budget-btn-light ${budgetRange.includes(b.split(' ')[0]) ? 'active' : ''}`}
                    onClick={() => setBudgetRange(b + " / mo")}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* MAGNETIC SUBMIT CTA */}
            <button
              ref={btnRef}
              type="button"
              className="btn-magnetic-submit"
              onClick={handleCalculateSubmit}
            >
              <Zap size={18} fill="currentColor" />
              <span>LOCK IN THIS GROWTH BLUEPRINT</span>
              <Send size={16} />
            </button>

          </div>

          {/* SUCCESS PULSE OVERLAY */}
          {isSuccess && (
            <div className="pulse-success-overlay">
              <div className="pulse-success-content">
                <CheckCircle2 size={54} className="pulse-icon-gold" />
                <h2>GROWTH BLUEPRINT GENERATED!</h2>
                <p>Opening full transformation portal to submit your parameters...</p>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
