import type { LayoutServerData } from './$types';
import { type BlogMetadata } from '$lib/types/blog';
export const load = (async () => {
  const modules: Record<string, { metadata: BlogMetadata; content: object }> = await import.meta.glob('$contents/blogs/**/*.svx', { eager: true });
  let blogs = {};
  for (const modulePath in modules) {
    const paths = modulePath.split('/');
    const slug = paths.at(-1).split('.')[0];
    const year = paths.at(-2);
    const type = paths.at(-3);
    const file: { metadata: BlogMetadata; content: object } = modules[modulePath];
    if (type in blogs) {
      if (!(year in blogs[type].years)) {
        blogs[type].years.push(year);
      }
      if (file && typeof file === 'object' && 'metadata' in file && !file?.metadata?.draft) {
        const metadata: BlogMetadata = file?.metadata;
        blogs[type].items.push({ ...metadata, slug, type });
      }
    } else {
      if (file && typeof file === 'object' && 'metadata' in file && !file?.metadata?.draft) {
        const metadata: BlogMetadata = file?.metadata;
        blogs = { ...blogs, [type]: { years: [year], items: [{ ...metadata, slug, type }] } };
      }
    }
  }
  return { blogs };
}) satisfies LayoutServerData;
