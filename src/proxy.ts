// DualMark: AI agents (and anyone asking for text/markdown or `<page>.md`) get the
// markdown twin from /md/...; browsers get the normal page plus a Link header.
import { createDualmarkMiddleware } from '@dualmark/nextjs';
import type { NextRequest } from 'next/server';
import { SITE_URL } from '@/lib/seo';

const dualmark = createDualmarkMiddleware({ siteUrl: SITE_URL });

export default function proxy(request: NextRequest) {
  return dualmark(request);
}

// Static literal (Next reads it at build time). Skips Next internals, the internal
// /md namespace, the CMS, API routes, media files and the generated text files.
export const config = {
  matcher: ['/((?!_next/|favicon.ico|icon.png|md/|keystatic|api/|media/|Dilpreet.jpeg|oneko.gif|Akeboshi.mp3|llms.txt|sitemap.xml|robots.txt|words/rss.xml|.*opengraph-image).*)'],
};
