import { getWords } from '@/lib/content';
import { SITE_URL } from '@/lib/seo';

export const dynamic = 'force-static';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export async function GET() {
  const words = await getWords();
  const items = words.map((w) => `
    <item>
      <title>${esc(w.title)}</title>
      <link>${SITE_URL}/words/${w.slug}</link>
      <guid>${SITE_URL}/words/${w.slug}</guid>
      <pubDate>${new Date(`${w.date}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${esc(w.teaser ?? '')}</description>
    </item>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
  <title>words · DP</title>
  <link>${SITE_URL}/words</link>
  <description>Long essays by DP.</description>${items}
</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
