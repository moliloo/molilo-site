import { writable } from 'svelte/store';

export const theme = writable<'dark' | 'light'>('dark');

export const crtEnabled = writable(false);

export const musicEnabled = writable(false);