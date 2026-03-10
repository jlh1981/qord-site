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
            Every time work crosses a boundary, between people,
            between tools, between phases, even between two conversations
            on the same platform, the understanding that built it
            gets compressed, summarized, or lost. The person on the other
            side receives the deliverable. The reasoning, the dead ends,
            the pivots that shaped it never arrive.
          </div>
        </div>
        <div>
          <div className="section-text" style={{ paddingTop: 40 }}>
            AI made it faster, not better. Everyone can produce a polished
            deck in twenty minutes. It&rsquo;s still a compression. More
            artifacts arriving faster, at every boundary, all looking
            authoritative, all compressing the understanding. The gap
            didn&rsquo;t close. The speed to the gap increased.
          </div>
        </div>
      </div>

      {/* Three lines visualization */}
      <div className="lines-demo">
        <div className="line-cell">
          <svg className="line-svg" viewBox="-10 10 220 40" fill="none">
            <rect x="-6" y="29" width="12" height="12" fill="#000" />
            <path
              d="M 0 35 C 50 25, 100 40, 150 28 C 170 24, 185 30, 200 28"
              stroke="#000"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <rect x="194" y="22" width="12" height="12" fill="#000" />
          </svg>
          <div className="line-name">the deliverable</div>
          <div className="line-label">What arrives</div>
        </div>
        <div className="line-cell">
          <svg className="line-svg" viewBox="-10 10 220 40" fill="none">
            <rect x="-6" y="29" width="12" height="12" fill="#000" />
            <path
              d="M 0 35 C 25 28, 35 42, 50 32 C 65 22, 75 40, 90 30 C 105 20, 115 38, 135 28 C 150 20, 165 35, 200 28"
              stroke="#000"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <rect x="194" y="22" width="12" height="12" fill="#000" />
          </svg>
          <div className="line-name">the summary</div>
          <div className="line-label">Compressed and incomplete</div>
        </div>
        <div className="line-cell">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/qord_line.svg"
            alt="qord mark"
            className="line-cell-logo"
            style={{ width: '100%', height: 'auto' }}
          />
          <div className="line-name">the qord</div>
          <div className="line-label">The understanding, preserved</div>
        </div>
      </div>
    </Window>
  );
}
