// Detailed ink illustrations for projects (CLAUDE.md "Design tokens").
// Plain SVG strings: they reference the shared #hatch, #dots and #rough2 defs in the root layout.
const TN = '#EBE2CC', CD = '#FBF8F1', PP = '#F3EDE0', HT = 'url(#hatch)', DT = 'url(#dots)', RD = '#C8452B', YL = '#F6D86B';
const D = (b: string) => `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid meet"><g filter="url(#rough2)" fill="none" stroke="#2B2722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${b}</g></svg>`;
const txt = (x: number, y: number, s: number, t: string, c = '#2B2722') => `<text x="${x}" y="${y}" font-family="Caveat, var(--font-hand)" font-size="${s}" fill="${c}" stroke="none">${t}</text>`;
const holes = (y: number) => Array.from({ length: 14 }, (_, i) => `<rect x="${20 + i * 14}" y="${y}" width="7" height="6" fill="${PP}" stroke="none"/>`).join('');

export const COVERS: Record<string, string> = {
  aarchid: D(`<g transform="rotate(-6 52 40)"><rect x="18" y="16" width="74" height="46" fill="${YL}" stroke="none"/>${txt(26, 36, 15, 'water:', '#5a4508')}${txt(26, 53, 15, 'every tue', '#5a4508')}<path d="M24 49L86 45" stroke-width="1.6"/></g>
  <path d="M110 22c-10 0-12-12-2-13 2-8 14-9 17-2 9-1 11 9 3 11z" fill="${CD}" stroke-width="1.6"/><path d="M114 30c-3 5-5 8-5 10a5 5 0 0 0 10 0c0-2-2-5-5-10z" fill="${CD}" stroke-width="1.5"/>
  <path d="M62 128h88v11H62z" fill="${TN}"/><path d="M67 139h78l-10 50H77z" fill="${TN}"/><path d="M118 139h27l-10 50h-23z" fill="${HT}" stroke="none"/><path d="M76 160h58" stroke-width="1.1" stroke-dasharray="2 4"/>
  <ellipse cx="106" cy="129" rx="38" ry="3" fill="${DT}" stroke="none"/>
  <path d="M106 128c-2-18-4-34 2-58"/>
  <path d="M104 112c-24 0-42-14-46-32 20-2 40 10 46 32z" fill="${TN}"/><path d="M104 112C88 100 72 90 58 80" stroke-width="1.2"/><path d="M90 102l-2-10M79 95l-3-8M70 88l-4-6" stroke-width="1"/>
  <path d="M106 96c20-6 37-22 41-40-20 2-36 18-41 40z" fill="${HT}"/><path d="M106 96c14-12 28-26 41-40" stroke-width="1.2"/>
  <path d="M107 72c-8-14-6-30 4-40 6 14 4 28-4 40z" fill="${TN}"/><path d="M107 72c1-14 2-26 4-40" stroke-width="1.1"/>
  <path d="M103 88c-13-6-21-18-21-30 12 4 20 16 21 30z" fill="${CD}"/><path d="M103 88c-6-10-14-20-21-30" stroke-width="1"/>
  <path d="M152 80c22-12 42-12 62-2" stroke-dasharray="3 6" stroke-width="1.4"/>
  <rect x="214" y="20" width="86" height="164" rx="14" fill="${CD}"/><rect x="222" y="36" width="70" height="120" rx="4" fill="${PP}" stroke-width="1.3"/><path d="M247 28h20" stroke-width="2.4"/><circle cx="257" cy="170" r="6" stroke-width="1.3"/>
  <path d="M257 122c-10-2-16-12-15-22 10 2 15 12 15 22z" fill="${TN}" stroke-width="1.3"/><path d="M257 122c8-4 12-14 10-24-8 4-11 14-10 24z" fill="${HT}" stroke-width="1.3"/><path d="M257 122v10" stroke-width="1.3"/><path d="M247 132h20l-3 10h-14z" fill="${TN}" stroke-width="1.3"/>
  <g stroke="${RD}" stroke-width="2.4"><path d="M232 62V50h12"/><path d="M270 50h12v12"/><path d="M282 136v12h-12"/><path d="M244 148h-12v-12"/></g>
  ${txt(150, 196, 15, 'looks a bit thirsty')}`),
  ombly: D(`<path d="M38 14h106l26 26v148H38z" fill="${CD}"/><path d="M144 14v26h26" fill="${TN}"/>
  <path d="M52 32h62" stroke-width="3.2"/><path d="M52 50h98M52 62h80" stroke-width="1.3"/>
  <path d="M52 82h34" stroke-width="1.3"/><rect x="94" y="76" width="58" height="12" fill="#2B2722"/>
  <path d="M52 104h34" stroke-width="1.3"/><text x="96" y="108" font-family="sans-serif" font-size="10" fill="#2B2722" stroke="none">4111 1111 1111</text>
  <rect x="98" y="86" width="58" height="12" fill="#2B2722" transform="rotate(-16 98 98)"/>
  <rect x="91" y="97" width="72" height="15" stroke="${RD}" stroke-width="1.8" stroke-dasharray="3 3"/><path d="M168 98v16M165 98h6M165 114h6" stroke-width="1.3"/>
  <path d="M52 126h34" stroke-width="1.3"/><rect x="94" y="120" width="46" height="12" fill="#2B2722"/>
  <path d="M52 146h98M52 158h70M52 170h88" stroke-width="1.3"/>
  <path d="M224 62c-12 0-13-15-1-16 2-10 18-11 21-2 10-1 13 12 3 14z" fill="${CD}" stroke-width="1.6"/><path d="M216 72l40-36" stroke-width="2"/>
  <rect x="200" y="98" width="94" height="60" rx="5" fill="${CD}"/><path d="M190 158h114l-8 12h-98z" fill="${TN}"/>
  <path d="M247 108l18 7v14c0 10-8 16-18 20-10-4-18-10-18-20v-14z" fill="${HT}"/><path d="M239 128l6 6 12-12" stroke-width="2.2"/>`),
  status: D(`<rect x="16" y="16" width="288" height="168" rx="8" fill="${CD}"/><path d="M16 38h288"/><circle cx="30" cy="27" r="3.5"/><circle cx="42" cy="27" r="3.5"/><circle cx="54" cy="27" r="3.5"/><rect x="72" y="22" width="140" height="10" rx="5" stroke-width="1.2"/>
  <rect x="32" y="52" width="174" height="28" rx="6" fill="${YL}" stroke-width="1.6"/><circle cx="46" cy="66" r="4" fill="#2B2722"/><path d="M58 62h100M58 70h70" stroke-width="1.2"/>
  <rect x="32" y="92" width="174" height="76" rx="6" fill="${TN}"/><path d="M44 106h92M44 118h124M44 130h106" stroke-width="1.2"/><rect x="44" y="144" width="64" height="14" rx="7" fill="${CD}" stroke-width="1.3"/><path d="M116 151h44" stroke-width="1.1" stroke-dasharray="2 3"/>
  <circle cx="226" cy="62" r="5" fill="#2B2722"/><path d="M238 62h48" stroke-width="1.3"/>
  <circle cx="226" cy="86" r="5" fill="${HT}"/><path d="M238 86h40" stroke-width="1.3"/>
  <circle cx="226" cy="110" r="5.5" stroke="${RD}" stroke-width="2.6"/><path d="M238 110h46" stroke-width="1.3"/>
  <path d="M218 164h72" stroke-width="1.1"/><path d="M218 158l10-2 8 2 8-28 8 24 10-2 12 0 10-2" stroke-width="1.6"/>`),
  openlens: D(`<rect x="20" y="20" width="194" height="160" rx="6" fill="${CD}"/><path d="M20 42h194"/><path d="M32 31h62" stroke-width="2.6"/>
  ${[58, 84, 110, 136, 162].map((y, i) => `<circle cx="36" cy="${y}" r="6" stroke-width="1.4"/><path d="M50 ${y - 4}h92" stroke-width="1.5"/><path d="M50 ${y + 5}h56" stroke-width="1"/><rect x="160" y="${y - 7}" width="42" height="14" rx="7" stroke-width="1.2" ${i % 2 ? `fill="${HT}"` : ''}/>${i % 2 ? `<path d="M28 ${y}h178" stroke="${RD}" stroke-width="2"/>` : `<path d="M33 ${y}l2.5 3 4-5" stroke-width="1.4"/>`}`).join('')}
  <circle cx="236" cy="104" r="46" fill="${PP}" stroke-width="3"/><path d="M270 138l34 34" stroke-width="10"/><path d="M276 144l22 22" stroke="${PP}" stroke-width="2"/>
  <circle cx="214" cy="104" r="11" stroke-width="1.8"/><path d="M208 104l4 4 8-9" stroke-width="2.2"/><path d="M232 98h40M232 111h26" stroke-width="2.2"/>`),
  retold: D(`${txt(18, 32, 18, '3 hours')}<rect x="14" y="42" width="204" height="66" fill="#2B2722"/>${holes(46)}${holes(98)}
  ${[0, 1, 2, 3].map((i) => `<rect x="${22 + i * 49}" y="56" width="42" height="38" fill="${TN}" stroke="none"/>`).join('')}
  <circle cx="44" cy="72" r="7" stroke-width="1.4"/><path d="M76 90l10-18 8 10 8-6 8 14" stroke-width="1.4"/><path d="M134 90v-16M128 78h12M134 74a4 4 0 1 0 .1 0" stroke-width="1.4"/><path d="M182 62l4 10 10 1-8 6 3 10-9-6-9 6 3-10-8-6 10-1z" fill="${HT}" stroke-width="1.2"/>
  <path d="M218 46L250 112M218 106L250 128" stroke-width="1.3" stroke-dasharray="3 4"/>
  <rect x="248" y="102" width="60" height="42" rx="4" fill="${CD}"/><path d="M270 112l16 11-16 11z" fill="${RD}" stroke="${RD}"/>${txt(252, 166, 18, '60 seconds')}`),
  blackhole: D(`<path d="M30 30v8M26 34h8M292 40v8M288 44h8M250 172v6M247 175h6M60 158v6M57 161h6M206 24v6M203 27h6" stroke-width="1.2"/>
  <ellipse cx="160" cy="104" rx="128" ry="26" fill="${HT}"/>
  <path d="M66 98C78 44 242 44 254 98" stroke-width="2.4"/><path d="M86 98C98 60 222 60 234 98" stroke-width="1.1"/>
  <circle cx="160" cy="100" r="44" stroke-width="1.2"/><circle cx="160" cy="100" r="38" fill="#2B2722"/>
  <path d="M32 104A128 26 0 0 0 288 104A128 10 0 0 1 32 104Z" fill="${TN}" stroke-width="2.6"/>
  <path d="M8 172C88 170 116 152 128 138C138 126 126 114 112 120" stroke="${RD}" stroke-width="2.2"/><path d="M112 120l3 8M112 120l8-1" stroke="${RD}" stroke-width="2.2"/>
  ${txt(14, 194, 17, 'light, bending')}`),
  hackmate: D(`<circle cx="58" cy="64" r="24" fill="${CD}"/><path d="M58 64V48M58 64l11 7" stroke-width="2"/>${txt(42, 106, 20, '4 am')}
  <rect x="108" y="8" width="104" height="184" rx="16" fill="${CD}"/>
  <rect x="122" y="30" width="80" height="112" rx="8" fill="${TN}" transform="rotate(-8 162 86)" stroke-width="1.3"/>
  <rect x="118" y="26" width="84" height="120" rx="8" fill="${CD}"/><circle cx="160" cy="58" r="17" fill="${HT}"/><path d="M134 90h52" stroke-width="2.6"/>
  <rect x="128" y="100" width="28" height="11" rx="5.5" stroke-width="1.2"/><rect x="160" y="100" width="34" height="11" rx="5.5" stroke-width="1.2"/><rect x="128" y="116" width="42" height="11" rx="5.5" stroke-width="1.2"/>
  <circle cx="140" cy="168" r="12"/><path d="M135 163l10 10M145 163l-10 10" stroke-width="1.6"/>
  <circle cx="180" cy="168" r="12"/><path d="M180 175c-6-4-9-7-9-10 0-4 6-5 9-1 3-4 9-3 9 1 0 3-3 6-9 10z" fill="${RD}" stroke="${RD}" stroke-width="1.2"/>
  <path d="M224 70c24 4 36 18 38 40" stroke-dasharray="3 5" stroke-width="1.5"/><path d="M256 104l6 8 5-9" stroke-width="1.5"/>`),
  onlynerds: D(`<path d="M40 122c30-12 60-12 120 4 60-16 90-16 120-4v58c-30-12-60-12-120 4-60-16-90-16-120-4z" fill="${CD}"/><path d="M160 126v58"/>
  <path d="M56 140h80M56 152h70M56 164h76M184 140h80M184 152h66M184 164h74" stroke-width="1.1"/>
  <path d="M160 116V30" /><path d="M160 92c0-14-40-14-40-32V36" stroke-width="1.8"/><path d="M160 72c0-12 40-12 40-26V26" stroke="${RD}" stroke-width="2"/>
  ${[[160, 104], [160, 72], [160, 40], [120, 56], [120, 36], [200, 44]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5.5" fill="${CD}" stroke-width="1.6"/>`).join('')}
  <path d="M262 30l18 10v20l-18 10-18-10V40z" fill="${YL}"/><path d="M262 42l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1z" stroke-width="1.1"/>
  <path d="M34 56l30-12 30 12-30 12z" fill="#2B2722"/><path d="M48 62v12c10 6 22 6 32 0V62"/><path d="M94 56v18" stroke-width="1.4"/>`),
  spotify: D(`<circle cx="104" cy="104" r="78" fill="#2B2722"/>${[66, 56, 46, 36].map((r) => `<circle cx="104" cy="104" r="${r}" stroke="#5A5246" stroke-width="1"/>`).join('')}<circle cx="104" cy="104" r="22" fill="${YL}"/><circle cx="104" cy="104" r="4" fill="#2B2722"/>
  <path d="M172 40l26 22" stroke-width="3"/><circle cx="168" cy="36" r="7" fill="${CD}"/><path d="M198 62l-10 20" stroke-width="3"/>
  <rect x="204" y="96" width="102" height="80" rx="6" fill="${CD}"/><path d="M214 164h84M214 164V108" stroke-width="1.2"/>
  <path d="M216 156l16-6 14 4 16-20 14 8 18-26" stroke="${RD}" stroke-width="2.4"/>${txt(212, 92, 16, 'taste, over time')}`),
};
