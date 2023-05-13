import type { PageServerLoad } from './$types';

export const load = (async () => {
  const imageModules = import.meta.glob('$contents/blogs/*.svx', { eager: true });
  const blogs = [];
  for (const modulePath in imageModules) {
    let file = imageModules[modulePath];
    if (file && typeof file === 'object' && 'metadata' in file) {
      let metadata = file.metadata;
      blogs.push({ ...metadata });
    }
  }
  return { blogs };
}) satisfies PageServerLoad;
