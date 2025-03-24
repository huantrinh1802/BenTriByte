import type { Skill } from '$lib/components/SkillBanner.svelte';

export type Content = {
  percentage: number;
  title: Skill;
  contents: string[];
};

export type Resume = {
  profile: {
    name: string;
    fullName: string;
    job: string;
    image: string;
    themeColour: string;
    showPhoto: boolean;
  };
  summary: string;
  contacts: Array<{
    href: string;
    type: string;
    text: string;
    printText?: string;
  }>;
  experiences: Array<{
    title: string;
    subtitle: string;
    timeline: string;
    location: string;
    summary: string;
    tasks: Array<string>;
  }>;
  educations: Array<{
    title: string;
    timeline: string;
    location: string;
  }>;
  skills: {
    languages: {
      title: string;
      professional: Array<{
        percentage: number;
        title: string;
        contents: Array<string>;
      }>;
      casual: Array<{
        percentage: number;
        title: string;
        contents: Array<string>;
      }>;
    };
    techs: {
      title: string;
      professional: Array<{
        percentage: number;
        title: string;
        contents: Array<string>;
      }>;
      casual: Array<{
        percentage: number;
        title: string;
        contents: Array<string>;
      }>;
    };
    clouds: {
      title: string;
      professional: Array<{
        percentage: number;
        title: string;
        contents: Array<string>;
      }>;
      casual: Array<{
        percentage: number;
        title: string;
        contents: Array<string>;
      }>;
    };
  };
  languages: Array<{
    title: string;
    percentage: number;
  }>;
  references: Array<{
    name: string;
    title: string;
    company: string;
    mobile: {
      href: string;
      text: string;
    };
    email: {
      href: string;
      text: string;
    };
  }>;
};
