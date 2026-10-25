// Markdown twins of every page, served to AI agents by DualMark (proxy.ts) and
// listed in /llms.txt. Plain, factual text: what each thing is, with links.
import fs from 'node:fs/promises';
import path from 'node:path';
import { getProjects, getSite, getVideos, getWords } from './content';
import { SITE_URL } from './seo';

export async function homeMarkdown() {
  const [site, projects, videos, words] = await Promise.all([getSite(), getProjects(), getVideos(), getWords()]);
  const by = (s: string) => projects.filter((p) => p.status === s);
  return [
    '# DP (Dilpreet Grover)',
    '',
    `> ${site.tagline}. ${site.taglineSmall}`,
    '',
    site.description,
    '',
    `My friends call me DP. ${site.bio.join(' ')}`,
    '',
    '## Right now',
    ...site.rightNow.map((l) => `- ${l}`),
    '',
    '## Currently brewing',
    ...by('brewing').map((p) => `- **${p.title}**: ${p.oneLiner}. ${p.problem} ${p.whatItDoes} (${p.link})`),
    '',
    '## Projects',
    ...by('recent').map((p) => `- [${p.title}](${SITE_URL}/made/${p.slug}): ${p.oneLiner}`),
    '',
    '## Older projects',
    ...by('older').map((p) => `- **${p.title}**: ${p.oneLiner}${p.link ? ` (${p.link})` : ''}`),
    '',
    '## Video edits (creative YouTube channel)',
    ...videos.filter((v) => ['long', 'shorts', 'ai'].includes(v.group)).map((v) => `- [${v.title}](https://www.youtube.com/watch?v=${v.youtubeId})${v.line ? `: ${v.line}` : ''}`),
    '',
    '## Explainers (technical YouTube channel)',
    ...videos.filter((v) => v.group === 'explainers').map((v) => `- [${v.title}](https://www.youtube.com/watch?v=${v.youtubeId}): ${v.line}`),
    '',
    '## Writing',
    ...words.map((w) => `- [${w.title}](${SITE_URL}/words/${w.slug}) (${w.date}): ${w.teaser}`),
    '',
    '## Elsewhere',
    '- Technical YouTube channel: https://www.youtube.com/@dilpreetgrover11',
    '- Creative YouTube channel: https://www.youtube.com/@dfordp',
    '- Instagram: https://www.instagram.com/_dfordp_',
    '- X: https://x.com/dfordp11',
    '- Letterboxd: https://letterboxd.com/dfordp/',
    `- Email: ${site.email}`,
  ].join('\n');
}

export async function projectMarkdown(slug: string) {
  const p = (await getProjects()).find((x) => x.slug === slug && x.status === 'recent');
  if (!p) return null;
  return [
    `# ${p.title}`,
    `> ${p.oneLiner}`,
    'By DP (Dilpreet Grover).',
    p.problem && `## The problem\n\n${p.problem}`,
    p.whatItDoes && `## What it does\n\n${p.whatItDoes}`,
    p.story.length ? `## The story so far\n\n${p.story.map((s) => `- ${s.date}: ${s.text}`).join('\n')}` : '',
    p.stack.length ? `## Made with\n\n${p.stack.join(', ')}` : '',
    p.link ? `## Link\n\n${p.link}` : '',
  ].filter(Boolean).join('\n\n');
}

export async function postMarkdown(slug: string) {
  const post = (await getWords()).find((w) => w.slug === slug);
  if (!post) return null;
  const raw = await fs.readFile(path.join(process.cwd(), 'content/words', `${slug}.mdoc`), 'utf8');
  const body = raw.replace(/^---[\s\S]*?---\s*/, '').replace(/\]\(\/media\//g, `](${SITE_URL}/media/`);
  return `# ${post.title}\n\nBy DP (Dilpreet Grover), ${post.date}. ${post.minutes} min read.\n\n${body}`;
}
