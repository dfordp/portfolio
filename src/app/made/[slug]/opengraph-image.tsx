import { getProject, getProjects } from '@/lib/content';
import { OG_SIZE, sketchbookImage } from '@/lib/og';

export const alt = 'a project by DP';
export const size = OG_SIZE;
export const contentType = 'image/png';

export async function generateStaticParams() {
  return (await getProjects()).filter((p) => p.status === 'recent').map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const p = await getProject((await params).slug);
  return sketchbookImage({ title: p?.title ?? 'DP', hand: p?.oneLiner ?? '', note: p?.tags.join(' · ') || 'a thing i made', footer: 'DP · madebydp.com' });
}
