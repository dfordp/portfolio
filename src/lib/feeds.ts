// Live sources (CLAUDE.md "Content that updates itself"). Fetched on the server and
// cached for 6 hours, so new watches and uploads show up without a redeploy.
// Every function falls back gracefully so a flaky feed never breaks the page.
import type { Video } from './content';

const SIX_HOURS = 60 * 60 * 6;
const UA = { 'User-Agent': 'madebydp.com (+https://madebydp.com)' };

const decode = (s: string) =>
  s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const pick = (xml: string, tag: string) => {
  const m = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  return m ? decode(m[1]).trim() : '';
};

async function getText(url: string) {
  try {
    const res = await fetch(url, { headers: UA, next: { revalidate: SIX_HOURS } });
    return res.ok ? await res.text() : '';
  } catch {
    return '';
  }
}

// ---------- letterboxd ----------
export type Film = { title: string; year: string; rating: number };

// The RSS feed only carries diary entries, and the films page blocks servers (403).
// So the feed's newest entries go on top and this list (logged films as of
// 2026-10-24, newest first) fills the rest. New diary logs push these down over time.
const LOGGED: Film[] = [
  { title: 'Batman Begins', year: '2005', rating: 5 },
  { title: 'The Odyssey', year: '2026', rating: 5 },
  { title: 'Doraemon: Nobita and the New Steel Troops: Winged Angels', year: '2011', rating: 5 },
  { title: 'Project Hail Mary', year: '2026', rating: 5 },
  { title: 'Scott Pilgrim vs. the World', year: '2010', rating: 5 },
  { title: 'Yes Man', year: '2008', rating: 5 },
  { title: 'Band Baaja Baaraat', year: '2010', rating: 4 },
  { title: 'Iron Man 2', year: '2010', rating: 5 },
  { title: 'Get Smart', year: '2008', rating: 4 },
  { title: 'Pyaar Ka Punchnama', year: '2011', rating: 5 },
];

export async function getRecentFilms(limit = 8): Promise<Film[]> {
  const xml = await getText('https://letterboxd.com/dfordp/rss/');
  const seen = new Set<string>();
  const films: Film[] = [];
  for (const [, item] of xml.matchAll(/<item>([\s\S]*?)<\/item>/g)) {
    const title = pick(item, 'letterboxd:filmTitle');
    if (!title || seen.has(title)) continue; // rewatches and list entries
    seen.add(title);
    films.push({ title, year: pick(item, 'letterboxd:filmYear'), rating: Math.round(Number(pick(item, 'letterboxd:memberRating')) || 0) });
    if (films.length === limit) return films;
  }
  for (const f of LOGGED) {
    if (films.length >= limit) break;
    if (!seen.has(f.title)) { seen.add(f.title); films.push(f); }
  }
  return films;
}

// ---------- youtube ----------
const CHANNELS = {
  creative: 'UCSKGZp3hH2oCuf_qkO_52xw', // "Dp Edits Stuff"
  technical: 'UCIZT_bzxresmjjsheLy3vCw', // "Dp Builds Stuff"
} as const;

type FeedVideo = { youtubeId: string; title: string; published: string };

async function channelFeed(id: string): Promise<FeedVideo[]> {
  const xml = await getText(`https://www.youtube.com/feeds/videos.xml?channel_id=${id}`);
  return [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map(([, e]) => ({
    youtubeId: pick(e, 'yt:videoId'),
    title: pick(e, 'title'),
    published: pick(e, 'published').slice(0, 10),
  }));
}

/** YouTube serves /shorts/<id> for Shorts and redirects (303) for regular videos. */
async function isShort(id: string) {
  try {
    const res = await fetch(`https://www.youtube.com/shorts/${id}`, { method: 'HEAD', redirect: 'manual', headers: UA });
    return res.status === 200;
  } catch {
    return false;
  }
}

/**
 * CMS entries win (they carry the one-liners and hide duplicates). Uploads the CMS
 * doesn't know yet are added automatically with no one-liner.
 */
export async function mergeWithFeeds(known: Video[]): Promise<Video[]> {
  const ids = new Set(known.map((v) => v.youtubeId));
  const [creative, technical] = await Promise.all([channelFeed(CHANNELS.creative), channelFeed(CHANNELS.technical)]);
  const fresh: Video[] = [];
  for (const v of creative.filter((v) => v.youtubeId && !ids.has(v.youtubeId))) {
    const short = await isShort(v.youtubeId);
    fresh.push({ slug: v.youtubeId, youtubeId: v.youtubeId, title: v.title, line: '', group: short ? 'shorts' : 'long', published: v.published, views: '', thumb: short ? 'hqdefault' : 'maxresdefault' });
  }
  for (const v of technical.filter((v) => v.youtubeId && !ids.has(v.youtubeId))) {
    if (/demo/i.test(v.title)) continue; // demos live on project pages
    fresh.push({ slug: v.youtubeId, youtubeId: v.youtubeId, title: v.title, line: '', group: 'explainers', published: v.published, views: '', thumb: 'maxresdefault' });
  }
  return [...fresh, ...known].sort((a, b) => (b.published ?? '').localeCompare(a.published ?? ''));
}

// ---------- spotify ----------
// Numbers from 2026-10-24. Spotify's API needs keys; until they exist these stay static.
export const PLAYLISTS = [
  { id: '5XdL7H2H4PJhGsNQnjr1wD', name: 'relaxing electronic', note: '357 songs · 9 saves' },
  { id: '5DxAg7QZ6lYbKoVKM8ASgb', name: 'trip down memory lane', note: '136 songs · 6 saves' },
  { id: '6r182CmAVKFGZfjJSbGxpX', name: 'random gems i found', note: '464 songs, over a day of music' },
  { id: '7BamUyR807PxN2xFuQgVm5', name: 'werid phonk songs lol', note: 'the typo stays' },
];
export const SPOTIFY_PROFILE = 'https://open.spotify.com/user/31mejlhfyh4eyn5fa7xscqv3m3ky';
