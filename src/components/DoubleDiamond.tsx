// DP's notebook sketch of how anything gets made (an app, a poster, an edit):
// two diamonds, and two arrows that both run from the end back to the start.
const PATHS = ['M70 150L190 60', 'M70 150L190 240', 'M190 60L320 150', 'M190 240L320 150', 'M330 150L460 60', 'M330 150L460 240', 'M460 60L585 150', 'M460 240L585 150'];

export default function DoubleDiamond() {
  const ink = '#2B2722', red = '#C8452B';
  return (
    <div className="dd settle">
      <svg viewBox="0 -24 660 330" role="img" aria-labelledby="dd-t">
        <title id="dd-t">double diamond: discover, define, develop, deliver. two arrows run from the end back to the start, one over the top and one underneath</title>
        <defs>
          <marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L9 5L1 9" fill="none" stroke={ink} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></marker>
          <marker id="ahr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L9 5L1 9" fill="none" stroke={red} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></marker>
        </defs>
        <g filter="url(#rough)" fill="none" stroke={ink} strokeWidth="2.2" strokeLinecap="round">
          {PATHS.map((d) => <path key={d} d={d} markerEnd="url(#ah)" />)}
          <path d="M598 134C620 -24 40 -24 62 132" strokeWidth="2" markerEnd="url(#ah)" />
          <path d="M600 166C640 282 520 296 330 294C150 294 30 280 62 170" stroke={red} strokeDasharray="7 7" markerEnd="url(#ahr)" />
        </g>
        <g fill={ink}><circle cx="66" cy="150" r="6" /><circle cx="325" cy="150" r="6" /><circle cx="592" cy="150" r="6" /></g>
        <text x="20" y="184" fontSize="22">start</text><text x="306" y="184" fontSize="22">mid</text><text x="596" y="184" fontSize="22">end</text>
        <text x="112" y="156" fontSize="26">discover</text><text x="225" y="156" fontSize="26">define</text>
        <text x="368" y="156" fontSize="26">develop</text><text x="478" y="156" fontSize="26">deliver</text>
        <text x="244" y="0" fontSize="20" style={{ fill: '#8A7F6A' }}>or back to the drawing board</text>
        <text x="252" y="286" fontSize="22" style={{ fill: red }}>then it starts again</text>
      </svg>
    </div>
  );
}
