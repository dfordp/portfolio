// Share images in the sketchbook style (1200×630). Fonts are fetched from Google
// Fonts at build time; if that fails the image still renders with a fallback font.
import { ImageResponse } from 'next/og';

export const OG_SIZE = { width: 1200, height: 630 };

async function font(family: string, weight: number, text: string) {
  try {
    const css = await (await fetch(`https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(text)}`)).text();
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    return url ? await (await fetch(url)).arrayBuffer() : null;
  } catch {
    return null;
  }
}

type Props = { title: string; hand: string; note: string; footer: string; big?: boolean };

export async function sketchbookImage({ title, hand, note, footer, big }: Props) {
  const [serif, caveat, sans] = await Promise.all([
    font('Instrument+Serif', 400, title),
    font('Caveat', 700, hand + note + 'made with too much chai'),
    font('Inter+Tight', 500, footer),
  ]);
  const fonts = [
    serif && { name: 'Serif', data: serif, weight: 400 as const },
    caveat && { name: 'Hand', data: caveat, weight: 700 as const },
    sans && { name: 'Sans', data: sans, weight: 500 as const },
  ].filter(Boolean) as { name: string; data: ArrayBuffer; weight: 400 | 500 | 700 }[];

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#F3EDE0', padding: '72px 84px', position: 'relative' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontFamily: 'Serif', fontSize: big ? 200 : title.length > 40 ? 76 : 104, lineHeight: 0.92, color: '#2B2722', letterSpacing: big ? -6 : -2, maxWidth: 760 }}>{title}</div>
          {hand && <div style={{ fontFamily: 'Hand', fontSize: big ? 56 : 46, color: '#C8452B', marginTop: 18, transform: 'rotate(-1.5deg)', maxWidth: 760 }}>{hand}</div>}
        </div>
        <div style={{ position: 'absolute', right: 84, top: 80, width: 300, background: '#F6D86B', padding: '22px 26px', transform: 'rotate(3deg)', fontFamily: 'Hand', fontSize: 34, lineHeight: 1.15, color: '#5a4508', display: 'flex', flexDirection: 'column' }}>
          {note.split('\n').map((l) => <span key={l}>{l}</span>)}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '3px solid #2B2722', paddingTop: 18 }}>
          <div style={{ fontFamily: 'Sans', fontSize: 26, color: '#5A5246' }}>{footer}</div>
          <div style={{ fontFamily: 'Hand', fontSize: 30, color: '#8A7F6A' }}>made with too much chai</div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts },
  );
}
