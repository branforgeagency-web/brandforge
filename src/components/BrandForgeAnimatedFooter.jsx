"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Zap, Sparkles, Send } from "lucide-react";
import Particles from "./Particles";

const InstagramIcon = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const TwitterIcon = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const YoutubeIcon = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/>
    <polygon points="10 15 15 12 10 9 10 15"/>
  </svg>
);

const FacebookIcon = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const WhatsappIcon = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
    <path d="M14 16c-1.5 0-3-1-4.5-2.5S7 10.5 7 9c0-.6.3-1.1.7-1.4.3-.3.7-.4 1.1-.4.3 0 .6.1.8.4l1.2 1.8c.2.3.2.7 0 1-.2.3-.5.5-.8.8 0 0 1 2 3 3 .3-.3.5-.6.8-.8.3-.2.7-.2 1 0l1.8 1.2c.3.2.4.5.4.8 0 .4-.1.8-.4 1.1-.3.4-.8.7-1.4.7z"/>
  </svg>
);

const MARQUEE_ITEMS = [
  "SEARCH & GEO SUPREMACY",
  "SUB-SECOND 3D WEBGL",
  "PAID MEDIA ROAS SCALING",
  "VIRAL CREATOR NETWORKS",
  "CRO REVENUE ENGINE",
  "GLOBAL BRAND FORGING",
];

// ULTRA-SMOOTH CUBIC BEZIER EASING CURVE
const SMOOTH_EASE = [0.16, 1, 0.3, 1];

