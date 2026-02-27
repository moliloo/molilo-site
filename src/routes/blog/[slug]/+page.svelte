<script lang="ts">
  export let data;

  const { metadata, slug } = data;

  let PostContent: any;
  const modulePromise = import(`$lib/content/blog/posts/${slug}.md`);
  modulePromise.then((mod) => {
    PostContent = mod.default;
  });
</script>

<h1>{metadata.title}</h1>
<p>{metadata.date}</p>
<p>{metadata.description}</p>

{#if PostContent}
  <svelte:component this={PostContent} />
{:else}
  <p>Loading...</p>
{/if}