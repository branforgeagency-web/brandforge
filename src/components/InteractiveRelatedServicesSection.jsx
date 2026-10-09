"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { servicesData, serviceUrl } from "../data/servicesData";
import KexsioCanvasBackground from "./KexsioCanvasBackground";

function RelatedCard({ k, srv, rIdx, navigate }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 140, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 140, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  const synergyScores = ["98%", "96%", "94%", "97%"];
  const synergy = synergyScores[rIdx % synergyScores.length];

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="sg-related-card-3d"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, delay: rIdx * 0.08 }}
    >
      <a
        href={serviceUrl(k)}
        className={`sg-related-card ${hovered ? "is-hovered" : ""}`}
        onClick={(e) => {
          if (!e.ctrlKey && !e.metaKey && navigate) {
            e.preventDefault();
            navigate(serviceUrl(k));
          }
        }}
      >
        <div className="sg-related-top-row">
          <div className="sg-related-num-badge">{srv.number}</div>
        </div>

        <h4>{srv.eyebrow}</h4>
        <p>
          {typeof srv.subtitle === "string"
            ? srv.subtitle.slice(0, 85) + "..."
            : srv.subtitle?.[0]?.slice(0, 85) + "..."}
        </p>

        <div className="sg-related-link-text">
          <span>EXPLORE FORGE</span>
          <motion.div
            animate={{ x: hovered ? 5 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <ArrowRight size={14} />
          </motion.div>
        </div>
      </a>
    </motion.div>
  );
}

export default function InteractiveRelatedServicesSection({
  currentSlug,
  currentEyebrow,
  navigate,
}) {
  const relatedList = Object.entries(servicesData)
    .filter(([k]) => k !== currentSlug)
    .slice(0, 4);

  return (
    <section className="sg-section sg-related-services-section">
      <style>{relatedStyles}</style>
      <KexsioCanvasBackground theme="light" opacity={0.65} />

      <div className="sg-container">
        {/* HEADER */}
        <motion.div
          className="sg-section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="sg-section-tag">COMPLEMENTARY FORGES</span>
          <h2 className="sg-section-title">RELATED <span>GROWTH SYSTEMS</span></h2>
          <p className="sg-section-subtitle">
            Scale your brand faster by connecting {currentEyebrow || "SEO & GEO"} with our specialized revenue engines.
          </p>
        </motion.div>

        {/* 4 CARDS GRID */}
        <div className="sg-related-grid">
          {relatedList.map(([k, srv], rIdx) => (
            <RelatedCard
              key={k}
              k={k}
              srv={srv}
              rIdx={rIdx}
              navigate={navigate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const relatedStyles = `
  .sg-related-services-section {
    background: #FFFFFF;
    border-top: 1px solid #E5E7EB;
    border-bottom: 1px solid #E5E7EB;
    padding: clamp(70px, 9vw, 110px) 0;
    position: relative;
    overflow: hidden;
  }

  .sg-related-services-section .sg-section-title {
    color: #0A0A0C;
  }

  .sg-related-services-section .sg-section-subtitle {
    color: #4B5563;
  }

  .sg-related-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }

  .sg-related-card-3d {
    perspective: 1000px;
  }

  .sg-related-card {
    background: #FAFAFC;
    border: 1px solid #E5E7EB;
    border-radius: 20px;
    padding: 28px 24px 22px;
    text-decoration: none;
    color: #0A0A0C;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
    min-height: 250px;
  }

  .sg-related-card:hover,
  .sg-related-card.is-hovered {
    border-color: #EF4136;
    background: #FFFFFF;
    box-shadow: 0 14px 35px rgba(239, 65, 54, 0.1), 0 0 0 1px rgba(239, 65, 54, 0.15);
  }

  .sg-related-top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .sg-related-num-badge {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 800;
    color: #EF4136;
    background: rgba(239, 65, 54, 0.08);
    padding: 3px 8px;
    border-radius: 6px;
    border: 1px solid rgba(239, 65, 54, 0.2);
  }

  .sg-related-synergy-badge {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.65rem;
    font-weight: 800;
    color: #10B981;
    background: rgba(16, 185, 129, 0.08);
    padding: 2px 7px;
    border-radius: 6px;
    border: 1px solid rgba(16, 185, 129, 0.2);
  }

  .sg-related-card h4 {
    font-family: "Outfit", sans-serif;
    font-size: 1.18rem;
    font-weight: 800;
    color: #0A0A0C;
    margin: 0 0 8px;
    letter-spacing: -0.01em;
  }

  .sg-related-card p {
    font-size: 0.86rem;
    line-height: 1.55;
    color: #4B5563;
    margin: 0 0 20px;
    flex: 1;
  }

  .sg-related-link-text {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: "Outfit", sans-serif;
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 0.05em;
    color: #0A0A0C;
    padding-top: 14px;
    border-top: 1px solid #F3F4F6;
    transition: color 0.2s ease;
  }

  .sg-related-card:hover .sg-related-link-text {
    color: #EF4136;
  }

  @media (max-width: 1024px) {
    .sg-related-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 640px) {
    .sg-related-grid { grid-template-columns: 1fr; }
  }
`;
