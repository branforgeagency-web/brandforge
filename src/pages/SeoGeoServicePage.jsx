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
    icon: Search,
    tag: "CORE SEO",
    title: "Search Engine Optimization (SEO)",
    description:
      "As a full-service SEO company in Coimbatore, we handle every layer of organic search visibility to dominate high-intent keywords and drive consistent revenue.",
    deliverables: [
      "Technical SEO — site speed, crawlability, indexing, Core Web Vitals, mobile optimization",
      "On-page SEO — keyword-optimized titles, meta descriptions, header structure, internal linking",
      "Keyword research — identifying high-intent local and industry keywords your customers actually search",
      "Content strategy & optimization — content built around real search intent, not keyword stuffing",
      "Local SEO — Google Business Profile optimization, NAP consistency, local citations for Coimbatore-based searches",
      "Link building — earning authoritative backlinks that build long-term domain trust",
      "SEO reporting — transparent, monthly ranking and traffic reports"
    ],
  },
  {
    icon: Cpu,
    tag: "GEO SYSTEM",
    title: "GEO Services (Generative Engine Optimization)",
    description:
      "Search isn't limited to Google anymore. Our GEO Services help your brand get discovered and cited inside AI-generated answers across ChatGPT, Gemini, Perplexity, and AI Overviews. Think of GEO as the natural evolution of SEO — the goal is still visibility, but the destination has expanded from search result pages to AI-generated answers.",
    deliverables: [
      "Structuring content so AI search engines can accurately extract and cite your information",
      "Building topical authority around your core services and expertise",
      "Implementing structured data and schema markup that helps AI models understand your business",
      "Creating clear, quotable, fact-based content that AI engines prefer to reference",
      "Tracking your brand's visibility across AI Overviews, ChatGPT, and other generative search tools",
      "Aligning GEO Services with traditional SEO so both channels reinforce each other, rather than competing for resources"
    ],
  },
  {
    icon: Globe,
    tag: "LOCAL DOMINANCE",
    title: "Local SEO & Google Business Profile Management",
    description:
      "For Coimbatore-based businesses, local search visibility is often the fastest path to real customers. We optimize your local presence for maximum foot traffic, phone inquiries, and local high-intent conversions.",
    deliverables: [
      "Google Business Profile listings, categories, and photos",
      "Review generation and reputation management",
      "Local citation consistency across directories",
      "Location-specific landing pages for multi-branch businesses"
    ],
  },
  {
    icon: PenTool,
    tag: "HUMAN-FIRST CONTENT",
    title: "Content Marketing",
    description:
      "Search engines and AI engines both reward genuinely useful content. We create content that reads naturally for your audience while satisfying the technical structure search engines and AI models look for — no robotic, keyword-stuffed writing.",
    deliverables: [
      "Audience-First Editorial Copywriting",
      "Semantic Keyword & Entity Optimization",
      "Technical Content Architecture",
      "Zero Keyword-Stuffing Writing Guarantee"
    ],
  },
  {
    icon: BarChart3,
    tag: "TRANSPARENT ROADMAP",
    title: "SEO Strategy & Reporting",
    description:
      "Every engagement includes a clear roadmap and monthly performance reporting, so you always know what's working, what's next, and why.",
    deliverables: [
      "Transparent Monthly Ranking & Traffic Reports",
      "High-Intent Keyword Movement Tracking",
      "Quarterly Strategic Execution Roadmaps",
      "Conversion Attribution & Lead Analytics"
    ],
  },
];

const differentiators = [
  {
    title: "SEO and GEO Under One Roof",
    description:
      "Most agencies in Coimbatore are still purely Google-focused; we're already optimizing for the AI search shift across ChatGPT, Gemini, and Perplexity.",
    icon: Zap,
  },
  {
    title: "Local Market Understanding",
    description:
      "We know how Coimbatore audiences search and behave online — from manufacturing and healthcare to education institutions and D2C brands.",
    icon: Globe,
  },
  {
    title: "Transparent Process",
    description:
      "No black-box reporting, no vague promises. Transparent monthly progress reports and direct strategic alignment.",
    icon: ShieldCheck,
  },
  {
    title: "Content Built for Humans First",
    description:
      "No robotic, keyword-stuffed writing. Genuine, authoritative content that provides real value — because that's still what ranks best on Google and AI engines.",
    icon: Users,
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
    q: "What does an SEO company in Coimbatore do?",
    a: "An SEO company improves your website's visibility on search engines through technical optimization, content strategy, local SEO, and authority building, helping the right customers find your business organically.",
  },
  {
    q: "What is GEO (Generative Engine Optimization) and why does it matter now?",
    a: "GEO is the practice of optimizing content so AI search tools like ChatGPT, Gemini, and Google AI Overviews can find, understand, and cite your business in their answers. As more search behavior shifts to AI assistants, GEO is becoming as essential as traditional SEO.",
  },
  {
    q: "How is GEO different from traditional SEO?",
    a: "Traditional SEO targets ranking positions on search engine results pages. GEO targets being cited or referenced inside AI-generated answers. The strategies overlap but require different content structuring — we run both together for maximum visibility.",
  },
  {
    q: "How long does SEO take to show results in Coimbatore's competitive market?",
    a: "Most businesses see measurable ranking and traffic movement within 3-4 months, with stronger, compounding results over 6-12 months, depending on competition level and starting domain authority.",
  },
  {
    q: "Do you only work with Coimbatore-based businesses?",
    a: "We're based in Coimbatore and specialize in local SEO here, but we also work with clients across Tamil Nadu and pan-India.",
  },
  {
    q: "Can content alone get my website to rank on page 1?",
    a: "Strong content is essential but works alongside technical SEO health and backlink authority. As your SEO company, we make sure all three are aligned — content doesn't operate in isolation.",
  },
];

