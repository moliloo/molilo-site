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
        'murilo brito',
    ];

    const stackDown = [
        'webdev',
        'software engineering'
    ];
</script>

<div class="about">
    <h1 class="section-title section-header">about_me</h1>
    <div class="section-content">
        <div class="line-container">
            <LineHeader labelUp={stackUp} labelDown={stackDown} />
        </div>
    </div>
    <aside class="about-nav row-2">
        <a href="#who_i_am" class="nav">
            <div class="dot active"></div>
            <p class="primary-text">who_i_am</p>
        </a>
        <a href="#experiences" class="nav">
            <div class="dot"></div>
            <p class="primary-text">experiences</p>
        </a>
        <a href="#languages" class="nav">
            <div class="dot"></div>
            <p class="primary-text">languages</p>
        </a>
    </aside>
    <div class="section-content row-2">
        <p class="primary-text">I'm a webdesigner with a passion for learning and create funny projects. At this moment in learning 3d modeling in blender, its a high learning curve, but it’s worth, in the future i hope to attach my blender projects here too.</p>
    </div>
</div>

<style>
    .about {
        display: grid;
        grid-template-columns: repeat(13, 5%);
        gap: 40px;
        width: calc(100dvw - 80px);
    }
    .about {
        grid-row: 1;
    }

    .row-2 {
        grid-row: 2;
    }

    .about-nav {
        display: flex;
        flex-direction: column;
        gap: 5px;

        .nav {
            display: flex;
            align-items: center;
            gap: 10px;
            text-decoration: none;
        }

        .dot {
            height: 8px;
            width: 8px;
            background: var(--text);
            border-radius: 50%;
            margin: 0 4px;

            &.active {
                height: 16px;
                width: 16px;
                position: relative;
                margin: 0;


                background: linear-gradient(
                        120deg,
                        var(--detail-dark-red) 0%,
                        var(--detail-dark-red) 25%,

                        var(--detail-red) 30%,

                        var(--detail-yellow) 50%,

                        var(--detail-blue) 60%,
                        var(--detail-blue) 100%
                    );

                    filter: blur(1px);

                    transition: opacity 0.4s ease;
                    animation: gradientMove 6s linear infinite;
            }
        }
    }

    .section-title,
    .about-nav {
        grid-column: 2 / 4;
        align-self: start;
        background: var(--bg);
    }

    .section-content {
        grid-column: 4 / 13;

        .line-container,
        .primary-text {
            background: var(--bg);
        }
    }
</style>