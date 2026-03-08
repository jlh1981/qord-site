import Window from './Window';

const items = [
  { icon: '[P]', name: 'Protocol', desc: 'The full Qord Protocol document' },
  { icon: '[M]', name: 'Manifesto', desc: 'Why Qord exists and what it solves' },
  { icon: '[T]', name: 'Templates', desc: 'Qord log templates for common workflows' },
  { icon: '[S]', name: 'Send-side', desc: "Instructions for the builder's AI environment" },
  { icon: '[R]', name: 'Receive-side', desc: "Instructions for the receiver's AI environment" },
  { icon: '[W]', name: 'Workshop', desc: 'Facilitator guide for team adoption' },
];

export default function Toolkit() {
  return (
    <Window title="toolkit" id="toolkit">
      <div className="window-body">
        <div className="section-number">03 / toolkit</div>
        <div className="section-heading">Everything you need</div>
        <div className="section-text" style={{ maxWidth: 540, marginBottom: 28 }}>
          Qord is platform-agnostic, domain-agnostic, and role-agnostic.
          These tools work with any AI environment.
        </div>
      </div>
      <div className="toolkit-grid">
        {items.map((item) => (
          <div key={item.name} className="toolkit-item">
            <div className="toolkit-icon">{item.icon}</div>
            <div className="toolkit-name">{item.name}</div>
            <div className="toolkit-desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </Window>
  );
}
