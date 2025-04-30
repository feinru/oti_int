<script lang="ts">
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
	</nav>
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
		@apply text-sm font-semibold capitalize text-white;
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
</style>
