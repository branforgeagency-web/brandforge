"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwJDxnBdnUr0eML1uYQgb89ezPtQESJKGlgk887so2rxKleYAHnuS6v6h1iTRaKbAk/exec";

// Auto-sizing inline input matching Sajan Paudel's exact behavior
function AutoInput({
  value,
  onChange,
  placeholder,
  name,
  type = "text",
  grow = false,
  error = false,
}) {
  const mirrorRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (grow || !mirrorRef.current) return;
    const updateWidth = () => {
      if (mirrorRef.current) {
        // Add a few pixels padding buffer for smooth caret
        setWidth(Math.max(120, mirrorRef.current.offsetWidth + 8));
      }
    };
    updateWidth();
  }, [value, placeholder, grow]);

  return (
    <span
      className={`sajan-input-wrap ${grow ? "is-grow" : ""} ${error ? "has-error" : ""}`}
      style={!grow && width ? { width: `${width}px` } : undefined}
    >
      {!grow && (
        <span ref={mirrorRef} className="sajan-input-mirror" aria-hidden="true">
          {value || placeholder}
        </span>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="sajan-input-field"
        autoComplete="off"
      />
      <span className="sajan-input-border" />
    </span>
  );
}

// Kinetic Rolling Character Chip
function SajanChip({ label, selected, onSelect }) {
  const chars = Array.from(label);

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`sajan-chip ${selected ? "is-selected" : ""}`}
      aria-pressed={selected}
    >
      <span className="sajan-chip-text-wrap">
        <span className="sajan-chip-text-base">
          {chars.map((char, idx) => (
            <span
              key={idx}
              className="sajan-chip-char"
              style={{ transitionDelay: `${idx * 0.015}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
        <span className="sajan-chip-text-clone" aria-hidden="true">
          {chars.map((char, idx) => (
            <span
              key={idx}
              className="sajan-chip-char"
              style={{ transitionDelay: `${idx * 0.015}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      </span>
    </button>
  );
}

export default function SeoSajanContactForm() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [topic, setTopic] = useState("Enterprise SEO Dominance");
  const [channel, setChannel] = useState("Email");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const [hasError, setHasError] = useState(false);
  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success"

  const topicOptions = [
    "Enterprise SEO Dominance",
    "AI Search & GEO Synthesis",
    "Sub-200ms Jamstack Speed",
    "Full Category Takeover",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const trimmedContact = contact.trim();
    if (!trimmedContact || (channel === "Email" && !trimmedContact.includes("@"))) {
      setHasError(true);
      return;
    }
    setHasError(false);
    setStatus("submitting");

    const pagePath =
      typeof globalThis !== "undefined" && globalThis.window
        ? globalThis.window.location.pathname
        : "/services/seo-geo";

    // 1. Submit to Google Apps Script (Same backend as LetsTalkForm)
    try {
      if (typeof globalThis !== "undefined" && globalThis.FormData && globalThis.fetch) {
        const formData = new globalThis.FormData();
        formData.append("Name", name.trim() || "Anonymous Partner");
        formData.append("Location", location.trim() || "Unspecified");
        formData.append("Phone Number", channel === "WhatsApp" ? trimmedContact : "");
        formData.append("Mobile", channel === "WhatsApp" ? trimmedContact : "");
        formData.append("Email", channel === "Email" ? trimmedContact : "");
        formData.append("Course", topic);
        formData.append("Service", `SEO & GEO — ${topic}`);
        formData.append(
          "Message",
          `[Location: ${location || "N/A"}] [Channel: ${channel}] ${message.trim() || "Standard Audit Request"}`
        );
        formData.append("Page", pagePath);

        await globalThis.fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          body: formData,
          mode: "no-cors",
        });
      }
    } catch {
      // Graceful fallback
    }

    setStatus("success");
  };

  return (
    <div className="sajan-form-wrapper" id="seo-contact-brief">
      <style>{sajanFormStyles}</style>

      {status === "success" ? (
        <div className="sajan-success-panel">
          <div className="sajan-success-icon-wrap">
            <CheckCircle2 size={36} className="sajan-success-icon" />
          </div>
          <h3 className="sajan-success-title">Strategy Brief Received</h3>
          <p className="sajan-success-sub">
            Thank you, <strong className="text-white">{name || "Partner"}</strong>. Our senior SEO & GEO architects are analyzing your entity requirements and will connect via{" "}
            <strong className="text-red">{channel}</strong> within 2 hours.
          </p>
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setName("");
              setLocation("");
              setContact("");
              setMessage("");
            }}
            className="sajan-reset-btn"
          >
            Submit Another Brief
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="sajan-form-container" noValidate>
          {/* Row 1: Greeting, Name, Location */}
          <div className="sajan-form-row">
            <span className="sajan-form-text">Hey, BrandForge! I'm</span>
            <AutoInput
              value={name}
              onChange={setName}
              placeholder="Your Name"
              name="name"
            />
            <span className="sajan-form-text">based in</span>
            <AutoInput
              value={location}
              onChange={setLocation}
              placeholder="Location / Company"
              name="location"
            />
          </div>

          {/* Row 2: Let's talk about + topic chips */}
          <div className="sajan-form-row">
            <span className="sajan-form-text">Let's talk about</span>
            <div className="sajan-chip-group" role="group" aria-label="Topic Selection">
              {topicOptions.map((opt) => (
                <SajanChip
                  key={opt}
                  label={opt}
                  selected={topic === opt}
                  onSelect={() => setTopic(opt)}
                />
              ))}
            </div>
          </div>

          {/* Row 3: Reach me at + contact info + channel toggle */}
          <div className="sajan-form-row">
            <span className="sajan-form-text">Reach me at</span>
            <AutoInput
              value={contact}
              onChange={(val) => {
                setContact(val);
                if (hasError) setHasError(false);
              }}
              placeholder={channel === "WhatsApp" ? "your phone / WhatsApp number" : "your corporate email"}
              name="contact"
              type={channel === "WhatsApp" ? "tel" : "email"}
              error={hasError}
              grow={true}
            />
            <div className="sajan-chip-group" role="group" aria-label="Channel Preference">
              <SajanChip
                label="Email"
                selected={channel === "Email"}
                onSelect={() => setChannel("Email")}
              />
              <SajanChip
                label="WhatsApp"
                selected={channel === "WhatsApp"}
                onSelect={() => setChannel("WhatsApp")}
              />
            </div>
          </div>

          {/* Row 4: Message */}
          <div className="sajan-form-row">
            <span className="sajan-form-text">Message</span>
            <AutoInput
              value={message}
              onChange={setMessage}
              placeholder="What are your growth goals or website URL?"
              name="message"
              grow={true}
            />
          </div>

          {/* Row 5: Giant Send ↗ button with signature indicator */}
          <div className="sajan-submit-block">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="sajan-submit-button"
            >
              <span className="sajan-submit-label">
                {status === "submitting" ? "Transmitting..." : "Send"}
              </span>
              <span className="sajan-submit-arrow">
                <ArrowUpRight size={44} />
              </span>
            </button>

            {/* Sajan Paudel Signature Slider Track Indicator */}
            <div className="sajan-track-line" aria-hidden="true">
              <span className="sajan-track-dot dot-left" />
              <span className="sajan-track-dot dot-center" />
              <span className="sajan-track-dot dot-right" />
            </div>

            {/* Fallback Email Contact */}
            <p className="sajan-fallback-text">
              Or connect directly with our strategic team at{" "}
              <a href="mailto:info@brandforgeagency.in" className="sajan-fallback-link">
                info@brandforgeagency.in
              </a>
            </p>
          </div>
        </form>
      )}
    </div>
  );
}

