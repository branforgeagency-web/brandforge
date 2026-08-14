import React, { useState } from 'react';
import {
  Search,
  Rocket,
  Share2,
  FileText,
  Palette,
  Code,
  Mail,
  Users,
  Video,
  TrendingUp,
  Radio,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Sliders,
  Play,
  Eye,
  Layers,
  Sparkles,
  Zap,
} from 'lucide-react';

export default function ServicesShowcaseGrid({ onSelectService, isServicesOpen }) {
  // MICRO-INTERACTIVE STATES FOR EACH OF THE 12 SERVICES
  const [seoRank, setSeoRank] = useState(85);
  const [ppcHeatmap, setPpcHeatmap] = useState('roi');
  const [ppcClicks, setPpcClicks] = useState(14820);
  const [webMode, setWebMode] = useState('rendered');
  const [croVariant, setCroVariant] = useState('B');
  const [activeNodes, setActiveNodes] = useState([0, 2, 4]);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [activeColorTheme, setActiveColorTheme] = useState('crimson');

  function toggleNode(idx) {
    if (activeNodes.includes(idx)) {
      setActiveNodes(activeNodes.filter(n => n !== idx));
    } else {
      setActiveNodes([...activeNodes, idx]);
    }
  }

  const services = [
    {
      id: "seo-geo",
      num: "01",
      icon: Search,
      title: "Search Engine Optimization (SEO & GEO)",
      badge: "Search Supremacy",
      desc: "Dominate search engine grids and generative AI engines (GEO) with technical optimization and authority building.",
      interactiveType: "seo-slider",
      color: "#FF4D4D",
    },
    {
      id: "paid-media",
      num: "02",
      icon: Rocket,
      title: "Pay-Per-Click Advertising (PPC & Paid)",
      badge: "Performance Scaling",
      desc: "High-ROI paid media campaigns across Meta, Google, TikTok & LinkedIn engineered to scale enterprise revenue.",
      interactiveType: "ppc-heatmap",
      color: "#FF6B00",
    },
    {
      id: "web-foundry",
      num: "03",
      icon: Code,
      title: "Web Foundry & 3D WebGL",
      badge: "Sub-Second UX",
      desc: "Custom high-converting websites, WebGL 3D visual worlds, and web applications built for speed and engagement.",
      interactiveType: "wireframe-toggle",
      color: "#00F0FF",
    },
    {
      id: "social-media",
      num: "04",
      icon: Share2,
      title: "Social Media Marketing & Viral Reach",
      badge: "Culture Engine",
      desc: "End-to-end social media management, community growth, short-form reel production, and viral strategy.",
      interactiveType: "social-feed",
      color: "#FFB800",
    },
    {
      id: "influencer",
      num: "05",
      icon: Users,
      title: "Influencer & Creator Media Network",
      badge: "Creator Authority",
      desc: "Vetted creator matchmaking, contract management, and influencer campaigns designed to drive direct sales.",
      interactiveType: "creator-network",
      color: "#A980FF",
    },
    {
      id: "content-smithy",
      num: "06",
      icon: FileText,
      title: "Content Marketing & Editorial Copy",
      badge: "Authority Copy",
      desc: "Authority copywriting, whitepapers, SEO blog posts, and thought-leadership editorial built to convert prospects.",
      interactiveType: "content-funnel",
      color: "#66F5C8",
    },
    {
      id: "email-retention",
      num: "07",
      icon: Mail,
      title: "Email & Retention Funnels",
      badge: "LTV Maximizer",
      desc: "Automated email sequences, Klaviyo flows, dynamic segmentation, and SMS funnels built to maximize customer LTV.",
      interactiveType: "email-preview",
      color: "#FFD000",
    },
    {
      id: "growth-strategy",
      num: "08",
      icon: TrendingUp,
      title: "Growth Strategy & Unit Economics",
      badge: "360° Blueprint",
      desc: "Comprehensive growth blueprints, channel audits, funnel architecture, and unit economics optimization.",
      interactiveType: "strategy-dial",
      color: "#FF4D4D",
    },
    {
      id: "visual-identity",
      num: "09",
      icon: Palette,
      title: "Visual Identity & Brand Systems",
      badge: "Brand Forging",
      desc: "Logo forging, 3D motion graphics, brand guidelines, color palettes, and visual design systems that demand authority.",
      interactiveType: "palette-picker",
      color: "#35D5FF",
    },
    {
      id: "video-production",
      num: "10",
      icon: Video,
      title: "Commercial Video & 3D Motion",
      badge: "High Impact",
      desc: "Commercial video ad production, 3D product renders, UGC editing, and high-converting video showreels.",
      interactiveType: "video-player",
      color: "#FF358B",
    },
    {
      id: "cro-lift",
      num: "11",
      icon: Sliders,
      title: "Conversion Rate Optimization (CRO)",
      badge: "Revenue Lift",
      desc: "Data-driven A/B testing, checkout friction removal, heatmapping, and UX optimization to double conversion rates.",
      interactiveType: "cro-ab",
      color: "#00E676",
    },
    {
      id: "reputation-pr",
      num: "12",
      icon: Radio,
      title: "Reputation & Global PR Engine",
      badge: "Market Trust",
      desc: "Proactive review generation, press release networks, brand defense, and crisis PR management across major publications.",
      interactiveType: "pr-towers",
      color: "#9C27B0",
    },
  ];

  return (
    <section id="services-matrix" className="services-showcase-section light-section-theme">
      <div className="services-container">
        
        {/* HEADER */}
        <div className="services-header-text">
          <div className="section-tag-pill-light">
            <Zap size={14} />
            <span>12 CORE CAPABILITIES</span>
          </div>
          <h2 className="services-main-title-light">
            FULL-SPECTRUM MARKETING & <br />
            <span className="text-gradient-red">DIGITAL POWER CAPABILITIES</span>
          </h2>
          <p className="services-subtext-light">
            Interact with our 12 specialized service engines below. Each channel is engineered to work independently or synchronize for maximum ROAS.
          </p>
        </div>

        {/* 12 SERVICES GRID MATRIX */}
        <div className="services-grid-matrix">
          {services.map((srv) => {
            const IconComponent = srv.icon;

            return (
              <div
                key={srv.id}
                className="service-card-interactive-light"
                style={{ '--card-accent': srv.color }}
              >
                {/* TOP NUMBER & BADGE */}
                <div className="card-top-bar">
                  <span className="card-num">{srv.num}</span>
                  <span className="card-badge-light">{srv.badge}</span>
                </div>

                {/* ICON & TITLE */}
                <div className="card-icon-title-wrap">
                  <div className="card-icon-box-light">
                    <IconComponent size={22} />
                  </div>
                  <h3 className="card-service-title-light">{srv.title}</h3>
                </div>

                {/* DESCRIPTION */}
                <p className="card-service-desc-light">{srv.desc}</p>

                {/* MICRO INTERACTIVE DEMO AREA */}
                <div className="card-micro-demo-area-light">
                  {srv.interactiveType === "seo-slider" && (
                    <div className="demo-seo-box">
                      <div className="demo-label-row">
                        <span>Generative AI Rank Visibility</span>
                        <span className="text-accent">{seoRank}%</span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="99"
                        value={seoRank}
                        onChange={(e) => setSeoRank(Number(e.target.value))}
                        className="demo-range-slider"
                      />
                    </div>
                  )}

                  {srv.interactiveType === "ppc-heatmap" && (
                    <div className="demo-ppc-box">
                      <div className="ppc-toggle-row">
                        <button
                          className={`ppc-tab ${ppcHeatmap === 'roi' ? 'active' : ''}`}
                          onClick={() => { setPpcHeatmap('roi'); setPpcClicks(14820); }}
                        >
                          ROAS 4.8x
                        </button>
                        <button
                          className={`ppc-tab ${ppcHeatmap === 'scale' ? 'active' : ''}`}
                          onClick={() => { setPpcHeatmap('scale'); setPpcClicks(32400); }}
                        >
                          SCALE 10x
                        </button>
                      </div>
                      <div className="ppc-counter-stat">
                        <span>Conversions:</span>
                        <span className="text-accent">+{ppcClicks.toLocaleString()}</span>
                      </div>
                    </div>
                  )}

                  {srv.interactiveType === "wireframe-toggle" && (
                    <div className="demo-wireframe-box">
                      <div className="wireframe-switch-row">
                        <button
                          className={`wf-btn ${webMode === 'rendered' ? 'active' : ''}`}
                          onClick={() => setWebMode('rendered')}
                        >
                          WebGL 3D
                        </button>
                        <button
                          className={`wf-btn ${webMode === 'wireframe' ? 'active' : ''}`}
                          onClick={() => setWebMode('wireframe')}
                        >
                          Wireframe
                        </button>
                      </div>
                      <div className="wireframe-canvas-preview">
                        {webMode === 'rendered' ? (
                          <span className="rendered-ui">✨ 60 FPS WebGL Engine Active</span>
                        ) : (
                          <span className="wireframe-ui">📐 Skeleton Schema View</span>
                        )}
                      </div>
                    </div>
                  )}

                  {srv.interactiveType === "social-feed" && (
                    <div className="social-feed-preview">
                      <div className="feed-header">
                        <div className="feed-avatar" />
                        <span>@brandforge.viral</span>
                      </div>
                      <p style={{ fontSize: '0.75rem', color: '#4A5568' }}>🔥 Short-form video hit 2.4M organic views!</p>
                    </div>
                  )}

                  {srv.interactiveType === "creator-network" && (
                    <div className="creator-nodes">
                      {[0, 1, 2, 3, 4].map((idx) => (
                        <button
                          key={idx}
                          className={`node-pill ${activeNodes.includes(idx) ? 'active' : ''}`}
                          onClick={() => toggleNode(idx)}
                        >
                          Creator #{idx + 101}
                        </button>
                      ))}
                    </div>
                  )}

                  {srv.interactiveType === "palette-picker" && (
                    <div className="demo-palette-box">
                      <div className="palette-swatches">
                        {['crimson', 'cyan', 'gold', 'violet'].map((t) => (
                          <button
                            key={t}
                            className={`swatch ${t} ${activeColorTheme === t ? 'active' : ''}`}
                            onClick={() => setActiveColorTheme(t)}
                          />
                        ))}
                      </div>
                      <span className={`logo-theme-preview ${activeColorTheme}`}>
                        Active Identity: {activeColorTheme.toUpperCase()}
                      </span>
                    </div>
                  )}

                  {srv.interactiveType === "video-player" && (
                    <div className="demo-video-box" onClick={() => setVideoPlaying(!videoPlaying)}>
                      <div className={`video-frame ${videoPlaying ? 'playing' : ''}`}>
                        {videoPlaying ? <Play size={20} fill="currentColor" /> : <Play size={20} />}
                        <span>{videoPlaying ? 'PROMOTIONAL CLIP PLAYING...' : 'CLICK TO PREVIEW 4K SHOWREEL'}</span>
                      </div>
                    </div>
                  )}

                  {srv.interactiveType === "cro-ab" && (
                    <div className="demo-cro-box">
                      <div className="ab-switch">
                        <button
                          className={`ab-btn ${croVariant === 'A' ? 'active' : ''}`}
                          onClick={() => setCroVariant('A')}
                        >
                          Variant A (2.1%)
                        </button>
                        <button
                          className={`ab-btn ${croVariant === 'B' ? 'active' : ''}`}
                          onClick={() => setCroVariant('B')}
                        >
                          Variant B (4.8%)
                        </button>
                      </div>
                      <div className="cro-lift-result">
                        <span>Conversion Lift:</span>
                        <span className="text-accent">{croVariant === 'B' ? '+128% LIFT 🔥' : 'BASELINE'}</span>
                      </div>
                    </div>
                  )}

                  {srv.interactiveType === "content-funnel" && (
                    <div className="demo-label-row">
                      <span className="funnel-stage">SEO Article</span>
                      <span className="funnel-beam" />
                      <span className="funnel-stage text-accent">Lead Magnet</span>
                    </div>
                  )}

                  {srv.interactiveType === "email-preview" && (
                    <div className="demo-label-row">
                      <span>Automated Flow:</span>
                      <span className="text-accent">7-Day Welcome Sequence</span>
                    </div>
                  )}

                  {srv.interactiveType === "strategy-dial" && (
                    <div className="dial-stat">
                      <span>360° Growth Score:</span>
                      <span className="dial-num">98/100</span>
                    </div>
                  )}

                  {srv.interactiveType === "pr-towers" && (
                    <div className="pr-tower-visual">
                      <Radio size={18} className="pulse-red-icon" />
                      <span className="pr-status">25+ Major Publications Pitching</span>
                    </div>
                  )}
                </div>

                {/* SELECT CTA BUTTON */}
                <button
                  className="card-select-btn-light"
                  onClick={() => onSelectService && onSelectService(srv)}
                >
                  <span>CONFIGURE THIS SERVICE</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
