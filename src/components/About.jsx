'use client';

import Window from './Window';
import Link from 'next/link';

export default function About() {
  return (
    <Window title="about" id="about">
      <div className="origin-body">
        <div className="section-number">03 / origin</div>
        <div className="section-heading">Built from the problem</div>
        <div className="section-text">
          Qord was built by Justin Lee Hodges. The pattern behind it goes
          back over twenty years, to a recording studio in Dallas, watching
          an engineer shape each phase of a record for phases that
          didn&rsquo;t exist yet. When the understanding pulled through, the
          result was alive. When it broke at any crossing, you could hear it.
        </div>
        <div className="section-text">
          The same pattern showed up everywhere: enterprise systems,
          instructional design, product development, creative work. The
          understanding always mattered most and was always the first thing
          lost. AI gave the capacity to formalize the pattern into a system.
          Working with AI as a thinking partner, two decades of pattern
          recognition became a protocol, a product, and a proof.
        </div>
        <div className="section-text">
          Qord was proven when its own absence caused the exact failure it
          was designed to prevent. Understanding broke between two
          conversations on the same platform, in the same project.
        </div>
        <div style={{ marginTop: 32, textAlign: 'center' }}>
          <Link href="/experience" className="btn btn-ghost" style={{ textDecoration: 'none' }}>
            See the full story
          </Link>
        </div>
      </div>
    </Window>
  );
}
