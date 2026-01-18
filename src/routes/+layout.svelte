<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';

    import { theme } from '$lib/stores/ui';
    import { vhsEnabled } from '$lib/stores/ui';
    import { musicEnabled } from '$lib/stores/ui';
    import { toggleMusic } from '$lib/audio/music';

    // let clickToggleMusic = toggleMusic($musicEnabled);

    // let clickToggleTheme = document.documentElement.dataset.theme = $theme;

    // let clickToggleVhs = document.body.classList.toggle('vhs', $vhsEnabled);

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


<Navbar />

{@render children()}

<Footer />