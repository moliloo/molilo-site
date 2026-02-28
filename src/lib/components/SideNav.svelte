<script lang="ts">
    import { onMount } from 'svelte';
    import { sidebarOpen, theme, crtEnabled, musicEnabled } from '$lib/stores/ui';
    import { CloseSquare, SquareTopDown, Moon, Sun, Tv, VolumeSmall, VolumeCross } from '@solar-icons/svelte/Linear'
    import { Tv as TvBold } from '@solar-icons/svelte/Bold'
	import { toggleMusic } from '$lib/audio/music'

    function close() {
        sidebarOpen.set(false);
    }

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

<!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
<aside class="sidenav" role="dialog" aria-modal="true" aria-label="Main navigation">
    <button class="close-btn" aria-label="Close menu" on:click={close}><CloseSquare size={36}/></button>

    <nav class="nav-links">
        <a href="#home" class="primary-text" on:click={close}>home</a>
        <a href="#about" class="primary-text" on:click={close}>about_me</a>
        <a href="#projects" class="primary-text" on:click={close}>projects</a>
        <a href="#contact" class="primary-text" on:click={close}>contact</a>
        <a href="/blog" class="primary-text" on:click={close}>blog <SquareTopDown size={20}/></a>
    </nav>

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
</aside>

<style>
    .sidenav {
        position: fixed;
        top: 0;
        right: 0;
        width: 260px;
        height: 94dvh;
        background: var(--bg);
        box-shadow: -3px 0 15px rgba(0,0,0,0.3);
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        z-index: 1000;
        animation: slideIn 0.3s ease forwards;
    }

    .close-btn {
        align-self: flex-end;
        padding: 0;
        background: none;
        border: none;
        cursor: pointer;
        color: var(--text);
        padding: 4px;
        margin-right: 24px;
        margin-top: 8px;
    }

    .nav-links {
        display: flex;
        flex-direction: column;
        gap: 20px;

        a {
            display: flex;
            align-items: center;
            gap: 20px;
            text-decoration: none;
            border-bottom: 1px solid var(--hint-text);
            padding-bottom: 20px;
        }
    }

    .controls {
        margin-top: auto;
        display: flex;
        justify-content: space-between;

        button {
            background: transparent;
            border: none;
            cursor: pointer;
            color: var(--text);
        }
    }

    @keyframes slideIn {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }
</style>