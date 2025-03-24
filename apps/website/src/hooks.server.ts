import { redirect, type HandleServerError } from '@sveltejs/kit';
import { get } from 'svelte/store';

export const handleError = (() => {
  // example integration with https://sentry.io/
  throw redirect(308, '/');
}) satisfies HandleServerError;
