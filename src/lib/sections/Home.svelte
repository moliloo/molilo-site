<script lang='ts'>
    import '$lib/styles/glassy-container.css'
    import '$lib/styles/typography.css'
    import LineHeader from '$lib/components/LineHeader.svelte';
    import BlogCard from '$lib/components/BlogCard.svelte';
    import { posts } from '$lib/content/blog';
    import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
    import { SquareAltArrowLeft, SquareAltArrowRight } from '@solar-icons/svelte/Linear'
    import '@splidejs/svelte-splide/css/core';
	import EmptyCard from '$lib/components/EmptyCard.svelte'

    const stackUp = [
        'webdev',
        'ui/ux designer',
    ];

    const stackDown = [
        'angular',
        'svelte',
        'ts'
    ];

    let slideOptions = {
        rewind: true,
        autoWidth: true,
        gap   : '40px',
        pagination: false,
        type   : 'loop',
        perPage: 3,
        perMove: 1,
    }
</script>

<div class="sections">
    <div class="home">
        <h1 class="section-title section-header">home</h1>
        <div class="section-content">
            <LineHeader labelUp={stackUp} labelDown={stackDown} />
            <p class="primary-text">Hi, I'm Murilo, welcome to my place, feel free to look around.</p>
        </div>
    </div>

    <div class="blog-post">
    <h1 class="section-title section-header">blog posts</h1>
    <div class="section-content blog-grid">
        {#if posts.length === 0}
            <EmptyCard />
        {:else}
            <Splide options={slideOptions} hasTrack={ false } aria-label="Blog List">
                <SplideTrack>
                    {#each posts.slice(0, 6) as post}
                        <SplideSlide aria-label="Blog Post">
                            <BlogCard {post} />
                        </SplideSlide>
                    {/each}
                </SplideTrack>

                <div class="splide__arrows">
                    <button class="splide__arrow splide__arrow--prev">
                        <SquareAltArrowLeft size={48}/>
                    </button>
                    <button class="splide__arrow splide__arrow--next">
                        <SquareAltArrowRight size={48}/>
                    </button>
                </div>
            </Splide>
        {/if}
    </div>

    </div>

</div>

<style>
    .sections {
        display: flex;
        flex-direction: column;
        gap: 40px;
        width: calc(100dvw - 80px);
    }

    .home,
    .blog-post {
        display: flex;
        align-items: flex-start;
        gap: 40px;
        width: 100%;
    }

    .section-title {
        flex: 0 0 5%;
        margin-left: 5%;
        align-self: flex-start;
    }

    .section-content {
        flex: 0 0 70%;
        margin-left: 5%;
    }

    .blog-post .blog-grid {
        width: 100%;
    }

    .splide__arrows {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    .splide__arrow {
        background: transparent;
        border: none;
        cursor: pointer;
    }

    .section-content p {
        margin-top: 40px;
    }

    @media (max-width: 800px) {
        .home,
        .blog-post {
            flex-direction: column;
        }
        .section-title {
            margin-left: 0;
            flex: 0 0 auto;
        }
        .section-content {
            margin-left: 0;
            flex: 1 0 auto;
            max-width: 100%;
        }
    }
</style>