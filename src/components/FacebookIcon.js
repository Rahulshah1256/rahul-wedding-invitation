import React from 'react';

/**
 * Facebook icon (inline SVG) so it looks consistent across browsers and doesn't
 * depend on the icon font glyph.
 */
const FacebookIcon = ({ size = 24, title = 'Facebook' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    role="img"
    aria-label={title}
    focusable="false"
  >
    <title>{title}</title>
    <path
      fill="currentColor"
      d="M22 12a10 10 0 1 0-11.562 9.874v-6.988H7.898V12h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.886h-2.33v6.988A10.002 10.002 0 0 0 22 12z"
    />
  </svg>
);

export default FacebookIcon;

