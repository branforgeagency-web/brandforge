import React, { useState, useEffect } from 'react';
import { Terminal, Zap, Calculator, Target, Cpu } from 'lucide-react';

export default function CommandPaletteModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const items = [
    { title: 'Claim Free Strategy Audit', sub: 'Get custom ROI projection & marketing report', icon: Zap, action: () => { alert('⚡ Strategy Audit initiated!'); onClose(); } },
    { title: 'PPC & Google Ads Scaling', sub: 'Targeted hyper-scaling & ad spend optimization', icon: Target, action: () => { alert('Opening PPC Services...'); onClose(); } },
    { title: 'AI Marketing Automation', sub: 'Generative lead pipelines & chatbots', icon: Cpu, action: () => { alert('Opening AI Engine...'); onClose(); } },
    { title: 'Launch ROI Calculator', sub: 'Calculate revenue lift based on spend', icon: Calculator, action: () => { alert('Opening ROI Calculator...'); onClose(); } }
  ];

  const filtered = items.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) || 
    item.sub.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="cmd-modal-backdrop active" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="cmd-modal-container">
        <div className="cmd-header">
          <Terminal size={18} className="cmd-term-icon" />
          <input
            type="text"
            autoFocus
            placeholder="Type a service, tool, or shortcut..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className="cmd-esc-hint" onClick={onClose}>ESC</span>
        </div>

        <div className="cmd-body">
          {filtered.length === 0 ? (
            <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-muted)' }}>
              No cyber commands found for "{query}"
            </div>
          ) : (
            filtered.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="cmd-item" onClick={item.action}>
                  <div className="cmd-icon-box">
                    <IconComp size={16} />
                  </div>
                  <div className="cmd-item-info">
                    <div className="cmd-item-title">{item.title}</div>
                    <div className="cmd-item-sub">{item.sub}</div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
