import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Markdoc from '@markdoc/markdoc';
import { getPost, getWords, shortDate } from '@/lib/content';
import { SITE_URL } from '@/lib/seo';
import Byline from '@/components/Byline';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getWords()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await getPost((await params).slug);
  if (!p) return {};
  const description = p.description || p.teaser;
  return {
    title: p.title,
    description,
    alternates: { canonical: `/words/${p.slug}` },
    openGraph: { type: 'article', title: p.title, description, url: `/words/${p.slug}`, siteName: 'made by DP', locale: 'en_US', publishedTime: p.date, authors: ['DP (Dilpreet Grover)'], tags: [...p.tags] },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  const all = await getWords();
  const i = all.findIndex((p) => p.slug === slug);
  const newer = all[i - 1];
  const older = all[i + 1];
  const { node } = await post.content();
  const body = Markdoc.renderers.react(Markdoc.transform(node), React);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description || post.teaser,
    datePublished: post.date,
    url: `${SITE_URL}/words/${slug}`,
    ...(post.cover && { image: `${SITE_URL}${post.cover}` }),
    author: { '@type': 'Person', name: 'Dilpreet Grover', alternateName: 'DP', url: SITE_URL },
    keywords: post.tags.join(', '),
    timeRequired: `PT${post.minutes}M`,
  };

  return (
    <main className="col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link className="back" href="/words">all the words</Link>
      <h1 className="ptitle serif long">{post.title}</h1>
      <Byline bits={[shortDate(post.date, true), `${post.minutes} min read`, post.tags.slice(0, 3).join(', ')]} />
      <article className="prose dropcap" style={{ marginTop: 34 }}>{body}</article>
      <div className="pfoot">
        <div className="meta">
          <span>written by</span><span>DP (Dilpreet)</span>
          <span>published</span><span>{shortDate(post.date, true)}</span>
          {post.mediumUrl && <><span>also on</span><span><a href={post.mediumUrl} rel="noopener">medium</a> (this is the original)</span></>}
        </div>
        <div className="nav">
          {older ? <Link href={`/words/${older.slug}`}><small>older</small><b>{older.title}</b></Link> : <span />}
          {newer ? <Link href={`/words/${newer.slug}`} style={{ textAlign: 'right' }}><small>newer</small><b>{newer.title}</b></Link> : <span />}
        </div>
      </div>
    </main>
  );
}
