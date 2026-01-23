<script lang="ts">
    import '$lib/styles/typography.css'

    export let labelUp: string[] = [];
    export let labelDown: string[] = [];
</script>

<div class="line-header">
    <div class="label-line">
        {#each labelUp as label}
            <p class="primary-text">{label}</p>
        {/each}
    </div>
    <div class="line-detail"></div>
    <div class="label-line">
        {#each labelDown as label}
            <p class="primary-text">{label}</p>
        {/each}
    </div>
</div>

<style>
    .label-line {
        display: flex;
        justify-content: space-between;
    }

    .line-detail {
        height: 6px;
        background-image: linear-gradient(
            90deg,
            var(--detail-dark-red) 0%,
            var(--detail-dark-red) 25%,

            var(--detail-red) 25%,
            var(--detail-red) 50%,

            var(--detail-yellow) 50%,
            var(--detail-yellow) 75%,

            var(--detail-blue) 75%,
            var(--detail-blue) 100%
        );

        background-size: 100% 6px;
        background-repeat: no-repeat;
        background-position: bottom;
    }
</style>