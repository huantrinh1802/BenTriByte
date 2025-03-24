import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
  const blog = await import(`../../../contents/blogs/${params.slug}.svx`);
  return { blog };
}) satisfies PageLoad;
