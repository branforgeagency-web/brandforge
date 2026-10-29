"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { serviceUrl } from "../data/servicesData";
import {
  Search,
  Megaphone,
  Box,
  Rocket,
  Users,
  PenTool,
  Mail,
  Target,
  Palette,
  Video,
  Gauge,
  ShieldCheck,
  ArrowUpRight,
  X,
} from "lucide-react";

export const ALL_12_SERVICES = [
  {
    slug: "seo-geo",
    number: "01",
    name: "SEO & GEO Supremacy",
    category: "SEARCH DOMINANCE",
    icon: Search,
  },
  {
    slug: "paid-media",
    number: "02",
    name: "Paid Media Scaling",
    category: "PERFORMANCE ADS",
    icon: Megaphone,
  },
  {
    slug: "web-foundry",
    number: "03",
    name: "Website Development",
    category: "SUB-SECOND TECH",
    icon: Box,
  },
  {
    slug: "viral-social",
    number: "04",
    name: "Social Media Dominance",
    category: "ORGANIC REACH",
    icon: Rocket,
  },
  {
    slug: "influencer-network",
    number: "05",
    name: "Influencer Marketing",
    category: "CREATOR NETWORK",
    icon: Users,
  },
  {
    slug: "content-smithy",
    number: "06",
    name: "Content Marketing",
    category: "AUTHORITY STORY",
    icon: PenTool,
  },
  {
    slug: "inbox-edge",
    number: "07",
    name: "Email Marketing",
    category: "RETENTION FUNNELS",
    icon: Mail,
  },
  {
    slug: "brand-anvil",
    number: "08",
    name: "Brand Positioning",
    category: "GROWTH ARCHITECTURE",
    icon: Target,
  },
  {
    slug: "visual-id",
    number: "09",
    name: "Brand Identity Design",
    category: "IDENTITY FORGE",
    icon: Palette,
  },
  {
    slug: "commercial-video",
    number: "10",
    name: "Commercial Video",
    category: "MOTION & REELS",
    icon: Video,
  },
  {
    slug: "cro-revenue",
    number: "11",
    name: "CRO Revenue Lift",
    category: "CONVERSION LIFT",
    icon: Gauge,
  },
  {
    slug: "reputation-shield",
    number: "12",
    name: "Reputation Management",
    category: "BRAND SHIELD",
    icon: ShieldCheck,
  },
];

