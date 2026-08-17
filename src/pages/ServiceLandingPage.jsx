"use client";

import React, { useState, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Sparkles,
  Zap,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Phone,
  Sliders,
} from "lucide-react";
import { servicesData } from "../data/servicesData";
import BrandForgeAnimatedFooter from "../components/BrandForgeAnimatedFooter";

/* ───────────────────────────────────────────────────────────────────────────
   DYNAMIC SERVICE LANDING PAGE COMPONENT (ALL 12 SERVICES)
   Renders Light Theme with Red (#EF4136) & Black (#0A0A0C) Accents.
   ─────────────────────────────────────────────────────────────────────────── */

export default function ServiceLandingPage({ slug = "seo-geo", onOpenModal, navigate }) {
  const data = servicesData[slug] || servicesData["seo-geo"];

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    }
  }, [slug]);

  const [activeFaq, setActiveFaq] = useState(null);
  const [metricSlider, setMetricSlider] = useState(25000);

  // Dynamic calculated estimates
  const estimatedRevenueLift = Math.round(metricSlider * 4.2);
  const dominancePercentage = Math.min(98, Math.round(48 + (metricSlider / 50000) * 32));

  const Icon = data.icon || Search;

  return (
    <div className="sg-page-root">
      <style>{styles}</style>

      {/* HERO BANNER SECTION WITH LEFT-ALIGNED CONTENT & BRANDFORGE VISUAL CARD */}
      <header className="sg-hero">
        <div className="sg-hero-glow" />

        <div className="sg-container">
          <div className="sg-hero-grid">
            
            {/* LEFT COLUMN: BADGE, HEADING, PARAGRAPH & CTAS */}
            <div className="sg-hero-left">
              <motion.div
                className="sg-badge"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Icon size={14} className="sg-badge-icon" />
                <span>{data.eyebrow}</span>
                <Sparkles size={14} className="sg-badge-sparkle" />
              </motion.div>

              <motion.h1
                className="sg-hero-title"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                {data.slug === "seo-geo" ? (
                  <>SEO & <span>GEO</span></>
                ) : data.title.includes("/") ? (
                  <>{data.title.split("/")[0]} / <span>{data.title.split("/")[1]}</span></>
                ) : (
                  <>{data.title.split(" ").slice(0, -1).join(" ")} <span>{data.title.split(" ").slice(-1)}</span></>
                )}
              </motion.h1>

              <motion.p
                className="sg-hero-desc"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {data.subtitle}
              </motion.p>

              <motion.div
                className="sg-hero-actions"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <button className="sg-btn primary" onClick={onOpenModal}>
                  <Zap size={16} />
                  <span>START FREE {data.number} AUDIT</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  className="sg-btn secondary"
                  onClick={() => {
                    const el = document.getElementById("service-calculator");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Sliders size={16} />
                  <span>ESTIMATE ROI</span>
                </button>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: BRANDFORGE THEME 3D VISUAL GRAPHIC CARD */}
            <motion.div
              className="sg-hero-right"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <div className="sg-visual-card">
                <div className="sg-visual-aura" />
                <div className="sg-visual-grid-overlay" />
                
                <div className="sg-visual-header">
                  <div className="sg-visual-dots">
                    <span className="dot red" />
                    <span className="dot dark" />
                    <span className="dot dark" />
                  </div>
                  <span className="sg-visual-tag">BRANDFORGE // {data.number} ENGINE</span>
                </div>

                <div className="sg-visual-body">
                  <div className="sg-visual-icon-wrap">
                    <Icon size={44} className="sg-vicon" />
                  </div>

                  <div className="sg-visual-info">
                    <div className="sg-vinfo-title">{data.eyebrow}</div>
                    <div className="sg-vinfo-sub">REAL-TIME SYSTEM RUNNING AT 100/100 SPEED</div>
                  </div>

                  <div className="sg-visual-stat-strip">
                    <div className="sg-vstat">
                      <span className="lbl">TARGET METRIC</span>
                      <span className="val">{data.metrics[0]?.value}</span>
                    </div>
                    <div className="sg-vstat">
                      <span className="lbl">PERFORMANCE</span>
                      <span className="val red">{data.metrics[1]?.value}</span>
                    </div>
                  </div>
                </div>

                <div className="sg-visual-footer">
                  <span className="sg-vf-status">SYSTEM STATUS: OPERATIONAL</span>
                  <span className="sg-vf-badge">BF.</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* METRICS STRIP */}
          <div className="sg-metrics-grid">
            {data.metrics.map((m, idx) => (
              <motion.div
                key={m.label}
                className="sg-metric-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
              >
                <div className="sg-metric-val">{m.value}</div>
                <div className="sg-metric-lbl">{m.label}</div>
                <div className="sg-metric-sub">{m.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </header>

      {/* COMPARISON MATRIX SECTION — LIGHT THEME */}
      <section className="sg-section sg-comparison-section">
        <div className="sg-container">
          <div className="sg-section-header text-center">
            <span className="sg-section-tag">{data.matrixTag}</span>
            <h2 className="sg-section-title">{data.matrixTitle}</h2>
            <p className="sg-section-subtitle">{data.matrixSubtitle}</p>
          </div>

          <div className="sg-matrix-grid">
            {data.matrixRows.map((row) => (
              <div key={row.feature} className="sg-matrix-card">
                <div className="sg-matrix-feat">{row.feature}</div>
                <div className="sg-matrix-cols">
                  <div className="sg-col-trad">
                    <span className="sg-col-lbl">TRADITIONAL APPROACH</span>
                    <p>{row.traditional}</p>
                  </div>
                  <div className="sg-col-geo">
                    <span className="sg-col-lbl">BRANDFORGE ENGINE</span>
                    <p>{row.brandforge}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 CORE PILLARS OF SERVICE */}
      <section className="sg-section sg-pillars-section">
        <div className="sg-container">
          <div className="sg-section-header text-center">
            <span className="sg-section-tag">6-PILLAR SYSTEM</span>
            <h2 className="sg-section-title">THE <span>BRANDFORGE {data.number} FORGE</span></h2>
            <p className="sg-section-subtitle">
              Every system is engineered to capture market intent, build category authority, and scale pipeline.
            </p>
          </div>

          <div className="sg-pillars-grid">
            {data.pillars.map((p) => {
              const PillarIcon = p.icon || Zap;
              return (
                <div key={p.title} className="sg-pillar-card">
                  <div className="sg-pillar-top">
                    <div className="sg-pillar-icon">
                      <PillarIcon size={24} />
                    </div>
                    <span className="sg-pillar-tag">{p.tag}</span>
                  </div>

                  <h3 className="sg-pillar-title">{p.title}</h3>
                  <p className="sg-pillar-desc">{p.description}</p>

                  <ul className="sg-pillar-list">
                    {p.deliverables.map((d) => (
                      <li key={d}>
                        <CheckCircle2 size={14} className="sg-check" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DYNAMIC REVENUE & ROI CALCULATOR — HIGH CONTRAST OBSIDIAN CARD */}
      <section id="service-calculator" className="sg-section sg-calc-section">
        <div className="sg-container">
          <div className="sg-calc-card">
            <div className="sg-calc-left">
              <span className="sg-section-tag">INTERACTIVE ESTIMATOR</span>
              <h2 className="sg-section-title">PROJECT YOUR <span>GROWTH CAPACITY</span></h2>
              <p className="sg-calc-desc">
                Adjust your monthly traffic / scale parameter to project annual revenue lift and market efficiency with BrandForge.
              </p>

              <div className="sg-slider-wrap">
                <div className="sg-slider-header">
                  <span>Monthly Scale Parameter:</span>
                  <strong>{metricSlider.toLocaleString()} / mo</strong>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="200000"
                  step="5000"
                  value={metricSlider}
                  onChange={(e) => setMetricSlider(Number(e.target.value))}
                  className="sg-range-input"
                />
                <div className="sg-slider-labels">
                  <span>5,000</span>
                  <span>100,000</span>
                  <span>200,000+</span>
                </div>
              </div>
            </div>

            <div className="sg-calc-right">
              <div className="sg-res-box">
                <span className="sg-res-lbl">Projected Annual Revenue Lift:</span>
                <div className="sg-res-val">${estimatedRevenueLift.toLocaleString()}</div>
              </div>

              <div className="sg-res-box">
                <span className="sg-res-lbl">Market Share Dominance:</span>
                <div className="sg-res-val red">{dominancePercentage}% Reach Share</div>
              </div>

              <button className="sg-btn primary full" onClick={onOpenModal}>
                <span>CLAIM THIS REVENUE CAPACITY</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS — LIGHT THEME */}
      <section className="sg-section sg-faq-section">
        <div className="sg-container">
          <div className="sg-section-header text-center">
            <span className="sg-section-tag">ANSWERS & CLARITY</span>
            <h2 className="sg-section-title">FREQUENTLY ASKED <span>QUESTIONS</span></h2>
          </div>

          <div className="sg-faq-list">
            {data.faqs.map((faq, idx) => (
              <div
                key={faq.q}
                className={`sg-faq-item ${activeFaq === idx ? "is-open" : ""}`}
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <div className="sg-faq-q">
                  <span>{faq.q}</span>
                  <ChevronDown size={18} className="sg-faq-arrow" />
                </div>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      className="sg-faq-a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM BANNER CTA */}
      <section className="sg-bottom-cta">
        <div className="sg-container">
          <div className="sg-cta-box">
            <div className="sg-cta-aura" />
            <h2>READY TO FORGE <span>{data.eyebrow}?</span></h2>
            <p>Get a comprehensive strategy audit delivered to your inbox within 24 hours.</p>
            <div className="sg-cta-actions">
              <button className="sg-btn primary" onClick={onOpenModal}>
                <Zap size={16} />
                <span>REQUEST FREE STRATEGY AUDIT</span>
                <ArrowRight size={16} />
              </button>
              <button className="sg-btn secondary" onClick={() => navigate("/contact")}>
                <Phone size={16} />
                <span>TALK TO A GROWTH ENGINEER</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SITE FOOTER */}
      <BrandForgeAnimatedFooter onOpenModal={onOpenModal} />
    </div>
  );
}

const styles = `
  .sg-page-root {
    position: relative;
    width: 100%;
    background: #F8F9FA;
    color: #0A0A0C;
    font-family: 'Outfit', 'Plus Jakarta Sans', sans-serif;
    overflow-x: hidden;
    padding-top: 100px;
  }

  .sg-container {
    width: min(1240px, calc(100vw - 48px));
    margin: 0 auto;
  }

  .sg-hero {
    position: relative;
    padding: clamp(40px, 6vw, 80px) 0 clamp(40px, 6vw, 70px);
    text-align: left;
  }

  .sg-hero-grid {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: clamp(32px, 4vw, 64px);
    align-items: center;
    margin-bottom: 56px;
  }

  .sg-hero-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .sg-hero-glow {
    position: absolute;
    top: -10%;
    left: 20%;
    width: 650px;
    height: 420px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(239, 65, 54, 0.14) 0%, transparent 70%);
    filter: blur(60px);
    pointer-events: none;
    z-index: 0;
  }

  .sg-badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 8px 20px;
    border-radius: 100px;
    background: #FFFFFF;
    border: 1px solid rgba(239, 65, 54, 0.35);
    box-shadow: 0 4px 16px rgba(239, 65, 54, 0.1);
    color: #0A0A0C;
    font-size: 11.5px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 24px;
  }

  .sg-badge-icon, .sg-badge-sparkle {
    color: #EF4136;
  }

  .sg-hero-title {
    margin: 0 0 20px;
    font-size: clamp(36px, 5.8vw, 76px);
    font-weight: 950;
    line-height: 0.98;
    letter-spacing: -0.04em;
    text-transform: uppercase;
    color: #0A0A0C;
  }

  .sg-hero-title span {
    color: #EF4136;
    text-shadow: 0 4px 24px rgba(239, 65, 54, 0.2);
  }

  .sg-hero-desc {
    max-width: 620px;
    margin: 0 0 32px;
    color: #475569;
    font-size: clamp(15px, 1.4vw, 18px);
    line-height: 1.65;
    font-weight: 500;
    text-align: left;
  }

  .sg-hero-actions {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    flex-wrap: wrap;
  }

  /* BRANDFORGE THEME 3D VISUAL GRAPHIC CARD */
  .sg-hero-right {
    position: relative;
    width: 100%;
  }

  .sg-visual-card {
    position: relative;
    background: linear-gradient(135deg, #0A0A0C 0%, #16161C 100%);
    border: 1.5px solid rgba(239, 65, 54, 0.4);
    border-radius: 28px;
    padding: 28px;
    color: #FFFFFF;
    box-shadow: 0 25px 60px rgba(10, 10, 12, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.15);
    overflow: hidden;
  }

  .sg-visual-aura {
    position: absolute;
    top: -20%;
    right: -20%;
    width: 260px;
    height: 260px;
    background: radial-gradient(circle, rgba(239, 65, 54, 0.4) 0%, transparent 70%);
    filter: blur(40px);
    pointer-events: none;
  }

  .sg-visual-grid-overlay {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(239, 65, 54, 0.15) 1px, transparent 1px);
    background-size: 18px 18px;
    opacity: 0.6;
    pointer-events: none;
  }

  .sg-visual-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 18px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 24px;
  }

  .sg-visual-dots {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .sg-visual-dots .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  .sg-visual-dots .dot.red { background: #EF4136; box-shadow: 0 0 8px #EF4136; }
  .sg-visual-dots .dot.dark { background: rgba(255, 255, 255, 0.2); }

  .sg-visual-tag {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10.5px;
    font-weight: 800;
    letter-spacing: 0.14em;
    color: #EF4136;
  }

  .sg-visual-body {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 24px;
  }

  .sg-visual-icon-wrap {
    width: 72px;
    height: 72px;
    border-radius: 20px;
    background: rgba(239, 65, 54, 0.16);
    border: 1.5px solid rgba(239, 65, 54, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #EF4136;
    box-shadow: 0 0 20px rgba(239, 65, 54, 0.25);
  }

  .sg-visual-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .sg-vinfo-title {
    font-size: 20px;
    font-weight: 900;
    letter-spacing: -0.02em;
    color: #FFFFFF;
  }

  .sg-vinfo-sub {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: rgba(255, 255, 255, 0.6);
    letter-spacing: 0.05em;
  }

  .sg-visual-stat-strip {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 14px 16px;
  }

  .sg-vstat {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .sg-vstat .lbl {
    font-family: 'JetBrains Mono', monospace;
    font-size: 9.5px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.5);
    letter-spacing: 0.08em;
  }

  .sg-vstat .val {
    font-size: 20px;
    font-weight: 900;
    color: #FFFFFF;
  }

  .sg-vstat .val.red {
    color: #EF4136;
  }

  .sg-visual-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .sg-vf-status {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    font-weight: 700;
    color: #10B981;
    letter-spacing: 0.08em;
  }

  .sg-vf-badge {
    font-size: 14px;
    font-weight: 900;
    color: #EF4136;
  }

  .sg-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 52px;
    padding: 0 28px;
    border-radius: 12px;
    font-family: inherit;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .sg-btn.primary {
    border: none;
    background: #EF4136;
    color: #FFFFFF;
    box-shadow: 0 12px 32px rgba(239, 65, 54, 0.35);
  }

  .sg-btn.primary:hover {
    background: #D9382E;
    transform: translateY(-2px);
    box-shadow: 0 16px 42px rgba(239, 65, 54, 0.55);
  }

  .sg-btn.secondary {
    border: 1px solid #0A0A0C;
    background: #0A0A0C;
    color: #FFFFFF;
    box-shadow: 0 10px 25px rgba(10, 10, 12, 0.15);
  }

  .sg-btn.secondary:hover {
    background: #1A1A1E;
    border-color: #EF4136;
    transform: translateY(-2px);
    box-shadow: 0 14px 35px rgba(239, 65, 54, 0.25);
  }

  .sg-btn.full {
    width: 100%;
  }

  /* METRICS GRID — LIGHT THEME */
  .sg-metrics-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 20px;
  }

  .sg-metric-card {
    background: #FFFFFF;
    border: 1px solid rgba(15, 23, 42, 0.08);
    border-radius: 20px;
    padding: 24px 20px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
    transition: all 0.3s ease;
  }

  .sg-metric-card:hover {
    border-color: rgba(239, 65, 54, 0.4);
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(239, 65, 54, 0.12);
  }

  .sg-metric-val {
    font-size: clamp(28px, 3vw, 42px);
    font-weight: 900;
    color: #EF4136;
    letter-spacing: -0.03em;
    margin-bottom: 6px;
  }

  .sg-metric-lbl {
    font-size: 14px;
    font-weight: 800;
    color: #0A0A0C;
    margin-bottom: 4px;
  }

  .sg-metric-sub {
    font-size: 12px;
    color: #64748B;
    font-weight: 500;
  }

  /* SECTIONS COMMON */
  .sg-section {
    padding: clamp(60px, 8vw, 100px) 0;
  }

  .sg-section-header {
    margin-bottom: 48px;
  }

  .sg-section-header.text-center {
    text-align: center;
  }

  .sg-section-tag {
    display: inline-block;
    color: #EF4136;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  .sg-section-title {
    margin: 0 0 16px;
    font-size: clamp(26px, 3.8vw, 44px);
    font-weight: 900;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    color: #0A0A0C;
  }

  .sg-section-title span {
    color: #EF4136;
  }

  .sg-section-subtitle {
    max-width: 680px;
    margin: 0 auto;
    color: #475569;
    font-size: 15px;
    line-height: 1.6;
    font-weight: 500;
  }

  /* COMPARISON MATRIX — LIGHT THEME */
  .sg-matrix-grid {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .sg-matrix-card {
    background: #FFFFFF;
    border: 1px solid rgba(15, 23, 42, 0.08);
    border-radius: 20px;
    padding: 24px 30px;
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 24px;
    align-items: center;
    box-shadow: 0 8px 25px rgba(15, 23, 42, 0.04);
  }

  .sg-matrix-feat {
    font-size: 15px;
    font-weight: 800;
    color: #0A0A0C;
  }

  .sg-matrix-cols {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  .sg-col-trad {
    background: #F1F5F9;
    border: 1px solid #E2E8F0;
    border-radius: 14px;
    padding: 16px 20px;
    color: #0A0A0C;
  }

  .sg-col-geo {
    background: rgba(239, 65, 54, 0.06);
    border: 1px solid rgba(239, 65, 54, 0.3);
    border-radius: 14px;
    padding: 16px 20px;
    color: #0A0A0C;
  }

  .sg-col-lbl {
    display: block;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.1em;
    margin-bottom: 6px;
    color: #64748B;
  }

  .sg-col-geo .sg-col-lbl {
    color: #EF4136;
  }

  .sg-col-trad p, .sg-col-geo p {
    margin: 0;
    font-size: 13.5px;
    line-height: 1.45;
    font-weight: 600;
  }

  /* PILLARS GRID — LIGHT THEME */
  .sg-pillars-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .sg-pillar-card {
    background: #FFFFFF;
    border: 1px solid rgba(15, 23, 42, 0.08);
    border-radius: 24px;
    padding: 32px 28px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .sg-pillar-card:hover {
    border-color: rgba(239, 65, 54, 0.5);
    transform: translateY(-6px);
    box-shadow: 0 20px 45px rgba(239, 65, 54, 0.15);
  }

  .sg-pillar-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .sg-pillar-icon {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: rgba(239, 65, 54, 0.12);
    border: 1px solid rgba(239, 65, 54, 0.3);
    color: #EF4136;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sg-pillar-tag {
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.14em;
    color: #64748B;
  }

  .sg-pillar-title {
    margin: 0 0 12px;
    font-size: 20px;
    font-weight: 800;
    line-height: 1.25;
    color: #0A0A0C;
  }

  .sg-pillar-desc {
    margin: 0 0 24px;
    font-size: 13.5px;
    line-height: 1.6;
    color: #475569;
    flex-grow: 1;
    font-weight: 500;
  }

  .sg-pillar-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-top: 1px solid rgba(15, 23, 42, 0.08);
    padding-top: 18px;
  }

  .sg-pillar-list li {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12.5px;
    font-weight: 700;
    color: #0A0A0C;
  }

  .sg-check {
    color: #EF4136;
    flex-shrink: 0;
  }

  /* CALCULATOR SECTION — HIGH CONTRAST OBSIDIAN CARD ACCENT */
  .sg-calc-card {
    background: linear-gradient(135deg, #0A0A0C 0%, #16161B 100%);
    border: 1.5px solid rgba(239, 65, 54, 0.4);
    border-radius: 32px;
    padding: clamp(32px, 4vw, 56px);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    color: #FFFFFF;
    box-shadow: 0 30px 80px rgba(10, 10, 12, 0.25);
  }

  .sg-calc-card .sg-section-title {
    color: #FFFFFF;
  }

  .sg-calc-desc {
    color: rgba(255, 255, 255, 0.78);
    font-size: 14.5px;
    line-height: 1.6;
    margin-bottom: 32px;
  }

  .sg-slider-wrap {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 20px;
    padding: 24px;
  }

  .sg-slider-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    font-size: 14px;
  }

  .sg-slider-header strong {
    color: #EF4136;
    font-size: 18px;
  }

  .sg-range-input {
    width: 100%;
    accent-color: #EF4136;
    height: 8px;
    border-radius: 4px;
    cursor: pointer;
  }

  .sg-slider-labels {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    font-size: 11px;
    color: rgba(255, 255, 255, 0.5);
  }

  .sg-calc-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }

  .sg-res-box {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 20px;
    padding: 20px 24px;
  }

  .sg-res-lbl {
    font-size: 12px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .sg-res-val {
    font-size: clamp(28px, 3vw, 40px);
    font-weight: 900;
    color: #FFFFFF;
    margin-top: 4px;
  }

  .sg-res-val.red {
    color: #EF4136;
  }

  /* FAQ SECTION — LIGHT THEME */
  .sg-faq-list {
    max-width: 840px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .sg-faq-item {
    background: #FFFFFF;
    border: 1px solid rgba(15, 23, 42, 0.08);
    border-radius: 20px;
    padding: 24px 28px;
    cursor: pointer;
    box-shadow: 0 6px 20px rgba(15, 23, 42, 0.03);
    transition: all 0.3s ease;
  }

  .sg-faq-item.is-open {
    border-color: rgba(239, 65, 54, 0.5);
    box-shadow: 0 12px 30px rgba(239, 65, 54, 0.1);
  }

  .sg-faq-q {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 17px;
    font-weight: 800;
    gap: 16px;
    color: #0A0A0C;
  }

  .sg-faq-arrow {
    color: #EF4136;
    transition: transform 0.3s ease;
  }

  .sg-faq-item.is-open .sg-faq-arrow {
    transform: rotate(180deg);
  }

  .sg-faq-a {
    overflow: hidden;
  }

  .sg-faq-a p {
    margin: 16px 0 0;
    font-size: 14.5px;
    line-height: 1.65;
    color: #475569;
    font-weight: 500;
  }

  /* BOTTOM CTA — LIGHT THEME */
  .sg-bottom-cta {
    padding: clamp(60px, 8vw, 100px) 0;
  }

  .sg-cta-box {
    position: relative;
    background: linear-gradient(135deg, #FFFFFF 0%, #F1F5F9 100%);
    border: 1.5px solid rgba(239, 65, 54, 0.3);
    border-radius: 32px;
    padding: clamp(40px, 6vw, 64px);
    text-align: center;
    overflow: hidden;
    box-shadow: 0 20px 50px rgba(15, 23, 42, 0.06);
  }

  .sg-cta-aura {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 300px;
    background: radial-gradient(circle, rgba(239, 65, 54, 0.15) 0%, transparent 70%);
    filter: blur(50px);
    pointer-events: none;
  }

  .sg-cta-box h2 {
    margin: 0 0 16px;
    font-size: clamp(26px, 4vw, 48px);
    font-weight: 900;
    text-transform: uppercase;
    color: #0A0A0C;
  }

  .sg-cta-box h2 span {
    color: #EF4136;
  }

  .sg-cta-box p {
    max-width: 560px;
    margin: 0 auto 32px;
    color: #475569;
    font-size: 16px;
    font-weight: 500;
  }

  .sg-cta-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  /* RESPONSIVE */
  @media (max-width: 992px) {
    .sg-metrics-grid { grid-template-columns: repeat(2, 1fr); }
    .sg-pillars-grid { grid-template-columns: repeat(2, 1fr); }
    .sg-matrix-card { grid-template-columns: 1fr; gap: 12px; }
    .sg-calc-card { grid-template-columns: 1fr; }
  }

  @media (max-width: 600px) {
    .sg-metrics-grid { grid-template-columns: 1fr; }
    .sg-pillars-grid { grid-template-columns: 1fr; }
    .sg-matrix-cols { grid-template-columns: 1fr; }
    .sg-hero-actions { flex-direction: column; }
    .sg-btn { width: 100%; }
  }
`;
