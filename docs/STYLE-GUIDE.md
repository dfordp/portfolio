# madebydp style guide

How the site should sound, read and look. CLAUDE.md has the hard rules (what never goes on the site). CONTEXT.md has the why. This file is the *how*: the voice, the rhythm, the structure of every kind of entry, and a list of tells that make writing sound like a machine did it.

If a sentence could sit on anyone's portfolio, it's wrong. If it could only be Dilpreet's, keep it.

---

## 1. The one-line brief

**A loud, hand-drawn notebook kept by someone who gets distracted by good ideas.** Bold on the page, quiet in the voice. The design shouts a little (big serif, red ink, taped cards). The words never do. They mumble the joke and keep walking.

Three things to hold at once:

- **Bold:** big type, heavy contrast, one red accent, hard edges, stuff slightly crooked.
- **Silly:** specific, true and a bit self-roasting. Never zany.
- **Slow-ish (thoda-bahut slow):** not rushed, not sleepy. Room to breathe. One idea per line, a pause before the joke lands.

---

## 2. Voice

### Who is talking
A friend explaining their thing across a table, a bit tired, a bit proud. Not a host, not a brand, not a pitch.

### The five rules

1. **Say what actually happened.** "most redacted pdfs still have the text under the black box" beats "privacy is paramount." Concrete nouns, real numbers, real mistakes.
2. **Start from the annoyance.** Every project begins with what bugged Dilpreet, never with what the product is.
3. **One joke per block, and it has to be true.** If you can't point at where it came from, cut it.
4. **Undersell.** "some of it is useful" is funnier and more believable than "powerful tools." Let the work be better than the description.
5. **Stop early.** End on the fact, not on a lesson or a wink. If the last line explains the joke, delete it.

### Case and punctuation
- Body copy is lowercase. Headings, bylines and the name are "Dilpreet" with a capital D.
- Periods are fine. Short sentences are fine. Fragments are fine.
- Commas and full stops over em dashes. **No em dashes in site copy.** (They are the single loudest AI tell.)
- No exclamation marks, except inside a quote of something Dilpreet really said.
- No emojis. Doodles do that job.
- Parentheses for the side-mumble: "(it works, mostly)". One per paragraph at most.

### Pacing: "thoda-bahut slow"
Fast copy is a feed. Slow copy is a notebook. Aim for:

- Sentences of **4 to 12 words**, with one longer one now and then so it doesn't feel like a ticker.
- **A beat before the punchline.** Setup line, then a line break, then the turn.
- **Two to three sentences per paragraph** on the home page. Essays can go longer; they are Dilpreet's own words and stay as written.
- Never stack three jokes in a row. Give the reader one breath of plain information between them.

> too fast: ombly redacts docs locally, no uploads, fully private, 100% safe.
>
> right pace: most "redacted" pdfs still have the text sitting under the black box.
> select, copy, oops.
> ombly takes it out for real, on your own computer. nothing gets uploaded.

### Hinglish
Dilpreet writes this way in real life, so a sprinkle is allowed where it comes out naturally ("thoda", "bas", "yaar"). Rules: one per page at most, never explained, never as a flavour sticker. **Needs Dilpreet to say which words he actually uses.** Don't invent a persona.

---

## 3. The tells (how to not sound like AI)

Delete on sight. If one of these shows up, rewrite the sentence from the facts, don't swap the word.

### Words and phrases
`passionate`, `leverage`, `seamless`, `cutting-edge`, `revolutionize`, `empower`, `unlock`, `elevate`, `delve`, `dive into`, `landscape`, `ecosystem`, `journey`, `crafted`, `curated`, `robust`, `game-changer`, `next-level`, `harness`, `tapestry`, `at the intersection of`, `in today's fast-paced world`, `whether you're X or Y`, `it's worth noting`, `here's the thing`, `let's be honest`, `buckle up`.

