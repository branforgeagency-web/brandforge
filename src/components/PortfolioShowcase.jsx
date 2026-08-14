import React from 'react';
import { ArrowUpRight, Award, Zap, Layers } from 'lucide-react';

export default function PortfolioShowcase() {
  const caseStudies = [
    {
      id: "cs-1",
      client: "Apex Global E-Commerce",
      category: "Paid Media & ROAS",
      stat: "+420% ROAS",
      detail: "Scaled revenue from $1.2M to $8.4M in 90 days via programmatic Meta & Google ads.",
      tags: ["Paid Media", "CRO", "Analytics"],
      bgGradient: "linear-gradient(135deg, #1C0A0A 0%, #3B0E0E 100%)",
    },
    {
      id: "cs-2",
      client: "Veloce Hypercars",
      category: "Web Foundry & 3D Visual ID",
      stat: "<0.3s Velocity",
      detail: "Custom WebGL 3D supercar configurator driving $24M in pre-orders.",
      tags: ["Web Foundry", "Visual ID", "3D Motion"],
      bgGradient: "linear-gradient(135deg, #0A141C 0%, #0E2B3B 100%)",
    },
    {
      id: "cs-3",
      client: "Aura Health Platform",
      category: "Influencer & Social Media",
      stat: "42M+ Impressions",
      detail: "240+ creator partnerships driving #1 spot in App Store Health category.",
      tags: ["Influencer", "Social Media", "Video"],
      bgGradient: "linear-gradient(135deg, #1A0A1C 0%, #350E3B 100%)",
    },
    {
      id: "cs-4",
      client: "Kinetix AI Enterprise",
      category: "SEO & GEO Search Dominance",
      stat: "#1 Rank Grid",
      detail: "Captured 94% of generative search AI queries for enterprise cloud terms.",
      tags: ["SEO & GEO", "Content", "PR"],
      bgGradient: "linear-gradient(135deg, #0A1C14 0%, #0E3B27 100%)",
    },
  ];

  return (
    <section id="portfolio-showcase" className="portfolio-section">
      <div className="portfolio-container">
        
        {/* SECTION HEADER */}
        <div className="portfolio-header">
          <div className="section-tag-pill">
            <Award size={14} />
            <span>KINETIC CASE STUDIES</span>
          </div>
          <h2 className="portfolio-title">
            PROOF IN PERFORMANCE: <br />
            <span className="text-gradient-red">FEATURED CLIENT TRANSFORMATIONS</span>
          </h2>
          <p className="portfolio-subtext">
            Explore how BrandForge combines strategy, creative engineering, and high-frequency ad optimization to deliver explosive revenue metrics.
          </p>
        </div>

        {/* HORIZONTAL / GRID SHOWCASE */}
        <div className="portfolio-cards-grid">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="portfolio-card-item"
              style={{ background: cs.bgGradient }}
            >
              <div className="card-top">
                <span className="card-cat">{cs.category}</span>
                <span className="card-stat-badge">⚡ {cs.stat}</span>
              </div>

              <div className="card-mid">
                <h3 className="card-client-name">{cs.client}</h3>
                <p className="card-detail-text">{cs.detail}</p>
              </div>

              <div className="card-bottom">
                <div className="card-tags-list">
                  {cs.tags.map((t) => (
                    <span key={t} className="tag-pill">{t}</span>
                  ))}
                </div>

                <button
                  className="btn-view-case-study"
                  onClick={() => alert(`Opening Case Study for ${cs.client}...`)}
                >
                  <span>View Case Study</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
