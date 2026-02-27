<script>
    import Footer from '$lib/components/Footer.svelte';
    import '$lib/styles/glassy-container.css'
    import '$lib/styles/typography.css'
    import LineHeader from '$lib/components/LineHeader.svelte';
    import '@splidejs/svelte-splide/css/core';
	import DescriptionCard from '$lib/components/DescriptionCard.svelte'

    const stackUp = [
        'social medias',
        'e-mail',
    ];

    const stackDown = [
        'repositories',
    ];

    const contactList = [
        {
            title: 'molilo_o',
            subtitle: 'twitter',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg',
        },
        {
            title: 'Murilo Brito',
            subtitle: 'linkedin',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg',
        },
        {
            title: 'moliloo',
            subtitle: 'gitlab',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg',
        },
        {
            title: 'moliloo',
            subtitle: 'github',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
        },
        {
            title: 'contact@molilo.dev',
            subtitle: 'e-mail',
            img: '',
        },
    ]
</script>

<div class="contact">
    <h1 class="section-title section-header left-section">contact</h1>
    <div class="contact-section">
        <LineHeader labelUp={stackUp} labelDown={stackDown} />

        <div class="section-content">
            <ul class="items-list">
                {#each contactList as card}
                    <li class="card-item"><DescriptionCard {card} /></li>
                {/each}
            </ul>
        </div>
    </div>
</div>

<div class="footer">
    <Footer />
</div>

<style>
    .contact {
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

    .footer {
        position: absolute;
        bottom: 0;
        left: 50%;
        margin: 20px auto;
        width: calc(100dvw - 80px);
        transform: translateX(-50%);
    }

    .contact-section {
        display: flex;
        flex-direction: column;
        gap: 20px;
        height: 100%;
        width: 62%;

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
    }
</style>