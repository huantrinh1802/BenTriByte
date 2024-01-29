import type { PageLoad } from './$types';
export const load = (async ({ parent, params }) => {
  const data = await parent();
  switch (params.slug) {
    case 'ben-trinh':
      return { resume: data['ben-trinh'] };
    case 'amber-duong':
      return { resume: data['amber-duong'] };
    default:
      return { resume: data['ben-trinh'] };
  }
}) satisfies PageLoad;