export default function BrandForgeAnimatedFooter({ onOpenModal }) {
  const containerRef = useRef(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Framer Motion scroll progress tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const bigTextScale = useTransform(scrollYProgress, [0, 1], [0.7, 1.05]);
  const bigTextOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.2, 0.7, 1]);
  const gridPerspectiveY = useTransform(scrollYProgress, [0, 1], [60, 0]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer ref={containerRef} className="bf-animated-footer">
      <style>{styles}</style>

      {/* OGL WEBGL PARTICLES BACKGROUND */}
      <Particles
        particleColors={["#EF4136", "#FFFFFF", "#FFB800"]}
        particleCount={250}
        particleSpread={12}
        speed={0.15}
        particleBaseSize={110}
        moveParticlesOnHover={true}
        particleHoverFactor={1.5}
        alphaParticles={true}
        disableRotation={false}
        pixelRatio={1}
      />

      {/* FLYING PARALLAX SVG BIRDS LAYER */}
      <div className="bf-birds-parallax-layer" aria-hidden="true">
        <svg className="bf-svg-bird bird-1" viewBox="0 0 100 100">
          <path d="M 0 50 Q 25 20, 50 50 Q 75 20, 100 50 Q 75 35, 50 55 Q 25 35, 0 50 Z" fill="#EF4136" opacity="0.6" />
        </svg>
        <svg className="bf-svg-bird bird-2" viewBox="0 0 100 100">
          <path d="M 0 50 Q 25 20, 50 50 Q 75 20, 100 50 Q 75 35, 50 55 Q 25 35, 0 50 Z" fill="#EF4136" opacity="0.4" />
        </svg>
        <svg className="bf-svg-bird bird-3" viewBox="0 0 100 100">
          <path d="M 0 50 Q 25 20, 50 50 Q 75 20, 100 50 Q 75 35, 50 55 Q 25 35, 0 50 Z" fill="#FFB800" opacity="0.5" />
        </svg>
      </div>

      {/* PERSPECTIVE 3D MATRIX GRID FLOOR */}
      <motion.div
        className="bf-footer-grid-floor"
        style={{ transform: `rotateX(60deg) translateY(${gridPerspectiveY}px)` }}
      />

      {/* DUAL INFINITE MARQUEE BAND WITH LIQUID SMOOTH SLIDE ANIMATION */}
      <motion.div
        className="bf-footer-marquee-wrap"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.85, ease: SMOOTH_EASE }}
      >
        <div className="bf-marquee-track track-left">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="bf-marquee-item">
              <Zap size={18} className="marquee-icon" />
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      {/* MAIN FOOTER CONTENT CONTAINER */}
      <div className="bf-footer-content-container">
        
        {/* HUGE SCROLL-REVEAL CALL TO ACTION WITH ULTRA-SMOOTH BEZIER ANIMATIONS */}
        <div className="bf-footer-cta-block">
          <motion.h2
            className="cta-main-heading"
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.15, ease: SMOOTH_EASE }}
          >
            READY TO FORGE YOUR <br />
            <span className="text-glow-red">DIGITAL EMPIRE?</span>
          </motion.h2>

          <motion.p
            className="cta-description"
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.25, ease: SMOOTH_EASE }}
          >
            Capture generative search grid supremacy, scale high-converting ad funnels, and build sub-second 3D web experiences.
          </motion.p>

          <motion.button
            className="cta-launch-btn"
            onClick={onOpenModal}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.35, ease: SMOOTH_EASE }}
          >
            <span>START YOUR TRANSFORMATION</span>
            <div className="btn-icon-wrap">
              <ArrowUpRight size={18} />
            </div>
          </motion.button>
        </div>

        {/* MIDDLE 4-COLUMN FOOTER LINKS GRID WITH FLUID STAGGERED ENTRANCES */}
        <div className="bf-footer-links-grid">
          
          {/* COL 1: BRAND IDENTITY & NEWSLETTER */}
          <motion.div
            className="footer-col col-brand"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: SMOOTH_EASE }}
          >
            <div className="footer-brand-logo">
              <span className="logo-dot" />
              <span className="logo-text">BRANDFORGE</span>
            </div>

            {/* NEWSLETTER INPUT */}
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your work email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-submit-btn" aria-label="Subscribe">
                <Send size={15} />
              </button>
            </form>
            {subscribed && (
              <span className="newsletter-success">✓ You're on the growth list!</span>
            )}
          </motion.div>

          {/* COL 2: SERVICES */}
          <motion.div
            className="footer-col"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: SMOOTH_EASE }}
          >
            <h4 className="col-title">SERVICES</h4>
            <ul className="footer-link-list">
              <li><a href="#/services/seo-geo">Search & GEO Supremacy</a></li>
              <li><a href="#/services/web-foundry">3D Web Development</a></li>
              <li><a href="#/services/paid-media">Paid Media Scaling</a></li>
              <li><a href="#/services/viral-social">Viral Social Network</a></li>
              <li><a href="#/services/cro-revenue">CRO Revenue Engine</a></li>
            </ul>
          </motion.div>

          {/* COL 3: CAPABILITIES */}
          <motion.div
            className="footer-col"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3, ease: SMOOTH_EASE }}
          >
            <h4 className="col-title">CAPABILITIES</h4>
            <ul className="footer-link-list">
              <li><a href="#/services/brand-anvil">Brand Growth Architecture</a></li>
              <li><a href="#/services/visual-id">Visual Identity Forge</a></li>
              <li><a href="#/services/commercial-video">Commercial Video Production</a></li>
              <li><a href="#/services/inbox-edge">Inbox Retention Loops</a></li>
              <li><a href="#/services/reputation-shield">Reputation Shield PR</a></li>
            </ul>
          </motion.div>

          {/* COL 4: CONNECT & SOCIAL MEDIA */}
          <motion.div
            className="footer-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4, ease: SMOOTH_EASE }}
          >
            <h4 className="col-title">CONNECT</h4>
            
            {/* SOCIAL MEDIA ICON BUTTONS */}
            <div className="footer-social-icons-grid">
              <a href="https://www.instagram.com/the_brandforge_digital?igsi=YjR1N3prdzJocTdx" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://wa.me/919384576852" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="WhatsApp">
                <WhatsappIcon />
              </a>
              <a href="mailto:brandforgedigitalmarketing@gmail.com" className="social-icon-btn" aria-label="Email Us">
                <Send size={18} />
              </a>
            </div>

            <ul className="footer-link-list" style={{ marginTop: "16px" }}>
              <li><a href="https://www.instagram.com/the_brandforge_digital?igsi=YjR1N3prdzJocTdx" target="_blank" rel="noreferrer">INSTAGRAM ↗</a></li>
              <li><a href="https://wa.me/919384576852" target="_blank" rel="noreferrer">WHATSAPP ↗</a></li>
              <li><a href="mailto:brandforgedigitalmarketing@gmail.com">EMAIL US ↗</a></li>
              <li><a href="tel:+919384576852">CALL NOW ↗</a></li>
            </ul>
          </motion.div>

        </div>

        {/* GIANT SCROLL-EXPANDING BRANDFORGE LOGO IMAGE WITH SMOOTH REVEAL */}
        <motion.img
          src="/brandforge-logo.png"
          alt="BrandForge Logo"
          className="bf-giant-footer-logo"
          initial={{ opacity: 0, scale: 0.65, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.0, delay: 0.2, ease: SMOOTH_EASE }}
        />



      </div>
    </footer>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@600;800&display=swap');

