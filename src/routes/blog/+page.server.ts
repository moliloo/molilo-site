import { getAllPosts } from '$lib/content/blog';

export async function load() {
  const posts = await getAllPosts();

  return {
    posts: posts,
  };
}