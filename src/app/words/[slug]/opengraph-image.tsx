import { getPost, getWords, shortDate } from '@/lib/content';
import { OG_SIZE, sketchbookImage } from '@/lib/og';

export const alt = 'an essay by DP';
export const size = OG_SIZE;
export const contentType = 'image/png';

export async function generateStaticParams() {
  return (await getWords()).map((w) => ({ slug: w.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const p = await getPost((await params).slug);
  return sketchbookImage({
    title: p?.title ?? 'words',
    hand: '',
    note: p ? `${p.minutes} min read\n${shortDate(p.date, true)}` : 'words',
    footer: 'DP · words · madebydp.com',
  });
}
