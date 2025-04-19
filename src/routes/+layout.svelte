<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/montserrat';

	import Navbar from '../components/Navbar/index.svelte';
	import Footer from '../components/Footer/index.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		const threshold = 160;

		const detectDevTools = () => {
			const start = new Date().getTime();
			debugger;
			const delay = new Date().getTime() - start;

			const isScreenWeird =
				window.outerWidth - window.innerWidth > 160 ||
				window.outerHeight - window.innerHeight > 160;

			if (delay > threshold || isScreenWeird) {
				window.location.href = 'about:blank';
			}
		};

		const interval = setInterval(detectDevTools, 1000);

		const blockRightClick = (e: MouseEvent) => {
			e.preventDefault();
			e.stopPropagation();
		};

		const blockDevToolsKeys = (e: KeyboardEvent) => {
			if (e.key === 'F12') {
				e.preventDefault();
				e.stopPropagation();
			}

			if ((e.ctrlKey || e.metaKey) && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) {
				e.preventDefault();
				e.stopPropagation();
			}

			if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'u') {
				e.preventDefault();
				e.stopPropagation();
			}
		};

		if (window.console) {
			Object.defineProperty(console, '_commandLineAPI', {
				get: function () {
					throw new Error('Console inspection blocked');
				},
				configurable: true
			});
		}

		window.addEventListener('contextmenu', blockRightClick);
		window.addEventListener('keydown', blockDevToolsKeys);

		return () => {
			clearInterval(interval);
			window.removeEventListener('contextmenu', blockRightClick);
			window.removeEventListener('keydown', blockDevToolsKeys);
		};
	});

	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();
</script>

<Navbar />
<div class="cont">
	{#key data.pathname}
		<div
			in:fly={{ easing: cubicOut, y: 10, duration: 300, delay: 400 }}
			out:fly={{ easing: cubicIn, y: -10, duration: 300 }}
		>
			{@render children()}
		</div>
	{/key}
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
