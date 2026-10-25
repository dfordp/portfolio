'use client';

import { useEffect } from 'react';

/** Adds `.in` to every `.settle` element as it scrolls into view (fade + tiny rotation). */
export default function Settle() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
      { threshold: 0.12 },
    );
    document.querySelectorAll('.settle:not(.in)').forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return null;
}
