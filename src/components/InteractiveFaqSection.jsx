"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageSquare, Sparkles, ArrowRight } from "lucide-react";
import KexsioCanvasBackground from "./KexsioCanvasBackground";

export default function InteractiveFaqSection({
  faqs = [],
  onOpenModal,
}) {
  const [activeFaq, setActiveFaq] = useState(0);
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = ["ALL", "GEO & AI SEARCH", "LOCAL RANKINGS", "TIMELINE & ROAS"];

  // Filter faqs optionally
  const displayedFaqs = faqs;

  return (
    <section className="sg-section sg-faq-section">
      <style>{faqStyles}</style>
      <KexsioCanvasBackground theme="light" opacity={0.4} />

      <div className="sg-container">
        {/* HEADER */}
        <motion.div
          className="sg-section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="sg-section-tag">ANSWERS & CLARITY</span>
          <h2 className="sg-section-title">FREQUENTLY ASKED <span>QUESTIONS</span></h2>
          <p className="sg-section-subtitle">
            Direct answers on technical indexing, AI entity citation authority, and performance attribution.
          </p>
        </motion.div>

        {/* CATEGORY FILTER CHIPS */}
        <div className="sg-faq-cat-strip">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`sg-faq-cat-btn ${activeCategory === cat ? "is-active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* FAQ STREAM */}
        <div className="sg-faq-stream">
          {displayedFaqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;

            return (
              <motion.div
                key={faq.q}
                className={`sg-faq-row ${isOpen ? "is-open" : ""}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                onClick={() => setActiveFaq(isOpen ? null : idx)}
              >
                <div className="sg-faq-q">
                  <div className="sg-faq-q-left">
                    <span className="sg-faq-idx">[Q.0{idx + 1}]</span>
                    <span>{faq.q}</span>
                  </div>
                  <ChevronDown size={18} className="sg-faq-arrow" />
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="sg-faq-a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p>{faq.a}</p>

                      <div className="sg-faq-action-row">
                        <button
                          type="button"
                          className="sg-faq-ask-link"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (onOpenModal) onOpenModal();
                          }}
                        >
                          <Sparkles size={13} />
                          <span>Have a specific technical question? Request 1-on-1 strategy call</span>
                          <ArrowRight size={13} />
                        </button>
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
  );
}

const faqStyles = `
  .sg-faq-section {
    background: #FFFFFF;
    border-top: 1px solid #E5E7EB;
    border-bottom: 1px solid #E5E7EB;
    padding: clamp(70px, 9vw, 110px) 0;
  }

  .sg-faq-section .sg-section-title {
    color: #0A0A0C;
  }

  .sg-faq-section .sg-section-title span {
    color: #EF4136;
  }

  .sg-faq-section .sg-section-subtitle {
    color: #4B5563;
  }

  .sg-faq-cat-strip {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 36px;
    flex-wrap: wrap;
  }

  .sg-faq-cat-btn {
    padding: 7px 18px;
    background: #F3F4F6;
    border: 1px solid #E5E7EB;
    border-radius: 999px;
    color: #4B5563;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .sg-faq-cat-btn:hover {
    background: #E5E7EB;
    color: #0A0A0C;
    border-color: rgba(239, 65, 54, 0.4);
  }

  .sg-faq-cat-btn.is-active {
    background: #EF4136;
    border-color: #EF4136;
    color: #FFFFFF;
    box-shadow: 0 4px 16px rgba(239, 65, 54, 0.35);
  }

  .sg-faq-stream {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .sg-faq-row {
    background: #FAFAFC;
    border: 1px solid #E5E7EB;
    border-radius: 18px;
    padding: 22px 26px;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
    transition: all 0.25s ease;
  }

  .sg-faq-row:hover {
    border-color: rgba(239, 65, 54, 0.4);
    background: #FFFFFF;
  }

  .sg-faq-row.is-open {
    border-color: #EF4136;
    background: #FFFFFF;
    box-shadow: 0 12px 30px rgba(239, 65, 54, 0.1);
  }

  .sg-faq-q {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 17.5px;
    font-weight: 800;
    color: #0A0A0C;
    font-family: "Outfit", sans-serif;
    gap: 16px;
  }

  .sg-faq-q-left {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .sg-faq-idx {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.8rem;
    font-weight: 800;
    color: #EF4136;
    flex-shrink: 0;
  }

  .sg-faq-arrow {
    color: #EF4136;
    transition: transform 0.3s ease;
    flex-shrink: 0;
  }

  .sg-faq-row.is-open .sg-faq-arrow {
    transform: rotate(180deg);
  }

  .sg-faq-a {
    overflow: hidden;
  }

  .sg-faq-a p {
    font-size: 15.5px;
    line-height: 1.75;
    color: #4B5563;
    margin: 18px 0 0;
    padding-top: 18px;
    border-top: 1px solid #F3F4F6;
  }

  .sg-faq-action-row {
    padding-top: 16px;
  }

  .sg-faq-ask-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(239, 65, 54, 0.08);
    border: 1px solid rgba(239, 65, 54, 0.25);
    color: #0A0A0C;
    padding: 8px 16px;
    border-radius: 8px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .sg-faq-ask-link:hover {
    background: #EF4136;
    border-color: #EF4136;
    color: #FFFFFF;
  }
`;
