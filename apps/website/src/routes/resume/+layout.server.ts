import type { LayoutServerLoad } from './$types';
import BenResume from '$contents/ben-trinh/resume.json';
import AmberResume from '$contents/amber-duong/resume.json';
export const load = (() => {
  return { 'ben-trinh': BenResume, 'amber-duong': AmberResume };
}) satisfies LayoutServerLoad;
