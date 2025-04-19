<div class="download-container">
	<p class="download-text">
		Mari buat ini resmi, daftar dan temukan solusi tepat untuk kebutuhan digitalmu
	</p>
	<div class="group">
		<a href="/plans" class="btn">Consult with Us</a>
	</div>
</div>

<style lang="postcss" module>
	@reference "tailwindcss";

	.download-container {
		@apply my-24 flex w-full flex-col items-center pt-16;
	}

	.download-text {
		@apply max-w-4xl pb-8 text-center text-3xl font-bold leading-none sm:text-4xl;
	}

	.group {
		@apply flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0 lg:justify-start;
	}

	.btn {
		@apply rounded bg-[#f0861a] px-8 py-3 text-base font-semibold transition hover:opacity-80;
	}
</style>
