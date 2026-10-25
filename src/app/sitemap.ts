import type { MetadataRoute } from 'next';
import { getProjects, getWords } from '@/lib/content';
import { SITE_URL } from '@/lib/seo';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, words] = await Promise.all([getProjects(), getWords()]);
  return [
    { url: SITE_URL, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/words`, changeFrequency: 'weekly', priority: 0.8 },
    ...projects.filter((p) => p.status === 'recent').map((p) => ({ url: `${SITE_URL}/made/${p.slug}`, lastModified: p.updated ?? undefined, priority: 0.7 })),
    ...words.map((w) => ({ url: `${SITE_URL}/words/${w.slug}`, lastModified: w.date, priority: 0.7 })),
  ];
}
