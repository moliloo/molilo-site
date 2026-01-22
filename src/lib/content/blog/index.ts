export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  cover?: string;
}

export const posts: BlogPost[] = [
  {
    slug: '2025-01-sveltekit-scroll',
    title: 'Scroll por sessão no SvelteKit',
    description: 'Como criar scroll snap por seção no SvelteKit',
    date: '2025-01-15',
    tags: ['svelte', 'css', 'scroll'],
  },
  {
    slug: '2025-01-sveltekit-scroll',
    title: 'Scroll por sessão no SvelteKit',
    description: 'Como criar scroll snap por seção no SvelteKit',
    date: '2025-01-15',
    tags: ['svelte', 'css', 'scroll'],
  },
  {
    slug: '2025-01-sveltekit-scroll',
    title: 'Scroll por sessão no SvelteKit',
    description: 'Como criar scroll snap por seção no SvelteKit',
    date: '2025-01-15',
    tags: ['svelte', 'css', 'scroll'],
  },
  {
    slug: '2025-01-sveltekit-scroll',
    title: 'Scroll por sessão no SvelteKit',
    description: 'Como criar scroll snap por seção no SvelteKit',
    date: '2025-01-15',
    tags: ['svelte', 'css', 'scroll'],
  }
];