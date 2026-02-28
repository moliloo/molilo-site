<script lang='ts'>
    import '$lib/styles/glassy-container.css'
    import '$lib/styles/typography.css'
    import LineHeader from '$lib/components/LineHeader.svelte';
    import '@splidejs/svelte-splide/css/core';
    import { onMount, onDestroy } from 'svelte';
	import DescriptionCard from '$lib/components/DescriptionCard.svelte'

    const stackUp = [
        'murilo brito',
    ];

    const stackDown = [
        'webdev',
        'software engineering'
    ];

    let toolList = [
        {
            title: 'angular',
            subtitle: 'Framework',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
        },
        {
            title: 'svelte',
            subtitle: 'Framework',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg',
        },
        {
            title: 'nextjs',
            subtitle: 'Framework',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
        },
        {
            title: 'figma',
            subtitle: 'Program',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
        },
        {
            title: 'blender',
            subtitle: 'Program',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg',
        },
        {
            title: 'nodejs',
            subtitle: 'runtime env',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
        },

    ]

    let devList = [
        {
            title: 'html',
            subtitle: '',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
        },
        {
            title: 'css',
            subtitle: '',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
        },
        {
            title: 'scss',
            subtitle: '',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
        },
        {
            title: 'less',
            subtitle: '',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/less/less-plain-wordmark.svg',
        },
        {
            title: 'typescript',
            subtitle: '',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
        },
        {
            title: 'javascript',
            subtitle: '',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
        },
    ];

    let languageList = [
        {
            title: 'portuguese',
            subtitle: 'mother langague',
            img: '/assets/svg/flags/br.svg',
        },
        {
            title: 'english',
            subtitle: 'intermediate',
            img: '/assets/svg/flags/gb.svg',
        },
    ];

    let workList = [
        {
            title: 'jr frontend dev',
            subtitle: 'medisigh',
            img: '/assets/svg/work/medisigh-icon.svg',
            info: 'set. 2024 - present',
            content: 'Currently work as a frontend Developer, where i am responsible for developing components and products to the platform. Focus on building reusable, scalable, and maintainable frontend components that support the platform’s overall architecture and user experience. Contributing to the UI/UX design process, using figma to design and prototype product interfaces, creating detailed screen layouts before development begins.'
        },
        {
            title: 'internship qa',
            subtitle: 'medisigh',
            img: '/assets/svg/work/medisigh-icon.svg',
            info: 'fev. 2025 - jun. 2025',
            content: 'Testing and validating features of the application, making sure the quality and usability. This oportunity makes me lear about the product and how a project works overall, learning most of the flows and how a application works and your ecosystem'
        },
        {
            title: 'intership frontend dev',
            subtitle: 'medisigh',
            img: '/assets/svg/work/medisigh-icon.svg',
            info: 'set. 2024 - fev. 2025',
            content: 'Responsible for developing visual solutions for the company’s program, with a focus on providing an intuitive and accessible user experience, ensuring ease of use and high customer satisfactionResponsible for developing visual solutions for the company’s program, with a focus on providing an intuitive and affordable user experience, ensuring ease of use and high customer satisfaction.'
        },
    ];

    let schoolList = [
        {
            title: 'software engineering',
            subtitle: 'uninter',
            img: '/assets/svg/school/uninter.svg',
            info: 'jul. 2023 - set.2026',
            content: '-'
        },
    ];

    let aboutInner: HTMLElement | null = null;
    let active: string = 'who_i_am';
    let observer: IntersectionObserver | null = null;

    function navigate(id: string) {
        const el = document.getElementById(id);
        if (el && aboutInner) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            active = id;
        }
    }

    onMount(() => {
        if (!aboutInner) return;
        const panels = (aboutInner as HTMLElement).querySelectorAll('.about-panel');
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = (entry.target as HTMLElement).id;
                        if (id) active = id;
                    }
                });
            },
            { root: aboutInner, threshold: 0.6 }
        );
        panels.forEach((p: Element) => observer?.observe(p));
    });

    onDestroy(() => {
        observer?.disconnect();
    });
</script>

