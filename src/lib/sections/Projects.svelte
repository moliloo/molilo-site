<script lang='ts'>
    import '$lib/styles/glassy-container.css'
    import '$lib/styles/typography.css'
    import LineHeader from '$lib/components/LineHeader.svelte';
    import SearchBar from '$lib/components/SearchBar.svelte';
    import ProjectCard from '$lib/components/ProjectCard.svelte';
    import '@splidejs/svelte-splide/css/core';

    let searchText: string = '';

    export let projects;

    $: filteredProjects = projects.filter((project: any) =>
        project.title.toLowerCase().includes(searchText.toLowerCase()) ||
        project.tags.some((tag: any) =>
            tag.toLowerCase().includes(searchText.toLowerCase())
        )
    );

    const stackUp = [
        'sites',
        'ui/ux',
    ];

    const stackDown = [
        '3d',
        'foundryvtt projects'
    ];

    // let projects = [
    //     {
    //         title: 'Lorem Ispum Pudim',
    //         img: 'https://images-ext-1.discordapp.net/external/Pd1GbfH6m13Z6BAqsqos47NfkpvFZHtYIkyq7JFfngE/https/pbs.twimg.com/media/HCDst7BbUAASsiP.jpg%3Alarge?format=webp&width=630&height=945',
    //         tags: [
    //             'tag 1',
    //             'tag 2',
    //             'tag 3',
    //             'tag 4',
    //         ]
    //     },
    //     {
    //         title: 'Lorem Ispum Amassado',
    //         img: 'https://images-ext-1.discordapp.net/external/Pd1GbfH6m13Z6BAqsqos47NfkpvFZHtYIkyq7JFfngE/https/pbs.twimg.com/media/HCDst7BbUAASsiP.jpg%3Alarge?format=webp&width=630&height=945',
    //         tags: [
    //             'tag 1',
    //             'tag 2',
    //             'tag 3',
    //             'tag 4',
    //         ]
    //     },
    //     {
    //         title: 'Lorem Ispum',
    //         img: 'https://images-ext-1.discordapp.net/external/Pd1GbfH6m13Z6BAqsqos47NfkpvFZHtYIkyq7JFfngE/https/pbs.twimg.com/media/HCDst7BbUAASsiP.jpg%3Alarge?format=webp&width=630&height=945',
    //         tags: [
    //             'tag 1',
    //             'tag 2',
    //             'tag 3',
    //             'tag 4',
    //         ]
    //     },
    //     {
    //         title: 'Lorem Ispum',
    //         img: 'https://images-ext-1.discordapp.net/external/Pd1GbfH6m13Z6BAqsqos47NfkpvFZHtYIkyq7JFfngE/https/pbs.twimg.com/media/HCDst7BbUAASsiP.jpg%3Alarge?format=webp&width=630&height=945',
    //         tags: [
    //             'tag 1',
    //             'tag 2',
    //             'tag 3',
    //             'tag 4',
    //         ]
    //     },
    //     {
    //         title: 'Lorem Ispum',
    //         img: 'https://images-ext-1.discordapp.net/external/Pd1GbfH6m13Z6BAqsqos47NfkpvFZHtYIkyq7JFfngE/https/pbs.twimg.com/media/HCDst7BbUAASsiP.jpg%3Alarge?format=webp&width=630&height=945',
    //         tags: [
    //             'tag 1',
    //             'tag 2',
    //             'tag 3',
    //             'tag 4',
    //         ]
    //     },
    //     {
    //         title: 'Lorem Ispum',
    //         img: 'https://images-ext-1.discordapp.net/external/Pd1GbfH6m13Z6BAqsqos47NfkpvFZHtYIkyq7JFfngE/https/pbs.twimg.com/media/HCDst7BbUAASsiP.jpg%3Alarge?format=webp&width=630&height=945',
    //         tags: [
    //             'tag 1',
    //             'tag 2',
    //             'tag 3',
    //             'tag 4',
    //         ]
    //     },
    // ]
</script>

<div class="projects">
    <h1 class="section-title section-header left-section">projects</h1>
    <div class="project-section">
        <LineHeader labelUp={stackUp} labelDown={stackDown} />

        <div class="project-inner">
            <SearchBar bind:text={searchText} />

            <div class="project-list">
                {#each filteredProjects as project}
                    <ProjectCard project={project} />
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    .projects {
        display: flex;
        align-items: flex-start;
        gap: 36px;
        width: calc(100dvw - 80px);
        height: 75%;
        margin-top: 40px;
    }
    .left-section {
        flex: 0 0 18%;
        margin-left: 5%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .project-section {
        display: flex;
        flex-direction: column;
        gap: 20px;
        height: 100%;
        width: 62%;

        .project-inner {
            flex: 1 1 auto;
            height: 90%;
            overflow-y: auto;
            scroll-snap-type: y mandatory;
            -webkit-overflow-scrolling: touch;
            overflow-x: hidden;

            .project-list {
                display: flex;
                flex-wrap: wrap;
                width: 100%;
                gap: 40px;
                justify-content: space-between;
                margin-top: 40px;

                :global(.card-link)  {
                    min-width: calc(50% - 20px);
                }
            }
        }
    }

    @media (max-width: 800px) {
        .projects {
            flex-direction: column;
            margin-top: 0;
            gap: 18px;
        }

        .section-title{
            margin-left: 0;
            flex: 0 0 auto;
        }

        .project-section {
            width: 100%;

            .project-inner {
                height: 90%;
                overflow-y: auto;
                scroll-snap-type: none;
                -webkit-overflow-scrolling: touch;

                .project-list {
                    flex-direction: column;
                    gap: 20px;
                    margin-top: 20px;
                    padding-bottom: 80px;
                }
        }

        }
    }
</style>