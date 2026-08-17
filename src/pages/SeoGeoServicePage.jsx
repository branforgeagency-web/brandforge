"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Sparkles,
  Zap,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Globe,
  Database,
  Layers,
  ChevronDown,
  Phone,
  BarChart3,
  Award,
  ArrowUpRight,
  Sliders,
} from "lucide-react";
import BrandForgeAnimatedFooter from "../components/BrandForgeAnimatedFooter";

/* ───────────────────────────────────────────────────────────────────────────
   SEO & GEO SERVICE LANDING PAGE — BrandForge Digital Agency.
   Generative Engine Optimization (GEO) & Advanced Search Engine Optimization.
   ─────────────────────────────────────────────────────────────────────────── */

const metrics = [
  { value: "+340%", label: "Organic Revenue Lift", desc: "Average L12M increase across client portfolio" },
  { value: "#1 Rank", label: "AI Answer Citation", desc: "Top recommendation position on ChatGPT & Perplexity" },
  { value: "sub-200ms", label: "Core Web Vitals", desc: "100/100 Lighthouse performance benchmark" },
  { value: "10x", label: "GEO Search Dominance", desc: "Faster indexing across AI LLM Knowledge Graphs" },
];

const pillars = [
  {
    icon: Cpu,
    tag: "GEO SYSTEM",
    title: "AI Knowledge Graph Ingestion",
    description:
      "We format, structure, and inject your brand entity directly into the training sets and real-time search indices of ChatGPT, Perplexity, Claude, and Google Gemini.",
    deliverables: ["Entity Schema Graphing", "LLM Training Vectors", "AI Brand Citation Lock"],
  },
  {
    icon: Database,
    tag: "SCALE",
    title: "Programmatic Content Factory",
    description:
      "Automated, high-precision content architecture that deploys thousands of high-intent search landing pages tailored to specific buying prompts.",
    deliverables: ["Hyper-Targeted Buyer Prompts", "Zero-Bloat Page Yield", "Automated Semantic Clusters"],
  },
  {
    icon: Zap,
    tag: "SPEED",
    title: "Sub-200ms Technical Speed Engine",
    description:
      "Google penalizes slow sites. We refactor your web architecture for instantaneous page loads, zero layout shifts, and 100/100 Core Web Vitals.",
    deliverables: ["Edge CDN Caching", "Asset Compression", "JS/CSS Refactoring"],
  },
  {
    icon: BarChart3,
    tag: "ANALYTICS",
    title: "Real-Time GEO & LLM Tracker",
    description:
      "Traditional rank trackers are obsolete. We monitor your brand’s citation frequency, sentiment score, and market share inside conversational AI models.",
    deliverables: ["ChatGPT Share-of-Voice", "Perplexity Citation Matrix", "Competitor Steal Rate"],
  },
  {
    icon: Layers,
    tag: "AUTHORITY",
    title: "High-Authority Backlink Network",
    description:
      "White-hat editorial placements and digital PR outreach on tier-1 publications that build permanent domain authority and trust signals.",
    deliverables: ["Editorial Tier-1 Links", "Digital PR Wire", "Organic Trust Signals"],
  },
  {
    icon: TrendingUp,
    tag: "REVENUE",
    title: "Conversion-Rate Integrated SEO",
    description:
      "Traffic without revenue is vanity. We optimize every search landing page with high-friction removal and psychological conversion cues.",
    deliverables: ["Frictionless Funnel UX", "A/B Testing Loops", "Immediate Lead Capture"],
  },
];

const comparisonData = [
  {
    feature: "Primary Target Audience",
    traditionalSeo: "Google & Bing Crawler Bots",
    brandforgeGeo: "LLM AI Assistants (ChatGPT, Perplexity, Gemini, Claude)",
  },
  {
    feature: "Ranking Mechanism",
    traditionalSeo: "Keywords, Backlinks, Static Indexing",
    brandforgeGeo: "Semantic Vectors, Knowledge Graphs & Entity Authority",
  },
  {
    feature: "Search Output Format",
    traditionalSeo: "10 Blue Links & Ads Grid",
    brandforgeGeo: "Direct Conversational AI Answers & Recommended Citations",
  },
  {
    feature: "User Conversion Speed",
    traditionalSeo: "Multi-click browsing loop",
    brandforgeGeo: "Immediate single-prompt purchase decision",
  },
];

