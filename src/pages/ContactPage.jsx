import React, { useState } from "react";
import BrandForgeAnimatedFooter from "../components/BrandForgeAnimatedFooter";
import FloatingLines from "../components/FloatingLines";
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
    subtext: "Call / WhatsApp Direct",
    href: "tel:+919384576852",
  },
  {
    icon: Mail,
    label: "brandforgedigitalmarketing@gmail.com",
    subtext: "24/7 Response Time",
    href: "mailto:brandforgedigitalmarketing@gmail.com",
  },
  {
    icon: Globe,
    label: "Global HQ & Labs",
    subtext: "BrandForge Agency",
    href: "/about",
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

export default function ContactPage({ onOpenModal }) {
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
        {/* INTERACTIVE 3D FLOATING LINES WEBGL BACKGROUND (BRANDFORGE THEME - DARKER & SUBTLE OPACITY) */}
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[8, 8, 8]}
          lineDistance={[6, 6, 6]}
          animationSpeed={0.75}
          interactive={true}
          bendRadius={7.0}
          bendStrength={-1.5}
          linesGradient={["#D9382E", "#C5221F", "#B91C1C", "#991B1B", "#7F1D1D"]}
          mixBlendMode="screen"
          style={{ opacity: 0.55 }}
        />

        {/* AMBIENT GLOW GRADIENT ACCENTS */}
        <div className="ambient-glow glow-top-left" />
        <div className="ambient-glow glow-bottom-right" />
        <div className="ambient-glow glow-center-pulse" />

        {/* LEFT VISUAL PANEL */}
        <aside className="visual-panel">
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
              {CONTACT_INFO.map(({ icon: InfoIcon, label, subtext, href }) => {
                const Component = href ? "a" : "div";
                return (
                  <Component
                    key={label}
                    href={href}
                    className="contact-info-pill"
                    {...(href?.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <InfoIcon size={16} strokeWidth={1.8} className="info-icon" />
                    <div>
                      <strong>{label}</strong>
                      <small>{subtext}</small>
                    </div>
                  </Component>
                );
              })}
            </div>
          </form>
        </section>
      </section>

      {/* FOOTER WITH COMPREHENSIVE INTERNAL LINKS FOR SEO */}
      <BrandForgeAnimatedFooter onOpenModal={onOpenModal} />
    </main>
  );
}

const styles = `
  @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap");

  .contact-page {
    --background: #040306;
    --card: #0A0A0C;
    --text: #FFFFFF;
    --muted: #94A3B8;
    --red: #EF4136;
    --border: rgba(239, 65, 54, 0.25);

    width: 100%;
    min-height: 100vh;
    min-height: 100svh;
    overflow-x: hidden;
    color: var(--text);
    background: #040306;
    font-family: "Outfit", "Plus Jakarta Sans", sans-serif;
    padding-top: 0;
    box-sizing: border-box;
  }

  .contact-layout {
    position: relative;
    isolation: isolate;
    overflow: hidden;
    width: 100%;
    max-width: 100%;
    min-height: 100vh;
    min-height: 100svh;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: 
      radial-gradient(ellipse 70% 60% at 18% 25%, rgba(239, 65, 54, 0.1) 0%, rgba(239, 65, 54, 0.02) 50%, transparent 80%),
      radial-gradient(ellipse 65% 55% at 85% 65%, rgba(239, 65, 54, 0.08) 0%, rgba(255, 87, 51, 0.01) 50%, transparent 75%),
      linear-gradient(135deg, #09060E 0%, #050407 35%, #07040A 70%, #030205 100%);
  }

  .ambient-glow {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    pointer-events: none;
    z-index: -1;
    opacity: 0.5;
  }

  .glow-top-left {
    top: -10%;
    left: -5%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(239, 65, 54, 0.16) 0%, rgba(239, 65, 54, 0.03) 55%, transparent 75%);
  }

  .glow-bottom-right {
    bottom: -15%;
    right: -5%;
    width: 580px;
    height: 580px;
    background: radial-gradient(circle, rgba(239, 65, 54, 0.12) 0%, rgba(180, 20, 20, 0.02) 60%, transparent 80%);
  }

  .glow-center-pulse {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(239, 65, 54, 0.05) 0%, transparent 70%);
  }

  .visual-panel {
    position: relative;
    min-width: 0;
  }

  .visual-content {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    padding: clamp(105px, 13vh, 135px) clamp(35px, 5vw, 80px) clamp(35px, 5vh, 50px);
    box-sizing: border-box;
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
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
  }

  .hero-content h1 {
    max-width: 600px;
    margin: 0;
    font-size: clamp(40px, 4.8vw, 66px);
    font-weight: 900;
    line-height: 1.02;
    letter-spacing: -0.04em;
    color: #FFFFFF;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.85);
  }

  .hero-content h1 span {
    display: block;
    color: var(--red);
  }

  .hero-description {
    max-width: 560px;
    margin: 20px 0 0;
    color: rgba(255, 255, 255, 0.9);
    font-size: 14.5px;
    line-height: 1.65;
    text-shadow: 0 2px 12px rgba(0, 0, 0, 0.85);
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
    padding: clamp(105px, 13vh, 135px) clamp(24px, 4vw, 70px) clamp(35px, 5vh, 50px);
    box-sizing: border-box;
    position: relative;
    background: transparent;
  }

  .login-card {
    width: 100%;
    max-width: 620px;
    padding: clamp(28px, 4vh, 48px) clamp(28px, 4vw, 50px);
    border: 1px solid rgba(239, 65, 54, 0.35);
    border-radius: 20px;
    background: rgba(10, 8, 14, 0.35);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 35px rgba(239, 65, 54, 0.08);
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
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
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
    background: rgba(6, 5, 9, 0.5);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    transition: border-color 0.25s ease, background 0.25s ease;
  }

  .input-container:focus-within {
    border-color: var(--red);
    background: rgba(6, 5, 9, 0.75);
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
    gap: 10px;
    padding: 11px 13px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 10px;
    background: rgba(6, 5, 9, 0.5);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    text-decoration: none;
    color: inherit;
    transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
    box-sizing: border-box;
  }

  .contact-info-pill:hover {
    border-color: rgba(239, 65, 54, 0.5);
    background: rgba(14, 13, 18, 0.75);
    transform: translateY(-2px);
  }

  .contact-info-pill:active {
    transform: scale(0.98);
  }

  .info-icon {
    color: var(--red);
    flex-shrink: 0;
  }

  .contact-info-pill strong {
    display: block;
    font-size: 11px;
    font-weight: 700;
    color: #FFFFFF;
    white-space: normal;
    word-break: break-word;
    line-height: 1.3;
  }

  .contact-info-pill small {
    display: block;
    font-size: 9.5px;
    color: #94A3B8;
    margin-top: 1px;
  }

  .status-message {
    margin-top: 14px;
    font-size: 12px;
    font-weight: 700;
    text-align: center;
    line-height: 1.4;
  }

  .status-message.success {
    color: #22C55E;
    background: rgba(34, 197, 94, 0.1);
    padding: 10px 14px;
    border-radius: 8px;
    border: 1px solid rgba(34, 197, 94, 0.25);
  }

  .status-message.error {
    color: #EF4136;
    background: rgba(239, 65, 54, 0.1);
    padding: 10px 14px;
    border-radius: 8px;
    border: 1px solid rgba(239, 65, 54, 0.25);
  }

  @media (max-width: 900px) {
    .contact-layout {
      grid-template-columns: 1fr;
      min-height: auto;
    }

    .visual-panel {
      min-height: auto;
    }

    .visual-content {
      min-height: auto;
      padding: 95px 24px 16px;
    }

    .brand {
      display: inline-flex;
    }

    .hero-content {
      margin-top: 14px;
      max-width: 100%;
    }

    .hero-content h1 {
      font-size: clamp(32px, 7.5vw, 46px);
    }

    .hero-description {
      max-width: 100%;
      font-size: 14px;
      line-height: 1.6;
      margin-top: 12px;
    }

    .feature-list {
      display: grid;
      grid-template-columns: 1fr;
      gap: 12px;
      margin-top: 22px;
      padding-top: 16px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      max-width: 100%;
    }

    .feature-item {
      grid-template-columns: 42px 1fr;
      gap: 12px;
    }

    .feature-icon {
      width: 42px;
      height: 42px;
      border-radius: 10px;
    }

    .footer-copy {
      display: none;
    }

    .form-panel {
      padding: 12px 20px 48px;
    }

    .login-card {
      padding: 28px 22px;
      max-width: 100%;
    }

    .mobile-brand {
      display: none;
    }

    .provider-grid {
      grid-template-columns: 1fr;
      gap: 10px;
    }
  }

  @media (max-width: 580px) {
    .contact-page {
      padding-top: 0;
    }

    .visual-content {
      padding: 85px 16px 14px;
    }

    .brand-logo-img {
      height: 32px;
    }

    .eyebrow {
      font-size: 11px;
      margin-bottom: 8px;
    }

    .hero-content h1 {
      font-size: clamp(26px, 8.2vw, 36px);
      letter-spacing: -0.03em;
    }

    .hero-description {
      font-size: 13.5px;
      line-height: 1.55;
      margin-top: 10px;
    }

    .feature-list {
      gap: 10px;
      margin-top: 18px;
      padding-top: 14px;
    }

    .feature-item {
      grid-template-columns: 36px 1fr;
      gap: 10px;
    }

    .feature-icon {
      width: 36px;
      height: 36px;
      border-radius: 9px;
    }

    .feature-icon svg {
      width: 18px;
      height: 18px;
    }

    .feature-item strong {
      font-size: 12.5px;
    }

    .feature-item p {
      font-size: 11px;
      line-height: 1.45;
    }

    .form-panel {
      padding: 8px 14px 40px;
    }

    .login-card {
      padding: 22px 16px;
      border-radius: 16px;
    }

    .form-header {
      margin-bottom: 20px;
    }

    .form-header h2 {
      font-size: 22px;
    }

    .form-header p {
      font-size: 12.5px;
      margin-top: 6px;
    }

    .field-group {
      margin-top: 14px;
    }

    .field-group label {
      font-size: 10px;
      margin-bottom: 6px;
    }

    .input-container {
      min-height: 46px;
      padding: 0 12px;
      gap: 10px;
    }

    .input-container input,
    .select-container select,
    .textarea-container textarea {
      font-size: 16px; /* Prevents Safari iOS auto-zoom on input focus */
    }

    .textarea-container {
      padding: 10px 12px;
    }

    .submit-button {
      min-height: 48px;
      font-size: 13px;
      margin-top: 20px;
    }

    .divider {
      margin: 22px 0 14px;
    }

    .contact-info-pill {
      padding: 10px 12px;
      gap: 10px;
    }

    .contact-info-pill strong {
      font-size: 11px;
    }

    .contact-info-pill small {
      font-size: 9px;
    }
  }

  @media (max-width: 380px) {
    .login-card {
      padding: 18px 12px;
    }

    .hero-content h1 {
      font-size: 24px;
    }

    .input-container {
      padding: 0 10px;
    }
  }
`;
