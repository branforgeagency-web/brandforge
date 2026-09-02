import React from 'react';
import { X, Send } from 'lucide-react';

export default function AuditModal({ isOpen, onClose }) {
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
