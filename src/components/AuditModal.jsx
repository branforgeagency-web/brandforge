import React, { useEffect } from 'react';
import { X, Send } from 'lucide-react';

export default function AuditModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      if (window.__lenis) window.__lenis.stop();
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (window.__lenis) window.__lenis.start();
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (window.__lenis) window.__lenis.start();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      await fetch("https://formsubmit.co/ajax/brandforgedigitalmarketing@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: `⚡ New Free Audit Request from ${data.name || data.email || 'Website Visitor'}`
        })
      });
    } catch (err) {
      console.error(err);
    }
    alert('⚡ STRATEGY AUDIT SUBMITTED! A BrandForge senior strategist will contact you within 2 hours.');
    onClose();
  };

  return (
    <div className="audit-modal-backdrop active" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <style>{styles}</style>
      <div className="audit-modal-box">
        <button className="audit-close-btn" onClick={onClose}>
          <X size={16} />
        </button>

        <div className="audit-header">
          <div className="audit-tag">⚡ FREE 30-MIN STRATEGY SESSION</div>
          <h2>Ignite Your Digital Power</h2>
          <p>Fill out the form below to receive a custom performance breakdown and growth blueprint from BrandForge strategists.</p>
        </div>

        <form className="audit-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="input-wrap">
              <label>FULL NAME</label>
              <input type="text" name="name" required placeholder="Alex Mercer" />
            </div>
            <div className="input-wrap">
              <label>WORK EMAIL</label>
              <input type="email" name="email" required placeholder="alex@company.com" />
            </div>
          </div>

          <div className="input-wrap">
            <label>WEBSITE URL / BRAND</label>
            <input type="text" name="website" required placeholder="https://yourbrand.com" />
          </div>

          <div className="input-wrap">
            <label>MONTHLY MARKETING BUDGET</label>
            <select name="budget" required defaultValue="">
              <option value="" disabled>Select Monthly Ad Spend Range...</option>
              <option value="5k-10k">$5,000 - $10,000 / mo</option>
              <option value="10k-25k">$10,000 - $25,000 / mo</option>
              <option value="25k-100k">$25,000 - $100,000 / mo</option>
              <option value="100k+">$100,000+ / mo</option>
            </select>
          </div>

          <button type="submit" className="btn-electric-cta full-width btn-lg">
            <div className="btn-content">
              <Send size={16} />
              <span>GET MY CUSTOM AUDIT REPORT</span>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = `
  .audit-modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 99999;
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    display: grid;
    place-items: center;
    overflow-y: auto;
    padding: clamp(16px, 3vw, 32px);
  }

  .audit-modal-box {
    position: relative;
    width: 100%;
    max-width: 480px;
    padding: clamp(24px, 4vw, 36px);
    background: rgba(10, 8, 14, 0.35);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(239, 65, 54, 0.35);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 35px rgba(239, 65, 54, 0.08);
    border-radius: 20px;
    color: #FFFFFF;
    font-family: "Outfit", sans-serif;
  }

  .audit-close-btn {
    position: absolute;
    top: 16px;
    right: 16px;
    background: rgba(22, 22, 26, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: #FFFFFF;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .audit-close-btn:hover {
    background: #EF4136;
    border-color: #EF4136;
  }

  .audit-tag {
    color: #EF4136;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.1em;
    margin-bottom: 6px;
  }

  .audit-header h2 {
    margin: 0 0 8px;
    font-size: 1.3rem;
    font-weight: 900;
    color: #FFFFFF;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
  }

  .audit-header p {
    margin: 0 0 20px;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.45;
  }

  .audit-form {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .input-wrap label {
    display: block;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.08em;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 6px;
  }

  .input-wrap input,
  .input-wrap select {
    width: 100%;
    height: 44px;
    padding: 0 14px;
    background: rgba(6, 5, 9, 0.5);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 13px;
    font-family: inherit;
    outline: none;
    box-sizing: border-box;
    transition: border-color 0.2s ease, background 0.2s ease;
  }

  .input-wrap input:focus,
  .input-wrap select:focus {
    border-color: #EF4136;
    background: rgba(6, 5, 9, 0.75);
  }

  .input-wrap select option {
    background: #0A0A0C;
    color: #FFFFFF;
  }
`;
