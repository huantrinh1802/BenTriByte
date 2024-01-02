import type { LayoutServerLoad } from '../$types';

export const load = (async ({ parent, params }) => {
  const blogGroups = await parent();
  // const blogsModules = import.meta.glob(`$contents/blogs/${params.type}/*.svx`, { eager: true });
  // const blogs = [];
  // for (const modulePath in blogsModules) {
  //   const slug = path.basename(modulePath).split('.')[0]
  //   const file: any = blogsModules[modulePath];
  //   if (file && typeof file === 'object' && 'metadata' in file) {
  //     const metadata: object = file?.metadata;
  //     blogs.push({ ...metadata, slug });
  //   }
  // }
  return { blogs: blogGroups['blogs'][params['type']], type: params.type };
  // return { blogs };
}) satisfies LayoutServerLoad;
