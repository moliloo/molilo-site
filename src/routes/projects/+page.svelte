<script lang='ts'>
	import BlogNavbar from "$lib/components/BlogNavbar.svelte"

    import '$lib/styles/typography.css';
    import '$lib/styles/glassy-container.css'
	import SearchBar from "$lib/components/SearchBar.svelte"
	import ProjectCard from "$lib/components/ProjectCard.svelte"

    export let data;

    let searchText: string = '';

    $: filteredProjects = data.projects.filter((project: any) =>
        project.title.toLowerCase().includes(searchText.toLowerCase()) ||
        project.tags.some((tag: any) =>
            tag.toLowerCase().includes(searchText.toLowerCase())
        )
    );
</script>

<BlogNavbar />

<div class="blog-section">
    <h1 class="section-title section-header">projects</h1>

    <div class="search-bar-container">
        <SearchBar bind:text={searchText} />
    </div>

    <div class="blog-list">
        {#each filteredProjects as project}
            <ProjectCard {project} />
        {/each}
    </div>
</div>

<style>
    .blog-section {
        margin: 0 auto;
        padding-top: 140px;
        width: calc(100dvw - 80px);

        .section-title {
            position: fixed;
            margin-top: 80px;
            margin-left: 100px;
        }

        .search-bar-container {
            max-width: 600px;
            margin: 0 auto;
            margin-bottom: 40px;
        }

        .blog-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
            max-width: 600px;
            margin: 0 auto;
            height: 60dvh;
            overflow-y: auto;
            overflow-x: hidden;
        }
    }
</style>

