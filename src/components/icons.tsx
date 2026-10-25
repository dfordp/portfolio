// Outline icons (Tabler-style, 24px grid). Inline so there's no icon font to load.
type P = { className?: string };
const S = ({ children, className }: P & { children: React.ReactNode }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    {children}
  </svg>
);

export const Home = (p: P) => <S {...p}><path d="M5 12H3l9-9 9 9h-2" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" /><path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" /></S>;
export const Flask = (p: P) => <S {...p}><path d="M9 3h6" /><path d="M10 9h4" /><path d="M10 3v6L6 18a2 2 0 0 0 2 3h8a2 2 0 0 0 2-3l-4-9V3" /></S>;
export const Tools = (p: P) => <S {...p}><path d="M3 21h4L20 8a1.5 1.5 0 0 0-4-4L3 17v4" /><path d="M14.5 5.5l4 4" /><path d="M12 8L7 3 3 7l5 5" /><path d="M7 8L5.5 9.5" /><path d="M16 12l5 5-4 4-5-5" /><path d="M16 17l-1.5 1.5" /></S>;
export const Pencil = (p: P) => <S {...p}><path d="M4 20h4L18.5 9.5a2.8 2.8 0 0 0-4-4L4 16v4" /><path d="M13.5 6.5l4 4" /></S>;
export const Smile = (p: P) => <S {...p}><circle cx="12" cy="12" r="9" /><path d="M9 10h.01M15 10h.01" /><path d="M9.5 15a3.5 3.5 0 0 0 5 0" /></S>;
export const Play = (p: P) => <S {...p}><path d="M7 4v16l13-8z" /></S>;
export const Skip = (p: P) => <S {...p}><path d="M4 5v14l11-7z" /><path d="M20 5v14" /></S>;
export const Pause = (p: P) => <S {...p}><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></S>;
export const Code = (p: P) => <S {...p}><path d="M7 8l-4 4 4 4" /><path d="M17 8l4 4-4 4" /><path d="M14 4l-4 16" /></S>;
export const Movie = (p: P) => <S {...p}><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 4v16M16 4v16M4 8h4M4 16h4M4 12h16M16 8h4M16 16h4" /></S>;
export const Photo = (p: P) => <S {...p}><path d="M15 8h.01" /><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M3 16l5-5c.9-.9 2.1-.9 3 0l5 5" /><path d="M14 14l1-1c.9-.9 2.1-.9 3 0l3 3" /></S>;
export const Presentation = (p: P) => <S {...p}><path d="M3 4h18" /><path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4" /><path d="M12 16v4M9 20h6" /><path d="M8 12l3-3 2 2 3-3" /></S>;
export const Mail = (p: P) => <S {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></S>;
export const Instagram = (p: P) => <S {...p}><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3" /><path d="M16.5 7.5v.01" /></S>;
export const X = (p: P) => <S {...p}><path d="M4 4l11.7 16H20L8.3 4z" /><path d="M4 20l6.8-6.8M13.2 10.8L20 4" /></S>;
