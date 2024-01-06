/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
  return /^\d{4}$/.test(param);
}
