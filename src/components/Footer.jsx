'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <div className="footer">
      <span>qord v1.9 / 2026</span>
      <span>
        <Link
          href="/experience"
          style={{
            color: 'inherit',
            textDecoration: 'none',
            opacity: 0.5,
            transition: 'opacity 0.1s',
          }}
          onMouseEnter={(e) => (e.target.style.opacity = 1)}
          onMouseLeave={(e) => (e.target.style.opacity = 0.5)}
        >
          experience
        </Link>
      </span>
    </div>
  );
}
