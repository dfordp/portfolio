# Content inventory

Everything that will appear on madebydp.com, with the facts behind it and draft wording. Use this when writing or rewording copy. Rules for voice and what to leave out are in [CLAUDE.md](../CLAUDE.md); the reasons behind them are in [CONTEXT.md](CONTEXT.md).

How to read each entry:
- **Facts**: verified from a source. Safe to use.
- **Draft**: proposed wording by Claude. Dilpreet edits or approves.
- **Needs Dilpreet**: things only Dilpreet knows. Don't invent these; leave a placeholder.

Copy rules: [STYLE-GUIDE.md](STYLE-GUIDE.md). Drafts below were revised against its section 6.

Status key: `draft` (wording proposed, not approved) · `approved` · `needs-info` (can't be written yet)

---

## 1. Site-level copy

| Field | Status | Draft |
|---|---|---|
| Name (hero, bylines, share image) | approved | DP |
| Handwritten tagline | approved | half batman, half spider-man |
| Tagline, second line (smaller) | approved | no superpowers. no plot armor. |
| Bio, line 1 | approved | my friends call me dp. forms call me dilpreet. ("dilpreet" is redacted by default; hover or tap reveals it) |
| Bio, line 2 | approved | i build small apps for things that annoy me. |
| Bio, line 3 | approved | i also edit videos using stuff i shot myself, tv series, movies and random media. |
| Bio, line 4 | approved | sometimes i explore new aesthetics through cover art, my apps' design and personal graphic design. |
| Bio, line 5 | approved | some of it's useful. most of it's just fun. |
| Footer line | draft | made with too much chai |
| Footer right | approved | © 2026 DP · madebydp.com |
| Site meta description (SEO, ~155 chars) | draft | DP (Dilpreet) builds small apps, cuts video edits and writes long essays about tech. A sketchbook of everything made, brewing and half-finished. |

Dropped: "makes things, then edits the evidence", "small apps, big batman energy" and "the only thing batman and i have in common is the sleep cycle" (didn't sound like DP). The rotating fun fact under the bio is gone.

## 2. Right now

| Status | Draft |
|---|---|
| draft | taking a break between coding and experimenting. |
| draft | trying new things on purpose: ai-first videos, tiny tools, whatever sticks. |
| draft | figuring out which of the three brewing things gets the next month. |

## 3. Currently brewing

Cards link straight to the live site (no story page).

Each needs: one-liner, the problem, what it does, timeline entries, stack, link, doodle cover.

### ombly · ombly.space · `draft`
- **Facts** (from the site): finds private details in documents (names, account numbers, IBAN, card numbers, phone, email) and removes them for good, on the user's own computer, nothing uploaded. Handles PDFs, Word, Excel, PowerPoint, text, scans and photos. Rebuilds pages as images so no hidden text is left. Has a waitlist and a demo.
- **One-liner:** redaction that actually redacts
- **The problem:** most "redacted" pdfs still have the text sitting under the black box. select, copy, oops.
- **What it does:** it finds the private bits in your documents, like account numbers and ids, and takes them out for real. it runs on your own computer. nothing gets uploaded.
- **Needs Dilpreet:** when it started, why (what document leaked?), stack, timeline.

### aarchid · aarchid.space · `draft`
- **Facts** (site + YouTube): photo-based plant ID with a health score; per-plant profile ("digital twin") with photo journal and care history; reports that cite sources; watering reminders that move when rain is forecast; filter plants by room; three tiers (Starter, Enthusiast, Collector); early-bird waitlist. First demo video "Aarchid Demo" posted 2024-09-09 on the technical channel (JRoQtHEF_oY).
- **One-liner:** a personal botanist on your phone
- **The problem:** plant apps say water on tuesdays. plants don't know what a tuesday is.
- **What it does:** it's a plant-care harness. it takes into account where you are, which plant it is and how old it is, so the care it suggests fits that plant, in that place, at that age. (DP's description, oct 2026)
- **Needs Dilpreet:** the real origin story (the mockup's "killed two basil plants" line is invented, remove unless true), stack, 2025 timeline.

### status widgets · status-widgets.com · `draft`
- **Facts** (from the site): monitors third-party providers (AI APIs, payment gateways) in real time; lets the app's UI adapt during outages (cached results, automatic retries, in-context banners) instead of a generic error; framework agnostic, edge-native; "400+ developers on the waitlist".
- **One-liner:** so your users stop blaming you for someone else's outage
- **The problem:** when something your app depends on goes down, your users blame you for things you can't control.
- **What it does:** it's event-driven. it watches your apps and infrastructure, and when something goes down it tells your users automatically, so they always know what's wrong. (DP's description, oct 2026: not a cache layer)
- **Needs Dilpreet:** start date, stack, timeline.

## 4. Stuff i made → code

Newest first. The top six get illustrated cards; everything else sits in an "older stuff" list (title + one line). Order is a best guess from dilpreetgrover.is-a.dev and project dates. Order confirmed by DP.

Recent (cards):

| Project | Facts | Links | Draft one-liner |
|---|---|---|---|
| openlens | Sold a complete version to a client for $2,500 (jul 2026, x.com/dfordp11/status/2076027960302481730): DP's first sold project. Sold because the idea had been copied a lot and funded competitors were everywhere; DP isn't taking it further and is exploring other angles in the same space. Repo health for maintainers: contribution quality, filters spam and duplicate PRs. Repo "Sentinel". Demo 2025-10-08 (rJBH-l3n2CA). | demo video | tells tired maintainers which prs are real and which are someone farming green squares. |
| retold ai | Turns full movies/long videos into AI trailers and story retellings with OpenAI's multimodal models. Own YouTube channel (@retold-dfordp, 5 trailers, 2025-10-12). Its project page holds those trailers. | youtube channel | feed it a three-hour movie. get a trailer back. |
| black hole simulation engine | Black hole physics and gravitational lensing in 2D/3D; C++17, CMake; CPU/GPU geodesics. | source only | i watch too much interstellar. so i made light bend around a black hole in c++. |
| spotify mcp | MCP server that analyses listening history: taste shifts, trends, no Premium needed. | tbd | tells you how your music taste has shifted. no premium needed. |
| hackmate | Swipe-based matchmaking for founders and builders. Next.js, Postgres, Redis, Clerk. An NLP / multidimensional matching experiment, launched on Peerlist with a friend on 22 Sep 2025 (build-in-public X post, 10k+ views), grew to ~250 users across the world via that post, Peerlist and word of mouth. Paused once the experiment answered its question and the partnership didn't work out; DP is re-experimenting in a new direction. | hackmate.space | tinder, but for co-founders. swipe right on someone who also wants to stay up till 4am fixing prod. |
| onlynerds | Decentralized AI learning platform: fork courses, AI tutors, skill NFTs. BNB Chain AI hackathon (may 2025), built with teammates aditya and priyanshu (plus one more); runners-up nationally, DP's last hackathon. Sources: x.com/adxtyahq/status/1926635226190455096, x.com/adxtyahq/status/1937031042256286090, x.com/priyanshudotsol/status/1937093765149188424. Every photo from those posts is used as evidence, each linking to its own post (DP's call, including the venue photos). Stayed a small experiment. | onlynerds-rose.vercel.app | not what the name suggests. you fork a course, remix it and learn it with an ai tutor. |

Older stuff: direct links only, no pages. toolchainai → npm package; sarnet, super grader, one med → GitHub repos; sumz → ai-summariser.vercel.app; goserve → compile-me.ankn.dev; video call streaming → github.com/dfordp/fermion-timepass (WebRTC with a mediasoup SFU); meeting scheduler mcp, crowd funding, ai companion → **needs DP: links**. Removed on DP's call: echo (never deployed), video sharing platform, kosu, messenger app, e-commerce admin dashboard, mbp-10 order book.

| Project | Draft line |
|---|---|
| toolchainai | llm agents with tools, minus the boilerplate. |
| video call streaming | webrtc rooms where one person streams and everyone else watches. |
| meeting scheduler mcp | finds the cal.com and calendly links inside an organization, so an ai can book the meeting. |
| sarnet | colours in black-and-white radar satellite images. |
| super grader | reads answer scripts and grades them against a rubric. |
| crowd funding | fundraising where a smart contract handles the payouts. |
| sumz | summarises articles so you don't have to finish them. (= "Article summariser") |
| one med | a family's medical records in one place, shareable by link. |
| goserve | send it code, get output back. nothing runs on your laptop. (= "Compile Me Playground", compile-me.ankn.dev) |
| ai companion | chatbots modelled on real personalities. |

## 5. Stuff i made → edits

Three filters. Long ones show first (they have custom thumbnails, `maxresdefault`). Duplicate short versions of long uploads are left out.

**Long ones** (creative channel @dfordp, newest first):

| Video | ID | Date | Draft line |
|---|---|---|---|
| BoJack Horseman's Final Curtain Call | mbqI3q4Ie_g | 2026-07 | the view from halfway down. bring tissues. |
| THE BATMAN - "Kick Out" | waiViufbhgk | 2026-07 | travis scott and a very wet gotham. |
| My Existence \| Spider-Man: Brand New Day | -ERdcDGxWqg | 2026-03 | tom holland, cut to skrillex. |
| The Blessings Between Elements | PlY7xaZF7Mk | 2026-01 | a visual poem. |
| Khada hu aaj bhi wahi \| Choo Lo | in6f_jQeDQw | 2024-05 | the local train. |
| Let Her Go x Husn | u8VqfBAxE5o | 2024-01 | the most watched one. 25k views and counting. (25,639 on 2026-10-24) |
| Beyond the Spider-Verse Hype \| Annihilate | x7WF3SFJ_XU | 2023-07 | metro boomin, skrillex and miles. |
| The Batman - "Foolish" | ykfIzflcBsc | 2023-01 | where the batman thing started. (no maxres thumbnail; use hqdefault) |

**Shorts** (portrait cards):

| Video | ID | Date | Draft line |
|---|---|---|---|
| Batman \| Creep (Radiohead) | GXTFnEZPrms | 2026-09 | robert pattinson brooding to radiohead. |
| General Mbappé | fUNFQOCjuBQ | 2026-07 | world cup brain rot, cut with love. |
| SUPERSONIC AMV | wpgy_Vzf_WI | 2026-07 | jjk, aot, demon slayer and levi, held together by skrillex. |
| This Is What Fear Sounds Like | eAEg4RMd-RI | 2026-07 | the batman, again. there is a pattern. |
| Across the Spider-Verse | hxpDMCuoJ1s | 2026-07 | way too many keyframes. |
| Semblances of February, ch. 1 | Jk3k53Us6MM | 2025-02 | stillness and surrender. the slow one. |
| Supersonic Edit | 3tkIM84blHo | 2023-04 | skrillex, the first time. |
| Existance Edit | gA5-XLwRnvQ | 2023-02 | nvke and josh neuman. |

**AI experiments**: only one, on purpose.

| Video | ID | Date | Draft line |
|---|---|---|---|
| "I came here to kill you" \| ON TIME | R51daZr3nqY | 2026-02 | my ai-first short film. sci-fi, and a little tense. |

The Retold AI trailers (Silence of the Lambs, Sharknado, Beetlejuice, Circle, Citizen Kane) are not edits; they live on Retold AI's project page.

## 5b. Stuff i made → art

Two filters. Both are imported as image files (no embeds).

- **photos**: 26 Instagram photo posts, newest first (reels excluded; they don't crop cleanly). Shortcodes in the mockup's `IG` list. Newest: DYv1jHQNK2g, DYd_vVnmbTy, DYJjO1_jX3w, DYAD1ijjQuP, DWjnGWJGXpv, DS5cIw-k1Nt. Caption on card: "on instagram". **Needs DP:** captions or titles, if any.
- **design**: 9 Behance projects, titles from Behance: sikkim (travel photography), pseudo movie posters, music club t-shirt, anime cover art, rock cover art, toyota supra phonk cover, dhh poster, morning bird, hawa mahal. Cover images come from `mir-s3-cdn-cf.behance.net/projects/max_808_webp/…`.

## 6. Stuff i made → explainers (technical YouTube channel)

Source: youtube.com/@dilpreetgrover11 ("Dp Builds Stuff").

| Video | ID | Date | Draft one-liner |
|---|---|---|---|
| Why AI Agents Get Adopted, Then Silently Abandoned (The Activation Gap) | xTRByjnrluM | 2026-08-06 | people try your agent once, like it, and never open it again. this is about why. |
| Core Database Topics Explained like You are 5 | EYn6ccE68D0 | 2026-07-22 | three database ideas that sound scary and really aren't. |

Also on the channel, used as project "evidence" rather than listed: Aarchid Demo, Kosu AI demo, OpenLens Demo, and an intro video ("Hey I am Dilpreet!", which links the old domain).

Older interview-style videos on the creative channel ("How He Scaled to 200k MRR…", "Y-Combinator Removes this $300M Startup…", "How He Runs 6-Figure Business selling Board Games?") are founder-flavoured. **Needs Dilpreet:** keep as explainers, or drop.

## 7. Words (blog)

Migrating from Medium. Each post becomes a markdown file with images in `public/media/words/<slug>/`. Body text is Dilpreet's and is kept as written; only the homepage teaser and SEO description get new wording.

| Date | Title | Read | Source | Status |
|---|---|---|---|---|
| 2026-06-05 | Why Most AI Workflows Fail (And Nobody Wants to Talk About It) | 7 min | Medium feed | new to the site |
| 2026-05-11 | The Invisible Arbitrage: Why I'm Trading the Hype-Cycle for the Real Economy | 9 min | Medium feed | new to the site |
| 2026-05-09 | Voice AI Has a Networking Problem Nobody Talks About | 13 min | Medium feed | new to the site |
| 2026-03-23 | I tried making a decentralized OS on my own and failed miserably | 12 min | gitconnected | on old site |
| 2026-03-20 | The AI Mirage: Power Grids, Paper Billions, and the Global Reality Check | 18 min | Medium | on old site |
| 2026-03-18 | The AI Productivity Paradox | 14 min | Medium | on old site |
| 2025-03-07 | Definitive Guide to AI Benchmarks | 7 min | levelup.gitconnected | on old site |
| 2025-02-19 | Why Quantum Computing is the next big thing? | 7 min | Medium | on old site |
| 2025-02-04 | Untapped Potential of Blockchain | 7 min | Medium | on old site |
| 2024-09-10 | My Experience Using GenAI in Software Development | 7 min | Medium | on old site |
| 2024-07-29 | Embracing the Side Project Hustle: My Journey Through the Buildspace Challenge | 7 min | Medium (not in feed; fetch from URL) | on old site |

Homepage teasers (draft, format `<claim>. <read time>.`):
- Why Most AI Workflows Fail: most ai workflows die quietly after the demo, and the pitch decks never mention it. 7 min.
- The Invisible Arbitrage: i'm stepping off the hype cycle to build for the boring, real economy. 9 min.
- Voice AI Has a Networking Problem: voice ai breaks in production at the network layer, not the model. 13 min.
- Decentralized OS: phones and laptops make bad servers. i found out by overheating several. 12 min.
- The AI Mirage: the ai boom is running into power grids and paper valuations. 18 min.
- Older posts: needs teasers.

**Needs Dilpreet:** after migration, set each Medium post's canonical link to the new URL.

## 8. How i work

A hand-drawn double diamond, from Dilpreet's own notebook sketch: start → discover → define → mid → develop → deliver → ship, with a dashed red loop from ship back to start ("then it starts again"). Labels above each half: go wide / narrow down / go wide again / narrow, ship.

| Phase | Status | Draft |
|---|---|---|
| discover | draft | poke at the problem. read, try the bad existing apps, ask people who have it. |
| define | draft | pick the one annoying thing worth fixing. |
| develop | draft | try a few ways to build it. most get thrown out. |
| deliver | draft | ship one. watch what breaks. go back to the start. |

**Needs Dilpreet:** does this match how projects actually go? A real example per phase (from ombly or aarchid) would make it specific.

## 9. Into lately

First person. Replaces the old third-person facts section.

**Watching** (Letterboxd, last 8 logged, as of 2026-10-24): Batman Begins ★5, The Odyssey (2026) ★5, Doraemon: Nobita and the New Steel Troops ★5, Project Hail Mary (2026) ★5, Scott Pilgrim vs. the World ★5, Yes Man ★5, Band Baaja Baaraat ★4, Iron Man 2 ★5. Intro: "the last eight films i logged. i'm generous with stars." All-time top four: la la land, whiplash, inglourious basterds, forrest gump.

**Listening** (Spotify, by saves): relaxing electronic (357 songs, 9 saves, embedded player), trip down memory lane (136 songs, 6 saves), random gems i found (464 songs), werid phonk songs lol ("the typo stays"). Intro: "my playlists other people actually saved." 

## 10. Links (labels, no handles)

Social links sit next to their content instead of in one crowded list: the youtube channels link from the edits and explainers tabs, letterboxd and spotify from their fact cards. "say hi" only has email, instagram and x.

| Label | URL |
|---|---|
| technical youtube channel | youtube.com/@dilpreetgrover11 |
| creative youtube channel | youtube.com/@dfordp |
| instagram | `instagram.com/_dfordp_` (underscores are part of the handle) |
| x | x.com/dfordp11 |
| letterboxd | letterboxd.com/dfordp |
| spotify | open.spotify.com/user/31mejlhfyh4eyn5fa7xscqv3m3ky |
| email | dilpreetgrover2@gmail.com (or a madebydp.com address) |

## 11. Music

A queue of DP's all-time favourites, in this order (CMS: Songs):

1. Gabru, Yo Yo Honey Singh ft. J Star (`/music/gabru.mp3`)
2. Bombay Dreams, KSHMR & Lost Stories (`/music/bombay-dreams.mp3`)
3. Wind, Akeboshi (`/music/wind.mp3`)

Commercial tracks, hosted on DP's call (takedown risk noted).

## 12. Share images (OG)

- Site: "Dilpreet" + tagline + sticky note ("apps, edits, essays. and a cat.") + oneko + "madebydp.com".
- Projects: project name + one-liner + its doodle.
- Posts: post title + read time + date.
