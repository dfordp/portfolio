// DP's notebook sketch of how projects go: two diamonds and a loop back to the start.
const PATHS = ['M70 150L190 60', 'M70 150L190 240', 'M190 60L320 150', 'M190 240L320 150', 'M330 150L460 60', 'M330 150L460 240', 'M460 60L585 150', 'M460 240L585 150'];

export default function DoubleDiamond() {
  const ink = '#2B2722', red = '#C8452B', muted = '#8A7F6A';
  return (
    <div className="dd settle">
      <svg viewBox="0 0 660 300" role="img" aria-labelledby="dd-t">
        <title id="dd-t">double diamond: discover and define, then develop and deliver, then back to the start</title>
        <defs>
          <marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L9 5L1 9" fill="none" stroke={ink} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></marker>
          <marker id="ahr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1L9 5L1 9" fill="none" stroke={red} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></marker>
        </defs>
        <g filter="url(#rough)" fill="none" stroke={ink} strokeWidth="2.2" strokeLinecap="round">
          {PATHS.map((d) => <path key={d} d={d} markerEnd="url(#ah)" />)}
          <path d="M600 160C640 260 520 292 330 290C150 290 30 270 62 168" stroke={red} strokeDasharray="7 7" markerEnd="url(#ahr)" />
        </g>
        <g fill={ink}><circle cx="66" cy="150" r="6" /><circle cx="325" cy="150" r="6" /><circle cx="592" cy="150" r="6" /></g>
        <text x="28" y="182" fontSize="22">start</text><text x="305" y="182" fontSize="22">mid</text><text x="590" y="182" fontSize="22">ship</text>
        <text x="112" y="156" fontSize="26">discover</text><text x="225" y="156" fontSize="26">define</text>
        <text x="368" y="156" fontSize="26">develop</text><text x="478" y="156" fontSize="26">deliver</text>
        <text x="250" y="282" fontSize="22" style={{ fill: red }}>then it starts again</text>
        <text x="96" y="40" fontSize="18" style={{ fill: muted }}>go wide</text><text x="232" y="40" fontSize="18" style={{ fill: muted }}>narrow down</text>
        <text x="356" y="40" fontSize="18" style={{ fill: muted }}>go wide again</text><text x="494" y="40" fontSize="18" style={{ fill: muted }}>narrow, ship</text>
      </svg>
    </div>
  );
}