### Shapes
- **"It's not X, it's Y."** Almost every AI paragraph has one. Allowed once on the whole site, and only if the contrast is real.
- **Rule of three.** "fast, simple, and powerful." Real people list two things, or four, or one weird one.
- **Colon reveals.** "the result: a calmer ui." Say the thing.
- **The tidy closer.** A final line that sums up, moralises or winks. Cut it.
- **Rhetorical question openers.** "ever wondered why…?" Never.
- **Mirrored clauses.** "built for makers, made by a maker."
- **Every line the same length.** Machine rhythm. Vary it on purpose.
- **Adjective stacks before a noun.** "a sleek, intuitive, lightning-fast dashboard." Pick the one true adjective or none.
- **Fake modesty that is really a brag.** "just a small side project" followed by the numbers.
- **Explaining the joke** or announcing it ("fun fact:", "plot twist:", "spoiler:"). The facts section already says "fun facts" once. That is enough.

### The perplexity problem
AI text is too *predictable*: each word is the most likely next word. The cure is not random weirdness, it is **specificity**. A real detail is by definition something the model wouldn't guess.

Test every line: *could someone who never met Dilpreet have written this?* If yes, add a detail only he has (the typo in the playlist name, "kick out" twice, the 4am prod fix) or delete the line.

| Generic | Specific |
|---|---|
| "a passion for storytelling through video" | "i have cut the batman to 'kick out' twice. on purpose." |
| "I love music of all kinds" | "one playlist is called 'werid phonk songs lol'. the typo stays." |
| "building innovative solutions" | "i build small apps for things that annoy me." |
| "a blend of tech and creativity" | "some of it is useful. most of it was fun to make." |

### Specificity checklist
A good line has at least one of: a number that can be checked, a proper noun, a time of day, a thing that broke, a thing that was said out loud, a smell, a food. Chai counts.

---

## 4. Structure of every kind of entry

All entries follow the same skeleton so the site feels like one notebook: **hand-written tag, plain truth, small proof.**

### 4.1 Project (brewing or finished)

Four parts, in this order, no extras.

| Part | Length | Job | Voice |
|---|---|---|---|
| one-liner | ≤ 12 words | the joke, in handwriting (Caveat) | silly, lowercase, no period needed |
| the problem | 1–2 sentences | the thing that annoyed | plain, relatable, no product name |
| what it does | 2–3 sentences | explains it to a friend | zero buzzwords, verbs first |
| the story so far | dated entries | what changed, broke, got learned | diary: short, dated, honest |

Rules:
- **The problem never names the product.** If it does, it's an ad.
- **What it does uses "you" or "it", never "users" or "solution".**
- **One-liner and problem must not repeat the same joke.**
- **Timeline entries are dated and small.** Format: `mar 2025 · the demo crashed live. fixed the cache. (still scared of cache)`. A "lesson learned" is only allowed if it's embarrassing.
- Empty timeline? Leave a visible placeholder in the CMS, never a made-up entry. *Needs Dilpreet.*

Template:

```
one-liner:   <joke, handwritten>
problem:     <what was annoying. 1–2 sentences. no product name.>
what it does:<plain words. 2–3 sentences.>
story so far:
  <mon yyyy> · <what happened>
  <mon yyyy> · <what broke / what changed>
```

### 4.2 Edits (video)

Title stays close to the original upload. One line below it.

- **The line says what's in it, not how good it is.** "robert pattinson brooding to radiohead" beats "an epic cinematic edit."
- It may admit the obsession ("the batman, again. there is a pattern.") but not repeat the same gag on adjacent cards. Right now four Batman cards in a row all lean on the same "of course it works" energy. Vary it, or let some cards have no joke at all.
- A plain card with no joke is allowed. It makes the funny ones land.
- Always show: title, year, a views number only if it will be re-checked, link.

### 4.3 Explainers

- Title can stay as uploaded; the one-liner says who it's for or what scared them about the topic.
- Start from the confusion, never from the authority. "three database ideas that sound scary and really aren't" is the model.
- No "ultimate guide", no "everything you need to know".

