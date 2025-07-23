import { base } from '$app/paths';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { BlogMetadata } from '$lib/types/blog';

export const load = (async ({ params }) => {
  let blog = null;
  try {
    blog = await import(`../../../../../contents/blogs/${params.type}/${params.year}/${params.slug}.svx`);
  } catch {
    redirect(301, `${base}/blogs/${params.type}`);
  }
  return { content: blog.default, metadata: blog.metadata as BlogMetadata };
}) satisfies PageLoad;
