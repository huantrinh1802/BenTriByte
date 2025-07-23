import { writable, get } from 'svelte/store';

export const sidebarOpened = writable(false);

export function toggleSidebar() {
  console.log(sidebarOpened);
  sidebarOpened.set(!get(sidebarOpened));
}