### 4.4 Right now

2 to 4 lines, dated. Written like texts to a friend, not a status report.

- Real things only. No "exploring opportunities."
- One mundane detail per update (the wifi, the chai, the desk).
- The date is part of the joke: a stale date is honest, a missing date is not.

### 4.5 Facts

- Headline is the number or noun, in big serif: `54%`, `2 youtube channels`, `1 cat`.
- Detail is one or two sentences, first or third person consistently *within* a card.
- **Source on every fact**, small, in ink-3. If it can't be checked it doesn't ship.
- Jokes come from the data being odd, not from commentary on it.
- The detail should never end on a moral. "ranges from jagjit singh to dubstep, usually in the same hour" is the ceiling: observation, stop.

### 4.6 Words (blog)

- Post bodies stay exactly as Dilpreet wrote them.
- Only the homepage teaser and SEO description get new wording. Write them as one plain sentence of what the post argues, with the real opinion in it. No "dives into", "explores", "unpacks".
- Teaser format: `<claim, plainly>. <read time>.` Example: "most ai workflows die in month two and nobody wants to say why. 9 min."

### 4.7 Say hi

Labels describe the place, never the handle. All lowercase. No "connect with me", no "let's collaborate". Just the places.

### 4.8 Microcopy (buttons, empty states, errors, footer)

- Buttons are verbs: `watch`, `read`, `see the mess`. Never `learn more`, `explore`, `get started`.
- Empty states are a joke or an honest shrug: "nothing here yet. i'm slow." not "No items found."
- 404: one line, one doodle.
- Footer stays "made with too much chai". Don't add more footer jokes.

### 4.9 SEO and share-image text

- Meta descriptions are plain. Search is the one place to be a little boring. Keep the specific nouns (apps, video edits, essays), drop the cuteness.
- OG images: the name capitalised, the tagline, one sticky note. No more than 12 words total apart from the name.

---

## 5. Visual language: bold, but still the sketchbook

The tokens in CLAUDE.md stay as-is. This section sets how loud to use them.

### Type
- **Headings: Instrument Serif, big.** Section titles at 56–96px desktop, tight leading (about 0.95), tight tracking. Let one heading per screen be oversized on purpose.
- **Handwritten notes: Caveat**, only for one-liners, margin notes and the odd arrow. If more than ~15% of a screen is Caveat, it's a font specimen, pull back.
- **Body: Inter Tight**, 17–19px, 1.55 line height, max width ~62ch. Generous spacing is what gives the "slow" feel.
- Section labels in lowercase with a tiny red index number: `01 right now`, `02 currently brewing`.

### Colour
- **Ink on paper is the default.** Contrast stays high.
- **Red `#C8452B` is one accent per screen region**: a circled word, an arrow, a number. Not buttons, not borders.
- **Highlighter `#F6D86B`** only behind a word or phrase, like a real marker swipe, slightly off-edge. Maximum one swipe per card.
- Green `#4E7A4A` for "live" or "done" marks only.

### Layout
- Dashed rules between rows. Rows are full width and breathe: 80–120px between sections.
- Cards are polaroid or taped, **rotated between -2° and +2°**, never all the same angle, never more than 3° (past that it reads as broken).
- Hard edges and 1–2px ink borders over soft shadows. No drop-shadow-heavy UI, no gradients, no glassmorphism.
- Scribble marks (underline, circle, arrow, star) are hand-drawn SVGs with the feTurbulence roughen filter. Reuse the same five or six, don't generate new ones per page.
- Asymmetry is allowed. One element per section may sit off the grid.

### Motion (slow, on purpose)
- Fade-and-settle, 300–500ms, ease-out. Cards drop in with a tiny rotation overshoot, like taping a polaroid.
- No parallax, no scroll-jacking, no bouncing logos.
- The oneko cat and the dock are the only things that keep moving. Everything else rests when you stop.
- Respect `prefers-reduced-motion`: turn everything off except the cat sleeping.

