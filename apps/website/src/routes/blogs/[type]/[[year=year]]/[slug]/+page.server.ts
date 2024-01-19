import { base } from '$app/paths';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { BlogMetadata } from '$lib/types/blog';

export const load = (async ({ params }) => {
  let blog = null;
  try {
    blog = await import(`../../../../../contents/blogs/${params.type}/${params.year}/${params.slug}.svx`);
  } catch {
    redirect(301, `${base}/blogs/${params.type}`);
  }
  return { content: blog.default.render().html, metadata: blog.metadata as BlogMetadata };
}) satisfies PageServerLoad;
