<script lang="ts">
    import '$lib/styles/typography.css';
    import { slide } from 'svelte/transition';

    export let card: any;
    export let expansible = false;

    let open: boolean = false;

    function toggle() {
        if (!expansible) return;
        open = !open;
    }

    function onKey(e: KeyboardEvent) {
        if (!expansible) return;
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle();
        }
    }
</script>

<div class="description-card" class:expansible={expansible} class:open={open}>
    {#if expansible}
        <div
            class="inner-card expansible"
            role="button"
            tabindex="0"
            aria-expanded={open}
            on:click={() => toggle()}
            on:keydown={onKey}
        >

        {#if card.img}
            <img class="icon" src="{card.img}" alt="{card.title} icon">
        {/if}

        <div class="card-label">
            <h1 class="card-title">{card.title}</h1>
            {#if card.subtitle}
                <p class="card-subtitle">{card.subtitle}</p>
            {/if}
        </div>

        {#if expansible}
            <div transition:slide class="card-info">
                <p class="card-subtitle">
                    {#if card.info}
                        {card.info}
                    {:else}
                        -
                    {/if}
                </p>
                <p class="card-tip">click to expand</p>
            </div>
        {/if}
        </div>
    {:else}
        <div class="inner-card">
            {#if card.img}
                <img class="icon" src="{card.img}" alt="{card.title} icon">
            {/if}

            <div class="card-label">
                <h1 class="card-title">{card.title}</h1>
                {#if card.subtitle}
                    <p class="card-subtitle">{card.subtitle}</p>
                {/if}
            </div>
        </div>
    {/if}

    {#if expansible}
        {#if open}
            <div transition:slide class="card-content">
                <p class="card-subtitle">
                    {card.content}
                </p>
            </div>
        {/if}
    {/if}
</div>

<style>
    .description-card {
        display: block;
        justify-content: center;
        align-items: center;
        border: 6px solid #0000;
        border-radius: 12px;
        background: transparent;
        animation: 8s rotate linear infinite;
        transition: all 0.3s ease;

        &:hover {
            background: linear-gradient(transparent, transparent) padding-box, linear-gradient(
                var(--angle),
                var(--detail-dark-red) 0%,

                var(--detail-red) 30%,

                var(--detail-yellow) 50%,

                var(--detail-blue) 100%
            ) border-box;
        }

        &.expansible {
            width: 100%;

            &.open .inner-card {
                border-radius: 10px 10px 0 0;
            }

            .inner-card {
                width: -webkit-fill-available;

                .card-info {
                    margin-left: auto;
                    justify-items: end;
                }
            }
        }
    }

    .inner-card {
        display: flex;
        align-items: center;
        gap: 10px;
        border-radius: 10px;
        padding: 10px;
        background: var(--bg);
        position: relative;
        transition: all 0.2s ease;
        cursor: default;

        &.expansible {
            cursor: pointer;
        }

        .icon {
            width: 64px;
            height: 64px;
        }
        
        width: fit-content;
    }

    .description-card .card-info,
    .description-card .card-content {
        margin-left: auto;
        padding: 8px 10px;
        background: var(--bg);
        border-radius: 8px;
    }

    .description-card.expansible.open .card-content {
        border-radius: 0 0 10px 10px;
    }

    @media (max-width: 800px) {
        .inner-card {
            flex-wrap: wrap;
            padding: 5px;

            .icon {
                width: 32px;
                height: 32px;
            }

            &.expansible {

                .card-info {
                    display: none;
                }
            }

            .card-label {
                flex-wrap: wrap;


                .card-title {
                    font-size: 20px;
                }

                .card-subtitle {
                    font-size: 14px;
                }
            }
        }
    }

    @keyframes rotate {
        to {
            --angle: 360deg;
        }
    }

    @property --angle {
        syntax: "<angle>";
        initial-value: 0deg;
        inherits: false;
    }

    @keyframes spinColors {
        to { --angle: 480deg; }
    }
</style>