<div class="about">
    <div class="about-left">
        <h1 class="section-title section-header">about_me</h1>
        <aside class="about-nav">
            <a href="#who_i_am" class="nav" on:click|preventDefault={() => navigate('who_i_am')}>
                <div class="dot" class:active={active === 'who_i_am'}></div>
                <p class="primary-text">who_i_am</p>
            </a>
            <a href="#experiences" class="nav" on:click|preventDefault={() => navigate('experiences')}>
                <div class="dot" class:active={active === 'experiences'}></div>
                <p class="primary-text">experiences</p>
            </a>
            <a href="#work_tools" class="nav" on:click|preventDefault={() => navigate('work_tools')}>
                <div class="dot" class:active={active === 'work_tools'}></div>
                <p class="primary-text">work_tools</p>
            </a>
            <a href="#languages" class="nav" on:click|preventDefault={() => navigate('languages')}>
                <div class="dot" class:active={active === 'languages'}></div>
                <p class="primary-text">languages</p>
            </a>
        </aside>
    </div>

    <div class="about-sections">
        <LineHeader labelUp={stackUp} labelDown={stackDown} />

        <div class="about-inner" bind:this={aboutInner}>
            <section class="about-panel" id="who_i_am">
                <p class="primary-text">I'm a webdesigner with a passion for learning and create funny projects. At this moment in learning 3d modeling in blender, its a high learning curve, but it’s worth, in the future i hope to attach my blender projects here too.</p>
            </section>

            <section class="about-panel" id="experiences">
                <div class="section-content">
                    <h1 class="section-header">work</h1>
                    <ul class="items-list">
                        {#each workList as card}
                            <li class="description-item"><DescriptionCard {card} expansible={true} /></li>
                        {/each}
                    </ul>
                    <h1 class="section-header">school</h1>
                    <ul class="items-list">
                        {#each schoolList as card}
                            <li class="description-item"><DescriptionCard {card} expansible={true} /></li>
                        {/each}
                    </ul>
                </div>
            </section>

            <section class="about-panel" id="work_tools">
                <div class="section-content">
                    <h1 class="section-header">tools</h1>
                    <ul class="items-list">
                        {#each toolList as card}
                            <li class="card-item"><DescriptionCard {card} /></li>
                        {/each}
                    </ul>
                </div>

                <div class="section-content">
                    <h1 class="section-header">dev</h1>
                    <ul class="items-list">
                        {#each devList as card}
                            <li class="card-item"><DescriptionCard {card} /></li>
                        {/each}
                    </ul>
                </div>
            </section>
    
            <section class="about-panel" id="languages">
                <div class="section-content">
                    <ul class="items-list">
                        {#each languageList as card}
                            <li class="card-item"><DescriptionCard {card} /></li>
                        {/each}
                    </ul>
                </div>
            </section>
        </div>
    </div>

</div>

<style>
    .about {
        display: flex;
        align-items: flex-start;
        gap: 36px;
        width: calc(100dvw - 80px);
        height: 75%;
        margin-top: 40px;
    }

    .about-left {
        flex: 0 0 18%;
        margin-left: 5%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .about-sections {
        display: flex;
        flex-direction: column;
        gap: 20px;
        height: 100%;
        width: 62%;

        .about-inner {
            flex: 1 1 auto;
            height: 90%;
            overflow-y: auto;
            scroll-snap-type: y mandatory;
            -webkit-overflow-scrolling: touch;
        }
    }

    .about-panel {
        height: 100%;
        scroll-snap-align: start;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 20px;
    }

    .about-nav {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .about-nav .nav {
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
    }

    .about-nav .dot {
        height: 8px;
        width: 8px;
        background: var(--text);
        border-radius: 50%;
        margin: 0 4px;
    }

    .about-nav .dot.active {
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

    .section-title,
    .about-nav {
        flex: 0 0 5%;
        margin-left: 5%;
        align-self: flex-start;
        background: var(--bg);
    }

    .section-content {
        width: 100%;
        flex: 1 1 auto;
        min-height: 0;
        overflow: auto;

        .items-list {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            margin: 0;
            padding: 6px;
            align-items: flex-start;
        }

        .items-list > .description-item {
            box-sizing: border-box;
            list-style: none;
            width: 98%;
        }

        .items-list > .card-item {
            box-sizing: border-box;
            list-style: none;
        }
    }

    @media (max-width: 800px) {
        .about {
            flex-direction: column;
            margin-top: 0;
        }
        .section-title,
        .about-nav,
        .about-left  {
            margin-left: 0;
            flex: 0 0 auto;
        }
        .section-content {
            margin-left: 0;
            flex: 1 0 auto;
            max-width: 100%;

            .items-list {
                gap: 5px;
            }
        }

        .about-sections {
            width: 100%;

            .about-inner {
                flex: 1 1 auto;
                height: 90%;
                overflow-y: auto;
                scroll-snap-type: none;
            }
        }
        
        .about-nav {
            flex-direction: row;
            flex-wrap: wrap;
            width: 100%;
            justify-content: space-between;
        }
    }
</style>