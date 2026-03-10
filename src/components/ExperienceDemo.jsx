'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Window from './Window';

const nodes = [
  { id: 1, entry: 1, cat: 'Evolution', phase: 'Opening', x: 0.05, title: 'The Centaur moment', summary: 'A product director called Justin a "Centaur" in a room of VPs and senior executives — from freestyle chess, where average players exceptional at collaborating with AI beat the strongest humans and strongest computers alone. The company asked him to lead a week-long upskilling session for the entire org.', reasoning: 'This was the inciting event. It surfaced a tension that would fuel everything: Justin was recognized for producing exceptional work with AI, but what he actually does — the way he thinks alongside the machine — is far harder to teach than prompt engineering. The gap between "what camera do you use" and "how do you see" became the foundational metaphor.', connections: 'Directly generated the camera analogy, which became the throughline for how Qord distinguishes between tool and mindset. Also created the strategic tension around IP and compensation that shaped protection decisions later.', sig: 'H' },
  { id: 2, entry: 2, cat: 'Decisions', phase: 'Opening', x: 0.10, title: 'The camera analogy', summary: 'Justin framed it with his wife\'s photography: people always ask her "what camera do you use." The camera is the tool. The eye is the thing. You can hand someone the camera. You cannot hand them the way of seeing.', reasoning: 'This analogy did more work than any formal definition. It distinguished what\'s teachable (the protocol, the steps) from what\'s transferable but not replicable (the judgment, the taste, the way of decomposing problems). It became the basis for licensing — teach the mindset openly, protect the system.', connections: 'The camera/eye distinction became the two-level architecture: mindset (the eye) and protocol (the camera). Informed the licensing strategy and workshop pedagogy.', sig: 'H' },
  { id: 3, entry: 4, cat: 'Dependencies', phase: 'Context', x: 0.15, title: 'The documents that broke', summary: 'Justin transferred 18 documents from a separate Claude project — a white paper, case study, executive briefs, agent instructions, the full output of a multi-agent AI system — into the conversation. The documents described the system. They did not carry the understanding.', reasoning: 'This act of manual translation between AI environments became the origin story. Claude could read about the system but not experience it. The thread broke at the boundary despite comprehensive documentation. The gap between artifacts and understanding is the core problem Qord solves.', connections: 'Direct precursor to the concept\'s emergence. Also created a sensitivity around employer IP that shaped how the origin story was framed in all public documents.', sig: 'H' },
  { id: 4, entry: 5, cat: 'Evolution', phase: 'Concept', x: 0.20, title: '"My job is fun now"', summary: 'Justin\'s boss told him "my job is fun now" after receiving work that created space for her to operate at her actual level instead of drowning in complexity she couldn\'t evaluate.', reasoning: 'The emotional anchor that reoriented the concept from knowledge transfer to creating space. The goal was never to make decision-makers smarter. It was to give them space to engage with depth on their own terms. Her face in that moment became the touchstone for why any of this matters.', connections: 'Directly shaped the "creating space" framing. Became the subject of a protocol verification test — the fact that a receiving AI could link this anecdote to the concept proved the thread held.', sig: 'H' },
  { id: 5, entry: 6, cat: 'Decisions', phase: 'Concept', x: 0.25, title: 'Named "Ladder"', summary: 'First name. The metaphor: instead of the builder translating down, the decision-maker gets lifted up. Protocol designed in a single evening — eight log categories, build-side and receive-side instructions. Sound, functional, and too small.', reasoning: 'Ladder captured the vertical dimension. But the architecture designed here — the eight categories, the two-sided design, the automatic log generation — survived every rename. What changed was the framing, not the mechanism.', connections: 'The Ladder architecture is the technical DNA of everything that followed. Thread expanded the scope. Qord made it ownable. The mechanism stayed.', sig: 'H' },
  { id: 6, entry: 8, cat: 'Risks', phase: 'Concept', x: 0.30, title: 'AI accelerated the problem', summary: 'AI was identified as having made the compression problem worse, not better. Polished decks in 20 minutes are still compressions. The packaging improved. The understanding did not. More artifacts arriving faster, drowning receivers in better-formatted versions of the same incomplete picture.', reasoning: 'Critical counter-narrative. The AI productivity space is built on "do more faster." Qord says: doing more faster doesn\'t matter if understanding doesn\'t survive the crossing. The distance hasn\'t closed — the speed to the gap increased.', connections: 'Became the opening argument of the manifesto. Positions Qord as addressing a problem AI has worsened, not solved.', sig: 'H' },
  { id: 7, entry: 9, cat: 'Architecture', phase: 'Protocol', x: 0.35, title: 'Eight categories designed', summary: 'The log was designed with eight categories: Decisions, Rejected Alternatives, Dependencies, Risk Awareness, Architecture, Scope Boundaries, Evolution, and Open Questions. Each entry captures summary, reasoning, and significance.', reasoning: 'Each category represents a specific type of understanding that dies at boundaries. Decisions survive but reasoning doesn\'t. Rejected alternatives are invisible. Dependencies are assumed. Format designed to be lightweight to generate and structured enough for any AI to parse.', connections: 'The eight categories became eight shapes in the visualization. The realization that they constitute a data schema drove the product pivot.', sig: 'H' },
  { id: 8, entry: 12, cat: 'Evolution', phase: 'Pivot', x: 0.41, title: 'Ladder becomes Thread', summary: 'The morning after building Ladder, Justin woke up knowing it was too small. Ladder was one direction across one gap. Understanding degrades at every boundary, in every direction. Renamed Thread — grab it anywhere, follow it either direction.', reasoning: 'The enterprise AI workflow showed bidirectional need: downstream insights needed to flow back upstream. Even returning to your own work over time means reconstructing from artifacts never designed to carry understanding. Thread captured the omnidirectional nature. Same mechanics, fundamentally bigger idea.', connections: 'First of three renames. Expanded scope from enterprise handoffs to universal problem.', sig: 'H' },
  { id: 9, entry: 14, cat: 'Dependencies', phase: 'Thread', x: 0.46, title: 'Summit Studios, 2002', summary: 'Justin connected the concept to a recording studio in Dallas, TX. Joined a band before he could play bass. Sat behind the engineer for a week, 12-14 hours a day. Watched how each phase anticipates the next — snare shaped for guitars that don\'t exist yet.', reasoning: 'Origin of the pattern — over two decades of seeing continuity before naming it. Not invented with AI. Started watching an engineer maintain understanding across every phase of record production. Recognized the same pattern across every medium since.', connections: 'Music production metaphor anchors the manifesto. The 24-year through-line separates Qord from a framework someone thought up last week.', sig: 'H' },
  { id: 10, entry: 16, cat: 'Evolution', phase: 'Thread', x: 0.51, title: 'The "lying in bed" insight', summary: 'Everyone has caught themselves mid-thought and retraced the chain — each thought led to the next through felt connection. The path was real but frays the moment you stop holding it. Qord is that, made intentional and made to survive the crossing.', reasoning: 'Gave everyone an immediate felt experience of the concept. No jargon needed. You already do this every night. Qord says: do it on purpose, across every boundary.', connections: 'One of two key manifesto metaphors alongside the studio story. Flagged as keynote opening — universal, felt, no jargon required.', sig: 'H' },
  { id: 11, entry: 18, cat: 'Evolution', phase: 'Testing', x: 0.56, title: 'Test 1 passed', summary: 'Receiving AI understood the morning-after realization, connected the boss\'s experience to creating space, applied thread thinking to a novel problem, and caught the trap: "you\'re asking me to compress the thing that argues compression is the problem."', reasoning: 'Proved viability. A retroactive log carried enough context for genuine depth beyond surface comprehension. The AI reasoned, connected, applied, and caught the contradiction. Honest caveat: ideal conditions, Claude-to-Claude.', connections: 'Validated the protocol architecture and grab points design. The trap test became the most powerful demonstration.', sig: 'H' },
  { id: 12, entry: 20, cat: 'Architecture', phase: 'Visualization', x: 0.61, title: 'The three-line sketch', summary: 'Three lines, same start and end. Line 1 nearly flat (the summary). Line 2 undulates (the deck). Line 3 alive with shapes mapping to eight categories. Click a shape, see what happened. Apple Notes, finger sketch, 10:36 PM, March 5, 2026.', reasoning: 'Three lines on one image IS the argument. The gap between line 1 and line 3 is what gets lost. Shapes make categories visible. Click-to-reveal mirrors grab points — you see texture, you pull, you get understanding.', connections: 'Became the interactive prototype, then the experience page. More powerful than the manifesto for making the concept undeniable.', sig: 'H' },
  { id: 13, entry: 21, cat: 'Risks', phase: 'Testing', x: 0.66, title: 'The live failure', summary: 'Justin moved the origin conversation into a Claude project, opened a new chat, asked about Thread\'s benefits. The new instance couldn\'t understand it. Same platform, same project — understanding broke between two chats.', reasoning: 'Most powerful validation — unplanned. Thread proved itself three times: twice deliberately, once when its absence failed live. The fix was exactly what the protocol prescribes.', connections: 'Also demonstrated the naming problem that drove the Qord rename. Became the emotional centerpiece — the opening slide.', sig: 'H' },
  { id: 14, entry: 26, cat: 'Rejected', phase: 'Naming', x: 0.71, title: 'Thread becomes Qord', summary: '"Thread" was too common — dozens of products use it. During the live failure, AI found other "Thread" products instead. "Qord" merges "cord" (connection) with Q (suggesting "record"). One syllable, ownable, searchable.', reasoning: 'Phonetically sounds like "cord" — what it is. Q makes it distinctive. No other product uses the name. Required a full nine-file documentation rewrite with careful handling of metaphor vs. brand name.', connections: 'Completed naming arc: Ladder (too narrow) → Thread (too common) → Qord (ownable, phonetically right, semantically dense).', sig: 'H' },
  { id: 15, entry: 30, cat: 'Evolution', phase: 'Product', x: 0.76, title: 'Methodology becomes product', summary: 'The eight categories are a data architecture. The log format is a product schema. Build-side and receive-side instructions are an API contract. Grab points are the interaction model. Qord becomes app, plugin, or integration layer.', reasoning: 'People build context with one AI, start from zero with another. Platforms treat memory as proprietary. No portability layer for understanding exists. Categories become columns. Entries become records. Visualization becomes UI.', connections: 'Reframes everything: documents become content marketing, protocol becomes specification, product becomes implementation.', sig: 'H' },
  { id: 16, entry: 32, cat: 'Decisions', phase: 'Product', x: 0.81, title: 'The experience page', summary: 'Show, don\'t tell. Real origin story as demo data. Live AI for actual receive-side interaction. Visitors see the timeline, click nodes, interact with genuine depth. Not a marketing page — a working demonstration.', reasoning: 'The gap between claiming Qord works and proving it is itself a boundary problem. Letting someone click into a node and get real depth from an AI carrying the full understanding is proof, not pitch.', connections: 'Requires the qord log as data, visualization as UI, API as intelligence. This is the page you\'re on right now.', sig: 'H' },
  { id: 17, entry: 35, cat: 'Dependencies', phase: 'Full Arc', x: 0.87, title: 'The 24-year through-line', summary: 'Qord connects to everything: Summit Studios (2002), music production, instructional design, an AI-powered cultural discovery platform, enterprise AI workflows, a nonprofit artist marketplace, a novella. It names the pattern underneath everything Justin builds.', reasoning: 'Not invented for a use case. Recognized across decades and named when conditions aligned. The Centaur moment was recognizing the pattern without the word. Qord is the meta-thread.', connections: 'Every portfolio piece demonstrates continuity without naming it. This gives the experience page its authenticity.', sig: 'H' },
  { id: 18, entry: 36, cat: 'Evolution', phase: 'Product', x: 0.94, title: 'The recursive irony', summary: 'The boundary problem kept recurring during the build of the tool that solves it. Moving conversations broke the thread. Details slipped between phases. The AI generating the log couldn\'t access the full depth and had to reconstruct from fragments.', reasoning: 'Validating, not just ironic. If the problem didn\'t recur, it wouldn\'t be pervasive. Every unplanned instance is evidence the problem is real and structural.', connections: 'Every recursion is content for the experience page. The recursion tells the story better than any manifesto.', sig: 'H' },
];