export default function ServicesMegaMenu({ isOpen, onClose, onSelectService, onOpenConsultation }) {
  // Close on ESC key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background body scroll when open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="bf-mega-overlay" role="dialog" aria-modal="true" aria-label="BrandForge 12 Services">
          <style>{servicesMegaStyles}</style>

          {/* BACKDROP BLUR SHIELD */}
          <motion.div
            className="bf-mega-backdrop"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          />

          {/* FLOATING SERVICES PANEL */}
          <motion.div
            className="bf-mega-panel"
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* TOP HEADER BAR */}
            <div className="bf-mega-header">
              <h2 className="bf-mega-title">Explore Specialized Growth Practices</h2>

              <button
                type="button"
                className="bf-mega-close-btn"
                onClick={onClose}
                aria-label="Close services layout"
              >
                <X size={18} />
                <span className="bf-mega-esc-hint">ESC</span>
              </button>
            </div>

            {/* 12 SERVICES GRID (4 CARDS IN A ROW) */}
            <div className="bf-mega-grid">
              {ALL_12_SERVICES.map((srv) => {
                const IconComponent = srv.icon;
                const targetUrl = serviceUrl(srv.slug);

                return (
                  <a
                    key={srv.slug}
                    href={targetUrl}
                    className="bf-mega-card"
                    onClick={(e) => {
                      if (!e.ctrlKey && !e.metaKey) {
                        e.preventDefault();
                        onSelectService(targetUrl);
                      }
                    }}
                  >
                    {/* LEFT SIDE: ICON BADGE */}
                    <div className="bf-mega-card-logo">
                      <div className="bf-mega-card-icon-box">
                        <IconComponent size={40} strokeWidth={2} className="bf-mega-card-icon" />
                      </div>
                      <span className="bf-mega-card-number">{srv.number}</span>
                    </div>

                    {/* RIGHT SIDE: SERVICE NAME & DETAILS */}
                    <div className="bf-mega-card-body">
                      <div className="bf-mega-card-top-row">
                        <span className="bf-mega-card-category">{srv.category}</span>
                        <ArrowUpRight size={16} className="bf-mega-card-arrow" />
                      </div>
                      <h3 className="bf-mega-card-title">{srv.name}</h3>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

const servicesMegaStyles = /* css */ `
  .bf-mega-overlay {
    position: fixed;
    inset: 0;
    z-index: 120;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: clamp(110px, 14vh, 145px) 16px 40px;
    pointer-events: auto;
    overflow-y: auto;
    box-sizing: border-box;
  }

  .bf-mega-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    z-index: 1;
  }

  .bf-mega-panel {
    position: relative;
    z-index: 2;
    width: min(1360px, 96vw);
    background: #000000;
    border: none !important;
    outline: none !important;
    border-radius: 28px;
    padding: clamp(22px, 2.6vw, 36px);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.95);
    box-sizing: border-box;
    overflow: hidden;
    margin-top: 18px;
  }

  /* HEADER */
  .bf-mega-header {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: clamp(18px, 2.2vw, 26px);
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .bf-mega-title {
    font-family: "General Sans", "Outfit", -apple-system, sans-serif;
    font-size: clamp(1.3rem, 2.2vw, 1.9rem);
    font-weight: 800;
    color: #FAFAFC;
    letter-spacing: -0.03em;
    line-height: 1.15;
    margin: 0;
    text-align: center;
  }

  .bf-mega-close-btn {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.14);
    color: #FAFAFC;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: "Outfit", sans-serif;
    font-weight: 600;
    font-size: 0.8rem;
    flex-shrink: 0;
  }

  .bf-mega-close-btn:hover {
    background: rgba(255, 24, 1, 0.18);
    border-color: rgba(255, 24, 1, 0.5);
    color: #FF1801;
    transform: translateY(-50%) scale(1.04);
  }

  .bf-mega-esc-hint {
    font-size: 0.68rem;
    font-family: ui-monospace, monospace;
    opacity: 0.6;
    background: rgba(255, 255, 255, 0.1);
    padding: 2px 6px;
    border-radius: 4px;
  }

  /* 12 SERVICES GRID: 4 IN A ROW */
  .bf-mega-grid {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }

  @media (max-width: 1140px) {
    .bf-mega-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 820px) {
    .bf-mega-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
  }

  @media (max-width: 520px) {
    .bf-mega-grid {
      grid-template-columns: 1fr;
    }
  }

  /* CARD STRUCTURE */
  .bf-mega-card {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 12px 14px;
    border-radius: 14px;
    background: transparent !important;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    position: relative;
    transition: all 0.2s ease;
    box-sizing: border-box;
    min-width: 0;
  }

  .bf-mega-card:hover {
    background: rgba(255, 255, 255, 0.04) !important;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    transform: translateY(-1px);
  }

  /* LEFT SIDE: LOGO / ICON CONTAINER */
  .bf-mega-card-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    flex-shrink: 0;
  }

  .bf-mega-card-icon-box {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent !important;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    color: #FF1801;
    transition: all 0.2s ease;
  }

  .bf-mega-card:hover .bf-mega-card-icon-box {
    background: transparent !important;
    color: #FFFFFF;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    transform: scale(1.08);
  }

  .bf-mega-card-icon {
    width: 40px;
    height: 40px;
    transition: transform 0.22s ease;
  }

  .bf-mega-card:hover .bf-mega-card-icon {
    transform: scale(1.08);
  }

  .bf-mega-card-number {
    font-family: ui-monospace, SFMono-Regular, monospace;
    font-size: 0.7rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.45);
    letter-spacing: 0.08em;
  }

  .bf-mega-card:hover .bf-mega-card-number {
    color: #FF7B6B;
  }

  /* RIGHT SIDE: SERVICE DETAILS */
  .bf-mega-card-body {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    gap: 3px;
    overflow: hidden;
  }

  .bf-mega-card-top-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .bf-mega-card-category {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: #8E8E93;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .bf-mega-card:hover .bf-mega-card-category {
    color: #FF7B6B;
  }

  .bf-mega-card-arrow {
    color: rgba(255, 255, 255, 0.35);
    transition: all 0.2s ease;
    flex-shrink: 0;
  }

  .bf-mega-card:hover .bf-mega-card-arrow {
    color: #FF1801;
    transform: translate(2px, -2px);
  }

  .bf-mega-card-title {
    font-family: "Outfit", sans-serif;
    font-size: 1.05rem;
    font-weight: 700;
    color: #FAFAFC;
    letter-spacing: -0.02em;
    line-height: 1.25;
    margin: 2px 0 0 0;
    white-space: normal;
    word-break: normal;
    overflow-wrap: break-word;
    transition: color 0.2s ease;
  }

  .bf-mega-card:hover .bf-mega-card-title {
    color: #FFFFFF;
  }
`;
