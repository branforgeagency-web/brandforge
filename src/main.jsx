// Bulletproof DOM reconciliation guard against mismatched node removal
// Prevents React unmount / HMR / translation crashes when external libraries (GSAP / Three.js / browser extensions) modify the DOM tree
if (typeof window !== 'undefined') {
  const originalRemoveChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function (child) {
    if (child && child.parentNode !== this) {
      if (console) {
        console.warn('[DOM Guard] Prevented removeChild crash on mismatched parent:', {
          expectedParent: this,
          actualParent: child.parentNode,
          childNode: child,
        });
      }
      return child.parentNode ? child.parentNode.removeChild(child) : child;
    }
    return originalRemoveChild.apply(this, arguments);
  };

  const originalInsertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function (newNode, referenceNode) {
    if (referenceNode && referenceNode.parentNode !== this) {
      if (console) {
        console.warn('[DOM Guard] Prevented insertBefore crash on mismatched reference node:', {
          expectedParent: this,
          actualParent: referenceNode.parentNode,
          referenceNode,
          newNode,
        });
      }
      return this.appendChild(newNode);
    }
    return originalInsertBefore.apply(this, arguments);
  };
}

import React from 'react'
import ReactDOM from 'react-dom/client'
import './config/amplify.js'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
