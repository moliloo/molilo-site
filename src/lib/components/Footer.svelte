<script>
    import '$lib/styles/glassy-container.css'
    import '$lib/styles/typography.css'
</script>

<div class="GlassContainer">
  <div class="GlassContent">
    <div class="footer">
        <p class="primary-text">molilo © 2026</p>
    </div>
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
    .footer {
        display: flex;
        justify-content: center;
        height: 40px;
        align-items: center;
        padding-top: 8px;
        padding-bottom: 12px;

        background-image: linear-gradient(
            90deg,
            var(--detail-dark-red) 0%,
            var(--detail-dark-red) 25%,

            var(--detail-red) 25%,
            var(--detail-red) 50%,

            var(--detail-yellow) 50%,
            var(--detail-yellow) 75%,

            #4677E0 75%,
            #4677E0 100%
        );

        background-size: 100% 6px;
        background-repeat: no-repeat;
        background-position: bottom;
    }
</style>