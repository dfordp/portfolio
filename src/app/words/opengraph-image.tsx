import { OG_SIZE, sketchbookImage } from '@/lib/og';

export const alt = 'words, essays by DP';
export const size = OG_SIZE;
export const contentType = 'image/png';

export default async function Image() {
  return sketchbookImage({ title: 'words', hand: 'long essays, mostly about tech', note: 'ai, building things\nand burnt laptops.', footer: 'DP · madebydp.com' });
}
