import { COVERS } from './covers';

/** A project's ink illustration, or a plain ruled card when it has none. */
export default function Cover({ name }: { name: string }) {
  const svg = COVERS[name];
  if (!svg) return <div className="cov" style={{ background: 'repeating-linear-gradient(var(--card) 0 27px, var(--rule) 27px 28px)' }} aria-hidden="true" />;
  return <div className="cov" aria-hidden="true" dangerouslySetInnerHTML={{ __html: svg }} />;
}
