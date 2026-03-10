import Window from './Window';
import Link from 'next/link';

export default function Protocol() {
  return (
    <Window title="how it works" id="howitworks">
      <div className="window-body" style={{ padding: '48px 32px' }}>
        <div className="section-number">02 / how it works</div>
        <div className="section-text" style={{ maxWidth: 600, marginBottom: 28 }}>
          Qord captures the understanding as you build. The decisions,
          the rejected paths, the reasoning, the open questions. It travels
          with the work across any boundary. On the other side, the depth
          is there when someone needs it.
        </div>
        <Link href="/experience" className="btn" style={{ textDecoration: 'none' }}>
          See what that looks like
        </Link>
      </div>
    </Window>
  );
}
