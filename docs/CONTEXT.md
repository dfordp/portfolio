# Why this redesign exists

Background for anyone (human or Claude) writing prompts, copy or code for madebydp.com. CLAUDE.md says *what* the rules are; this file says *why*, so new decisions stay in the same spirit.

## Where the site came from

The previous site (dilpreetgrover.me) started from another developer's portfolio template. It was a dark, black-on-black, resume-style page: a hero listing employers and achievements, separate `/projects`, `/blogs` and `/art` pages, blog posts that only linked out to Medium, and an art page made of raw Behance, YouTube and Instagram embeds. Background music was set to autoplay, which browsers block, so on Vercel it usually never played.

## What Dilpreet wants instead

- **Creator, not founder.** The site should show the things Dilpreet makes (apps, video edits, technical explainers, essays), not a career. It should not feel too professional, too personal, or "founderish".
- **A little silly is good.** The tone is playful and human. Jokes are welcome as long as they're true.
- **Privacy.** No location, no employers, no usernames on the page. Dilpreet works away from home and doesn't want to say where.
- **Where Dilpreet actually is now.** YouTube (a technical channel and a creative channel), Instagram, X, Letterboxd and Spotify. LinkedIn, GitHub, Behance and the resume are deliberately left out.
- **Own the writing.** Blog posts move off Medium onto the site, and new posts get written in the CMS directly. Medium copies should point their canonical link back here.
- **Easy to update.** A small CMS that runs locally and saves content (and images) into the repo, so updating the site never needs a database or a hosted admin.
- **Findable.** Good SEO, plus DualMark so AI tools can read and quote the site.

## Decisions and the reasoning behind them

| Decision | Why |
|---|---|
| Single page plus detail pages | The single page is how people browse. Project and post pages exist so each thing has its own URL for search, sharing and the full "story so far". |
| Sketchbook theme, one theme only | Moves far from the old black look, puts the creative side first, and the handwritten details carry the silliness. No light/dark toggle. |
| Ink-doodle SVG covers for projects | The projects' own sites have dark themes that clash with the paper look. Doodles keep everything consistent; real screenshots appear only on project pages as "evidence". |
| Tabs (code / edits / explainers), no "all" | Each kind of work reads differently. Mixing apps and Batman edits in one list felt messy. |
| "currently brewing" shelf | Ombly, Aarchid and Status Widgets are in progress. They get room to explain the problem they solve. |
| Facts section from real profiles | Started as one rotating fun fact. It became a crawlable section because it's the most personal part of the site and good for search, as long as every fact is checkable (Letterboxd, Spotify, YouTube, Medium). |
| Music play button in the center of the dock | Browsers won't autoplay audio. A visible play button lets visitors start it once and pause anytime. Each visitor gets a random track and it keeps playing. Spotify can't stream full songs into a custom player, so tracks are hosted files Dilpreet has rights to. |
| Keep the oneko cat | It's part of the site's personality. |
| Keystatic (local only) over a hosted CMS or database | Content is small and changes when Dilpreet redeploys, so files in git are enough. Nothing to secure in production. |
| DualMark | Serves a markdown version of each page to AI agents and publishes `llms.txt`, so tools like ChatGPT or Claude can quote the site accurately. |

## Rejected along the way

- Listing employers (Hobfit, Meved, Appleute, Codemod) and founder achievements: too resume-like.
- Design and Behance work: not the focus anymore.
- Dark/light toggle and black-on-black styling.
- A dotted-grid background: too busy; replaced by paper grain.
- Showing handles like "_dfordp_" or the domain in big type on the share image.
- Mentioning any city, including the one on the Letterboxd profile.

## Reference sites Dilpreet liked

- jia.sc: lowercase, sparse, a running log of small updates.
- yaxh.tech: playful details (sprites, "listening" widget, visitor counter).
- kartiklabhshetwar.com: narrow single column and the floating bottom dock.
- sameerposwal.in: bordered single column with icon tabs.

## Where things stand (Oct 2026)

The design was settled through an interactive HTML mockup (home, project page, blog post, share image). Implementation order: groundwork (dependency reinstall, Next.js security upgrade, remove the `GITHUB_TOKEN` exposure in `next.config.ts`, dead-code cleanup, `git init`), then Keystatic, then content migration (projects, YouTube videos, 11 Medium posts with images), then the sketchbook page and detail pages, then SEO and DualMark.

Still needed from Dilpreet: the music tracks, real dates and history for each project's timeline, and final say on the drafted copy.
