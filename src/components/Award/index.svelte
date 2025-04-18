<script lang="ts">
	import Card from './Card.svelte';

	let containerRef: HTMLElement;

	function handleWheel(e: WheelEvent) {
		e.preventDefault();
		containerRef.scrollLeft += e.deltaY;
	}
</script>

<div class="award">
	<h1 class="title">Penghargaan Kami</h1>
	<div class="cont" bind:this={containerRef} onwheel={handleWheel}>
		<div class="wrapper">
			<Card />
		</div>
	</div>
</div>

<style lang="postcss" module>
	@reference "tailwindcss";

	.award {
		@apply relative px-4 py-16 pt-8 lg:py-32 lg:pl-8 lg:pr-0 2xl:pl-16 2xl:pr-0;
	}

	.title {
		@apply text-base font-bold md:text-lg lg:text-xl xl:text-2xl;
	}

	.cont::-webkit-scrollbar {
		display: none;
	}

	.cont {
		@apply overflow-x-auto py-8;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.wrapper {
		@apply flex w-max gap-6 px-4;
	}
</style>
