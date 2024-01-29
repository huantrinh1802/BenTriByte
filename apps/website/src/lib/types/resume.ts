import type { Skill } from '$lib/components/SkillBanner.svelte';

export type Content = {
  percentage: number;
  title: Skill;
  contents: string[];
};

export type Resume = {
  profile: object;
  contacts: object;
  skills: { [key: string]: { title: string; professional: Content[]; casual: Content[] } };
  experiences: object;
  educations: object;
  languages: object;
};
