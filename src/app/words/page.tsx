import type { Metadata } from 'next';
import Link from 'next/link';
import { getWords, shortDate } from '@/lib/content';

export const metadata: Metadata = {
  title: 'words',
  description: 'Long essays by DP on ai, building things, quantum computing and burnt laptops.',
  alternates: { canonical: '/words' },
  openGraph: { siteName: 'Made By Dp', locale: 'en_US', type: 'website', url: '/words' },
};

export default async function Words() {
  const words = await getWords();
  return (
    <main className="col">
      <Link className="back" href="/">back to the sketchbook</Link>
      <h1 className="ptitle serif">words</h1>
      <div className="tag hand" style={{ fontSize: 24 }}>long ones, mostly</div>
      <div style={{ marginTop: 40 }}>
        {words.map((w) => (
          <Link key={w.slug} href={`/words/${w.slug}`} className="post">
            <span className="dt">{shortDate(w.date)}<br />{w.date.slice(0, 4)}</span>
            <div><div className="pt">{w.title}</div><div className="ts">{w.teaser} {w.minutes} min.</div></div>
          </Link>
        ))}
      </div>
    </main>
  );
}
