'use client';

import { useState, useRef, useEffect } from 'react';
import Window from './Window';

/* ─── ORIGIN STORY DATA ─────────────────────────────────────────── */
const qordData = [
  {
    id: 1, cat: 'Evolution', phase: 'Opening', x: 0.06,
    summary: 'Called a "Centaur" in a room of senior executives. A product director named the pattern — not just good with AI, but thinking alongside it in a way that\'s multiplicative.',
    reasoning: 'The term comes from freestyle chess. Not the strongest human or strongest computer, but the person who knows how to collaborate with the machine. That recognition became the seed.',
    sig: 'H',
  },
  {
    id: 2, cat: 'Decisions', phase: 'Opening', x: 0.11,
    summary: 'Framed the opportunity using the camera analogy: people ask the photographer what camera they use. They want the camera. What you have is the eye.',
    reasoning: 'Distinguished between the tool (teachable) and the way of seeing (transferable but not replicable). This framing became the through-line for everything that followed.',
    sig: 'H',
  },
  {
    id: 3, cat: 'Architecture', phase: 'Concept', x: 0.17,
    summary: 'Recognized the core problem: understanding degrades every time it crosses a boundary. Between people, platforms, phases, agents, even within one person over time.',
    reasoning: 'This wasn\'t about handoffs being sloppy. Everyone involved is trying. The format itself can\'t carry the depth. The structure of how we transfer knowledge is the failure point.',
    sig: 'H',
  },
  {
    id: 4, cat: 'Decisions', phase: 'Concept', x: 0.22,
    summary: 'First version called "Ladder." The metaphor: instead of the builder translating down, the receiver gets lifted up to the level where the work was made.',
    reasoning: 'The hierarchical metaphor felt right initially — builder at the top, decision-maker climbing up. But it encoded a direction that was too narrow.',
    sig: 'M',
  },
  {
    id: 5, cat: 'Architecture', phase: 'Concept', x: 0.28,
    summary: 'Designed the protocol: eight categories of understanding captured as a log during the build. Decisions, rejected alternatives, dependencies, risks, architecture, scope, evolution, open questions.',
    reasoning: 'These eight categories emerged from asking: what does someone need to understand beyond the work itself? Not the content — the reasoning, the tradeoffs, the shape of the thinking.',
    sig: 'H',
  },
  {
    id: 6, cat: 'Architecture', phase: 'Concept', x: 0.33,
    summary: 'Two-sided design: build-side instructions and receive-side instructions. The AI that helps build quietly assembles the log. The AI on the other side uses it to answer questions at full depth.',
    reasoning: 'Neither side does extra work. The builder builds. The receiver asks. The protocol is the invisible layer between them.',
    sig: 'H',
  },
  {
    id: 7, cat: 'Rejected', phase: 'Concept', x: 0.38,
    summary: 'Rejected the idea of the log being human-readable documentation. The log is for the AI, not for the person. The person just asks questions and gets depth.',
    reasoning: 'Every knowledge management system that asks humans to write documentation fails because the documentation becomes one more thing to maintain. The log writes itself.',
    sig: 'M',
  },
  {
    id: 8, cat: 'Evolution', phase: 'Testing', x: 0.44,
    summary: 'First protocol test under ideal conditions. A deep, single-arc conversation. The receiving AI passed all four verification tests — reasoning, connection, application, and a deliberate trap.',
    reasoning: 'The trap was asking the AI to "summarize in bullet points" — a request to compress a concept about the damage of compression. It caught the irony. That proved depth, not just recall.',
    sig: 'H',
  },
  {
    id: 9, cat: 'Evolution', phase: 'Testing', x: 0.49,
    summary: 'Second test: messy, scattered project. Five conversations, mixed topics, enterprise docs only. The receiving AI connected themes across the scatter and surfaced emotional depth.',
    reasoning: 'The messy test was more important than the clean one. Real projects are scattered. The protocol held across strategic and emotional layers.',
    sig: 'H',
  },
  {
    id: 10, cat: 'Risks', phase: 'Testing', x: 0.54,
    summary: 'Live failure: moved the conversation into a Claude project. A new chat in the same project couldn\'t understand the concept sitting right next to it.',
    reasoning: 'The understanding degraded at the boundary between one chat and another — inside the same platform, inside the same project. The absence of the protocol proved the need for it.',
    sig: 'H',
  },
  {
    id: 11, cat: 'Rejected', phase: 'Pivot', x: 0.59,
    summary: 'Rejected the "Ladder" name. The metaphor implied one direction — builder up to receiver. The real pattern is multidirectional. The understanding breaks everywhere.',
    reasoning: 'Between agents, between platforms, between phases, even within yourself over time. Ladder was too small for what the concept actually was.',
    sig: 'H',
  },
  {
    id: 12, cat: 'Evolution', phase: 'Pivot', x: 0.64,
    summary: 'Renamed to "Thread." Not about lifting someone up. About pulling the understanding through, across any boundary, in any direction.',
    reasoning: 'Thread captures the thing that actually happens: a continuous line of understanding that breaks at every crossing. The protocol keeps it intact.',
    sig: 'H',
  },
  {
    id: 13, cat: 'Scope', phase: 'Methodology', x: 0.69,
    summary: 'Realized the protocol is an add-on, not the core. The methodology — thinking in continuity, awareness of what must survive each boundary — is where the real unlock lives.',
    reasoning: 'Someone who adopts the mindset and never touches the protocol will work differently tomorrow. The protocol makes understanding durable where AI is involved. The methodology changes how people think.',
    sig: 'H',
  },
  {
    id: 14, cat: 'Architecture', phase: 'Visualization', x: 0.74,
    summary: 'Conceived the three-line visualization. Same start, same end. Line one flat. Line two undulates. Line three is alive with shapes representing the eight log categories.',
    reasoning: 'The gap between line one and line three, visible in a single image, is the argument. No words needed. Click a shape, see what happened at that moment.',
    sig: 'H',
  },
  {
    id: 15, cat: 'Dependencies', phase: 'Visualization', x: 0.79,
    summary: 'Built a working interactive prototype. Three views, category-coded shapes, click-to-reveal detail panels. Populated with real data from the origin conversation.',
    reasoning: 'The visualization makes the invisible visible. People don\'t want to read logs. They want to see the shape of what was built and click into the moments that matter.',
    sig: 'M',
  },
  {
    id: 16, cat: 'Evolution', phase: 'Product', x: 0.84,
    summary: 'Renamed to Qord. The concept outgrew "Thread" — too common a word, too many collisions. Qord is unique. A made-up word that carries the meaning.',
    reasoning: 'A product needs a name that can be owned completely. Qord sounds like "cord" — something that connects, carries, holds things together across distance.',
    sig: 'H',
  },
  {
    id: 17, cat: 'Scope', phase: 'Product', x: 0.89,
    summary: 'Reframed from methodology to product. Qord becomes an app, a plugin, an integration layer — whatever someone needs it to be. Personal. Business. Anything.',
    reasoning: 'The eight categories are the data architecture. The build-side and receive-side instructions are the API contract. The grab points are the interaction model. The protocol was already a product schema.',
    sig: 'H',
  },
  {
    id: 18, cat: 'Open', phase: 'Product', x: 0.94,
    summary: 'How does Qord connect to other platforms? How does it preserve understanding across AI boundaries? How does it become the interoperability layer that doesn\'t exist yet?',
    reasoning: 'People build deep context with one AI, then start from zero on another. There\'s no portability layer for understanding. Every platform treats memory as proprietary. Qord fills that gap.',
    sig: 'H',
  },
];