const cats = {
  Evolution: { shape: 'star', label: 'Evolution' },
  Decisions: { shape: 'square', label: 'Decisions' },
  Dependencies: { shape: 'circle', label: 'Dependencies' },
  Rejected: { shape: 'diamond', label: 'Rejected alternatives' },
  Risks: { shape: 'triangle', label: 'Risks' },
  Architecture: { shape: 'hexagon', label: 'Architecture' },
  Scope: { shape: 'pentagon', label: 'Scope boundaries' },
  Open: { shape: 'question', label: 'Open questions' },
};

const views = [
  { key: 'surface', label: 'what they see', desc: 'The summary. The bullet points. The flat line.' },
  { key: 'translated', label: "what they're given", desc: 'The deck. The brief. Smoothed out.' },
  { key: 'qord', label: 'the actual qord', desc: 'Every decision, pivot, risk, and breakthrough. Click any shape.' },
];

function Shape({ type, x, y, size, active, hovered, onClick }) {
  const s = size / 2;
  const fill = active ? '#fff' : '#000';
  const stroke = active ? '#000' : 'none';
  const sw = active ? 2 : 0;
  const opacity = active ? 1 : hovered ? 1 : 0.6;
  const common = { fill, stroke, strokeWidth: sw, opacity, cursor: 'pointer', style: { transition: 'all 0.1s' } };
  const wrap = (child) => <g onClick={onClick} transform={`translate(${x},${y})`}>{child}</g>;
  switch (type) {
    case 'square': return wrap(<rect x={-s} y={-s} width={size} height={size} {...common} />);
    case 'diamond': return wrap(<rect x={-s*0.75} y={-s*0.75} width={size*0.75} height={size*0.75} transform="rotate(45)" {...common} />);
    case 'circle': return wrap(<circle r={s*0.85} {...common} />);
    case 'triangle': return wrap(<polygon points={`0,${-s} ${s},${s*0.7} ${-s},${s*0.7}`} {...common} />);
    case 'hexagon': { const pts = Array.from({length:6},(_,i)=>{const a=(Math.PI/3)*i-Math.PI/2;return `${Math.cos(a)*s},${Math.sin(a)*s}`;}).join(' '); return wrap(<polygon points={pts} {...common} />); }
    case 'pentagon': { const pts = Array.from({length:5},(_,i)=>{const a=(Math.PI*2/5)*i-Math.PI/2;return `${Math.cos(a)*s*0.9},${Math.sin(a)*s*0.9}`;}).join(' '); return wrap(<polygon points={pts} {...common} />); }
    case 'star': { const pts = Array.from({length:10},(_,i)=>{const a=(Math.PI/5)*i-Math.PI/2;const r=i%2===0?s:s*0.4;return `${Math.cos(a)*r},${Math.sin(a)*r}`;}).join(' '); return wrap(<polygon points={pts} {...common} />); }
    case 'question': return wrap(<g><circle r={s*0.85} {...common} /><text textAnchor="middle" dominantBaseline="central" fontSize={size*0.55} fontWeight="bold" fontFamily="'Silkscreen', monospace" fill={active?'#000':'#fff'} style={{pointerEvents:'none'}}>?</text></g>);
    default: return wrap(<circle r={s*0.85} {...common} />);
  }
}

