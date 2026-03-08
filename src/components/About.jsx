'use client';

import Window from './Window';

export default function About() {
  return (
    <Window title="about" id="about">
      <div className="origin-body">
        <div className="section-number">04 / origin</div>
        <div className="section-heading">Built on purpose</div>
        <div className="section-text">
          Qord was built by Justin Lee Hodges. He kept running into the same
          problem: understanding never survived the handoff. The work would
          arrive, the reasoning behind it wouldn&rsquo;t. So every boundary
          became a reconstruction effort.
        </div>
        <div className="origin-quote">
          &ldquo;They always just ask her what camera she uses.&rdquo;
        </div>
        <div className="section-text">
          That line comes from watching his wife, a photographer whose work
          stops people in their tracks. They want to know her gear. They skip
          past the thing that actually matters: how she sees. Qord exists
          because the same thing happens with knowledge work. People see strong
          output and reach for the tool. They skip the eye, the way of seeing
          that shaped the output in the first place. Qord has two layers for
          this reason. The protocol is the camera: a structured mechanism for
          capturing and transferring understanding. The methodology is the eye:
          a way of thinking about boundaries, about what survives a crossing
          and what doesn&rsquo;t, about where grab points need to be placed so
          someone on the other side can pick up the line of understanding. The
          protocol can be downloaded and run today. The eye takes practice.
          But the eye can be trained.
        </div>
        <div className="section-text">
          Qord was built, tested, and validated inside a real workflow. It was
          then proven again when its own absence caused the exact failure it
          was designed to prevent. It works because it emerged from the work.
        </div>
        <div style={{ marginTop: 32, textAlign: 'center' }}>
          <button className="btn btn-ghost" onClick={() => {}}>
            Read the full story
          </button>
        </div>
      </div>
    </Window>
  );
}