/* ─── CATEGORY → SHAPE MAPPING ──────────────────────────────────── */
const cats = {
  Decisions:    { shape: 'square',    label: 'Decisions' },
  Rejected:     { shape: 'diamond',   label: 'Rejected alternatives' },
  Dependencies: { shape: 'circle',    label: 'Dependencies' },
  Risks:        { shape: 'triangle',  label: 'Risks' },
  Architecture: { shape: 'hexagon',   label: 'Architecture' },
  Scope:        { shape: 'pentagon',  label: 'Scope boundaries' },
  Evolution:    { shape: 'star',      label: 'Evolution' },
  Open:         { shape: 'question',  label: 'Open questions' },
};

/* ─── SVG SHAPE RENDERER ────────────────────────────────────────── */
function Shape({ type, x, y, size, active, hovered, onClick }) {
  const s = size / 2;
  const fill = active ? '#fff' : '#000';
  const stroke = active ? '#000' : 'none';
  const sw = active ? 2 : 0;
  const opacity = active ? 1 : hovered ? 1 : 0.6;
  const common = { fill, stroke, strokeWidth: sw, opacity, cursor: 'pointer', style: { transition: 'all 0.1s' } };

  const wrap = (child) => (
    <g onClick={onClick} transform={`translate(${x},${y})`}>{child}</g>
  );

  switch (type) {
    case 'square':
      return wrap(<rect x={-s} y={-s} width={size} height={size} {...common} />);
    case 'diamond':
      return wrap(<rect x={-s * 0.75} y={-s * 0.75} width={size * 0.75} height={size * 0.75} transform="rotate(45)" {...common} />);
    case 'circle':
      return wrap(<circle r={s * 0.85} {...common} />);
    case 'triangle':
      return wrap(<polygon points={`0,${-s} ${s},${s * 0.7} ${-s},${s * 0.7}`} {...common} />);
    case 'hexagon': {
      const pts = Array.from({ length: 6 }, (_, i) => {
        const a = (Math.PI / 3) * i - Math.PI / 2;
        return `${Math.cos(a) * s},${Math.sin(a) * s}`;
      }).join(' ');
      return wrap(<polygon points={pts} {...common} />);
    }
    case 'pentagon': {
      const pts = Array.from({ length: 5 }, (_, i) => {
        const a = (Math.PI * 2 / 5) * i - Math.PI / 2;
        return `${Math.cos(a) * s * 0.9},${Math.sin(a) * s * 0.9}`;
      }).join(' ');
      return wrap(<polygon points={pts} {...common} />);
    }
    case 'star': {
      const pts = Array.from({ length: 10 }, (_, i) => {
        const a = (Math.PI / 5) * i - Math.PI / 2;
        const r = i % 2 === 0 ? s : s * 0.4;
        return `${Math.cos(a) * r},${Math.sin(a) * r}`;
      }).join(' ');
      return wrap(<polygon points={pts} {...common} />);
    }
    case 'question':
      return wrap(
        <g>
          <circle r={s * 0.85} {...common} />
          <text textAnchor="middle" dominantBaseline="central" fontSize={size * 0.55} fontWeight="bold" fontFamily="'Silkscreen', monospace" fill={active ? '#000' : '#fff'} style={{ pointerEvents: 'none' }}>?</text>
        </g>
      );
    default:
      return wrap(<circle r={s * 0.85} {...common} />);
  }
}

