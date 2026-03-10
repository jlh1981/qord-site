'use client';

import Window from './Window';
import Link from 'next/link';

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Window title="qord" className="hero-window">
      <div className="hero-body">
        <div className="hero-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/qord_logo_1.svg"
            alt="qord logo"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className="hero-tagline">
          Pull the understanding through.
        </div>
        <div className="hero-sub">
          Understanding breaks every time work crosses a boundary &mdash;
          between people, between tools, between conversations on the same
          platform. Qord preserves it. Click into a real project and feel
          the difference.
        </div>
        <div className="hero-buttons">
          <Link href="/experience" className="btn" style={{ textDecoration: 'none' }}>
            Experience Qord
          </Link>
          <button className="btn btn-ghost" onClick={() => scrollTo('problem')}>
            Learn more
          </button>
        </div>
      </div>
    </Window>
  );
}
