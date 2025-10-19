import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => {
  const baseUrl = 'https://www.jeromepogeant.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/private/',
          '/api/',
          '/*.js$',
          '/*.css$',
          '/*.map$',
          '/*.tmp$',
          '/*.temp$',
          '/.env',
          '/.git/',
          '/.github/',
          '/.vscode/',
          '/_next/',
        ],
        crawlDelay: 10,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
};

export default robots;
