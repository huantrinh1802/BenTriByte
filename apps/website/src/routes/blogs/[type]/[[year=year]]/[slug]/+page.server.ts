import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
  const blog = await import(`../../../../../contents/blogs/${params.type}/${params.year}/${params.slug}.svx`);
  return { content: blog.default.render().html, metadata: blog.metadata };
}) satisfies PageServerLoad;
