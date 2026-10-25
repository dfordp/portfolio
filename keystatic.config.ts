import { config, collection, singleton, fields } from '@keystatic/core';

// Keystatic only runs locally (see src/app/keystatic). Everything it saves is a
// file in /content or /public/media, committed to git and deployed by Vercel.

const COVERS = [
  'ombly', 'aarchid', 'status', 'openlens', 'retold', 'blackhole', 'hackmate',
  'onlynerds', 'spotify', 'none',
].map((value) => ({ label: value, value }));

const evidence = fields.array(
  fields.object({
    caption: fields.text({ label: 'Caption (handwritten)' }),
    kind: fields.select({
      label: 'Kind',
      options: [
        { label: 'Image', value: 'image' },
        { label: 'YouTube video', value: 'youtube' },
        { label: 'Mux video', value: 'mux' },
      ],
      defaultValue: 'image',
    }),
    image: fields.image({ label: 'Image', directory: 'public/media/made', publicPath: '/media/made/' }),
    videoId: fields.text({ label: 'YouTube id or Mux playback id' }),
    link: fields.url({ label: 'Link (optional, e.g. the original post)' }),
  }),
  { label: 'Evidence', itemLabel: (p) => p.fields.caption.value || 'evidence' },
);

export default config({
  storage: { kind: 'local' },
  ui: { brand: { name: 'madebydp' } },

  singletons: {
    site: singleton({
      label: 'Site copy',
      path: 'content/site',
      format: 'yaml',
      schema: {
        tagline: fields.text({ label: 'Tagline' }),
        taglineSmall: fields.text({ label: 'Tagline, second line' }),
        friendsName: fields.text({ label: 'What friends call you', defaultValue: 'dp' }),
        formalName: fields.text({ label: 'What forms call you (gets redacted)', defaultValue: 'dilpreet' }),
        bio: fields.array(fields.text({ label: 'Line', multiline: true }), {
          label: 'Bio lines after the name line',
          itemLabel: (p) => p.value,
        }),
        rightNowUpdated: fields.date({ label: 'Right now: updated on' }),
        rightNow: fields.array(fields.text({ label: 'Line' }), { label: 'Right now', itemLabel: (p) => p.value }),
        email: fields.text({ label: 'Email' }),
        description: fields.text({ label: 'SEO description', multiline: true }),
      },
    }),
  },

  collections: {
    projects: collection({
      label: 'Projects',
      path: 'content/projects/*',
      slugField: 'title',
      format: 'yaml',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        status: fields.select({
          label: 'Where it shows',
          options: [
            { label: 'On the stove (brewing, links out)', value: 'brewing' },
            { label: 'Recent (illustrated card + story page)', value: 'recent' },
            { label: 'Older stuff (links out)', value: 'older' },
            { label: 'Hidden', value: 'hidden' },
          ],
          defaultValue: 'recent',
        }),
        order: fields.integer({ label: 'Order (lower shows first)', defaultValue: 50 }),
        stage: fields.select({
          label: 'Stamp on the story page',
          options: [
            { label: 'shipped', value: 'shipped' },
            { label: 'still going', value: 'going' },
            { label: 'shut down', value: 'shut' },
          ],
          defaultValue: 'shipped',
        }),
        year: fields.text({ label: 'Year' }),
        oneLiner: fields.text({ label: 'One-liner (handwritten)' }),
        problem: fields.text({ label: 'The problem', multiline: true }),
        whatItDoes: fields.text({ label: 'What it does', multiline: true }),
        cover: fields.select({ label: 'Illustration', options: COVERS, defaultValue: 'none' }),
        figCaption: fields.text({ label: 'Cover caption' }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Card tags', itemLabel: (p) => p.value }),
        stack: fields.array(fields.text({ label: 'Tool' }), { label: 'Made with', itemLabel: (p) => p.value }),
        link: fields.url({ label: 'Link (live site, repo, package)' }),
        linkLabel: fields.text({ label: 'Link label' }),
        published: fields.datetime({ label: 'First published' }),
        updated: fields.date({ label: 'Last updated' }),
        story: fields.array(
          fields.object({
            date: fields.text({ label: 'When (e.g. mar 2025)' }),
            text: fields.text({ label: 'What happened', multiline: true }),
          }),
          { label: 'The story so far', itemLabel: (p) => `${p.fields.date.value} · ${p.fields.text.value}` },
        ),
        evidence,
        reading: fields.array(
          fields.object({
            title: fields.text({ label: 'Title' }),
            who: fields.text({ label: 'Who / where (authors, journal, year)' }),
            url: fields.url({ label: 'Link' }),
            note: fields.text({ label: 'Why it matters (one line)' }),
          }),
          { label: 'The research behind it', itemLabel: (p) => p.fields.title.value || 'reading' },
        ),
      },
    }),

    words: collection({
      label: 'Words (blog)',
      path: 'content/words/*',
      slugField: 'title',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Published', validation: { isRequired: true } }),
        teaser: fields.text({ label: 'Teaser: <claim>. (read time is added for you)', multiline: true }),
        description: fields.text({ label: 'SEO description', multiline: true }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags', itemLabel: (p) => p.value }),
        cover: fields.image({ label: 'Cover (share image)', directory: 'public/media/words', publicPath: '/media/words/' }),
        mediumUrl: fields.url({ label: 'Medium copy (set its canonical to this page)' }),
        content: fields.markdoc({
          label: 'Post',
          options: { image: { directory: 'public/media/words', publicPath: '/media/words/' } },
        }),
      },
    }),

    videos: collection({
      label: 'Videos',
      path: 'content/videos/*',
      slugField: 'title',
      format: 'yaml',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        youtubeId: fields.text({ label: 'YouTube video id', validation: { isRequired: true } }),
        line: fields.text({ label: 'One line' }),
        group: fields.select({
          label: 'Group',
          options: [
            { label: 'Edits: long ones', value: 'long' },
            { label: 'Edits: shorts', value: 'shorts' },
            { label: 'Edits: ai experiments', value: 'ai' },
            { label: 'Explainers', value: 'explainers' },
            { label: 'Hidden (duplicates, demos, reposts)', value: 'hidden' },
          ],
          defaultValue: 'long',
        }),
        published: fields.date({ label: 'Published' }),
        views: fields.text({ label: 'Views note (e.g. 25k views)' }),
        thumb: fields.select({
          label: 'Thumbnail',
          options: [
            { label: 'Custom (maxres)', value: 'maxresdefault' },
            { label: 'Default (hq)', value: 'hqdefault' },
          ],
          defaultValue: 'maxresdefault',
        }),
      },
    }),

    songs: collection({
      label: 'Songs (dock queue)',
      path: 'content/songs/*',
      slugField: 'title',
      format: 'yaml',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        artist: fields.text({ label: 'Artist' }),
        file: fields.file({ label: 'MP3', directory: 'public/music', publicPath: '/music/', validation: { isRequired: true } }),
        order: fields.integer({ label: 'Queue position (lower plays first)', defaultValue: 50 }),
      },
    }),

    art: collection({
      label: 'Art',
      path: 'content/art/*',
      slugField: 'title',
      format: 'yaml',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        source: fields.select({
          label: 'Source',
          options: [
            { label: 'Photo (Instagram)', value: 'instagram' },
            { label: 'Design (Behance)', value: 'behance' },
          ],
          defaultValue: 'instagram',
        }),
        image: fields.image({ label: 'Image', directory: 'public/media/art', publicPath: '/media/art/', validation: { isRequired: true } }),
        link: fields.url({ label: 'Original post' }),
        order: fields.integer({ label: 'Order (lower shows first)', defaultValue: 50 }),
      },
    }),
  },
});
