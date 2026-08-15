"use client";

import React, { useEffect, useState } from "react";
import {
  Check,
  ChevronDown,
  Layers,
  Mail,
  MessageSquare,
  Phone,
  ShieldCheck,
  User,
  X,
} from "lucide-react";

const SERVICES_LIST = [
  "Select a Service",
  "Full Brand Transformation",
  "Performance Marketing & Media Buying",
  "Search Engine Optimization (SEO)",
  "Brand Strategy & Positioning",
  "Social Media Growth & Content",
  "Website Development & Design",
];

const wait = (duration) =>
  new Promise((resolve) => setTimeout(resolve, duration));

export default function TransformationModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [service, setService] = useState("Select a Service");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (status !== "idle") return;

    try {
      setStatus("loading");
      await wait(750);

      setStatus("success");
      await wait(1800);
      onClose();
    } finally {
      setStatus("idle");
    }
  };

  return (
    <div className="bf-modal-backdrop">
      <style>{styles}</style>

      <div className="bf-modal-card">
        {/* CLOSE BUTTON */}
        <button
          type="button"
          className="bf-modal-close"
          onClick={onClose}
          aria-label="Close enquiry modal"
        >
          <X size={20} />
        </button>

        {/* HEADER WITH BRANDFORGE LOGO */}
        <header className="bf-modal-header">
          <img
            src="/brandforge-logo.png"
            alt="BrandForge Logo"
            className="bf-modal-logo"
          />
          <h2>Get in Touch with Our Growth Team</h2>
          <p>Fill out the enquiry form below & expect a response within 4 hours</p>
        </header>

        {/* FORM */}
        <form className="bf-modal-form" onSubmit={handleSubmit}>
          {/* NAME */}
          <div className="bf-field">
            <span className="bf-field-icon">
              <User size={18} />
            </span>
            <input
              required
              type="text"
              value={name}
              placeholder="Your Name *"
              autoComplete="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* EMAIL */}
          <div className="bf-field">
            <span className="bf-field-icon">
              <Mail size={18} />
            </span>
            <input
              required
              type="email"
              value={email}
              placeholder="Email Address *"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* MOBILE */}
          <div className="bf-field">
            <span className="bf-field-icon">
              <Phone size={18} />
            </span>
            <input
              required
              type="tel"
              value={mobile}
              placeholder="Mobile Number *"
              autoComplete="tel"
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

          {/* SERVICE DROPDOWN */}
          <div className="bf-field bf-select-field">
            <span className="bf-field-icon">
              <Layers size={18} />
            </span>
            <select
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              {SERVICES_LIST.map((srv) => (
                <option
                  key={srv}
                  value={srv}
                  disabled={srv === "Select a Service"}
                >
                  {srv}
                </option>
              ))}
            </select>
            <span className="bf-select-arrow">
              <ChevronDown size={18} />
            </span>
          </div>

          {/* MESSAGE */}
          <div className="bf-field bf-textarea-field">
            <span className="bf-field-icon bf-textarea-icon">
              <MessageSquare size={18} />
            </span>
            <textarea
              required
              rows={3}
              value={message}
              placeholder="Your Message / Requirement *"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button
            className={`bf-modal-submit ${status === "success" ? "is-success" : ""}`}
            type="submit"
            disabled={status !== "idle"}
          >
            {status === "success" ? (
              <>
                <Check size={18} />
                <span>Enquiry Submitted Successfully!</span>
              </>
            ) : status === "loading" ? (
              <>
                <span className="bf-loader" />
                <span>Sending Enquiry...</span>
              </>
            ) : (
              "Send Enquiry"
            )}
          </button>
        </form>

        <p className="bf-modal-footer-note">
          <ShieldCheck
            size={15}
            style={{ verticalAlign: "middle", marginRight: 6, color: "#EF4136" }}
          />
          Your details are 100% secure and confidential.
        </p>
      </div>
    </div>
  );
}

