// Markdown twins for AI agents (DualMark). proxy.ts rewrites agent requests and
// `<page>.md` URLs here; people never see this path.
import { createDualmarkRouteHandler } from '@dualmark/nextjs';
import { getProjects, getWords } from '@/lib/content';
import { homeMarkdown, postMarkdown, projectMarkdown } from '@/lib/markdown';
import { SITE_URL } from '@/lib/seo';

const handler = createDualmarkRouteHandler({
  siteUrl: SITE_URL,
  staticPages: [{ pattern: '/', render: homeMarkdown }],
  parameterizedRoutes: [
    {
      pattern: '/made/[slug]',
      getStaticPaths: async () => (await getProjects()).filter((p) => p.status === 'recent').map((p) => ({ params: { slug: p.slug } })),
      render: async ({ params }) => (await projectMarkdown(params.slug)) ?? '',
    },
    {
      pattern: '/words/[slug]',
      getStaticPaths: async () => (await getWords()).map((w) => ({ params: { slug: w.slug } })),
      render: async ({ params }) => (await postMarkdown(params.slug)) ?? '',
    },
  ],
});

export const GET = handler.GET;
export const generateStaticParams = handler.generateStaticParams;
export const dynamic = 'force-static';
