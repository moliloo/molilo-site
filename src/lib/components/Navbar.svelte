<script lang="ts">
    import { onMount } from 'svelte';
    import { Moon, Sun, Tv, VolumeSmall, VolumeCross } from '@solar-icons/svelte/Linear'
    import { Tv as TvBold } from '@solar-icons/svelte/Bold'
	import headerDetail from '$lib/assets/svg/header_detail.svg';
	import '$lib/styles/typography.css';

    import { theme, crtEnabled, musicEnabled } from '$lib/stores/ui';
	import { toggleMusic } from '$lib/audio/music'

    import '$lib/styles/glassy-container.css'

    function toggleTheme() {
        theme.update(t => (t === 'dark' ? 'light' : 'dark'));
    }


    onMount(() => {
        const unsub = musicEnabled.subscribe((enabled) => {
            toggleMusic(enabled);
        });

        return unsub;
    });

    onMount(() => {
        const unsub = crtEnabled.subscribe((enabled) => {
            document.body.classList.toggle('crt', enabled);
        });

        return unsub;
    });
</script>

<div class="GlassContainer">
  <div class="GlassContent">
    <nav class="navbar">
        <img class="detail" src="{headerDetail}" alt="">
        <h1 class="header-title">molilo</h1>

        <div class="nav">
            <a href="#home" class="primary-text">home</a>
            <a href="#home" class="primary-text">about_me</a>
            <a href="#home" class="primary-text">projects</a>
            <a href="#home" class="primary-text">contact</a>
        </div>

        <div class="controls">
            <button on:click={toggleTheme}>
                {#if $theme === 'dark'}
                    <Moon size={36} />
                {:else}
                    <Sun size={36} />
                {/if}
            </button>

            <button on:click={() => crtEnabled.update(v => !v)}>
                {#if $crtEnabled}
                    <TvBold size={36} />
                {:else}
                    <Tv size={36} />
                {/if}
            </button>

            <button on:click={() => musicEnabled.update(m => !m)}>
                {#if $musicEnabled}
                    <VolumeSmall size={36} />
                {:else}
                    <VolumeCross size={36} />
                {/if}
            </button>
        </div>
    </nav>
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
    .navbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 16px;

        .header-title {
            padding-left: 64px;
            pointer-events: none;
        }

        .detail {
            position: absolute;
            top: -20px;
            left: -24px;
            width: 100px;
            height: 100px;
            object-fit: cover;
            z-index: 0;
            pointer-events: none;
        }

        .nav {
            display: flex;
            gap: 40px;

            a {
                text-decoration: none;
            }
        }
        
        .controls {
            display: flex;
            gap: 28px;

            button {
                background: transparent;
                border: none;
                cursor: pointer;
                color: var(--text);
            }
        }
    }

    .GlassContainer {
        position: absolute;
        top: 0;
        left: 50%;
        margin: 20px auto;
        width: 100%;
        width: calc(100dvw - 80px);
        transform: translateX(-50%);
    }
</style>