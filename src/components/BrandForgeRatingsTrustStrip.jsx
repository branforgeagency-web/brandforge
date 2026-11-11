"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { getStorageUrl } from "../utils/storageAsset";

/* ───────────────────────────────────────────────────────────────────────────
   BRANDFORGE CLIENT RATINGS & TRUST STRIP — Full-Width Edge-to-Edge Banner
   ─────────────────────────────────────────────────────────────────────────── */

const CLIENT_REVIEWS = [
  {
    id: "sonic",
    name: "Sonic Prints",
    logo: getStorageUrl("/client-sonicprints.png"),
    scale: 1.45,
    tag: "Brand & Packaging Scale",
    rating: 5.0,
  },
  {
    id: "thoughtflows",
    name: "ThoughtFlows",
    logo: getStorageUrl("/client-thoughtflows.png"),
    scale: 1.38,
    tag: "No.1 Medical Coding Academy",
    rating: 5.0,
  },
  {
    id: "talentera",
    name: "Talentera",
    logo: getStorageUrl("/client-talentera.png"),
    scale: 1.05,
    tag: "Era of Talent Platform",
    rating: 5.0,
  },
  {
    id: "thoughtspace",
    name: "ThoughtSpace",
    logo: getStorageUrl("/client-thoughtspace.png"),
    scale: 1.45,
    tag: "Enterprise Workspace Network",
    rating: 5.0,
  },
];

export default function BrandForgeRatingsTrustStrip() {
  return (
    <section className="bf-trust-strip-root">
      <style>{styles}</style>

      <div className="bf-trust-container">
        <motion.div
          className="bf-trust-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* SECTION TITLE */}
          <div className="bf-trust-header">
            <h3 className="bf-trust-title">
              TRUSTED BY CATEGORY LEADERS
            </h3>
          </div>

          {/* 4-COLUMN FULL-WIDTH RATINGS STAGE */}
          <div className="bf-trust-stage">
            <div className="bf-trust-grid">
              {CLIENT_REVIEWS.map((client, idx) => (
                <React.Fragment key={client.name}>
                  {idx > 0 && <div className="bf-trust-divider" />}

                  <div className="bf-trust-col">
                    {/* CLIENT LOGO */}
                    <div className="bf-trust-logo-wrap">
                      <img
                        src={client.logo}
                        alt={client.name}
                        loading="lazy"
                        decoding="async"
                        className="bf-client-img"
                        style={{ transform: `scale(${client.scale})` }}
                      />
                    </div>

                    {/* 5 GOLD STAR RATING ROW */}
                    <div className="bf-stars-row">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="bf-star-icon" />
                      ))}
                      <span className="bf-rating-num">{client.rating.toFixed(1)}</span>
                    </div>

                    {/* SUB-CAPTION */}
                    <span className="bf-client-subtag">{client.tag}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const styles = `
  .bf-trust-strip-root {
    position: relative;
    width: 100%;
    padding: 0;
    background: #000000;
    z-index: 5;
  }

  .bf-trust-container {
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
  }

  .bf-trust-card {
    width: 100%;
    background: #000000;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    border-left: none;
    border-right: none;
    border-radius: 0;
    padding: clamp(40px, 5vw, 58px) clamp(24px, 5vw, 72px);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .bf-trust-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 20%;
    right: 20%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 24, 1, 0.6), transparent);
  }

  .bf-trust-header {
    margin-bottom: 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .bf-trust-title {
    font-family: "Outfit", sans-serif;
    font-size: clamp(20px, 2.5vw, 26px);
    font-weight: 900;
    letter-spacing: 0.12em;
    color: #FFFFFF;
    margin: 0;
    text-transform: uppercase;
  }

  .bf-trust-stage {
    position: relative;
    width: 100%;
    max-width: 1440px;
    margin-top: 6px;
  }

  /* LOGOS & METRICS GRID */
  .bf-trust-grid {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
    position: relative;
    z-index: 3;
  }

  .bf-trust-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding: 10px 14px;
    transition: transform 0.3s ease;
  }

  .bf-trust-col:hover {
    transform: translateY(-3px);
  }

  .bf-trust-logo-wrap {
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .bf-client-img {
    height: clamp(44px, 4.8vw, 62px);
    max-width: 220px;
    width: auto;
    object-fit: contain;
    filter: brightness(0) invert(1) opacity(0.92) drop-shadow(0 2px 10px rgba(255, 255, 255, 0.2));
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .bf-trust-col:hover .bf-client-img {
    filter: brightness(0) invert(1) opacity(1) drop-shadow(0 4px 18px rgba(255, 24, 1, 0.7));
  }

  .bf-trust-divider {
    width: 1px;
    height: 64px;
    background: rgba(255, 255, 255, 0.12);
    flex-shrink: 0;
  }

  .bf-stars-row {
    display: flex;
    align-items: center;
    gap: 4px;
    background: transparent;
    border: none;
    padding: 0;
  }

  .bf-star-icon {
    color: #FFB800;
    fill: #FFB800;
  }

  .bf-rating-num {
    font-family: "JetBrains Mono", monospace;
    font-size: 11px;
    font-weight: 800;
    color: #FFB800;
    margin-left: 4px;
    letter-spacing: 0.02em;
  }

  .bf-client-subtag {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 11.5px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.65);
    letter-spacing: 0.01em;
  }

  @media (max-width: 900px) {
    .bf-trust-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px 20px;
    }
    .bf-trust-divider {
      display: none;
    }
  }

  @media (max-width: 520px) {
    .bf-trust-grid {
      grid-template-columns: 1fr;
      gap: 26px;
    }
  }
`;
