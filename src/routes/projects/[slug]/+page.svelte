<script lang="ts">
    import '$lib/styles/typography.css';
    import '$lib/styles/elements.css';
	import BlogNavbar from '$lib/components/BlogNavbar.svelte'

    export let data;

    const { metadata, slug } = data;

    let PostContent: any;
    const modulePromise = import(`$lib/content/blog/posts/${slug}.md`);
    modulePromise.then((mod) => {
        PostContent = mod.default;
    });
</script>

<BlogNavbar />

<div class="blog-body">
    <h1>{metadata.title}</h1>
    <p>{metadata.date}</p>
    <p>{metadata.description}</p>


    <div class="blog-content">
        {#if PostContent}
        <svelte:component this={PostContent} />
        {:else}
        <p>Loading...</p>
        {/if}
    </div>
</div>

<style>
    .blog-body {
        max-width: 1000px;
        margin: 0 auto;
        padding-bottom: 30px;

        .blog-content {
            :first-child {
                margin-top: 0;
            }
        }
    }


</style>