import { getAllProjects } from '$lib/content/projects';

export async function load() {
  const projects = await getAllProjects();

  return {
    projects: projects,
  };
}