<script lang="ts">
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { Keyboard, Mousewheel, Autoplay } from 'swiper/modules';
	import 'swiper/css';
	import Card from './Card.svelte';
	import Member from './Member.svelte';

	let swiperContainer: HTMLElement;

	const slides = ['/misc/1.jpg', '/misc/1.jpg', '/misc/1.jpg', '/misc/1.jpg'];

	onMount(() => {
		new Swiper(swiperContainer, {
			modules: [Keyboard, Mousewheel, Autoplay],
			slidesPerView: 1,
			speed: 600,
			loop: true,
			mousewheel: true,
			keyboard: true,
			autoplay: {
				delay: 5000
			},
			breakpoints: {
				640: {
					slidesPerView: 2,
					spaceBetween: 20
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 18
				}
			}
		});
	});
</script>

<div class="collaborate">
	<div class="cont">
		<h2 class="heading">Don’t Miss the Chance to Collaborate With Us!</h2>
		<p class="desc">
			Mari membuat dampak dengan kolaborasi projek berbasis teknologi dengan OmahTI yang terpercaya
			dan berpengalaman di banyak projek
		</p>
	</div>
	<div class="wrapper">
		<div class="swiper" bind:this={swiperContainer}>
			<div class="swiper-wrapper">
				{#each slides as slide}
					<div class="swiper-slide">
						<div class="slide-content">
							<img src={slide} alt="Slide" />
						</div>
					</div>
				{/each}
			</div>
		</div>

		<a href="#opportunities" class="btn mt-12">Get Started</a>
	</div>
</div>
<Card />
<Member />

<style lang="postcss" module>
	@reference "tailwindcss";

	.collaborate {
		@apply mx-auto max-w-screen-2xl px-4 py-16 pt-8 lg:px-8 lg:py-32 lg:pt-24 2xl:px-16;
	}

	.cont {
		@apply mx-auto mb-8 max-w-screen-md text-center lg:mb-12;
	}

	.wrapper {
		@apply w-full space-y-8;
	}

	.heading {
		@apply mb-4 text-4xl font-extrabold tracking-tight;
	}

	.desc {
		@apply mb-8 text-center text-base text-gray-300 opacity-90;
	}

	.swiper-slide {
		@apply flex w-[300px] items-center justify-center;
	}

	.slide-content {
		@apply aspect-[3_/_2] w-full overflow-hidden rounded-xl;
	}

	.slide-content img {
		@apply block h-full w-full object-cover object-[50%_20%];
	}

	.btn {
		@apply relative mx-auto flex w-max items-center justify-center rounded bg-[#f0861a] px-6 py-3 font-medium transition hover:opacity-80;
	}
</style>
