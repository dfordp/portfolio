import type { Metadata, Viewport } from 'next';
import { Instrument_Serif, Caveat, Inter_Tight } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import Dock from '@/components/Dock';
import Oneko from '@/components/Oneko';
import { getSite } from '@/lib/content';
import { SITE_URL } from '@/lib/seo';
import './globals.css';

const serif = Instrument_Serif({ weight: '400', subsets: ['latin'], variable: '--font-serif' });
const hand = Caveat({ weight: ['500', '700'], subsets: ['latin'], variable: '--font-hand' });
const sans = Inter_Tight({ weight: ['400', '500'], subsets: ['latin'], variable: '--font-sans' });

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSite();
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: 'DP · madebydp', template: '%s · DP' },
    description: site.description,
    authors: [{ name: 'Dilpreet Grover', url: SITE_URL }],
    alternates: { canonical: '/', types: { 'application/rss+xml': '/words/rss.xml' } },
    openGraph: { siteName: 'madebydp', locale: 'en_US', type: 'website', url: SITE_URL },
    twitter: { card: 'summary_large_image', creator: '@dfordp11' },
  };
}

export const viewport: Viewport = { themeColor: '#f3ede0' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${hand.variable} ${sans.variable}`}>
      <body>
        <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
          <defs>
            <pattern id="hatch" patternUnits="userSpaceOnUse" width="5" height="5" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="5" stroke="#2B2722" strokeWidth="1" strokeOpacity=".45" />
            </pattern>
            <pattern id="dots" patternUnits="userSpaceOnUse" width="6" height="6">
              <circle cx="1.5" cy="1.5" r=".9" fill="#2B2722" fillOpacity=".4" />
            </pattern>
          </defs>
          <filter id="rough">
            <feTurbulence type="fractalNoise" baseFrequency=".035" numOctaves="2" seed="4" />
            <feDisplacementMap in="SourceGraphic" scale="3" />
          </filter>
          <filter id="rough2">
            <feTurbulence type="fractalNoise" baseFrequency=".02" numOctaves="2" seed="7" />
            <feDisplacementMap in="SourceGraphic" scale="1.6" />
          </filter>
        </svg>
        {children}
        <Dock />
        <Oneko />
        <Analytics />
      </body>
    </html>
  );
}
