import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Building2, TrendingUp, Quote, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    company: "NORTHLANE",
    clientName: "Maya Chen",
    role: "VP of Growth, Northlane",
    badgeText: "Enterprise Client",
    title: "Dominating AI & Search Grids",
    quote: "BrandForge transformed our search footprint completely. By capturing generative AI queries across Search & GEO, we doubled our inbound organic revenue in under 60 days.",
    metric: "+210% Organic Revenue",
    rating: 5,
    logoBg: "linear-gradient(135deg, #FF4D4D 0%, #D82626 100%)",
    theme: "red",
  },
  {
    id: 2,
    company: "ARC STUDIO",
    clientName: "Eli Brooks",
    role: "Product Director, Arc Studio",
    badgeText: "Design Tech",
    title: "Sub-Second 3D Web Platform",
    quote: "The WebGL 3D experience built by BrandForge converted visitor attention into high-ticket enterprise contracts instantly. Sub-second performance paired with jaw-dropping visuals.",
    metric: "4.8x Conversion Rate",
    rating: 5,
    logoBg: "linear-gradient(135deg, #18181B 0%, #0B0B0C 100%)",
    theme: "black",
  },
  {
    id: 3,
    company: "ONDA LABS",
    clientName: "Nia Patel",
    role: "Head of Marketing, Onda Labs",
    badgeText: "Web3 & AI",
    title: "Hyper-Scaled Paid Funnels",
    quote: "Their viral ad funnels across Meta, TikTok, and Google scaled our ROAS to 4.9x with zero wasted spend. BrandForge is the most lethal digital marketing team we have ever worked with.",
    metric: "4.9x Ad ROAS",
    rating: 5,
    logoBg: "linear-gradient(135deg, #FF4D4D 0%, #D82626 100%)",
    theme: "red",
  },
  {
    id: 4,
    company: "KINDRED GLOBAL",
    clientName: "Jordan Lee",
    role: "Brand Lead, Kindred Global",
    badgeText: "Global Commerce",
    title: "Unstoppable Creator Authority",
    quote: "BrandForge forged a powerhouse visual identity and creator strategy that commands instant market authority across screens. Our social reach expanded by 14x in one quarter.",
    metric: "14x Viral Reach",
    rating: 5,
    logoBg: "linear-gradient(135deg, #18181B 0%, #0B0B0C 100%)",
    theme: "black",
  },
  {
    id: 5,
    company: "AURA FINANCIAL",
    clientName: "Elena Rostova",
    role: "CMO, Aura Financial",
    badgeText: "FinTech Scaleup",
    title: "Unit Economics & CRO Lift",
    quote: "The checkout friction removal and A/B funnel testing delivered a 128% conversion lift. BrandForge turned our ad spend into a predictable revenue generation machine.",
    metric: "+128% Funnel Lift",
    rating: 5,
    logoBg: "linear-gradient(135deg, #FF4D4D 0%, #D82626 100%)",
    theme: "red",
  },
];

