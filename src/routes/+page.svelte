<script>
	import Home from "$lib/sections/Home.svelte"
	import About from "$lib/sections/About.svelte"
	import Projects from "$lib/sections/Projects.svelte"
	import Contact from "$lib/sections/Contact.svelte"

</script>
<div class="snap-container">
    <section class="layout section" id="home"><Home /></section>
    
    <section class="layout section" id="about"><About /></section>
    
    <section class="layout section" id="projects"><Projects /></section>
    
    <section class="layout section" id="contact"><Contact /></section>
</div>

<style>
    :root[data-theme='light'] {
        .section#about {
            background-image: url('/assets/images/light-doted-bg.png');
        }
    }

    .snap-container {
        height: 100vh;
        overflow-y: scroll;
        scroll-snap-type: y mandatory;
        overflow-x: hidden;
    }
    .section {
        height: 100vh;
        scroll-snap-align: start;
        scroll-snap-stop: always;

        &#home {
            background-image: url('/assets/svg/topograph.svg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            grid-template-rows: 1fr 1fr;
        }
        
        &#about {
            background-image: url('/assets/images/dark-doted-bg.png');
        }
    }
    .layout {
        display: flex;
        justify-content: center;
        gap: 40px;

        margin: 0 auto;
        padding: 0 24px;

        height: 100%;
        align-items: center;
    }
</style>