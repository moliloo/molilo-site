<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';

    import { theme } from '$lib/stores/ui';
    import { crtEnabled } from '$lib/stores/ui';
    import { musicEnabled } from '$lib/stores/ui';
    import { toggleMusic } from '$lib/audio/music';
	import { onMount } from 'svelte'

    onMount(() => {
		const unsubscribe = theme.subscribe((value) => {
			document.documentElement.dataset.theme = value;
		});

		return unsubscribe;
	});

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


<Navbar />

{@render children()}

<Footer />