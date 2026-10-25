import { getSite } from '@/lib/content';
import { OG_SIZE, sketchbookImage } from '@/lib/og';

export const alt = 'DP, a sketchbook of apps, edits and essays';
export const size = OG_SIZE;
export const contentType = 'image/png';

export default async function Image() {
  const site = await getSite();
  return sketchbookImage({ title: 'DP', hand: site.tagline, note: 'apps, edits, essays.\nand a cat.', footer: 'madebydp.com', big: true });
}
