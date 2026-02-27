const modules = import.meta.glob('./posts/*.md', {
  eager: true
});

export function getAllProjects() {
  return Object.entries(modules).map(([path, module]: any) => {
    const slug = path.split('/').pop()?.replace('.md', '');

    return {
      slug,
      ...module.metadata
    };
  });
}