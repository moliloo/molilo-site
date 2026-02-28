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

    <meta name="canonical" href="https://molilo.dev">

    <meta name="description" content="Murilo Brito - Web Developer & UI/UX Designer. Portfolio featuring web projects, articles on web development, and experiences building projects.">

    <meta name="keywords" content="Murilo Brito, molilo, web developer, frontend developer, ui ux designer, portfolio developer, angular developer, svelte developer, desenvolvimento web, design de interface, ux design, frontend">

    <meta name="robots" content="index, follow">
    <meta name="author" content="Murilo Brito">

    <meta property="og:url" content="https://molilo.dev">
    <meta property="og:title" content="Murilo Brito | Web Developer & UI/UX Designer">
    <meta property="og:description" content="Portfolio and blog about web development, UI/UX, and project experiences.">
    <meta property="og:type" content="website">

    <meta name="twitter:title" content="Murilo Brito | Web Developer & UI/UX Designer">
    <meta name="twitter:description" content="Portfolio featuring web projects, articles on web development, and experiences building projects.">
</svelte:head>

{@render children()}