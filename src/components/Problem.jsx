import Window from './Window';

export default function Problem() {
  return (
    <Window title="the problem" id="problem">
      <div className="two-col">
        <div>
          <div className="section-number">01 / the problem</div>
          <div className="section-heading">
            Work moves. Understanding stays behind.
          </div>
          <div className="section-text">
            Every time work crosses a boundary (between people, between tools,
            between phases) the understanding that built it gets compressed,
            summarized, or abandoned. The person on the other side receives the
            deliverable. The reasoning, the dead ends, the pivots that shaped
            it never arrive.
          </div>
        </div>
        <div>
          <div className="section-text" style={{ paddingTop: 40 }}>
            We write briefs, build decks, and schedule alignment meetings
            because understanding breaks at every handoff. The more complex
            the work, the more it breaks. AI accelerates the work, which
            widens the gap between what was understood during the build and
            what the receiver can recover from the output alone.
          </div>
        </div>
      </div>

      {/* Three lines visualization */}
      <div className="lines-demo">
        <div className="line-cell">
          <svg className="line-svg" viewBox="0 0 200 60" fill="none">
            <rect x="-3" y="32" width="6" height="6" stroke="#000" strokeWidth="1.2" fill="none" />
            <path
              d="M 0 35 C 50 25, 100 40, 150 28 C 170 24, 185 30, 200 28"
              stroke="#000"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <rect x="197" y="25" width="6" height="6" stroke="#000" strokeWidth="1.2" fill="none" />
          </svg>
          <div className="line-name">smooth</div>
          <div className="line-label">How people think it went</div>
        </div>
        <div className="line-cell">
          <svg className="line-svg" viewBox="0 0 200 60" fill="none">
            <rect x="-3" y="32" width="6" height="6" stroke="#000" strokeWidth="1.2" fill="none" />
            <path
              d="M 0 35 C 25 28, 35 42, 50 32 C 65 22, 75 40, 90 30 C 105 20, 115 38, 135 28 C 150 20, 165 35, 200 28"
              stroke="#000"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <rect x="197" y="25" width="6" height="6" stroke="#000" strokeWidth="1.2" fill="none" />
          </svg>
          <div className="line-name">refined</div>
          <div className="line-label">White papers &amp; summaries</div>
        </div>
        <div className="line-cell">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/qord_line.svg"
            alt="qord mark"
            className="line-cell-logo"
            style={{ width: '100%', height: 'auto' }}
          />
          <div className="line-name">reality + qord</div>
          <div className="line-label">The grab points make the mess usable</div>
        </div>
      </div>
    </Window>
  );
}
