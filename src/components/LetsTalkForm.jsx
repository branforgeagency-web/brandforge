"use client";

import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Layers,
  MessageSquare,
  ChevronDown,
  Check,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const LETS_TALK_SERVICES = [
  "Select a Service",
  "SEO & GEO Supremacy",
  "Paid Media & PPC Scaling",
  "Website Development & Jamstack",
  "Social Media Growth & Viral Reels",
  "Influencer Marketing & Creator Network",
  "Content Marketing & Editorial Authority",
  "Email Marketing & Automation Funnels",
  "Brand Positioning & Strategy Anvil",
  "Brand Identity & Visual Design Systems",
  "Commercial Video Production",
  "Conversion Rate Optimization (CRO)",
  "Online Reputation Management (ORM)",
  "Full Agency Brand Transformation",
];

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwJDxnBdnUr0eML1uYQgb89ezPtQESJKGlgk887so2rxKleYAHnuS6v6h1iTRaKbAk/exec";
const BACKUP_EMAIL_URL =
  "https://formsubmit.co/ajax/brandforgedigitalmarketing@gmail.com";

const wait = (duration) =>
  new Promise((resolve) => setTimeout(resolve, duration));

export default function LetsTalkForm({
  title = "LET'S TALK",
  subtitle = "Fill out the form below & expect a strategy response within 4 hours",
  defaultService = "",
  showLogo = false,
  compact = false,
  onSuccess,
}) {
  // Normalize default service selection
  const initialService =
    defaultService && LETS_TALK_SERVICES.includes(defaultService)
      ? defaultService
      : defaultService
      ? defaultService
      : "Select a Service";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(initialService);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success

  // Ensure options include the defaultService if custom
  const options = [...LETS_TALK_SERVICES];
  if (defaultService && !options.includes(defaultService)) {
    options.splice(1, 0, defaultService);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status !== "idle") return;

    setStatus("loading");

    const pagePath =
      typeof window !== "undefined" ? window.location.pathname : "";
    const activeService = service === "Select a Service" ? "General Growth Inquiry" : service;

    // 1. Submit to Google Apps Script (Sends to Google Sheet & Triggers Mail)
    try {
      const formData = new FormData();
      formData.append("Name", name.trim());
      formData.append("Phone Number", phone.trim());
      formData.append("Mobile", phone.trim());
      formData.append("Email", email.trim());
      formData.append("Course", activeService); // Maps to Course column in sheet
      formData.append("Service", activeService);
      formData.append("Message", message.trim());
      formData.append("Page", pagePath);

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
    } catch (err) {
      console.warn("Apps Script submission notice:", err);
    }

    // 2. Submit to FormSubmit as instant email backup so lead is 100% delivered
    try {
      await fetch(BACKUP_EMAIL_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: name.trim(),
          "Phone Number": phone.trim(),
          Email: email.trim(),
          Service: activeService,
          Message: message.trim(),
          Page: pagePath,
          _subject: `⚡ New BrandForge Lead: ${name.trim()} (${activeService})`,
        }),
      });
    } catch (err) {
      console.warn("Email backup notice:", err);
    }

    setStatus("success");

    await wait(2200);

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    if (defaultService) {
      setService(defaultService);
    } else {
      setService("Select a Service");
    }
    setStatus("idle");

    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <div className={`lets-talk-wrap ${compact ? "is-compact" : ""}`}>
      <style>{formStyles}</style>

      {/* HEADER */}
      <header className="lt-header">
        {showLogo && (
          <img
            src="/brandforge-logo.png"
            alt="BrandForge Logo"
            className="lt-logo"
          />
        )}
        <div className="lt-title-row">
          <Sparkles size={18} className="lt-sparkle" />
          <h2 className="lt-title">{title}</h2>
        </div>
        {subtitle && <p className="lt-subtitle">{subtitle}</p>}
      </header>

      {/* FORM */}
      <form className="lt-form" onSubmit={handleSubmit}>
        {/* NAME */}
        <div className="lt-field">
          <span className="lt-field-icon">
            <User size={18} />
          </span>
          <input
            required
            type="text"
            name="Name"
            value={name}
            placeholder="Your Full Name *"
            autoComplete="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* EMAIL */}
        <div className="lt-field">
          <span className="lt-field-icon">
            <Mail size={18} />
          </span>
          <input
            required
            type="email"
            name="Email"
            value={email}
            placeholder="Work Email Address *"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* PHONE / MOBILE */}
        <div className="lt-field">
          <span className="lt-field-icon">
            <Phone size={18} />
          </span>
          <input
            required
            type="tel"
            name="Phone Number"
            value={phone}
            placeholder="Mobile / WhatsApp Number *"
            autoComplete="tel"
            pattern="[0-9+\s\-]{8,15}"
            title="Please enter a valid 10-digit mobile number"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* SERVICE / COURSE */}
        <div className="lt-field lt-select-field">
          <span className="lt-field-icon">
            <Layers size={18} />
          </span>
          <select
            required
            name="Service"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            {options.map((srv) => (
              <option
                key={srv}
                value={srv}
                disabled={srv === "Select a Service"}
              >
                {srv}
              </option>
            ))}
          </select>
          <span className="lt-select-arrow">
            <ChevronDown size={18} />
          </span>
        </div>

        {/* MESSAGE */}
        <div className="lt-field lt-textarea-field">
          <span className="lt-field-icon lt-textarea-icon">
            <MessageSquare size={18} />
          </span>
          <textarea
            required
            rows={compact ? 2 : 3}
            name="Message"
            value={message}
            placeholder="Share your goals or project requirement *"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {/* SUBMIT BUTTON */}
        <button
          className={`lt-submit-btn ${status === "success" ? "is-success" : ""}`}
          type="submit"
          disabled={status !== "idle"}
        >
          {status === "success" ? (
            <>
              <Check size={18} />
              <span>Enquiry Received! Expect Call in 4 Hrs</span>
            </>
          ) : status === "loading" ? (
            <>
              <span className="lt-loader" />
              <span>Submitting to Strategy Team...</span>
            </>
          ) : (
            <>
              <span>LET&apos;S TALK NOW</span>
            </>
          )}
        </button>
      </form>

      <p className="lt-footer-note">
        <ShieldCheck
          size={14}
          style={{ verticalAlign: "middle", marginRight: 6, color: "#EF4136" }}
        />
        100% confidential. No spam, guaranteed.
      </p>
    </div>
  );
}

