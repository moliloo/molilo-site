<script lang="ts">
    import '$lib/styles/typography.css';
    import '$lib/styles/glassy-container.css'
    import { Magnifer } from '@solar-icons/svelte/Linear'
    
    export let text: string = '';
</script>

<div>
</div>

<div class="GlassContainer">
  <div class="GlassContent">
    <div class="search-input">
        <input type="serach" class="primary-text" placeholder="search" bind:value={text}>
        <Magnifer size={18}/>
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
    .GlassContainer {
        position: sticky;
        top: 0;
        z-index: 999;
    }

    .search-input {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        color: var(--text);

        input {
            background: none;
            outline: none;
            border: none;
        }
    }
</style>