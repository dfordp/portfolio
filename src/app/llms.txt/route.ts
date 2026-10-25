import { createLlmsTxtHandler } from '@dualmark/nextjs';
import { getProjects, getWords } from '@/lib/content';
import { SITE_URL } from '@/lib/seo';

export const dynamic = 'force-static';

export async function GET() {
  const [projects, words] = await Promise.all([getProjects(), getWords()]);
  return createLlmsTxtHandler({
    brandName: 'DP (Dilpreet Grover)',
    description: 'DP builds small apps, cuts video edits and writes long essays about tech. Every page has a markdown version: add .md to the URL.',
    sections: [
      { title: 'Pages', links: [{ title: 'Home', href: `${SITE_URL}/` }, { title: 'All writing', href: `${SITE_URL}/words` }] },
      { title: 'Projects', links: projects.filter((p) => p.status === 'recent').map((p) => ({ title: p.title, href: `${SITE_URL}/made/${p.slug}` })) },
      { title: 'Writing', links: words.map((w) => ({ title: w.title, href: `${SITE_URL}/words/${w.slug}` })) },
    ],
  }).GET();
}
