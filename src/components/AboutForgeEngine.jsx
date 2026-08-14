import React, { useState } from 'react';
import { Zap, Cpu, Sparkles, Layers, RefreshCw } from 'lucide-react';

export default function AboutForgeEngine() {
  const [engineStep, setEngineStep] = useState(1);
  const [isForging, setIsForging] = useState(false);

  const steps = [
    { title: "Raw Idea Input", desc: "Unprocessed brand potential, unstructured lead channels & low visibility.", color: "#64748B" },
    { title: "The Power Forge", desc: "Data-backed algorithm tuning, creative acceleration & multi-touch media optimization.", color: "#FF4D4D" },
    { title: "Digital Lightning Output", desc: "Market dominance, exponential ROAS, authority search rankings & brand supremacy.", color: "#FF6B00" },
  ];

  function triggerForgeAnimation() {
    setIsForging(true);
    setEngineStep(2);
    setTimeout(() => setEngineStep(3), 1200);
    setTimeout(() => setIsForging(false), 2400);
  }

  return (
    <section id="about-forge" className="about-engine-section light-section-theme">
      <div className="about-container">
        
        {/* SECTION HEADER */}
        <div className="about-header">
          <div className="section-tag-pill-light">
            <Cpu size={14} />
            <span>INTERACTIVE STORYTELLING ENGINE</span>
          </div>
          <h2 className="about-title-light">
            WE DON'T JUST MARKET BRANDS. <br />
            <span className="text-gradient-red">WE FORGE DIGITAL POWER.</span>
          </h2>
          <p className="about-manifesto-light">
            BrandForge is built on a single relentless principle: <strong>turning raw creative ideas into scalable high-revenue digital engines</strong>. 
            Through precision performance analytics, technical search grid dominance, and head-turning visual identity, we accelerate enterprise brands past market noise.
          </p>
        </div>

        {/* 3D INTERACTIVE FORGE ENGINE GRAPHIC */}
        <div className="forge-interactive-card-light">
          <div className="forge-card-header-light">
            <div className="forge-status-light">
              <span className={`status-dot ${isForging ? 'forging' : ''}`} />
              <span>FORGE ENGINE STATUS: {isForging ? 'PROCESSING LIGHTNING WAVE...' : 'READY FOR INPUT'}</span>
            </div>

            <button
              className="btn-trigger-forge-light"
              onClick={triggerForgeAnimation}
              disabled={isForging}
            >
              <RefreshCw size={14} className={isForging ? 'spin-icon' : ''} />
              <span>{isForging ? 'FORGING...' : 'SIMULATE FORGE PROCESS'}</span>
            </button>
          </div>

          <div className="forge-engine-visual">
            <div className={`engine-node-light ${engineStep >= 1 ? 'active' : ''}`}>
              <div className="node-icon-wrapper grey">
                <Layers size={28} />
              </div>
              <span className="node-step">STAGE 01</span>
              <h4 style={{ color: '#141416' }}>{steps[0].title}</h4>
              <p style={{ color: '#4A5568' }}>{steps[0].desc}</p>
            </div>

            <div className={`engine-beam ${engineStep >= 2 ? 'active' : ''}`}>
              {isForging && <div className="beam-pulse" />}
            </div>

            <div className={`engine-node-light ${engineStep >= 2 ? 'active' : ''}`}>
              <div className="node-icon-wrapper red">
                <Zap size={28} />
              </div>
              <span className="node-step">STAGE 02</span>
              <h4 style={{ color: '#141416' }}>{steps[1].title}</h4>
              <p style={{ color: '#4A5568' }}>{steps[1].desc}</p>
            </div>

            <div className={`engine-beam ${engineStep >= 3 ? 'active' : ''}`}>
              {isForging && <div className="beam-pulse" />}
            </div>

            <div className={`engine-node-light ${engineStep >= 3 ? 'active' : ''}`}>
              <div className="node-icon-wrapper gold">
                <Sparkles size={28} />
              </div>
              <span className="node-step">STAGE 03</span>
              <h4 style={{ color: '#141416' }}>{steps[3 ? 2 : 0].title}</h4>
              <p style={{ color: '#4A5568' }}>{steps[2].desc}</p>
            </div>
          </div>

          {/* ENGINE METRICS */}
          <div className="forge-engine-footer-light">
            <div className="engine-stat">
              <span className="stat-num">99.8%</span>
              <span className="stat-lbl-light">Client Retention</span>
            </div>
            <div className="engine-stat">
              <span className="stat-num">$485M+</span>
              <span className="stat-lbl-light">Revenue Generated</span>
            </div>
            <div className="engine-stat">
              <span className="stat-num">4.9x</span>
              <span className="stat-lbl-light">Average ROAS</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
