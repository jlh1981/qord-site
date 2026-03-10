import Window from './Window';

const steps = [
  {
    num: '01',
    title: 'Captures',
    desc: 'As you work with AI, Qord quietly logs the understanding behind the work — the decisions, the rejected paths, the reasoning, the open questions. No extra effort.',
  },
  {
    num: '02',
    title: 'Carries',
    desc: 'The qord travels with the deliverable across any boundary — between people, platforms, phases, or conversations. The understanding stays intact.',
  },
  {
    num: '03',
    title: 'Surfaces',
    desc: 'On the other side, the receiver sees the shape of what they\u2019re holding. Grab points invite them in. They pull on whatever matters to them and get real depth.',
  },
  {
    num: '04',
    title: 'Connects',
    desc: 'Understanding flows in every direction — forward, backward, across platforms. One continuous line, accessible from any point, in any direction.',
  },
];

export default function Protocol() {
  return (
    <Window title="how it works" id="howitworks">
      <div className="window-body">
        <div className="section-number">02 / how it works</div>
        <div className="section-heading">Understanding that survives</div>
        <div className="section-text" style={{ maxWidth: 600, marginBottom: 28 }}>
          Qord preserves the continuity of understanding as work moves across
          boundaries. The builder does no extra work. The receiver gets genuine
          depth instead of a summary.
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