const faqs = [
  {
    q: "What is Generative Engine Optimization (GEO) vs Traditional SEO?",
    a: "Traditional SEO focuses on ranking web pages in Google's traditional 10-blue-links results. Generative Engine Optimization (GEO) is the next evolution: it optimizes your brand entity so AI engines like ChatGPT, Perplexity, Claude, and Google Gemini SGE synthesize and cite your brand as the #1 recommended answer when users ask conversational buying questions.",
  },
  {
    q: "How fast will we see measurable results from GEO & SEO optimization?",
    a: "Technical SEO speed upgrades and Core Web Vitals refactoring show ranking boosts within 14 to 30 days. Full AI Knowledge Graph ingestion and GEO citation dominance typically achieve market leadership within 60 to 90 days.",
  },
  {
    q: "Do you audit and fix existing Google search penalties or technical debt?",
    a: "Yes. Our senior technical SEO engineers conduct a comprehensive 120-point diagnostic audit covering crawl budgets, canonicalization, indexation bloat, mobile usability, and link profile cleanup.",
  },
  {
    q: "How do you track brand citations inside ChatGPT and Perplexity?",
    a: "We deploy proprietary AI monitoring scripts that execute daily synthetic buyer prompts across all major LLMs. We track citation presence, recommendation order, sentiment alignment, and direct URL attribution.",
  },
];

