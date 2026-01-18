<script>
	import Home from "$lib/sections/Home.svelte"
	import About from "$lib/sections/About.svelte"
	import Projects from "$lib/sections/Projects.svelte"
	import Contact from "$lib/sections/Contact.svelte"

</script>
<div class="snap-container">
    <section class="section" id="home"><Home /></section>
    
    <section class="section" id="about"><About /></section>
    
    <section class="section" id="projects"><Projects /></section>
    
    <section class="section" id="contact"><Contact /></section>
</div>

<style>
    .snap-container {
        height: 100vh;
        overflow-y: scroll;
        scroll-snap-type: y mandatory;
    }
    .section {
        height: 100vh;
        scroll-snap-align: start;
        scroll-snap-stop: always;

        display: flex;
        align-items: center;
        justify-content: center;

        &#home {
            background-image: url('/assets/svg/topograph.svg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
</style>