<a href="/" class="right">
	<div class="group">
		<span class="btn">Lihat detail</span>
	</div>
	<div class="cont">
		<div class="wrapper">
			<img class="img" src="projects/1.png" alt="" />
		</div>
		<div class="wrapper">
			<img class="img" src="projects/2.png" alt="" />
		</div>
		<div class="wrapper">
			<img class="img" src="projects/3.png" alt="" />
		</div>
		<div class="wrapper">
			<img class="img" src="projects/4.png" alt="" />
		</div>
	</div>
</a>

<style lang="postcss" module>
	@reference "tailwindcss";

	.right {
		@apply relative mt-12 translate-x-3 overflow-hidden rounded transition hover:opacity-80 lg:mt-0;
	}

	.group {
		@apply absolute bottom-10 right-10;
	}

	.btn {
		@apply rounded bg-[#f0861a] px-6 py-2.5 text-sm font-semibold transition hover:opacity-80;
	}

	.cont {
		@apply grid max-w-2xl grid-cols-2;
	}

	.wrapper {
		@apply aspect-square overflow-hidden;
	}

	.img {
		@apply h-full w-full object-cover;
	}
</style>
