<script lang="ts">
	import { Menu, X } from 'lucide-svelte';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
	const navigation = $state([
		{
			name: 'Transform Your Bussiness',
			href: 'https://forms.gle/evx2evXN3fGJLNDX8'
		},
		{ name: 'Our Plans', href: '/plans' },
		{ name: 'Partner with Us', href: '/partner' }
	]);

	let isScrolling = $state(false),
		headerEl: null | HTMLElement = null;

	let showMobile = $state(false);

	const handleScroll = () => {
		const headerHeight = headerEl?.offsetHeight ?? 0;
		isScrolling = window.scrollY > headerHeight;
	};

	$effect(() => {
		handleScroll();
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<header class="header" bind:this={headerEl}>
	<nav aria-label="Global" class="navbar">
		<div class="brand-container">
			<a href="/" class="brand-link">
				<span class="sr-only">OmahTI</span>
				<img src="/brand.png" class="brand-image" alt="OmahTI Logo" />
			</a>
		</div>
		<div class="links">
			{#each navigation as item}
				<a href={item.href} class="link">{item.name}</a>
			{/each}
		</div>

		{#if !showMobile}
			<button onclick={() => (showMobile = !showMobile)} class="btn">
				<div
					class="relative"
					transition:scale={{ duration: 200, easing: cubicOut }}
					style="transform-origin: center;"
				>
					<Menu class="icon" />
				</div>
			</button>
		{/if}

		{#if showMobile}
			<button onclick={() => (showMobile = !showMobile)} class="btn">
				<div
					class="relative"
					transition:scale={{ duration: 200, easing: cubicOut }}
					style="transform-origin: center;"
				>
					<X class="icon" />
				</div>
			</button>
		{/if}
	</nav>
	{#if showMobile}
		<div
			class="mobile"
			in:scale={{ easing: cubicOut, duration: 250 }}
			out:scale={{ easing: cubicIn, duration: 250 }}
		>
			<div class="inside">
				{#each navigation as item}
					<a href={item.href} class="mb-link">
						{item.name}
					</a>
				{/each}
			</div>
		</div>
	{/if}
	<div class="bg" class:scrolling={isScrolling}></div>
</header>

<style lang="postcss" module>
	@reference "tailwindcss";

	.header {
		@apply sticky inset-x-0 top-0 z-50;
	}

	.navbar {
		@apply relative z-50 flex items-center justify-between px-4 py-6 2xl:px-16;
	}

	.brand-container {
		@apply flex lg:flex-1;
	}

	.brand-link {
		@apply -m-1.5 p-1.5;
	}

	.brand-image {
		@apply h-6 w-auto;
	}

	.links {
		@apply hidden lg:flex lg:gap-x-12;
	}

	.link {
		@apply text-sm font-semibold capitalize;
	}

	.bg {
		@apply transform-3d pointer-events-none absolute left-0 top-0 z-40 h-[200%] w-full origin-[50%_0] scale-y-0 transition-transform duration-500 ease-out;
		background-image: linear-gradient(
			rgba(12, 12, 12, 1) 0%,
			rgba(12, 12, 12, 0.3) 50%,
			rgba(12, 12, 12, 0.15) 65%,
			rgba(12, 12, 12, 0.075) 75.5%,
			rgba(12, 12, 12, 0.037) 82.85%,
			rgba(12, 12, 12, 0.019) 88%,
			rgba(12, 12, 12, 0) 100%
		);
	}

	.bg.scrolling {
		@apply scale-100;
	}

	.btn {
		@apply absolute right-4 top-4 block rounded-md p-2 lg:hidden;
	}

	.icon {
		@apply h-6 w-6 text-gray-700;
	}

	.mobile {
		@apply absolute right-4 top-16 z-40 rounded border border-[#efeeec14] bg-[#1a1a1a] shadow-xl lg:hidden;
	}

	.inside {
		@apply flex flex-col px-4 py-3;
	}

	.mb-link {
		@apply rounded px-4 py-3 text-base font-medium text-gray-100 transition duration-200 hover:bg-white/5;
	}
</style>
