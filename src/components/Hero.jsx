'use client';

import Window from './Window';

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
          Qord is a methodology and a protocol for preserving the continuity
          of understanding across any boundary the work touches. The AI that
          builds the work also assembles a continuous line of understanding
          so it can be pulled through.
        </div>
        <div className="hero-buttons">
          <button className="btn" onClick={() => scrollTo('protocol')}>
            Read the protocol
          </button>
          <button className="btn btn-ghost" onClick={() => scrollTo('toolkit')}>
            Get the toolkit
          </button>
        </div>
      </div>
    </Window>
  );
}