function MiniShape({ type }) {
  return <svg width={16} height={16} style={{overflow:'visible',display:'block'}}><Shape type={type} x={8} y={8} size={12} active={false} hovered={false} onClick={()=>{}} /></svg>;
}

function surfacePath(w, h) { const mid=h/2,pts=[]; for(let i=0;i<=80;i++){pts.push(`${i===0?'M':'L'}${(i/80)*w},${mid+Math.sin(i*0.08)*2+Math.sin(i*0.2)*1}`);} return pts.join(' '); }
function translatedPath(w, h) { const mid=h/2,pts=[]; for(let i=0;i<=150;i++){const t=i/150;pts.push(`${i===0?'M':'L'}${t*w},${mid+Math.sin(t*Math.PI*3.5)*18+Math.sin(t*Math.PI*7)*6+Math.sin(t*Math.PI*1.2)*10}`);} return pts.join(' '); }
function qordPath(w, h) { const mid=h/2,pts=[]; for(let i=0;i<=300;i++){const t=i/300;let y=mid+Math.sin(t*Math.PI*4)*22+Math.sin(t*Math.PI*9)*8+Math.cos(t*Math.PI*6)*12+Math.sin(t*Math.PI*2.5)*15; for(const d of nodes){const dist=Math.abs(t-d.x);if(dist<0.06)y+=Math.sin(dist*100)*(1-dist/0.06)*8;} pts.push(`${i===0?'M':'L'}${t*w},${y}`);} return pts.join(' '); }
function getY(t, h) { return h/2+Math.sin(t*Math.PI*4)*22+Math.sin(t*Math.PI*9)*8+Math.cos(t*Math.PI*6)*12+Math.sin(t*Math.PI*2.5)*15; }

