import type { LayoutServerData } from './$types';
import { type BlogMetadata } from '$lib/types/blog';
export const load = (async () => {
  const modules: Record<string, { metadata: BlogMetadata; content: object }> = await import.meta.glob(
    '$contents/blogs/**/*.svx',
    { eager: true }
  );
  const blogs = [];
  for (const modulePath in modules) {
    const paths = modulePath.split('/');
    const type = paths.at(-3);
    if (!(type in blogs)) {
      blogs.push(type);
    }
  }
  return { blogs };
}) satisfies LayoutServerData;
