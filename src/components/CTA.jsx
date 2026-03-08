'use client';

import Window from './Window';

export default function CTA() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

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
          Every handoff costs something. Qord preserves what the deliverable
          alone can&rsquo;t carry.
        </div>
        <div className="hero-buttons">
          <button className="btn" onClick={() => scrollTo('toolkit')}>
            Get Qord
          </button>
          <button className="btn btn-ghost" onClick={() => scrollTo('protocol')}>
            Learn more
          </button>
        </div>
      </div>
    </Window>
  );
}
