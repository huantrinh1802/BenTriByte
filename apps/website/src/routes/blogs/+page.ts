import type { PageData } from './$types';

export const load = (async ({ parent }) => {
  const blogGroups = await parent();
  console.log(blogGroups);
  return { blogGroups };
}) satisfies PageData;