/* ─── MINI SHAPE FOR LEGEND ─────────────────────────────────────── */
function MiniShape({ type }) {
  return (
    <svg width={16} height={16} style={{ overflow: 'visible', display: 'block' }}>
      <Shape type={type} x={8} y={8} size={12} active={false} hovered={false} onClick={() => {}} />
    </svg>
  );
}

/* ─── LINE GENERATORS ───────────────────────────────────────────── */
function surfaceLine(w, h) {
  const mid = h / 2;
  const pts = [];
  for (let i = 0; i <= 80; i++) {
    const x = (i / 80) * w;
    const y = mid + Math.sin(i * 0.08) * 2 + Math.sin(i * 0.2) * 1;
    pts.push(`${i === 0 ? 'M' : 'L'}${x},${y}`);
  }
  return pts.join(' ');
}

function translatedLine(w, h) {
  const mid = h / 2;
  const pts = [];
  for (let i = 0; i <= 150; i++) {
    const t = i / 150;
    const x = t * w;
    const y = mid + Math.sin(t * Math.PI * 3.5) * 18 + Math.sin(t * Math.PI * 7) * 6 + Math.sin(t * Math.PI * 1.2) * 10;
    pts.push(`${i === 0 ? 'M' : 'L'}${x},${y}`);
  }
  return pts.join(' ');
}

