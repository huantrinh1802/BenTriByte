import type { LayoutServerData } from './$types';
import path from 'path';
import { type BlogMetadata } from '$lib/types/blog';
export const load = (async () => {
  const modules = {
    'today-i-learn': await import.meta.glob('$contents/blogs/today-i-learn/**/*.svx', { eager: true }),
  };
  let blogs = {};
  for (const blog in modules) {
    blogs = { ...blogs, [blog]: { years: [], items: null } };
    const blogGroup: BlogMetadata[] = [];
    const years = [];
    for (const modulePath in modules[blog]) {
      const slug = path.basename(modulePath).split('.')[0];
      const file: { metadata: BlogMetadata; content: object } = modules[blog][modulePath];
      const year = modulePath.split('/').at(-2);
      if (!years.includes(year.toString())) {
        years.push(year);
      }
      if (file && typeof file === 'object' && 'metadata' in file && !file?.metadata?.draft) {
        const metadata: BlogMetadata = file?.metadata;
        blogGroup.push({ ...metadata, slug });
      }
    }
    blogGroup.sort((a, b) => a.date.localeCompare(b.date));
    blogs[blog].items = blogGroup;
    blogs[blog].years = years;
  }
  return { blogs };
}) satisfies LayoutServerData;
