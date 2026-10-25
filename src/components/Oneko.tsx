'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

// The pixel cat from the 1989 desktop toy. Chases the cursor, falls asleep when you stop.
const SPRITES: Record<string, [number, number][]> = {
  idle: [[-3, -3]],
  sleep: [[-2, 0], [-2, -1]],
  N: [[-1, -2], [-1, -3]], NE: [[0, -2], [0, -3]], E: [[-3, 0], [-3, -1]], SE: [[-5, -1], [-5, -2]],
  S: [[-6, -3], [-7, -2]], SW: [[-5, -3], [-6, -1]], W: [[-4, -2], [-4, -3]], NW: [[-1, 0], [-1, -1]],
};

export default function Oneko() {
  const el = useRef<HTMLDivElement>(null);
  const hidden = usePathname().startsWith('/keystatic');

  useEffect(() => {
    const neko = el.current;
    if (!neko || hidden) return;
    // No cursor to chase on touch screens.
    if (window.matchMedia('(hover: none)').matches) { neko.style.display = 'none'; return; }
    let x = 32, y = 32, mx = 32, my = 32, frame = 0, idle = 0;
    const sprite = (name: string, i: number) => {
      const set = SPRITES[name];
      const [sx, sy] = set[i % set.length];
      neko.style.backgroundPosition = `${sx * 32}px ${sy * 32}px`;
    };
    const place = () => { neko.style.left = `${x - 16}px`; neko.style.top = `${y - 16}px`; };
    place();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { sprite('sleep', 0); return; }
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener('mousemove', onMove);
    const t = window.setInterval(() => {
      frame++;
      const dx = x - mx, dy = y - my, d = Math.hypot(dx, dy);
      if (d < 48) {
        idle++;
        sprite(idle > 30 ? 'sleep' : 'idle', Math.floor(frame / 4));
        return;
      }
      idle = 0;
      const dir = (dy / d > 0.5 ? 'N' : dy / d < -0.5 ? 'S' : '') + (dx / d > 0.5 ? 'W' : dx / d < -0.5 ? 'E' : '');
      sprite(dir || 'idle', frame);
      x -= (dx / d) * 10;
      y -= (dy / d) * 10;
      place();
    }, 100);
    return () => { window.clearInterval(t); window.removeEventListener('mousemove', onMove); };
  }, [hidden]);

  if (hidden) return null;
  return <div id="neko" ref={el} aria-hidden="true" />;
}
