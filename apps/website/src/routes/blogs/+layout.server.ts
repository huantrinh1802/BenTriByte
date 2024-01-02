import type { PageServerLoad } from './[type]/$types';
import path from 'path';
import { type BlogMetadata } from '$lib/types/blog';
export const load = (async () => {
  const modules = {
    'today-i-learn': await import.meta.glob('$contents/blogs/today-i-learn/*.svx', { eager: true }),
  };
  let blogs = {};
  for (const blog in modules) {
    blogs = { ...blogs, [blog]: null };
    const blogGroup: BlogMetadata[] = [];
    for (const modulePath in modules[blog]) {
      const slug = path.basename(modulePath).split('.')[0];
      const file: any = modules[blog][modulePath];
      if (file && typeof file === 'object' && 'metadata' in file) {
        const metadata: BlogMetadata = file?.metadata;
        blogGroup.push({ ...metadata, slug });
      }
    }
    blogGroup.sort((a, b) => a.date.localeCompare(b.date));
    blogs[blog] = blogGroup;
  }
  return { blogs };
}) satisfies PageServerLoad;
