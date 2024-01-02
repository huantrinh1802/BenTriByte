export function convertKebabToTitle(str: string) {
  return str
    .toLowerCase()
    .replace(/\b\w/g, (s) => s.toUpperCase())
    .replaceAll('-', ' ');
}