function qordLine(w, h) {
  const mid = h / 2;
  const pts = [];
  for (let i = 0; i <= 300; i++) {
    const t = i / 300;
    const x = t * w;
    let y = mid;
    y += Math.sin(t * Math.PI * 4) * 22;
    y += Math.sin(t * Math.PI * 9) * 8;
    y += Math.cos(t * Math.PI * 6) * 12;
    y += Math.sin(t * Math.PI * 2.5) * 15;
    for (const d of qordData) {
      const dist = Math.abs(t - d.x);
      if (dist < 0.06) y += Math.sin(dist * 100) * (1 - dist / 0.06) * 8;
    }
    pts.push(`${i === 0 ? 'M' : 'L'}${x},${y}`);
  }
  return pts.join(' ');
}

function getYAt(t, h) {
  const mid = h / 2;
  let y = mid;
  y += Math.sin(t * Math.PI * 4) * 22;
  y += Math.sin(t * Math.PI * 9) * 8;
  y += Math.cos(t * Math.PI * 6) * 12;
  y += Math.sin(t * Math.PI * 2.5) * 15;
  return y;
}

/* ─── VIEWS ─────────────────────────────────────────────────────── */
const views = [
  { key: 'surface', label: 'what they see', desc: 'The summary. The bullet points. The flat line.' },
  { key: 'translated', label: 'what they\'re given', desc: 'The deck. The brief. Smoothed out.' },
  { key: 'qord', label: 'the actual qord', desc: 'Every decision, pivot, risk, and breakthrough. Click any shape.' },
];

