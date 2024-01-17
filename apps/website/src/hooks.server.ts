import { redirect, type HandleServerError } from '@sveltejs/kit';

export const handleError = (() => {
  // example integration with https://sentry.io/
  redirect(308, '/');
}) satisfies HandleServerError;

export async function handle({ event, resolve }) {
  const response = await resolve(event, {
    preload: ({ type, path }) => false,
  });

  return response;
}
