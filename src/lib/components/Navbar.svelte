<script>
    import { onMount } from 'svelte';
    import { Moon, Sun, Tv, VolumeSmall, VolumeCross } from '@solar-icons/svelte/Linear'
    import { Tv as TvBold } from '@solar-icons/svelte/Bold'
	import headerDetail from '$lib/assets/svg/header_detail.svg';
	import '$lib/styles/typography.css';

    import { theme, crtEnabled, musicEnabled } from '$lib/stores/ui';
	import { toggleMusic } from '$lib/audio/music'

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
        --corner-radius: 20px;
        --base-strength: 20px;
        --extra-blur: 2px;
        --softness: 12px;
        --tint-amount: 0;
        --tint-saturation: 2;
        --tint-hue: 180deg;
        --contrast: 1;
        --brightness: 1;
        --invert: 10%;

        --total-strength: calc(var(--base-strength) + var(--extra-blur));
        --edge-width: calc(0.3px + (var(--softness) * 0.1));
        --emboss-width: calc((var(--softness) * 0.38));
        --refraction-width: calc((var(--softness) * 0.3));

        position: relative;
        overflow: visible;
        pointer-events: none;
    }
    .GlassContent {
        position: relative;
        display: block;
        z-index: 100;
        overflow: hidden;
        border-radius: var(--corner-radius);
        pointer-events: auto;
    }
    .GlassMaterial {
        position: absolute;
        inset: 0;
        z-index: 1;
        overflow: visible;
        pointer-events: none;
    }
    .GlassMaterial:after {
        content: '';
        display: block;
        position: absolute;
        inset: 0;
        z-index: 3;
        overflow: hidden;
        border-radius: var(--corner-radius);
        background-color: rgba(255, 255, 255, 0);
    }
    .GlassMaterial > div {
        position: absolute;
        inset: 0;
        box-sizing: border-box;
        border-radius: var(--corner-radius);
        z-index: 2;
        overflow: hidden;
    }
    .GlassMaterial .GlassEdgeReflection {
        z-index: 4;
        margin: calc(var(--total-strength) * -1);
        border-radius: calc(var(--corner-radius) + var(--total-strength));
        backdrop-filter: blur(var(--total-strength)) brightness(1.2) saturate(1.2);
        padding: var(--edge-width);
        border: var(--total-strength) solid transparent;
        mask: 
            linear-gradient(white 0 0) padding-box,
            linear-gradient(white 0 0) content-box;
        mask-composite: exclude, exclude;
    }
    .GlassMaterial .GlassEmbossReflection {
        backdrop-filter: blur(calc(var(--total-strength) * 1.5)) invert(0.25) brightness(1.11) saturate(1.2) hue-rotate(-10deg) contrast(2.3);
        padding: var(--emboss-width);
        border: 0 solid transparent;
        mask: 
            linear-gradient(white 0 0) padding-box,
            linear-gradient(white 0 0) content-box;
        mask-composite: exclude, exclude;
    }
    .GlassMaterial .GlassRefraction {
        backdrop-filter: invert(0.1) brightness(1.2) contrast(1.5);
        padding: var(--refraction-width);
        border: calc(var(--emboss-width)) solid transparent;
        mask: 
            linear-gradient(white 0 0) padding-box,
            linear-gradient(white 0 0) content-box;
        mask-composite: exclude, exclude;
    }
    .GlassMaterial .GlassBlur {
        backdrop-filter: blur(var(--extra-blur)) brightness(1.25);
        border-radius: calc(var(--corner-radius) - (var(--emboss-width) + var(--refraction-width)));
        margin: calc(var(--emboss-width) + var(--refraction-width));
    }
    .GlassMaterial .BlendLayers {
        z-index: 3;
        backdrop-filter: blur(calc((var(--softness) * 0.2) + (var(--extra-blur) * 0.2)));
    }
    .GlassMaterial .BlendEdge {
        z-index: 8;
        backdrop-filter: blur(calc(var(--edge-width) * 0.4)) contrast(1.6) saturate(1.5);
    }
    .GlassContainer:before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 20;
        display: block;
        border-radius: var(--corner-radius);
        backdrop-filter: invert(var(--invert));
    }
    .GlassMaterial:before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 11;
        display: block;
        border-radius: var(--corner-radius);
        padding: 1px;
        border: 0 solid transparent;
        background: linear-gradient(155deg, hsla(0, 0%, 100%, 0.15) 0%, hsla(0, 0%, 0%, 0.2) 50%, hsla(0, 0%, 100%, 0.15) 100%);
        backdrop-filter: invert(0.15) opacity(1);
        mask: 
            linear-gradient(white 0 0) padding-box,
            linear-gradient(white 0 0) content-box;
        mask-composite: exclude, exclude;
    }
    .GlassMaterial .Highlight {
        z-index: 12;
        display: block;
        border-radius: var(--corner-radius);
        padding: 1px;
        border: 0 solid transparent;
        backdrop-filter: brightness(1.2) contrast(1.6) saturate(1.2) opacity(1);
        mask: 
            linear-gradient(white 0 0) padding-box,
            linear-gradient(white 0 0) content-box;
        mask-composite: exclude, exclude;
    }
</style>