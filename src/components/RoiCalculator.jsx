import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function RoiCalculator({ onOpenAudit }) {
  const [budget, setBudget] = useState(25000);

  const roas = 3.4 + (budget > 50000 ? 0.4 : 0);
  const projectedRevenue = Math.round(budget * roas);
  const estimatedCustomers = Math.round(budget / 105);

  return (
    <section className="calc-stage" id="calculator">
      <div className="section-container">
        <div className="calc-hud-box">
          <div className="calc-left">
            <span className="calc-tag">⚡ POWER METRIC SIMULATOR</span>
            <h2>Calculate Your Digital Growth Potential</h2>
            <p>Adjust your current monthly marketing spend to simulate projected revenue expansion with BrandForge.</p>
            
            <div className="slider-group">
              <div className="slider-header">
                <label>CURRENT MONTHLY AD BUDGET</label>
                <span className="slider-val-display">${budget.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="5000"
                max="150000"
                step="5000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
              />
              <div className="slider-minmax">
                <span>$5,000/mo</span>
                <span>$150,000+/mo</span>
              </div>
            </div>
          </div>

          <div className="calc-right">
            <div className="calc-result-card">
              <span className="res-lbl">PROJECTED MONTHLY REVENUE</span>
              <div className="res-val">${projectedRevenue.toLocaleString()}</div>
              <div className="res-badge">+340% Projected Lift</div>

              <div className="res-breakdown">
                <div className="b-item">
                  <span>Est. New Customers</span>
                  <strong>{estimatedCustomers.toLocaleString()} / mo</strong>
                </div>
                <div className="b-item">
                  <span>Est. ROAS</span>
                  <strong>{roas.toFixed(1)}x</strong>
                </div>
              </div>

              <button className="btn-electric-cta full-width" onClick={onOpenAudit}>
                <div className="btn-content">
                  <span>CLAIM THIS GROWTH CAPACITY</span>
                  <ArrowRight size={16} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
