export const SITE_URL = 'https://madebydp.com';
export const SAME_AS = [
  'https://www.youtube.com/@dilpreetgrover11',
  'https://www.youtube.com/@dfordp',
  'https://www.instagram.com/_dfordp_',
  'https://x.com/dfordp11',
  'https://letterboxd.com/dfordp/',
];

export function personJsonLd(description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dilpreet Grover',
    alternateName: 'DP',
    url: SITE_URL,
    image: `${SITE_URL}/Dilpreet.jpeg`,
    description,
    sameAs: SAME_AS,
  };
}
