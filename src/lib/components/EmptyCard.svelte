<script lang="ts">
    import '$lib/styles/typography.css';
    import '$lib/styles/glassy-container.css'
</script>

<div class="GlassContainer">
  <div class="GlassContent">
    <article class="empty-card">
        <h3 class="blog-card-title">No content yet</h3>

        <div class="circles-container">
            <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="105" cy="52.5" r="36" stroke="currentColor" stroke-width="3"/>
                <circle cx="75" cy="75" r="73.5" stroke="currentColor" stroke-width="3"/>
                <circle cx="75" cy="93.75" r="54.75" stroke="currentColor" stroke-width="3"/>
            </svg>
        </div>
    </article>
  </div>
  <div class="GlassMaterial">
    <div class="GlassEdgeReflection"></div>
    <div class="GlassEmbossReflection"></div>
    <div class="GlassRefraction"></div>
    <div class="GlassBlur"></div>
    <div class="BlendLayers"></div>
    <div class="BlendEdge"></div>
    <div class="Highlight"></div>
  </div>
</div>

<style>
    .empty-card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;

        &::before {
            content: '';
            position: absolute;

            left: -40%;
            right: -40%;
            bottom: -40%;
            top: 70%;

            background: var(--text);

            mask-image: linear-gradient(
                to top,
                black 0%,
                black 40%,
                transparent 100%
            );

            opacity: 1;
            filter: blur(60px);
            z-index: -1;

            transition: opacity 0.4s ease;
            animation: gradientMove 6s linear infinite;
        }
    }

    .circles-container {
        color: var(--text);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 150px;
        width: 150px;
    }
</style>