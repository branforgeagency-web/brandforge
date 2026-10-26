"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight, MessageSquare } from "lucide-react";



export default function SeoMontarvilleFaq({ faqs = [], onOpenModal }) {
  const [activeFaq, setActiveFaq] = useState(0);

  const defaultFaqs = [
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
      a: "We're based in Coimbatore and specialize in local SEO here, but we also work with clients across Tamil Nadu, Bangalore, and pan-India.",
    },
    {
      q: "Can content alone get my website to rank on page 1?",
      a: "Strong content is essential but works alongside technical SEO health and backlink authority. As your SEO company, we make sure all three are aligned — content doesn't operate in isolation.",
    },
  ];

  const items = (faqs && faqs.length > 0) ? faqs : defaultFaqs;

  return (
    <section className="smf-faq-section" id="faq-knowledge-base">
      <style>{faqComponentStyles}</style>

      <div className="smf-container">
        {/* Header */}
        <div className="smf-header">

          <h2 className="smf-title">
            Frequently Asked <span className="title-red">Questions</span>
          </h2>

          <p className="smf-subtitle">
            Direct, technical clarity on indexing mechanics, AI generative citations, and commercial performance attribution.
          </p>
        </div>

        {/* Montarville Architectural Hairline FAQ Stream */}
        <div className="smf-faq-stream">
          {items.map((item, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={item.q || idx}
                className={`smf-faq-card ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="smf-faq-btn"
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                >
                  <div className="smf-btn-left">
                    <span className="smf-faq-num">0{idx + 1} / 0{items.length}</span>
                    <h3 className="smf-faq-question">{item.q}</h3>
                  </div>

                  <div className={`smf-glyph-wrap ${isOpen ? "is-rotated" : ""}`}>
                    <Plus size={18} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="smf-faq-answer-wrap"
                    >
                      <div className="smf-answer-inner">
                        <span className="smf-answer-bar" />
                        <p className="smf-answer-text">{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Sajan Lumina Bottom Ask Row */}
        <div className="smf-bottom-ask-row">
          <div className="smf-ask-left">
            <MessageSquare size={16} className="text-red" />
            <span>Have a specific architectural or technical question not covered here?</span>
          </div>
          <button
            type="button"
            className="smf-ask-btn"
            onClick={() => onOpenModal && onOpenModal("Ask Technical Question")}
          >
            <span>CONSULT LEAD ARCHITECT</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </section>
  );
}

const faqComponentStyles = `
  .smf-faq-section {
    position: relative;
    background: #000000;
    padding: clamp(70px, 9vw, 110px) 0 clamp(60px, 8vw, 100px);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    overflow: hidden;
  }

  .smf-container {
    max-width: 1040px;
    margin: 0 auto;
    padding: 0 clamp(20px, 4vw, 40px);
    position: relative;
    z-index: 2;
  }

  .smf-header {
    text-align: center;
    max-width: 760px;
    margin: 0 auto 50px;
  }

  .smf-metalabel {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    color: #FF1801;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .smf-star {
    color: #FF1801;
    animation: smf-star-spin 16s linear infinite;
  }

  @keyframes smf-star-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .smf-title {
    font-family: "Outfit", sans-serif;
    font-size: clamp(32px, 4.2vw, 52px);
    font-weight: 900;
    line-height: 1.15;
    letter-spacing: -0.025em;
    color: #FAFAFC;
    margin: 0 0 16px;
  }

  .title-red {
    color: #FF1801;
    background: linear-gradient(90deg, #FF1801 0%, #FF5A4E 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .smf-subtitle {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 16.5px;
    line-height: 1.65;
    color: #94A3B8;
    margin: 0;
  }

  /* Montarville Architectural Stream */
  .smf-faq-stream {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 40px;
  }

  .smf-faq-card {
    background: #0E0E14;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 18px;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .smf-faq-card:hover {
    border-color: rgba(255, 24, 1, 0.4);
    background: #111118;
  }

  .smf-faq-card.is-open {
    border-color: #FF1801;
    background: #12121A;
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 24, 1, 0.08);
  }

  .smf-faq-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 22px 26px;
    background: transparent;
    border: none;
    cursor: pointer;
    text-align: left;
    color: inherit;
    gap: 18px;
  }

  .smf-btn-left {
    display: flex;
    align-items: center;
    gap: 18px;
    flex: 1;
  }

  .smf-faq-num {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.82rem;
    font-weight: 800;
    color: rgba(255, 255, 255, 0.35);
    flex-shrink: 0;
  }

  .smf-faq-card.is-open .smf-faq-num {
    color: #FF1801;
  }

  .smf-faq-question {
    font-family: "Outfit", sans-serif;
    font-size: 1.15rem;
    font-weight: 800;
    color: #FAFAFC;
    margin: 0;
    line-height: 1.35;
  }

  .smf-glyph-wrap {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #14141C;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #FF1801;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease;
  }

  .smf-glyph-wrap.is-rotated {
    transform: rotate(45deg);
    background: #FF1801;
    color: #FFFFFF;
  }

  .smf-faq-answer-wrap {
    overflow: hidden;
  }

  .smf-answer-inner {
    display: flex;
    gap: 16px;
    padding: 0 26px 26px 56px;
  }

  .smf-answer-bar {
    width: 2px;
    background: #FF1801;
    border-radius: 1px;
    flex-shrink: 0;
  }

  .smf-answer-text {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 0.95rem;
    line-height: 1.7;
    color: #CBD5E1;
    margin: 0;
  }

  /* Bottom Ask Row */
  .smf-bottom-ask-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 24px;
    border-radius: 16px;
    background: #0E0E14;
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  .smf-ask-left {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 0.9rem;
    color: #94A3B8;
  }

  .smf-ask-left .text-red {
    color: #FF1801;
    flex-shrink: 0;
  }

  .smf-ask-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    border-radius: 10px;
    background: #14141C;
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: #FAFAFC;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.74rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .smf-ask-btn:hover {
    background: #FF1801;
    border-color: #FF1801;
    color: #FFFFFF;
    box-shadow: 0 4px 16px rgba(255, 24, 1, 0.35);
  }

  @media (max-width: 768px) {
    .smf-answer-inner {
      padding: 0 20px 20px 20px;
    }
    .smf-bottom-ask-row {
      flex-direction: column;
      align-items: flex-start;
      gap: 14px;
    }
  }
`;