export default function KexsioCustomerReviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const current = REVIEWS[activeIndex];

  return (
    <section className="kexsio-reviews-section">
      <style>{styles}</style>

      {/* SECTION CONTAINER */}
      <div className="kexsio-container">
        
        {/* HEADER */}
        <div className="kexsio-header">
          <div className="kexsio-pill-badge">
            <ShieldCheck size={14} className="badge-icon" />
            <span>ENTERPRISE CASE STUDIES</span>
          </div>
          <h2 className="kexsio-title">
            PROVEN IMPACT. <br />
            <span className="text-gradient-red">CLIENT SUCCESS STORIES.</span>
          </h2>
          <p className="kexsio-subtitle">
            See how industry leaders partner with BrandForge to capture generative search grids and scale ROAS.
          </p>
        </div>

        {/* ROTATING REVIEW SHOWCASE CAROUSEL */}
        <div className="kexsio-showcase-stage">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              className={`kexsio-featured-card card-theme-${current.theme}`}
              initial={{ opacity: 0, y: 25, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -25, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* TOP BRAND HERO BADGE */}
              <div className="featured-card-top">
                <div className="brand-hero-logo" style={{ background: current.logoBg }}>
                  <Building2 size={24} className="logo-icon" />
                  <span className="brand-hero-name">{current.company}</span>
                </div>

                <div className="featured-rating">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={16} className="star-filled" />
                  ))}
                </div>
              </div>

              {/* QUOTE CONTENT */}
              <div className="featured-quote-area">
                <Quote size={32} className="quote-icon" />
                <h3 className="featured-story-title">{current.title}</h3>
                <p className="featured-quote-text">“{current.quote}”</p>
              </div>

              {/* FOOTER METRICS & CLIENT AUTHOR */}
              <div className="featured-card-footer">
                <div className="client-author-info">
                  <div className="author-name">{current.clientName}</div>
                  <div className="author-role">{current.role}</div>
                </div>

                <div className="metric-pill-highlight">
                  <TrendingUp size={14} />
                  <span>{current.metric}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CAROUSEL NAVIGATION DOTS */}
          <div className="kexsio-dots-nav">
            {REVIEWS.map((review, idx) => (
              <button
                key={review.id}
                className={`dot-btn ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ENTERPRISE LOGO BAR */}
        <div className="kexsio-client-logos-bar">
          {REVIEWS.map((review, idx) => (
            <div
              key={review.id}
              className={`client-logo-item ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
            >
              <Building2 size={16} />
              <span>{review.company}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

const styles = `
.kexsio-reviews-section {
  position: relative;
  width: 100%;
  padding: 100px 24px;
  background-color: #060509;
  color: #FFFFFF;
  font-family: 'Plus Jakarta Sans', sans-serif;
  overflow: hidden;
}

.kexsio-container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.kexsio-header {
  text-align: center;
  margin-bottom: 48px;
}

.kexsio-pill-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 77, 77, 0.12);
  border: 1px solid rgba(255, 77, 77, 0.35);
  color: #FF4D4D;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 9999px;
  margin-bottom: 18px;
  letter-spacing: 0.08em;
}

.badge-icon {
  color: #FF4D4D;
}

.kexsio-title {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin: 0 0 16px;
}

.text-gradient-red {
  background: linear-gradient(135deg, #FF4D4D 0%, #FF6B00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.kexsio-subtitle {
  color: #94A3B8;
  font-size: clamp(0.95rem, 1.2vw, 1.1rem);
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.6;
}

.kexsio-showcase-stage {
  width: 100%;
  max-width: 860px;
  margin-bottom: 48px;
  position: relative;
}

.kexsio-featured-card {
  border-radius: 28px;
  padding: 40px;
  min-height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7);
  position: relative;
  overflow: hidden;
}

.card-theme-red {
  background: linear-gradient(135deg, #FF4D4D 0%, #D82626 100%);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.card-theme-black {
  background: linear-gradient(135deg, #18181B 0%, #0B0B0C 100%);
  border: 1px solid rgba(255, 77, 77, 0.35);
}

.featured-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand-hero-logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 18px;
  border-radius: 9999px;
  color: #FFFFFF;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}

.brand-hero-name {
  font-family: 'Outfit', sans-serif;
  font-size: 1.05rem;
  font-weight: 900;
  letter-spacing: 0.05em;
}

.featured-rating {
  display: flex;
  gap: 4px;

  .star-filled {
    fill: #FFB800;
    color: #FFB800;
  }
}

.featured-quote-area {
  margin: 24px 0;
  position: relative;
}

.quote-icon {
  color: rgba(255, 255, 255, 0.25);
  margin-bottom: 8px;
}

.featured-story-title {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(1.3rem, 2vw, 1.7rem);
  font-weight: 800;
  margin-bottom: 10px;
  color: #FFFFFF;
}

.featured-quote-text {
  font-size: clamp(1rem, 1.2vw, 1.15rem);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
}

.featured-card-footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 20px;
}

.author-name {
  font-weight: 800;
  font-size: 1.05rem;
  color: #FFFFFF;
}

.author-role {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
}

.metric-pill-highlight {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  font-weight: 800;
  padding: 6px 14px;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.kexsio-dots-nav {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 24px;
}

.dot-btn {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot-btn.active {
  width: 28px;
  border-radius: 9999px;
  background: #FF4D4D;
  box-shadow: 0 0 10px #FF4D4D;
}

.kexsio-client-logos-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(16px, 3vw, 36px);
  width: 100%;
}

.client-logo-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: rgba(20, 20, 22, 0.6);
  border: 1px solid rgba(255, 77, 77, 0.2);
  border-radius: 12px;
  color: #94A3B8;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;
}

.client-logo-item:hover, .client-logo-item.active {
  color: #FFFFFF;
  border-color: #FF4D4D;
  background: rgba(255, 77, 77, 0.15);
  transform: translateY(-3px);
}
`;