const formStyles = `
  .lets-talk-wrap {
    width: 100%;
    color: #FFFFFF;
    font-family: "Outfit", "Plus Jakarta Sans", "Inter", sans-serif;
  }

  .lt-header {
    text-align: center;
    margin-bottom: 20px;
  }

  .lt-logo {
    height: 44px;
    width: auto;
    object-fit: contain;
    margin-bottom: 12px;
    display: inline-block;
  }

  .lt-title-row {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 6px;
  }

  .lt-sparkle {
    color: #EF4136;
  }

  .lt-title {
    font-family: "Outfit", sans-serif;
    font-size: clamp(1.25rem, 2.5vw, 1.5rem);
    font-weight: 800;
    color: #FFFFFF;
    margin: 0;
    line-height: 1.2;
    letter-spacing: -0.02em;
    text-transform: uppercase;
  }

  .lt-subtitle {
    font-size: 0.86rem;
    color: rgba(255, 255, 255, 0.72);
    margin: 0 auto;
    line-height: 1.45;
    max-width: 380px;
  }

  .lt-form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .lt-field {
    position: relative;
    display: flex;
    align-items: center;
  }

  .lt-field-icon {
    position: absolute;
    left: 14px;
    z-index: 2;
    color: #EF4136;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .lt-textarea-icon {
    top: 14px;
  }

  .lt-field input,
  .lt-field select,
  .lt-field textarea {
    width: 100%;
    padding: 0 14px 0 44px;
    background: rgba(14, 16, 22, 0.75);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 0.9rem;
    font-family: inherit;
    outline: none;
    transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
  }

  .lt-field input,
  .lt-field select {
    height: 46px;
  }

  .lt-field select {
    appearance: none;
    cursor: pointer;
    color: #FFFFFF;
  }

  .lt-field select option {
    background: #0D1117;
    color: #FFFFFF;
  }

  .lt-select-arrow {
    position: absolute;
    right: 14px;
    z-index: 2;
    color: rgba(255, 255, 255, 0.5);
    pointer-events: none;
  }

  .lt-textarea-field textarea {
    padding-top: 12px;
    padding-bottom: 12px;
    resize: none;
  }

  .lt-field input::placeholder,
  .lt-field textarea::placeholder {
    color: rgba(255, 255, 255, 0.45);
  }

  .lt-field input:focus,
  .lt-field select:focus,
  .lt-field textarea:focus {
    border-color: #EF4136;
    background: rgba(18, 22, 30, 0.9);
    box-shadow: 0 0 0 3px rgba(239, 65, 54, 0.15);
  }

  .lt-submit-btn {
    height: 48px;
    width: 100%;
    margin-top: 6px;
    background: #EF4136;
    border: 1px solid #EF4136;
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 0.92rem;
    font-weight: 800;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
    box-shadow: 0 8px 24px rgba(239, 65, 54, 0.35);
  }

  .lt-submit-btn:hover:not(:disabled) {
    background: #D8342A;
    border-color: #D8342A;
    transform: translateY(-1px);
    box-shadow: 0 12px 28px rgba(239, 65, 54, 0.45);
  }

  .lt-submit-btn:active:not(:disabled) {
    transform: translateY(1px);
  }

  .lt-submit-btn.is-success {
    background: #16A34A;
    border-color: #16A34A;
    box-shadow: 0 8px 24px rgba(22, 163, 74, 0.35);
  }

  .lt-loader {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: #FFFFFF;
    border-radius: 50%;
    animation: ltSpin 0.7s linear infinite;
  }

  @keyframes ltSpin {
    to { transform: rotate(360deg); }
  }

  .lt-footer-note {
    font-size: 0.78rem;
    color: rgba(255, 255, 255, 0.55);
    text-align: center;
    margin: 14px 0 0;
  }
`;
