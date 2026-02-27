import { getAllPosts } from '$lib/content/blog';
import { getAllProjects } from '$lib/content/projects';

export async function load() {
  const posts = await getAllPosts();
  const projects = await getAllProjects();

  return {
    posts: posts.slice(0, 3),
    projects: projects
  };
}