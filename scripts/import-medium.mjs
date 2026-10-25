// One-off import of DP's Medium posts into content/words.
// Usage: npm run import:medium            (skips posts that already exist)
//        npm run import:medium -- --force (re-imports and overwrites)
import fs from 'node:fs/promises';
import path from 'node:path';
import TurndownService from 'turndown';

const FEED = 'https://medium.com/feed/@dilpreetgrover2';
const ROOT = path.resolve(import.meta.dirname, '..');
const WORDS = path.join(ROOT, 'content/words');
const MEDIA = path.join(ROOT, 'public/media/words');
const force = process.argv.includes('--force');

// Slugs keep the old /blogs/<id> ids where they existed, so redirects stay 1:1.
// Teasers follow docs/STYLE-GUIDE.md 4.6: one plain claim; read time is added by the site.
const POSTS = {
  'why-most-ai-workflows-fail': { match: 'Why Most AI Workflows Fail', teaser: 'most ai workflows die quietly after the demo, and the pitch decks never mention it.' },
  'the-invisible-arbitrage': { match: 'The Invisible Arbitrage', teaser: "i'm stepping off the hype cycle to build for the boring, real economy." },
  'voice-ai-networking-problem': { match: 'Voice AI Has a Networking Problem', teaser: 'voice ai breaks in production at the network layer, not the model.' },
  'decentralized-os-on-my-own': { match: 'decentralized OS on my own', teaser: 'phones and laptops make bad servers. i found out by overheating several.' },
  'the-ai-mirage': { match: 'The AI Mirage', teaser: 'the ai boom is running into power grids and paper valuations.' },
  'ai-productivity-paradox': { match: 'The AI Productivity Paradox', teaser: 'ai makes teams faster and more burnt out at the same time.' },
  'guide-to-ai-benchmarks': { match: 'Definitive Guide to AI Benchmarks', teaser: 'how ai benchmarks are built, how models compare on them, and how to test your own.' },
  'intro-to-quantum-computing': { match: 'Quantum Computing', teaser: 'quantum computing in plain words, for students and the curious.' },
  'untapped-potential-of-blockchain': { match: 'Untapped Potential of Blockchain', teaser: 'blockchain is useful for a lot more than coins.' },
  'experience-using-genai-sde': { match: 'GenAI in Software Development', teaser: "what genai changed in how i write software, and what it didn't." },
  'journey-through-buildspace-challenge': {
    match: 'Buildspace',
    teaser: 'six weeks of building side projects in public with buildspace.',
    url: 'https://medium.com/@dilpreetgrover2/embracing-the-side-project-hustle-my-journey-through-the-buildspace-challenge-7cf6dba760bc',
  },
};

