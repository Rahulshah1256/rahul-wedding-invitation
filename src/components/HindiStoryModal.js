import React, { useEffect } from 'react';
import './HindiStoryModal.css';

export default function HindiStoryModal({ open, title, children, onClose }) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.();
    };

    document.addEventListener('keydown', onKeyDown);

    // Prevent background scroll while modal is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="hindi-modal__overlay" onMouseDown={onClose} role="presentation">
      <div className="hindi-modal" onMouseDown={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <div className="hindi-modal__header">
          <h4 className="hindi-modal__title">{title}</h4>
          <button type="button" className="hindi-modal__close" onClick={onClose} aria-label="Close">
            &times;
          </button>
        </div>

        <div className="hindi-modal__body">{children}</div>

        <div className="hindi-modal__footer">
          <button type="button" className="hindi-modal__closeBtn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
