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
  Globe,
  ShieldCheck,
  Users,
  PenTool,
  BarChart3,
  Cpu,
} from "lucide-react";
import { servicesData } from "../data/servicesData";
import BrandForgeAnimatedFooter from "../components/BrandForgeAnimatedFooter";
import BrandForgeLiquidMetalBackground from "../components/BrandForgeLiquidMetalBackground";

/* ───────────────────────────────────────────────────────────────────────────
   DYNAMIC SERVICE LANDING PAGE COMPONENT (CARDLESS & LIQUID METAL SHADER)
   100% Cardless design — Liquid metal wave shader, metallic sheen, embers.
   ─────────────────────────────────────────────────────────────────────────── */

export default function ServiceLandingPage({ slug = "seo-geo", onOpenModal, navigate }) {
  const data = servicesData[slug] || servicesData["seo-geo"];

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    }
    if (data.metaTitle) {
      document.title = data.metaTitle;
    }
    if (data.metaDescription) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', data.metaDescription);
    }
  }, [slug, data]);

  const [activeFaq, setActiveFaq] = useState(null);
  const [activePillar, setActivePillar] = useState(0);

  const Icon = data.icon || Search;

  return (
    <div className="sg-page-root">
      <style>{styles}</style>

      {/* THREE.JS LIQUID METAL SHADER & SPARKS BACKGROUND */}
      <BrandForgeLiquidMetalBackground />

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

      {/* HERO BANNER SECTION WITH CARDLESS INLINE LEAD CAPTURE */}
      <header
        className={`sg-hero ${data.bannerBg ? "has-banner-bg" : ""}`}
        style={
          data.bannerBg
            ? {
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.72) 0%, rgba(5, 5, 8, 0.85) 50%, rgba(0, 0, 0, 0.98) 100%), url(${data.bannerBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
                backgroundRepeat: "no-repeat",
              }
            : undefined
        }
      >
        <div className="sg-hero-glow" />

        <div className="sg-container">
          <div className="sg-hero-grid">
            
            {/* LEFT COLUMN: BADGE, HEADING, PARAGRAPH & CTAS */}
            <div className="sg-hero-left">
              <motion.div
                className="sg-badge"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <Icon size={14} className="sg-badge-icon" />
                <span>{data.eyebrow}</span>
                <Sparkles size={14} className="sg-badge-sparkle" />
              </motion.div>

              <motion.h1
                className="sg-hero-title"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                {data.slug === "seo-geo" ? (
                  <>Best SEO Company in Coimbatore for <span>Google & AI Search Rankings</span></>
                ) : data.title.includes("/") ? (
                  <>{data.title.split("/")[0]} / <span>{data.title.split("/")[1]}</span></>
                ) : (
                  <>{data.title.split(" ").slice(0, -1).join(" ")} <span>{data.title.split(" ").slice(-1)}</span></>
                )}
              </motion.h1>

              <motion.div
                className="sg-hero-desc"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {Array.isArray(data.subtitle) ? (
                  data.subtitle.map((para, i) => (
                    <p key={i} className="sg-hero-desc-para">
                      {para}
                    </p>
                  ))
                ) : typeof data.subtitle === "string" && data.subtitle.includes("\n\n") ? (
                  data.subtitle.split("\n\n").map((para, i) => (
                    <p key={i} className="sg-hero-desc-para">
                      {para}
                    </p>
                  ))
                ) : (
                  <p className="sg-hero-desc-para">{data.subtitle}</p>
                )}
              </motion.div>

              <motion.div
                className="sg-hero-actions"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <button className="sg-btn primary" onClick={onOpenModal}>
                  <Zap size={16} />
                  <span>{data.heroButtonText || `START FREE ${data.number} AUDIT`}</span>
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: CARDLESS MINIMALIST INLINE LEAD FORM */}
            <motion.div
              className="sg-hero-right"
              initial={{ opacity: 0, x: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <div className="sg-inline-form-wrap">
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
                    <input type="text" name="name" required placeholder="Your Full Name *" className="sg-input-line" />
                  </div>

                  <div className="sg-field-grid">
                    <select name="country_code" className="sg-select-line country-code" defaultValue="+91">
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+65">🇸🇬 +65</option>
                    </select>
                    <input type="tel" name="phone" required placeholder="Phone / WhatsApp *" className="sg-input-line" />
                  </div>

                  <div className="sg-field-grid">
                    <input type="email" name="email" required placeholder="Work Email *" className="sg-input-line" />
                    <select name="service" className="sg-select-line" defaultValue={data.eyebrow}>
                      <option value={data.eyebrow}>{data.eyebrow}</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Paid Media Scaling">Paid Media Scaling</option>
                      <option value="SEO & GEO Supremacy">SEO & GEO Supremacy</option>
                    </select>
                  </div>

                  <div className="sg-field-grid">
                    <input type="text" name="business" required placeholder="Business Name *" className="sg-input-line" />
                    <input type="text" name="location" required placeholder="City / Country *" className="sg-input-line" />
                  </div>

                  <div className="sg-field-row">
                    <textarea name="message" rows="2" required placeholder="Message / Target Outcome *" className="sg-textarea-line" />
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



          {/* CARDLESS TYPOGRAPHIC METRICS STRIP */}
          <div className="sg-metrics-strip">
            {data.metrics.map((m, idx) => (
              <motion.div
                key={m.label}
                className="sg-metric-item"
                initial={{ opacity: 0, y: 35, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <span className="sg-metric-val">{m.value}</span>
                <div className="sg-metric-lbl">{m.label}</div>
                <div className="sg-metric-sub">{m.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* TRANSPARENT PNG CLIENT LOGOS PROOF STREAM */}
          <motion.div
            className="sg-client-png-strip"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="strip-title">TRUSTED BY CATEGORY LEADERS</span>
            <div className="strip-logos">
              <img src="/client-sonicprints.png" alt="Sonic Prints" className="png-client-logo" style={{ transform: "scale(1.4)" }} />
              <img src="/client-thoughtflows.png" alt="ThoughtFlows" className="png-client-logo" style={{ transform: "scale(1.35)" }} />
              <img src="/client-talentera.png" alt="Talentera" className="png-client-logo" style={{ transform: "scale(1.0)" }} />
              <img src="/client-thoughtspace.png" alt="ThoughtSpace" className="png-client-logo" style={{ transform: "scale(1.4)" }} />
            </div>
          </motion.div>
        </div>
      </header>

      {/* WHY BUSINESSES CHOOSE BRAND FORGE SECTION */}
      {data.whyChooseUs && (
        <section className="sg-section sg-why-section">
          <div className="sg-container">
            <div className="sg-why-grid">
              
              {/* LEFT: HEADING, DESCRIPTION & LEAD-IN */}
              <motion.div
                className="sg-why-left"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7 }}
              >
                <span className="sg-section-tag">{data.whyChooseUs.tag || "LOCAL SEO AUTHORITY"}</span>
                <h2 className="sg-why-title">{data.whyChooseUs.title}</h2>
                <p className="sg-why-desc">{data.whyChooseUs.description}</p>
                <p className="sg-why-leadin">{data.whyChooseUs.leadIn}</p>
              </motion.div>

              {/* RIGHT: FEATURE CARDS / POINTS */}
              <div className="sg-why-points-grid">
                {data.whyChooseUs.points.map((point, idx) => (
                  <motion.div
                    key={idx}
                    className="sg-why-point-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <div className="sg-why-point-icon">
                      <CheckCircle2 size={18} className="check-icon" />
                    </div>
                    <div className="sg-why-point-content">
                      <p>{typeof point === "string" ? point : point.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </section>
      )}

      {/* CARDLESS EDITORIAL COMPARISON MATRIX */}
      <section className="sg-section sg-comparison-section">
        <div className="sg-container">
          <motion.div
            className="sg-section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="sg-section-tag">{data.matrixTag}</span>
            <h2 className="sg-section-title">{data.matrixTitle}</h2>
            <p className="sg-section-subtitle">{data.matrixSubtitle}</p>
          </motion.div>

          <div className="sg-matrix-stream">
            {data.matrixRows.map((row, idx) => (
              <motion.div
                key={row.feature}
                className="sg-matrix-row"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
              >
                <div className="sg-row-feature">
                  <Sparkles size={16} className="feat-icon" />
                  <span>{row.feature}</span>
                </div>
                
                <div className="sg-row-compare">
                  <div className="sg-col-trad">
                    <span className="sg-col-lbl">OLD TRADITIONAL AGENCY</span>
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

      {/* CARDLESS INTERACTIVE 6-PILLAR LIST STREAM */}
      <section className="sg-section sg-pillars-section">
        <div className="sg-container">
          <motion.div
            className="sg-section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="sg-section-tag">{data.pillarsTag || "6-PILLAR SYSTEM"}</span>
            <h2 className="sg-section-title">
              {data.pillarsTitle ? (
                data.pillarsTitle
              ) : (
                <>THE <span>BRANDFORGE {data.number} FORGE</span></>
              )}
            </h2>
            <p className="sg-section-subtitle">
              {data.pillarsSubtitle || "Every system is engineered to capture market intent, build category authority, and scale pipeline."}
            </p>
          </motion.div>

          <div className="sg-pillars-list">
            {data.pillars.map((p, idx) => {
              const PillarIcon = p.icon || Zap;
              const isOpen = activePillar === idx;

              return (
                <motion.div
                  key={p.title}
                  className={`sg-pillar-row ${isOpen ? "is-active" : ""}`}
                  initial={{ opacity: 0, x: -35, y: 15 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  onClick={() => setActivePillar(isOpen ? null : idx)}
                >
                  <div className="sg-pillar-head">
                    <div className="sg-pillar-num">0{idx + 1}</div>
                    <div className="sg-big-pillar-icon">
                      <PillarIcon size={24} className="pillar-lucide-icon" />
                    </div>
                    <div className="sg-pillar-title-group">
                      <div className="sg-pillar-tag-inline">{p.tag}</div>
                      <h3>{p.title}</h3>
                    </div>
                    <div className="sg-pillar-toggle">
                      <ChevronDown size={20} className={`toggle-icon ${isOpen ? "open" : ""}`} />
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        className="sg-pillar-body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <p>{p.description}</p>
                        {p.callout && (
                          <div className="sg-pillar-callout" style={{ margin: "14px 0 16px", padding: "12px 16px", borderRadius: "12px", background: "rgba(239, 65, 54, 0.08)", borderLeft: "3px solid #EF4136", color: "rgba(255, 255, 255, 0.9)", fontSize: "14px", fontStyle: "italic", lineHeight: 1.6 }}>
                            {p.callout}
                          </div>
                        )}
                        <div className="sg-pillar-deliv-wrap">
                          {p.deliverables.map((d) => (
                            <span key={d} className="sg-deliv-tag">
                              <CheckCircle2 size={13} />
                              {d}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CARDLESS HORIZONTAL TIMELINE PROCESS THREAD */}
      <section className="sg-section sg-process-sec">
        <div className="sg-container">
          <motion.div
            className="sg-section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="sg-section-tag">EXECUTION ROADMAP</span>
            <h2 className="sg-section-title">4-STEP <span>ENGINEERING BLUEPRINT</span></h2>
            <p className="sg-section-subtitle">How we take your project from initial strategy blueprint to live market dominance.</p>
          </motion.div>

          <div className="sg-timeline-stream">
            <div className="sg-timeline-line" />
            {[
              { num: "01", title: "STRATEGY ARCHITECTURE", desc: "120-point diagnostic audit, competitor teardowns & roadmap alignment." },
              { num: "02", title: "UI/UX & PROTOTYPING", desc: "Custom 3D visual design tokens, glassmorphic UX & conversion triggers." },
              { num: "03", title: "SUB-SECOND ENGINEERING", desc: "Next.js/React front-end code, WebGL shaders & Core Web Vitals optimization." },
              { num: "04", title: "DEPLOYS & ROAS SCALE", desc: "Live production launch, CAPI tracking, GEO schemas & LTV scaling loops." },
            ].map((step, sIdx) => (
              <motion.div
                key={step.num}
                className="sg-timeline-step"
                initial={{ opacity: 0, y: 35, scale: 0.88 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: sIdx * 0.12 }}
              >
                <div className="sg-node-dot">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES OUR COMPANY DIFFERENT SECTION */}
      {data.differentiators && (
        <section className="sg-section sg-diff-section">
          <div className="sg-container">
            <motion.div
              className="sg-section-header text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <span className="sg-section-tag">{data.differentiators.tag || "THE BRANDFORGE ADVANTAGE"}</span>
              <h2 className="sg-section-title">{data.differentiators.title}</h2>
              {data.differentiators.subtitle && (
                <p className="sg-section-subtitle">{data.differentiators.subtitle}</p>
              )}
            </motion.div>

            <div className="sg-diff-grid">
              {data.differentiators.items.map((item, idx) => {
                const DiffIcon = item.icon || Sparkles;
                return (
                  <motion.div
                    key={item.title}
                    className="sg-diff-card"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <div className="sg-diff-icon-wrap">
                      <DiffIcon size={24} className="diff-lucide-icon" />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CARDLESS FAQ ACCORDION LIST */}
      <section className="sg-section sg-faq-section">
        <div className="sg-container">
          <motion.div
            className="sg-section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="sg-section-tag">ANSWERS & CLARITY</span>
            <h2 className="sg-section-title">FREQUENTLY ASKED <span>QUESTIONS</span></h2>
          </motion.div>

          <div className="sg-faq-stream">
            {data.faqs.map((faq, idx) => (
              <motion.div
                key={faq.q}
                className={`sg-faq-row ${activeFaq === idx ? "is-open" : ""}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM BANNER CTA */}
      <section className="sg-bottom-cta">
        <div className="sg-container">
          <motion.div
            className="sg-cta-box-cardless"
            initial={{ opacity: 0, y: 45, scale: 0.93 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2>
              {data.bottomCta?.title ? (
                <>
                  {data.bottomCta.title.includes("—") ? (
                    <>{data.bottomCta.title.split("—")[0]} — <span>{data.bottomCta.title.split("—")[1]}</span></>
                  ) : (
                    data.bottomCta.title
                  )}
                </>
              ) : (
                <>READY TO FORGE <span>{data.eyebrow}?</span></>
              )}
            </h2>
            <p>
              {data.bottomCta?.subtitle || "Get a comprehensive strategy audit delivered to your inbox within 24 hours."}
            </p>
            <div className="sg-cta-actions">
              <button className="sg-btn primary" onClick={onOpenModal}>
                <Zap size={16} />
                <span>{data.bottomCta?.buttonText || "REQUEST FREE STRATEGY AUDIT"}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SITE FOOTER */}
      <BrandForgeAnimatedFooter onOpenModal={onOpenModal} />
    </div>
  );
}

const styles = `
  @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=JetBrains+Mono:wght@700;800&display=swap");

  .sg-page-root {
    background: #000000;
    color: #FFFFFF;
    font-family: "Plus Jakarta Sans", sans-serif;
    overflow-x: hidden;
    padding-top: 110px;
    position: relative;
    z-index: 1;
  }

  .sg-container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 clamp(20px, 4vw, 40px);
    position: relative;
    z-index: 2;
  }

  .text-center { text-align: center; }

  /* TICKER STRIP */
  .sg-marquee-bar {
    background: rgba(10, 10, 12, 0.85);
    backdrop-filter: blur(12px);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    color: #FFFFFF;
    padding: 12px 0;
    margin-top: 8px;
    overflow: hidden;
    white-space: nowrap;
    font-family: "Outfit", sans-serif;
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    position: relative;
    z-index: 5;
  }

  .sg-marquee-track {
    display: inline-flex;
    gap: 30px;
    animation: sgMarquee 35s linear infinite;
  }

  .sg-marquee-track span { color: #EF4136; }

  @keyframes sgMarquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  /* HERO BANNER — CARDLESS */
  .sg-hero {
    position: relative;
    padding: clamp(40px, 6vw, 80px) 0 clamp(60px, 8vw, 100px);
    background: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .sg-hero-glow {
    position: absolute;
    top: -100px;
    left: 20%;
    width: 600px;
    height: 400px;
    background: radial-gradient(circle, rgba(239, 65, 54, 0.15) 0%, transparent 70%);
    filter: blur(80px);
    pointer-events: none;
  }

  .sg-hero-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: clamp(32px, 5vw, 64px);
    align-items: center;
  }

  .sg-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    border-radius: 999px;
    background: rgba(239, 65, 54, 0.12);
    border: 1px solid rgba(239, 65, 54, 0.35);
    color: #EF4136;
    font-size: 0.82rem;
    font-weight: 800;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  .sg-hero-title {
    font-family: "Outfit", sans-serif;
    font-size: clamp(34px, 5vw, 68px);
    font-weight: 900;
    line-height: 1.05;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    margin: 0 0 20px;
  }

  .sg-hero-title span { color: #EF4136; }

  .sg-hero-desc {
    font-size: clamp(15px, 1.6vw, 18px);
    line-height: 1.65;
    color: rgba(255, 255, 255, 0.82);
    margin: 0 0 32px;
  }

  .sg-hero-desc-para {
    margin: 0 0 16px;
  }

  .sg-hero-desc-para:last-child {
    margin-bottom: 0;
  }

  .sg-hero-actions { display: flex; gap: 14px; }

  /* HIGH-TECH GLOWING GLASS FORM BACKGROUND EFFECT (BORDERLESS) */
  .sg-inline-form-wrap {
    position: relative;
    padding: clamp(24px, 3vw, 36px) clamp(20px, 2.5vw, 32px);
    background: linear-gradient(135deg, rgba(18, 18, 24, 0.82) 0%, rgba(8, 8, 12, 0.92) 100%);
    border-radius: 24px;
    border: none;
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    box-shadow: 
      0 20px 50px rgba(0, 0, 0, 0.8),
      0 0 40px rgba(239, 65, 54, 0.12),
      inset 0 0 20px rgba(239, 65, 54, 0.04);
    overflow: hidden;
    transition: all 0.35s ease;
  }

  .sg-inline-form-wrap:hover {
    box-shadow: 
      0 25px 60px rgba(0, 0, 0, 0.9),
      0 0 50px rgba(239, 65, 54, 0.2),
      inset 0 0 30px rgba(239, 65, 54, 0.06);
  }

  .sg-inline-form-wrap::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 160px;
    height: 160px;
    background: radial-gradient(circle, rgba(239, 65, 54, 0.25) 0%, transparent 70%);
    filter: blur(30px);
    pointer-events: none;
  }

  .sg-inline-form-wrap::after {
    content: "";
    position: absolute;
    bottom: -40px;
    left: -40px;
    width: 140px;
    height: 140px;
    background: radial-gradient(circle, rgba(239, 65, 54, 0.15) 0%, transparent 70%);
    filter: blur(35px);
    pointer-events: none;
  }

  .sg-form-header {
    position: relative;
    z-index: 2;
  }

  .sg-form-sparkle {
    color: #EF4136;
    margin-bottom: 8px;
    filter: drop-shadow(0 0 8px rgba(239, 65, 54, 0.8));
  }

  .sg-form-header h3 {
    font-size: clamp(20px, 2.2vw, 24px);
    font-weight: 900;
    margin: 0 0 6px;
    color: #FFFFFF;
    letter-spacing: -0.01em;
  }

  .sg-form-header p {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.7);
    margin: 0 0 24px;
    font-weight: 500;
  }

  .sg-lead-form {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .sg-field-row { width: 100%; }

  .sg-field-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

  .sg-input-line, .sg-select-line, .sg-textarea-line {
    width: 100%;
    padding: 12px 14px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 13.5px;
    font-weight: 600;
    outline: none;
    transition: all 0.25s ease;
    font-family: inherit;
    box-sizing: border-box;
  }

  .sg-input-line::placeholder, .sg-textarea-line::placeholder {
    color: rgba(255, 255, 255, 0.45);
    font-weight: 500;
  }

  .sg-select-line option {
    background: #0A0A0C;
    color: #FFFFFF;
  }

  .sg-input-line:focus, .sg-select-line:focus, .sg-textarea-line:focus {
    background: rgba(239, 65, 54, 0.06);
    border-color: #EF4136;
    box-shadow: 0 0 16px rgba(239, 65, 54, 0.35), inset 0 0 8px rgba(239, 65, 54, 0.1);
  }

  .sg-form-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 52px;
    width: 100%;
    margin-top: 8px;
    background: linear-gradient(135deg, #EF4136 0%, #D9382E 100%);
    color: #FFFFFF;
    border: none;
    border-radius: 12px;
    font-size: 0.92rem;
    font-weight: 800;
    letter-spacing: 0.05em;
    cursor: pointer;
    box-shadow: 0 10px 25px rgba(239, 65, 54, 0.45);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .sg-form-btn:hover {
    background: linear-gradient(135deg, #FF5548 0%, #EF4136 100%);
    transform: translateY(-2px);
    box-shadow: 0 14px 35px rgba(239, 65, 54, 0.65);
  }

  /* BIG WIDESCREEN HERO VISUAL SHOWCASE FRAME STYLES */
  .sg-big-visual-frame {
    position: relative;
    width: 100%;
    height: clamp(280px, 35vw, 440px);
    margin-top: 50px;
    border-radius: 28px;
    overflow: hidden;
    border: 1.5px solid rgba(239, 65, 54, 0.4);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(239, 65, 54, 0.2);
  }

  .big-visual-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.9) contrast(1.1);
  }

  .visual-glass-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 40%, rgba(10, 10, 12, 0.85) 100%);
    pointer-events: none;
  }

  .floating-badge {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 12px 20px;
    border-radius: 20px;
    background: rgba(10, 10, 14, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(16px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    z-index: 5;
  }

  .floating-badge.top-left {
    top: 24px;
    left: 24px;
  }

  .floating-badge.bottom-right {
    bottom: 24px;
    right: 24px;
  }

  .big-floating-png {
    width: 36px;
    height: 36px;
    object-fit: contain;
    filter: drop-shadow(0 0 8px rgba(239, 65, 54, 0.8));
  }

  .floating-badge strong {
    display: block;
    font-size: 13px;
    font-weight: 900;
    color: #FFFFFF;
    font-family: "Outfit", sans-serif;
  }

  .floating-badge span {
    font-size: 11px;
    color: rgba(255, 255, 255, 0.65);
  }

  /* LARGE PILLAR ICON BADGES */
  .sg-big-pillar-icon {
    position: relative;
    width: 52px;
    height: 52px;
    border-radius: 16px;
    background: rgba(239, 65, 54, 0.12);
    border: 1.5px solid rgba(239, 65, 54, 0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    flex-shrink: 0;
    box-shadow: 0 0 20px rgba(239, 65, 54, 0.2);
  }

  .pillar-lucide-icon {
    color: #EF4136;
  }

  .pillar-png-icon {
    position: absolute;
    bottom: -6px;
    right: -6px;
    width: 22px;
    height: 22px;
    object-fit: contain;
    filter: drop-shadow(0 0 4px rgba(239, 65, 54, 0.8));
  }

  /* CARDLESS METRICS STRIP */
  .sg-metrics-strip {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 60px;
    padding-top: 40px;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  .sg-metric-val {
    font-family: "Outfit", sans-serif;
    font-size: clamp(28px, 3.5vw, 46px);
    font-weight: 900;
    color: #EF4136;
    line-height: 1;
    display: block;
    margin-bottom: 6px;
  }

  .sg-metric-lbl {
    font-size: 14px;
    font-weight: 800;
    color: #FFFFFF;
  }

  .sg-badge-png-icon {
    height: 18px;
    width: 18px;
    object-fit: contain;
    filter: drop-shadow(0 0 6px rgba(239, 65, 54, 0.6));
  }

  .png-deliv-icon {
    height: 14px;
    width: 14px;
    object-fit: contain;
    margin-right: 2px;
  }

  /* TRANSPARENT PNG CLIENT LOGOS PROOF STREAM */
  .sg-client-png-strip {
    margin-top: 40px;
    padding-top: 28px;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .strip-title {
    font-family: "Outfit", sans-serif;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.18em;
    color: rgba(255, 255, 255, 0.65);
    text-transform: uppercase;
  }

  .strip-logos {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(16px, 4vw, 48px);
    flex-wrap: nowrap;
    width: 100%;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding: 10px 0;
  }

  .strip-logos::-webkit-scrollbar {
    display: none;
  }

  .png-client-logo {
    height: clamp(38px, 4.5vw, 56px);
    max-width: 180px;
    width: auto;
    object-fit: contain;
    flex-shrink: 0;
    filter: brightness(0) invert(1) opacity(0.9) drop-shadow(0 2px 10px rgba(255, 255, 255, 0.25));
    transition: opacity 0.25s ease, filter 0.25s ease, transform 0.25s ease;
  }

  .png-client-logo:hover {
    filter: brightness(0) invert(1) opacity(1) drop-shadow(0 6px 20px rgba(239, 65, 54, 0.7));
  }

  .sg-metric-sub {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.65);
  }

  /* WHY BUSINESSES CHOOSE BRAND FORGE SECTION */
  .sg-why-section {
    position: relative;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    background: linear-gradient(180deg, rgba(239, 65, 54, 0.03) 0%, rgba(10, 10, 14, 0.4) 100%);
  }

  .sg-why-grid {
    display: grid;
    grid-template-columns: 1.15fr 1fr;
    gap: clamp(36px, 5vw, 64px);
    align-items: center;
  }

  .sg-why-title {
    font-family: "Outfit", sans-serif;
    font-size: clamp(26px, 3.5vw, 42px);
    font-weight: 900;
    line-height: 1.15;
    color: #FFFFFF;
    margin: 0 0 18px;
    letter-spacing: -0.01em;
  }

  .sg-why-desc {
    font-size: clamp(15px, 1.5vw, 17px);
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.8);
    margin: 0 0 20px;
  }

  .sg-why-leadin {
    font-size: 15px;
    font-weight: 700;
    color: #FFFFFF;
    letter-spacing: 0.01em;
    margin: 0;
  }

  .sg-why-points-grid {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .sg-why-point-card {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 18px 22px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .sg-why-point-card:hover {
    border-color: rgba(239, 65, 54, 0.5);
    background: rgba(239, 65, 54, 0.08);
    transform: translateX(6px);
  }

  .sg-why-point-icon {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    background: rgba(239, 65, 54, 0.15);
    border: 1px solid rgba(239, 65, 54, 0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .sg-why-point-icon .check-icon {
    color: #EF4136;
  }

  .sg-why-point-content p {
    font-size: clamp(14px, 1.3vw, 16px);
    font-weight: 600;
    line-height: 1.5;
    color: #FFFFFF;
    margin: 0;
  }

  @media (max-width: 920px) {
    .sg-why-grid {
      grid-template-columns: 1fr;
      gap: 32px;
    }
  }

  /* WHAT MAKES US DIFFERENT SECTION */
  .sg-diff-section {
    position: relative;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    background: linear-gradient(180deg, rgba(239, 65, 54, 0.02) 0%, rgba(10, 10, 14, 0.5) 100%);
  }

  .sg-diff-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .sg-diff-card {
    padding: 32px 28px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.09);
    backdrop-filter: blur(14px);
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .sg-diff-card:hover {
    border-color: rgba(239, 65, 54, 0.45);
    background: rgba(239, 65, 54, 0.06);
    transform: translateY(-5px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(239, 65, 54, 0.15);
  }

  .sg-diff-icon-wrap {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: rgba(239, 65, 54, 0.15);
    border: 1px solid rgba(239, 65, 54, 0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4px;
  }

  .sg-diff-icon-wrap .diff-lucide-icon {
    color: #EF4136;
  }

  .sg-diff-card h3 {
    font-family: "Outfit", sans-serif;
    font-size: 20px;
    font-weight: 800;
    color: #FFFFFF;
    margin: 0;
  }

  .sg-diff-card p {
    font-size: 14.5px;
    line-height: 1.65;
    color: rgba(255, 255, 255, 0.75);
    margin: 0;
  }

  @media (max-width: 768px) {
    .sg-diff-grid {
      grid-template-columns: 1fr;
    }
  }

  /* CARDLESS COMPARISON STREAM */
  .sg-section { padding: clamp(60px, 8vw, 100px) 0; }

  .sg-section-tag {
    font-family: "JetBrains Mono", monospace;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.12em;
    color: #EF4136;
    text-transform: uppercase;
    display: block;
    margin-bottom: 8px;
  }

  .sg-section-title {
    font-family: "Outfit", sans-serif;
    font-size: clamp(28px, 4vw, 48px);
    font-weight: 900;
    color: #FFFFFF;
    margin: 0 0 12px;
  }

  .sg-section-title span { color: #EF4136; }

  .sg-section-subtitle {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.72);
    max-width: 620px;
    margin: 0 auto 50px;
  }

  .sg-matrix-stream {
    display: flex;
    flex-direction: column;
  }

  .sg-matrix-row {
    padding: 24px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 30px;
    align-items: center;
  }

  .sg-row-feature {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 800;
    color: #FFFFFF;
  }

  .sg-row-feature .feat-icon { color: #EF4136; }

  .sg-row-compare {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  .sg-col-lbl {
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.45);
    display: block;
    margin-bottom: 4px;
  }

  .sg-col-trad p { color: rgba(255, 255, 255, 0.6); margin: 0; font-size: 14px; }

  .sg-col-geo p { color: #EF4136; margin: 0; font-size: 14px; font-weight: 700; }

  /* CARDLESS PILLARS ACCORDION STREAM */
  .sg-pillars-list {
    display: flex;
    flex-direction: column;
  }

  .sg-pillar-row {
    border-bottom: 1.5px solid rgba(255, 255, 255, 0.15);
    padding: 24px 0;
    cursor: pointer;
    transition: border-bottom-color 0.25s ease;
  }

  .sg-pillar-row.is-active, .sg-pillar-row:hover {
    border-bottom-color: #EF4136;
  }

  .sg-pillar-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .sg-pillar-num {
    font-family: "Outfit", sans-serif;
    font-size: 28px;
    font-weight: 900;
    color: #EF4136;
    width: 60px;
  }

  .sg-pillar-title-group {
    flex: 1;
  }

  .sg-pillar-tag-inline {
    font-size: 11px;
    font-weight: 800;
    color: rgba(255, 255, 255, 0.5);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .sg-pillar-title-group h3 {
    font-size: 22px;
    font-weight: 800;
    margin: 2px 0 0;
    color: #FFFFFF;
  }

  .toggle-icon {
    color: #FFFFFF;
    transition: transform 0.3s ease;
  }

  .toggle-icon.open { transform: rotate(180deg); color: #EF4136; }

  .sg-pillar-body {
    padding-left: 60px;
    padding-top: 16px;
  }

  .sg-pillar-body p {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.75);
    max-width: 700px;
    margin: 0 0 16px;
  }

  .sg-pillar-deliv-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .sg-deliv-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 700;
    color: #FFFFFF;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 6px 14px;
    border-radius: 999px;
  }

  /* CARDLESS HORIZONTAL TIMELINE */
  .sg-timeline-stream {
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    margin-top: 40px;
  }

  .sg-timeline-line {
    position: absolute;
    top: 24px;
    left: 0;
    right: 0;
    height: 2px;
    background: rgba(255, 255, 255, 0.15);
    z-index: 1;
  }

  .sg-timeline-step {
    position: relative;
    z-index: 2;
  }

  .sg-node-dot {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #EF4136;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Outfit", sans-serif;
    font-weight: 900;
    font-size: 16px;
    margin-bottom: 20px;
    box-shadow: 0 0 0 6px #000000;
  }

  .sg-timeline-step h4 {
    font-size: 16px;
    font-weight: 800;
    margin: 0 0 8px;
    color: #FFFFFF;
  }

  .sg-timeline-step p {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.65);
    line-height: 1.5;
    margin: 0;
  }

  /* CARDLESS FAQ */
  .sg-faq-stream {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .sg-faq-row {
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    padding: 20px 0;
    cursor: pointer;
  }

  .sg-faq-q {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 17px;
    font-weight: 800;
    color: #FFFFFF;
  }

  .sg-faq-a p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    line-height: 1.6;
    margin: 12px 0 0;
  }

  /* CARDLESS CTA */
  .sg-bottom-cta {
    background: rgba(10, 10, 12, 0.85);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: #FFFFFF;
    padding: clamp(60px, 8vw, 100px) 0;
    text-align: center;
  }

  .sg-cta-box-cardless h2 {
    font-family: "Outfit", sans-serif;
    font-size: clamp(32px, 5vw, 64px);
    font-weight: 900;
    margin: 0 0 16px;
  }

  .sg-cta-box-cardless h2 span { color: #EF4136; }

  .sg-cta-box-cardless p {
    font-size: 17px;
    color: rgba(255, 255, 255, 0.7);
    margin: 0 auto 36px;
    max-width: 600px;
  }

  .sg-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 16px 36px;
    border-radius: 999px;
    font-size: 0.95rem;
    font-weight: 800;
    cursor: pointer;
    border: none;
    transition: transform 0.25s ease, background 0.25s ease;
  }

  .sg-btn.primary {
    background: #EF4136;
    color: #FFFFFF;
  }

  .sg-btn.primary:hover {
    background: #d8342a;
    transform: translateY(-2px);
  }

  @media (max-width: 992px) {
    .sg-hero-grid { grid-template-columns: 1fr; }
    .sg-metrics-strip { grid-template-columns: repeat(2, 1fr); }
    .sg-timeline-stream { grid-template-columns: repeat(2, 1fr); gap: 40px 20px; }
    .sg-timeline-line { display: none; }
  @media (max-width: 992px) {
    .sg-hero-grid { grid-template-columns: 1fr; }
    .sg-metrics-strip { grid-template-columns: repeat(2, 1fr); }
    .sg-timeline-stream { grid-template-columns: repeat(2, 1fr); gap: 40px 20px; }
    .sg-timeline-line { display: none; }
    .sg-matrix-row { grid-template-columns: 1fr; gap: 10px; }
  }

  @media (max-width: 600px) {
    .sg-metrics-strip { grid-template-columns: 1fr; }
    .sg-timeline-stream { grid-template-columns: 1fr; }
    .sg-field-grid { grid-template-columns: 1fr; }
    .sg-col-compare { grid-template-columns: 1fr; }
  }
`;
