'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Home, Flask, Tools, Pencil, Smile, Play, Pause, Skip } from './icons';

// A small queue of all-time favourites (content/songs, editable in the CMS).
// Browsers block autoplay, so nothing plays until the visitor presses play;
// after that it runs through the queue and loops back to the first song.
type Song = { title: string; artist: string; src: string };

const LEFT = [
  { id: 'top', tip: 'top', Icon: Home },
  { id: 'brewing', tip: 'on the stove', Icon: Flask },
  { id: 'made', tip: 'stuff i made', Icon: Tools },
] as const;
const RIGHT = [
  { id: 'writing', tip: 'words', Icon: Pencil },
  { id: 'hi', tip: 'say hi', Icon: Smile },
] as const;
const IDS = ['top', 'brewing', 'made', 'writing', 'hi'];

// Scroll without touching the URL: no #section in the address bar.
function scrollTo(id: string) {
  if (id === 'top') window.scrollTo({ top: 0, behavior: 'smooth' });
  else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Dock({ songs }: { songs: Song[] }) {
  const audio = useRef<HTMLAudioElement>(null);
  const pending = useRef<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const [track, setTrack] = useState(0);
  const [current, setCurrent] = useState('top');
  const pathname = usePathname();
  const router = useRouter();
  const idx = songs.length ? track % songs.length : 0; // stays valid if the queue changes
  const song = songs[idx];

  useEffect(() => {
    if (pathname !== '/') return;
    if (pending.current) {
      const id = pending.current;
      pending.current = null;
      requestAnimationFrame(() => scrollTo(id));
    }
    const onScroll = () => {
      let c = 'top';
      for (const id of IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 200) c = id;
      }
      setCurrent(c);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  // Changing tracks swaps the <audio> src; keep playing if we were.
  useEffect(() => {
    const a = audio.current;
    if (a && playing) void a.play().catch(() => setPlaying(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track]);

  if (pathname.startsWith('/keystatic') || !song) return null;

  const jump = (id: string) => {
    if (pathname === '/') scrollTo(id);
    else { pending.current = id; router.push('/'); }
  };
  const toggle = () => {
    const a = audio.current;
    if (!a) return;
    if (a.paused) a.play().catch(() => setPlaying(false));
    else a.pause();
  };
  const next = () => setTrack((idx + 1) % songs.length);
  const item = ({ id, tip, Icon }: { id: string; tip: string; Icon: typeof Home }) => (
    <button key={id} type="button" onClick={() => jump(id)} data-tip={tip} aria-label={tip} className={pathname === '/' && current === id ? 'cur' : undefined}>
      <Icon />
    </button>
  );

  return (
    <nav className={`dock${playing ? ' playing' : ''}`} aria-label="sections">
      {LEFT.map(item)}
      <div className="music">
        <button type="button" onClick={toggle} data-tip={playing ? 'pause' : 'play my favourites'} aria-label={playing ? 'pause music' : 'play music'} aria-pressed={playing}>
          {playing ? <Pause /> : <Play />}
        </button>
        <div className="np" aria-live="polite">
          <span className="eq" aria-hidden="true"><i /><i /><i /></span>
          <span className="np-t">{song.title.toLowerCase()} · {song.artist.toLowerCase()}</span>
          <span className="np-n">{idx + 1}/{songs.length}</span>
          {songs.length > 1 && (
            <button type="button" className="skip" onClick={next} data-tip={`next: ${songs[(idx + 1) % songs.length].title.toLowerCase()}`} aria-label="next song">
              <Skip />
            </button>
          )}
        </div>
      </div>
      {RIGHT.map(item)}
      <audio ref={audio} src={song.src} preload="none" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={next} onError={() => setPlaying(false)} />
    </nav>
  );
}