const UA = { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/124 Safari/537.36' };

const decode = (s) =>
  s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const tag = (xml, name) => {
  const m = xml.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`));
  return m ? decode(m[1]).trim() : '';
};

function parseFeed(xml) {
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(([, item]) => ({
    title: tag(item, 'title'),
    link: tag(item, 'link').split('?')[0],
    date: new Date(tag(item, 'pubDate')).toISOString().slice(0, 10),
    tags: [...item.matchAll(/<category><!\[CDATA\[(.*?)\]\]><\/category>/g)].map((m) => m[1].replace(/-/g, ' ')),
    html: tag(item, 'content:encoded'),
  }));
}

// Older posts fall out of the feed; try the post page itself (Medium sometimes blocks this).
async function fetchFromPage(url) {
  const html = await (await fetch(url, { headers: UA })).text();
  const article = html.match(/<article[\s\S]*?<\/article>/);
  const title = (html.match(/<title[^>]*>([^<]*)<\/title>/) || [])[1]?.replace(/ \| by .*$/, '').replace(/ \| Medium$/, '');
  const date = (html.match(/"datePublished":"([^"]+)"/) || [])[1];
  if (!article || !title || !date) return null;
  const body = article[0].replace(/^[\s\S]*?(<section)/, '$1');
  return { title: decode(title), link: url, date: date.slice(0, 10), tags: [], html: body };
}

const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-' });
td.remove(['script', 'style', 'button', 'svg']);
td.addRule('figure', {
  filter: 'figure',
  replacement: (_c, node) => {
    const img = node.querySelector('img');
    const cap = node.querySelector('figcaption')?.textContent?.trim();
    const iframe = node.querySelector('iframe');
    if (img) return `\n\n![${(cap || img.getAttribute('alt') || '').replace(/[[\]]/g, '')}](${img.getAttribute('src')})\n${cap ? `\n*${cap}*\n` : ''}\n`;
    if (iframe) return `\n\n[embedded media](${iframe.getAttribute('src')})\n\n`;
    return '';
  },
});
td.addRule('iframe', { filter: 'iframe', replacement: (_c, n) => `\n\n[embedded media](${n.getAttribute('src')})\n\n` });

async function localiseImages(md, slug) {
  const dir = path.join(MEDIA, slug);
  await fs.mkdir(dir, { recursive: true });
  let n = 0;
  let cover = null;
  const urls = [...new Set([...md.matchAll(/!\[[^\]]*\]\((https?:[^)\s]+)\)/g)].map((m) => m[1]))];
  for (const url of urls) {
    if (url.includes('/_/stat')) { md = md.replaceAll(`(${url})`, '()'); continue; }
    const res = await fetch(url, { headers: UA });
    if (!res.ok) { console.warn(`  ! image ${res.status}: ${url}`); continue; }
    const type = res.headers.get('content-type') || '';
    const ext = type.includes('png') ? 'png' : type.includes('gif') ? 'gif' : type.includes('webp') ? 'webp' : 'jpg';
    const file = `${++n}.${ext}`;
    await fs.writeFile(path.join(dir, file), Buffer.from(await res.arrayBuffer()));
    const local = `/media/words/${slug}/${file}`;
    md = md.replaceAll(`(${url})`, `(${local})`);
    cover ??= local;
  }
  md = md.replace(/!\[[^\]]*\]\(\)\n?/g, '');
  return { md, cover };
}

const yamlStr = (s) => JSON.stringify(s ?? '');

async function main() {
  await fs.mkdir(WORDS, { recursive: true });
  const feed = parseFeed(await (await fetch(FEED, { headers: UA })).text());
  for (const [slug, meta] of Object.entries(POSTS)) {
    const file = path.join(WORDS, `${slug}.mdoc`);
    if (!force && (await fs.stat(file).catch(() => null))) { console.log(`= ${slug} (exists)`); continue; }
    let post = feed.find((p) => p.title.toLowerCase().includes(meta.match.toLowerCase()));
    if (!post && meta.url) post = await fetchFromPage(meta.url);
    if (!post) { console.warn(`! ${slug}: not in the feed and the page could not be read`); continue; }
    let md = td.turndown(post.html).replace(/\n{3,}/g, '\n\n').trim();
    md = md.replace(/^#{1,3} .*\n+/, ''); // Medium repeats the title as the first heading
    const { md: body, cover } = await localiseImages(md, slug);
    const front = [
      '---',
      `title: ${yamlStr(post.title)}`,
      `date: ${post.date}`,
      `teaser: ${yamlStr(meta.teaser)}`,
      `description: ${yamlStr(meta.teaser)}`,
      `tags:${post.tags.length ? '\n' + post.tags.slice(0, 5).map((t) => `  - ${yamlStr(t)}`).join('\n') : ' []'}`,
      cover ? `cover: ${cover}` : 'cover: null',
      `mediumUrl: ${yamlStr(post.link)}`,
      '---',
    ].join('\n');
    await fs.writeFile(file, `${front}\n\n${body}\n`);
    console.log(`+ ${slug} (${body.split(/\s+/).length} words)`);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
