"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  Globe,
  Layers,
  Lock,
  Mail,
  MessageSquare,
  Phone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  User,
  UsersRound,
  Zap,
} from "lucide-react";

const BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2400&q=88";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Privacy & Confidentiality",
    description: "Your brand assets, campaign data, and IP remain 100% protected under NDA.",
  },
  {
    icon: Zap,
    title: "Instant Revenue Execution",
    description: "Data-backed campaigns designed for immediate ROAS scaling without delays.",
  },
  {
    icon: UsersRound,
    title: "Dedicated Strategy Squad",
    description: "Direct 1-on-1 access to senior brand directors, media buyers, and 3D web leads.",
  },
];

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "+91 93845 76852",
    subtext: "Direct Strategy Line / WhatsApp",
  },
  {
    icon: Mail,
    label: "brandforgedigitalmarketing@gmail.com",
    subtext: "24/7 Response Time",
  },
  {
    icon: Globe,
    label: "Global HQ & Labs",
    subtext: "BrandForge Agency",
  },
];

const SERVICES_LIST = [
  "Select a Service",
  "Full Brand Transformation",
  "Performance Marketing & ROAS Scale",
  "Search Engine Optimization (SEO)",
  "3D WebGL & Interactive Portals",
  "Social Media Growth & Content",
  "Omnichannel Growth Strategy",
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [service, setService] = useState("Select a Service");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name.trim()) {
      setStatus("error-name");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus("error-email");
      return;
    }

    if (mobile.trim().length < 8) {
      setStatus("error-mobile");
      return;
    }

    if (service === "Select a Service") {
      setStatus("error-service");
      return;
    }

    setStatus("submitting");

    try {
      await fetch("https://formsubmit.co/ajax/brandforgedigitalmarketing@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          Name: name,
          Email: email,
          Mobile: mobile,
          Service: service,
          Message: message,
          _subject: `⚡ New Contact Page Lead: ${name} (${service})`,
        }),
      });
      setStatus("success");
      setName("");
      setEmail("");
      setMobile("");
      setService("Select a Service");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("success");
      setName("");
      setEmail("");
      setMobile("");
      setService("Select a Service");
      setMessage("");
    }
  };

  return (
    <main className="contact-page">
      <style>{styles}</style>

      <section className="contact-layout">
        {/* LEFT VISUAL PANEL */}
        <aside className="visual-panel">
          <img
            className="background-image"
            src={BACKGROUND_IMAGE}
            alt="BrandForge Headquarters Studio"
            loading="eager"
          />

          <div className="background-overlay" />

          <div className="visual-content">
            <div className="brand">
              <img
                src="/brandforge-logo.png"
                alt="BrandForge Logo"
                className="brand-logo-img"
              />
            </div>

            <div className="hero-content">
              <p className="eyebrow">START YOUR TRANSFORMATION</p>

              <h1>
                Forge your brand&apos;s
                <span>digital supremacy.</span>
              </h1>

              <p className="hero-description">
                Connect with our senior brand strategists, performance media buyers,
                and 3D WebGL engineers to scale your revenue.
              </p>
            </div>

            <div className="feature-list">
              {FEATURES.map(({ icon: FeatureIcon, title, description }) => (
                <article className="feature-item" key={title}>
                  <span className="feature-icon">
                    <FeatureIcon size={21} strokeWidth={1.8} />
                  </span>

                  <div>
                    <strong>{title}</strong>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="footer-copy">
              Direct strategy line for ambitious brands worldwide.
            </p>
          </div>
        </aside>

        {/* RIGHT FORM PANEL */}
        <section className="form-panel">
          <form className="login-card" onSubmit={handleSubmit} noValidate>
            <div className="mobile-brand">
              <img
                src="/brandforge-logo.png"
                alt="BrandForge Logo"
                className="brand-logo-img"
              />
            </div>

            <header className="form-header">
              <div className="heading-row">
                <h2>Let&apos;s Forge Your Brand</h2>
                <Sparkles size={23} strokeWidth={1.8} className="red-sparkle" />
              </div>

              <p>Enter your details to initiate your strategy consultation.</p>
            </header>

            {/* NAME FIELD */}
            <div className="field-group">
              <label htmlFor="contact-name">Your Full Name</label>

              <div className="input-container">
                <User size={18} strokeWidth={1.8} />

                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            {/* EMAIL FIELD */}
            <div className="field-group">
              <label htmlFor="contact-email">Email Address</label>

              <div className="input-container">
                <Mail size={18} strokeWidth={1.8} />

                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  required
                />
              </div>
            </div>

            {/* MOBILE NUMBER FIELD */}
            <div className="field-group">
              <label htmlFor="contact-mobile">Mobile Number</label>

              <div className="input-container">
                <Phone size={18} strokeWidth={1.8} />

                <input
                  id="contact-mobile"
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="+91 93845 76852"
                  required
                />
              </div>
            </div>

            {/* SERVICES DROPDOWN */}
            <div className="field-group">
              <label htmlFor="contact-service">Service Required</label>

              <div className="input-container select-container">
                <Layers size={18} strokeWidth={1.8} />

                <select
                  id="contact-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                >
                  {SERVICES_LIST.map((srv) => (
                    <option key={srv} value={srv}>
                      {srv}
                    </option>
                  ))}
                </select>

                <ChevronDown size={18} strokeWidth={1.8} className="select-arrow" />
              </div>
            </div>

            {/* MESSAGE FIELD */}
            <div className="field-group">
              <label htmlFor="contact-message">Project Goals / Message</label>

              <div className="input-container textarea-container">
                <MessageSquare size={18} strokeWidth={1.8} className="ta-icon" />

                <textarea
                  id="contact-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your brand goals, target timeline, or project scope..."
                />
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              className="submit-button"
              type="submit"
              disabled={status === "submitting"}
            >
              <span>
                {status === "submitting" ? "Initiating Strategy..." : "Enter Growth Stage"}
              </span>
              <ArrowRight size={18} strokeWidth={2} />
            </button>

            {/* STATUS MESSAGES */}
            {status === "success" && (
              <p className="status-message status-visible success">
                ✓ Enquiry Submitted! Our strategy team will reach out within 4 hours.
              </p>
            )}

            {status.startsWith("error") && (
              <p className="status-message status-visible error">
                {status === "error-name" && "Please enter your name."}
                {status === "error-email" && "Please enter a valid email address."}
                {status === "error-mobile" && "Please enter a valid mobile number."}
                {status === "error-service" && "Please select a service requirement."}
              </p>
            )}

            {/* CONTACT INFO GRID */}
            <div className="divider">
              <span>direct contact channels</span>
            </div>

            <div className="provider-grid">
              {CONTACT_INFO.map(({ icon: InfoIcon, label, subtext }) => (
                <div key={label} className="contact-info-pill">
                  <InfoIcon size={16} strokeWidth={1.8} className="info-icon" />
                  <div>
                    <strong>{label}</strong>
                    <small>{subtext}</small>
                  </div>
                </div>
              ))}
            </div>
          </form>
        </section>
      </section>
    </main>
  );
}

const styles = `
  @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap");

  .contact-page {
    --background: #060509;
    --card: #0A0A0C;
    --text: #FFFFFF;
    --muted: #94A3B8;
    --red: #EF4136;
    --border: rgba(239, 65, 54, 0.3);

    width: 100%;
    min-height: 100vh;
    min-height: 100svh;
    overflow-x: hidden;
    color: var(--text);
    background: var(--background);
    font-family: "Outfit", "Plus Jakarta Sans", sans-serif;
    padding-top: 80px;
    box-sizing: border-box;
  }

  .contact-layout {
    width: 100%;
    max-width: 100%;
    min-height: calc(100vh - 80px);
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .visual-panel {
    position: relative;
    isolation: isolate;
    min-width: 0;
    overflow: hidden;
  }

  .background-image {
    position: absolute;
    inset: 0;
    z-index: -3;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% center;
    filter: brightness(0.4) contrast(1.1);
  }

  .background-overlay {
    position: absolute;
    inset: 0;
    z-index: -2;
    background: linear-gradient(180deg, rgba(6, 5, 9, 0.7) 0%, rgba(6, 5, 9, 0.95) 100%);
  }

  .visual-content {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    padding: clamp(34px, 5vh, 60px) clamp(35px, 5vw, 80px) clamp(28px, 5vh, 50px);
  }

  .brand,
  .mobile-brand {
    display: inline-flex;
    align-items: center;
  }

  .brand-logo-img {
    height: 38px;
    width: auto;
    object-fit: contain;
  }

  .hero-content {
    width: 100%;
    max-width: 640px;
    margin-top: clamp(30px, 6vh, 60px);
  }

  .eyebrow {
    margin: 0 0 14px;
    color: var(--red);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.14em;
  }

  .hero-content h1 {
    max-width: 600px;
    margin: 0;
    font-size: clamp(40px, 4.8vw, 66px);
    font-weight: 900;
    line-height: 1.02;
    letter-spacing: -0.04em;
    color: #FFFFFF;
  }

  .hero-content h1 span {
    display: block;
    color: var(--red);
  }

  .hero-description {
    max-width: 560px;
    margin: 20px 0 0;
    color: rgba(255, 255, 255, 0.8);
    font-size: 14.5px;
    line-height: 1.65;
  }

  .feature-list {
    width: 100%;
    max-width: 580px;
    display: grid;
    gap: 18px;
    margin-top: auto;
    padding-top: 36px;
  }

  .feature-item {
    display: grid;
    grid-template-columns: 48px 1fr;
    align-items: center;
    gap: 16px;
  }

  .feature-icon {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border: 1px solid var(--border);
    border-radius: 12px;
    color: var(--red);
    background: #0A0A0C;
  }

  .feature-item strong {
    display: block;
    margin-bottom: 3px;
    font-size: 14px;
    font-weight: 800;
    color: #FFFFFF;
  }

  .feature-item p {
    max-width: 480px;
    margin: 0;
    color: rgba(255, 255, 255, 0.65);
    font-size: 12px;
    line-height: 1.5;
  }

  .footer-copy {
    margin: 32px 0 0;
    color: rgba(255, 255, 255, 0.45);
    font-size: 11px;
  }

  .form-panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 30px clamp(24px, 4vw, 70px);
    box-sizing: border-box;
  }

  .login-card {
    width: 100%;
    max-width: 620px;
    padding: clamp(28px, 4vh, 48px) clamp(28px, 4vw, 50px);
    border: 1px solid var(--border);
    border-radius: 20px;
    background: #0A0A0C;
    box-sizing: border-box;
  }

  .mobile-brand {
    display: none;
  }

  .form-header {
    margin-bottom: 26px;
    text-align: center;
  }

  .heading-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .red-sparkle {
    color: var(--red);
  }

  .form-header h2 {
    margin: 0;
    font-size: clamp(24px, 2.4vw, 32px);
    font-weight: 900;
    line-height: 1.12;
    letter-spacing: -0.03em;
    color: #FFFFFF;
  }

  .form-header p {
    margin: 10px 0 0;
    color: var(--muted);
    font-size: 13px;
  }

  .field-group {
    margin-top: 18px;
  }

  .field-group label {
    display: block;
    margin-bottom: 8px;
    color: #FFFFFF;
    font-size: 10.5px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .input-container {
    min-height: 48px;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 12px;
    padding: 0 16px;
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 10px;
    color: var(--red);
    background: #060509;
    transition: border-color 0.25s ease;
  }

  .input-container:focus-within {
    border-color: var(--red);
  }

  .input-container input {
    width: 100%;
    border: 0;
    outline: 0;
    color: #FFFFFF;
    background: transparent;
    font-size: 13.5px;
  }

  .input-container input::placeholder,
  .input-container textarea::placeholder {
    color: #64748B;
  }

  .select-container {
    grid-template-columns: auto 1fr auto;
  }

  .select-container select {
    width: 100%;
    border: 0;
    outline: 0;
    color: #FFFFFF;
    background: transparent;
    font-size: 13.5px;
    cursor: pointer;
    appearance: none;
  }

  .select-container select option {
    background: #0A0A0C;
    color: #FFFFFF;
  }

  .select-arrow {
    color: rgba(255, 255, 255, 0.6);
    pointer-events: none;
  }

  .textarea-container {
    align-items: flex-start;
    padding: 12px 16px;
  }

  .ta-icon {
    margin-top: 2px;
  }

  .textarea-container textarea {
    width: 100%;
    border: 0;
    outline: 0;
    color: #FFFFFF;
    background: transparent;
    font-family: inherit;
    font-size: 13.5px;
    resize: vertical;
  }

  .submit-button {
    width: 100%;
    min-height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    border: none;
    border-radius: 10px;
    color: #FFFFFF;
    background: var(--red);
    font-size: 13.5px;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    cursor: pointer;
    margin-top: 24px;
    transition: background 0.25s ease, transform 0.25s ease;
  }

  .submit-button:hover {
    background: #D9382E;
    transform: translateY(-2px);
  }

  .divider {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 14px;
    margin: 26px 0 18px;
    color: #64748B;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .divider::before,
  .divider::after {
    content: "";
    height: 1px;
    background: rgba(255, 255, 255, 0.12);
  }

  .provider-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .contact-info-pill {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 10px;
    background: #060509;
  }

  .info-icon {
    color: var(--red);
    flex-shrink: 0;
  }

  .contact-info-pill strong {
    display: block;
    font-size: 10.5px;
    color: #FFFFFF;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .contact-info-pill small {
    display: block;
    font-size: 8.5px;
    color: #64748B;
  }

  .status-message {
    margin-top: 12px;
    font-size: 11.5px;
    font-weight: 700;
    text-align: center;
  }

  .status-message.success {
    color: #22C55E;
  }

  .status-message.error {
    color: #EF4136;
  }

  @media (max-width: 900px) {
    .contact-layout {
      grid-template-columns: 1fr;
    }

    .visual-panel {
      min-height: 280px;
    }

    .visual-content {
      min-height: 280px;
      padding: 24px;
    }

    .brand,
    .feature-list,
    .footer-copy {
      display: none;
    }

    .mobile-brand {
      display: inline-flex;
      margin-bottom: 20px;
    }

    .hero-content {
      margin-top: 20px;
    }

    .hero-content h1 {
      font-size: 36px;
    }

    .provider-grid {
      grid-template-columns: 1fr;
    }
  }
`;
