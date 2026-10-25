import Link from 'next/link';
import { getArt, getProjects, getSite, getVideos, getWords, shortDate } from '@/lib/content';
import { getRecentFilms, mergeWithFeeds, PLAYLISTS, SPOTIFY_PROFILE } from '@/lib/feeds';
import { personJsonLd } from '@/lib/seo';
import Redact from '@/components/Redact';
import Settle from '@/components/Settle';
import Cover from '@/components/Cover';
import DoubleDiamond from '@/components/DoubleDiamond';
import StuffIMade from '@/components/StuffIMade';
import { Instagram, Mail, X } from '@/components/icons';

export const revalidate = 21600; // 6h: picks up new letterboxd logs and youtube uploads

const NEW_DAYS = 60; // "new here" on posts within two months of the newest one

export default async function Home() {
  const [site, projects, videos, art, words, films] = await Promise.all([
    getSite(), getProjects(), getVideos().then(mergeWithFeeds), getArt(), getWords(), getRecentFilms(8),
  ]);
  const brewing = projects.filter((p) => p.status === 'brewing');
  const recent = projects.filter((p) => p.status === 'recent');
  const older = projects.filter((p) => p.status === 'older');
  const newest = Date.parse(words[0]?.date ?? '1970-01-01');
  const isNew = (d: string) => (newest - Date.parse(d)) / 864e5 < NEW_DAYS;

  return (
    <main className="col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(site.description)) }} />

      <header id="top" className="hero">
        <h1 className="serif">DP</h1>
        <span className="tag hand">{site.tagline}</span>
        <svg className="squiggle" width="300" height="12" viewBox="0 0 460 12" aria-hidden="true">
          <path filter="url(#rough)" d="M2 8 Q 20 0 38 7 T 74 7 T 110 7 T 146 7 T 182 7 T 218 7 T 254 7 T 290 7 T 326 7 T 362 7 T 398 7 T 434 7 T 458 5" fill="none" stroke="#C8452B" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
        <span className="tag2 hand">{site.taglineSmall}</span>
        <div className="bio">
          <p>my friends call me {site.friendsName}. forms call me <Redact>{site.formalName}</Redact>.</p>
          {site.bio.map((line, i) => <p key={i}>{i === 0 ? <Swipe text={line} mark="small apps for things that annoy me" /> : line}</p>)}
        </div>
      </header>

      <section id="now">
        <div className="lbl"><b>01</b></div>
        <h2 className="serif">right now <span className="hand">a break, on purpose</span></h2>
        <div className="now settle">
          {site.rightNowUpdated && <span className="when">updated {shortDate(site.rightNowUpdated)}</span>}
          {site.rightNow.map((line, i) => <p key={i}>{line}</p>)}
        </div>
      </section>

      <section id="brewing">
        <div className="lbl"><b>02</b></div>
        <h2 className="serif">on the stove <span className="hand">still warm, don&apos;t touch</span></h2>
        <div className="brew">
          {brewing.map((p) => (
            <a key={p.slug} href={p.link ?? '#'} target="_blank" rel="noopener" className="bc settle">
              <div className="pol">
                <span className="tape" />
                <div className="ph"><Cover name={p.cover} /></div>
                <span className="stamp">wip</span>
                <div className="cap">{p.title}</div>
              </div>
              <div>
                <h3>{p.title}</h3>
                <div className="one">{p.oneLiner}</div>
                <div className="k">the problem</div>
                <p>{p.problem}</p>
                <div className="k">what it does</div>
                <p>{p.whatItDoes}</p>
                <span className="go">visit {p.linkLabel || 'the site'}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="made">
        <div className="lbl"><b>03</b></div>
        <h2 className="serif">stuff i made</h2>
        <StuffIMade
          code={recent.map(({ slug, title, year, cover, oneLiner, tags }) => ({ slug, title, year, cover, oneLiner, tags }))}
          older={older.map(({ slug, title, oneLiner, link }) => ({ slug, title, oneLiner, link }))}
          videos={videos.filter((v) => v.group !== 'hidden').map(({ youtubeId, title, line, group, published, views, thumb }) => ({ youtubeId, title, line, group, published, views, thumb }))}
          art={art.map(({ slug, title, source, image, link }) => ({ slug, title, source, image, link }))}
        />
      </section>

      <section id="how">
        <div className="lbl"><b>04</b></div>
        <h2 className="serif">how i work <span className="hand">apps, edits, posters. same loop</span></h2>
        <DoubleDiamond />
        <div className="phases">
          <div className="ph4"><small>01</small><b>discover</b><p>notice what bugs me or grabs me. a clunky app, a scene i keep rewatching, a sky worth shooting.</p></div>
          <div className="ph4"><small>02</small><b>define</b><p>pick the one thing worth making. a problem to fix, a feeling to cut to, a frame to design.</p></div>
          <div className="ph4"><small>03</small><b>develop</b><p>try a few versions of it. most get thrown out.</p></div>
          <div className="ph4"><small>04</small><b>deliver</b><p>ship the app, post the edit, print the poster. see what breaks, then start again.</p></div>
        </div>
      </section>

      <section id="into">
        <div className="lbl"><b>05</b></div>
        <h2 className="serif">into lately <span className="hand">what&apos;s on my screen and in my ears</span></h2>
        <div className="into">
          <div className="col2 settle">
            <h3 className="serif">watching</h3>
            <p className="intro">the last films i logged. i&apos;m generous with stars.</p>
            <ol className="films">
              {films.map((f) => (
                <li key={f.title}>
                  <span>{f.title} <small>{f.year}</small></span>
                  {f.rating > 0 && <span className="st" aria-label={`${f.rating} stars`}>{'★'.repeat(f.rating)}<i>{'★'.repeat(5 - f.rating)}</i></span>}
                </li>
              ))}
            </ol>
            <p className="intro">all-time top four: la la land, whiplash, inglourious basterds, forrest gump.</p>
            <a className="ctx" style={{ marginLeft: 0 }} href="https://letterboxd.com/dfordp/" target="_blank" rel="noopener">my letterboxd diary</a>
          </div>
          <div className="col2 settle">
            <h3 className="serif">listening</h3>
            <p className="intro">my playlists other people actually saved.</p>
            <div className="spot">
              <iframe src={`https://open.spotify.com/embed/playlist/${PLAYLISTS[0].id}?utm_source=generator`} loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title={`${PLAYLISTS[0].name} playlist on spotify`} />
            </div>
            <ul className="pls">
              {PLAYLISTS.map((p) => <li key={p.id}><a href={`https://open.spotify.com/playlist/${p.id}`} target="_blank" rel="noopener">{p.name}</a><span>{p.note}</span></li>)}
            </ul>
            <a className="ctx" style={{ marginLeft: 0 }} href={SPOTIFY_PROFILE} target="_blank" rel="noopener">all my playlists</a>
          </div>
        </div>
      </section>

      <section id="writing">
        <div className="lbl"><b>06</b></div>
        <h2 className="serif">words <span className="hand">long ones, mostly</span></h2>
        {words.slice(0, 5).map((w) => (
          <Link key={w.slug} href={`/words/${w.slug}`} className="post settle">
            <span className="dt">{shortDate(w.date)}</span>
            <div>
              <div className="pt">{w.title}{isNew(w.date) && <span className="new">new here</span>}</div>
              <div className="ts">{w.teaser} {w.minutes} min.</div>
            </div>
          </Link>
        ))}
        <Link className="more" href="/words">read all {words.length}</Link>
      </section>

      <section id="hi">
        <div className="lbl"><b>07</b></div>
        <h2 className="serif">say hi</h2>
        <div className="links">
          <a href={`mailto:${site.email}`}><Mail />email</a>
          <a href="https://www.instagram.com/_dfordp_" target="_blank" rel="noopener"><Instagram />instagram</a>
          <a href="https://x.com/dfordp11" target="_blank" rel="noopener"><X />x</a>
        </div>
      </section>

      <footer className="foot">
        <span className="hand">made with too much chai</span>
        <span>© 2026 DP · madebydp.com</span>
      </footer>
      <Settle />
    </main>
  );
}

function Swipe({ text, mark }: { text: string; mark: string }) {
  const i = text.indexOf(mark);
  if (i < 0) return <>{text}</>;
  return <>{text.slice(0, i)}<span className="swipe">{mark}</span>{text.slice(i + mark.length)}</>;
}
