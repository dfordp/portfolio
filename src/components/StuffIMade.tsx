'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Code, Movie, Photo, Presentation, Play } from './icons';
import Cover from './Cover';

export type CodeCard = { slug: string; title: string; year: string; cover: string; oneLiner: string; tags: readonly string[] };
export type OlderItem = { slug: string; title: string; oneLiner: string; link: string | null };
export type VideoCard = { youtubeId: string; title: string; line: string; group: string; published: string | null; views: string; thumb: string };
export type ArtCard = { slug: string; title: string; source: string; image: string; link: string | null };

type Props = { code: CodeCard[]; older: OlderItem[]; videos: VideoCard[]; art: ArtCard[] };
type Tab = 'code' | 'edits' | 'art' | 'explainers';

const EDIT_FILTERS = [['long', 'long ones'], ['shorts', 'shorts'], ['ai', 'ai experiments']] as const;
const ART_FILTERS = [['instagram', 'photos'], ['behance', 'design']] as const;
const NOTES = {
  code: 'newest first. each one has a story page.',
  long: 'the ones with proper thumbnails.',
  shorts: 'vertical, loud, mostly batman.',
  ai: 'one short film, made ai-first. more experiments coming.',
  instagram: 'from instagram. newest first.',
  behance: 'posters and covers, from behance.',
  explainers: 'from the technical youtube channel.',
} as const;
const LINKS: Partial<Record<keyof typeof NOTES, string>> = {
  long: 'https://www.youtube.com/@dfordp',
  shorts: 'https://www.youtube.com/@dfordp/shorts',
  ai: 'https://www.youtube.com/watch?v=R51daZr3nqY',
  instagram: 'https://www.instagram.com/_dfordp_',
  explainers: 'https://www.youtube.com/@dilpreetgrover11',
};
const LIMIT = 6;

function VideoTile({ v, tall }: { v: VideoCard; tall?: boolean }) {
  return (
    <a className={`gc settle${tall ? ' tall' : ''}`} href={`https://www.youtube.com/watch?v=${v.youtubeId}`} target="_blank" rel="noopener">
      <div className="media">
        <Image src={`https://i.ytimg.com/vi/${v.youtubeId}/${tall ? 'hqdefault' : v.thumb}.jpg`} alt="" fill sizes="(max-width: 640px) 100vw, 360px" />
        <span className="pl"><Play /></span>
        {v.published && <span className="yr">{v.published.slice(0, 4)}</span>}
      </div>
      <div className="bd">
        <h3>{v.title}</h3>
        {v.line && <p>{v.line}</p>}
        {v.views && <div className="ft"><span>{v.views}</span></div>}
      </div>
    </a>
  );
}

export default function StuffIMade({ code, older, videos, art }: Props) {
  const [tab, setTab] = useState<Tab>('code');
  const [edit, setEdit] = useState<(typeof EDIT_FILTERS)[number][0]>('long');
  const [artSrc, setArtSrc] = useState<(typeof ART_FILTERS)[number][0]>('instagram');
  const [all, setAll] = useState(false);

  // Re-run the settle-in observer whenever the cards change.
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.12 });
    document.querySelectorAll('#made .settle:not(.in)').forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [tab, edit, artSrc, all]);

  const edits = videos.filter((v) => v.group === 'long' || v.group === 'shorts' || v.group === 'ai');
  const explainers = videos.filter((v) => v.group === 'explainers');
  const TABS: { k: Tab; n: number; Icon: typeof Code }[] = [
    { k: 'code', n: code.length + older.length, Icon: Code },
    { k: 'edits', n: edits.length, Icon: Movie },
    { k: 'art', n: art.length, Icon: Photo },
    { k: 'explainers', n: explainers.length, Icon: Presentation },
  ];
  const noteKey = tab === 'edits' ? edit : tab === 'art' ? artSrc : tab;

  let total = 0;
  let body: React.ReactNode;
  if (tab === 'code') {
    body = (
      <div className="grid">
        {code.map((p) => (
          <Link key={p.slug} className="gc settle" href={`/made/${p.slug}`}>
            <div className="media"><Cover name={p.cover} />{p.year && <span className="yr">{p.year}</span>}</div>
            <div className="bd">
              <h3>{p.title}</h3>
              <p>{p.oneLiner}</p>
              <div className="ft"><span>{p.tags.join(' · ')}</span><b>read</b></div>
            </div>
          </Link>
        ))}
      </div>
    );
  } else if (tab === 'edits') {
    const list = edits.filter((v) => v.group === edit);
    total = list.length;
    body = <div className={`grid${edit === 'shorts' ? ' g3' : ''}`}>{list.slice(0, all ? undefined : LIMIT).map((v) => <VideoTile key={v.youtubeId} v={v} tall={edit === 'shorts'} />)}</div>;
  } else if (tab === 'art') {
    const list = art.filter((a) => a.source === artSrc);
    total = list.length;
    body = (
      <div className="grid g3">
        {list.slice(0, all ? undefined : LIMIT).map((a) => (
          <a key={a.slug} className={`pf settle${a.source === 'behance' ? ' design' : ''}`} href={a.link ?? '#'} target="_blank" rel="noopener">
            <div className="frame"><Image src={a.image} alt={a.source === 'behance' ? a.title : 'photo on instagram'} fill sizes="(max-width: 640px) 50vw, 240px" /></div>
            <div className="cap">{a.source === 'behance' ? a.title : 'on instagram'}</div>
          </a>
        ))}
      </div>
    );
  } else {
    total = explainers.length;
    body = <div className="grid">{explainers.slice(0, all ? undefined : LIMIT).map((v) => <VideoTile key={v.youtubeId} v={v} />)}</div>;
  }

  return (
    <>
      <div className="tabs" role="tablist" aria-label="kinds of things">
        {TABS.map(({ k, n, Icon }) => (
          <button key={k} type="button" role="tab" className="tab" aria-selected={tab === k} onClick={() => { setTab(k); setAll(false); }}>
            <Icon />{k}<small>{n}</small>
          </button>
        ))}
      </div>
      {tab === 'edits' && (
        <div className="sub">
          {EDIT_FILTERS.map(([k, l]) => <button key={k} type="button" className="chip" aria-pressed={edit === k} onClick={() => { setEdit(k); setAll(false); }}>{l}</button>)}
        </div>
      )}
      {tab === 'art' && (
        <div className="sub">
          {ART_FILTERS.map(([k, l]) => <button key={k} type="button" className="chip" aria-pressed={artSrc === k} onClick={() => { setArtSrc(k); setAll(false); }}>{l}</button>)}
        </div>
      )}
      <p className="tabnote">
        {NOTES[noteKey]}
        {LINKS[noteKey] && <a className="ctx" href={LINKS[noteKey]} target="_blank" rel="noopener">see more</a>}
      </p>
      <div role="tabpanel">{body}</div>
      {tab !== 'code' && total > LIMIT && !all && <button type="button" className="more" onClick={() => setAll(true)}>see all {total}</button>}
      {tab === 'code' && (
        <>
          <h3 className="olh serif">older stuff <span className="hand">it all counts</span></h3>
          <ul className="older">
            {older.map((p) => (
              <li key={p.slug}>
                {p.link
                  ? <a href={p.link} target="_blank" rel="noopener"><b>{p.title} <i aria-hidden="true">↗</i></b><span>{p.oneLiner}</span></a>
                  : <div className="nolink"><b>{p.title}</b><span>{p.oneLiner}</span></div>}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