.bf-animated-footer {
  position: relative;
  width: 100%;
  background-color: #030305;
  color: #FFFFFF;
  font-family: 'Plus Jakarta Sans', sans-serif;
  overflow: hidden;
  padding-top: 60px;
}

/* FLYING PARALLAX SVG BIRDS */
.bf-birds-parallax-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2;
  overflow: hidden;
}

.bf-svg-bird {
  position: absolute;
  width: 38px;
  height: 38px;
  animation: birdFly 16s linear infinite;
  will-change: transform;
}

.bird-1 {
  top: 22%;
  animation-duration: 18s;
}

.bird-2 {
  top: 38%;
  animation-duration: 24s;
  animation-delay: -8s;
  width: 28px;
  height: 28px;
}

.bird-3 {
  top: 55%;
  animation-duration: 20s;
  animation-delay: -4s;
  width: 32px;
  height: 32px;
}

@keyframes birdFly {
  0% { transform: translate3d(-100px, 0, 0) scaleX(1); }
  50% { transform: translate3d(50vw, -25px, 0) scaleX(1); }
  100% { transform: translate3d(105vw, -10px, 0) scaleX(1); }
}

/* 3D PERSPECTIVE FLOOR GRID */
.bf-footer-grid-floor {
  position: absolute;
  bottom: -200px;
  left: -50%;
  width: 200%;
  height: 600px;
  background-image: 
    linear-gradient(rgba(239, 65, 54, 0.12) 1px, transparent 1px),
    linear-gradient(90deg, rgba(239, 65, 54, 0.12) 1px, transparent 1px);
  background-size: 60px 60px;
  transform-origin: center bottom;
  pointer-events: none;
  z-index: 0;
  opacity: 0.6;
  will-change: transform;
}

/* DUAL INFINITE MARQUEE BAND */
.bf-footer-marquee-wrap {
  width: 100%;
  overflow: hidden;
  background: transparent;
  border: none;
  padding: 16px 0;
  position: relative;
  z-index: 5;
  will-change: transform, opacity;
}

.bf-marquee-track {
  display: flex;
  align-items: center;
  gap: 40px;
  white-space: nowrap;
  animation: marqueeScroll 24s linear infinite;
  will-change: transform;
}

@keyframes marqueeScroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
}

.bf-marquee-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Outfit', 'Inter', sans-serif;
  font-size: clamp(1.1rem, 1.8vw, 1.4rem);
  font-weight: 900;
  letter-spacing: 0.14em;
  color: #FFFFFF;
  text-transform: uppercase;
}

.marquee-icon {
  color: #EF4136;
}

