'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Home, Flask, Tools, Pencil, Smile, Play, Pause, Skip, Back, Volume, Mute, ChevronDown } from './icons';

// A small queue of all-time favourites (content/songs, editable in the CMS).
// Browsers block autoplay, so nothing plays until the visitor presses play.
// Hovering the music pill opens a player card (Spotify-style queue); it folds
// away again shortly after the pointer leaves, or with its own collapse button.
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
const DISC = ['#C8452B', '#4E7A4A', '#2F5DA8', '#B8862B', '#7A4E8C'];
const CLOSE_DELAY = 450;

// Scroll without touching the URL: no #section in the address bar.
function scrollTo(id: string) {
  if (id === 'top') window.scrollTo({ top: 0, behavior: 'smooth' });
  else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const clock = (s: number) => (Number.isFinite(s) ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}` : '0:00');

function Vinyl({ color, spin }: { color: string; spin: boolean }) {
  return (
    <svg className={`vinyl${spin ? ' spin' : ''}`} viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="23" fill="#2B2722" />
      <circle cx="24" cy="24" r="18" fill="none" stroke="#5A5246" strokeWidth=".8" />
      <circle cx="24" cy="24" r="13" fill="none" stroke="#5A5246" strokeWidth=".8" />
      <circle cx="24" cy="24" r="9" fill={color} />
      <circle cx="24" cy="24" r="1.8" fill="#FBF8F1" />
    </svg>
  );
}

export default function Dock({ songs }: { songs: Song[] }) {
  const audio = useRef<HTMLAudioElement>(null);
  const pending = useRef<string | null>(null);
  const closeTimer = useRef<number | null>(null);
  const autoNext = useRef(false); // a song ended: play whatever comes next
  const [playing, setPlaying] = useState(false);
  const [track, setTrack] = useState(0);
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(0);
  const [length, setLength] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [muted, setMuted] = useState(false);
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

  // Volume is remembered per visitor (a convenience; fine if storage is blocked).
  const restored = useRef(false);
  const restoreVolume = () => {
    if (restored.current) return;
    restored.current = true;
    try {
      const v = Number(localStorage.getItem('dp-volume'));
      if (v > 0 && v <= 1) setVolume(v);
    } catch { /* private mode */ }
  };
  useEffect(() => {
    if (audio.current) { audio.current.volume = volume; audio.current.muted = muted; }
    if (!restored.current) return;
    try { localStorage.setItem('dp-volume', String(volume)); } catch { /* private mode */ }
  }, [volume, muted]);

  // Changing tracks swaps the <audio> src; keep playing if we were.
  useEffect(() => {
    const a = audio.current;
    if (a && (playing || autoNext.current)) a.play().catch(() => setPlaying(false));
    autoNext.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track]);

  useEffect(() => () => { if (closeTimer.current) window.clearTimeout(closeTimer.current); }, []);

  if (pathname.startsWith('/keystatic') || !song) return null;

  const jump = (id: string) => {
    if (pathname === '/') scrollTo(id);
    else { pending.current = id; router.push('/'); }
  };
  const toggle = () => {
    const a = audio.current;
    if (!a) return;
    restoreVolume();
    if (a.paused) a.play().catch(() => setPlaying(false));
    else a.pause();
  };
  const go = (to: number) => { setTime(0); setTrack((to + songs.length) % songs.length); };
  const back = () => {
    const a = audio.current;
    if (a && a.currentTime > 3) { a.currentTime = 0; return; }
    go(idx - 1);
  };
  const pick = (i: number) => {
    if (i === idx) { toggle(); return; }
    setPlaying(true);
    go(i);
  };
  const show = () => {
    restoreVolume();
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hide = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), CLOSE_DELAY);
  };
  const upNext = songs.map((s, i) => ({ s, i })).slice(idx + 1).concat(songs.map((s, i) => ({ s, i })).slice(0, idx));

  const item = ({ id, tip, Icon }: { id: string; tip: string; Icon: typeof Home }) => (
    <button key={id} type="button" onClick={() => jump(id)} data-tip={tip} aria-label={tip} className={pathname === '/' && current === id ? 'cur' : undefined}>
      <Icon />
    </button>
  );

  return (
    <nav className={`dock${playing ? ' playing' : ''}`} aria-label="sections">
      {LEFT.map(item)}
      <div
        className={`player${open ? ' open' : ''}`}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) hide(); }}
      >
        <div className="card" role="dialog" aria-label="music player" aria-hidden={!open}>
          <div className="card-h">
            <span className="hand">now playing</span>
            <button type="button" className="fold" onClick={() => setOpen(false)} aria-label="collapse player" tabIndex={open ? 0 : -1}>
              <ChevronDown />
            </button>
          </div>
          <div className="now-row">
            <Vinyl color={DISC[idx % DISC.length]} spin={playing} />
            <div className="now-t">
              <b>{song.title.toLowerCase()}</b>
              <span>{song.artist.toLowerCase()}</span>
            </div>
          </div>
          <div className="seek">
            <input
              type="range" min={0} max={length || 0} step={0.1} value={Math.min(time, length || 0)}
              onChange={(e) => { const a = audio.current; if (a) a.currentTime = Number(e.target.value); }}
              aria-label="seek" tabIndex={open ? 0 : -1}
              style={{ ['--p' as string]: `${length ? (time / length) * 100 : 0}%` }}
            />
            <div className="times"><span>{clock(time)}</span><span>{clock(length)}</span></div>
          </div>
          <div className="ctrls">
            <button type="button" onClick={back} aria-label="previous song" tabIndex={open ? 0 : -1}><Back /></button>
            <button type="button" className="big" onClick={toggle} aria-label={playing ? 'pause' : 'play'} tabIndex={open ? 0 : -1}>{playing ? <Pause /> : <Play />}</button>
            <button type="button" onClick={() => go(idx + 1)} aria-label="next song" tabIndex={open ? 0 : -1}><Skip /></button>
          </div>
          <div className="vol">
            <button type="button" onClick={() => setMuted((m) => !m)} aria-label={muted ? 'unmute' : 'mute'} tabIndex={open ? 0 : -1}>{muted || volume === 0 ? <Mute /> : <Volume />}</button>
            <input
              type="range" min={0} max={1} step={0.01} value={muted ? 0 : volume}
              onChange={(e) => { setMuted(false); setVolume(Number(e.target.value)); }}
              aria-label="volume" tabIndex={open ? 0 : -1}
              style={{ ['--p' as string]: `${(muted ? 0 : volume) * 100}%` }}
            />
          </div>
          {upNext.length > 0 && (
            <>
              <div className="hand q-h">up next</div>
              <ol className="queue">
                {upNext.map(({ s, i }) => (
                  <li key={s.src}>
                    <button type="button" onClick={() => pick(i)} tabIndex={open ? 0 : -1}>
                      <Vinyl color={DISC[i % DISC.length]} spin={false} />
                      <span className="now-t"><b>{s.title.toLowerCase()}</b><span>{s.artist.toLowerCase()}</span></span>
                    </button>
                  </li>
                ))}
              </ol>
            </>
          )}
        </div>
        <div className="music">
          <button type="button" onClick={() => { toggle(); show(); }} aria-label={playing ? 'pause music' : 'play my favourites'} aria-pressed={playing} aria-expanded={open}>
            {playing ? <Pause /> : <Play />}
          </button>
          <div className="np" aria-live="polite">
            <span className="eq" aria-hidden="true"><i /><i /><i /></span>
            <span className="np-t">{song.title.toLowerCase()}</span>
          </div>
        </div>
      </div>
      {RIGHT.map(item)}
      <audio
        ref={audio} src={song.src} preload="metadata"
        onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}
        onEnded={() => { autoNext.current = true; go(idx + 1); }} onError={() => setPlaying(false)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setLength(e.currentTarget.duration)}
      />
    </nav>
  );
}
