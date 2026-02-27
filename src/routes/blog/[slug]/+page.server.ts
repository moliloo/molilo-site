import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const modules = import.meta.glob('$lib/content/blog/posts/*.md', { eager: true });

  const match = Object.entries(modules).find(([path]) =>
    path.endsWith(`${params.slug}.md`)
  );

  if (!match) {
    throw error(404, 'Post not found');
  }

  const [path, postModule]: [string, any] = match;

  return {
    metadata: postModule.metadata,
    slug: params.slug
  };
}