const styles = `
  .bf-modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 99999;
    background: rgba(0, 0, 0, 0.88);
    backdrop-filter: blur(12px);
    display: grid;
    place-items: center;
    overflow-y: auto;
    padding: clamp(16px, 3vw, 32px);
    animation: bfFadeIn 0.25s ease-out;
  }

  @keyframes bfFadeIn {
    from { opacity: 0; transform: scale(0.97); }
    to { opacity: 1; transform: scale(1); }
  }

  .bf-modal-card {
    position: relative;
    width: 100%;
    max-width: 460px;
    padding: clamp(24px, 5vw, 36px);
    background: #0A0A0C;
    border: 1.5px solid #EF4136;
    border-radius: 20px;
    color: #FFFFFF;
    font-family: "Outfit", "Inter", sans-serif;
  }

  .bf-modal-close {
    position: absolute;
    top: 18px;
    right: 18px;
    background: #16161A;
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: #FFFFFF;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease;
  }

  .bf-modal-close:hover {
    background: #EF4136;
    border-color: #EF4136;
  }

  .bf-modal-header {
    text-align: center;
    margin-bottom: 22px;
  }

  .bf-modal-logo {
    height: 48px;
    width: auto;
    object-fit: contain;
    margin-bottom: 12px;
    display: inline-block;
  }

  .bf-modal-header h2 {
    font-size: 1.15rem;
    font-weight: 800;
    color: #FFFFFF;
    margin: 0 0 6px;
    line-height: 1.25;
    letter-spacing: -0.01em;
  }

  .bf-modal-header p {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.65);
    margin: 0;
    line-height: 1.4;
  }

  .bf-modal-form {
    display: flex;
    flex-direction: column;
    gap: 13px;
  }

  .bf-field {
    position: relative;
    display: flex;
    align-items: center;
  }

  .bf-field-icon {
    position: absolute;
    left: 14px;
    z-index: 2;
    color: #EF4136;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .bf-textarea-icon {
    top: 14px;
  }

  .bf-field input,
  .bf-field select,
  .bf-field textarea {
    width: 100%;
    padding: 0 14px 0 44px;
    background: #141418;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 0.88rem;
    font-family: inherit;
    outline: none;
    transition: border-color 0.2s ease;
  }

  .bf-field input,
  .bf-field select {
    height: 46px;
  }

  .bf-field select {
    appearance: none;
    cursor: pointer;
    color: #FFFFFF;
  }

  .bf-field select option {
    background: #0A0A0C;
    color: #FFFFFF;
  }

  .bf-select-arrow {
    position: absolute;
    right: 14px;
    z-index: 2;
    color: rgba(255, 255, 255, 0.5);
    pointer-events: none;
  }

  .bf-textarea-field textarea {
    padding-top: 12px;
    padding-bottom: 12px;
    resize: none;
  }

  .bf-field input::placeholder,
  .bf-field textarea::placeholder {
    color: rgba(255, 255, 255, 0.42);
  }

  .bf-field input:focus,
  .bf-field select:focus,
  .bf-field textarea:focus {
    border-color: #EF4136;
  }

  .bf-modal-submit {
    height: 48px;
    width: 100%;
    margin-top: 6px;
    background: #EF4136;
    border: 1px solid #EF4136;
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 0.9rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: background 0.2s ease, opacity 0.2s ease;
  }

  .bf-modal-submit:hover:not(:disabled) {
    background: #D8342A;
    border-color: #D8342A;
  }

  .bf-modal-submit.is-success {
    background: #16A34A;
    border-color: #16A34A;
  }

  .bf-modal-submit:disabled {
    cursor: default;
    opacity: 0.9;
  }

  .bf-loader {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-top-color: #FFFFFF;
    border-radius: 50%;
    animation: bfSpin 0.6s linear infinite;
  }

  .bf-modal-footer-note {
    text-align: center;
    margin: 16px 0 0;
    font-size: 0.78rem;
    color: rgba(255, 255, 255, 0.55);
  }

  @keyframes bfSpin {
    to { transform: rotate(360deg); }
  }
`;
