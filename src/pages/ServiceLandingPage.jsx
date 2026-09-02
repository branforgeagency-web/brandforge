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

      {/* ANIMATED MARQUEE TICKER STRIP */}
      <div className="sg-marquee-bar">
        <div className="sg-marquee-track">
          <span>⚡ {data.eyebrow}</span>
          <span>• 100/100 PERFORMANCE BENCHMARK</span>
          <span>• ENTERPRISE BRAND FORGING</span>
          <span>• REAL-TIME ROI ESTIMATION</span>
          <span>• 24/7 DEDICATED STRATEGY TEAM</span>
          <span>⚡ {data.eyebrow}</span>
          <span>• 100/100 PERFORMANCE BENCHMARK</span>
          <span>• ENTERPRISE BRAND FORGING</span>
          <span>• REAL-TIME ROI ESTIMATION</span>
          <span>• 24/7 DEDICATED STRATEGY TEAM</span>
        </div>
      </div>

      {/* HERO BANNER SECTION WITH LEFT-ALIGNED CONTENT & HIGH-CONVERTING LEAD FORM */}
      <header className="sg-hero">
        <div className="sg-hero-glow" />

        <div className="sg-container">
          <div className="sg-hero-grid">
            
            {/* LEFT COLUMN: BADGE, HEADING, PARAGRAPH & CTAS */}
            <div className="sg-hero-left">
              <motion.div
                className="sg-badge"
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Icon size={14} className="sg-badge-icon" />
                <span>{data.eyebrow}</span>
                <Sparkles size={14} className="sg-badge-sparkle" />
              </motion.div>

              <motion.h1
                className="sg-hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
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
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {data.subtitle}
              </motion.p>

              <motion.div
                className="sg-hero-actions"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <button className="sg-btn primary" onClick={onOpenModal}>
                  <Zap size={16} />
                  <span>START FREE {data.number} AUDIT</span>
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: HIGH-CONVERTING DROP US A MESSAGE LEAD FORM */}
            <motion.div
              className="sg-hero-right"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <div className="sg-form-card">
                <div className="sg-form-header">
                  <Sparkles size={18} className="sg-form-sparkle" />
                  <h3>Drop Us a Message</h3>
                  <p>Get a response within 4 hours & free audit strategy</p>
                </div>

                <form className="sg-lead-form" onSubmit={async (e) => {
                  e.preventDefault();
                  const formEl = e.target;
                  const formData = new FormData(formEl);
                  const dataObj = Object.fromEntries(formData.entries());

                  try {
                    await fetch("https://formsubmit.co/ajax/brandforgedigitalmarketing@gmail.com", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                      },
                      body: JSON.stringify({
                        ...dataObj,
                        _subject: `⚡ New Landing Page Enquiry for ${data.eyebrow}`
                      })
                    });
                  } catch (err) {
                    console.error(err);
                  }
                  alert(`Thank you! Your ${data.eyebrow} enquiry has been received. Our strategy team will contact +91 93845 76852 within 4 hours.`);
                  formEl.reset();
                }}>
                  <div className="sg-field-row">
                    <input type="text" name="name" required placeholder="Name *" className="sg-input" />
                  </div>

                  <div className="sg-field-grid">
                    <select name="country_code" className="sg-select country-code" defaultValue="+91">
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+65">🇸🇬 +65</option>
                    </select>
                    <input type="tel" name="phone" required placeholder="Phone No *" className="sg-input" />
                  </div>

                  <div className="sg-field-grid">
                    <input type="email" name="email" required placeholder="Email *" className="sg-input" />
                    <select name="service" className="sg-select" defaultValue={data.eyebrow}>
                      <option value={data.eyebrow}>{data.eyebrow}</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Paid Media Scaling">Paid Media Scaling</option>
                      <option value="SEO & GEO Supremacy">SEO & GEO Supremacy</option>
                    </select>
                  </div>

                  <div className="sg-field-grid">
                    <input type="text" name="business" required placeholder="Which Business do you have? *" className="sg-input" />
                    <input type="text" name="location" required placeholder="Location / City *" className="sg-input" />
                  </div>

                  <div className="sg-field-row">
                    <textarea name="message" rows="3" required placeholder="Message / Project Scope *" className="sg-textarea" />
                  </div>

                  <button type="submit" className="sg-form-btn">
                    <Zap size={16} />
                    <span>SEND ENQUIRY NOW</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            </motion.div>

          </div>

          {/* ANIMATED METRICS STRIP */}
          <div className="sg-metrics-grid">
            {data.metrics.map((m, idx) => (
              <motion.div
                key={m.label}
                className="sg-metric-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ scale: 1.04, y: -6 }}
              >
                <div className="sg-metric-glow" />
                <div className="sg-metric-val">{m.value}</div>
                <div className="sg-metric-lbl">{m.label}</div>
                <div className="sg-metric-sub">{m.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </header>

      {/* COMPARISON MATRIX SECTION — CREATIVE DYNAMIC PARADIGM SHIFT */}
      <section className="sg-section sg-comparison-section">
        <div className="sg-container">
          <div className="sg-section-header text-center">
            <span className="sg-section-tag">{data.matrixTag}</span>
            <h2 className="sg-section-title">{data.matrixTitle}</h2>
            <p className="sg-section-subtitle">{data.matrixSubtitle}</p>
          </div>

          <div className="sg-matrix-grid">
            {data.matrixRows.map((row, idx) => (
              <motion.div
                key={row.feature}
                className="sg-matrix-card"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="sg-matrix-feat">
                  <Sparkles size={16} className="feat-icon" />
                  <span>{row.feature}</span>
                </div>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CREATIVE 6-PILLAR ANIMATED SYSTEM */}
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
            {data.pillars.map((p, idx) => {
              const PillarIcon = p.icon || Zap;
              return (
                <motion.div
                  key={p.title}
                  className="sg-pillar-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="sg-pillar-card-edge-glow" />
                  
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
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ANIMATED EXECUTION BLUEPRINT / PROCESS FLOW */}
      <section className="sg-section sg-process-sec">
        <div className="sg-container">
          <div className="sg-section-header text-center">
            <span className="sg-section-tag">EXECUTION ROADMAP</span>
            <h2 className="sg-section-title">4-STEP <span>ENGINEERING BLUEPRINT</span></h2>
            <p className="sg-section-subtitle">How we take your project from initial strategy blueprint to live market dominance.</p>
          </div>

          <div className="sg-process-grid">
            {[
              { num: "01", title: "STRATEGY ARCHITECTURE", desc: "120-point diagnostic audit, competitor teardowns & roadmap alignment." },
              { num: "02", title: "UI/UX & PROTOTYPING", desc: "Custom 3D visual design tokens, glassmorphic UX & conversion triggers." },
              { num: "03", title: "SUB-SECOND ENGINEERING", desc: "Next.js/React front-end code, WebGL shaders & Core Web Vitals optimization." },
              { num: "04", title: "DEPLOYS & ROAS SCALE", desc: "Live production launch, CAPI tracking, GEO schemas & LTV scaling loops." },
            ].map((step, sIdx) => (
              <motion.div
                key={step.num}
                className="sg-process-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: sIdx * 0.12 }}
                whileHover={{ y: -6 }}
              >
                <div className="sg-step-num">{step.num}</div>
                <h4 className="sg-step-title">{step.title}</h4>
                <p className="sg-step-desc">{step.desc}</p>
              </motion.div>
            ))}
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
  .sg-marquee-bar {
    width: 100%;
    overflow: hidden;
    background: #0A0A0C;
    color: #FFFFFF;
    padding: 12px 0;
    border-bottom: 1px solid rgba(239, 65, 54, 0.3);
    font-family: 'JetBrains Mono', monospace;
    font-size: 11.5px;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .sg-marquee-track {
    display: flex;
    align-items: center;
    gap: 36px;
    white-space: nowrap;
    width: max-content;
    animation: sgMarquee 28s linear infinite;
  }

  .sg-marquee-track span {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: rgba(255, 255, 255, 0.9);
  }

  @keyframes sgMarquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .sg-page-root {
    position: relative;
    width: 100%;
    background: #F8F9FA;
    color: #0A0A0C;
    font-family: 'Outfit', 'Plus Jakarta Sans', sans-serif;
    overflow-x: hidden;
    padding-top: 80px;
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

  /* DROP US A MESSAGE LEAD FORM (VDIGTECH INSPIRED) */
  .sg-hero-right {
    position: relative;
    width: 100%;
  }

  .sg-form-card {
    position: relative;
    background: #0A0A0C;
    border: 1.5px solid #EF4136;
    border-radius: 24px;
    padding: clamp(24px, 3vw, 32px);
    color: #FFFFFF;
    box-shadow: 0 20px 50px rgba(10, 10, 12, 0.25);
  }

  .sg-form-header {
    text-align: center;
    margin-bottom: 20px;
  }

  .sg-form-sparkle {
    color: #EF4136;
    margin-bottom: 4px;
  }

  .sg-form-header h3 {
    margin: 0 0 4px;
    font-size: 22px;
    font-weight: 900;
    color: #FFFFFF;
    letter-spacing: -0.02em;
  }

  .sg-form-header p {
    margin: 0;
    font-size: 12.5px;
    color: #94A3B8;
  }

  .sg-lead-form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .sg-field-row {
    width: 100%;
  }

  .sg-field-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .sg-input, .sg-select, .sg-textarea {
    width: 100%;
    background: #141418;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 10px;
    padding: 10px 14px;
    color: #FFFFFF;
    font-family: inherit;
    font-size: 13px;
    outline: none;
    transition: border-color 0.2s ease;
    box-sizing: border-box;
  }

  .sg-select {
    appearance: none;
    cursor: pointer;
  }

  .sg-select option {
    background: #0A0A0C;
    color: #FFFFFF;
  }

  .sg-input::placeholder, .sg-textarea::placeholder {
    color: rgba(255, 255, 255, 0.45);
  }

  .sg-input:focus, .sg-select:focus, .sg-textarea:focus {
    border-color: #EF4136;
  }

  .sg-textarea {
    resize: none;
  }

  .sg-form-btn {
    width: 100%;
    height: 48px;
    border: none;
    border-radius: 10px;
    background: #EF4136;
    color: #FFFFFF;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 4px;
    transition: background 0.25s ease, transform 0.25s ease;
    box-shadow: 0 8px 24px rgba(239, 65, 54, 0.35);
  }

  .sg-form-btn:hover {
    background: #D9382E;
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(239, 65, 54, 0.5);
  }
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

  /* ANIMATED 4-STEP PROCESS ROADMAP */
  .sg-process-sec {
    background: #0A0A0C;
    color: #FFFFFF;
    border-top: 1px solid rgba(239, 65, 54, 0.3);
    border-bottom: 1px solid rgba(239, 65, 54, 0.3);
  }

  .sg-process-sec .sg-section-title {
    color: #FFFFFF;
  }

  .sg-process-sec .sg-section-subtitle {
    color: #94A3B8;
  }

  .sg-process-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 40px;
  }

  @media (max-width: 992px) {
    .sg-process-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 576px) {
    .sg-process-grid {
      grid-template-columns: 1fr;
    }
  }

  .sg-process-card {
    position: relative;
    background: #141418;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 20px;
    padding: 28px 24px;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .sg-process-card:hover {
    border-color: #EF4136;
    background: #1A1A22;
    box-shadow: 0 16px 40px rgba(239, 65, 54, 0.25);
  }

  .sg-step-num {
    font-family: 'JetBrains Mono', monospace;
    font-size: 36px;
    font-weight: 900;
    color: #EF4136;
    line-height: 1;
    margin-bottom: 16px;
    opacity: 0.9;
  }

  .sg-step-title {
    font-size: 15px;
    font-weight: 800;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    margin: 0 0 10px;
    text-transform: uppercase;
  }

  .sg-step-desc {
    font-size: 13px;
    color: #94A3B8;
    line-height: 1.6;
    margin: 0;
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
