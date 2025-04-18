<div class="cont">
	<div class="bg"></div>
</div>

<style lang="postcss" module>
	@reference "tailwindcss";

	.cont {
		@apply h-8 w-full sm:h-32;
	}

	.bg {
		@apply absolute right-0 top-1/2 -z-10 h-full w-full -translate-y-1/2 bg-[url('/favicon.svg')] bg-cover bg-[50%_75%] bg-no-repeat opacity-5 grayscale md:w-3/4 md:bg-contain;
	}
</style>
