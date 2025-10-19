import { BlogPostMetadata, getPostsMeta } from '@/src/utils/blog';

const GET = () => {
  const posts = getPostsMeta();
  const baseUrl = 'https://jeromepogeant.com';

  const contactEmail
    // eslint-disable-next-line @stylistic/max-len
    = '&#x68;&#x65;&#x6C;&#x6C;&#x6F;&#x40;&#x6A;&#x65;&#x72;&#x6F;&#x6D;&#x65;&#x70;&#x6F;&#x67;&#x65;&#x61;&#x6E;&#x74;&#x2E;&#x63;&#x6F;&#x6D;';

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog de Jérôme - Développement Web</title>
    <description>Articles, guides et retours d'expérience sur le développement d'applications web scalables
    , les technologies modernes et l'architecture logicielle.</description>
    <link>${baseUrl}/blog</link>
    <atom:link href="${baseUrl}/blog/feed.xml" rel="self" type="application/rss+xml" />
    <language>fr-FR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <webMaster>${contactEmail} (Jérôme Pogeant)</webMaster>
    <managingEditor>${contactEmail} (Jérôme Pogeant)</managingEditor>
    <category>Web Development</category>
    <image>
      <url>${baseUrl}/favicon.svg</url>
      <title>Blog de Jérôme</title>
      <link>${baseUrl}/blog</link>
      <width>32</width>
      <height>32</height>
    </image>
    ${posts
      .map(
        (post: BlogPostMetadata) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>${contactEmail} (Jérôme Pogeant)</author>
      <category><![CDATA[${post.tags.join(', ')}]]></category>
    </item>`,
      )
      .join('')}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
};

export { GET };
