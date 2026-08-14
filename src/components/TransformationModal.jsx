import React, { useState } from 'react';
import { X, Zap, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function TransformationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    revenue: '$1M - $5M',
  });

  if (!isOpen) return null;

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2400);
  }

  return (
    <div className="modal-backdrop-overlay">
      <style>{`
        .modal-backdrop-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: rgba(3, 3, 5, 0.85);
          backdrop-filter: blur(20px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: modalFadeIn 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content-glass {
          position: relative;
          width: 100%;
          max-width: 640px;
          background: #0B0B0C;
          border: 1px solid rgba(239, 65, 54, 0.35);
          border-radius: 24px;
          padding: clamp(24px, 4vw, 40px);
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.9), 0 0 45px rgba(239, 65, 54, 0.25);
          color: #FFFFFF;
          font-family: 'Outfit', 'Plus Jakarta Sans', sans-serif;
        }

        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #FFFFFF;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          background: #EF4136;
          border-color: #EF4136;
          transform: scale(1.1);
        }

        .modal-eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          font-weight: 700;
          color: #EF4136;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 8px;
        }

        .modal-header-text h2 {
          font-size: clamp(1.4rem, 2.5vw, 2rem);
          font-weight: 900;
          line-height: 1.1;
          color: #FFFFFF;
          margin: 0 0 10px;
        }

        .modal-header-text p {
          font-size: 0.92rem;
          color: #94A3B8;
          margin: 0 0 24px;
          line-height: 1.5;
        }

        .modal-inputs-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        @media (max-width: 540px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.68rem;
          font-weight: 700;
          color: #94A3B8;
          letter-spacing: 0.08em;
        }

        .form-group input,
        .form-group select {
          background: #141416;
          border: 1px solid rgba(239, 65, 54, 0.25);
          border-radius: 12px;
          padding: 12px 14px;
          color: #FFFFFF;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .form-group input:focus,
        .form-group select:focus {
          border-color: #EF4136;
          box-shadow: 0 0 15px rgba(239, 65, 54, 0.3);
        }

        .btn-modal-submit {
          background: #EF4136;
          border: 1px solid #EF4136;
          color: #FFFFFF;
          padding: 14px 24px;
          border-radius: 9999px;
          font-size: 0.9rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          margin-top: 8px;
          box-shadow: 0 0 25px rgba(239, 65, 54, 0.5);
          transition: all 0.25s ease;
        }

        .btn-modal-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 40px rgba(239, 65, 54, 0.8);
        }

        .form-trust-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 0.76rem;
          color: #94A3B8;
          margin-top: 4px;
        }

        .modal-success-state {
          text-align: center;
          padding: 30px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }

        .success-icon-wrap {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(239, 65, 54, 0.15);
          border: 2px solid #EF4136;
          color: #EF4136;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 35px rgba(239, 65, 54, 0.5);
        }

        .modal-success-state h2 {
          font-size: 1.5rem;
          font-weight: 900;
          color: #FFFFFF;
          margin: 0;
        }

        .modal-success-state p {
          font-size: 0.92rem;
          color: #94A3B8;
          line-height: 1.5;
          margin: 0;
        }

        .success-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(239, 65, 54, 0.12);
          border: 1px solid rgba(239, 65, 54, 0.4);
          color: #EF4136;
          padding: 6px 16px;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 700;
        }
      `}</style>

      <div className="modal-content-glass">
        
        {/* CLOSE BUTTON */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="modal-success-state">
            <div className="success-icon-wrap">
              <Zap size={44} fill="currentColor" />
            </div>
            <h2>TRANSFORMATION ENGINE ACTIVATED!</h2>
            <p>Our senior strategy team is auditing your brand channels. Expect a detailed growth blueprint within 4 business hours.</p>
            <div className="success-badge">
              <CheckCircle2 size={16} />
              <span>Priority Response Slot Reserved</span>
            </div>
          </div>
        ) : (
          <div className="modal-form-body">
            <div className="modal-header-text">
              <span className="modal-eyebrow">⚡ BRANDFORGE TRANSFORMATION ENGINE</span>
              <h2>START YOUR BRAND TRANSFORMATION</h2>
              <p>Fill in your parameters to receive a 360° audit and custom growth strategy blueprint.</p>
            </div>

            <form onSubmit={handleSubmit} className="modal-inputs-form">
              <div className="form-row">
                <div className="form-group">
                  <label>FULL NAME *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>COMPANY EMAIL *</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>COMPANY / WEBSITE</label>
                  <input
                    type="text"
                    placeholder="company.com"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>CURRENT ANNUAL REVENUE</label>
                  <select
                    value={formData.revenue}
                    onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                  >
                    <option value="Under $1M">Under $1M</option>
                    <option value="$1M - $5M">$1M - $5M</option>
                    <option value="$5M - $20M">$5M - $20M</option>
                    <option value="$20M+">$20M+</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn-modal-submit">
                <Zap size={18} fill="currentColor" />
                <span>EXECUTE TRANSFORMATION ENGINE</span>
              </button>

              <div className="form-trust-note">
                <ShieldCheck size={14} />
                <span>NDA Protected • 100% Confidential Brand Audit</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
