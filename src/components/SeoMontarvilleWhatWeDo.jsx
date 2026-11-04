"use client";

import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function SeoMontarvilleWhatWeDo({ whatWeDo, onOpenModal }) {
  if (!whatWeDo) return null;

  const items = whatWeDo.items || [];

  return (
    <section className="smw-section-root" id="what-we-do">
      <style>{`
        .smw-section-root {
          position: relative;
          background: #000000;
          color: #FAFAFC;
          padding: clamp(80px, 9vw, 130px) 0 clamp(70px, 8vw, 120px);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          overflow: hidden;
        }

        .smw-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 clamp(20px, 4vw, 40px);
          position: relative;
          z-index: 2;
        }

        .smw-header {
          text-align: center;
          max-width: 860px;
          margin: 0 auto clamp(48px, 6vw, 72px);
        }

        .smw-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 999px;
          background: rgba(255, 24, 1, 0.08);
          border: 1px solid rgba(255, 24, 1, 0.25);
          color: #FF1801;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .smw-title {
          font-family: "Outfit", -apple-system, sans-serif;
          font-size: clamp(32px, 4.6vw, 56px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.035em;
          color: #FAFAFC;
          margin: 0 0 16px;
        }

        .smw-subtitle {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(15px, 1.15vw, 17.5px);
          line-height: 1.6;
          color: #94A3B8;
          margin: 0;
        }

        .smw-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: clamp(16px, 2vw, 24px);
        }

        .smw-card {
          background: #0B0B0E;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: clamp(22px, 2.5vw, 28px);
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: border-color 0.25s ease, transform 0.25s ease;
          position: relative;
        }

        .smw-card:hover {
          border-color: rgba(255, 24, 1, 0.4);
          transform: translateY(-3px);
        }

        .smw-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .smw-card-num {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.72rem;
          font-weight: 700;
          color: #FF1801;
          letter-spacing: 0.12em;
        }

        .smw-card-check {
          color: #FF1801;
          opacity: 0.85;
        }

        .smw-card-title {
          font-family: "Outfit", -apple-system, sans-serif;
          font-size: clamp(17px, 1.35vw, 20px);
          font-weight: 700;
          color: #FAFAFC;
          line-height: 1.25;
          margin: 0;
        }

        .smw-card-desc {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(13.5px, 0.95vw, 14.5px);
          line-height: 1.55;
          color: #94A3B8;
          margin: 0;
        }

        .smw-outro-box {
          margin-top: clamp(36px, 5vw, 56px);
          padding: 22px 28px;
          background: rgba(255, 24, 1, 0.05);
          border-left: 3px solid #FF1801;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        .smw-outro-text {
          font-size: clamp(14.5px, 1.1vw, 16.5px);
          font-weight: 600;
          color: #FAFAFC;
          margin: 0;
          line-height: 1.5;
        }

        .smw-outro-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          border-radius: 9999px;
          background: #FF1801;
          color: #FFFFFF;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
          flex-shrink: 0;
        }

        .smw-outro-btn:hover {
          background: #D61400;
          transform: translateY(-2px);
        }
      `}</style>

      <div className="smw-container">
        <div className="smw-header">
          <span className="smw-tag">{whatWeDo.tag || "MONTHLY DELIVERABLES"}</span>
          <h2 className="smw-title">{whatWeDo.title}</h2>
          {whatWeDo.subtitle && <p className="smw-subtitle">{whatWeDo.subtitle}</p>}
        </div>

        <div className="smw-grid">
          {items.map((item, idx) => (
            <div key={item.title || idx} className="smw-card">
              <div className="smw-card-top">
                <span className="smw-card-num">0{idx + 1}</span>
                <CheckCircle2 size={16} className="smw-card-check" />
              </div>
              <h3 className="smw-card-title">{item.title}</h3>
              <p className="smw-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {whatWeDo.conclusion && (
          <div className="smw-outro-box">
            <p className="smw-outro-text">{whatWeDo.conclusion}</p>
            <button
              type="button"
              className="smw-outro-btn"
              onClick={() => onOpenModal && onOpenModal("Get a Free Strategy Call")}
            >
              <span>Get a Free Strategy Call</span>
              <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