const sajanFormStyles = `
  /* Sajan Paudel Contact Form Foundation (Red, Black, White Palette) */
  .sajan-form-wrapper {
    position: relative;
    width: 100%;
    margin-top: 48px;
    padding-top: 48px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .sajan-form-container {
    display: flex;
    flex-direction: column;
    gap: clamp(24px, 3.2vw, 48px);
    width: 100%;
  }

  /* Conversational Form Row */
  .sajan-form-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: clamp(12px, 1.6vw, 28px) clamp(14px, 1.8vw, 32px);
    font-family: "General Sans", "Outfit", -apple-system, sans-serif;
    font-size: clamp(20px, 2.7vw, 42px);
    font-weight: 400;
    line-height: 1.25;
    color: #FAFAFC;
    letter-spacing: -0.018em;
  }

  .sajan-form-text {
    white-space: pre-wrap;
    color: #FAFAFC;
  }

  /* Auto-Sizing Input & Underline */
  .sajan-input-wrap {
    position: relative;
    display: inline-flex;
    min-width: 140px;
    max-width: 100%;
    padding-bottom: 6px;
    vertical-align: baseline;
  }

  .sajan-input-wrap.is-grow {
    flex: 1 1 320px;
  }

  .sajan-input-mirror {
    position: absolute;
    visibility: hidden;
    pointer-events: none;
    white-space: pre;
    font: inherit;
    padding: 0 4px;
    letter-spacing: inherit;
  }

  .sajan-input-field {
    appearance: none;
    font: inherit;
    color: #FAFAFC;
    font-weight: 500;
    min-width: 120px;
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    padding: 0 4px;
    caret-color: #EF4136;
    letter-spacing: inherit;
  }

  .sajan-input-field::placeholder {
    color: rgba(255, 255, 255, 0.35);
    font-weight: 400;
  }

  .sajan-input-field:focus::placeholder {
    color: rgba(255, 255, 255, 0.18);
  }

  .sajan-input-border {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.22);
    pointer-events: none;
    transition: background-color 0.25s ease, height 0.25s ease;
  }

  .sajan-input-wrap:focus-within .sajan-input-border {
    background-color: #EF4136;
    height: 2.5px;
    box-shadow: 0 0 10px rgba(239, 65, 54, 0.5);
  }

  .sajan-input-wrap.has-error .sajan-input-border {
    background-color: #EF4136;
    animation: sajanShake 0.35s ease;
  }

  @keyframes sajanShake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-6px); }
    40% { transform: translateX(6px); }
    60% { transform: translateX(-3px); }
    80% { transform: translateX(3px); }
  }

  /* Chip Buttons Group */
  .sajan-chip-group {
    display: inline-flex;
    flex-wrap: wrap;
    gap: clamp(8px, 1vw, 14px);
  }

  .sajan-chip {
    appearance: none;
    cursor: pointer;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.25);
    border-radius: 4px;
    padding: clamp(8px, 0.9vw, 14px) clamp(16px, 1.8vw, 28px);
    font-family: "General Sans", "Outfit", sans-serif;
    font-size: clamp(14px, 1.35vw, 22px);
    font-weight: 500;
    line-height: 1;
    color: #FAFAFC;
    white-space: nowrap;
    transition: border-color 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease;
    user-select: none;
  }

  .sajan-chip:hover {
    border-color: #FAFAFC;
  }

  .sajan-chip.is-selected {
    background: #EF4136;
    border-color: #EF4136;
    color: #FAFAFC;
    box-shadow: 0 4px 18px rgba(239, 65, 54, 0.4);
  }

  /* Kinetic Rolling Character effect inside Chips */
  .sajan-chip-text-wrap {
    display: inline-block;
    position: relative;
    overflow: hidden;
    line-height: 1;
    vertical-align: baseline;
  }

  .sajan-chip-text-base {
    display: flex;
    color: inherit;
  }

  .sajan-chip-text-clone {
    display: flex;
    color: inherit;
    position: absolute;
    top: 0;
    left: 0;
  }

  .sajan-chip-char {
    display: inline-block;
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .sajan-chip-text-clone .sajan-chip-char {
    transform: translateY(135%);
  }

  .sajan-chip:hover .sajan-chip-text-base .sajan-chip-char {
    transform: translateY(-135%);
  }

  .sajan-chip:hover .sajan-chip-text-clone .sajan-chip-char {
    transform: translateY(0%);
  }

  /* Giant Submit Button */
  .sajan-submit-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: clamp(28px, 4vw, 56px);
    gap: 16px;
    width: 100%;
  }

  .sajan-submit-button {
    appearance: none;
    cursor: pointer;
    background: transparent;
    border: none;
    border-bottom: 3.5px solid #EF4136;
    padding: clamp(8px, 1.2vw, 16px) clamp(18px, 2vw, 32px);
    font-family: "General Sans", "Outfit", -apple-system, sans-serif;
    font-size: clamp(48px, 8vw, 104px);
    font-weight: 500;
    letter-spacing: -0.035em;
    color: #FAFAFC;
    line-height: 1;
    display: inline-flex;
    align-items: center;
    gap: clamp(10px, 1.5vw, 24px);
    transition: color 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
  }

  .sajan-submit-button:hover {
    color: #EF4136;
    transform: translateY(-3px);
  }

  .sajan-submit-arrow {
    display: inline-flex;
    color: #EF4136;
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .sajan-submit-button:hover .sajan-submit-arrow {
    transform: translate(6px, -6px);
  }

  /* Sajan Track Line Indicator */
  .sajan-track-line {
    position: relative;
    width: clamp(200px, 30vw, 360px);
    height: 3px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 999px;
    margin: 8px 0;
  }

  .sajan-track-dot {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    background: #09090C;
    border: 2px solid #EF4136;
  }

  .dot-left {
    left: 20%;
    width: 20px;
    height: 20px;
    box-shadow: 0 0 10px rgba(239, 65, 54, 0.4);
  }

  .dot-center {
    left: 50%;
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 255, 0.4);
    border: none;
  }

  .dot-right {
    right: 15%;
    width: 14px;
    height: 14px;
    background: #EF4136;
    border: none;
    box-shadow: 0 0 8px #EF4136;
  }

  /* Fallback Link */
  .sajan-fallback-text {
    font-family: "General Sans", "Outfit", sans-serif;
    font-size: clamp(14px, 1.1vw, 17px);
    color: rgba(255, 255, 255, 0.55);
    margin: 4px 0 0;
    text-align: center;
  }

  .sajan-fallback-link {
    color: #FAFAFC;
    text-decoration: underline;
    text-underline-offset: 4px;
    transition: color 0.2s ease;
  }

  .sajan-fallback-link:hover {
    color: #EF4136;
  }

  /* Success Message Panel */
  .sajan-success-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: clamp(40px, 6vw, 70px) 24px;
    background: #000000;
    border: 1px solid rgba(239, 65, 54, 0.35);
    border-radius: 20px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7), 0 0 40px rgba(239, 65, 54, 0.12);
  }

  .sajan-success-icon-wrap {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: rgba(239, 65, 54, 0.12);
    border: 1px solid rgba(239, 65, 54, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
  }

  .sajan-success-icon {
    color: #EF4136;
  }

  .sajan-success-title {
    font-family: "General Sans", "Outfit", sans-serif;
    font-size: clamp(28px, 3.6vw, 44px);
    font-weight: 700;
    color: #FAFAFC;
    margin: 0 0 16px 0;
  }

  .sajan-success-sub {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: clamp(16px, 1.2vw, 19px);
    line-height: 1.65;
    color: rgba(255, 255, 255, 0.75);
    max-width: 620px;
    margin: 0 0 32px 0;
  }

  .text-white {
    color: #FAFAFC;
  }

  .text-red {
    color: #EF4136;
  }

  .sajan-reset-btn {
    appearance: none;
    cursor: pointer;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.25);
    color: #FAFAFC;
    padding: 12px 28px;
    border-radius: 8px;
    font-family: "General Sans", sans-serif;
    font-size: 0.92rem;
    font-weight: 600;
    transition: all 0.25s ease;
  }

  .sajan-reset-btn:hover {
    border-color: #EF4136;
    color: #EF4136;
  }
`;
