<script>
    import Footer from '$lib/components/Footer.svelte';
</script>

<div class="footer">
    <Footer />
</div>

<style>
    .footer {
        position: absolute;
        bottom: 0;
        left: 50%;
        margin: 20px auto;
        width: calc(100dvw - 80px);
        transform: translateX(-50%);
    }
</style>