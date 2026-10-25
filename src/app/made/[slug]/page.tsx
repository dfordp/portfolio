import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { getProject, getProjects, shortDate } from '@/lib/content';
import { SITE_URL } from '@/lib/seo';
import Cover from '@/components/Cover';
import Byline from '@/components/Byline';
import MuxClip from '@/components/MuxClip';
import Settle from '@/components/Settle';
import { Play } from '@/components/icons';

type Props = { params: Promise<{ slug: string }> };

// Only the recent projects have story pages. Brewing and older ones link straight
// out; their old URLs forward to the live site so shared links still land somewhere.
export async function generateStaticParams() {
  return (await getProjects()).filter((p) => p.status === 'recent').map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await getProject((await params).slug);
  if (!p) return {};
  const description = p.problem ? `${p.oneLiner} ${p.problem}` : p.oneLiner;
  return {
    title: p.title,
    description,
    alternates: { canonical: `/made/${p.slug}` },
    openGraph: { type: 'article', title: `${p.title} · DP`, description },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = await getProject(slug);
  if (!p) notFound();
  if (p.status !== 'recent') {
    if (p.link) redirect(p.link);
    notFound();
  }
  const siblings = (await getProjects()).filter((x) => x.status === 'recent');
  const i = siblings.findIndex((x) => x.slug === p.slug);
  const prev = siblings[i - 1];
  const next = siblings[i + 1];
  const words = [p.problem, p.whatItDoes, ...p.story.map((s) => s.text)].join(' ').split(/\s+/).length;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: p.title,
    description: p.oneLiner,
    url: `${SITE_URL}/made/${p.slug}`,
    author: { '@type': 'Person', name: 'Dilpreet Grover', alternateName: 'DP', url: SITE_URL },
    ...(p.updated && { dateModified: p.updated }),
    ...(p.published && { datePublished: p.published }),
    ...(p.stack.length && { keywords: p.stack.join(', ') }),
  };

  return (
    <main className="col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="crumb">
        <Link className="back" href="/">back to the sketchbook</Link>
        <span className="status done">shipped</span>
      </div>
      <h1 className="ptitle serif">{p.title}</h1>
      <div className="tag hand" style={{ fontSize: 26 }}>{p.oneLiner}</div>
      <Byline bits={[
        p.published && `published ${shortDate(p.published.slice(0, 10), true)}`,
        p.updated && `updated ${shortDate(p.updated, true)}`,
        `${Math.max(1, Math.round(words / 230))} min read`,
      ]} />

      <div className="bigcov"><Cover name={p.cover} /></div>
      {p.figCaption && <div className="figcap">{p.figCaption}</div>}

      <div className="prose">
        {p.problem && <><h2 className="sec">the problem</h2><p>{p.problem}</p></>}
        {p.whatItDoes && <><h2 className="sec">what it does</h2><p>{p.whatItDoes}</p></>}

        <h2 className="sec">the story so far <span className="hand">one entry at a time</span></h2>
        {p.story.length ? (
          <ol className="timeline">
            {p.story.map((s, n) => <li key={n}><div className="d">{s.date}</div><p>{s.text}</p></li>)}
          </ol>
        ) : <p className="tbd">nothing written here yet. i&apos;m slow.</p>}

        {p.evidence.length > 0 && (
          <>
            <h2 className="sec">evidence</h2>
            <div className="evidence">
              {p.evidence.map((e, n) => {
                if (e.kind === 'mux' && e.videoId) {
                  return <div key={n} className="ev settle"><div className="shot"><MuxClip playbackId={e.videoId} title={`${p.title}: ${e.caption}`} /></div><div className="c">{e.caption}</div></div>;
                }
                if (e.kind === 'youtube' && e.videoId) {
                  return (
                    <a key={n} className="ev settle" href={`https://www.youtube.com/watch?v=${e.videoId}`} target="_blank" rel="noopener">
                      <div className="shot">
                        <Image src={`https://i.ytimg.com/vi/${e.videoId}/hqdefault.jpg`} alt="" fill sizes="(max-width: 640px) 100vw, 340px" />
                        <span className="pl"><span><Play /></span></span>
                      </div>
                      <div className="c">{e.caption}</div>
                    </a>
                  );
                }
                if (e.image) {
                  return <div key={n} className="ev settle"><div className="shot"><Image src={e.image} alt={e.caption} fill sizes="(max-width: 640px) 100vw, 340px" /></div><div className="c">{e.caption}</div></div>;
                }
                return null;
              })}
            </div>
          </>
        )}

        {p.stack.length > 0 && (
          <>
            <h2 className="sec">made with</h2>
            <div className="stack">{p.stack.map((t) => <span key={t}>{t}</span>)}</div>
          </>
        )}
      </div>

      <div className="pfoot">
        <div className="meta">
          <span>written by</span><span>DP (Dilpreet)</span>
          {p.published && <><span>first published</span><span>{shortDate(p.published.slice(0, 10), true)}</span></>}
          {p.updated && <><span>last updated</span><span>{shortDate(p.updated, true)}</span></>}
          <span>filed under</span><span>code</span>
          {p.link && <><span>visit</span><span><a href={p.link} target="_blank" rel="noopener">{p.linkLabel || p.link.replace(/^https?:\/\/(www\.)?/, '')}</a></span></>}
        </div>
        <div className="nav">
          {prev ? <Link href={`/made/${prev.slug}`}><small>previous</small><b>{prev.title}</b></Link> : <span />}
          {next ? <Link href={`/made/${next.slug}`} style={{ textAlign: 'right' }}><small>next</small><b>{next.title}</b></Link> : <span />}
        </div>
      </div>
      <Settle />
    </main>
  );
}