export default function SeoGeoServicePage({ onOpenModal, navigate }) {
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    }
    document.title = "SEO Company in Coimbatore | SEO & GEO Services – Brand Forge";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', "Brand Forge is a trusted SEO company in Coimbatore offering SEO, GEO (Generative Engine Optimization), and local search services to help businesses rank higher on Google and AI search engines.");
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
      <header
        className="sg-hero has-banner-bg"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, rgba(5, 5, 8, 0.88) 60%, rgba(0, 0, 0, 0.98) 100%), url(/banner-seo-geo-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="sg-hero-glow" />

        <div className="sg-container">
          <motion.div
            className="sg-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Search size={14} className="sg-badge-icon" />
            <span>SEO Company in Coimbatore | SEO & GEO Services by Brand Forge</span>
            <Sparkles size={14} className="sg-badge-sparkle" />
          </motion.div>

          <motion.h1
            className="sg-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Best SEO Company in Coimbatore for <span>Google & AI Search Rankings</span>
          </motion.h1>

          <motion.div
            className="sg-hero-desc"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="sg-hero-desc-para">
              If you're searching for an SEO company in Coimbatore that actually understands how people search today, you're in the right place. Search has split into two paths — Google's traditional results and AI-generated answers from tools like ChatGPT, Gemini, and Perplexity. Brand Forge is a Coimbatore-based SEO agency built to win both.
            </p>
            <p className="sg-hero-desc-para">
              We work with businesses across Coimbatore — from local service providers to education institutions and D2C brands — to improve organic visibility through proven SEO strategy combined with GEO Services (Generative Engine Optimization), so you show up wherever your customers are actually searching.
            </p>
          </motion.div>

          <motion.div
            className="sg-hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <button className="sg-btn primary" onClick={onOpenModal}>
              <Zap size={16} />
              <span>Get a Free SEO Audit →</span>
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

      {/* WHY BUSINESSES IN COIMBATORE CHOOSE BRAND FORGE */}
      <section className="sg-section sg-why-section">
        <div className="sg-container">
          <div className="sg-why-grid">
            
            {/* LEFT: HEADING, DESCRIPTION & LEAD-IN */}
            <motion.div
              className="sg-why-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <span className="sg-section-tag">WHY CHOOSE BRAND FORGE</span>
              <h2 className="sg-why-title">Why Businesses in Coimbatore Choose Brand Forge as Their SEO Company</h2>
              <p className="sg-why-desc">
                Coimbatore's digital market is growing fast, and so is the competition for search visibility. As a local SEO company in Coimbatore, we combine on-ground market knowledge with data-driven SEO practices to help businesses rank for the keywords that actually bring in customers — not just traffic.
              </p>
              <p className="sg-why-leadin">Our approach covers the full picture of modern search visibility:</p>
            </motion.div>

            {/* RIGHT: FEATURE CARDS / POINTS */}
            <div className="sg-why-points-grid">
              {[
                "Ranking on Google's organic search results",
                "Appearing in Google's Local Pack and Maps for “near me” searches",
                "Getting cited by AI search engines and AI Overviews through GEO Services",
                "Building long-term organic authority, not short-lived ranking spikes",
              ].map((point, idx) => (
                <motion.div
                  key={idx}
                  className="sg-why-point-card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="sg-why-point-icon">
                    <CheckCircle2 size={18} className="check-icon" />
                  </div>
                  <div className="sg-why-point-content">
                    <p>{point}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

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

      {/* 5 CORE PILLARS OF OUR SEO & GEO SERVICES IN COIMBATORE */}
      <section className="sg-section sg-pillars-section">
        <div className="sg-container">
          <div className="sg-section-header text-center">
            <span className="sg-section-tag">OUR FULL SERVICE SPECTRUM</span>
            <h2 className="sg-section-title">Our SEO & GEO Services in <span>Coimbatore</span></h2>
            <p className="sg-section-subtitle">
              From foundational technical architecture and local Google Maps optimization to generative AI citations — we engineer complete search authority.
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
                  {p.callout && (
                    <div style={{ margin: "10px 0 14px", padding: "10px 14px", borderRadius: "10px", background: "rgba(239, 65, 54, 0.08)", borderLeft: "3px solid #EF4136", color: "#0A0A0C", fontSize: "13px", fontStyle: "italic", lineHeight: 1.5 }}>
                      "{p.callout}"
                    </div>
                  )}

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

      {/* WHAT MAKES OUR SEO COMPANY DIFFERENT */}
      <section className="sg-section sg-diff-section">
        <div className="sg-container">
          <div className="sg-section-header text-center">
            <span className="sg-section-tag">THE BRANDFORGE ADVANTAGE</span>
            <h2 className="sg-section-title">What Makes Our SEO Company <span>Different</span></h2>
            <p className="sg-section-subtitle">
              Why forward-thinking Coimbatore brands trust Brand Forge over traditional digital agencies.
            </p>
          </div>

          <div className="sg-diff-grid">
            {differentiators.map((item, idx) => {
              const DiffIcon = item.icon || Sparkles;
              return (
                <div key={item.title} className="sg-diff-card">
                  <div className="sg-diff-icon-wrap">
                    <DiffIcon size={22} className="diff-lucide-icon" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
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
            <h2>Get Found on Google and AI Search — <span>Starting Today</span></h2>
            <p>Get a free audit of where your website currently stands, both on traditional search and emerging AI search engines.</p>
            <div className="sg-cta-actions">
              <button className="sg-btn primary" onClick={onOpenModal}>
                <Zap size={16} />
                <span>Book Your Free Consultation →</span>
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

  .sg-hero-desc-para {
    margin: 0 0 16px;
  }

  .sg-hero-desc-para:last-child {
    margin-bottom: 0;
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

  /* WHY BUSINESSES IN COIMBATORE CHOOSE BRAND FORGE */
  .sg-why-section {
    position: relative;
    border-top: 1px solid rgba(15, 23, 42, 0.08);
    border-bottom: 1px solid rgba(15, 23, 42, 0.08);
    background: linear-gradient(180deg, rgba(239, 65, 54, 0.03) 0%, rgba(248, 250, 252, 0.8) 100%);
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
    color: #0A0A0C;
    margin: 0 0 18px;
    letter-spacing: -0.01em;
  }

  .sg-why-desc {
    font-size: clamp(15px, 1.5vw, 17px);
    line-height: 1.7;
    color: #475569;
    margin: 0 0 20px;
    font-weight: 500;
  }

  .sg-why-leadin {
    font-size: 15px;
    font-weight: 700;
    color: #0A0A0C;
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
    background: #FFFFFF;
    border: 1px solid rgba(15, 23, 42, 0.08);
    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .sg-why-point-card:hover {
    border-color: rgba(239, 65, 54, 0.4);
    transform: translateX(6px);
    box-shadow: 0 12px 30px rgba(239, 65, 54, 0.1);
  }

  .sg-why-point-icon {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    background: rgba(239, 65, 54, 0.1);
    border: 1px solid rgba(239, 65, 54, 0.25);
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
    color: #0A0A0C;
    margin: 0;
  }

  @media (max-width: 920px) {
    .sg-why-grid {
      grid-template-columns: 1fr;
      gap: 32px;
    }
  }

  /* WHAT MAKES OUR SEO COMPANY DIFFERENT */
  .sg-diff-section {
    position: relative;
    border-top: 1px solid rgba(15, 23, 42, 0.08);
    background: #FFFFFF;
  }

  .sg-diff-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .sg-diff-card {
    padding: 32px 28px;
    border-radius: 20px;
    background: #F8F9FA;
    border: 1px solid rgba(15, 23, 42, 0.08);
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.03);
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .sg-diff-card:hover {
    border-color: rgba(239, 65, 54, 0.4);
    transform: translateY(-5px);
    box-shadow: 0 16px 40px rgba(239, 65, 54, 0.12);
  }

  .sg-diff-icon-wrap {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: rgba(239, 65, 54, 0.1);
    border: 1px solid rgba(239, 65, 54, 0.25);
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
    color: #0A0A0C;
    margin: 0;
  }

  .sg-diff-card p {
    font-size: 14.5px;
    line-height: 1.65;
    color: #475569;
    margin: 0;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .sg-diff-grid {
      grid-template-columns: 1fr;
    }
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
