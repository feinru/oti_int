<div class="download-container">
	<p class="download-text">Download aplikasi kami di</p>
	<div class="store-buttons">
		<img src="/AppStore.svg" alt="App Store" class="store-logo" />
		<img src="/PlayStore.svg" alt="Play Store" class="store-logo" />
	</div>
</div>

<style lang="postcss" module>
	@reference "tailwindcss";

	.download-container {
		@apply flex w-full flex-col items-center pt-16;
	}

	.download-text {
		@apply pb-8 text-center font-bold text-blue-500;
	}

	.store-buttons {
		@apply flex justify-center space-x-6 pb-12 md:justify-start;
	}

	.store-logo {
		@apply h-12 transition-transform hover:scale-105 hover:cursor-pointer;
	}
</style>