/* CONTENT CONTAINER */
.bf-footer-content-container {
  position: relative;
  z-index: 10;
  max-width: 1320px;
  margin: 0 auto;
  padding: 80px 24px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* CTA BLOCK */
.bf-footer-cta-block {
  text-align: center;
  max-width: 860px;
  margin-bottom: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(239, 65, 54, 0.12);
  border: 1px solid rgba(239, 65, 54, 0.35);
  color: #EF4136;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 800;
  padding: 6px 16px;
  border-radius: 9999px;
  margin-bottom: 20px;
  letter-spacing: 0.1em;
  will-change: transform, opacity;
}

.cta-main-heading {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(2.4rem, 5.2vw, 4.5rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.035em;
  margin: 0 0 20px;
  will-change: transform, opacity;
}

.text-glow-red {
  color: #EF4136;
  text-shadow: none;
}

.cta-description {
  color: #94A3B8;
  font-size: clamp(1rem, 1.3vw, 1.2rem);
  line-height: 1.6;
  max-width: 640px;
  margin: 0 0 36px;
  will-change: transform, opacity;
}

.cta-launch-btn {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  background: linear-gradient(135deg, #EF4136 0%, #BF342B 100%);
  color: #FFFFFF;
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-family: 'Outfit', sans-serif;
  font-size: 1rem;
  font-weight: 900;
  letter-spacing: 0.05em;
  padding: 12px 14px 12px 28px;
  border-radius: 9999px;
  cursor: pointer;
  box-shadow: none;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
  will-change: transform, opacity;
}

.cta-launch-btn:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: none;
  border-color: #FFFFFF;
}

.btn-icon-wrap {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #FFFFFF;
  color: #EF4136;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.cta-launch-btn:hover .btn-icon-wrap {
  transform: rotate(45deg);
}

/* 4-COLUMN FOOTER LINKS GRID */
.bf-footer-links-grid {
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: clamp(32px, 5vw, 64px);
  padding-bottom: 70px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-col {
  will-change: transform, opacity;
}

.footer-col.col-brand {
  display: flex;
  flex-direction: column;
}

.footer-brand-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.logo-dot {
  width: 10px;
  height: 10px;
  background: #EF4136;
  border-radius: 50%;
  box-shadow: none;
}

.logo-text {
  font-family: 'Outfit', sans-serif;
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: #FFFFFF;
}

.col-desc {
  color: #94A3B8;
  font-size: 0.92rem;
  line-height: 1.6;
  margin-bottom: 24px;
  max-width: 380px;
}

.newsletter-form {
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 380px;
}

.newsletter-input {
  flex-grow: 1;
  background: rgba(20, 20, 22, 0.8);
  border: 1px solid rgba(239, 65, 54, 0.3);
  border-radius: 12px;
  padding: 12px 16px;
  color: #FFFFFF;
  font-family: var(--font-body);
  font-size: 0.88rem;
  outline: none;
  transition: border-color 0.2s ease;
}

.newsletter-input:focus {
  border-color: #EF4136;
  box-shadow: none;
}

.newsletter-submit-btn {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #EF4136;
  color: #FFFFFF;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease;
}

.newsletter-submit-btn:hover {
  background: #BF342B;
  transform: scale(1.05);
}

.newsletter-success {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  color: #4ADE80;
  margin-top: 8px;
}

.col-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  color: #EF4136;
  margin-bottom: 20px;
}

/* SOCIAL MEDIA ICON PILLS */
.footer-social-icons-grid {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.social-icon-btn {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: #94A3B8;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.social-icon-btn:hover {
  background: #EF4136;
  border-color: #EF4136;
  color: #FFFFFF;
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(239, 65, 54, 0.4);
}

.footer-link-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-link-list a {
  color: #94A3B8;
  text-decoration: none;
  font-size: 0.92rem;
  font-weight: 500;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), color 0.2s ease;
}

.footer-link-list a:hover {
  color: #FFFFFF;
  transform: translateX(6px);
  display: inline-block;
}

/* BRANDFORGE FOOTER LOGO IMAGE */
.bf-giant-footer-logo {
  width: 100%;
  max-width: 420px;
  height: auto;
  margin: 40px auto 25px;
  display: block;
  user-select: none;
  pointer-events: none;
  object-fit: contain;
  opacity: 0.95;
  will-change: transform, opacity;
}

/* BOTTOM BAR */
.bf-footer-bottom-bar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-top: 24px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: #64748B;
  flex-wrap: wrap;
  will-change: transform, opacity;
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
}

.pulse-green-dot {
  width: 8px;
  height: 8px;
  background: #22C55E;
  border-radius: 50%;
  box-shadow: none;
  animation: pulseDot 2s infinite;
}

@keyframes pulseDot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.85); }
}

.quote-text {
  color: #94A3B8;
  font-style: italic;
}

.copyright-text {
  letter-spacing: 0.05em;
}

/* RESPONSIVE MEDIA QUERIES */
@media (max-width: 1024px) {
  .bf-footer-links-grid {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
}

@media (max-width: 640px) {
  .bf-footer-links-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .bf-footer-bottom-bar {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 12px;
  }
}
`;
