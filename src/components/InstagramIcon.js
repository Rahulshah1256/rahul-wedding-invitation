import React from 'react';

export default function InstagramIcon({ size = 24 }) {
  // Inline SVG styled to resemble the official Instagram gradient icon
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      role="img"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <defs>
        <linearGradient id="igGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F58529"/>
          <stop offset="30%" stopColor="#DD2A7B"/>
          <stop offset="60%" stopColor="#8134AF"/>
          <stop offset="100%" stopColor="#515BD4"/>
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#igGradient)"/>
      <circle cx="12" cy="12" r="5.5" fill="none" stroke="#fff" strokeWidth="2"/>
      <circle cx="17.5" cy="6.5" r="1.5" fill="#fff"/>
    </svg>
  );
}

