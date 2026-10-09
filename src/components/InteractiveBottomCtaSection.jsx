"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, ArrowRight, Phone, MessageSquare, ShieldCheck, Clock } from "lucide-react";
import KexsioCanvasBackground from "./KexsioCanvasBackground";

export default function InteractiveBottomCtaSection({
  bottomCta,
  eyebrow = "SEO & GEO DOMINANCE",
  onOpenModal,
}) {
  return (
    <section className="sg-bottom-cta">
      <style>{ctaStyles}</style>
      <KexsioCanvasBackground theme="light" opacity={0.4} />

      <div className="sg-container">
        <motion.div
          className="sg-cta-box-cockpit"
          initial={{ opacity: 0, y: 45, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated Ambient Radar Arc In Backdrop */}
          <div className="cta-radar-ambient" aria-hidden="true">
            <div className="cta-radar-ring cta-ring-1" />
            <div className="cta-radar-ring cta-ring-2" />
            <div className="cta-radar-glow" />
          </div>

          <h2>
            {bottomCta?.title ? (
              bottomCta.title.includes("—") ? (
                <>{bottomCta.title.split("—")[0]} — <span>{bottomCta.title.split("—")[1]}</span></>
              ) : (
                bottomCta.title
              )
            ) : (
              <>READY TO FORGE <span>{eyebrow}?</span></>
            )}
          </h2>

          <p>
            {bottomCta?.subtitle || "Get a comprehensive 120-point strategy audit & competitor breakdown delivered to your inbox within 24 hours."}
          </p>

          {/* DUAL ACTION BUTTONS */}
          <div className="sg-cta-actions">
            <button className="sg-btn-liquid-red" onClick={onOpenModal}>
              <Zap size={18} />
              <span>{bottomCta?.buttonText || "CLAIM YOUR FREE STRATEGY AUDIT"}</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* TRUST BADGES ROW */}
          <div className="sg-cta-hotline-strip">
            <div className="hotline-item">
              <Clock size={14} className="hotline-icon" />
              <span>24-Hour Turnaround</span>
            </div>
            <div className="hotline-sep">•</div>
            <div className="hotline-item">
              <ShieldCheck size={14} className="hotline-icon" />
              <span>100% Confidential NDA</span>
            </div>
            <div className="hotline-sep">•</div>
            <div className="hotline-item">
              <Zap size={14} className="hotline-icon" />
              <span>Zero Obligation Consultation</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const ctaStyles = `
  .sg-bottom-cta {
    background: #FAFAFC;
    border-top: 1px solid #E5E7EB;
    padding: clamp(80px, 10vw, 120px) 0;
    position: relative;
    z-index: 2;
    overflow: hidden;
  }

  .sg-cta-box-cockpit {
    position: relative;
    background: radial-gradient(circle at 50% 0%, #151014 0%, #0A0A0C 100%);
    border: 1px solid rgba(239, 65, 54, 0.4);
    border-radius: 32px;
    padding: clamp(50px, 7vw, 84px) clamp(24px, 5vw, 64px);
    text-align: center;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 0 0 45px rgba(239, 65, 54, 0.15);
    overflow: hidden;
  }

  .cta-radar-ambient {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
  }

  .cta-radar-ring {
    position: absolute;
    top: -50%;
    left: 50%;
    transform: translateX(-50%);
    border: 1px dashed rgba(239, 65, 54, 0.15);
    border-radius: 50%;
  }
  .cta-ring-1 { width: 600px; height: 600px; }
  .cta-ring-2 { width: 900px; height: 900px; }

  .cta-radar-glow {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    height: 300px;
    background: radial-gradient(circle, rgba(239, 65, 54, 0.15) 0%, transparent 70%);
    filter: blur(40px);
  }

  .sg-cta-urgency-pill {
    position: relative;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(239, 65, 54, 0.12);
    border: 1px solid rgba(239, 65, 54, 0.35);
    padding: 6px 16px;
    border-radius: 999px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 800;
    color: #FFFFFF;
    letter-spacing: 0.05em;
    margin-bottom: 24px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  }

  .urgency-beacon {
    width: 6px;
    height: 6px;
    background: #00FF87;
    border-radius: 50%;
    box-shadow: 0 0 8px #00FF87;
  }

  .sg-cta-box-cockpit h2 {
    position: relative;
    z-index: 2;
    font-family: "Outfit", sans-serif;
    font-size: clamp(32px, 4.5vw, 56px);
    font-weight: 900;
    color: #FFFFFF;
    margin: 0 0 18px;
    letter-spacing: -0.02em;
    line-height: 1.15;
  }

  .sg-cta-box-cockpit h2 span {
    color: #EF4136;
  }

  .sg-cta-box-cockpit p {
    position: relative;
    z-index: 2;
    font-size: clamp(16px, 1.4vw, 19px);
    color: rgba(255, 255, 255, 0.85);
    max-width: 640px;
    margin: 0 auto 38px;
    line-height: 1.65;
  }

  .sg-cta-actions {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-bottom: 34px;
  }

  .sg-btn-liquid-red {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 18px 40px;
    border-radius: 16px;
    background: #EF4136;
    color: #FFFFFF;
    font-family: "Outfit", sans-serif;
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    border: none;
    cursor: pointer;
    box-shadow: 0 12px 30px rgba(239, 65, 54, 0.45);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .sg-btn-liquid-red:hover {
    background: #D2042D;
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 18px 45px rgba(239, 65, 54, 0.65), 0 0 25px rgba(239, 65, 54, 0.4);
  }

  .sg-cta-hotline-strip {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.74rem;
    color: rgba(255, 255, 255, 0.65);
  }

  .hotline-item {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .hotline-icon {
    color: #EF4136;
  }

  .hotline-sep {
    color: rgba(255, 255, 255, 0.2);
  }
`;
