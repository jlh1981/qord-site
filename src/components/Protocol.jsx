import Window from './Window';

const steps = [
  {
    num: '01',
    title: 'Build normally',
    desc: 'Work with your AI environment the way you already do. The qord log generates as a byproduct of the build.',
  },
  {
    num: '02',
    title: 'Log accumulates',
    desc: 'Decisions, dead ends, pivots, breakthroughs. The log captures what mattered and why it mattered.',
  },
  {
    num: '03',
    title: 'Deliver with qord',
    desc: 'The deliverable ships with its qord log as a companion layer. The actual understanding, structured to survive the crossing.',
  },
  {
    num: '04',
    title: 'Receive with depth',
    desc: 'Any AI on the receiving side can use the qord log to provide full-depth understanding on demand.',
  },
];

export default function Protocol() {
  return (
    <Window title="protocol" id="protocol">
      <div className="window-body">
        <div className="section-number">02 / the protocol</div>
        <div className="section-heading">How Qord works</div>
        <div className="section-text" style={{ maxWidth: 600, marginBottom: 28 }}>
          The AI that helps build the work also quietly assembles the full
          continuity of understanding. The builder does no extra work.
          Understanding travels with the deliverable as a companion layer.
        </div>
      </div>
      <div className="protocol-steps">
        {steps.map((s) => (
          <div key={s.num} className="step">
            <div className="step-num">{s.num}</div>
            <div className="step-title">{s.title}</div>
            <div className="step-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </Window>
  );
}
