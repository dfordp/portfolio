'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Home, Flask, Tools, Pencil, Smile, Play, Pause } from './icons';

// One song for now (CLAUDE.md "Music"). Browsers block autoplay, so it only
// starts when the visitor presses play, then loops until paused.
const TRACK = { src: '/Akeboshi.mp3', label: 'wind · akeboshi' };

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

export default function Dock() {
  const audio = useRef<HTMLAudioElement>(null);
  const pending = useRef<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState('top');
  const pathname = usePathname();
  const router = useRouter();

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

  if (pathname.startsWith('/keystatic')) return null;

  const jump = (id: string) => {
    if (pathname === '/') scrollTo(id);
    else { pending.current = id; router.push('/'); }
  };
  const toggle = () => {
    const a = audio.current;
    if (!a) return;
    if (a.paused) void a.play();
    else a.pause();
  };
  const item = ({ id, tip, Icon }: { id: string; tip: string; Icon: typeof Home }) => (
    <button key={id} type="button" onClick={() => jump(id)} data-tip={tip} aria-label={tip} className={pathname === '/' && current === id ? 'cur' : undefined}>
      <Icon />
    </button>
  );

  return (
    <nav className={`dock${playing ? ' playing' : ''}`} aria-label="sections">
      {LEFT.map(item)}
      <div className="music">
        <button type="button" onClick={toggle} data-tip={playing ? 'pause' : 'play music'} aria-label={playing ? 'pause music' : 'play music'} aria-pressed={playing}>
          {playing ? <Pause /> : <Play />}
        </button>
        <div className="np" aria-live="polite">
          <span className="eq" aria-hidden="true"><i /><i /><i /></span>
          <span>{TRACK.label}</span>
        </div>
      </div>
      {RIGHT.map(item)}
      <audio ref={audio} src={TRACK.src} loop preload="none" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
    </nav>
  );
}
