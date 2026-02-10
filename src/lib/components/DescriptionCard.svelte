<script lang="ts">
    import '$lib/styles/typography.css';

    export let card;
    export let expansible = false;
</script>

<div class="description-card" class:expansible={expansible}>
    <div class="inner-card">
        <img class="icon" src="{card.img}" alt="{card.title} icon">
    
        <div class="card-label">
            <h1 class="card-title">{card.title}</h1>
            {#if card.subtitle}
                <p class="card-subtitle">{card.subtitle}</p>
            {/if}
        </div>
        {#if expansible}
            <div class="card-info">
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
</div>

<style>
    .description-card {
        display: flex;
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