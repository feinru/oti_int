<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let activeIndex = 0;
	let scrollCount = 0;

	let aboutRef: HTMLElement;
	let whyRef: HTMLElement;
	let parentRef: HTMLElement;
	let sections: HTMLElement[] = [];

	onMount(() => {
		sections = [aboutRef, whyRef];
	});

	function handleWheel(e: WheelEvent) {
		const delta = e.deltaY;
		const atTop = activeIndex === 0;
		const atBottom = activeIndex === sections.length - 1;

		if (
			(atTop && delta < 0 && scrollCount <= 0) ||
			(atBottom && delta > 0 && scrollCount >= 1000)
		) {
			return;
		}

		e.preventDefault();
		scrollCount += delta;

		if (scrollCount >= 500 && !atBottom) {
			activeIndex++;
			scrollToSection();
		} else if (scrollCount <= 500 && !atTop) {
			activeIndex--;
			scrollToSection();
		}
	}

	function scrollToSection() {
		sections[activeIndex]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	function setActive(idx: number, count: number) {
		activeIndex = idx;
		scrollCount = count;
	}
</script>

<div class="about" id="about" bind:this={parentRef} on:wheel={handleWheel}>
	<div class="left">
		<button on:click={() => setActive(0, 0)} class="indicator" class:active={activeIndex === 0}
			>Tentang OmahTI</button
		>
		<button on:click={() => setActive(1, 500)} class="indicator" class:active={activeIndex === 1}
			>Mengapa Memilih OmahTI?</button
		>
	</div>

	<div class="md-center">
		<div class="md-percentage" style="height: {scrollCount / 10}%"></div>
	</div>
	<div class="center">
		<div class="percentage" style="width: {scrollCount / 10}%"></div>
	</div>

	<div class="right">
		{#if activeIndex === 0}
			<div
				bind:this={aboutRef}
				class="text"
				in:fade={{ duration: 500 }}
				out:fade={{ duration: 300 }}
			>
				Organisasi IT di Universitas Gadjah Mada yang berkomitmen dalam pengembangan proyek, aktif
				dalam kompetisi, dan berdedikasi untuk berbagi pengetahuan melalui kegiatan pengajaran.
			</div>
		{:else if activeIndex === 1}
			<div bind:this={whyRef} class="text" in:fade={{ duration: 500 }} out:fade={{ duration: 300 }}>
				OmahTI merupakan organisasi yang mendorong pengembangan keterampilan teknis, riset, dan soft
				skill, khususnya di bidang IT, sekaligus membuka ruang kolaborasi baik di dalam maupun di
				luar kampus untuk memperluas pengalaman.
			</div>
		{/if}
	</div>
</div>

<style lang="postcss" module>
	@reference "tailwindcss";

	.about {
		@apply flex flex-col items-center px-4 py-32 md:h-screen md:flex-row md:justify-between lg:px-8 lg:py-32 2xl:px-16;
	}

	.left {
		@apply flex flex-row justify-center gap-4 text-center md:flex-col;
	}

	.indicator {
		@apply py-1.25 mx-auto w-fit rounded px-4 text-base font-bold uppercase text-gray-500 transition hover:cursor-pointer hover:text-gray-200 md:px-8 md:py-3 md:text-lg lg:text-xl xl:text-2xl;
	}

	.active {
		@apply bg-[#f0861a] text-white;
	}

	.md-center {
		@apply relative mx-8 hidden h-3/4 w-0.5 items-center justify-center bg-white/20 md:flex;
	}

	.center {
		@apply relative mx-8 my-10 flex h-0.5 w-3/4 items-center justify-center bg-white/20 md:hidden;
	}

	.md-percentage {
		@apply absolute left-0 top-0 w-full bg-white transition-all duration-100;
	}

	.percentage {
		@apply absolute left-0 top-0 h-full bg-white transition-all duration-100;
	}

	.right {
		@apply max-w-2xl space-y-16;
	}

	.text {
		@apply flex items-center text-center text-base md:text-left lg:text-lg xl:text-xl;
	}
</style>