export default function SeoGeoServicePage({ onOpenModal, navigate }) {
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    }
  }, []);

  const [activeFaq, setActiveFaq] = useState(null);
  const [trafficSlider, setTrafficSlider] = useState(25000);

  // Calculated estimates
  const estimatedRevenueLift = Math.round(trafficSlider * 4.2);
  const aiCitationPercentage = Math.min(98, Math.round(45 + (trafficSlider / 50000) * 35));

  return (
    <div className="sg-page-root">
      <style>{styles}</style>

      {/* HERO SECTION WITH GLOWING RADIAL AURA */}
      <header className="sg-hero">
        <div className="sg-hero-glow" />

        <div className="sg-container">
          <motion.div
            className="sg-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Search size={14} className="sg-badge-icon" />
            <span>GENERATIVE ENGINE OPTIMIZATION & SEARCH DOMINANCE</span>
            <Sparkles size={14} className="sg-badge-sparkle" />
          </motion.div>

          <motion.h1
            className="sg-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            DOMINATE AI SEARCH ENGINES & <span>GOOGLE ORGANIC GRIDS</span>
          </motion.h1>

          <motion.p
            className="sg-hero-desc"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Position your brand as the #1 recommended answer across ChatGPT, Perplexity, Google SGE, and Claude — while capturing permanent #1 positions on traditional search engines.
          </motion.p>

          <motion.div
            className="sg-hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <button className="sg-btn primary" onClick={onOpenModal}>
              <Zap size={16} />
              <span>START FREE SEO & GEO AUDIT</span>
              <ArrowRight size={16} />
            </button>

            <button
              className="sg-btn secondary"
              onClick={() => {
                const el = document.getElementById("geo-calculator");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Sliders size={16} />
              <span>ESTIMATE REVENUE LIFT</span>
            </button>
          </motion.div>

          {/* METRICS STRIP */}
          <div className="sg-metrics-grid">
            {metrics.map((m, idx) => (
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

      {/* SEO vs GEO COMPARISON MATRIX SECTION */}
      <section className="sg-section sg-comparison-section">
        <div className="sg-container">
          <div className="sg-section-header text-center">
            <span className="sg-section-tag">PARADIGM SHIFT</span>
            <h2 className="sg-section-title">THE EVOLUTION FROM SEO TO <span>GEO</span></h2>
            <p className="sg-section-subtitle">
              Search is no longer just typing keywords into a box. Millions of buyers now ask AI assistants for direct brand recommendations.
            </p>
          </div>

          <div className="sg-matrix-grid">
            {comparisonData.map((row, idx) => (
              <div key={row.feature} className="sg-matrix-card">
                <div className="sg-matrix-feat">{row.feature}</div>
                <div className="sg-matrix-cols">
                  <div className="sg-col-trad">
                    <span className="sg-col-lbl">TRADITIONAL SEO</span>
                    <p>{row.traditionalSeo}</p>
                  </div>
                  <div className="sg-col-geo">
                    <span className="sg-col-lbl">BRANDFORGE GEO SYSTEM</span>
                    <p>{row.brandforgeGeo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 CORE PILLARS OF BRANDFORGE SEO & GEO */}
      <section className="sg-section sg-pillars-section">
        <div className="sg-container">
          <div className="sg-section-header">
            <span className="sg-section-tag">6-PILLAR ENGINE</span>
            <h2 className="sg-section-title">OUR FULL-STACK <span>SEO & GEO FORGE</span></h2>
            <p className="sg-section-subtitle">
              Every system is engineered to capture intent, build domain authority, and scale pipeline.
            </p>
          </div>

          <div className="sg-pillars-grid">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="sg-pillar-card">
                  <div className="sg-pillar-top">
                    <div className="sg-pillar-icon">
                      <Icon size={24} />
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

      {/* DYNAMIC REVENUE & AI CITATION CALCULATOR */}
      <section id="geo-calculator" className="sg-section sg-calc-section">
        <div className="sg-container">
          <div className="sg-calc-card">
            <div className="sg-calc-left">
              <span className="sg-section-tag">INTERACTIVE ESTIMATOR</span>
              <h2 className="sg-section-title">PROJECT YOUR <span>GEO GROWTH</span></h2>
              <p className="sg-calc-desc">
                Adjust your current monthly organic search traffic to project potential revenue lift and LLM citation share with BrandForge.
              </p>

              <div className="sg-slider-wrap">
                <div className="sg-slider-header">
                  <span>Current Monthly Organic Visitors:</span>
                  <strong>{trafficSlider.toLocaleString()} / mo</strong>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="200000"
                  step="5000"
                  value={trafficSlider}
                  onChange={(e) => setTrafficSlider(Number(e.target.value))}
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
                <span className="sg-res-lbl">Projected Annual Organic Revenue Lift:</span>
                <div className="sg-res-val">${estimatedRevenueLift.toLocaleString()}</div>
              </div>

              <div className="sg-res-box">
                <span className="sg-res-lbl">Estimated AI Citation Share (LLMs):</span>
                <div className="sg-res-val red">{aiCitationPercentage}% Dominance</div>
              </div>

              <button className="sg-btn primary full" onClick={onOpenModal}>
                <span>CLAIM THIS REVENUE CAPACITY</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="sg-section sg-faq-section">
        <div className="sg-container">
          <div className="sg-section-header text-center">
            <span className="sg-section-tag">ANSWERS & CLARITY</span>
            <h2 className="sg-section-title">SEO & GEO <span>FREQUENTLY ASKED QUESTIONS</span></h2>
          </div>

          <div className="sg-faq-list">
            {faqs.map((faq, idx) => (
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
            <h2>READY TO DOMINATE <span>AI & GOOGLE SEARCH?</span></h2>
            <p>Get a comprehensive 120-point SEO & GEO Audit delivered to your inbox in 24 hours.</p>
            <div className="sg-cta-actions">
              <button className="sg-btn primary" onClick={onOpenModal}>
                <Zap size={16} />
                <span>REQUEST FREE AUDIT NOW</span>
                <ArrowRight size={16} />
              </button>
              <button className="sg-btn secondary" onClick={() => navigate("/contact")}>
                <Phone size={16} />
                <span>TALK TO AN ENGINEER</span>
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
    padding: clamp(60px, 8vw, 100px) 0 clamp(40px, 6vw, 80px);
    text-align: center;
  }

  .sg-hero-glow {
    position: absolute;
    top: -10%;
    left: 50%;
    transform: translateX(-50%);
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
    font-size: clamp(32px, 5.2vw, 68px);
    font-weight: 900;
    line-height: 1.04;
    letter-spacing: -0.035em;
    text-transform: uppercase;
    color: #0A0A0C;
  }

  .sg-hero-title span {
    color: #EF4136;
    text-shadow: 0 4px 24px rgba(239, 65, 54, 0.2);
  }

  .sg-hero-desc {
    max-width: 760px;
    margin: 0 auto 36px;
    color: #475569;
    font-size: clamp(15px, 1.4vw, 18px);
    line-height: 1.6;
    font-weight: 500;
  }

  .sg-hero-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: 60px;
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
