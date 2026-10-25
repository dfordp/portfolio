# madebydp.com — Dilpreet's sketchbook

Personal site for Dilpreet: a creator's sketchbook of apps, video edits, explainers and essays. Not a resume, not a founder page.

For why the site is being rebuilt this way (goals, decisions, what was rejected, reference sites), read [docs/CONTEXT.md](docs/CONTEXT.md) before writing prompts, copy or new features. Every piece of content going on the site (with verified facts, draft wording and what's still missing) is in [docs/CONTENT.md](docs/CONTENT.md); update it when content changes. **Before writing or editing any copy, follow [docs/STYLE-GUIDE.md](docs/STYLE-GUIDE.md)**: voice, pacing, the AI-tell list, entry templates, visual loudness, and the final-pass checklist. Where it is stricter than this file, the style guide wins.

## Content rules (follow these whenever writing or editing site copy)

**Never include**
- Location of any kind: city, country, timezone, "based in…". "Working away from home" is the most specific it gets.
- Employers, clients, job titles, or founder/CEO language. No Hobfit, Meved, Appleute, Codemod, Fada Club, Zinex.
- Usernames or handles in visible text. Link labels describe the place, not the handle ("technical youtube channel", not "@dilpreetgrover11").
- LinkedIn, GitHub profile links, Behance, or a resume link. They are not where Dilpreet hangs out anymore.
- Invented facts. Every fun fact must be checkable against a source listed below.

**Voice**
- Lowercase, casual, first person, a little silly. Short sentences. Self-deprecating is fine; corporate is not.
- Write like a person explaining their thing to a friend: what annoyed them, what they built, what happened.
- Lead with **DP**: the hero, bylines ("by DP") and share images use "DP". "Dilpreet" appears once in the bio ("my friends call me dp. forms call me dilpreet.") and in metadata/JSON-LD for search. Body copy stays lowercase.
- Avoid: "passionate", "leverage", "revolutionize", "seamless", "cutting-edge", "I'm a founder who…".
- Pronouns: refer to Dilpreet by name in third-person copy (e.g. facts); don't assume pronouns.

**Project copy** has four parts, in this order:
1. one-liner (handwritten tagline, silly): "i watch too much interstellar."
2. the problem: what was annoying, in one or two sentences.
3. what it does: plain words, no buzzwords.
4. the story so far: dated timeline entries (what changed, what broke, what was learned). Dilpreet adds these over time.

## Site structure (single page + detail pages)

Home, top to bottom (each section has a small red index number):
1. **DP** + handwritten tagline ("half batman, half spider-man") + 3-line bio. No rotating fun fact.
2. **01 right now**: 2–4 lines, first person, dated. Currently: taking a break between coding and experimenting.
3. **02 on the stove** (currently brewing): polaroid cards with detailed ink illustrations, one-liner, the problem, what it does, link to the project page
4. **03 stuff i made**: tabs, no "all" tab:
   - `code`: newest first. 6 recent projects as illustrated cards, then an "older stuff" two-column list.
   - `edits`: filters `long ones` (custom thumbnails, shown first) · `shorts` (portrait cards) · `ai experiments` (only the ON TIME short film)
   - `art`: filters `photos` (Instagram) · `design` (Behance). Images are downloaded into the repo and shown in our own frames, never as raw embeds.
   - `explainers`: technical channel videos
5. **04 how i work**: hand-drawn double diamond with a loop back, one line per phase
6. **05 into lately**: first person. "watching" = last 8 Letterboxd logs with stars + all-time top four; "listening" = most-saved Spotify playlists with one embedded player
7. **06 words**: blog posts with a one-line teaser (`<claim>. <read time>.`)
8. **07 say hi**: email, instagram, x only (other profiles are linked next to their content)
9. footer: "made with too much chai" + © year + madebydp.com

There is no third-person "facts" section; it was dropped because it read as written about DP, not by DP.

Detail pages:
- `/made/[slug]` project page (Retold AI's page holds its five AI-cut trailers as evidence): title, one-liner, byline (photo, "by Dilpreet", published date + time, updated date, read time), doodle cover, the problem, what it does, the story so far (timeline), evidence (taped screenshots / demo videos), made with, footer (written by / first published / last updated / filed under / visit link, prev/next).
- `/words/[slug]` blog post: same byline and footer pattern.

Global: one fixed theme (no light/dark toggle), bottom icon dock with the music play button in the center (random track per visitor, plays continuously, pause anytime), oneko cat follows the cursor.

## Design tokens (sketchbook theme)

- paper `#F3EDE0` with a subtle grain texture, card `#FBF8F1`, ink `#2B2722`, ink-2 `#5A5246`, ink-3 `#8A7F6A`, rule `#D9CEB6`, accent red `#C8452B`, highlighter `#F6D86B`, green `#4E7A4A`
- Fonts: Instrument Serif (headings), Caveat (handwritten notes), Inter Tight (body)
- Project covers are detailed ink illustrations (SVG): 2px ink strokes, tint fills (#EBE2CC), 45° hatch and dot patterns for shading, one red accent, a light roughen filter (displacement scale ~1.6, not wobbly). Each references something specific to the project. Real screenshots only appear inside project pages as "evidence".
- Third-party media (Instagram, Behance) is imported as image files into `public/media/`, never rendered as embeds: embeds bring their own chrome, load unreliably, and Instagram CDN links expire.
- Dashed rules between rows, slight rotations on taped cards, no drop-shadow-heavy UI.

## Sources for facts and content

| What | Source |
|---|---|
| Creative videos (edits) | YouTube "Dp Edits Stuff": youtube.com/@dfordp |
| Technical videos (explainers, demos) | YouTube "Dp Builds Stuff": youtube.com/@dilpreetgrover11 |
| Blog posts | Medium feed: medium.com/feed/@dilpreetgrover2 (last 10 posts; older ones from the post URL) |
| Films | letterboxd.com/dfordp (favorites, ratings) |
| Music taste | Spotify profile 31mejlhfyh4eyn5fa7xscqv3m3ky (public playlist names) |
| Currently brewing | ombly.space, aarchid.space, status-widgets.com |
| Other social | instagram.com/_dfordp_, x.com/dfordp11 |

Do not copy location fields from these profiles (Letterboxd lists one).

## Content that updates itself

| Source | How | Notes |
|---|---|---|
| Letterboxd ("watching") | public RSS `letterboxd.com/dfordp/rss/`, fetched server-side, revalidated every 6h | title, year, rating, watched date |
| YouTube, both channels (edits, explainers) | channel RSS feeds, revalidated every 6h | Short vs long: `youtube.com/shorts/<id>` returns 200 for Shorts, 303 for long videos. One-liners, hiding and duplicates are overrides in the CMS keyed by video id; a new upload shows with no one-liner until DP adds one. |
| Spotify ("listening") | public profile/playlists via the Spotify Web API (client credentials, `SPOTIFY_CLIENT_ID`/`SECRET`), or static if keys aren't set | save counts drift, so they're fetched, not typed |
| Instagram, Behance (art) | no keyless API: imported with a local script into `public/media/`, then edited in the CMS | Instagram CDN links expire; never hotlink |
| Blog | written in the CMS (Medium posts migrated once) | |

Music: one song for now (`public/Akeboshi.mp3`, "Wind"), played from the center dock button. A bigger playlist is parked. If it comes back: hosted files must be public-domain/CC recordings (e.g. classical pieces from DP's Instrumental playlist); anything else goes through a visible YouTube player (YouTube's terms forbid hidden audio-only playback).

## Stack and hosting

- Next.js (App Router) + TypeScript + Tailwind, deployed on Vercel at madebydp.com.
- Content lives in the repo, edited through Keystatic running locally (`/keystatic`, disabled in production). No database.
- Media: images in `public/media/`, project demo videos on Mux via `next-video`.
- SEO/AEO: sitemap + robots generated from content, JSON-LD (`Person`, `CreativeWork`, `BlogPosting`), per-page OG images in the sketchbook style, and DualMark (`@dualmark/nextjs`) for markdown twins + `llms.txt`.
- Secrets (`GITHUB_TOKEN`, Mux keys) are server-only; never put them in `next.config.ts` `env` or `NEXT_PUBLIC_*`.
