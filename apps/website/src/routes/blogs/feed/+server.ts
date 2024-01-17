import { PUBLIC_SITE_URL } from '$env/static/public';
import type { BlogMetadata } from '$lib/types/blog';
export const prerender = true;
function generate_url(loc: string, lastmod: string, metadata: BlogMetadata) {
  return `
  <item>
    <guid>${loc}</guid>
    <title>${metadata.title}</title>
    <link>${loc}</link>
    <pubDate>${lastmod}</pubDate>
    <description>
      <![CDATA[
        <img height="100" width="100" src="${PUBLIC_SITE_URL}/${metadata.preview}"/>
        <h3>${metadata.description}</h3>
        <p>${metadata.summary}</p>
      ]]>
    </description>
  </item>`;
}
export const GET = async () => {
  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=3600',
    'Content-Type': 'application/xml',
  };
  const urls = [];
  const modules: Record<string, { metadata: BlogMetadata; content: object }> = await import.meta.glob('$contents/blogs/**/*.svx', { eager: true });
  for (const modulePath in modules) {
    const paths = modulePath.split('/');
    const slug = paths.at(-1).split('.')[0];
    const year = paths.at(-2);
    const type = paths.at(-3);
    const file: { metadata: BlogMetadata; content: object } = modules[modulePath];
    urls.push(generate_url(`${PUBLIC_SITE_URL}/blogs/${type}/${year}/${slug}`, new Date(file.metadata.date).toISOString(), file.metadata));
  }
  return new Response(
    `<rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
        <channel>
          <title>BenTri Byte Blogs</title>
          <link>${PUBLIC_SITE_URL}/blogs</link>
          <description>A blog built with SvelteKit about tech and stuff!</description>
          <image>
            <url>${PUBLIC_SITE_URL}/favicon.png</url>
            <title>BenTri Byte Icon</title>
            <link>${PUBLIC_SITE_URL}/blogs</link>
          </image>
        </channel>
        ${urls}
      </rss>`,
    { headers }
  );
};
