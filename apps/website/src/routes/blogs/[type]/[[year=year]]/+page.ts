import { redirect } from '@sveltejs/kit';
import type { PageData } from './$types';
import { browser } from '$app/environment';
import { base } from '$app/paths';
import { PUBLIC_SITE_URL } from '$env/static/public';

export const load = (async ({ parent, params }) => {
  const blogGroups = await parent();
  if (params?.year) {
    const blogs = blogGroups['blogs'][params['type']].items.filter((blog) => {
      const splittedDate = blog.date.split('-');
      return splittedDate[0] == params.year;
    });
    return { blogs, type: params.type, year: params?.year, years: blogGroups['blogs'][params['type']].years };
  } else {
    throw redirect(302, `${params.type}/${blogGroups['blogs'][params['type']].years.at(-1)}`);
  }
}) satisfies PageData;