### Doodles
- Ink strokes plus **one red accent**. Slightly wrong on purpose (a wobbly circle, a line that overshoots).
- A doodle should reference something specific to the project (black hole bending a line, a plant with a thermometer), not a generic icon.
- Real screenshots only on project pages, taped, as evidence.

---

## 6. Before and after (from the current drafts)

Keep these as calibration. Drafts in CONTENT.md are decent but still lean on a few patterns.

| Where | Draft | Issue | Try |
|---|---|---|---|
| Bio 1 | "i build small apps that fix things that annoy me, cut video edits of movies i've watched way too many times, and post the silly stuff on youtube and instagram." | long list, "and" chain, three things | "hey, i'm dilpreet. i build small apps for things that annoy me. then i cut videos of movies i've seen too many times." |
| Bio 2 | "some of it is useful. most of it was fun to make. all of it started as a 'wait, what if…' at an unreasonable hour." | rule of three, tidy closer | "some of it is useful. most of it was just fun. nearly all of it started with 'wait, what if' at a bad hour." *(keep or cut; needs Dilpreet to confirm the late-night part is true)* |
| Right now | "building three things at once, which every productivity video says not to do." | fine, but "every productivity video says" is a generic gag | "building three things at once. my notes app has opinions about this." *(only if true)* |
| Edit card | "robert pattinson brooding to radiohead. it was always going to work." | the "it was always going to work" closer is a tidy-wink | "robert pattinson brooding to radiohead." |
| Edit card | "the view from halfway down. bring tissues." | good, keep | |
| goserve | "send it code, it runs the code, nobody's laptop catches fire." | rule of three-ish, fine, but "laptop catches fire" is stock | "send it code, get output back. nothing runs on your laptop." |
| hackmate | "swipe right on someone who also wants to stay up till 4am fixing prod." | specific, good | |
| Facts hero | "i run two youtube channels: one for building, one for batman." | good, specific | |
| Facts hero | "i am easily moved." | the closing line explains the joke | stop after "54% of my letterboxd ratings are five stars." |

Pattern to notice: the best lines name something concrete and stop. The weaker ones add a last clause to get a laugh.

---

## 7. Ask-before-writing checklist

Before writing any copy, an assistant (or Dilpreet) answers these. If an answer is unknown, leave a *Needs Dilpreet* placeholder.

1. What is the one true, checkable detail this entry is about?
2. What actually annoyed Dilpreet / what broke / what was the real reason?
3. Is the joke from something that happened, or from a template?
4. Is there a source (profile, video, post, repo) I can point to?

## 8. Final pass checklist

- [ ] Lowercase body, capital-D "Dilpreet" in headings and bylines
- [ ] No em dashes, no exclamation marks, no emojis
- [ ] No word from the tells list (section 3)
- [ ] No "not X, it's Y", no triple list, no tidy closer
- [ ] At least one concrete detail per block
- [ ] Never more than one joke per block, never three in a row
- [ ] Sentences mostly 4–12 words, with variation
- [ ] The problem doesn't name the product
- [ ] Every fact has a source
- [ ] No location, employers, handles, LinkedIn/GitHub/Behance/resume
- [ ] Read it aloud. If you'd feel odd saying it to a friend, rewrite it.

---

## 9. Open questions for Dilpreet

These can't be decided from the files, so they are left open on purpose.

- Which Hinglish words does Dilpreet actually use, and how often?
- Is "i do not play jazz" true? (It is in the hero facts draft with a question mark.)
- Is "at an unreasonable hour" true for how projects start? If not, the bio line goes.
- Which is the real Instagram link? CLAUDE.md says `instagram.com/_dfordp_`, the inventory says `instagram.com/dfordp`. One of them is wrong.
- Should the older interview-style videos on the creative channel stay as explainers or go?
