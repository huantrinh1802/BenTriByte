import type { PageServerLoad } from './$types';
import BenResume from '$contents/ben-trinh/resume.json';
import AmberResume from '$contents/amber-duong/resume.json';
export const load = (async ({ params }) => {
  switch (params.slug) {
    case 'ben-trinh':
      return { resume: BenResume };
    case 'amber-duong':
      return { resume: AmberResume };
    default:
      return { resume: BenResume };
  }
}) satisfies PageServerLoad;
