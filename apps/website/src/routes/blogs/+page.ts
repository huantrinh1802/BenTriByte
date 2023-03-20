import type { PageLoad } from './$types';

export const load = (async () => {
  const slug = 'first-blog';
  const blog = await import(`../../contents/blogs/${slug}.svx`);
  return { blog };
}) satisfies PageLoad;
