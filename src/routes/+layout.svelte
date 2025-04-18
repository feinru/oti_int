<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/montserrat';

	import Navbar from '../components/Navbar/index.svelte';
	import Footer from '../components/Footer/index.svelte';

	let { children } = $props();
</script>

<Navbar />
<div class="cont">
	{@render children()}
</div>
<Footer />

<style lang="postcss" module>
	@reference "tailwindcss";

	:root {
		--montserrat: 'Montserrat Variable', sans-serif;
	}

	.cont {
		@apply flex-1;
	}
</style>
