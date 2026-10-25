import type { NextConfig } from 'next';

// Old dilpreetgrover.me URLs → new ones, so shared links and search results keep working.
const oldProjects: Record<string, string> = {
  onlynerds: 'onlynerds',
  hackmate: 'hackmate',
  blackhole: 'black-hole-simulation-engine',
  retold: 'retold-ai',
  openlens: 'openlens',
  sumz: 'sumz',
  goserve: 'goserve',
};

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'i.ytimg.com' }],
  },
  async redirects() {
    return [
      ...Object.entries(oldProjects).map(([from, to]) => ({
        source: `/projects/${from}`,
        destination: `/made/${to}`,
        permanent: true,
      })),
      { source: '/projects/:id', destination: '/', permanent: true },
      { source: '/projects', destination: '/', permanent: true },
      { source: '/blogs/the_ai-mirage', destination: '/words/the-ai-mirage', permanent: true },
      { source: '/blogs/:id', destination: '/words/:id', permanent: true },
      { source: '/blogs', destination: '/words', permanent: true },
      { source: '/art', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