export default function ExperienceDemo() {
  const [view, setView] = useState('surface');
  const [selectedId, setSelectedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [svgW, setSvgW] = useState(800);
  const svgRef = useRef(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [chatLoading, setChatLoading] = useState(false);
  const [chatError, setChatError] = useState(null);
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);
  const selected = nodes.find((n) => n.id === selectedId);

  useEffect(() => { const m=()=>{if(svgRef.current)setSvgW(svgRef.current.parentElement.offsetWidth);}; m(); window.addEventListener('resize',m); return()=>window.removeEventListener('resize',m); }, []);
  useEffect(() => { setChatMessages([]); setChatInput(''); setChatError(null); }, [selectedId]);
  useEffect(() => { setSelectedId(null); }, [view]);
  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [chatMessages]);
  useEffect(() => { if (selected) setTimeout(() => inputRef.current?.focus(), 300); }, [selected]);

  const svgH = 180, pad = 40, drawW = svgW - pad * 2;

  const sendMessage = useCallback(async () => {
    const text = chatInput.trim();
    if (!text || chatLoading) return;
    const nodeCtx = selected ? `The visitor is exploring: "${selected.title}" (${selected.phase})\nSummary: ${selected.summary}\nReasoning: ${selected.reasoning}\nConnections: ${selected.connections}\n\nTheir question:` : '';
    const isFirst = chatMessages.length === 0;
    const apiMsgs = chatMessages.map(m => ({ role: m.role, content: m.content }));
    apiMsgs.push({ role: 'user', content: isFirst ? `${nodeCtx}\n\n${text}` : text });

    setChatMessages(prev => [...prev, { role: 'user', content: text }]);
    setChatInput('');
    setChatLoading(true);
    setChatError(null);

    try {
      const res = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: apiMsgs, node: selected }) });
      if (!res.ok) { const err = await res.json(); throw new Error(err.error || 'Request failed'); }
      const data = await res.json();
      setChatMessages(prev => [...prev, { role: 'assistant', content: data.text }]);
    } catch (err) {
      setChatError(err.message);
    } finally { setChatLoading(false); }
  }, [chatInput, chatLoading, chatMessages, selected]);

  const handleKeyDown = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } };

  return (
    <>
      <Window title="experience qord" className="hero-window">
        <div className="origin-body" style={{ maxWidth: 640, textAlign: 'center' }}>
          <div className="section-heading" style={{ marginBottom: 12 }}>You&rsquo;re looking at a real qord.</div>
          <div className="section-text" style={{ marginBottom: 20 }}>This is the actual origin story of Qord — every decision, pivot, rejected alternative, and open question that shaped it from a conversation about being called a Centaur to the product you&rsquo;re looking at now.</div>
          <div className="section-text" style={{ color: '#888' }}>Toggle between the three views. See what gets lost at each boundary. Then click a shape and go deep.</div>
        </div>
      </Window>

      <Window title="qord.visualizer" id="visualizer">
        <div className="exp-tabs">
          {views.map(v => <button key={v.key} className={`exp-tab ${view===v.key?'active':''}`} onClick={()=>setView(v.key)}>{v.label}</button>)}
        </div>
        <div className="exp-desc">{views.find(v=>v.key===view)?.desc}</div>
        <div className="exp-canvas">
          <div className="exp-label" style={{left:12}}>START</div>
          <div className="exp-label" style={{right:12}}>NOW</div>
          <svg ref={svgRef} width="100%" height={svgH} style={{overflow:'visible',display:'block'}}>
            <rect x={pad-5} y={svgH/2-5} width={10} height={10} fill="#000" />
            <rect x={pad+drawW-5} y={svgH/2-5} width={10} height={10} fill="#000" />
            {view==='surface' && <path d={surfacePath(drawW,svgH)} fill="none" stroke="#000" strokeWidth={1.2} transform={`translate(${pad},0)`} />}
            {view==='translated' && <path d={translatedPath(drawW,svgH)} fill="none" stroke="#000" strokeWidth={1.2} transform={`translate(${pad},0)`} />}
            {view==='qord' && <>
              <path d={qordPath(drawW,svgH)} fill="none" stroke="#000" strokeWidth={1} opacity={0.2} transform={`translate(${pad},0)`} />
              {nodes.map(n => <g key={n.id} onMouseEnter={()=>setHoveredId(n.id)} onMouseLeave={()=>setHoveredId(null)}><Shape type={cats[n.cat].shape} x={pad+n.x*drawW} y={getY(n.x,svgH)} size={16} active={selectedId===n.id} hovered={hoveredId===n.id} onClick={()=>setSelectedId(selectedId===n.id?null:n.id)} /></g>)}
            </>}
          </svg>
        </div>

        {view==='surface' && <div className="exp-hint">Click <button className="exp-hint-link" onClick={()=>setView('qord')}>the actual qord</button> to see what&rsquo;s underneath.</div>}
        {view==='translated' && <div className="exp-hint">Closer. But the shapes — the decisions, the pivots, the risks — are smoothed out.</div>}

        {selected && view==='qord' && <>
          <div className="exp-detail">
            <div className="exp-detail-header">
              <MiniShape type={cats[selected.cat].shape} />
              <span className="exp-detail-cat">{cats[selected.cat].label}</span>
              <span className="exp-detail-phase">{selected.phase}</span>
              <span className="exp-detail-sig">{selected.sig==='H'?'HIGH':'MED'}</span>
            </div>
            <div className="exp-detail-title">{selected.title}</div>
            <div className="exp-detail-summary">{selected.summary}</div>
            <div className="exp-detail-reasoning">{selected.reasoning}</div>
            <div className="exp-detail-connections">{selected.connections}</div>
          </div>

          <div className="exp-chat">
            <div className="exp-chat-header">
              <span className="exp-chat-label">go deeper</span>
              <span className="exp-chat-sub">pull on this moment — ask anything</span>
            </div>
            {chatMessages.length > 0 && <div className="exp-chat-messages">
              {chatMessages.map((msg,i) => <div key={i} className={`exp-chat-msg ${msg.role}`}><div className="exp-chat-msg-role">{msg.role==='user'?'you':'qord'}</div><div className="exp-chat-msg-text">{msg.content}</div></div>)}
              {chatLoading && <div className="exp-chat-msg assistant"><div className="exp-chat-msg-role">qord</div><div className="exp-chat-msg-text exp-chat-loading">pulling the qord...</div></div>}
              {chatError && <div className="exp-chat-error">{chatError}</div>}
              <div ref={chatEndRef} />
            </div>}
            <div className="exp-chat-input-row">
              <textarea ref={inputRef} className="exp-chat-input" placeholder="What do you want to understand?" value={chatInput} onChange={e=>setChatInput(e.target.value)} onKeyDown={handleKeyDown} rows={1} disabled={chatLoading} />
              <button className="exp-chat-send" onClick={sendMessage} disabled={chatLoading||!chatInput.trim()}>pull</button>
            </div>
          </div>
        </>}

        {view==='qord' && !selected && <div className="exp-legend">
          {Object.entries(cats).map(([key,c]) => <div key={key} className="exp-legend-item"><MiniShape type={c.shape} /><span>{c.label}</span></div>)}
        </div>}
      </Window>

      <Window title="readme.txt">
        <div className="origin-body">
          <div className="origin-quote">That was one qord. One project&rsquo;s worth of understanding, made interactive.</div>
          <div className="section-text">You didn&rsquo;t read a summary. You pulled on the moments that mattered to you and followed the understanding as deep as you wanted. That&rsquo;s what Qord does.</div>
          <div className="section-text">Now imagine every project you&rsquo;ve built with AI had one of these. Every deep conversation, every complex decision, every creative evolution — preserved, portable, interactive, and accessible from any platform.</div>
          <div className="section-text" style={{color:'#888'}}>The protocol is built. The data architecture exists. The visualization works. The AI answers with real depth. What comes next is the product.</div>
        </div>
      </Window>
    </>
  );
}
