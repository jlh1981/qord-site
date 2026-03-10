'use client';

import Window from './Window';
import Link from 'next/link';

export default function CTA() {
  return (
    <Window title="alert">
      <div className="window-body" style={{ textAlign: 'center', padding: 48 }}>
        <div
          style={{
            fontFamily: "'Silkscreen', monospace",
            fontSize: 36,
            marginBottom: 8,
            opacity: 0.15,
          }}
        >
          ?
        </div>
        <div className="section-heading" style={{ fontSize: 16 }}>
          Understanding is breaking<br />at your boundaries right now.
        </div>
        <div
          className="section-text"
          style={{ margin: '16px auto 28px', maxWidth: 440 }}
        >
          Click into a real project. See the decisions, the pivots, the
          reasoning. Pull on any moment and go as deep as you want.
          That&rsquo;s what Qord does.
        </div>
        <div className="hero-buttons">
          <Link href="/experience" className="btn" style={{ textDecoration: 'none' }}>
            Experience Qord
          </Link>
        </div>
      </div>
    </Window>
  );
}
