import { writable } from 'svelte/store';

export const theme = writable<'dark' | 'light'>('dark');

export const vhsEnabled = writable(true);

export const musicEnabled = writable(false);