<script lang="ts">
    import { onMount } from 'svelte';
    import { Moon, Sun, Tv, VolumeSmall, VolumeCross, SidebarMinimalistic, SquareTopDown } from '@solar-icons/svelte/Linear'
    import { Tv as TvBold } from '@solar-icons/svelte/Bold'
	import headerDetail from '$lib/assets/svg/header_detail.svg';
	import '$lib/styles/typography.css';

    import { theme, crtEnabled, musicEnabled } from '$lib/stores/ui';
	import { toggleMusic } from '$lib/audio/music'

    import '$lib/styles/glassy-container.css'

    import { sidebarOpen } from '$lib/stores/ui';

    function toggleTheme() {
        theme.update(t => (t === 'dark' ? 'light' : 'dark'));
    }

    function toggleSidebar() {
        sidebarOpen.update(v => !v);
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

        <div class="nav desktop-only">
            <a href="#home" class="primary-text">home</a>
            <a href="#about" class="primary-text">about_me</a>
            <a href="#projects" class="primary-text">projects</a>
            <a href="#contact" class="primary-text">contact</a>
            <a href="/blog" class="primary-text">blog <SquareTopDown size={20} /></a>
        </div>

        <div class="controls desktop-only">
            <button on:click={toggleTheme}>
                {#if $theme === 'dark'}
                    <Sun size={36} />
                {:else}
                    <Moon size={36} />
                {/if}
            </button>

            <button on:click={() => crtEnabled.update(v => !v)}>
                {#if $crtEnabled}
                    <TvBold size={36} />
                {:else}
                    <Tv size={36} />
                {/if}
            </button>
            {#if false}
            <button on:click={() => musicEnabled.update(m => !m)}>
                {#if $musicEnabled}
                    <VolumeSmall size={36} />
                {:else}
                    <VolumeCross size={36} />
                {/if}
            </button>
            {/if}
        </div>
        
        <div class="controls mobile-only">
            <button class="hamburger " on:click={toggleSidebar} aria-label="Open menu">
                <SidebarMinimalistic size={36} />
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
                display: flex;
                align-items: center;
                gap: 10px;
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

    .controls.mobile-only {
        display: none;
    }

    .desktop-only {
        display: flex;
    }

    @media (max-width: 1100px) {
        .navbar {
            .nav,
            .controls {
                gap: 16px;
            }
        }
    }

    @media (max-width: 900px) {
        .nav.desktop-only,
        .controls.desktop-only {
            display: none;
        }
        .controls.mobile-only {
            display: flex;
            flex-direction: column;
            gap: 4px;
            cursor: pointer;
            padding: 4px;
        }
    }
</style>