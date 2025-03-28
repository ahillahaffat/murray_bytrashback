<script lang="ts">
    import '/src/lib/styles/app.css';
    import Header from '/src/lib/components/header.svelte';
    import Footer from '/src/lib/components/footer.svelte';

    let { children } = $props();
</script>

<div class="font-sans flex flex-col min-h-screen">
    <Header />
    <main class="flex-1">
        {@render children()}
    </main>
    <Footer />
</div>