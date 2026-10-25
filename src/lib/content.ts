import fs from 'node:fs/promises';
import path from 'node:path';
import { cache } from 'react';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

export const reader = createReader(process.cwd(), keystaticConfig);

export const getSite = cache(async () => {
  const site = await reader.singletons.site.read();
  if (!site) throw new Error('content/site.yaml is missing');
  return site;
});

export const getProjects = cache(async () => {
  const all = await reader.collections.projects.all();
  return all
    .map(({ slug, entry }) => ({ slug, ...entry }))
    .filter((p) => p.status !== 'hidden')
    .sort((a, b) => (a.order ?? 50) - (b.order ?? 50));
});
export type Project = Awaited<ReturnType<typeof getProjects>>[number];

export const getProject = cache(async (slug: string) => (await getProjects()).find((p) => p.slug === slug));

export const getVideos = cache(async () => {
  const all = await reader.collections.videos.all();
  return all
    .map(({ slug, entry }) => ({ slug, ...entry }))
    .sort((a, b) => (b.published ?? '').localeCompare(a.published ?? ''));
});
export type Video = Awaited<ReturnType<typeof getVideos>>[number];

export const getArt = cache(async () => {
  const all = await reader.collections.art.all();
  return all
    .map(({ slug, entry }) => ({ slug, ...entry }))
    .sort((a, b) => (a.order ?? 50) - (b.order ?? 50));
});

export const getSongs = cache(async () => {
  const all = await reader.collections.songs.all();
  return all
    .map(({ slug, entry }) => ({ slug, title: entry.title, artist: entry.artist, src: entry.file, order: entry.order ?? 50 }))
    .sort((a, b) => a.order - b.order);
});
export type Song = Awaited<ReturnType<typeof getSongs>>[number];

const WPM = 230;
async function readTime(slug: string) {
  const raw = await fs.readFile(path.join(process.cwd(), 'content/words', `${slug}.mdoc`), 'utf8');
  const body = raw.replace(/^---[\s\S]*?---/, '').replace(/!\[[^\]]*\]\([^)]*\)/g, '');
  return Math.max(1, Math.round(body.split(/\s+/).filter(Boolean).length / WPM));
}

export const getWords = cache(async () => {
  const all = await reader.collections.words.all();
  const posts = await Promise.all(all.map(async ({ slug, entry }) => ({ slug, ...entry, minutes: await readTime(slug) })));
  return posts.sort((a, b) => b.date.localeCompare(a.date));
});

export const getPost = cache(async (slug: string) => (await getWords()).find((p) => p.slug === slug));

/** "2026-03-23" → "mar 23" (home list) or "mar 23, 2026" (long). */
export function shortDate(iso: string, long = false) {
  const d = new Date(`${iso}T00:00:00Z`);
  const m = d.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' }).toLowerCase();
  return long ? `${m} ${d.getUTCDate()}, ${d.getUTCFullYear()}` : `${m} ${String(d.getUTCDate()).padStart(2, '0')}`;
}