/* ─── MAIN COMPONENT ────────────────────────────────────────────── */
export default function ExperienceDemo() {
  const [view, setView] = useState('surface');
  const [selectedId, setSelectedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [svgW, setSvgW] = useState(800);
  const svgRef = useRef(null);
  const selected = qordData.find((d) => d.id === selectedId);

  useEffect(() => {
    const measure = () => {
      if (svgRef.current) setSvgW(svgRef.current.parentElement.offsetWidth);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => { setSelectedId(null); }, [view]);

  const svgH = 180;
  const pad = 40;
  const drawW = svgW - pad * 2;

  return (
    <>
      {/* ── INTRO WINDOW ── */}
      <Window title="experience qord" className="hero-window">
        <div className="origin-body" style={{ maxWidth: 640, textAlign: 'center' }}>
          <div className="section-heading" style={{ marginBottom: 12 }}>
            You&rsquo;re looking at a real qord.
          </div>
          <div className="section-text" style={{ marginBottom: 20 }}>
            This is the actual origin story of Qord — every decision, pivot,
            rejected alternative, and open question that shaped it from a
            conversation about being called a Centaur to the product
            you&rsquo;re looking at now.
          </div>
          <div className="section-text" style={{ color: '#888' }}>
            Toggle between the three views. See what gets lost.
            Then click into the shapes and feel the depth that survives.
          </div>
        </div>
      </Window>

      {/* ── VISUALIZATION WINDOW ── */}
      <Window title="qord.visualizer" id="visualizer">
        {/* View tabs */}
        <div className="exp-tabs">
          {views.map((v) => (
            <button
              key={v.key}
              className={`exp-tab ${view === v.key ? 'active' : ''}`}
              onClick={() => setView(v.key)}
            >
              {v.label}
            </button>
          ))}
        </div>

        {/* View description */}
        <div className="exp-desc">
          {views.find((v) => v.key === view)?.desc}
        </div>

        {/* SVG canvas */}
        <div className="exp-canvas">
          <div className="exp-label" style={{ left: 12 }}>START</div>
          <div className="exp-label" style={{ right: 12 }}>NOW</div>
          <svg
            ref={svgRef}
            width="100%"
            height={svgH}
            style={{ overflow: 'visible', display: 'block' }}
          >
            {/* Endpoint squares */}
            <rect x={pad - 5} y={svgH / 2 - 5} width={10} height={10} fill="#000" />
            <rect x={pad + drawW - 5} y={svgH / 2 - 5} width={10} height={10} fill="#000" />

            {view === 'surface' && (
              <path
                d={surfaceLine(drawW, svgH)}
                fill="none" stroke="#000" strokeWidth={1.2}
                transform={`translate(${pad}, 0)`}
              />
            )}

            {view === 'translated' && (
              <path
                d={translatedLine(drawW, svgH)}
                fill="none" stroke="#000" strokeWidth={1.2}
                transform={`translate(${pad}, 0)`}
              />
            )}

            {view === 'qord' && (
              <>
                <path
                  d={qordLine(drawW, svgH)}
                  fill="none" stroke="#000" strokeWidth={1} opacity={0.25}
                  transform={`translate(${pad}, 0)`}
                />
                {qordData.map((entry) => {
                  const cat = cats[entry.cat];
                  const cx = pad + entry.x * drawW;
                  const cy = getYAt(entry.x, svgH);
                  return (
                    <g
                      key={entry.id}
                      onMouseEnter={() => setHoveredId(entry.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <Shape
                        type={cat.shape}
                        x={cx} y={cy}
                        size={entry.sig === 'H' ? 16 : 12}
                        active={selectedId === entry.id}
                        hovered={hoveredId === entry.id}
                        onClick={() => setSelectedId(selectedId === entry.id ? null : entry.id)}
                      />
                    </g>
                  );
                })}
              </>
            )}
          </svg>
        </div>

        {/* Hint for surface/translated */}
        {view === 'surface' && (
          <div className="exp-hint">
            Click{' '}
            <button className="exp-hint-link" onClick={() => setView('qord')}>
              the actual qord
            </button>
            {' '}to see what&rsquo;s underneath.
          </div>
        )}
        {view === 'translated' && (
          <div className="exp-hint">
            Closer. But the shapes — the decisions, the pivots, the risks — are smoothed out. The depth is described, not carried.
          </div>
        )}

        {/* Detail panel */}
        {selected && view === 'qord' && (
          <div className="exp-detail">
            <div className="exp-detail-header">
              <MiniShape type={cats[selected.cat].shape} />
              <span className="exp-detail-cat">{cats[selected.cat].label}</span>
              <span className="exp-detail-phase">{selected.phase}</span>
              <span className="exp-detail-sig">
                {selected.sig === 'H' ? 'HIGH' : 'MED'}
              </span>
            </div>
            <div className="exp-detail-summary">{selected.summary}</div>
            <div className="exp-detail-reasoning">{selected.reasoning}</div>
          </div>
        )}

        {/* Legend */}
        {view === 'qord' && (
          <div className="exp-legend">
            {Object.entries(cats).map(([key, c]) => (
              <div key={key} className="exp-legend-item">
                <MiniShape type={c.shape} />
                <span>{c.label}</span>
              </div>
            ))}
          </div>
        )}
      </Window>

      {/* ── WHAT YOU JUST SAW ── */}
      <Window title="readme.txt">
        <div className="origin-body">
          <div className="origin-quote">
            That was one qord. One project&rsquo;s worth of understanding, made visible.
          </div>
          <div className="section-text">
            Now imagine every project you&rsquo;ve ever built with AI had one of
            these. Every deep conversation, every complex decision, every creative
            evolution — preserved, portable, and accessible from any platform.
          </div>
          <div className="section-text">
            Qord captures the understanding that lives between the lines of your
            work. It connects to the tools you already use. It carries across every
            boundary that currently breaks the continuity — between AI platforms,
            between team members, between the version of you that built something
            last month and the version of you that returns to it today.
          </div>
          <div className="section-text" style={{ color: '#888' }}>
            The protocol is built. The data architecture exists. The visualization
            works. What comes next is the product.
          </div>
        </div>
      </Window>
    </>
  );
}
